"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/Odoo Documents.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-center items-center sm:justify-between sm:flex-row px-6 sm:px-[11.5rem] bg-gradient-to-b from-transparent to-black/0">
        {/* Left Side - Main Title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-[22px] sm:text-[36px] font-extrabold text-white text-center sm:text-left mb-4 sm:mb-0"
        >
          Odoo Documents
        </motion.h2>

        {/* Right Side - Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center sm:justify-end items-center space-x-2 sm:space-x-4 text-sm sm:text-xl font-medium text-gray-300"
        >
          <Link href="/">
            <span className="hover:text-white text-[#E1306C] font-bold cursor-pointer">
              Home
            </span>
          </Link>
          <span className="text-[#E1306C]">•</span>
          <Link href="/apps">
            <span className="hover:text-white text-[#E1306C] font-bold cursor-pointer">
              Apps
            </span>
          </Link>
          <span className="text-[#E1306C]">•</span>
          <span className="text-white">Odoo Documents</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

