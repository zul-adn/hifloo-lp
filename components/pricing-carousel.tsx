"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Deret kartu harga yang digeser ke samping.
 *
 * Empat paket dalam satu baris membuat tiap kartu terlalu sempit untuk daftar
 * fiturnya. Di sini lebar kartu tetap, sisanya digeser — pakai scroll-snap
 * bawaan browser, jadi geser jari, trackpad, dan keyboard tetap jalan tanpa
 * JavaScript. Tombol panah hanya pelengkap untuk mouse.
 */
export default function PricingCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // Toleransi 2px: posisi scroll bisa berupa pecahan di layar ber-DPR tinggi.
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    // Lebar satu kartu + jarak antarkartu (gap-6 = 24px).
    const by = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * by, behavior: "smooth" });
  };

  // Melayang di tengah tinggi deret. Tombol yang sudah di ujung disembunyikan,
  // bukan dipudarkan, supaya tidak menutupi kartu.
  const arrow =
    "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-ink shadow-md transition-opacity hover:border-ink-3";

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 py-4 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        className={`${arrow} left-0 ${atStart ? "pointer-events-none opacity-0" : ""}`}
        onClick={() => step(-1)}
        aria-label="Paket sebelumnya"
        aria-hidden={atStart}
        tabIndex={atStart ? -1 : 0}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={`${arrow} right-0 ${atEnd ? "pointer-events-none opacity-0" : ""}`}
        onClick={() => step(1)}
        aria-label="Paket berikutnya"
        aria-hidden={atEnd}
        tabIndex={atEnd ? -1 : 0}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
