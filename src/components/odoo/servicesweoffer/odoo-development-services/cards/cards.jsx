import React from 'react';
import { FaDesktop, FaPalette, FaCogs, FaGlobe, FaShoppingCart, FaWrench } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Card = () => {
  const card1Features = [
    { icon: FaDesktop, text: "Points Of Sale" },
    { icon: FaPalette, text: "Backend Theme" },
    { icon: FaCogs, text: "Backend Customization" }
  ];

  const card2Features = [
    { icon: FaGlobe, text: "Website Development" },
    { icon: FaShoppingCart, text: "E-commerce Development" },
    { icon: FaWrench, text: "Customization" }
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 overflow-hidden border-t border-b border-white/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <FaCogs className="text-sm" />
            <span>Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Development <span className="text-[#FF6600]">Solutions</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 rounded-3xl p-8 border border-white/15 hover:border-[#FF6600]/50 transition-all duration-300"
          >
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-2xl flex items-center justify-center">
                  <img
                    src="/images/odoo-images/odoo-web-development.webp"
                    alt="Backend Development"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-black text-white">
                  Backend Development
                </h3>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {card1Features.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6600]/30 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0">
                        <Icon className="text-sm" />
                      </div>
                      <span className="text-white/90 font-medium text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 rounded-3xl p-8 border border-white/15 hover:border-[#FF6600]/50 transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-2xl flex items-center justify-center">
                  <img
                    src="/images/odoo-images/odoo-web-development-in-backend-icon.webp"
                    alt="Web Development"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-black text-white">
                  Web Development
                </h3>
              </div>

              <div className="space-y-3">
                {card2Features.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6600]/30 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0">
                        <Icon className="text-sm" />
                      </div>
                      <span className="text-white/90 font-medium text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Card;
