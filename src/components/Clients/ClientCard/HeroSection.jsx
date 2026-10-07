"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHandshake, FaStar, FaUsers, FaChartLine } from "react-icons/fa";

const ClientsHeroSection = () => {
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

  const stats = [
    { Icon: FaUsers, number: "50+", label: "Happy Clients" },
    { Icon: FaStar, number: "500+", label: "Projects" },
    { Icon: FaChartLine, number: "98%", label: "Success Rate" },
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
                <FaHandshake className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">
                  Our Valued Clients
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="block text-white">Building Success</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Together
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              At <span className="font-semibold text-white">NEXCORE ALLIANCE LLP</span>, we value our clients and strive to provide
              exceptional IT solutions. Our commitment is to empower businesses and foster growth in the
              digital landscape.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3`}>
                    <stat.Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/clients">
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
                    View Our Clients
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
                  Become a Client
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
                  src="/images/services3.jpg"
                  alt="Our Clients"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl opacity-20 blur-2xl" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-6 top-1/4 bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blue-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaHandshake className="w-8 h-8 text-white mb-2" />
                <div className="text-xs text-blue-100 font-medium whitespace-nowrap">Trusted Partnership</div>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/3 bg-gradient-to-br from-cyan-500/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-cyan-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaStar className="w-8 h-8 text-white mb-2" />
                <div className="text-xs text-cyan-100 font-medium whitespace-nowrap">5-Star Rating</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-1/4 bg-gradient-to-br from-teal-500/90 to-teal-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-teal-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaChartLine className="w-8 h-8 text-white mb-2" />
                <div className="text-xs text-teal-100 font-medium whitespace-nowrap">Growing Together</div>
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

export default ClientsHeroSection;