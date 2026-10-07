'use client';
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Shield, Zap, CheckCircle, FileText, Award, BarChart3, ArrowRight } from "lucide-react";

const Highpoints = () => {
  const highpoints = [
    { icon: <TrendingUp className="w-5 h-5" />, text: "Easy tracking of budget and comparison of business performance", color: "from-emerald-500 to-teal-500" },
    { icon: <Zap className="w-5 h-5" />, text: "Automated account reconciliation", color: "from-blue-500 to-cyan-500" },
    { icon: <Shield className="w-5 h-5" />, text: "Securable accountings and upgradation of Odoo accounting books", color: "from-purple-500 to-pink-500" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Optimal validation for your business payment", color: "from-green-500 to-emerald-500" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Analytic data generation based on timesheets, supplier bills, work orders", color: "from-orange-500 to-red-500" },
    { icon: <FileText className="w-5 h-5" />, text: "Fully integrated with other Odoo Apps", color: "from-indigo-500 to-purple-500" }
  ];

  const reports = [
    "Balance Sheet",
    "General Ledger",
    "Partner Ledger",
    "Profit & Loss",
    "Sale & Purchase Journal",
    "Trial Balance",
    "Aged Partner Balance"
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-white via-gray-50 to-emerald-50 py-16 mb-[3rem] overflow-hidden [perspective:1000px]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:pl-[12rem] lg:pr-[15rem] relative z-10 [transform-style:preserve-3d]">
        {/* Left Section - Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Image Container */}
          <div className="relative transform transition-all duration-500 group-hover:scale-105">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-emerald-500 rounded-tl-3xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-teal-500 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-teal-500 rounded-bl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-cyan-500 rounded-br-3xl"></div>

            <div className="shadow-2xl p-3 bg-white rounded-2xl border-4 border-white group-hover:shadow-emerald-500/30 transition-all duration-500">
              <img
                src="/images/App images/odoo-accounting-app-fully-integrated.gif"
                alt="Odoo Accounting Integrated"
                className="rounded-xl w-full h-auto"
              />
            </div>

            {/* Levitating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Fully Integrated</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Text */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="pr-4 pl-[2rem] sm:pr-12 sm:pl-16 space-y-8"
        >
          {/* Section 1: High Points */}
          <div className="space-y-4">
            {/* Premium Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Key Features</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                High Points
              </span>{" "}
              of Odoo Accounting
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>

            {/* Features List with Icons */}
            <div className="space-y-3 pt-2">
              {highpoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="group flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className={`flex-shrink-0 bg-gradient-to-r ${point.color} p-2.5 rounded-full text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
                    {point.icon}
                  </div>
                  <p className="text-gray-700 font-semibold text-sm leading-relaxed pt-1">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 2: Reports */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
              Easily Extract the Following{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Reports
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100"
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1.5 rounded-full">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{report}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 mt-16 relative z-10"
      >
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-3xl border-2 border-emerald-200 shadow-xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Odoo Implementers
                </span>{" "}
                for Odoo Accounting?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Odoo Implementers assures highly efficient business processes with promised productivity gains. We are well-experienced in creating a secured system with potential cash flow to ensure flexibility and optimized solutions for cost efficiency. We deliver better results with a perfect blend of business domain knowledge and advanced technology frameworks. Odoo Implementers are sure to make a big difference in your business with the reliable Odoo Accounting tools implementation.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Highpoints;