"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Zap,
  Package,
  BarChart3,
  Users,
  Globe,
  CreditCard,
  Shield,
  Clock,
  RefreshCw,
  Smartphone,
  Monitor,
  Tablet,
  FileText,
  Star,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

import AnimateOnScroll from "@/components/AnimateOnScroll";

const PROBLEMS = [
  {
    icon: Search,
    title: "Stok sering tidak akurat?",
    desc: "Stok berkurang otomatis setiap transaksi. Tidak perlu rekap manual setiap malam. Notifikasi langsung saat stok mau habis.",
  },
  {
    icon: Clock,
    title: "Rekap laporan makan waktu?",
    desc: "Laporan penjualan, laba rugi, dan stok siap setiap saat. Satu klik. Format Excel & PDF. Bisa lihat dari HP.",
  },
  {
    icon: Users,
    title: "Absensi karyawan masih manual?",
    desc: "Karyawan clock-in lewat HP dengan GPS. Rekap otomatis. Hitung lembur & keterlambatan langsung terhitung.",
  },
  {
    icon: RefreshCw,
    title: "Data tidak nyambung antar cabang?",
    desc: "Semua cabang terhubung dalam satu dashboard. Transfer stok antar toko. Laporan gabungan seluruh cabang.",
  },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Kasir Cepat & Offline",
    desc: "Transaksi dalam hitungan detik. Tetap jalan meskipun internet mati — data aman, sinkron otomatis.",
  },
  {
    icon: Package,
    title: "Stok Otomatis & Realtime",
    desc: "Stok berkurang otomatis. Notifikasi stok menipis. Tidak perlu tutup toko untuk stok opname.",
  },
  {
    icon: BarChart3,
    title: "Laporan Otomatis",
    desc: "Laporan penjualan, laba, stok, dan karyawan — siap setiap saat. Excel, PDF, dan grafik interaktif.",
  },
  {
    icon: Smartphone,
    title: "Akses dari HP & Tablet",
    desc: "Pantau bisnis dari mana saja. Karyawan absen dari HP. Dashboard bisa diakses dari browser.",
  },
  {
    icon: Globe,
    title: "Multi Cabang Terpusat",
    desc: "Semua outlet terpantau dari satu dashboard. Transfer stok antar cabang. Laporan konsolidasi.",
  },
  {
    icon: FileText,
    title: "Siap untuk Audit & Pajak",
    desc: "Semua transaksi tercatat rapi. Riwayat audit lengkap. Data siap untuk laporan pajak & akuntan.",
  },
];

