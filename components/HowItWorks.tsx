"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Daftar Akun",
      description: "Buat akun dalam hitungan detik",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Setup Bisnis Anda",
      description: "Sesuaikan sesuai kebutuhan bisnis",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Mulai Kelola",
      description: "Jalankan operasional lebih efisien",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-32 bg-gradient-to-br from-light via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⚡ Super Mudah
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-dark mb-6">
            Mulai dalam{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary">
              3 Langkah Mudah
            </span>
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            Tidak perlu instalasi rumit atau training lama
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated Connection Path */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Card */}
                <motion.div
                  className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-primary"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-blue-400 to-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  
                  <div className="relative">
                    {/* Number Badge - floating above */}
                    <motion.div 
                      className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-primary/50 z-10"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <div className="mt-12 mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-heading font-bold text-dark mb-4 text-center group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray text-lg leading-relaxed text-center mb-6">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="flex justify-center gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className={`h-1 rounded-full transition-all ${
                            i === index 
                              ? 'w-8 bg-primary' 
                              : 'w-2 bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector (desktop only) */}
                {index < 2 && (
                  <motion.div 
                    className="hidden lg:block absolute top-32 -right-6 text-primary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xl text-gray mb-6">
            Siap untuk memulai transformasi bisnis Anda?
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Sekarang →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
