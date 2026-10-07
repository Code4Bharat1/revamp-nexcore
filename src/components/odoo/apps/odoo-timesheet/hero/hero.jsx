"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Layers, Clock, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden [perspective:1000px]">
      {/* Animated Glowing Orbs Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/odoo timesheet.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-green-400 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 left-32 w-12 h-12 border-2 border-emerald-400 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-teal-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-center items-center sm:justify-between sm:flex-row px-6 sm:px-[11.5rem]">
        {/* Left Side - Main Title with Badge */}
        <motion.div 
          className="text-center sm:text-left mb-6 sm:mb-0"
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30 mb-4"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-green-300">Time Tracking Excellence</span>
          </motion.div>
          
          {/* Main Title with Gradient */}
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold mb-2">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Odoo Timesheet
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto sm:mx-0"></div>
          
          {/* Subtitle */}
          <p className="text-gray-300 mt-3 text-sm sm:text-base">
            Track Time, Boost Productivity
          </p>
        </motion.div>

        {/* Right Side - Enhanced Breadcrumb */}
        <motion.div 
          className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Home */}
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-green-500/20 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer border border-white/10 hover:border-green-400/50"
            >
              <Home className="w-4 h-4 text-green-400 group-hover:text-green-300" />
              <span className="text-sm font-semibold text-green-400 group-hover:text-green-300">
                Home
              </span>
            </motion.div>
          </Link>

          <ChevronRight className="w-4 h-4 text-emerald-400" />

          {/* Apps */}
          <Link href="/apps">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-emerald-500/20 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer border border-white/10 hover:border-emerald-400/50"
            >
              <Layers className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-400 group-hover:text-emerald-300">
                Apps
              </span>
            </motion.div>
          </Link>

          <ChevronRight className="w-4 h-4 text-teal-400" />

          {/* Current Page - Odoo Timesheet */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-400/50 shadow-lg">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white">Timesheet</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Hero;