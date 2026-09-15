import { ImageResponse } from "next/og";

export const alt = "Hifloo — kasir, stok, dan karyawan dalam satu catatan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dibuat saat build, jadi tidak perlu menyimpan berkas gambar di repo. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#0670C4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            h
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#0C1116" }}>hifloo</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0C1116",
              maxWidth: 900,
            }}
          >
            Kasir, stok, dan karyawan dalam satu catatan.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#3F4A56", maxWidth: 820 }}>
            Sistem kasir untuk usaha yang sudah capek rekap manual.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 24, color: "#636D79" }}>
          <span>Gratis untuk 1 outlet</span>
          <span style={{ color: "#E6E8EB" }}>·</span>
          <span>Jalan tanpa internet</span>
          <span style={{ color: "#E6E8EB" }}>·</span>
          <span>hifloo.com</span>
        </div>
      </div>
    ),
    size,
  );
}
