import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0984e3",
        "primary-dark": "#0670c4",
        "brand-900": "#0a2540",
        dark: "#2d3436",
        "ink-900": "#0a0e1a",
        "ink-500": "#4b5563",
        "ink-400": "#6b7280",
        light: "#f8f9fa",
        subtle: "#fafbfc",
        muted: "#f4f6f9",
        border: "#e5e9f0",
        gray: "#636e72",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
        script: ["var(--font-playwrite)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
