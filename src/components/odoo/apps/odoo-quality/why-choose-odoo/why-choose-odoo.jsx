"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Target, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import CountUp from "../../CountUp";

const Whychoose = () => {
  const highlights = [
    { icon: <Award className="w-5 h-5" />, text: "Industry Legacy" },
    { icon: <Target className="w-5 h-5" />, text: "Customized Solutions" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Team" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Business Growth" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 sm:pt-20 sm:pb-20 overflow-hidden [perspective:1000px]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-40 left-10 w-20 h-20 border-4 border-green-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-emerald-400 opacity-10 rotate-45 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 pt-[5rem] md:pb-[7rem] relative z-10 [transform-style:preserve-3d]">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center mb-8 lg:mb-[60px] group [transform-style:preserve-3d]"
        >
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Image Container with Enhanced Shadow */}
          <div className="relative transform transition-all duration-500 group-hover:scale-105">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-green-500 rounded-tl-3xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-emerald-500 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-emerald-500 rounded-bl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-teal-500 rounded-br-3xl"></div>

            <div className="shadow-2xl p-3 bg-white rounded-2xl border-4 border-white group-hover:shadow-green-500/30 transition-all duration-500">
              <img
                src="/images/App images/odoo-point-of-sale-oodu-implementers.jpg"
                alt="Odoo Quality Implementers"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-xl"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Trusted Experts</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pb-12 sm:pb-[86px] text-center sm:text-left space-y-6 [transform-style:preserve-3d]"
        >
          <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-0">
            {/* Premium Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>Industry Leaders</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              <span className="text-gray-900">Why Choose </span>
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                odoo Implementers
              </span>
              <span className="text-gray-900">?</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              odoo Implementers have a legacy of designing and delivering customized Odoo Manufacturing modules to customers across various industries. Our experts cater to your business needs and ensure that the Odoo Manufacturing tool takes your business to a new horizon.
            </p>

            {/* Highlight Pills */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full text-white">
                    {highlight.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto sm:mx-0"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 lg:px-48 mt-16 relative z-10"
      >
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              <CountUp value="500+" />
            </div>
            <div className="text-sm text-gray-600 font-semibold">Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              <CountUp value="100%" />
            </div>
            <div className="text-sm text-gray-600 font-semibold">Quality Assured</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              <CountUp value="15+" />
            </div>
            <div className="text-sm text-gray-600 font-semibold">Years Excellence</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Whychoose;