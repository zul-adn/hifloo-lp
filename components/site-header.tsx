"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import DaftarButton from "./daftar-button";

const TAUTAN = [
  { href: "#masalah", label: "Masalah" },
  { href: "#fitur", label: "Fitur" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);
  const [menempel, setMenempel] = useState(false);

  useEffect(() => {
    const onScroll = () => setMenempel(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll halaman selama menu mobile terbuka.
  useEffect(() => {
    if (!menuTerbuka) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMenuTerbuka(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onEsc);
    };
  }, [menuTerbuka]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        menempel || menuTerbuka ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#atas" className="font-wordmark text-2xl leading-none text-ink">
          hifloo
          <span className="sr-only"> — beranda</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {TAUTAN.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="text-sm text-ink-2 transition-colors hover:text-ink"
            >
              {t.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={SITE.appUrl} className="text-sm text-ink-2 transition-colors hover:text-ink">
            Masuk
          </a>
          <DaftarButton
            asal="header"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-2"
          >
            Mulai gratis
          </DaftarButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuTerbuka((v) => !v)}
          aria-expanded={menuTerbuka}
          aria-controls="menu-mobile"
          aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"}
          className="-mr-2 rounded-lg p-2 text-ink md:hidden"
        >
          {menuTerbuka ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {menuTerbuka && (
        <div id="menu-mobile" className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Navigasi utama" className="shell flex flex-col py-2">
            {TAUTAN.map((t) => (
              <a
                key={t.href}
                href={t.href}
                onClick={() => setMenuTerbuka(false)}
                className="border-b border-line py-3.5 text-[0.9375rem] text-ink-2"
              >
                {t.label}
              </a>
            ))}
            <a
              href={SITE.appUrl}
              onClick={() => setMenuTerbuka(false)}
              className="border-b border-line py-3.5 text-[0.9375rem] text-ink-2"
            >
              Masuk
            </a>
            <DaftarButton
              asal="menu-mobile"
              onClick={() => setMenuTerbuka(false)}
              className="my-4 w-full rounded-lg bg-ink py-3 text-sm font-medium text-paper"
            >
              Mulai gratis
            </DaftarButton>
          </nav>
        </div>
      )}
    </header>
  );
}
