"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Jeda sebelum animasi mulai, dalam milidetik. Untuk efek berurutan. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Memunculkan isinya saat masuk viewport.
 *
 * Elemen tetap ada di DOM sejak awal (hanya opacity & transform yang berubah),
 * jadi crawler dan pembaca layar tetap mendapat seluruh teks. Kalau JavaScript
 * mati, <noscript> di layout yang memaksa semuanya terlihat.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sebagian browser lama tidak punya IntersectionObserver — tampilkan saja.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.shown = "true";
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.shown = "true";
        io.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
