"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { DAFTAR_EVENT } from "./daftar-button";

type Status = "isi" | "kirim" | "selesai";

const kosong = { namaUsaha: "", email: "", nama: "", telepon: "", website: "" };

export default function DaftarDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState(kosong);
  const [status, setStatus] = useState<Status>("isi");
  const [error, setError] = useState("");

  useEffect(() => {
    const buka = () => {
      setStatus("isi");
      setError("");
      dialogRef.current?.showModal();
    };
    window.addEventListener(DAFTAR_EVENT, buka);
    return () => window.removeEventListener(DAFTAR_EVENT, buka);
  }, []);

  const tutup = () => dialogRef.current?.close();

  const ubah = (kunci: keyof typeof kosong) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [kunci]: e.target.value }));

  async function kirim(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("kirim");
    try {
      const res = await fetch("/api/daftar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { pesan?: string };
      if (!res.ok) throw new Error(data.pesan || "Pendaftaran gagal. Coba lagi sebentar lagi.");

      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      gtag?.("event", "daftar_berhasil");

      setForm(kosong);
      setStatus("selesai");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Pendaftaran gagal. Coba lagi sebentar lagi.");
      setStatus("isi");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="judul-daftar"
      onClose={() => setStatus("isi")}
      // Klik di area gelap menutup dialog. <dialog> meneruskan klik backdrop
      // ke elemen dialog itu sendiri, jadi kita cek targetnya.
      onClick={(e) => {
        if (e.target === dialogRef.current) tutup();
      }}
      className="w-[calc(100%-2rem)] max-w-md rounded-2xl border border-line bg-paper p-0 text-ink-2 shadow-2xl shadow-ink/10 backdrop:bg-ink/50 backdrop:backdrop-blur-sm"
    >
      {status === "selesai" ? (
        <div className="p-8 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft">
            <Check className="h-6 w-6 text-accent" aria-hidden="true" />
          </div>
          <h2 id="judul-daftar" className="text-xl font-semibold">
            Cek email Anda
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-3">
            Kami sudah mengirim tautan untuk mengaktifkan akun. Kalau beberapa menit belum masuk,
            coba cek folder spam.
          </p>
          <button
            type="button"
            onClick={tutup}
            className="mt-6 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-2"
          >
            Tutup
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
            <div>
              <h2 id="judul-daftar" className="text-lg font-semibold text-ink">
                Buat akun Hifloo
              </h2>
              <p className="mt-1 text-sm text-ink-3">Gratis 30 hari, tanpa kartu kredit.</p>
            </div>
            <button
              type="button"
              onClick={tutup}
              aria-label="Tutup formulir pendaftaran"
              className="-mr-2 -mt-1 rounded-lg p-2 text-ink-3 transition-colors hover:bg-paper-2 hover:text-ink"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <form onSubmit={kirim} className="space-y-4 px-6 py-5" noValidate={false}>
            {error && (
              <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
                {error}
              </p>
            )}

            <Field
              id="namaUsaha"
              label="Nama usaha"
              wajib
              value={form.namaUsaha}
              onChange={ubah("namaUsaha")}
              placeholder="Toko Sumber Rejeki"
              autoComplete="organization"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              wajib
              value={form.email}
              onChange={ubah("email")}
              placeholder="nama@usahaanda.com"
              autoComplete="email"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="nama"
                label="Nama Anda"
                value={form.nama}
                onChange={ubah("nama")}
                placeholder="Budi"
                autoComplete="name"
              />
              <Field
                id="telepon"
                label="WhatsApp"
                type="tel"
                value={form.telepon}
                onChange={ubah("telepon")}
                placeholder="0812 3456 7890"
                autoComplete="tel"
              />
            </div>

            {/* Umpan untuk bot. Manusia tidak pernah melihat apalagi mengisinya. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
              <label htmlFor="website">Jangan diisi</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={ubah("website")}
              />
            </div>

            <button
              type="submit"
              disabled={status === "kirim"}
              className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#055a9f] disabled:opacity-60"
            >
              {status === "kirim" ? "Mengirim…" : "Buat akun"}
            </button>

            <p className="text-center text-xs leading-relaxed text-ink-3">
              Dengan membuat akun, Anda menyetujui{" "}
              <a href="/syarat" className="text-accent underline underline-offset-2">
                Syarat &amp; Ketentuan
              </a>{" "}
              dan{" "}
              <a href="/privacy" className="text-accent underline underline-offset-2">
                Kebijakan Privasi
              </a>
              .
            </p>
          </form>
        </>
      )}
    </dialog>
  );
}

function Field({
  id,
  label,
  wajib,
  ...rest
}: { id: string; label: string; wajib?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {wajib && (
          <>
            {" "}
            <span aria-hidden="true" className="text-ink-3">
              *
            </span>
            <span className="sr-only">(wajib diisi)</span>
          </>
        )}
      </label>
      <input
        id={id}
        name={id}
        required={wajib}
        className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink-3/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        {...rest}
      />
    </div>
  );
}
