"use client";

import React, { useState } from "react";
import { Play, X, Zap, TrendingUp, Users, CheckCircle2, Award, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Manage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: <Users className="w-4 h-4 text-[#FF6600]" />, text: "Better Customer Management" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Structured Implementation" },
    { icon: <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />, text: "Maximum Benefits" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>Things Go Better with Odoo Sales</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              Manage Customers Better with{" "}
              <span className="text-[#FF6600]">
                Odoo Sales Software
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#08153A]/75 text-sm sm:text-base leading-relaxed font-normal">
              Odoo Sales sends clear and complete quotations to your prospects that encompass detailed descriptions with related images and additional information by dragging and dropping building blocks. NEXCORE ALLIANCE brings the best in business practices to give your business the reach it needs.
            </p>

            {/* Staggered Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-[#08153A]/5 px-3.5 py-2 rounded-xl border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]"
                >
                  <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-[#08153A]/5 p-5 rounded-xl border border-[#08153A]/10">
              <p className="text-[#08153A]/80 text-sm sm:text-base leading-relaxed font-normal">
                With the industrial experience gained through internal audit and management consulting, we implement the Odoo sales tool in a structured way to benefit the customers to the maximum.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#08153A] hover:bg-[#FF6600] text-white font-bold rounded-xl text-sm transition-colors shadow-md"
              >
                <span>Consult Our Sales Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Section - Video / GIF Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#08153A]/10">
              <img
                src="/images/App images/manage-customers-better-with-odoo-sales-software.gif"
                alt="Odoo Sales Software"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  aria-label="Play video demo"
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF6600] hover:bg-[#e05a00] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-[#08153A] text-white px-4 py-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-white/70 font-medium">Interactive Demo</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Watch Odoo Sales</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#08153A]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#08153A] hover:bg-[#FF6600] text-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Bar */}
              <div className="bg-[#08153A] text-white px-6 py-4">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#FF6600]" />
                  <span>Odoo Sales Demo</span>
                </h3>
              </div>

              {/* Video Container */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VMuCr5_arsY?autoplay=1"
                  title="Odoo Sales Video"
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

export default Manage;