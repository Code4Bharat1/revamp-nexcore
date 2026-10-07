import React from 'react';
import { FaUsers, FaRocket, FaCogs, FaStar, FaCheckCircle } from 'react-icons/fa';
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

const WhyodooImplementers = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Team of experts who leverage their skillset to curate the best possible solution for the industry",
    },
    {
      icon: FaRocket,
      title: "SME & MSME Solutions",
      description: "Odoo development capabilities to build and deploy solutions for SME's and MSME's",
    },
    {
      icon: FaCogs,
      title: "Technical Excellence",
      description: "Equipped with technical skills to make a fully functional ERP coupled with custom functionalities",
    }
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 overflow-hidden border-t border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative bg-white/5 rounded-3xl p-4 sm:p-6 border border-white/15 group">
            {/* Floating Badge */}
            <div className="absolute -top-3.5 -right-3.5 bg-[#FF6600] text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <FaStar className="text-xs" />
              <span>Trusted Partner</span>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-documents-software.webp"
              alt="Odoo Development Software"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Stats Badge */}
          <div className="mt-6 sm:mt-0 sm:absolute sm:-bottom-6 sm:left-1/2 sm:-translate-x-1/2 bg-[#08153A] rounded-2xl border border-white/20 shadow-2xl px-6 py-4 flex items-center justify-around gap-6 z-20 w-full sm:w-auto">
            <div className="text-center">
              <div className="text-2xl font-black text-[#FF6600]">75+</div>
              <div className="text-xs text-white/70 font-semibold uppercase tracking-wider">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/15"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">20K+</div>
              <div className="text-xs text-white/70 font-semibold uppercase tracking-wider">Hours</div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Content */}
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
            <FaCheckCircle className="text-sm" />
            <span>Why Choose Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Why <span className="text-[#FF6600]">Odoo Implementers</span> for Odoo Development
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed font-medium">
            We combine <strong className="text-white">technical expertise</strong> with <strong className="text-[#FF6600]">industry knowledge</strong> to deliver exceptional Odoo solutions tailored to your business needs.
          </motion.p>

          {/* Reasons Cards */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/15 hover:border-[#FF6600]/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6600] text-white flex items-center justify-center flex-shrink-0">
                    <Icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-medium">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a href="/contact">
              <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                <FaRocket className="text-base" />
                <span>Get Started</span>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyodooImplementers;