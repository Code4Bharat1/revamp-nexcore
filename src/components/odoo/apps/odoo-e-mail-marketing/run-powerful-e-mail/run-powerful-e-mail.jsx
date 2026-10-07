"use client";

import React from 'react';
import { Sparkles, Mail, Zap, Layout, MousePointer, CheckCircle, Users } from 'lucide-react';
import { motion } from "framer-motion";

const Runpowerful = () => {
  const features = [
    {
      icon: Layout,
      title: "User-Friendly Interface",
      description: "No IT knowledge required",
      color: "green"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Launch campaigns in minutes",
      color: "emerald"
    },
    {
      icon: MousePointer,
      title: "Drag & Drop Builder",
      description: "Easy content placement",
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
    <div className="relative min-h-[48rem] md:min-h-[37rem] bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white overflow-hidden [perspective:1000px]">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 py-16 sm:py-20 gap-12">
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
              src="/images/App images/odoo-email-marketing -development-app.webp"
              alt="Odoo Email Marketing App"
              className="rounded-xl w-full shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-xl flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Mail className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Powerful Campaigns</span>
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
              Easy Campaign Management
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Run powerful{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              E-mail Campaigns
            </span>{" "}
            with Odoo
          </h2>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Description Paragraphs */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-green-500">
              <p className="text-gray-300 leading-relaxed">
                You don't need any IT knowledge to run powerful E-mail campaigns that resonate with your prospects. This is a user-friendly software tool that lets you take complete control over your E-mail content and layout.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-emerald-500">
              <p className="text-gray-300 leading-relaxed">
                Do you feel that designing newsletters on your own is not a good idea? No issues You can choose one of the many available templates, read the layout, customize your message and images and you're all set to launch your new campaign.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-teal-500">
              <p className="text-gray-300 leading-relaxed">
                Simply select your building blocks and drop them precisely where you want them to be visible on your E-mail. Enhance your content with catchy titles, high conversion calls-to-action buttons and social media redirecting links or footers in just a few clicks.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center gap-2 ${getColorClasses(feature.color)} p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 text-center`}
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

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
              <span className="text-sm font-bold text-green-300">No Code Required</span>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30">
              <span className="text-sm font-bold text-emerald-300">Ready Templates</span>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-400/30">
              <span className="text-sm font-bold text-teal-300">Drag & Drop</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Runpowerful;