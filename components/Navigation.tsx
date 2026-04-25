"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  trackNavigation,
  trackCTAClick,
  trackDemoRequest,
} from "@/utils/analytics";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-script text-primary font-normal"
          >
            hifloo
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* <Link
              href="#features"
              onClick={() => trackNavigation("Features")}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              {t("nav.features")}
            </Link>
            <Link
              href="#benefits"
              onClick={() => trackNavigation("Benefits")}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              {t("nav.benefits")}
            </Link> */}
            {/* <Link href="#pricing" onClick={() => trackNavigation("Pricing")} className="text-dark hover:text-primary font-medium transition-colors">
              {t("nav.pricing")}
            </Link> */}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <motion.button
                onClick={() => setLanguage("id")}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  language === "id"
                    ? "bg-primary text-white shadow-md"
                    : "text-gray hover:text-dark"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ID
              </motion.button>
              <motion.button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  language === "en"
                    ? "bg-primary text-white shadow-md"
                    : "text-gray hover:text-dark"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
            </div>

            <Link
              href="#demo"
              onClick={() => trackDemoRequest("Navigation")}
              className="hidden sm:inline-block text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              {t("nav.demo")}
            </Link>
            <Link
              href="#demo"
              onClick={() => trackCTAClick("Mulai Gratis", "Navigation")}
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              {t("nav.start")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
