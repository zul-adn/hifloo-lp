"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const translations = {
  id: {
    // Navigation
    "nav.features": "Fitur",
    "nav.benefits": "Keunggulan",
    "nav.pricing": "Harga",
    "nav.demo": "Lihat Demo",
    "nav.start": "Mulai Gratis",

    // Hero
    "hero.badge": "Platform Mini ERP Terbaik 2026",
    "hero.title": "Kelola Bisnis Tanpa Ribet,",
    "hero.titleHighlight": "Semua Dalam Satu Platform",
    "hero.subtitle":
      "HiFloo membantu Anda mengelola penjualan, karyawan, keuangan, dan pelanggan dalam satu dashboard yang simpel, cepat, dan powerful.",
    "hero.cta.start": "Mulai Gratis",
    "hero.cta.demo": "Lihat Demo",
    "hero.badge1": "Tanpa kartu kredit",
    "hero.badge2": "Setup 5 menit",
    "hero.badge3": "Support 24/7",
    "hero.social": "sudah percaya",

    // Problem
    "problem.title": "Masih Mengelola Bisnis Secara Manual?",
    "problem.subtitle":
      "Banyak bisnis kehilangan waktu dan uang karena sistem yang tidak terintegrasi",
    "problem.pain1.title": "Data Tidak Sinkron",
    "problem.pain1.desc":
      "Data penjualan dan keuangan tersebar di berbagai aplikasi",
    "problem.pain2.title": "Laporan Manual",
    "problem.pain2.desc":
      "Habiskan berjam-jam untuk membuat laporan setiap bulan",
    "problem.pain3.title": "Sulit Monitoring Tim",
    "problem.pain3.desc": "Tidak tahu kinerja tim secara real-time",
    "problem.pain4.title": "Terlalu Banyak Tools",
    "problem.pain4.desc":
      "Bayar banyak subscription untuk aplikasi yang berbeda",

    // Solution
    "solution.badge": "Solusi Terpercaya",
    "solution.title": "Saatnya Upgrade Cara Anda",
    "solution.titleHighlight": "Mengelola Bisnis",
    "solution.subtitle":
      "HiFloo adalah Mini ERP modern yang menyatukan semua kebutuhan operasional bisnis Anda dalam satu platform yang mudah digunakan.",
    "solution.feature1": "Implementasi cepat, hasil instan",
    "solution.feature2": "Interface intuitif, mudah dipelajari",
    "solution.feature3": "Integrasi seamless dengan tools favorit Anda",
    "solution.feature4": "Akses dimana saja, kapan saja",
    "solution.closing": "Tidak perlu lagi berpindah-pindah aplikasi",
    "solution.closingHighlight":
      "Semua terhubung. Semua otomatis. Semua dalam satu platform.",

    // Features
    "features.badge": "Fitur Lengkap",
    "features.title": "Semua yang Anda Butuhkan",
    "features.titleHighlight": "Dalam Satu Platform",
    "features.subtitle":
      "HiFloo menyediakan modul lengkap untuk mendukung operasional bisnis Anda",
    "features.sales": "Sales Management",
    "features.salesDesc":
      "Kelola penjualan, invoice, dan quotation dengan mudah",
    "features.hr": "HR Management",
    "features.hrDesc": "Manajemen karyawan, absensi, dan payroll otomatis",
    "features.accounting": "Accounting",
    "features.accountingDesc": "Pembukuan otomatis, laporan keuangan real-time",
    "features.crm": "CRM",
    "features.crmDesc": "Kelola hubungan pelanggan dan tingkatkan loyalitas",

    // Benefits
    "benefits.badge": "Keunggulan",
    "benefits.title": "Kenapa Memilih",
    "benefits.titleHighlight": "HiFloo?",
    "benefits.subtitle": "Solusi yang dirancang khusus untuk bisnis Indonesia",
    "benefits.speed": "10x Lebih Cepat",
    "benefits.speedDesc": "Otomatisasi proses bisnis yang menghemat waktu Anda",
    "benefits.insight": "Data-Driven Decisions",
    "benefits.insightDesc":
      "Dashboard analytics real-time untuk keputusan lebih baik",
    "benefits.integration": "Easy Integration",
    "benefits.integrationDesc":
      "Terhubung dengan tools favorit Anda dalam hitungan klik",
    "benefits.scale": "Scale With Confidence",
    "benefits.scaleDesc": "Platform yang tumbuh bersama bisnis Anda",

    // Social Proof
    "social.badge": "Testimoni",
    "social.title": "Dipercaya oleh",
    "social.titleHighlight": "Ratusan Perusahaan",
    "social.subtitle":
      "Lihat bagaimana HiFloo membantu bisnis berkembang lebih cepat",
    "social.testimonial1":
      "HiFloo benar-benar mengubah cara kami mengelola bisnis. Semua jadi lebih efisien dan terorganisir. Highly recommended!",
    "social.testimonial2":
      "Dengan HiFloo, kami bisa fokus mengembangkan bisnis tanpa pusing memikirkan administrasi. Customer support-nya juga sangat responsif!",
    "social.testimonial3":
      "Platform yang powerful namun mudah digunakan. Tim kami langsung bisa adaptasi tanpa training yang ribet.",
    "social.company1": "PT Maju Jaya",
    "social.company2": "Retail Modern",
    "social.company3": "Distributor Nasional",

    // Pricing
    "pricing.badge": "Pricing",
    "pricing.title": "Harga",
    "pricing.titleHighlight": "Transparan",
    "pricing.subtitle": "Pilih paket sesuai kebutuhan bisnis Anda.",
    "pricing.subtitleHighlight": "Mulai gratis",
    "pricing.plan1": "Starter",
    "pricing.plan1Sub": "Untuk bisnis yang baru memulai",
    "pricing.plan1Desc": "Sempurna untuk memulai digitalisasi bisnis",
    "pricing.plan2": "Professional",
    "pricing.plan2Sub": "Untuk bisnis yang berkembang",
    "pricing.plan2Desc": "Solusi lengkap untuk operasional harian",
    "pricing.plan3": "Business",
    "pricing.plan3Sub": "Untuk perusahaan skala besar",
    "pricing.plan3Desc": "Solusi enterprise dengan kustomisasi penuh",
    "pricing.popular": "Paling Populer",
    "pricing.perMonth": "/bulan",
    "pricing.cta1": "Mulai Gratis",
    "pricing.cta2": "Coba 14 Hari Gratis",
    "pricing.cta3": "Hubungi Sales",
    "pricing.features": "Yang Anda dapatkan:",
    "pricing.feature1.1": "Maksimal 2 pengguna",
    "pricing.feature1.2": "Penjualan & invoice dasar",
    "pricing.feature1.3": "Manajemen pelanggan",
    "pricing.feature1.4": "Laporan sederhana",
    "pricing.feature1.5": "5 GB penyimpanan",
    "pricing.feature1.6": "Support email",
    "pricing.feature2.1": "Pengguna unlimited",
    "pricing.feature2.2": "Semua fitur Sales & CRM",
    "pricing.feature2.3": "HR & Payroll lengkap",
    "pricing.feature2.4": "Accounting & tax",
    "pricing.feature2.5": "Integrasi WhatsApp",
    "pricing.feature2.6": "50 GB penyimpanan",
    "pricing.feature2.7": "Laporan advanced",
    "pricing.feature2.8": "Multi-branch support",
    "pricing.feature2.9": "Priority support 24/7",
    "pricing.feature3.1": "Semua fitur Professional",
    "pricing.feature3.2": "Unlimited storage",
    "pricing.feature3.3": "Custom integration",
    "pricing.feature3.4": "Dedicated account manager",
    "pricing.feature3.5": "Onboarding & training",
    "pricing.feature3.6": "White-label option",
    "pricing.feature3.7": "API access",
    "pricing.feature3.8": "SLA guarantee 99.9%",
    "pricing.feature3.9": "Custom development",
    "pricing.note": "Semua paket termasuk",
    "pricing.noteHighlight1": "update gratis",
    "pricing.noteHighlight2": "data security",
    "pricing.question": "Butuh fitur khusus?",
    "pricing.contact": "Hubungi tim kami",

    // Final CTA
    "cta.badge": "Penawaran Terbatas",
    "cta.title": "Siap Membawa Bisnis Anda",
    "cta.titleHighlight": "ke Level Berikutnya?",
    "cta.subtitle":
      "Bergabunglah dengan ratusan bisnis yang telah berkembang bersama HiFloo",
    "cta.feature1": "✓ Gratis 14 hari trial",
    "cta.feature2": "✓ Tanpa kartu kredit",
    "cta.feature3": "✓ Setup dalam 5 menit",
    "cta.feature4": "✓ Support 24/7",
    "cta.start": "Coba Gratis Sekarang",
    "cta.demo": "Lihat Demo",
    "cta.trust": "Dipercaya oleh 500+ perusahaan",
    "cta.timer": "Promo berakhir dalam 24 jam",

    // Footer
    "footer.tagline":
      "Platform Mini ERP yang membantu bisnis Indonesia berkembang lebih cepat",
    "footer.product": "Produk",
    "footer.product.features": "Fitur",
    "footer.product.pricing": "Harga",
    "footer.product.demo": "Request Demo",
    "footer.company": "Perusahaan",
    "footer.company.about": "Tentang Kami",
    "footer.company.contact": "Kontak",
    "footer.company.careers": "Karir",
    "footer.resources": "Resources",
    "footer.resources.blog": "Blog",
    "footer.resources.docs": "Dokumentasi",
    "footer.resources.help": "Help Center",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Service",
    "footer.copyright": "© 2026 HiFloo ❤️. All rights reserved.",
  },
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.benefits": "Benefits",
    "nav.pricing": "Pricing",
    "nav.demo": "View Demo",
    "nav.start": "Get Started",

    // Hero
    "hero.badge": "Best Mini ERP Platform 2026",
    "hero.title": "Manage Your Business Effortlessly,",
    "hero.titleHighlight": "All in One Platform",
    "hero.subtitle":
      "HiFloo helps you manage sales, employees, finances, and customers in one simple, fast, and powerful dashboard.",
    "hero.cta.start": "Get Started Free",
    "hero.cta.demo": "View Demo",
    "hero.badge1": "No credit card required",
    "hero.badge2": "5-minute setup",
    "hero.badge3": "24/7 Support",
    "hero.social": "already trust us",

    // Problem
    "problem.title": "Still Managing Business Manually?",
    "problem.subtitle":
      "Many businesses lose time and money due to non-integrated systems",
    "problem.pain1.title": "Unsynchronized Data",
    "problem.pain1.desc":
      "Sales and financial data scattered across multiple apps",
    "problem.pain2.title": "Manual Reports",
    "problem.pain2.desc": "Spend hours creating reports every month",
    "problem.pain3.title": "Hard to Monitor Team",
    "problem.pain3.desc": "No real-time visibility into team performance",
    "problem.pain4.title": "Too Many Tools",
    "problem.pain4.desc":
      "Pay multiple subscriptions for different applications",

    // Solution
    "solution.badge": "Trusted Solution",
    "solution.title": "Time to Upgrade How You",
    "solution.titleHighlight": "Manage Your Business",
    "solution.subtitle":
      "HiFloo is a modern Mini ERP that unifies all your business operational needs in one easy-to-use platform.",
    "solution.feature1": "Quick implementation, instant results",
    "solution.feature2": "Intuitive interface, easy to learn",
    "solution.feature3": "Seamless integration with your favorite tools",
    "solution.feature4": "Access anywhere, anytime",
    "solution.closing": "No more switching between applications",
    "solution.closingHighlight":
      "Everything connected. Everything automated. Everything in one platform.",

    // Features
    "features.badge": "Complete Features",
    "features.title": "Everything You Need",
    "features.titleHighlight": "in One Platform",
    "features.subtitle":
      "HiFloo provides complete modules to support your business operations",
    "features.sales": "Sales Management",
    "features.salesDesc": "Manage sales, invoices, and quotations easily",
    "features.hr": "HR Management",
    "features.hrDesc": "Employee management, attendance, and automatic payroll",
    "features.accounting": "Accounting",
    "features.accountingDesc":
      "Automatic bookkeeping, real-time financial reports",
    "features.crm": "CRM",
    "features.crmDesc": "Manage customer relationships and increase loyalty",

    // Benefits
    "benefits.badge": "Benefits",
    "benefits.title": "Why Choose",
    "benefits.titleHighlight": "HiFloo?",
    "benefits.subtitle":
      "Solution designed specifically for Indonesian businesses",
    "benefits.speed": "10x Faster",
    "benefits.speedDesc": "Business process automation that saves your time",
    "benefits.insight": "Data-Driven Decisions",
    "benefits.insightDesc":
      "Real-time analytics dashboard for better decisions",
    "benefits.integration": "Easy Integration",
    "benefits.integrationDesc":
      "Connect with your favorite tools in just a few clicks",
    "benefits.scale": "Scale With Confidence",
    "benefits.scaleDesc": "Platform that grows with your business",

    // Social Proof
    "social.badge": "Testimonials",
    "social.title": "Trusted by",
    "social.titleHighlight": "Hundreds of Companies",
    "social.subtitle": "See how HiFloo helps businesses grow faster",
    "social.testimonial1":
      "HiFloo truly changed the way we manage our business. Everything became more efficient and organized. Highly recommended!",
    "social.testimonial2":
      "With HiFloo, we can focus on growing our business without worrying about administration. The customer support is also very responsive!",
    "social.testimonial3":
      "A powerful yet easy-to-use platform. Our team could adapt immediately without complicated training.",
    "social.company1": "PT Maju Jaya",
    "social.company2": "Modern Retail",
    "social.company3": "National Distributor",

    // Pricing
    "pricing.badge": "Pricing",
    "pricing.title": "Transparent",
    "pricing.titleHighlight": "Pricing",
    "pricing.subtitle": "Choose a plan that suits your business needs.",
    "pricing.subtitleHighlight": "Start free",
    "pricing.plan1": "Starter",
    "pricing.plan1Sub": "For starting businesses",
    "pricing.plan1Desc": "Perfect to start digitizing your business",
    "pricing.plan2": "Professional",
    "pricing.plan2Sub": "For growing businesses",
    "pricing.plan2Desc": "Complete solution for daily operations",
    "pricing.plan3": "Business",
    "pricing.plan3Sub": "For large-scale companies",
    "pricing.plan3Desc": "Enterprise solution with full customization",
    "pricing.popular": "Most Popular",
    "pricing.perMonth": "/month",
    "pricing.cta1": "Start Free",
    "pricing.cta2": "Try 14 Days Free",
    "pricing.cta3": "Contact Sales",
    "pricing.features": "What you get:",
    "pricing.feature1.1": "Up to 2 users",
    "pricing.feature1.2": "Basic sales & invoice",
    "pricing.feature1.3": "Customer management",
    "pricing.feature1.4": "Simple reports",
    "pricing.feature1.5": "5 GB storage",
    "pricing.feature1.6": "Email support",
    "pricing.feature2.1": "Unlimited users",
    "pricing.feature2.2": "All Sales & CRM features",
    "pricing.feature2.3": "Complete HR & Payroll",
    "pricing.feature2.4": "Accounting & tax",
    "pricing.feature2.5": "WhatsApp integration",
    "pricing.feature2.6": "50 GB storage",
    "pricing.feature2.7": "Advanced reports",
    "pricing.feature2.8": "Multi-branch support",
    "pricing.feature2.9": "Priority support 24/7",
    "pricing.feature3.1": "All Professional features",
    "pricing.feature3.2": "Unlimited storage",
    "pricing.feature3.3": "Custom integration",
    "pricing.feature3.4": "Dedicated account manager",
    "pricing.feature3.5": "Onboarding & training",
    "pricing.feature3.6": "White-label option",
    "pricing.feature3.7": "API access",
    "pricing.feature3.8": "SLA guarantee 99.9%",
    "pricing.feature3.9": "Custom development",
    "pricing.note": "All plans include",
    "pricing.noteHighlight1": "free updates",
    "pricing.noteHighlight2": "data security",
    "pricing.question": "Need custom features?",
    "pricing.contact": "Contact our team",

    // Final CTA
    "cta.badge": "Limited Offer",
    "cta.title": "Ready to Take Your Business",
    "cta.titleHighlight": "to the Next Level?",
    "cta.subtitle": "Join hundreds of businesses that have grown with HiFloo",
    "cta.feature1": "✓ Free 14-day trial",
    "cta.feature2": "✓ No credit card required",
    "cta.feature3": "✓ Setup in 5 minutes",
    "cta.feature4": "✓ 24/7 Support",
    "cta.start": "Start Free Now",
    "cta.demo": "View Demo",
    "cta.trust": "Trusted by 500+ companies",
    "cta.timer": " Promotion ends in 24 hours",

    // Footer
    "footer.tagline":
      "Mini ERP platform that helps Indonesian businesses grow faster",
    "footer.product": "Product",
    "footer.product.features": "Features",
    "footer.product.pricing": "Pricing",
    "footer.product.demo": "Request Demo",
    "footer.company": "Company",
    "footer.company.about": "About Us",
    "footer.company.contact": "Contact",
    "footer.company.careers": "Careers",
    "footer.resources": "Resources",
    "footer.resources.blog": "Blog",
    "footer.resources.docs": "Documentation",
    "footer.resources.help": "Help Center",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Service",
    "footer.copyright": "© 2026 HiFloo ❤️. All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
