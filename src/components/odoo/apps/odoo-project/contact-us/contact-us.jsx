"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, ArrowRight, Phone, Zap, Clock, CheckCircle, TrendingUp } from "lucide-react";
import CountUp from "../../CountUp";

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center min-h-[400px] sm:min-h-[500px] flex items-center justify-center mt-4 lg:-mt-[86px] overflow-hidden [perspective:1000px]"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-indigo-900/60 to-black/70"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-4 sm:px-8 max-w-4xl mx-auto [transform-style:preserve-3d]"
      >
        {/* Premium Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl mb-6"
        >
          <Zap className="w-4 h-4" />
          <span>Transform Your Projects</span>
        </motion.div>

        {/* Subheading with Icon */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent to-indigo-400 rounded-full"></div>
          <h3 className="text-indigo-300 text-lg sm:text-2xl font-bold tracking-wide">
            Unleash Your Growth Potential with Odoo
          </h3>
          <div className="w-12 h-1 bg-gradient-to-l from-transparent to-indigo-400 rounded-full"></div>
        </div>

        {/* Main Heading with Gradient */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Odoo Solutions
          </span>
          <br />
          <span className="text-white">for All Your Needs</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl text-white/90 font-semibold mb-8 drop-shadow-lg">
          Start Your Project Success Journey
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="https://wa.me/8976104646">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Contact Us on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border-2 border-white/30 shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Schedule Consultation</span>
          </motion.button>
        </div>

        {/* Info Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-semibold text-sm">Complete Solution</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold text-sm">Growth Focused</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <Clock className="w-5 h-5 text-pink-400" />
            <span className="text-white font-semibold text-sm">24/7 Support</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
              <CountUp value="500+" />
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-semibold">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
              <CountUp value="100%" />
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-semibold">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-1">
              <CountUp value="15+" />
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-semibold">Years Experience</div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mx-auto animate-pulse"></div>
      </motion.div>
    </section>
  );
};

export default ContactSection;