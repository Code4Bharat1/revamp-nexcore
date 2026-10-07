"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Zap, CheckCircle, TrendingUp, Settings } from "lucide-react";

const Automate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 sm:py-24 overflow-hidden [perspective:1000px]">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Decorative Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-emerald-300 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center [transform-style:preserve-3d]">
        {/* Left Section - Enhanced Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6 [transform-style:preserve-3d]"
        >
          {/* Premium Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200"
          >
            <Zap className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Automate and Organize Maintenance Requests
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Increase Every Equipment{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Effectiveness
            </span>{" "}
            with Odoo Maintenance Services
          </h1>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Triggering maintenance requests is made easy from the work center control panel with Odoo Maintenance. Effective communication reduces downtime and makes your manufacturing more efficient.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Reduced Downtime */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-800 font-semibold">Reduced Downtime</span>
            </div>

            {/* Efficient Operations */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <TrendingUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span className="text-gray-800 font-semibold">Efficient Operations</span>
            </div>

            {/* Easy Requests */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Settings className="w-6 h-6 text-teal-600 flex-shrink-0" />
              <span className="text-gray-800 font-semibold">Easy Requests</span>
            </div>

            {/* Smart Automation */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Zap className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-800 font-semibold">Smart Automation</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Image/Video */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group [transform-style:preserve-3d]"
        >
          {/* Glowing Hover Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

          {/* Image Container with Border and Corner Accents */}
          <div className="relative bg-white rounded-2xl p-3 shadow-2xl transform group-hover:scale-105 transition duration-500">
            {/* Colorful Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-green-500 opacity-20 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 opacity-20 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-500 opacity-20 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-600 opacity-20 rounded-br-2xl"></div>

            {/* Image */}
            <img
              src="/images/App images/odoo-maintenance-service-image.webp"
              alt="Odoo Maintenance Services"
              className="rounded-xl w-full h-auto"
            />

            {/* Enhanced Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="group/play relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
              >
                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
                
                {/* Play Icon */}
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 relative z-10 group-hover/play:scale-110 transition-transform duration-300" fill="white" />
              </button>
            </div>

            {/* "Watch Demo" Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-gray-800">Watch Demo</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl transform animate-scaleIn">
            {/* Decorative Header Bar */}
            <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container */}
            <div className="p-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/xrf7zIACGvw?si=E2xOyD-Yq6wQ80GU&autoplay=1"
                  title="Odoo Maintenance Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Automate;