"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLightbulb, FaRocket, FaUsers, FaCogs } from "react-icons/fa";

const ApproachHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const approaches = [
    { Icon: FaLightbulb, label: "Innovation First" },
    { Icon: FaUsers, label: "Client-Centric" },
    { Icon: FaRocket, label: "Agile Delivery" },
    { Icon: FaCogs, label: "Scalable Solutions" },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Spotlight effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-300 font-medium">
                  Our Methodology
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="block text-white">Driving Success</span>
                <span className="block text-white">through</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              At <span className="font-semibold text-white">NEXCORE ALLIANCE LLP</span>, we focus on understanding your needs and delivering tailored IT solutions. 
              Our approach is designed to foster growth and innovation in the digital landscape.
            </motion.p>

            {/* Approach Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {approaches.map((approach, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <approach.Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">
                    {approach.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/approach">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-blue-500/50"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center gap-2">
                    Explore Our Approach
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </Link>

              <Link href="/contactus">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-slate-500 hover:bg-slate-800/50 transition-all"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image with 3D effect */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="relative"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl rounded-3xl scale-105" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <Image
                  src="/images/approach.jpg"
                  alt="Our Approach"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl opacity-20 blur-2xl" />
              </div>

              {/* Floating feature badges */}
              <motion.div
                className="absolute -right-6 top-1/4 bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blue-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-xs text-blue-100 font-medium whitespace-nowrap">Goal-Oriented</div>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/3 bg-gradient-to-br from-cyan-500/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-cyan-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-xs text-cyan-100 font-medium whitespace-nowrap">Fast Results</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-1/4 bg-gradient-to-br from-teal-500/90 to-teal-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-teal-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-2xl mb-2">💎</div>
                <div className="text-xs text-teal-100 font-medium whitespace-nowrap">Quality First</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent" />
    </section>
  );
};

export default ApproachHeroSection;