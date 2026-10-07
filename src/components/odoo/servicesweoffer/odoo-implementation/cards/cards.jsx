"use client";
import React from "react";
import {
  FaRocket,
  FaShieldAlt,
  FaFileAlt,
  FaCog,
  FaDollarSign,
  FaBullseye,
  FaWallet,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaWrench,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaLifeRing,
  FaExchangeAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const EcommerceBenefits = () => {
  const benefits = [
    { icon: FaRocket, title: "Advanced Optimization", description: "Full potential solution" },
    { icon: FaShieldAlt, title: "Secured Implementation", description: "Reduce cyber attack risks" },
    { icon: FaFileAlt, title: "Customized Odoo Reports", description: "PDFs, Excel/CSVs" },
    { icon: FaCog, title: "Stable Operation", description: "Fix bugs in the system" },
    { icon: FaDollarSign, title: "Low-cost Implementation", description: "No license fee" },
  ];

  const phases = [
    { icon: FaBullseye, text: "Defining Business Goals" },
    { icon: FaWallet, text: "Allocating Budget" },
    { icon: FaDatabase, text: "Gathering Information & Requirement" },
    { icon: FaLayerGroup, text: "Defining Implementation Phases" },
    { icon: FaServer, text: "Selecting Best Hosting Plan" },
    { icon: FaWrench, text: "Installation and Configuration" },
    { icon: FaExchangeAlt, text: "Data Migration" },
    { icon: FaCheckCircle, text: "Testing Phase" },
    { icon: FaChalkboardTeacher, text: "Training & Live" },
    { icon: FaLifeRing, text: "Support & Maintenance" },
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
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <FaRocket className="text-sm" />
            <span>Implementation Benefits</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A]">
            Why Choose <span className="text-[#FF6600]">Odoo Implementation</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Benefits */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-implementation-business-results.webp"
                  alt="Key Benefits"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Key Benefits of Odoo Implementation
              </h3>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon || FaCog;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white mt-0.5">
                      <Icon className="text-sm" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#08153A]/80 font-medium pt-0.5">
                      <strong className="text-[#08153A] font-black">{benefit.title}:</strong> {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 2 - Implementation Phases */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-implementation-company-business-goals.webp"
                  alt="Implementation Phases"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Implementation Process
              </h3>
            </div>

            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {phases.map((phase, index) => {
                const Icon = phase.icon || FaCog;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#08153A] text-[#FF6600] flex items-center justify-center">
                      <Icon className="text-sm" />
                    </div>
                    <p className="text-[#08153A] text-xs sm:text-sm font-bold">
                      {phase.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EcommerceBenefits;