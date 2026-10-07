"use client";

import React, { useState } from "react";
import { Play, X, Sparkles, Clock, TrendingUp, Users, Zap, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

const Improveproductivity = () => {
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

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Enhanced Text Content */}
        <motion.div 
          className="text-left space-y-6"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Improve Productivity with Effective Time Management
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Improve Employee{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Productivity
            </span>{" "}
            with Odoo Timesheet
          </h1>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Subheading with Icon */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-200">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
              Accomplish things as quick as you want
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Odoo Timesheet app provides your organization with the ability to effectively manage the time of employees and enhance workforce productivity. At Odoo Implementers, we help you customize and integrate the Odoo Timesheet app with your existing business modules and empower you to handle labour, time, attendance and payroll with high accuracy. Our experts will walk along with you throughout the process and help you implement custom functionalities to get the results right.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Time Management */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-800 font-semibold">Time Management</span>
            </motion.div>

            {/* Productivity Boost */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-800 font-semibold">Productivity Boost</span>
            </motion.div>

            {/* Workforce Management */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 border border-teal-200 flex items-center justify-center">
                <Users className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-gray-800 font-semibold">Workforce Control</span>
            </motion.div>

            {/* High Accuracy */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-800 font-semibold">High Accuracy</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Image/Video */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
              src="/images/App images/improve-employee-productivity-with-odoo-timesheet.webp"
              alt="Improve Employee Productivity"
              className="rounded-xl w-full h-auto"
            />

            {/* Enhanced Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayVideo}
                className="group/play relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
              >
                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
                
                {/* Play Icon */}
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 relative z-10 group-hover/play:scale-110 transition-transform duration-300" fill="white" />
              </motion.button>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDuration: '2s' }}>
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-gray-800">Watch Demo</span>
            </div>

            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Expert Support</span>
            </div>
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
                  src="https://www.youtube.com/embed/ZQmLMeP2G1Q?si=e38dJHnF-eC8zBbH&autoplay=1"
                  title="Odoo Timesheet Video"
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Improveproductivity;