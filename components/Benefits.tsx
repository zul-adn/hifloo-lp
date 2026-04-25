"use client";

import { motion } from "framer-motion";
import {
  SpeedIcon3D,
  DataIcon3D,
  IntegrationIcon3D,
  ScaleIcon3D,
} from "./Icons3D";
import { useLanguage } from "@/contexts/LanguageContext";

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
      className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-blue-500 to-primary overflow-hidden"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-32 h-32 bg-white/20 rounded-full blur-xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            {t("benefits.title")} <br />
            <span className="font-script">{t("benefits.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-white rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>

              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 hover:border-white/40 transition-all">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <div className="relative w-20 h-20 mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <benefit.Icon className="w-full h-full" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-white mb-3 text-center">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-white/90 text-lg text-center leading-relaxed">
                  {t(benefit.descKey)}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
