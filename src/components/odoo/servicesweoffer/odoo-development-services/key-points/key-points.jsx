import React from 'react';
import { FaCogs, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const OdooDevelopmentKeyPoints = () => {
  const keyPoints = [
    { id: 1, title: "Web Development", icon: "/images/odoo-images/odoo-icons/oodu-implementers-web-development-icon.png" },
    { id: 2, title: "On Demand Scalability", icon: "/images/odoo-images/odoo-icons/oodu-implementers-on-demand-scalability-icon.png" },
    { id: 3, title: "Uplift Business", icon: "/images/business-icon.png" },
    { id: 4, title: "Result-Oriented Workflow", icon: "/images/workflow-icon.png" },
    { id: 5, title: "Omni Channel Reach", icon: "/images/reach-icon.png" },
    { id: 6, title: "Enhanced Functionality", icon: "/images/functionality-icon.png" },
    { id: 7, title: "Updated Technology", icon: "/images/technology-icon.png" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <FaCogs className="text-sm" />
            <span>Key Points</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A]">
            Odoo Development <span className="text-[#FF6600]">Key Features</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {keyPoints.map((point) => (
            <motion.div
              key={point.id}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-[#08153A]/10 hover:border-[#FF6600]/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={point.icon}
                  alt={point.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-[#08153A] leading-tight">
                {point.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <a href="/contact">
            <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
              <FaRocket className="text-base" />
              <span>Get Started Today</span>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OdooDevelopmentKeyPoints;
