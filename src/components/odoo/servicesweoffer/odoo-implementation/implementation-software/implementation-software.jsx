import React, { useState } from 'react';
import { FaCogs, FaCheckCircle, FaRocket, FaChartLine, FaArrowRight, FaStar, FaShieldAlt, FaUsers } from 'react-icons/fa';
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

const EcommerceSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: FaCheckCircle, text: "Smooth Process" },
    { icon: FaRocket, text: "Fast Implementation" },
    { icon: FaShieldAlt, text: "Zero Downtime" }
  ];

  const industries = [
    { icon: FaChartLine, text: "Trading & Manufacturing" },
    { icon: FaShieldAlt, text: "eCommerce Solutions" },
    { icon: FaUsers, text: "Accounts & Finance" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 relative z-10">
        {/* Image Section */}
        <div className="relative flex justify-center order-2 lg:order-1">
          <div className="relative bg-white rounded-3xl shadow-xl p-3 sm:p-4 border border-[#08153A]/10 w-full max-w-lg group">
            {/* Floating Badge */}
            <div className="absolute -top-3.5 -right-3.5 bg-[#FF6600] text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <FaStar className="text-xs" />
              <span>Gold Partner</span>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-implementation-gold-partner.webp"
              alt="Odoo Implementation Gold Partner"
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* Feature Pills on Image */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#08153A] text-white px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold"
                  >
                    <Icon className="text-[#FF6600] text-xs" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <FaCogs className="text-sm" />
            <span>Implementation Software</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-6 leading-tight">
            Manage Your <span className="text-[#FF6600]">Process Flow Smoothly</span> with Odoo Implementation
          </motion.h2>

          {/* Description 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-[#08153A]/10 border-l-4 border-l-[#FF6600]">
            <p className="text-[#08153A]/80 leading-relaxed font-medium">
              <strong className="text-[#08153A]">Odoo Implementation</strong> is a crucial process that can leverage your business. <strong className="text-[#FF6600]">Odoo Implementers'</strong> highly skilled developers ensure that the entire process of Odoo implementation remains smooth without affecting the business operations.
            </p>
          </motion.div>

          {/* Subheading */}
          <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl font-black text-[#08153A] mb-4 flex items-center justify-center lg:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#08153A] text-[#FF6600] flex items-center justify-center">
              <FaRocket className="text-sm" />
            </div>
            <span>Odoo Implementation Services</span>
          </motion.h3>

          {/* Description 2 */}
          <motion.div variants={itemVariants} className="bg-[#08153A]/[0.02] rounded-2xl p-6 border border-[#08153A]/10 mb-6">
            <p className="text-[#08153A]/80 leading-relaxed font-medium">
              <strong className="text-[#08153A]">Odoo Implementers</strong> develops a rich and user-friendly application for the business environment that enhances performance and productivity. Odoo finds applications in industries like trading, manufacturing, eCommerce, accounts, and finance. <strong className="text-[#FF6600]">Odoo Implementation</strong> delivers the best business standards and results.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-200 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#08153A] text-[#FF6600] flex items-center justify-center">
                    <Icon className="text-base" />
                  </div>
                  <span className="text-xs font-bold text-[#08153A] text-center">{industry.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <a
              href="/servicesweoffer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <FaCogs className="text-base" />
                <span>View All Services</span>
                <FaArrowRight className="text-xs" />
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceSection;