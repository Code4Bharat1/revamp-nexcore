"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Sparkles, FileText, TrendingUp, GitBranch, Layers } from "lucide-react";

const Transformproduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    {
      icon: FileText,
      title: "Integrated Document Management",
      description: "Store plans and worksheets directly on BOM and Routing.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Analysis",
      description: "of Gap between requirements and existing Odoo ERP.",
      color: "emerald"
    },
    {
      icon: GitBranch,
      title: "Manage Engineering Change",
      description: "Real-time communication with Odoo PLM.",
      color: "teal"
    },
    {
      icon: Layers,
      title: "Smart Versioning",
      description: "Track changes effectively across multiple version.",
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "text-green-600 bg-green-100 border-green-200",
      emerald: "text-emerald-600 bg-emerald-100 border-emerald-200",
      teal: "text-teal-600 bg-teal-100 border-teal-200"
    };
    return colors[color];
  };

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
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Product Lifecycle Excellence
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Transform your Product with{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Odoo PLM
            </span>
          </h1>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Product Life Cycle Management for modern companies. Drive business growth with modern Odoo PLM. Transform your product value chain to rapidly innovate, develop and commercialize.
          </p>

          {/* Features Section Header */}
          <div className="pt-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Odoo Product Life Cycle{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Management Features
              </span>
            </h2>

            {/* Enhanced Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:translate-x-2"
                  >
                    {/* Icon Container */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${getColorClasses(feature.color)} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Section - Enhanced Image/Video */}
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
              src="/images/App images/odoo-plm-management.webp"
              alt="Odoo PLM Management"
              className="rounded-xl w-full h-auto"
            />

            {/* Enhanced Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="group/play relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
              >
                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
                
                {/* Play Icon */}
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 relative z-10 group-hover/play:scale-110 transition-transform duration-300" fill="white" />
              </button>
            </div>

            {/* "Watch Demo" Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-gray-800">Watch Demo</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl transform animate-scaleIn">
            {/* Decorative Header Bar */}
            <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container */}
            <div className="p-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/xrf7zIACGvw?si=D_LUTRGT-Eayu7vw&autoplay=1"
                  title="Odoo PLM Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Transformproduct;
