"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import CountUp from "../../CountUp";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 mt-4 lg:mt-[-139px] [perspective:1000px]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-green-50"></div>
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Decorative Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-emerald-300 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center [transform-style:preserve-3d]">
          
          {/* Left Side - Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group [transform-style:preserve-3d]"
          >
            {/* Glowing Hover Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            {/* Image Container with Border and Corner Accents */}
            <div className="relative bg-white rounded-2xl p-3 shadow-2xl transform group-hover:scale-105 transition duration-500">
              {/* Colorful Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-green-500 opacity-20 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 opacity-20 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-500 opacity-20 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-600 opacity-20 rounded-br-2xl"></div>
              
              {/* Background Image */}
              <div
                className="relative bg-cover bg-center rounded-xl overflow-hidden min-h-[400px] sm:min-h-[500px]"
                style={{
                  backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                
                {/* Floating "Trusted Experts" Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 right-6 bg-white backdrop-blur-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2"
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-bold text-gray-800">Trusted Experts</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 [transform-style:preserve-3d]"
          >
            {/* "Industry Leaders" Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200"
            >
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-green-800">Industry Leaders</span>
            </motion.div>
            
            {/* Main Heading with Gradient Text */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Premier{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Odoo Implementers
              </span>
            </h2>
            
            {/* Decorative Accent Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            
            {/* Subheading */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Join Us in Taking Your Business Beyond The Horizon
            </p>
            
            {/* Highlight Pills in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* Industry Legacy */}
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Industry Legacy</h4>
                  <p className="text-sm text-gray-600">15+ years expertise</p>
                </div>
              </div>
              
              {/* Customized Solutions */}
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Target className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Customized Solutions</h4>
                  <p className="text-sm text-gray-600">Tailored for you</p>
                </div>
              </div>
              
              {/* Expert Team */}
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Users className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Team</h4>
                  <p className="text-sm text-gray-600">Certified professionals</p>
                </div>
              </div>
              
              {/* Business Growth */}
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Business Growth</h4>
                  <p className="text-sm text-gray-600">Proven results</p>
                </div>
              </div>
            </div>
            
            {/* Gradient CTA Button */}
            <div className="pt-6">
              <Link href="https://wa.me/8976104646">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {/* 500+ Implementations */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              <CountUp value="500+" />
            </div>
            <div className="text-gray-700 font-semibold">Implementations</div>
          </div>
          
          {/* 100% Quality Assured */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              <CountUp value="100%" />
            </div>
            <div className="text-gray-700 font-semibold">Quality Assured</div>
          </div>
          
          {/* 15+ Years Excellence */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-2">
              <CountUp value="15+" />
            </div>
            <div className="text-gray-700 font-semibold">Years Excellence</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;