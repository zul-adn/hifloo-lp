"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SocialProof() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: "social.testimonial1",
      author: "Owner UKM",
      companyKey: "social.company1",
    },
    {
      quoteKey: "social.testimonial2",
      author: "CEO",
      companyKey: "social.company2",
    },
    {
      quoteKey: "social.testimonial3",
      author: "Finance Manager",
      companyKey: "social.company3",
    },
  ];

  const stats = [
    { value: "500+", label: "Perusahaan Percaya" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
    { value: "4.9/5", label: "Rating Pengguna" },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
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
            {t("social.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ink-900 mb-4 tracking-tight leading-tight">
            {t("social.title")}{" "}
            <span className="font-script text-primary">
              {t("social.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-ink-400 max-w-2xl mx-auto leading-relaxed">
            {t("social.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
              whileHover={{ y: -4 }}
              className="bg-subtle border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-ink-900 text-base mb-6 leading-relaxed">
                &ldquo;{t(testimonial.quoteKey)}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-ink-400 text-xs">
                    {t(testimonial.companyKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="bg-subtle border border-border rounded-2xl p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: EASE,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-ink-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
