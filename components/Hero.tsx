"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackCTAClick, trackDemoRequest } from "@/utils/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { t } = useLanguage();

  const chartHeights = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];
  const recentInvoices = [
    {
      id: "INV-2024",
      name: "PT Maju Jaya",
      amount: "Rp 12.5M",
      status: "Lunas",
    },
    {
      id: "INV-2023",
      name: "CV Berkah",
      amount: "Rp 4.2M",
      status: "Pending",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-heading font-bold text-ink-900 leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              {t("hero.title")}
              <br />
              <span className="font-script text-primary">
                {t("hero.titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-ink-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            >
              <Link
                href="#demo"
                onClick={() => trackCTAClick(t("hero.cta.start"), "Hero")}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                <span>{t("hero.cta.start")}</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="#demo"
                onClick={() => trackDemoRequest("Hero")}
                className="inline-flex items-center justify-center gap-2 border border-border text-ink-900 px-8 py-4 rounded-xl font-semibold text-base hover:border-primary hover:text-primary transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("hero.cta.demo")}
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start items-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
            >
              {[
                t("hero.badge1"),
                t("hero.badge2"),
                t("hero.badge3"),
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border border-border px-3 py-1.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-ink-900 font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-ink-400">
                  <span className="font-semibold text-ink-900">500+</span>{" "}
                  {t("hero.social")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            className="relative lg:order-last order-first"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-2xl shadow-2xl border border-border overflow-hidden bg-white"
            >
              {/* Topbar */}
              <div className="bg-white border-b border-border px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">H</span>
                  </div>
                  <span className="font-semibold text-ink-900 text-sm">
                    HiFloo Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-ink-400">Online</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="bg-subtle p-4 grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 border border-border">
                  <p className="text-xs text-ink-400 mb-1">Penjualan</p>
                  <p className="text-lg font-bold text-ink-900">Rp 48.2M</p>
                  <p className="text-xs text-green-600 font-medium">↑ 12.5%</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-border">
                  <p className="text-xs text-ink-400 mb-1">Karyawan</p>
                  <p className="text-lg font-bold text-ink-900">48</p>
                  <p className="text-xs text-blue-600 font-medium">Aktif</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-border">
                  <p className="text-xs text-ink-400 mb-1">Pelanggan</p>
                  <p className="text-lg font-bold text-ink-900">156</p>
                  <p className="text-xs text-primary font-medium">↑ 8 baru</p>
                </div>
              </div>

              {/* Chart area */}
              <div className="p-4 bg-white">
                <p className="text-xs font-semibold text-ink-900 mb-3">
                  Pendapatan Bulanan
                </p>
                <div className="flex items-end gap-2 h-20">
                  {chartHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "#0984e3" : "#e5e9f0",
                      }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-ink-400">Jan</span>
                  <span className="text-[10px] text-ink-400">Des</span>
                </div>
              </div>

              {/* Recent activity */}
              <div className="px-4 pb-4 bg-white border-t border-border pt-3">
                <p className="text-xs font-semibold text-ink-900 mb-2">
                  Invoice Terbaru
                </p>
                {recentInvoices.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1.5"
                  >
                    <div>
                      <p className="text-xs font-medium text-ink-900">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-ink-400">{item.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-ink-900">
                        {item.amount}
                      </p>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                          item.status === "Lunas"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
