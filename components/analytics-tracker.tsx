"use client";

import { useEffect } from "react";

import { toLabel, trackEvent } from "@/lib/analytics";

/**
 * Pelacakan klik untuk SELURUH halaman, lewat satu penyimak di `document`.
 *
 * Alternatifnya menempelkan `onClick` di tiap tombol dan tautan — ada puluhan,
 * dan setiap tombol baru yang ditambahkan nanti pasti terlupa. Satu penyimak
 * menangkap semuanya, termasuk elemen yang belum ada saat ini.
 *
 * Disimak di fase CAPTURE: sebagian penangan (dialog pendaftaran, menu mobile)
 * menghentikan perambatan kejadian, dan di fase bubble kliknya tidak akan
 * pernah sampai ke sini.
 */

/** Elemen yang dianggap "bisa diklik" — sisanya diabaikan. */
const CLICKABLE = 'a, button, summary, [role="button"], [data-track]';

type LinkKind = "wa" | "anchor" | "internal" | "outbound" | "tel" | "mail";

function classifyHref(href: string): LinkKind {
  if (href.startsWith("#")) return "anchor";
  if (href.startsWith("tel:")) return "tel";
  if (href.startsWith("mailto:")) return "mail";
  if (/wa\.me|whatsapp\.com/i.test(href)) return "wa";
  try {
    const url = new URL(href, window.location.href);
    if (url.origin === window.location.origin) return "internal";
    return "outbound";
  } catch {
    return "internal";
  }
}

/**
 * Di bagian mana halaman elemen ini berada.
 *
 * Dipakai untuk membedakan CTA yang naskahnya sama persis di beberapa tempat —
 * tombol "Coba gratis" di hero dan di penutup halaman bukan tombol yang sama,
 * dan yang menarik justru mana di antara keduanya yang bekerja.
 */
function sectionOf(el: Element): string {
  const section = el.closest("section[id]");
  if (section?.id) return section.id;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("dialog, [role='dialog']")) return "dialog";
  return "lainnya";
}

export default function AnalyticsTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const el = target.closest<HTMLElement>(CLICKABLE);
      if (!el) return;

      // Elemen yang sengaja tidak dilacak, mis. kendali yang berisik.
      if (el.dataset.trackIgnore !== undefined) return;

      const label =
        toLabel(el.dataset.trackLabel) ??
        toLabel(el.getAttribute("aria-label")) ??
        toLabel(el.textContent) ??
        toLabel(el.getAttribute("title"));

      const section = sectionOf(el);
      const anchor = el.closest("a");
      const href = anchor?.getAttribute("href") ?? undefined;

      if (href) {
        const kind = classifyHref(href);
        const name =
          kind === "wa"
            ? "wa_click"
            : kind === "outbound"
              ? "outbound_click"
              : kind === "anchor" || kind === "internal"
                ? "nav_click"
                : "contact_click";

        trackEvent(name, {
          label,
          section,
          link_url: href,
          link_kind: kind,
        });
        return;
      }

      // <summary> = pertanyaan FAQ. `open` dibaca SEBELUM peramban
      // mengubahnya, jadi nilai yang dikirim adalah keadaan tujuan.
      const details = el.closest("details");
      if (el.tagName === "SUMMARY" && details) {
        trackEvent("faq_toggle", {
          label,
          section,
          state: details.open ? "tutup" : "buka",
        });
        return;
      }

      trackEvent("button_click", {
        label,
        section,
        element: el.tagName.toLowerCase(),
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    // Kedalaman gulir. Enhanced measurement bawaan GA4 hanya menandai 90%,
    // yang tidak cukup untuk tahu di bagian mana orang berhenti membaca.
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();
    let ticking = false;

    function measure() {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY / scrollable) * 100) | 0;
      for (const m of milestones) {
        if (percent >= m && !reached.has(m)) {
          reached.add(m);
          trackEvent("scroll_depth", { percent: m });
        }
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
