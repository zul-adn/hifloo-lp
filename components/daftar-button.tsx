"use client";

import type { ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";

export const SIGNUP_EVENT = "hifloo:signup";

export function openSignup() {
  window.dispatchEvent(new CustomEvent(SIGNUP_EVENT));
}

type Props = {
  children: ReactNode;
  className?: string;
  /** Dicatat ke Google Analytics supaya terlihat CTA mana yang bekerja. */
  source: string;
  /** Dijalankan sebelum dialog dibuka, misal untuk menutup menu mobile. */
  onClick?: () => void;
};

export default function DaftarButton({ children, className = "", source, onClick }: Props) {
  return (
    <button
      type="button"
      className={className}
      // Kliknya sudah dikirim sebagai `open_signup_form` lengkap dengan
      // `source`. Tanpa penanda ini, penyimak global di AnalyticsTracker
      // mengirim `button_click` untuk klik yang sama — satu aksi, dua event.
      data-track-ignore=""
      onClick={() => {
        onClick?.();
        trackEvent("open_signup_form", { source });
        openSignup();
      }}
    >
      {children}
    </button>
  );
}
