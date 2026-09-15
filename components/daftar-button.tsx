"use client";

import type { ReactNode } from "react";

export const DAFTAR_EVENT = "hifloo:daftar";

export function bukaDaftar() {
  window.dispatchEvent(new CustomEvent(DAFTAR_EVENT));
}

type Props = {
  children: ReactNode;
  className?: string;
  /** Dicatat ke Google Analytics supaya terlihat CTA mana yang bekerja. */
  asal: string;
  /** Dijalankan sebelum dialog dibuka, misal untuk menutup menu mobile. */
  onClick?: () => void;
};

export default function DaftarButton({ children, className = "", asal, onClick }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
        gtag?.("event", "buka_form_daftar", { asal });
        bukaDaftar();
      }}
    >
      {children}
    </button>
  );
}
