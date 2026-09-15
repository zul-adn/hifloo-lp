import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CookingPot,
  FileText,
  Package,
  Pill,
  Scissors,
  Store,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { FAQ, FITUR, LANGKAH, MASALAH, PAKET, SOROTAN, UNTUK_SIAPA } from "@/lib/content";
import { SITE } from "@/lib/site";
import DaftarButton from "./daftar-button";
import Reveal from "./reveal";
import { MockupAbsensi, MockupCabang, MockupDashboard, MockupOffline } from "./mockup";

const IKON: Record<string, LucideIcon> = {
  Zap,
  Package,
  BarChart3,
  Users,
  Building2,
  FileText,
  Store,
  CookingPot,
  Pill,
  Scissors,
};

const VISUAL = {
  offline: MockupOffline,
  absensi: MockupAbsensi,
  cabang: MockupCabang,
} as const;

/* ─────────────────────────── Hero ─────────────────────────── */

export function Hero() {
  return (
    <section id="atas" className="scroll-mt-24 pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <h1 className="text-display font-semibold text-ink">
            Kasir, stok, dan karyawan dalam satu catatan.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-2 sm:text-xl">
            Hifloo yang mencatat penjualan, mengurangi stok, dan merekap absensi. Anda tinggal
            baca hasilnya.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DaftarButton
              asal="hero"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-[#055a9f]"
            >
              Mulai gratis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </DaftarButton>
            <a
              href="#harga"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink-3"
            >
              Lihat harga
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="rule" />
          <ul className="flex flex-col gap-2 pt-4 text-sm text-ink-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li>Gratis selamanya untuk satu outlet</li>
            <li>Tanpa kartu kredit</li>
            <li>Tetap jalan walau internet mati</li>
          </ul>
        </Reveal>

        <Reveal delay={200} className="mt-14 sm:mt-20">
          <MockupDashboard />
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── Masalah ────────────────────────── */

export function Masalah() {
  return (
    <section id="masalah" className="scroll-mt-24 border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="shell">
        <Reveal className="max-w-prose">
          <p className="eyebrow">Masalah</p>
          <h2 className="mt-5 text-title font-semibold">Yang biasanya bikin repot</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            Empat keluhan yang paling sering kami dengar dari pemilik usaha, dan bagaimana Hifloo
            mengatasinya.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {/* Latar putih menempel di <li> dan animasi ada di dalamnya, supaya
              garis kisi tidak sempat terlihat sebagai blok abu saat memudar masuk. */}
          {MASALAH.map((m, i) => (
            <li key={m.judul} className="bg-paper p-7 sm:p-8">
              <Reveal delay={i * 70}>
                <span className="tnum text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{m.judul}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-2">{m.jawab}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────── Fitur ─────────────────────────── */

export function Fitur() {
  return (
    <section id="fitur" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="shell">
        <Reveal className="max-w-prose">
          <p className="eyebrow">Fitur</p>
          <h2 className="mt-5 text-title font-semibold">
            Satu sistem untuk seluruh operasional harian
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            Dari kasir sampai laporan keuangan. Semuanya nyambung, jadi tidak ada data yang perlu
            diketik dua kali.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FITUR.map((f, i) => {
            const Icon = IKON[f.icon];
            return (
              <Reveal as="li" key={f.judul} delay={(i % 3) * 70}>
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.75} />
                <h3 className="mt-4 font-semibold leading-snug">{f.judul}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{f.desc}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────── Sorotan ────────────────────────── */

export function Sorotan() {
  return (
    <>
      {SOROTAN.map((s, i) => {
        const Visual = VISUAL[s.visual];
        const gambarDuluan = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-t border-line py-20 sm:py-28 ${
              i % 2 === 0 ? "bg-paper-2" : ""
            }`}
          >
            <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={gambarDuluan ? "lg:order-2" : undefined}>
                <p className="eyebrow">{s.label}</p>
                <h2 className="mt-5 text-title font-semibold">{s.judul}</h2>
                <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-2">{s.paragraf}</p>

                <dl className="mt-8 space-y-5">
                  {s.poin.map((p) => (
                    <div key={p.judul} className="flex gap-3.5">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <div>
                        <dt className="font-medium text-ink">{p.judul}</dt>
                        <dd className="mt-0.5 leading-relaxed text-ink-2">{p.desc}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={100} className={gambarDuluan ? "lg:order-1" : undefined}>
                <Visual />
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}

/* ───────────────────────── Untuk siapa ───────────────────────── */

export function UntukSiapa() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="shell">
        <Reveal className="max-w-prose">
          <p className="eyebrow">Jenis usaha</p>
          <h2 className="mt-5 text-title font-semibold">Cocok untuk usaha seperti apa</h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {UNTUK_SIAPA.map((u, i) => {
            const Icon = IKON[u.icon];
            return (
              <Reveal as="li" key={u.judul} delay={i * 70}>
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.75} />
                <h3 className="mt-4 font-semibold">{u.judul}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{u.desc}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────── Langkah ────────────────────────── */

export function Langkah() {
  return (
    <section className="border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="shell">
        <Reveal className="max-w-prose">
          <p className="eyebrow">Cara mulai</p>
          <h2 className="mt-5 text-title font-semibold">Tiga langkah, sore ini sudah bisa jalan</h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {LANGKAH.map((l, i) => (
            <Reveal as="li" key={l.judul} delay={i * 90} className="border-t border-ink pt-5">
              <span className="tnum text-sm font-semibold text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{l.judul}</h3>
              <p className="mt-2 leading-relaxed text-ink-2">{l.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────── Harga ─────────────────────────── */

export function Harga() {
  return (
    <section id="harga" className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="shell">
        <Reveal className="max-w-prose">
          <p className="eyebrow">Harga</p>
          <h2 className="mt-5 text-title font-semibold">Harga terbuka, tanpa biaya siluman</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            Bisa pindah paket kapan saja. Semua paket sudah termasuk pembaruan fitur dan bantuan
            lewat WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PAKET.map((p, i) => {
            const sorot = "sorot" in p && p.sorot;
            return (
              <Reveal
                key={p.nama}
                delay={i * 80}
                className={`flex h-full flex-col rounded-xl border p-7 ${
                  sorot ? "border-ink bg-ink text-paper/80" : "border-line bg-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`font-semibold ${sorot ? "text-paper" : "text-ink"}`}>{p.nama}</h3>
                  {"label" in p && p.label && (
                    <span className="rounded-full bg-paper/15 px-2.5 py-1 text-[0.6875rem] font-medium text-paper">
                      {p.label}
                    </span>
                  )}
                </div>
                <p className={`mt-1.5 text-sm ${sorot ? "text-paper/60" : "text-ink-3"}`}>{p.desc}</p>

                <div className="mt-7">
                  {p.harga.jenis === "berbayar" ? (
                    <>
                      <p className="flex items-baseline gap-1.5">
                        <span className={`tnum text-4xl font-semibold ${sorot ? "text-paper" : "text-ink"}`}>
                          Rp&nbsp;{p.harga.nominal}
                        </span>
                        <span className={`text-sm ${sorot ? "text-paper/60" : "text-ink-3"}`}>
                          {p.harga.satuan}
                        </span>
                      </p>
                      <p className={`mt-1.5 text-xs ${sorot ? "text-paper/60" : "text-ink-3"}`}>
                        <s className="tnum">Rp&nbsp;{p.harga.coret}</s> · {p.harga.catatan}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className={`text-4xl font-semibold ${sorot ? "text-paper" : "text-ink"}`}>
                        {p.harga.label}
                      </p>
                      <p className={`mt-1.5 text-xs ${sorot ? "text-paper/60" : "text-ink-3"}`}>
                        {p.harga.catatan}
                      </p>
                    </>
                  )}
                </div>

                <ul className={`mt-7 space-y-3 border-t pt-7 ${sorot ? "border-paper/15" : "border-line"}`}>
                  {p.fitur.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${sorot ? "text-paper" : "text-accent"}`}
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* mt-auto menekan tombol ke dasar kartu supaya sejajar antar paket. */}
                <div className="mt-auto pt-8">
                  {p.harga.jenis === "custom" ? (
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-line py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-ink-3"
                    >
                      {p.cta}
                    </a>
                  ) : (
                    <DaftarButton
                      asal={`harga-${p.nama.toLowerCase()}`}
                      className={`w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                        sorot
                          ? "bg-paper text-ink hover:bg-paper/90"
                          : "bg-accent text-paper hover:bg-[#055a9f]"
                      }`}
                    >
                      {p.cta}
                    </DaftarButton>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={240} className="mt-10 text-sm text-ink-3">
          <p>
            Kebutuhan Anda tidak masuk ke salah satu paket?{" "}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Ngobrol dulu dengan kami lewat WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export function TanyaJawab() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-title font-semibold">Yang sering ditanyakan</h2>
          <p className="mt-4 leading-relaxed text-ink-2">
            Belum ketemu jawabannya?{" "}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Tanya saja lewat WhatsApp
            </a>
            .
          </p>
        </Reveal>

        {/* <details> dipakai supaya jawaban tetap ada di HTML — bisa dibaca
            mesin pencari dan tetap berfungsi tanpa JavaScript. */}
        <Reveal delay={90} className="divide-y divide-line border-y border-line">
          {FAQ.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {f.q}
                {/* Tanda tambah yang berubah jadi tanda kurang: batang tegak
                    diputar 90 derajat sampai berimpit dengan batang mendatar. */}
                <span aria-hidden="true" className="relative mt-2 h-3 w-3 shrink-0 text-ink-3">
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>
              <p className="max-w-prose pb-6 leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────── Ajakan akhir ──────────────────────── */

export function AjakanAkhir() {
  return (
    <section className="border-t border-line bg-ink py-20 sm:py-28">
      <div className="shell max-w-3xl">
        <Reveal>
          <h2 className="text-title font-semibold text-paper">
            Coba dulu satu outlet. Gratis.
          </h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-paper/70">
            Buat akun, masukkan beberapa barang, lalu coba transaksi pertama hari ini juga. Kalau
            ternyata tidak cocok, tinggal berhenti. Tidak ada ikatan apa pun.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DaftarButton
              asal="ajakan-akhir"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper/90"
            >
              Mulai gratis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </DaftarButton>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-paper/25 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper/50"
            >
              Tanya dulu lewat WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
