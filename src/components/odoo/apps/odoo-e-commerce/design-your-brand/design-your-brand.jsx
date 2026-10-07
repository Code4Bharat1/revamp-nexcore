"use client";

import React, { useState } from "react";
import { Play, X, Zap, Globe, Code, CheckCircle, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Designbrand = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: <Code className="w-4 h-4 text-[#FF6600]" />, text: "No Coding Required" },
    { icon: <Globe className="w-4 h-4 text-[#FF6600]" />, text: "Global Reach" },
    { icon: <CheckCircle className="w-4 h-4 text-[#FF6600]" />, text: "Professional Design" },
  ];

  return (
    <section className="relative bg-[#FFFFFF] py-20 lg:py-24 overflow-hidden border-b border-[#08153A]/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/15 text-[#08153A] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>A Strategic Approach to Design a Professional Website</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] leading-tight tracking-tight">
            Design your Brand's First{" "}
            <span className="text-[#FF6600]">E-commerce Website</span> with Odoo
          </h2>

          {/* Subheading Accent */}
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-20 bg-[#FF6600] rounded-full flex-shrink-0" />
            <p className="text-[#08153A]/70 text-base sm:text-lg leading-relaxed font-normal">
              Odoo E-commerce notches up your business and gives a global reach without any coding. Odoo Implementers are well-equipped in furnishing the best in business, cutting-edge open source website to take your brand to the target audience. We build a reliable relationship between your brand and customers with an inbuilt website.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#08153A]/5 px-4 py-2 rounded-full border border-[#08153A]/10 text-[#08153A] text-sm font-medium"
              >
                <div>{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-[#08153A]/5 border border-[#08153A]/10 p-5 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="bg-[#08153A] p-2 rounded-lg text-white">
                  <Award className="w-4 h-4 text-[#FF6600]" />
                </div>
              </div>
              <p className="text-[#08153A]/80 text-sm leading-relaxed">
                <strong className="text-[#08153A] font-semibold">Expert Implementation:</strong> Our team specializes in creating cutting-edge e-commerce solutions that connect your brand with customers worldwide.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Interactive Media */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group"
        >
          <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#08153A]/10">
            <img
              src="/images/App images/odoo-ecommerce-website-quotation.gif"
              alt="Odoo E-commerce"
              className="rounded-xl w-full h-auto object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayVideo}
                className="relative bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-full w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer"
                aria-label="Play Video"
              >
                <Play className="w-7 h-7 ml-1 text-white" fill="currentColor" />
              </motion.button>
            </div>

            {/* Watch Video Badge */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#08153A] text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold">
              <Play className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>Watch Video Demo</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-[#08153A] rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-[#FF6600] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Bar */}
              <div className="bg-[#0c1e4f] px-6 py-4 border-b border-white/10">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#FF6600]" />
                  Odoo E-commerce Demo
                </h3>
              </div>

              {/* Video Container */}
              <div className="relative pb-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/G8b4UZIcTfg?si=umWKrpz-HLOOScE3&autoplay=1"
                  title="Odoo Development Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Designbrand;