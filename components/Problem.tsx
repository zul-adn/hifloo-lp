"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Problem() {
  const { t } = useLanguage();

  const painPoints = [
    {
      titleKey: "problem.pain1.title",
      descKey: "problem.pain1.desc",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <linearGradient id="painGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7675" />
              <stop offset="100%" stopColor="#d63031" />
            </linearGradient>
          </defs>
          {/* Scattered documents */}
          <rect
            x="10"
            y="15"
            width="25"
            height="30"
            rx="4"
            fill="url(#painGrad1)"
            opacity="0.8"
            transform="rotate(-15 22.5 30)"
          />
          <rect
            x="35"
            y="20"
            width="25"
            height="30"
            rx="4"
            fill="url(#painGrad1)"
            opacity="0.6"
            transform="rotate(20 47.5 35)"
          />
          <rect
            x="45"
            y="35"
            width="25"
            height="30"
            rx="4"
            fill="url(#painGrad1)"
            opacity="0.9"
            transform="rotate(-10 57.5 50)"
          />
          {/* Warning lines */}
          <path
            d="M 20 50 Q 30 55, 40 50 Q 50 45, 60 50"
            stroke="#d63031"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,3"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="6"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      ),
    },
    {
      titleKey: "problem.pain2.title",
      descKey: "problem.pain2.desc",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <linearGradient id="painGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdcb6e" />
              <stop offset="100%" stopColor="#e17055" />
            </linearGradient>
          </defs>
          {/* Clock with overload */}
          <circle
            cx="40"
            cy="40"
            r="28"
            stroke="url(#painGrad2)"
            strokeWidth="4"
            fill="none"
          />
          <line
            x1="40"
            y1="40"
            x2="40"
            y2="20"
            stroke="url(#painGrad2)"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 40 40"
              to="360 40 40"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="40"
            y1="40"
            x2="55"
            y2="40"
            stroke="url(#painGrad2)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 40 40"
              to="360 40 40"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
          {/* Stress marks */}
          <path
            d="M 15 15 L 10 10"
            stroke="#e17055"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 65 15 L 70 10"
            stroke="#e17055"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 15 65 L 10 70"
            stroke="#e17055"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      ),
    },
    {
      titleKey: "problem.pain3.title",
      descKey: "problem.pain3.desc",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <linearGradient id="painGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a29bfe" />
              <stop offset="100%" stopColor="#6c5ce7" />
            </linearGradient>
          </defs>
          {/* People with question marks */}
          <g opacity="0.7">
            <circle cx="25" cy="30" r="10" fill="url(#painGrad3)" />
            <ellipse cx="25" cy="48" rx="12" ry="8" fill="url(#painGrad3)" />
          </g>
          <g opacity="0.5">
            <circle cx="55" cy="30" r="10" fill="url(#painGrad3)" />
            <ellipse cx="55" cy="48" rx="12" ry="8" fill="url(#painGrad3)" />
          </g>
          {/* Question marks */}
          <text
            x="25"
            y="68"
            fontSize="16"
            fill="#6c5ce7"
            textAnchor="middle"
            fontWeight="bold"
          >
            ?
          </text>
          <text
            x="55"
            y="68"
            fontSize="16"
            fill="#6c5ce7"
            textAnchor="middle"
            fontWeight="bold"
          >
            ?
          </text>
          <circle
            cx="25"
            cy="65"
            r="18"
            stroke="#6c5ce7"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="18;22;18"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      ),
    },
    {
      titleKey: "problem.pain4.title",
      descKey: "problem.pain4.desc",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <linearGradient id="painGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#74b9ff" />
              <stop offset="100%" stopColor="#0984e3" />
            </linearGradient>
          </defs>
          {/* Multiple overlapping windows */}
          <rect
            x="15"
            y="20"
            width="30"
            height="25"
            rx="3"
            fill="url(#painGrad4)"
            opacity="0.6"
            stroke="#0984e3"
            strokeWidth="2"
          />
          <rect
            x="25"
            y="30"
            width="30"
            height="25"
            rx="3"
            fill="url(#painGrad4)"
            opacity="0.7"
            stroke="#0984e3"
            strokeWidth="2"
          />
          <rect
            x="35"
            y="40"
            width="30"
            height="25"
            rx="3"
            fill="url(#painGrad4)"
            opacity="0.8"
            stroke="#0984e3"
            strokeWidth="2"
          />
          {/* Dollar signs */}
          <text x="40" y="15" fontSize="14" fill="#d63031" fontWeight="bold">
            $$
          </text>
          <text x="65" y="35" fontSize="14" fill="#d63031" fontWeight="bold">
            $$
          </text>
          {/* Confusion lines */}
          <path
            d="M 10 60 Q 40 65, 70 60"
            stroke="#0984e3"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            strokeDasharray="2,2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header with emphasis badge */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-6 leading-tight">
            {t("problem.title")}
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto leading-relaxed">
            {t("problem.subtitle")}
          </p>
        </motion.div>

        {/* Pain Points - New Dynamic Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 via-orange-400 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group-hover:border-transparent">
                {/* Icon Container */}
                <div className="flex items-start gap-6">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20"
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    {pain.icon}
                  </motion.div>

                  <div className="flex-1">
                    {/* Warning Badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                        Pain Point
                      </span>
                    </div>

                    <p className="text-lg font-semibold text-dark leading-snug mb-2">
                      {t(pain.titleKey)}
                    </p>
                    <p className="text-sm text-gray">{t(pain.descKey)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement with CTA hint */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 p-8 rounded-3xl border-2 border-orange-200 relative overflow-hidden">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
                color: "#e17055",
              }}
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative">
              <p className="text-2xl font-heading font-bold text-dark mb-3">
                Jika ini terdengar familiar, Anda tidak sendirian.
              </p>
              <p className="text-lg text-gray">
                Saatnya beralih ke sistem yang lebih{" "}
                <span className="text-primary font-semibold">
                  cerdas dan terintegrasi
                </span>{" "}
                ✨
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
