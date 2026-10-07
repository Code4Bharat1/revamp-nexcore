"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, X, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Handypoint = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            <span>A Handy Point Of Sale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] leading-tight tracking-tight">
            Easy to Install, User Friendly{" "}
            <span className="text-[#FF6600]">Odoo POS</span>
          </h2>

          <div className="flex items-start gap-4">
            <div className="w-1.5 h-16 bg-[#FF6600] rounded-full flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#08153A] leading-snug">
              A Multi-Outlet Retail Platform To Boost Your Sales
            </h3>
          </div>

          <p className="text-[#08153A]/70 text-base sm:text-lg leading-relaxed font-normal">
            Technology can take your business to a new greater height. Odoo Point Of Sale caters to your business demands and delivers accurate results. Looking for experts to give your business the push it needs? Odoo Implementers has extensive expertise and experience in helping you become a part of Odoo Point Of Sale. Ensure optimized business development with Odoo POS.
          </p>

          <div className="pt-2">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#08153A] hover:bg-[#FF6600] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore POS Features</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Section - Image/Video */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group"
        >
          <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#08153A]/10">
            <img
              src="/images/App images/odoo-point-of-sale-development-user-friendly-pos.gif"
              alt="Odoo POS Software"
              className="rounded-xl w-full h-auto object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayVideo}
                className="relative bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-full w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer"
                aria-label="Play Demo"
              >
                <Play className="w-7 h-7 ml-1 text-white" fill="currentColor" />
              </motion.button>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08153A] text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold text-xs sm:text-sm whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Multi-Outlet Ready</span>
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
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-[#FF6600] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-[#0c1e4f] px-6 py-4 border-b border-white/10">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#FF6600]" />
                  Odoo POS Video Demo
                </h3>
              </div>

              <div className="relative pb-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/KxZAdEGpYAw?autoplay=1"
                  title="Odoo POS Video"
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

export default Handypoint;
