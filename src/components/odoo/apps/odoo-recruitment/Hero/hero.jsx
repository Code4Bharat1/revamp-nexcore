"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden [perspective:1000px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/odoo Recruitment.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-center items-center sm:justify-between sm:flex-row px-6 sm:px-[11.5rem]">
        {/* Left Side - Main Title */}
        <motion.h2 
          className="text-[22px] sm:text-3xl font-extrabold text-white text-center sm:text-left mb-4 sm:mb-0"
          initial={{ opacity: 0, y: 30, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Odoo Recruitment
        </motion.h2>

        {/* Right Side - Breadcrumb */}
        <motion.div 
          className="flex flex-wrap justify-center sm:justify-end items-center space-x-2 sm:space-x-4 text-sm sm:text-xl font-medium text-gray-300"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/">
            <motion.span whileHover={{ scale: 1.05 }} className="hover:text-white text-[#E1306C] font-bold cursor-pointer inline-block">
              Home
            </motion.span>
          </Link>
          <span className="text-[#E1306C]">•</span>
          <Link href="/apps">
            <motion.span whileHover={{ scale: 1.05 }} className="hover:text-white text-[#E1306C] font-bold cursor-pointer inline-block">
              Apps
            </motion.span>
          </Link>
          <span className="text-[#E1306C]">•</span>
          <span className="text-white">Odoo Recruitment</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
