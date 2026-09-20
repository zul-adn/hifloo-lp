import { Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

/** lucide-react tidak lagi menyertakan ikon merek, jadi digambar sendiri. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Produk",
    links: [
      { label: "Fitur", href: "#fitur" },
      { label: "Harga", href: "#harga" },
      { label: "FAQ", href: "#faq" },
      { label: "Masuk ke akun", href: SITE.appUrl },
    ],
  },
  {
    title: "Kemampuan",
    links: [
      { label: "Kasir offline", href: "#offline" },
      { label: "Absensi karyawan", href: "#absensi" },
      { label: "Multi cabang", href: "#cabang" },
      { label: "Laporan keuangan", href: "#fitur" },
    ],
  },
  {
    title: "Ketentuan",
    links: [
      { label: "Kebijakan Privasi", href: "/privacy" },
      { label: "Syarat & Ketentuan", href: "/syarat" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <p className="font-wordmark text-2xl leading-none text-ink">hifloo</p>
            <p className="mt-4 leading-relaxed text-ink-2">
              Sistem kasir, stok, dan karyawan untuk usaha kecil dan menengah di Indonesia.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-ink-2 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 shrink-0 text-ink-3" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ink-2 transition-colors hover:text-ink"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-ink-3" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ink-2">
                <MapPin className="h-4 w-4 shrink-0 text-ink-3" aria-hidden="true" />
                {SITE.address}
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ink-2 transition-colors hover:text-ink"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-ink-3" />
                  @hifloo_id
                </a>
              </li>
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink-3">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-2 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Dibuat di Kubu Raya, Kalimantan Barat.</p>
        </div>
      </div>
    </footer>
  );
}
