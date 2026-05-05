"use client";

import { motion } from "framer-motion";
import {
  SalesIcon3D,
  HRIcon3D,
  AccountingIcon3D,
  CRMIcon3D,
} from "./Icons3D";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Features() {
  const { t } = useLanguage();

  const salesChart = [30, 50, 40, 70, 55, 80, 65];

  return (
    <section
      id="features"
      className="relative py-20 lg:py-28 bg-subtle overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 text-primary bg-primary/8 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {t("features.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ink-900 mb-4 tracking-tight leading-tight">
            {t("features.title")}{" "}
            <span className="font-script text-primary">
              {t("features.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-ink-400 max-w-2xl mx-auto leading-relaxed">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Sales — Large card kiri */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            whileHover={{ y: -4 }}
            className="md:row-span-2 bg-white border border-border rounded-2xl p-8 flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <SalesIcon3D className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-ink-900 mb-3">
              {t("features.sales")}
            </h3>
            <p className="text-ink-400 leading-relaxed flex-1">
              {t("features.salesDesc")}
            </p>
            {/* Mini visualization */}
            <div className="mt-6 bg-subtle rounded-xl p-4">
              <div className="flex justify-between items-end h-16 gap-1">
                {salesChart.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: i === salesChart.length - 1 ? "#0984e3" : "#e5e9f0",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* HR — Small card kanan atas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            whileHover={{ y: -4 }}
            className="bg-white border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
              <HRIcon3D className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-heading font-bold text-ink-900 mb-2">
              {t("features.hr")}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed">
              {t("features.hrDesc")}
            </p>
          </motion.div>

          {/* CRM — Small card kanan tengah */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: EASE }}
            whileHover={{ y: -4 }}
            className="bg-white border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
              <CRMIcon3D className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-heading font-bold text-ink-900 mb-2">
              {t("features.crm")}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed">
              {t("features.crmDesc")}
            </p>
          </motion.div>

          {/* Accounting — Wide bottom card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24, ease: EASE }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 bg-brand-900 border border-brand-900 rounded-2xl p-8 transition-all duration-200"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <AccountingIcon3D className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {t("features.accounting")}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t("features.accountingDesc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
