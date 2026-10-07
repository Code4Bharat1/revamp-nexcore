"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Package, Zap, CheckCircle } from 'lucide-react';

const Createpersonal = () => {
  return (
    <div className="relative min-h-[37rem] bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white overflow-hidden [perspective:1000px]">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Enhanced Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-emerald-400 rounded-lg opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 py-16 sm:py-20 gap-12 [transform-style:preserve-3d]">
        {/* Left Section: Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 group [transform-style:preserve-3d]"
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          {/* Image Container */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl transform group-hover:scale-105 transition duration-500">
            {/* Colorful Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-green-500 opacity-20 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 opacity-20 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-500 opacity-20 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-600 opacity-20 rounded-br-2xl"></div>

            <img
              src="/images/App images/odoo-purchase-software-for-seamless-workflow.gif"
              alt="Odoo Purchase Workflow"
              className="rounded-xl w-full shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-xl flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Live Demo</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section: Enhanced Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 space-y-6 [transform-style:preserve-3d]"
        >
          {/* Premium Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30"
          >
            <Zap className="w-5 h-5 text-green-400" />
            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
              Smart Automation
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Seamless Workflow With{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Odoo Purchase
            </span>
          </h2>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Analyse your stock levels and send requests for quotes to your suppliers automatically. Based on your manufacturing and delivery strategies, you can choose different replenishment methods for each product. Level up the performance of purchase and inventory with procurement rules depending on stocks, logistic terms, sales orders and more.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Auto Replenishment */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-white font-semibold text-sm">Auto Replenishment</span>
            </div>

            {/* Stock Analysis */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <Package className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-white font-semibold text-sm">Stock Analysis</span>
            </div>

            {/* Smart Procurement */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-teal-400" />
              </div>
              <span className="text-white font-semibold text-sm">Smart Procurement</span>
            </div>

            {/* Automated Quotes */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-white font-semibold text-sm">Automated Quotes</span>
            </div>
          </div>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 pt-6">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
              <span className="text-sm font-bold text-green-300">100% Automated</span>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30">
              <span className="text-sm font-bold text-emerald-300">Real-time Updates</span>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-400/30">
              <span className="text-sm font-bold text-teal-300">Smart Analytics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Createpersonal;