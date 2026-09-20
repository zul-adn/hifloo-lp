"use client";

import type { ReactNode } from "react";

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
      onClick={() => {
        onClick?.();
        const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
        gtag?.("event", "open_signup_form", { source });
        openSignup();
      }}
    >
      {children}
    </button>
  );
}
