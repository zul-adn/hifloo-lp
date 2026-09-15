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

const GAGAL = "Pendaftaran gagal diproses. Coba lagi beberapa saat lagi.";

const BATAS = { jumlah: 5, jendelaMs: 10 * 60 * 1000 };
const jejak = new Map<string, number[]>();

function lewatBatas(ip: string) {
  const sekarang = Date.now();
  const sebelumnya = (jejak.get(ip) ?? []).filter((t) => sekarang - t < BATAS.jendelaMs);
  sebelumnya.push(sekarang);
  jejak.set(ip, sebelumnya);

  // Buang catatan lama supaya Map tidak tumbuh terus.
  if (jejak.size > 5000) {
    for (const [kunci, waktu] of jejak) {
      if (waktu.every((t) => sekarang - t >= BATAS.jendelaMs)) jejak.delete(kunci);
    }
  }

  return sebelumnya.length > BATAS.jumlah;
}

function bersih(nilai: unknown, maks: number) {
  return typeof nilai === "string" ? nilai.trim().slice(0, maks) : "";
}

const POLA_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "tidak-diketahui";

  if (lewatBatas(ip)) {
    return NextResponse.json(
      { pesan: "Terlalu banyak percobaan. Coba lagi dalam beberapa menit." },
      { status: 429 },
    );
  }

  let isi: Record<string, unknown>;
  try {
    isi = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ pesan: GAGAL }, { status: 400 });
  }

  // Umpan bot: kolom tersembunyi yang hanya terisi oleh pengisi otomatis.
  // Balas seolah berhasil agar bot tidak belajar bahwa ia tertangkap.
  if (bersih(isi.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const namaUsaha = bersih(isi.namaUsaha, 120);
  const email = bersih(isi.email, 160).toLowerCase();
  const nama = bersih(isi.nama, 120);
  const telepon = bersih(isi.telepon, 30);

  if (namaUsaha.length < 2) {
    return NextResponse.json({ pesan: "Nama usaha wajib diisi." }, { status: 400 });
  }
  if (!POLA_EMAIL.test(email)) {
    return NextResponse.json({ pesan: "Alamat email belum benar." }, { status: 400 });
  }

  const webhook = process.env.N8N_WEBHOOK_URL;
  if (!webhook) {
    console.error("[daftar] N8N_WEBHOOK_URL belum diatur");
    return NextResponse.json({ pesan: GAGAL }, { status: 503 });
  }

  try {
    const kendali = AbortSignal.timeout(12_000);
    const hulu = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.N8N_API_KEY ? { "x-api-key": process.env.N8N_API_KEY } : {}),
      },
      body: JSON.stringify({
        companyName: namaUsaha,
        ownerEmail: email,
        ownerName: nama || undefined,
        phone: telepon || undefined,
        source: "landing-page",
      }),
      signal: kendali,
    });

    if (!hulu.ok) {
      // Isi balasan hulu tidak diteruskan ke browser — bisa memuat detail
      // internal. Cukup dicatat di log server.
      console.error("[daftar] webhook membalas", hulu.status, await hulu.text().catch(() => ""));
      return NextResponse.json({ pesan: GAGAL }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[daftar] gagal menghubungi webhook", error);
    return NextResponse.json({ pesan: GAGAL }, { status: 502 });
  }
}
