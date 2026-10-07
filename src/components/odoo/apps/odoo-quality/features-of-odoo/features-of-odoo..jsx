"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';
import CountUp from "../../CountUp";

const Featuresofodoo = () => {
  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Quality Control Points" },
    { icon: <AlertTriangle className="w-5 h-5" />, text: "Quality Alerts Management" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Multi-Level Checks" }
  ];

  return (
    <div className="relative min-h-[58rem] md:min-h-[37rem] bg-gradient-to-br from-[#1a1833] via-[#211f3b] to-[#2d2650] text-white overflow-hidden [perspective:1000px]">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      
      {/* Background Images with Enhanced Effects */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-emerald-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-teal-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[7.5rem] pb-[15rem] sm:pb-20 gap-12 [transform-style:preserve-3d]">
        {/* Left Section: Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 group [transform-style:preserve-3d]"
        >
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/App images/odoo-quality-control-services-for-your-business.png"
                alt="Odoo Quality Control"
                className="relative rounded-2xl shadow-2xl border-8 border-[#211f3b] transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Floating Badge on Image */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Quality Assured</span>
              </motion.div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-green-400 rounded-tl-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-emerald-400 rounded-br-2xl opacity-80"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Enhanced Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 space-y-6 [transform-style:preserve-3d]"
        >
          {/* Premium Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Quality Features</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Features of Odoo Quality
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Feature Sections */}
          <div className="space-y-4">
            {/* Section 1 */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Quality Control Points</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive checks at In-tack, In-process, and Post-process stages
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-full">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Manage Quality Alerts</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Trigger alerts from work center, inventory, and manufacturing levels
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="text-green-400">{feature.icon}</div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Quality Features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 pt-4 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                <CountUp value="100%" />
              </div>
              <div className="text-sm text-gray-400">Compliance</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Real-Time</div>
              <div className="text-sm text-gray-400">Alerts</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Multi</div>
              <div className="text-sm text-gray-400">Level</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featuresofodoo;