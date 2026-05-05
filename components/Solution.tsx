"use client";

import { motion } from "framer-motion";
import {
  RocketIcon3D,
  LightbulbIcon3D,
  IntegrationIcon3D,
  MobileIcon3D,
} from "./Icons3D";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Solution() {
  const { t } = useLanguage();

  const features = [
    { Icon: RocketIcon3D, textKey: "solution.feature1" },
    { Icon: LightbulbIcon3D, textKey: "solution.feature2" },
    { Icon: IntegrationIcon3D, textKey: "solution.feature3" },
    { Icon: MobileIcon3D, textKey: "solution.feature4" },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 text-primary bg-primary/8 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {t("solution.badge")}
          </span>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ink-900 mb-4 leading-tight tracking-tight">
            {t("solution.title")}
            <br />
            <span className="font-script text-primary">
              {t("solution.titleHighlight")}
            </span>
          </h2>

          <p className="text-lg text-ink-400 max-w-2xl mx-auto leading-relaxed">
            {t("solution.subtitle")}
          </p>
        </motion.div>

        {/* Feature highlights in grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12">
          {features.map((feature, index) => (
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
              whileHover={{ y: -2 }}
              className="bg-subtle border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-14 h-14 mb-3 mx-auto">
                <feature.Icon className="w-full h-full" />
              </div>
              <p className="text-ink-900 font-semibold text-center text-sm">
                {t(feature.textKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA box */}
        <motion.div
          className="bg-brand-900 p-8 lg:p-12 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative text-center">
            <p className="text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
              {t("solution.closing")}
            </p>
            <p className="text-lg text-white/70">
              {t("solution.closingHighlight")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
