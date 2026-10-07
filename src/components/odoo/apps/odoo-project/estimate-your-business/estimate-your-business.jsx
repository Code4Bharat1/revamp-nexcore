'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, CheckCircle, Calendar, Users, TrendingUp, ArrowRight } from 'lucide-react';
import CountUp from '../../CountUp';

const Estimatebusiness = () => {
  const features = [
    { icon: <Calendar className="w-5 h-5" />, text: "Smart Scheduling" },
    { icon: <Users className="w-5 h-5" />, text: "Team Management" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Performance Analysis" }
  ];

  return (
    <div className="relative min-h-[42rem] md:min-h-[35rem] text-black overflow-hidden [perspective:1000px]">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      
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
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[6rem] pb-[15rem] sm:pb-20 gap-12 [transform-style:preserve-3d]">
        {/* Left Section: Enhanced Image */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 group"
        >
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/App images/odoo-task-management-module.webp"
                alt="Odoo Task Management"
                className="relative rounded-2xl shadow-2xl border-8 border-[#211f3b] transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Levitating Badge on Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Efficient Planning</span>
              </motion.div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-indigo-400 rounded-tl-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-purple-400 rounded-br-2xl opacity-80"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Enhanced Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 space-y-6"
        >
          {/* Premium Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Resource Planning</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Estimate your Business
            </span>{" "}
            and Resources Needs with Odoo Project
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>

          {/* Description */}
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-black">
            Schedule your teams for projects, considering their vacation plan. With a detailed forecast on your project performance and employee availability and plan ahead for emerging projects. Use the drag and drop feature for your tasks in the calendar to reschedule as well as highlight your project deadlines. Meet your deadlines more accurately. Increase your business returns by comparing your estimation with real-time sheets. Odoo Project Management provides facilities for multi-project analysis and searches.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-lg"
              >
                <div className="text-indigo-400">{feature.icon}</div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Start Planning Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Stats Row with CountUp */}
          <div className="flex gap-6 pt-4 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                <CountUp value="100%" />
              </div>
              <div className="text-sm text-gray-500">Visibility</div>
            </div>
            <div className="w-px bg-black/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Real-Time</div>
              <div className="text-sm text-gray-500">Tracking</div>
            </div>
            <div className="w-px bg-black/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Multi</div>
              <div className="text-sm text-gray-500">Project</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Estimatebusiness;