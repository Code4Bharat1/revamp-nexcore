"use client";

import React, { useState } from "react";
import { Play, X, Zap, Shield, TrendingUp, CheckCircle, Award, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Domore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Comprehensive Controls" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Cutting-Edge Features" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Expert Implementation" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-16 sm:py-24 overflow-hidden [perspective:1000px]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <motion.div 
          className="text-left space-y-6 [transform-style:preserve-3d]"
          initial={{ opacity: 0, x: -50, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Levitating Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg border border-white/20 cursor-pointer"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Odoo Accounting That Adapts To Your Business</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
            Do More with{" "}
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
              Odoo Accounting App
            </span>
          </h1>

          <div className="flex items-start gap-3">
            <div className="w-1.5 h-24 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full flex-shrink-0 shadow-md" />
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Organize your core finance operations through flexible and comprehensive accounting controls. Odoo Accounting Software with cutting-edge features that will change your business. Odoo Accounting Implementation brings you the most efficient Odoo accounting solutions from qualified IT professionals.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-md border border-emerald-100 cursor-pointer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                <div className="text-emerald-600">{feature.icon}</div>
                <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-full shadow-md">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                <strong>Industry-Leading Support:</strong> Backed by experienced IT professionals who ensure successful implementation and ongoing excellence.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Enhanced Media */}
        <motion.div 
          className="relative group [transform-style:preserve-3d]"
          initial={{ opacity: 0, x: 50, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500" />
          
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform-gpu transition-all duration-500 group-hover:scale-105 border-4 border-white">
            <img
              src="/images/App images/odoo-accounting-app-dashboard.gif"
              alt="Odoo Accounting"
              className="rounded-2xl w-full h-auto"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePlayVideo}
                className="group/play relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                <Play className="w-8 h-8 relative z-10 ml-1" fill="currentColor" />
              </motion.button>
            </div>

            {/* Watch Video Badge */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2 border border-emerald-100"
            >
              <Play className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-gray-800">Watch Accounting Demo</span>
            </motion.div>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl border border-emerald-500/30"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-90 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Odoo Accounting Demo
                </h3>
              </div>

              <div className="relative pb-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/-FgcAUUsI7k?autoplay=1"
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

export default Domore;