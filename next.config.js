/** @type {import('next').NextConfig} */

const dev = process.env.NODE_ENV === "development";

// Catatan CSP: situs ini di-render statis, jadi kita tidak memakai nonce
// (nonce butuh middleware dan itu memaksa semua halaman jadi dinamis).
// 'unsafe-inline' dibutuhkan Next untuk bootstrap script & inline style-nya.
// Sisanya dikunci serapat mungkin.
//
// 'unsafe-eval' HANYA saat development: React memakai eval() untuk menyusun
// ulang callstack dan fitur debugging lain. Di production React tidak pernah
// memakainya, jadi izin ini tidak pernah ikut ke pengunjung.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${dev ? "'unsafe-eval' " : ""}https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
  `connect-src 'self' ${dev ? "ws: " : ""}https://www.google-analytics.com https://region1.google-analytics.com`,
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  // Jangan dipakai saat dev, karena http://localhost ikut dipaksa ke https.
  ...(dev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  ...(dev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]),
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
