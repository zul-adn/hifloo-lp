"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "TechCorp",
    width: 140,
    height: 50,
  },
  {
    name: "Innovation Ltd",
    width: 160,
    height: 50,
  },
  {
    name: "Digital Solutions",
    width: 150,
    height: 50,
  },
  {
    name: "Global Trade",
    width: 130,
    height: 50,
  },
  {
    name: "Smart Business",
    width: 145,
    height: 50,
  },
  {
    name: "Modern Retail",
    width: 155,
    height: 50,
  },
];

export default function ClientLogos() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #0984e3 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray text-sm font-semibold uppercase tracking-wider mb-4">
            Dipercaya oleh
          </p>
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-dark">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">500+ Perusahaan</span> di Indonesia
          </h3>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Placeholder Logo Card */}
              <div 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center"
                style={{ width: client.width, height: client.height }}
              >
                {/* Placeholder SVG Logo */}
                <svg
                  width={client.width - 30}
                  height={client.height - 20}
                  viewBox="0 0 120 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40 group-hover:opacity-70 transition-opacity"
                >
                  {/* Logo shape - abstract geometric design */}
                  <rect
                    x="0"
                    y="8"
                    width="15"
                    height="15"
                    rx="3"
                    fill="#0984e3"
                    className="group-hover:fill-primary transition-colors"
                  />
                  <rect
                    x="18"
                    y="5"
                    width="10"
                    height="20"
                    rx="2"
                    fill="#636e72"
                    className="group-hover:fill-primary/70 transition-colors"
                  />
                  <rect
                    x="31"
                    y="10"
                    width="12"
                    height="12"
                    rx="6"
                    fill="#0984e3"
                    className="group-hover:fill-primary transition-colors"
                  />
                  
                  {/* Text representation */}
                  <text
                    x="48"
                    y="20"
                    fontSize="14"
                    fontWeight="600"
                    fill="#2d3436"
                    className="group-hover:fill-primary transition-colors"
                  >
                    {client.name.split(' ')[0]}
                  </text>
                </svg>
              </div>

              {/* Hover effect backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray text-sm">
            Dan masih banyak lagi bisnis yang telah berkembang bersama <span className="text-primary font-semibold">HiFloo</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