const PRICING = [
  {
    name: "Retail Kecil",
    desc: "Untuk toko kecil yang baru mulai rapi.",
    price: "99.000",
    oldPrice: "149.000",
    badge: null,
    features: [
      "1 outlet",
      "Kasir & stok",
      "Laporan harian",
      "Shift kasir",
      "Export Excel",
    ],
  },
  {
    name: "Retail Plus",
    desc: "Untuk toko yang sudah berkembang.",
    price: "149.000",
    oldPrice: "199.000",
    badge: "Paling Laris",
    features: [
      "3 outlet",
      "Member & loyalitas",
      "Supplier & pembelian",
      "Diskon & promosi",
      "CRM pelanggan",
    ],
  },
  {
    name: "F&B Restoran",
    desc: "Khusus untuk restoran & kafe.",
    price: "199.000",
    oldPrice: "299.000",
    badge: "Best Value",
    features: [
      "3 outlet",
      "KDS dapur (otomatis)",
      "Gudang & transfer",
      "Retur barang",
      "Resep & biaya produksi",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Rina Wijaya",
    role: "Pemilik Toko Rina Fashion",
    text: "Dulu stok sering kacau, apalagi kalau lagi ramai. Sekarang semua otomatis. Stok berkurang sendiri, laporan langsung jadi.",
    rating: 5,
  },
  {
    name: "Andi Pratama",
    role: "Owner Kafe Bang Andi",
    text: "Yang paling saya suka bisa pantau penjualan dari HP. Lagi di luar kota pun tahu omzet hari ini berapa.",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "Finance PT Sari Makmur",
    text: "Laporan keuangan sekarang rapi. Akuntan senang, pajak siap. Gak perlu begadang rekap Excel lagi.",
    rating: 5,
  },
];

export default function LandingPage() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showSignup, setShowSignup] = useState(false);
  const [signupForm, setSignupForm] = useState({
    companyName: "",
    email: "",
    name: "",
    phone: "",
    coupon: "",
  });
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const openSignup = () => {
    setShowSignup(true);
    setSignupError("");
    setSignupSuccess("");
  };
  const closeSignup = () => {
    setShowSignup(false);
    setSignupError("");
    setSignupSuccess("");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess("");
    if (!signupForm.companyName || !signupForm.email) {
      setSignupError("Nama perusahaan dan email wajib diisi");
      return;
    }
    setSignupLoading(true);
    try {
      const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '/api/n8n/create-client';
      const n8nKey = process.env.NEXT_PUBLIC_N8N_API_KEY || '';
      const res = await fetch(n8nUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(n8nKey ? { "x-api-key": n8nKey } : {}),
          },
          body: JSON.stringify({
            companyName: signupForm.companyName,
            ownerEmail: signupForm.email,
            ownerName: signupForm.name || undefined,
            phone: signupForm.phone || undefined,
            couponCode: signupForm.coupon || undefined,
          }),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal mendaftar");
      setSignupSuccess("Pendaftaran berhasil! Cek email untuk link aktivasi.");
      setSignupForm({
        companyName: "",
        email: "",
        name: "",
        phone: "",
        coupon: "",
      });
    } catch (e: any) {
      setSignupError(e.message);
    } finally {
      setSignupLoading(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              {/* <Shield className="w-6 h-6 text-blue-600" /> */}
              <span className="text-2xl font-bold text-blue-600 font-script">
                hifloo
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {/* <button
                onClick={() => scrollTo("masalah")}
                className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
              >
                Masalah
              </button> */}
              <button
                onClick={() => scrollTo("fitur")}
                className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollTo("harga")}
                className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
              >
                Harga
              </button>
              {/* Language Switcher */}
              {/* <select value={lang} onChange={(e) => setLang(e.target.value as any)}
                className="text-sm text-slate-500 bg-transparent border border-slate-200 rounded-lg px-2 py-1.5 outline-none cursor-pointer hover:border-slate-300">
                <option value="id">🇮🇩 Indonesia</option>
                <option value="en">🇬🇧 English</option>
                <option value="ru">🇷🇺 Русский</option>
              </select> */}
              <a
                href="https://api-uat.hifloo.com/id/login"
                className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
              >
                {t("nav.masuk")}
              </a>
              <button
                onClick={() => openSignup()}
                className="bg-blue-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors shadow-sm"
              >
                {t("nav.coba")}
              </button>
            </div>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {mobileMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
            <button
              onClick={() => scrollTo("masalah")}
              className="block text-sm text-slate-600 py-2"
            >
              Masalah
            </button>
            <button
              onClick={() => scrollTo("fitur")}
              className="block text-sm text-slate-600 py-2"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollTo("harga")}
              className="block text-sm text-slate-600 py-2"
            >
              Harga
            </button>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="w-full text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none"
            >
              <option value="id">🇮🇩 Indonesia</option>
              <option value="en">🇬🇧 English</option>
              <option value="ru">🇷🇺 Русский</option>
            </select>
            <a
              href="https://api-uat.hifloo.com/id/login"
              className="block text-sm text-slate-600 py-2"
            >
              {t("nav.masuk")}
            </a>
            <button
              onClick={() => openSignup()}
              className="block w-full text-center bg-blue-600 text-white text-sm font-medium rounded-lg px-4 py-3"
            >
              {t("nav.coba")}
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 sm:pb-28 overflow-hidden ">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col items-center">
            {/* Left: Text */}
            <div className="w-full max-w-2xl mx-auto text-center lg:text-center">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-full px-4 py-1 text-sm text-blue-700 font-medium mb-6">
                <Star className="w-4 h-4" />
                500+ bisnis sudah pakai
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                Kasir, stok, karyawan, laporan.
                <span className="text-blue-600"> Satu aplikasi.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 max-w-xl mb-8 leading-relaxed mx-auto">
                Hifloo adalah sistem POS & HRIS all-in-one yang membantu UMKM
                mengelola toko, stok, absensi karyawan, dan laporan keuangan —
                tanpa pindah-pindah aplikasi.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => openSignup()}
                  className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
                >
                  Mulai Gratis <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("masalah")}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 rounded-lg px-6 py-3 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  Lihat Selengkapnya
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 max-w-sm mx-auto">
                {[
                  { label: "Bisnis Aktif", value: "500+" },
                  { label: "Transaksi Harian", value: "2.000+" },
                  { label: "Rating Pengguna", value: "4.9 ⭐" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-slate-900">
                      {s.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section id="masalah" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm text-blue-600 font-medium mb-2">
              MASALAH YANG DISELESAIKAN
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Bunuh masalah operasional bisnis Anda
            </h2>
            <p className="text-lg text-slate-500">
              Kami berbicara dengan puluhan pemilik UMKM. Ini masalah yang
              paling sering mereka hadapi — dan bagaimana Hifloo
              menyelesaikannya.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <p className="w-5 h-5 text-red-500 text-sm font-bold">?</p>
                    {/* <p.icon className="w-5 h-5 text-red-500" /> */}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FITUR ── */}
      <section id="fitur" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm text-blue-600 font-medium mb-2">
              FITUR LENGKAP
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Semua yang Anda butuhkan dalam satu dashboard
            </h2>
            <p className="text-lg text-slate-500">
              Dari kasir sampai laporan keuangan. Dari stok sampai absensi
              karyawan. Tanpa perlu gonta-ganti aplikasi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVICE SUPPORT ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-blue-600 font-medium mb-2">
              DEVICE SUPPORT
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Akses dari mana saja
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Aplikasi kasir bisa dipakai di berbagai perangkat — tanpa
              instalasi rumit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "HP Android",
                desc: "Aplikasi kasir mobile untuk smartphone Android. Ringan & cepat.",
              },
              {
                icon: Smartphone,
                title: "iPhone / iOS",
                desc: "Aplikasi kasir untuk iPhone. Support offline mode.",
                comingSoon: true,
              },
              {
                icon: Monitor,
                title: "Komputer / PC",
                desc: "Akses via browser Chrome, Firefox, Edge. Bisa untuk kasir & manajemen.",
              },
              {
                icon: Tablet,
                title: "Tablet",
                desc: "Tampilan optimal di iPad & tablet Android. Cocok untuk restoran.",
              },
            ].map((d) => (
              <div key={d.title} className="text-center p-6 relative">
                {(d as any).comingSoon && (
                  <span className="absolute top-2 right-2 bg-amber-100 text-amber-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    COMING SOON
                  </span>
                )}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                  {d.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-sm text-blue-600 font-medium mb-2">
              TESTIMONIAL
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Apa kata mereka?
            </h2>
            <p className="text-lg text-slate-500">
              Pemilik bisnis seperti Anda yang sudah merasakan manfaat Hifloo.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-slate-200 p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFLINE SYNC ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="POS Dashboard"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-sm text-blue-600 font-medium mb-2">OFFLINE SYNC</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Internet mati? Kasir tetap jalan.</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Transaksi tetap berjalan meskipun tidak ada koneksi internet. Data aman tersimpan di perangkat.{" "}
                <strong className="text-slate-700">Saat internet kembali, semua data sinkron otomatis.</strong>
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Transaksi tetap jalan</p>
                    <p className="text-sm text-slate-500">Kasir bisa terus melayani pelanggan. Semua transaksi tercatat di perangkat.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Sinkron otomatis</p>
                    <p className="text-sm text-slate-500">Begitu internet kembali, semua data langsung tersinkron. Tidak ada yang hilang.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Data aman</p>
                    <p className="text-sm text-slate-500">Enkripsi lokal. Data tidak akan hilang meskipun perangkat mati mendadak.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>

      {/* ── ABSENSI ── */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                alt="Employee Attendance"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-sm text-blue-600 font-medium mb-2">ABSENSI KARYAWAN</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Absensi dari HP. Rekap otomatis.</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Karyawan clock-in cukup dari HP mereka. GPS otomatis merekam lokasi.{" "}
                <strong className="text-slate-700">Rekap absensi, lembur, dan keterlambatan langsung jadi tanpa rekap manual.</strong>
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Smartphone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Clock-in dari HP</p>
                    <p className="text-sm text-slate-500">Karyawan cukup buka HP. Scan QR atau GPS. Tidak perlu mesin absen khusus.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Lokasi & selfie</p>
                    <p className="text-sm text-slate-500">Lokasi terekam otomatis. Bisa ditambah verifikasi foto untuk absen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Rekap & laporan</p>
                    <p className="text-sm text-slate-500">Rekap absensi, lembur, dan keterlambatan siap setiap saat. Langsung terhubung ke payroll.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>

      {/* ── TRANSFER STOK ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="Warehouse Stock"
                className="w-full rounded-2xl shadow-sm"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-sm text-blue-600 font-medium mb-2">TRANSFER STOK</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Stok terpusat. Transfer antar cabang semudah drag & drop.</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Kelola stok dari gudang pusat ke semua cabang. Setiap perpindahan barang tercatat otomatis.{" "}
                <strong className="text-slate-700">Tidak ada barang hilang. Tidak ada stok ganda.</strong>
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Package className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Gudang pusat & cabang</p>
                    <p className="text-sm text-slate-500">Pisahkan stok gudang dan stok toko. Atur minimal stok per cabang.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Transfer otomatis tercatat</p>
                    <p className="text-sm text-slate-500">Setiap barang keluar/masuk tercatat. Riwayat transfer lengkap dengan siapa dan kapan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Stok realtime</p>
                    <p className="text-sm text-slate-500">Pantau stok semua cabang dari satu dashboard. Notifikasi saat stok menipis.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>

      {/* ── PRICE ── */}
      <section id="harga" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm text-blue-600 font-medium mb-2">HARGA</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Harga bersahabat, manfaat maksimal
            </h2>
            <p className="text-lg text-slate-500">
              Semua paket sudah termasuk update fitur dan support. Trial 30 hari
              gratis tanpa kartu kredit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl border-2 p-6 transition-all hover:shadow-md ${
                  plan.badge === "Paling Laris"
                    ? "border-blue-500 shadow-sm"
                    : "border-slate-200"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-4 text-xs font-semibold px-3 py-1 rounded-full ${
                      plan.badge === "Paling Laris"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-white"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{plan.desc}</p>
                <div className="mb-5">
                  <span className="text-sm text-slate-300 line-through mr-2">
                    Rp {plan.oldPrice}
                  </span>
                  <span className="text-3xl font-bold text-slate-900">
                    Rp {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">/bln</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-slate-600 flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openSignup()}
                  className={`block w-full text-center text-sm font-medium rounded-lg py-2.5 transition-colors ${
                    plan.badge === "Paling Laris"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  Mulai Trial Gratis
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-slate-400">
              Semua paket termasuk:{" "}
              <span className="text-slate-600 font-medium">Update gratis</span>{" "}
              ·{" "}
              <span className="text-slate-600 font-medium">
                Support WhatsApp
              </span>{" "}
              · <span className="text-slate-600 font-medium">Backup data</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-blue-600 font-medium mb-2">FAQ</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Pertanyaan yang sering diajukan
            </h2>
          </div>

          <div className="space-y-2">
            {[
              {
                q: "Apakah bisa dipakai offline?",
                a: "Ya. Aplikasi kasir tetap berjalan meskipun tidak ada internet. Data akan sinkron otomatis saat koneksi kembali.",
              },
              {
                q: "Berapa lama trialnya?",
                a: "30 hari gratis, tanpa perlu kartu kredit. Kalau cocok, tinggal lanjut bayar. Kalau tidak, ya tidak usah.",
              },
              {
                q: "Apakah data saya aman?",
                a: "Data tersimpan di server cloud dengan enkripsi. Backup otomatis setiap hari. Kami juga sudah sesuai standar keamanan data.",
              },
              {
                q: "Bisa dipakai di HP?",
                a: "Bisa. Dashboard dan aplikasi kasir bisa diakses dari HP, tablet, maupun komputer — cukup pakai browser.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  {faq.q}
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === i ? "rotate-90" : ""}`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNUP MODAL ── */}
      {showSignup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={closeSignup}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Daftar Gratis
                </h2>
                <p className="text-sm text-slate-500">
                  30 hari trial, tanpa kartu kredit
                </p>
              </div>
              <button
                onClick={closeSignup}
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSignup} className="px-6 pb-6 pt-4 space-y-4">
              {signupError && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                  {signupError}
                </div>
              )}
              {signupSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm text-green-700">
                  ✅ {signupSuccess}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Nama Perusahaan <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={signupForm.companyName}
                  onChange={(e) =>
                    setSignupForm((f) => ({
                      ...f,
                      companyName: e.target.value,
                    }))
                  }
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="PT Maju Bersama"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="owner@perusahaan.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={signupForm.name}
                    onChange={(e) =>
                      setSignupForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Budi Owner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Telepon
                </label>
                <input
                  type="tel"
                  value={signupForm.phone}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Kode Kupon
                  <span className="text-gray-400 font-normal normal-case ml-1">
                    (opsional)
                  </span>
                </label>
                <input
                  type="text"
                  value={signupForm.coupon}
                  onChange={(e) =>
                    setSignupForm((f) => ({
                      ...f,
                      coupon: e.target.value.toUpperCase(),
                    }))
                  }
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-mono uppercase outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="TRIAL30"
                />
              </div>

              <button
                type="submit"
                disabled={signupLoading}
                className="w-full bg-blue-600 text-white text-sm font-semibold rounded-lg py-3 hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
              >
                {signupLoading
                  ? "Mendaftarkan..."
                  : "Daftar Gratis — 30 Hari Trial"}
              </button>

              <p className="text-xs text-slate-400 text-center leading-relaxed">
                Dengan mendaftar, Anda menyetujui
                <a href="#" className="text-blue-600 hover:underline mx-1">
                  Syarat & Ketentuan
                </a>
                dan{" "}
                <a href="#" className="text-blue-600 hover:underline mx-1">
                  Kebijakan Privasi
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="py-20 sm:py-24 bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-blue-400 font-medium mb-3">SIAP MULAI?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Rapikan bisnis Anda mulai hari ini
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Gratis 30 hari. Tidak perlu kartu kredit. Batalkan kapan saja —
            tidak ada yang dirugikan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openSignup()}
              className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg px-7 py-3 hover:bg-blue-700 transition-colors shadow-sm"
            >
              Mulai Gratis <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("fitur")}
              className="inline-flex items-center gap-1.5 text-sm text-slate-300 rounded-lg px-7 py-3 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              Pelajari Fitur
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-base font-bold text-white font-script">
                  hifloo
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Hifloo adalah sistem POS & HRIS all-in-one untuk UMKM Indonesia.
                Kami membantu 500+ bisnis mengelola kasir, stok, karyawan, dan
                laporan keuangan dalam satu platform yang simpel & terjangkau.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Produk */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Produk
              </p>
              <div className="space-y-2.5">
                <button
                  onClick={() => scrollTo("fitur")}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Fitur
                </button>
                <button
                  onClick={() => scrollTo("harga")}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Harga
                </button>
                <button
                  onClick={() => scrollTo("masalah")}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Masalah
                </button>
                <a
                  href="https://api-uat.hifloo.com/id/login"
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Login
                </a>
              </div>
            </div>

            {/* Solusi */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Solusi
              </p>
              <div className="space-y-2.5">
                <button
                  onClick={() => scrollTo("fitur")}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  POS Kasir
                </button>
                <button
                  onClick={() => scrollTo("fitur")}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Manajemen Stok
                </button>
                <button
                  onClick={() => scrollTo("fitur")}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Absensi Karyawan
                </button>
                <button
                  onClick={() => scrollTo("fitur")}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Laporan Keuangan
                </button>
              </div>
            </div>

            {/* Kontak */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Kontak
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400">
                    hello@hifloo.com
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400">
                    +62 812 3456 7890
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400">
                    Jakarta, Indonesia
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-slate-400">
                    <span className="text-slate-500">Jam operasional:</span>
                    <br />
                    Senin - Jumat, 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Hifloo. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
