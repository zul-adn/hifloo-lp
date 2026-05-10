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

export const metadata: Metadata = {
  title: "HiFloo - Mini ERP Solution | Kelola Bisnis Tanpa Ribet",
  description: "HiFloo membantu Anda mengelola penjualan, karyawan, keuangan, dan pelanggan dalam satu dashboard yang simpel, cepat, dan powerful.",
  keywords: ["ERP", "Mini ERP", "Sales Management", "HR Management", "Accounting", "CRM", "Business Management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${montserrat.variable} ${playwrite.variable}`}>
      <head>
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
