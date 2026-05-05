"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  trackNavigation,
  trackCTAClick,
  trackDemoRequest,
} from "@/utils/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

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
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/98 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-script text-primary font-normal"
          >
            hifloo
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              onClick={() => trackNavigation("Features")}
              className="text-ink-900 hover:text-primary font-medium transition-colors duration-200"
            >
              {t("nav.features")}
            </Link>
            <Link
              href="#benefits"
              onClick={() => trackNavigation("Benefits")}
              className="text-ink-900 hover:text-primary font-medium transition-colors duration-200"
            >
              {t("nav.benefits")}
            </Link>
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage("id")}
                className={`px-3 py-1.5 rounded-full text-sm font-normal transition-colors duration-200 ${
                  language === "id"
                    ? "bg-white text-primary shadow-sm"
                    : "text-ink-400 hover:text-ink-900"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-full text-sm font-normal transition-colors duration-200 ${
                  language === "en"
                    ? "bg-white text-primary shadow-sm"
                    : "text-ink-400 hover:text-ink-900"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="#demo"
              onClick={() => trackDemoRequest("Navigation")}
              className="hidden sm:inline-block text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
            >
              {t("nav.demo")}
            </Link>
            <Link
              href="#demo"
              onClick={() => trackCTAClick("Mulai Gratis", "Navigation")}
              className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
            >
              {t("nav.start")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
