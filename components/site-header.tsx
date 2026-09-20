"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import DaftarButton from "./daftar-button";

const LINKS = [
  { href: "#masalah", label: "Masalah" },
  { href: "#fitur", label: "Fitur" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll halaman selama menu mobile terbuka.
  useEffect(() => {
    if (!menuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onEsc);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        isScrolled || menuOpen ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#atas" className="font-wordmark text-2xl leading-none text-ink">
          hifloo
          <span className="sr-only"> — beranda</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-2 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={SITE.appUrl} className="text-sm text-ink-2 transition-colors hover:text-ink">
            Masuk
          </a>
          <DaftarButton
            source="header"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-2"
          >
            Mulai gratis
          </DaftarButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          className="-mr-2 rounded-lg p-2 text-ink md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div id="menu-mobile" className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Navigasi utama" className="shell flex flex-col py-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-3.5 text-[0.9375rem] text-ink-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.appUrl}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-3.5 text-[0.9375rem] text-ink-2"
            >
              Masuk
            </a>
            <DaftarButton
              source="mobile-menu"
              onClick={() => setMenuOpen(false)}
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
