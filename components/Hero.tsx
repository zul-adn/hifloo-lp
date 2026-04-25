"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackCTAClick, trackDemoRequest } from "@/utils/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-blue-50 to-white overflow-hidden pt-20">
      {/* Animated Decorative Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 border-4 border-primary/20 rounded-2xl"
        animate={{ rotate: 360, y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 border-4 border-blue-400/20 rounded-full"
        animate={{ rotate: -360, y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            {/* <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-400/10 px-4 py-2 rounded-full mb-6 border-2 border-primary/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🚀
              </motion.span>
              <span className="text-primary font-bold text-sm">
                {t("hero.badge")}
              </span>
            </motion.div> */}

            <motion.h1
              className="text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-dark">{t("hero.title")}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary font-script">
                {t("hero.titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#demo"
                  onClick={() => trackCTAClick(t("hero.cta.start"), "Hero")}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                >
                  <span className="relative">{t("hero.cta.start")}</span>
                  <svg
                    className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#demo"
                  onClick={() => trackDemoRequest("Hero")}
                  className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
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
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: "✓", text: t("hero.badge1") },
                { icon: "✓", text: t("hero.badge2") },
                { icon: "✓", text: t("hero.badge3") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {item.icon}
                  </div>
                  <span className="text-dark font-semibold text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1.1 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.05 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-sm text-gray">
                  <span className="font-bold text-dark">500+</span>{" "}
                  {t("hero.social")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="relative lg:order-last order-first"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                viewBox="0 0 600 500"
                className="w-full h-auto drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="heroGrad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#74b9ff" />
                    <stop offset="100%" stopColor="#0984e3" />
                  </linearGradient>
                  <linearGradient
                    id="heroGrad2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a29bfe" />
                    <stop offset="100%" stopColor="#6c5ce7" />
                  </linearGradient>
                  <filter id="heroShadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                    <feOffset dx="0" dy="8" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.2" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background shape */}
                <rect
                  x="50"
                  y="50"
                  width="500"
                  height="400"
                  rx="24"
                  fill="#0984e3"
                  opacity="0.05"
                />

                {/* Main Dashboard Container */}
                <g filter="url(#heroShadow)">
                  {/* Header */}
                  <rect
                    x="70"
                    y="70"
                    width="460"
                    height="60"
                    rx="12"
                    fill="white"
                  />
                  <circle cx="100" cy="100" r="20" fill="url(#heroGrad1)" />
                  <rect
                    x="140"
                    y="90"
                    width="200"
                    height="10"
                    rx="5"
                    fill="#0984e3"
                    opacity="0.6"
                  />
                  <rect
                    x="140"
                    y="108"
                    width="150"
                    height="8"
                    rx="4"
                    fill="#0984e3"
                    opacity="0.3"
                  />

                  {/* Bell icon */}
                  <circle cx="480" cy="100" r="18" fill="#f8f9fa" />
                  <path d="M 480 92 L 476 102 L 484 102 Z" fill="#0984e3" />
                  <circle cx="488" cy="92" r="4" fill="#e74c3c" />
                </g>

                {/* Sales Card */}
                <g filter="url(#heroShadow)">
                  <rect
                    x="70"
                    y="150"
                    width="220"
                    height="140"
                    rx="16"
                    fill="white"
                  />
                  <rect
                    x="85"
                    y="165"
                    width="190"
                    height="8"
                    rx="4"
                    fill="#0984e3"
                    opacity="0.2"
                  />

                  {/* Mini Sales Icon */}
                  <ellipse cx="120" cy="200" rx="15" ry="5" fill="#0984e3" />
                  <ellipse cx="120" cy="195" rx="15" ry="5" fill="#74b9ff" />
                  <ellipse cx="120" cy="190" rx="15" ry="5" fill="#0984e3" />
                  <text
                    x="120"
                    y="195"
                    fontSize="12"
                    fontWeight="bold"
                    fill="#fff"
                    textAnchor="middle"
                  >
                    $
                  </text>

                  <rect
                    x="150"
                    y="185"
                    width="100"
                    height="8"
                    rx="4"
                    fill="#0984e3"
                    opacity="0.4"
                  />
                  <rect
                    x="150"
                    y="200"
                    width="80"
                    height="6"
                    rx="3"
                    fill="#0984e3"
                    opacity="0.25"
                  />

                  {/* Stats */}
                  <text
                    x="90"
                    y="245"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#2d3436"
                  >
                    $24.5K
                  </text>
                  <text x="90" y="265" fontSize="12" fill="#636e72">
                    Penjualan Bulan Ini
                  </text>
                  <rect
                    x="240"
                    y="235"
                    width="30"
                    height="30"
                    rx="6"
                    fill="#00b894"
                    opacity="0.2"
                  />
                  <text
                    x="255"
                    y="255"
                    fontSize="16"
                    fill="#00b894"
                    textAnchor="middle"
                  >
                    ↑
                  </text>
                </g>

                {/* HR Card */}
                <g filter="url(#heroShadow)">
                  <rect
                    x="310"
                    y="150"
                    width="220"
                    height="140"
                    rx="16"
                    fill="white"
                  />
                  <rect
                    x="325"
                    y="165"
                    width="190"
                    height="8"
                    rx="4"
                    fill="#6c5ce7"
                    opacity="0.2"
                  />

                  {/* Mini HR Icons - 3 people */}
                  <g transform="translate(335, 190)">
                    <circle cx="15" cy="10" r="8" fill="url(#heroGrad2)" />
                    <ellipse
                      cx="15"
                      cy="22"
                      rx="10"
                      ry="6"
                      fill="url(#heroGrad2)"
                    />
                  </g>
                  <g transform="translate(365, 190)">
                    <circle cx="15" cy="10" r="8" fill="url(#heroGrad2)" />
                    <ellipse
                      cx="15"
                      cy="22"
                      rx="10"
                      ry="6"
                      fill="url(#heroGrad2)"
                    />
                  </g>
                  <g transform="translate(395, 190)">
                    <circle cx="15" cy="10" r="8" fill="url(#heroGrad2)" />
                    <ellipse
                      cx="15"
                      cy="22"
                      rx="10"
                      ry="6"
                      fill="url(#heroGrad2)"
                    />
                  </g>

                  <text
                    x="330"
                    y="245"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#2d3436"
                  >
                    48
                  </text>
                  <text x="330" y="265" fontSize="12" fill="#636e72">
                    Total Karyawan
                  </text>
                  <rect
                    x="480"
                    y="235"
                    width="30"
                    height="30"
                    rx="6"
                    fill="#6c5ce7"
                    opacity="0.2"
                  />
                  <text
                    x="495"
                    y="255"
                    fontSize="16"
                    fill="#6c5ce7"
                    textAnchor="middle"
                  >
                    ✓
                  </text>
                </g>

                {/* Bottom Cards Row */}
                <g filter="url(#heroShadow)">
                  {/* Accounting Card */}
                  <rect
                    x="70"
                    y="310"
                    width="220"
                    height="120"
                    rx="16"
                    fill="white"
                  />

                  {/* Mini chart */}
                  <rect
                    x="95"
                    y="355"
                    width="10"
                    height="30"
                    rx="2"
                    fill="url(#heroGrad1)"
                  />
                  <rect
                    x="115"
                    y="340"
                    width="10"
                    height="45"
                    rx="2"
                    fill="url(#heroGrad1)"
                  />
                  <rect
                    x="135"
                    y="350"
                    width="10"
                    height="35"
                    rx="2"
                    fill="url(#heroGrad1)"
                  />
                  <rect
                    x="155"
                    y="335"
                    width="10"
                    height="50"
                    rx="2"
                    fill="url(#heroGrad1)"
                  />

                  <text x="85" y="410" fontSize="12" fill="#636e72">
                    Laporan Keuangan
                  </text>
                </g>

                <g filter="url(#heroShadow)">
                  {/* CRM Card */}
                  <rect
                    x="310"
                    y="310"
                    width="220"
                    height="120"
                    rx="16"
                    fill="white"
                  />

                  {/* Mini heart */}
                  <path
                    d="M 395 355 C 395 355, 385 345, 385 340 C 385 335, 390 332, 393 335 C 394 336, 395 337, 395 337 C 395 337, 396 336, 397 335 C 400 332, 405 335, 405 340 C 405 345, 395 355, 395 355 Z"
                    fill="url(#heroGrad1)"
                  />
                  <circle cx="390" cy="340" r="3" fill="#fff" opacity="0.4" />

                  <text
                    x="325"
                    y="395"
                    fontSize="18"
                    fontWeight="bold"
                    fill="#2d3436"
                  >
                    156
                  </text>
                  <text x="325" y="410" fontSize="12" fill="#636e72">
                    Total Pelanggan
                  </text>
                  <rect
                    x="480"
                    y="375"
                    width="30"
                    height="30"
                    rx="6"
                    fill="#e74c3c"
                    opacity="0.2"
                  />
                  <text
                    x="495"
                    y="395"
                    fontSize="14"
                    fill="#e74c3c"
                    textAnchor="middle"
                  >
                    ♥
                  </text>
                </g>

                {/* Floating elements */}
                <circle cx="520" cy="120" r="8" fill="#74b9ff" opacity="0.3">
                  <animate
                    attributeName="cy"
                    values="120;110;120"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="100" cy="320" r="6" fill="#a29bfe" opacity="0.3">
                  <animate
                    attributeName="cy"
                    values="320;310;320"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
