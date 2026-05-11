import type { Metadata } from "next";
import { Poppins, Montserrat, Playwrite_DE_SAS } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/lib/useLanguage';
import Script from "next/script";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playwrite = Playwrite_DE_SAS({
  weight: ["100", "200", "300", "400"],
  variable: "--font-playwrite",
});

const BASE_URL = "https://hifloo.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Hifloo — Aplikasi Kasir, Stok & HRIS untuk UMKM Indonesia",
    template: "%s | Hifloo",
  },
  description:
    "Hifloo adalah sistem POS & HRIS all-in-one untuk UMKM. Kelola kasir, stok otomatis, absensi karyawan, dan laporan keuangan dalam satu aplikasi. Mulai gratis selamanya.",
  keywords: [
    "aplikasi kasir",
    "sistem POS UMKM",
    "kasir online",
    "manajemen stok",
    "absensi karyawan GPS",
    "laporan keuangan UMKM",
    "software toko Indonesia",
    "HRIS UMKM",
    "CRM pelanggan",
    "kasir offline",
    "aplikasi toko android",
    "POS restoran",
    "multi cabang",
    "ERP UMKM Indonesia",
  ],
  authors: [{ name: "Hifloo", url: BASE_URL }],
  creator: "Hifloo",
  publisher: "Hifloo",
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
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "Hifloo",
    title: "Hifloo — Aplikasi Kasir, Stok & HRIS untuk UMKM Indonesia",
    description:
      "Kasir offline, stok realtime, absensi GPS, laporan keuangan — semua dalam satu aplikasi. Gratis selamanya untuk 1 outlet.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hifloo — Aplikasi POS & HRIS untuk UMKM Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hifloo — Aplikasi Kasir, Stok & HRIS untuk UMKM Indonesia",
    description:
      "Kasir offline, stok realtime, absensi GPS, laporan keuangan — semua dalam satu aplikasi. Mulai gratis.",
    images: ["/og-image.png"],
    creator: "@hifloo_id",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${montserrat.variable} ${playwrite.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://hifloo.com/#organization",
                  name: "Hifloo",
                  url: "https://hifloo.com",
                  logo: "https://hifloo.com/logo.png",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+62-857-0547-7252",
                    contactType: "customer support",
                    availableLanguage: "Indonesian",
                  },
                  sameAs: ["https://www.instagram.com/hifloo_id"],
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Hifloo",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Android, Web",
                  offers: [
                    {
                      "@type": "Offer",
                      name: "Gratis",
                      price: "0",
                      priceCurrency: "IDR",
                    },
                    {
                      "@type": "Offer",
                      name: "Pro",
                      price: "85000",
                      priceCurrency: "IDR",
                      billingIncrement: "P1M",
                    },
                  ],
                  description:
                    "Sistem POS & HRIS all-in-one untuk UMKM Indonesia. Kasir offline, manajemen stok, absensi karyawan GPS, dan laporan keuangan.",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "500",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Apakah paket Gratis benar-benar gratis selamanya?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ya, 100% gratis selamanya. Tidak ada biaya tersembunyi, tidak perlu kartu kredit. Paket Gratis cocok untuk toko kecil dengan 1 outlet yang baru mulai rapi.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Apakah kasir tetap bisa jalan saat internet mati?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ya. Aplikasi kasir Hifloo mendukung mode offline penuh. Semua transaksi tetap tercatat di perangkat dan akan sinkron otomatis ke server begitu koneksi internet kembali.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Apakah ada trial untuk paket Pro?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ada. Paket Pro bisa dicoba gratis selama 30 hari tanpa kartu kredit.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Apakah HRIS termasuk fitur payroll & slip gaji?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Fitur HRIS di paket Enterprise mencakup absensi GPS, rekap lembur & keterlambatan, dan laporan payroll. Slip gaji digital juga tersedia.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Bisa diakses dari HP, tablet, dan komputer sekaligus?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Bisa. Dashboard manajemen bisa diakses dari browser di HP, tablet, maupun komputer. Aplikasi kasir mobile tersedia untuk Android.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
