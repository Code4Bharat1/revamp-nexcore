"use client";

import React from 'react';
import { Sparkles, Clock, Zap, CheckCircle, Calendar, TrendingUp, Timer, Smartphone } from 'lucide-react';
import { motion } from "framer-motion";

const Manage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Managing Tasks",
      description: "Organize daily activities",
      color: "green"
    },
    {
      icon: Timer,
      title: "Time-Tracking",
      description: "Track every second",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "Weekly Timesheets",
      description: "Comprehensive reports",
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "text-green-400 bg-green-500/20 border-green-400/30",
      emerald: "text-emerald-400 bg-emerald-500/20 border-emerald-400/30",
      teal: "text-teal-400 bg-teal-500/20 border-teal-400/30"
    };
    return colors[color];
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white overflow-hidden [perspective:1000px]">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Enhanced Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[264px] h-[362px] bg-contain bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[366px] h-[501px] bg-contain bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-emerald-400 rounded-lg opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:p-[9rem] gap-12">
        {/* Left Section: Enhanced Image */}
        <motion.div 
          className="w-full lg:w-1/2 group"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
              src="/images/App images/oodu-implementers-odoo-timesheet-software.webp"
              alt="Odoo Timesheet Software"
              className="rounded-xl w-full shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-xl flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Smartphone className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Mobile Ready</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section: Enhanced Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
              Proactive Task Management
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Manage Day-to-day{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Tasks Proactively
            </span>{" "}
            with Odoo Timesheet
          </h2>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Odoo Timesheet works the way you do through the mobile app, even offline. Whether you run a small business or are a freelancer or someone who needs to manage employees from distant locations, this is your tool to be as flexible as you are. Just sign in and start tracking your time or resources time with any device, from anywhere.
          </p>

          {/* Workflow Section */}
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-green-400/30">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-green-400" />
              <h3 className="text-xl sm:text-2xl font-bold">
                It assists you in every step of your workflow
              </h3>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col items-center gap-2 ${getColorClasses(feature.color)} p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 text-center`}
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold text-sm">{feature.title}</div>
                      <div className="text-xs opacity-80">{feature.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Be Proactive Section */}
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Be Proactive</h3>
                <p className="text-gray-300 leading-relaxed">
                  Odoo Timesheet comes in handy for professionals who plan their activities at the start of the day. Users can take advantage of the day Planner to allocate time in advance to the tasks of that particular day.
                </p>
              </div>
            </div>
          </div>

          {/* Every Second Matters Section */}
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-emerald-500">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                <Timer className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-emerald-400">Every second matters</h3>
                <p className="text-gray-300 leading-relaxed">
                  Odoo Timesheet allows individuals to keep track of their work in detail. Users can set up the timer from their desktop with a single click. Just select the task and switch it on.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
              <span className="text-sm font-bold text-green-300">Mobile & Offline</span>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30">
              <span className="text-sm font-bold text-emerald-300">One-Click Timer</span>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-400/30">
              <span className="text-sm font-bold text-teal-300">Day Planner</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Manage;