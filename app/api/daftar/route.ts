import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Perantara untuk formulir pendaftaran.
 *
 * Sebelumnya browser memanggil webhook n8n langsung sambil membawa
 * NEXT_PUBLIC_N8N_API_KEY — artinya kuncinya ikut terkirim ke setiap pengunjung
 * dan bisa dibaca siapa saja dari bundel JavaScript. Sekarang kunci itu hanya
 * ada di server dan tidak pernah meninggalkan proses ini.
 *
 * Perlu variabel lingkungan (tanpa awalan NEXT_PUBLIC_):
 *   N8N_WEBHOOK_URL
 *   N8N_API_KEY      (opsional, tergantung konfigurasi n8n)
 */

const GENERIC_ERROR = "Pendaftaran gagal diproses. Coba lagi beberapa saat lagi.";

const LIMITS = { count: 5, windowMs: 10 * 60 * 1000 };
const attemptsByIp = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const previous = (attemptsByIp.get(ip) ?? []).filter((t) => now - t < LIMITS.windowMs);
  previous.push(now);
  attemptsByIp.set(ip, previous);

  // Buang catatan lama supaya Map tidak tumbuh terus.
  if (attemptsByIp.size > 5000) {
    for (const [key, timestamps] of attemptsByIp) {
      if (timestamps.every((t) => now - t >= LIMITS.windowMs)) attemptsByIp.delete(key);
    }
  }

  return previous.length > LIMITS.count;
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "tidak-diketahui";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Terlalu banyak percobaan. Coba lagi dalam beberapa menit." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 400 });
  }

  // Umpan bot: kolom tersembunyi yang hanya terisi oleh pengisi otomatis.
  // Balas seolah berhasil agar bot tidak belajar bahwa ia tertangkap.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const companyName = clean(body.companyName, 120);
  const email = clean(body.email, 160).toLowerCase();
  const name = clean(body.name, 120);
  const phone = clean(body.phone, 30);

  if (companyName.length < 2) {
    return NextResponse.json({ message: "Nama usaha wajib diisi." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ message: "Alamat email belum benar." }, { status: 400 });
  }

  const webhook = process.env.N8N_WEBHOOK_URL;
  if (!webhook) {
    console.error("[daftar] N8N_WEBHOOK_URL belum diatur");
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 503 });
  }

  try {
    const controller = AbortSignal.timeout(12_000);
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.N8N_API_KEY ? { "x-api-key": process.env.N8N_API_KEY } : {}),
      },
      body: JSON.stringify({
        companyName,
        ownerEmail: email,
        ownerName: name || undefined,
        phone: phone || undefined,
        source: "landing-page",
      }),
      signal: controller,
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      console.error("[daftar] webhook membalas", upstream.status, text);
      // Teruskan HANYA pesan yang aman & pendek (mis. "Email sudah terdaftar").
      // Badan balasan bisa memuat detail internal, jadi jangan diteruskan mentah.
      let message = GENERIC_ERROR;
      try {
        const parsed = JSON.parse(text);
        const candidate = parsed?.message || parsed?.error;
        if (typeof candidate === "string" && candidate.length > 0 && candidate.length <= 200) {
          message = candidate;
        }
      } catch {
        // bukan JSON — pakai pesan umum
      }
      const status = upstream.status >= 400 && upstream.status < 500 ? upstream.status : 502;
      return NextResponse.json({ message }, { status });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[daftar] gagal menghubungi webhook", error);
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 502 });
  }
}
