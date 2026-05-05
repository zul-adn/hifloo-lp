"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const footerSections = [
    {
      titleKey: "footer.product",
      links: [
        { labelKey: "footer.product.features", href: "#features" },
        { labelKey: "footer.product.pricing", href: "#pricing" },
        { labelKey: "footer.product.demo", href: "#demo" },
      ],
    },
    {
      titleKey: "footer.company",
      links: [
        { labelKey: "footer.company.about", href: "#about" },
        { labelKey: "footer.company.contact", href: "#contact" },
        { labelKey: "footer.company.blog", href: "#blog" },
      ],
    },
    {
      titleKey: "footer.legal",
      links: [
        { labelKey: "footer.legal.privacy", href: "#privacy" },
        { labelKey: "footer.legal.terms", href: "#terms" },
      ],
    },
  ];

  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-4xl font-script text-primary font-normal mb-4 inline-block">
              hifloo
            </Link>
            <p className="text-white/70 leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Microcopy */}
            <div className="mt-6 space-y-2">
              <p className="text-sm text-white/60 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("footer.feature1")}</span>
              </p>
              <p className="text-sm text-white/60 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("footer.feature2")}</span>
              </p>
              <p className="text-sm text-white/60 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("footer.feature3")}</span>
              </p>
              <p className="text-sm text-white/60 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("footer.feature4")}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-script text-primary mb-4">
                {t(section.titleKey)}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-lg font-script text-primary mb-4">{t("footer.resources")}</h4>
            <div className="space-y-3 text-white/70">
              <p>Email: info@hifloo.com</p>
              <p>Telepon: +62 xxx xxxx xxxx</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
