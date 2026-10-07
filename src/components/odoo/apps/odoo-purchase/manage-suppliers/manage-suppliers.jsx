"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, Package, CheckCircle, BarChart3, Shield } from "lucide-react";

const Managesuppliers = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 sm:py-24 overflow-hidden [perspective:1000px]">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Decorative Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-emerald-300 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center [transform-style:preserve-3d]">
        {/* Left Section - Enhanced Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6 [transform-style:preserve-3d]"
        >
          {/* Premium Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200"
          >
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Scale Up Your Business By Purchasing Smartly
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Manage Suppliers and{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Purchase Orders
            </span>{" "}
            Effortlessly
          </h1>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Subheading with Icon */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-green-200">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-800">
              Step up the performance of your inventory & supply chain
            </h4>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Odoo Purchase app can help you place purchase orders smoothly and efficiently. At Odoo Implementers, we offer you a complete software solution to handle various activities involved in purchasing such as seller management, seller bills, supply chain and product variation management, stock update and product quality inspections. Our team of experts will guide you throughout the installation and help you automate the purchase procedure and administration process.
          </p>

          {/* Feature Pills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Supplier Management */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-800 font-semibold">Supplier Management</span>
            </div>

            {/* Stock Updates */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                <Package className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-800 font-semibold">Stock Updates</span>
            </div>

            {/* Quality Inspection */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 border border-teal-200 flex items-center justify-center">
                <Shield className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-gray-800 font-semibold">Quality Inspection</span>
            </div>

            {/* Automated Process */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-800 font-semibold">Automated Process</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
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

            {/* Image */}
            <img
              src="/images/App images/purchase_screenshot_04.gif"
              alt="Odoo Purchase Management"
              className="rounded-xl w-full h-auto"
            />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-gray-800">Live Demo</span>
            </motion.div>

            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Expert Support</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Section */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-[10rem] mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Complete Solution */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Solution</h3>
            <p className="text-gray-600 text-sm">End-to-end purchase management</p>
          </div>

          {/* Expert Guidance */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">Professional implementation support</p>
          </div>

          {/* Automated Workflow */}
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-green-500 mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Automated Workflow</h3>
            <p className="text-gray-600 text-sm">Streamlined purchase procedures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Managesuppliers;