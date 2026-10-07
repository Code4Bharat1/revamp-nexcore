"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden [perspective:1000px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/odoo quality.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="transform scale-105 transition-transform duration-700 hover:scale-110"
        />
        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      {/* Animated Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-teal-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col h-full w-full justify-center items-center sm:justify-between sm:flex-row px-6 sm:px-[11.5rem] gap-6 [transform-style:preserve-3d]"
      >
        {/* Left Side - Main Title with Enhanced Styling */}
        <div className="flex flex-col items-center sm:items-start">
          {/* Decorative Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-lg"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>QUALITY ASSURANCE</span>
          </motion.div>
          
          <h2 className="text-[28px] sm:text-5xl font-extrabold text-white text-center sm:text-left mb-2 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Odoo Quality
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left max-w-md drop-shadow-lg">
            Ensure excellence with comprehensive quality management
          </p>
          
          {/* Decorative Line */}
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
        </div>

        {/* Right Side - Enhanced Breadcrumb */}
        <div className="flex flex-col items-center sm:items-end gap-4">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 text-sm sm:text-base font-semibold bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
            <Link href="/">
              <span className="hover:text-white text-[#E1306C] cursor-pointer transition-all duration-300 hover:scale-110 inline-block">
                Home
              </span>
            </Link>
            <ChevronRight className="w-4 h-4 text-[#E1306C]" />
            <Link href="/apps">
              <span className="hover:text-white text-[#E1306C] cursor-pointer transition-all duration-300 hover:scale-110 inline-block">
                Apps
              </span>
            </Link>
            <ChevronRight className="w-4 h-4 text-[#E1306C]" />
            <Link href="#">
              <span className="hover:text-white text-[#E1306C] cursor-pointer transition-all duration-300 hover:scale-110 inline-block">
                Manufacturing
              </span>
            </Link>
            <ChevronRight className="w-4 h-4 text-[#E1306C]" />
            <span className="text-white font-bold">Quality</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-semibold text-sm border border-white/30 shadow-lg transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Decorative Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div> */}
      
      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse"></div>
    </div>
  );
};

export default Hero;