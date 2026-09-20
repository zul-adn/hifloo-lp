"use client";

import { useEffect } from "react";
import { openSignup } from "./daftar-button";

/**
 * Deep link untuk formulir pendaftaran: bila URL mengandung ?daftar=1,
 * modal "Buat akun" terbuka otomatis begitu halaman dimuat.
 *
 * Contoh link untuk dibagikan: https://hifloo.com/?daftar=1
 */
export default function SignupDeeplink() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("daftar")) {
      // Beri jeda sebentar supaya listener DaftarDialog sudah terpasang.
      const timer = setTimeout(() => openSignup(), 150);
      return () => clearTimeout(timer);
    }
  }, []);
  return null;
}
