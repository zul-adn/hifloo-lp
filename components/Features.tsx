"use client";

import { motion } from "framer-motion";
import { SalesIcon3D, HRIcon3D, AccountingIcon3D, CRMIcon3D } from "./Icons3D";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();
  
  const features = [
    {
      Icon: SalesIcon3D,
      titleKey: "features.sales",
      descKey: "features.salesDesc",
    },
    {
      Icon: HRIcon3D,
      titleKey: "features.hr",
      descKey: "features.hrDesc",
    },
    {
      Icon: AccountingIcon3D,
      titleKey: "features.accounting",
      descKey: "features.accountingDesc",
    },
    {
      Icon: CRMIcon3D,
      titleKey: "features.crm",
      descKey: "features.crmDesc",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z"/>
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
              </svg>
              {t("features.badge")}
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-4">
            {t("features.title")} <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary font-script">
              {t("features.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-blue-400 to-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              
              <div className="relative bg-white rounded-3xl p-8 -m-8">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {index + 1}
                </div>

                {/* Icon Container with background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative w-24 h-24 mx-auto transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <feature.Icon className="w-full h-full" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray leading-relaxed">{t(feature.descKey)}</p>
                
                {/* Arrow indicator */}
                <motion.div 
                  className="mt-6 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Pelajari lebih lanjut
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
