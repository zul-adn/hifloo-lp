"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Problem() {
  const { t } = useLanguage();

  const painPoints = [
    {
      titleKey: "problem.pain1.title",
      descKey: "problem.pain1.desc",
      icon: (
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      titleKey: "problem.pain2.title",
      descKey: "problem.pain2.desc",
      icon: (
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      titleKey: "problem.pain3.title",
      descKey: "problem.pain3.desc",
      icon: (
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      titleKey: "problem.pain4.title",
      descKey: "problem.pain4.desc",
      icon: (
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 text-primary bg-primary/8 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Tantangan Bisnis
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ink-900 mb-4 leading-tight tracking-tight">
            {t("problem.title")}
          </h2>
          <p className="text-lg text-ink-400 max-w-2xl mx-auto leading-relaxed">
            {t("problem.subtitle")}
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5 mb-12">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: EASE,
              }}
              whileHover={{ y: -4 }}
              className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  {pain.icon}
                </div>

                <div className="flex-1">
                  <p className="text-base font-semibold text-ink-900 leading-snug mb-1.5">
                    {t(pain.titleKey)}
                  </p>
                  <p className="text-sm text-ink-400 leading-relaxed">
                    {t(pain.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <div className="bg-white border border-border rounded-2xl p-6 text-center">
            <p className="text-xl lg:text-2xl font-heading font-bold text-ink-900 mb-2">
              Jika ini terdengar familiar, Anda tidak sendirian.
            </p>
            <p className="text-base text-ink-400">
              Saatnya beralih ke sistem yang lebih{" "}
              <span className="text-primary font-semibold">
                cerdas dan terintegrasi
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
