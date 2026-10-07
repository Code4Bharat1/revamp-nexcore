import React from 'react';
import { FaAward, FaCreditCard, FaTruck, FaShareAlt, FaSms, FaStar, FaCheckCircle } from 'react-icons/fa';
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

const WhyChooseUs = () => {
  const integrations = [
    { icon: FaCreditCard, text: "Payment Gateway" },
    { icon: FaTruck, text: "Logistics" },
    { icon: FaShareAlt, text: "Social Media" },
    { icon: FaSms, text: "SMS Gateway" }
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 overflow-hidden border-t border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <FaStar className="text-xs" />
            <span>Why Choose Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Why Choose <span className="text-[#FF6600]">Odoo Implementers</span> for Odoo Implementation
          </motion.h2>

          {/* Description */}
          <motion.div variants={itemVariants} className="bg-white/5 rounded-2xl p-6 border border-white/15 mb-6">
            <p className="text-white/80 leading-relaxed font-medium mb-4">
              <strong className="text-white">Odoo Implementers</strong>, a trusted <strong className="text-[#FF6600]">Gold Partner of Odoo</strong> in India, provides impeccable E-commerce Integration Services that automate your online business.
            </p>
            <p className="text-white/70 leading-relaxed text-sm font-medium">
              Payment Gateway Integrations, Logistics Integrations, Social Media Integrations, and SMS Gateway Integrations are some of the futuristic services we offer to take your business to the right prospects.
            </p>
          </motion.div>

          {/* Integrations Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-6">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FF6600]/40 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="text-base" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white">{integration.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Gold Partner Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-[#FF6600] text-white px-6 py-3 rounded-2xl shadow-lg">
            <FaAward className="text-2xl" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-90">Certified</div>
              <div className="text-base font-black">Gold Partner</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center">
          <div className="relative bg-white/5 rounded-3xl p-3 sm:p-4 border border-white/15 w-full max-w-lg group">
            {/* Floating Badge */}
            <div className="absolute -top-3.5 -right-3.5 bg-[#FF6600] text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <FaCheckCircle className="text-xs" />
              <span>Trusted Partner</span>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-implementation-company.webp"
              alt="Odoo Implementation Company"
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* Stats Overlay */}
            <div className="mt-4 bg-[#08153A] border border-white/15 rounded-2xl p-4 shadow-xl">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#FF6600]">75+</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Projects</div>
                </div>
                <div className="w-px h-8 bg-white/15"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">20K+</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Hours</div>
                </div>
                <div className="w-px h-8 bg-white/15"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#FF6600]">Gold</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;