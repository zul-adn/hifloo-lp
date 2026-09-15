import { Check, MapPin, WifiOff } from "lucide-react";

/**
 * Cuplikan antarmuka Hifloo, digambar dengan HTML biasa.
 * Sengaja tidak memakai gambar supaya tidak ada permintaan ke luar,
 * tidak ada pergeseran layout, dan tetap tajam di layar beresolusi tinggi.
 * Semuanya dekoratif — teksnya diulang dalam naskah di sekitarnya.
 */

const BATANG = [42, 61, 48, 74, 55, 88, 70];
const HARI = ["S", "S", "R", "K", "J", "S", "M"];

export function MockupDashboard() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border border-line bg-paper shadow-[0_24px_60px_-28px_rgba(12,17,22,0.28)]"
    >
      <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <div className="ml-2 h-5 flex-1 rounded border border-line bg-paper" />
      </div>

      <div className="grid gap-px bg-line sm:grid-cols-3">
        {[
          { label: "Omzet hari ini", nilai: "Rp 4.820.000", delta: "+12,4%" },
          { label: "Transaksi", nilai: "128", delta: "+9 vs kemarin" },
          { label: "Stok menipis", nilai: "6 barang", delta: "perlu dipesan" },
        ].map((k) => (
          <div key={k.label} className="bg-paper px-5 py-4">
            <p className="text-[0.6875rem] uppercase tracking-wider text-ink-3">{k.label}</p>
            <p className="tnum mt-1.5 text-lg font-semibold text-ink">{k.nilai}</p>
            <p className="mt-0.5 text-xs text-ink-3">{k.delta}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-line px-5 py-5">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="text-sm font-medium text-ink">Penjualan 7 hari terakhir</p>
          <p className="text-xs text-ink-3">Rp 29,4 jt</p>
        </div>
        {/* Tiap kolom diberi tinggi pasti lewat flex, supaya tinggi batang
            dalam persen punya acuan untuk dihitung. */}
        <div className="flex h-28 items-stretch gap-1.5 sm:gap-2.5">
          {BATANG.map((t, i) => (
            <div key={i} className="flex flex-1 flex-col">
              <div className="flex flex-1 items-end">
                <div
                  className={`mx-auto w-full max-w-24 rounded-t-sm ${i === BATANG.length - 2 ? "bg-accent" : "bg-accent/25"}`}
                  style={{ height: `${t}%` }}
                />
              </div>
              <span className="mt-2 text-center text-[0.625rem] text-ink-3">{HARI[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MockupOffline() {
  return (
    <div aria-hidden="true" className="rounded-xl border border-line bg-paper p-5">
      <div className="flex items-center gap-2.5 rounded-lg bg-paper-2 px-3.5 py-2.5">
        <WifiOff className="h-4 w-4 text-ink-3" />
        <p className="text-sm text-ink-2">Tidak ada koneksi</p>
        <span className="ml-auto text-xs text-ink-3">mode offline</span>
      </div>

      <ul className="mt-4 space-y-px overflow-hidden rounded-lg border border-line">
        {[
          { kode: "TRX-0912", jumlah: "Rp 128.000", status: "tersimpan" },
          { kode: "TRX-0913", jumlah: "Rp 64.500", status: "tersimpan" },
          { kode: "TRX-0914", jumlah: "Rp 215.000", status: "tersimpan" },
        ].map((t) => (
          <li key={t.kode} className="flex items-center gap-3 border-b border-line bg-paper px-3.5 py-3 last:border-b-0">
            <Check className="h-4 w-4 shrink-0 text-accent" />
            <span className="tnum text-sm text-ink">{t.kode}</span>
            <span className="tnum ml-auto text-sm text-ink-2">{t.jumlah}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-ink-3">
        3 transaksi menunggu, akan terkirim saat koneksi kembali.
      </p>
    </div>
  );
}

export function MockupAbsensi() {
  return (
    <div aria-hidden="true" className="rounded-xl border border-line bg-paper p-5">
      <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
        <div>
          <p className="text-sm font-medium text-ink">Absen masuk</p>
          <p className="tnum mt-0.5 text-2xl font-semibold text-ink">07.58</p>
        </div>
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
          Tepat waktu
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-ink-2">
        <MapPin className="h-4 w-4 shrink-0 text-ink-3" />
        Outlet Sungai Raya · dalam radius
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
        {[
          { k: "Hadir", v: "22 hari" },
          { k: "Telat", v: "1 hari" },
          { k: "Lembur", v: "6 jam" },
        ].map((s) => (
          <div key={s.k} className="bg-paper px-3 py-3 text-center">
            <dt className="text-[0.6875rem] uppercase tracking-wider text-ink-3">{s.k}</dt>
            <dd className="tnum mt-1 text-sm font-semibold text-ink">{s.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function MockupCabang() {
  const cabang = [
    { nama: "Pusat — Gudang", stok: "1.284", bar: 100 },
    { nama: "Outlet Sungai Raya", stok: "312", bar: 42 },
    { nama: "Outlet Ahmad Yani", stok: "268", bar: 34 },
    { nama: "Outlet Rasau", stok: "96", bar: 14 },
  ];

  return (
    <div aria-hidden="true" className="rounded-xl border border-line bg-paper p-5">
      <p className="text-sm font-medium text-ink">Sebaran stok · Beras Premium 5kg</p>
      <ul className="mt-4 space-y-3.5">
        {cabang.map((c, i) => (
          <li key={c.nama}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-sm text-ink-2">{c.nama}</span>
              <span className="tnum text-sm font-medium text-ink">{c.stok}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-2">
              <div
                className={`h-full rounded-full ${i === 0 ? "bg-ink" : "bg-accent/45"}`}
                style={{ width: `${c.bar}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 border-t border-line pt-4 text-xs text-ink-3">
        Outlet Rasau di bawah batas minimum — 48 unit sedang dikirim dari gudang.
      </p>
    </div>
  );
}
