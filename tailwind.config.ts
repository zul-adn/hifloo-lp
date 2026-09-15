import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Netral hangat — semua pasangan di bawah lolos WCAG AA.
        ink: "#0C1116", // judul
        "ink-2": "#3F4A56", // teks isi        (9.0:1 di atas putih)
        "ink-3": "#636D79", // teks redup      (5.3:1 di atas putih)
        line: "#E6E8EB", // garis rambut
        paper: "#FFFFFF",
        "paper-2": "#F7F8F9", // pita selang-seling
        // Biru merek. `accent` yang dipakai untuk teks & tombol karena
        // #0984e3 tidak cukup kontras untuk teks putih di atasnya (3.9:1).
        accent: "#0670C4", // 5.1:1 dengan teks putih
        "accent-2": "#0984E3", // tint merek, hanya untuk hiasan
        "accent-soft": "#EFF6FD",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "cursive"],
      },
      fontSize: {
        display: ["clamp(2.25rem, 1.4rem + 3.6vw, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        title: ["clamp(1.75rem, 1.2rem + 2.1vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.022em" }],
      },
      maxWidth: {
        prose: "34rem",
        shell: "72rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
