'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Zap, Award, TrendingUp, CheckCircle, Target } from "lucide-react";

const Opensource = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: <Award className="w-5 h-5" />, text: "Gold Partner" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Growth Focused" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Proven Excellence" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-16 sm:py-24 overflow-hidden [perspective:1000px]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-indigo-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-lg opacity-20 rotate-45 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 [transform-style:preserve-3d]">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          {/* Levitating Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg"
          >
            <Zap className="w-4 h-4" />
            An Open Source Project Management System
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Grow your Business with{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-700 bg-clip-text text-transparent">
              Odoo Project Management
            </span>
          </h1>

          {/* Subheading with Icon */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-700">
              Lead and Go Places With Odoo Project Management Tool
            </h4>
          </div>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Looking for a reliable Odoo Gold Partner to implement the Odoo Project for ease management of your business? odoo Implementers is a trustworthy and leading Odoo Implementer with years of excellence in guiding companies in their change processes. We strive to execute a structured implementation process to take your business in the direction of growth and excellence.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-indigo-100 transition-all duration-300"
              >
                <div className="text-indigo-600">{feature.icon}</div>
                <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Box */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border-2 border-indigo-200 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Trusted Excellence:</strong> Years of experience in implementing structured solutions that drive business growth and operational excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Media */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Main Image Container */}
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-indigo-500/30 border-4 border-white">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-indigo-600 rounded-tl-2xl"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-purple-600 rounded-tr-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-purple-600 rounded-bl-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-indigo-600 rounded-br-2xl"></div>

            <img
              src="/images/App images/business-with-odoo-project-software.jpg"
              alt="Odoo Project Management"
              className="rounded-2xl w-full h-auto"
            />

            {/* Enhanced Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="group/play relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
              >
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                <Play className="w-8 h-8 relative z-10 ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Watch Video Badge */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-xl flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-bold text-gray-800">Watch Demo</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl border border-indigo-500/30">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Title Bar */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Play className="w-5 h-5" />
                Odoo Project Demo
              </h3>
            </div>

            {/* Video Container */}
            <div className="relative pb-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/wrzf-LWruvo?si=AW-6hMOT1lbHK43z&autoplay=1"
                title="Odoo Development Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Opensource;