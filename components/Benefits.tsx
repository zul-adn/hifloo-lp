"use client";

import { motion } from "framer-motion";
import {
  SpeedIcon3D,
  DataIcon3D,
  IntegrationIcon3D,
  ScaleIcon3D,
} from "./Icons3D";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      Icon: SpeedIcon3D,
      titleKey: "benefits.speed",
      descKey: "benefits.speedDesc",
    },
    {
      Icon: DataIcon3D,
      titleKey: "benefits.insight",
      descKey: "benefits.insightDesc",
    },
    {
      Icon: IntegrationIcon3D,
      titleKey: "benefits.integration",
      descKey: "benefits.integrationDesc",
    },
    {
      Icon: ScaleIcon3D,
      titleKey: "benefits.scale",
      descKey: "benefits.scaleDesc",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative py-20 lg:py-28 bg-brand-900 overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 text-white bg-white/10 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-white/15">
            {t("benefits.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight tracking-tight">
            {t("benefits.title")}{" "}
            <span className="font-script text-white/90">
              {t("benefits.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t("benefits.subtitle")}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-5 mx-auto">
                <benefit.Icon className="w-full h-full" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-white mb-2 text-center">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-white/70 text-base text-center leading-relaxed">
                {t(benefit.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
