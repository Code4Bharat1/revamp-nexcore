'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, CheckCircle, RefreshCw, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import CountUp from '../../CountUp';

const Smartodoo = () => {
  const features1 = [
    { icon: <RefreshCw className="w-5 h-5" />, text: "Auto Bank Sync" },
    { icon: <FileText className="w-5 h-5" />, text: "Recurring Billing" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "95% Auto Reconciliation" }
  ];

  const features2 = [
    { icon: <Zap className="w-5 h-5" />, text: "Auto-Generate Invoices" },
    { icon: <RefreshCw className="w-5 h-5" />, text: "Inventory Sync" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Sales Integration" }
  ];

  return (
    <div className="relative min-h-screen text-black overflow-hidden [perspective:1000px]">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      
      {/* Background Images with Enhanced Effects */}
      <div
        className="absolute bottom-0 right-0 w-[264px] h-[362px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[366px] h-[501px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-teal-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:p-[9rem] gap-12 [transform-style:preserve-3d]">
        {/* Left Section: Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 group"
        >
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/App images/odoo-erp-solutions-for-account.jpg"
                alt="Odoo Accounting Solutions"
                className="relative rounded-2xl shadow-2xl border-8 border-[#211f3b] transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Levitating Badge on Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Smart Solution</span>
              </motion.div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-emerald-400 rounded-tl-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-teal-400 rounded-br-2xl opacity-80"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Enhanced Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 space-y-8"
        >
          {/* Section 1 */}
          <div className="space-y-4">
            {/* Premium Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>All-in-One Solution</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-[32px] sm:text-[36px] font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Smart Odoo Accounting
              </span>{" "}
              Solutions for all Accounting Needs
            </h2>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>

            {/* Description */}
            <p className="text-[17px] leading-relaxed text-black">
              Sync your bank statements automatically with your bank and import files with Odoo Accounting. Managing recurring billings and payment tracking made simple. Robust integration with other Odoo Accounting apps provides feasibility to create professional invoices. Manage bills and expenses with a clear forecast of bills to be paid. Better control over supplier invoices. The reconciliation tool automates 95% of reconciliation and saves time. Odoo Accounting is a smart solution for all your needs.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {features1.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-lg"
                >
                  <div className="text-emerald-400">{feature.icon}</div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-12 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></div>
              <h2 className="text-[28px] sm:text-[32px] font-bold">
                Automated Business Transaction Recordings
              </h2>
            </div>

            <p className="text-[17px] leading-relaxed text-black pl-5">
              Odoo Accounting makes business easy for you. Odoo's popular features will change your business without much effort. Fully integrated with other Odoo Accounting Apps, business flow is automated. Integrated with Odoo Accounting Invoices to auto-generate and share invoices online. Synchronize every transaction with Odoo Inventory and keep your valuation up to date. Creating project tasks from sales is made easy by integrating with Odoo Sales.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pl-5 pt-2">
              {features2.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-lg"
                >
                  <div className="text-teal-400">{feature.icon}</div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Discover Smart Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Stats Row with CountUp */}
          <div className="flex gap-6 pt-4 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                <CountUp value="95%" />
              </div>
              <div className="text-sm text-gray-500">Auto Reconciliation</div>
            </div>
            <div className="w-px bg-black/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                <CountUp value="100%" />
              </div>
              <div className="text-sm text-gray-500">Integrated</div>
            </div>
            <div className="w-px bg-black/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Real-Time</div>
              <div className="text-sm text-gray-500">Sync</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Smartodoo;