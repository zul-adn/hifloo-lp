"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackPricingCTA } from "@/utils/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      name: t("pricing.plan1"),
      subtitle: t("pricing.plan1Sub"),
      price: "Rp 99.000",
      period: t("pricing.perMonth"),
      description: t("pricing.plan1Desc"),
      features: [
        t("pricing.feature1.1"),
        t("pricing.feature1.2"),
        t("pricing.feature1.3"),
        t("pricing.feature1.4"),
        t("pricing.feature1.5"),
        t("pricing.feature1.6"),
      ],
      cta: t("pricing.cta1"),
      ctaLink: "#cta",
      popular: false,
    },
    {
      name: t("pricing.plan2"),
      subtitle: t("pricing.plan2Sub"),
      price: "Rp 299.000",
      period: t("pricing.perMonth"),
      description: t("pricing.plan2Desc"),
      features: [
        t("pricing.feature2.1"),
        t("pricing.feature2.2"),
        t("pricing.feature2.3"),
        t("pricing.feature2.4"),
        t("pricing.feature2.5"),
        t("pricing.feature2.6"),
        t("pricing.feature2.7"),
        t("pricing.feature2.8"),
        t("pricing.feature2.9"),
      ],
      cta: t("pricing.cta2"),
      ctaLink: "#cta",
      popular: true,
    },
    {
      name: t("pricing.plan3"),
      subtitle: t("pricing.plan3Sub"),
      price: "Custom",
      period: "",
      description: t("pricing.plan3Desc"),
      features: [
        t("pricing.feature3.1"),
        t("pricing.feature3.2"),
        t("pricing.feature3.3"),
        t("pricing.feature3.4"),
        t("pricing.feature3.5"),
        t("pricing.feature3.6"),
        t("pricing.feature3.7"),
        t("pricing.feature3.8"),
        t("pricing.feature3.9"),
      ],
      cta: t("pricing.cta3"),
      ctaLink: "#cta",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-white overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0984e3 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header - Cleaner, more minimal */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-primary">{t("pricing.badge")}</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-dark mb-4 leading-tight">
            {t("pricing.title")} <span className="text-primary">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray">
            {t("pricing.subtitle")} <span className="text-primary font-semibold">{t("pricing.subtitleHighlight")}</span>, upgrade kapan saja.
          </p>
        </motion.div>

        {/* Pricing Cards - Modern, clean design */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Popular badge - subtle */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      {t("pricing.popular")}
                    </div>
                  </div>
                )}

                {/* Card */}
                <motion.div
                  className={`relative h-full rounded-2xl p-8 transition-all ${
                    tier.popular
                      ? "bg-gradient-to-br from-primary/5 via-white to-white border-2 border-primary shadow-xl shadow-primary/10"
                      : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                  }`}
                  whileHover={{ y: tier.popular ? 0 : -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-heading font-bold text-dark mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-gray">{tier.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`text-4xl font-bold ${tier.popular ? 'text-primary' : 'text-dark'}`}>
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-gray">{tier.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray">{tier.description}</p>
                  </div>

                  {/* CTA Button */}
                  <Link href={tier.ctaLink} onClick={() => trackPricingCTA(tier.name, tier.cta)}>
                    <motion.button
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all mb-8 ${
                        tier.popular
                          ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
                          : "bg-dark text-white hover:bg-dark/90"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {tier.cta}
                    </motion.button>
                  </Link>

                  {/* Features - Minimal, clean list */}
                  <div className="space-y-3 border-t border-gray-100 pt-6">
                    <p className="text-xs font-semibold text-gray uppercase tracking-wider mb-4">
                      {t("pricing.features")}
                    </p>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-primary' : 'text-dark'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note - Minimal */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray text-sm">
            {t("pricing.note")} <span className="text-primary font-semibold">{t("pricing.noteHighlight1")}</span> & <span className="text-primary font-semibold">{t("pricing.noteHighlight2")}</span>
          </p>
          <p className="text-sm text-gray mt-3">
            {t("pricing.question")} <Link href="#cta" onClick={() => trackPricingCTA("Custom", "Contact")} className="text-primary font-semibold hover:underline">{t("pricing.contact")}</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
