import type { Metadata, Viewport } from "next";
import { Inter, Playwrite_DE_SAS } from "next/font/google";
import Script from "next/script";

import { FAQ } from "@/lib/content";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Hanya dipakai untuk wordmark "hifloo" di header dan footer.
const wordmark = Playwrite_DE_SAS({
  weight: "400",
  display: "swap",
  variable: "--font-wordmark",
});

const TITLE = "Hifloo — Aplikasi Kasir, Stok & Absensi Karyawan untuk UMKM";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | Hifloo" },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "aplikasi kasir",
    "software kasir UMKM",
    "aplikasi POS Indonesia",
    "kasir offline",
    "manajemen stok toko",
    "absensi karyawan GPS",
    "aplikasi absensi HP",
    "laporan keuangan usaha",
    "kasir multi cabang",
    "aplikasi toko Android",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "business",
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kubu Raya",
        addressRegion: "Kalimantan Barat",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phoneE164,
        contactType: "customer support",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      sameAs: [SITE.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "id-ID",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      inLanguage: "id-ID",
      // Dibangun dari naskah yang sama dengan yang tampil di halaman,
      // supaya structured data tidak pernah berbeda dengan isi halaman.
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE.url}/#aplikasi`,
      name: SITE.name,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Point of Sale",
      operatingSystem: "Android, Web",
      inLanguage: "id-ID",
      url: SITE.url,
      publisher: { "@id": `${SITE.url}/#organization` },
      description: SITE.description,
      featureList: [
        "Kasir dengan mode offline",
        "Manajemen stok otomatis",
        "Absensi karyawan dan payroll",
        "Laporan penjualan dan keuangan",
        "Multi outlet dan transfer stok",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Gratis",
          price: "0",
          priceCurrency: "IDR",
          description: "Satu outlet, kasir dan stok dasar, laporan harian.",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "85000",
          priceCurrency: "IDR",
          description: "Sampai tiga outlet, mode offline penuh, laporan lengkap. Per bulan.",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${wordmark.variable}`}>
      <head>
        {/* Tanpa JavaScript, IntersectionObserver tidak pernah berjalan.
            Pastikan seluruh isi halaman tetap terlihat. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          // Data statis buatan sendiri, tidak ada masukan dari pengguna.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
        >
          Lompat ke konten utama
        </a>
        {children}

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
