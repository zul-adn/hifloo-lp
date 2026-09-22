/**
 * Satu pintu ke Google Analytics.
 *
 * gtag dimuat lewat `NEXT_PUBLIC_GA_ID` di `app/layout.tsx`, dan skripnya
 * memang boleh tidak ada — saat env itu kosong (pengembangan lokal, atau
 * sebelum ID-nya dipasang di Vercel) seluruh pemanggilan di sini diam saja.
 * Karena itu jangan pernah memanggil `window.gtag` langsung dari komponen:
 * satu pemanggilan yang lupa dijaga akan melempar di halaman tanpa GA.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

type Gtag = (command: string, ...args: unknown[]) => void;

function getGtag(): Gtag | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { gtag?: Gtag }).gtag;
}

export function trackEvent(name: string, params?: EventParams) {
  getGtag()?.("event", name, params);
}

/** Batas aman teks label — nama event GA4 memotong di 100 karakter. */
const MAX_LABEL = 80;

/** Rapikan teks tombol/tautan jadi label yang bisa dibaca di laporan GA. */
export function toLabel(raw: string | null | undefined): string | undefined {
  if (!raw) return undefined;
  const clean = raw.replace(/\s+/g, " ").trim();
  if (!clean) return undefined;
  return clean.length > MAX_LABEL ? `${clean.slice(0, MAX_LABEL)}…` : clean;
}
