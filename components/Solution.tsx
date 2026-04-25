"use client";

import { motion } from "framer-motion";
import { RocketIcon3D, LightbulbIcon3D, IntegrationIcon3D, MobileIcon3D } from "./Icons3D";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Solution() {
  const { t } = useLanguage();
  
  const features = [
    { Icon: RocketIcon3D, textKey: "solution.feature1" },
    { Icon: LightbulbIcon3D, textKey: "solution.feature2" },
    { Icon: IntegrationIcon3D, textKey: "solution.feature3" },
    { Icon: MobileIcon3D, textKey: "solution.feature4" }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-blue-50 to-white overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            {t("solution.badge")}
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-6 leading-tight">
            {t("solution.title")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary font-script">
              {t("solution.titleHighlight")}
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray max-w-3xl mx-auto leading-relaxed">
            {t("solution.subtitle")}
          </p>
        </motion.div>

        {/* Feature highlights in grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-primary"
            >
              <div className="w-16 h-16 mb-3 mx-auto">
                <feature.Icon className="w-full h-full" />
              </div>
              <p className="text-dark font-semibold text-center">{t(feature.textKey)}</p>
            </motion.div>
          ))}
        </div>

        {/* Main CTA box */}
        <motion.div 
          className="relative bg-gradient-to-br from-white to-blue-50 p-8 lg:p-12 rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <svg className="w-16 h-16 mx-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <p className="text-2xl lg:text-3xl font-heading font-bold text-dark mb-2">
              {t("solution.closing")}
            </p>
            <p className="text-xl text-primary font-semibold">
              {t("solution.closingHighlight")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
