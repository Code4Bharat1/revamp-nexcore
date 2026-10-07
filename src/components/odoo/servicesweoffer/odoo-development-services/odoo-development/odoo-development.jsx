import React, { useState } from 'react';
import { FaCogs, FaPlay, FaTimes, FaRocket, FaAward, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const OdooDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: FaRocket, text: 'Enhanced Performance' },
    { icon: FaAward, text: 'Gold Partner' },
    { icon: FaCheckCircle, text: 'Next-Level Service' },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-6"
            >
              <FaCogs className="text-sm" />
              <span>Development Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-6 leading-tight">
              Enhanced Performance & Functionality with <span className="text-[#FF6600]">Odoo Development</span>
            </motion.h2>

            {/* Description Cards */}
            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#08153A]/10 border-l-4 border-l-[#FF6600]">
                <p className="text-[#08153A]/80 leading-relaxed font-medium">
                  Enhance the functionality and performance of your business with the help of <strong className="text-[#08153A]">Odoo development services</strong>. <strong className="text-[#FF6600]">Odoo Implementers</strong>, one of India's leading ERP software companies, offers the next-level Odoo development service.
                </p>
              </div>

              <div className="bg-[#08153A]/[0.02] rounded-2xl p-6 border border-[#08153A]/10">
                <p className="text-[#08153A]/80 leading-relaxed font-medium">
                  <strong className="text-[#08153A]">Odoo Implementers</strong> is an <strong className="text-[#FF6600]">Odoo Gold partner</strong> offering Odoo Development Services to prospects and customers alike.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2.5 bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#08153A] flex items-center justify-center text-[#FF6600]">
                      <Icon className="text-lg sm:text-xl" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#08153A] text-center leading-tight">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Section - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative bg-white rounded-3xl shadow-xl p-3 sm:p-4 border border-[#08153A]/10 w-full max-w-lg group">
              {/* Floating Badge */}
              <div className="absolute -top-3.5 -right-3.5 bg-[#FF6600] text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <FaPlay className="text-xs" />
                <span>Watch Video</span>
              </div>

              {/* Video Thumbnail */}
              <div className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md" onClick={handlePlayVideo}>
                <img
                  src="/images/odoo-images/thumbnail.jpeg"
                  alt="Odoo Development Video"
                  className="w-full h-auto object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#08153A]/40 flex items-center justify-center group-hover:bg-[#08153A]/50 transition-all duration-300">
                  <div className="bg-[#FF6600] text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                    <FaPlay className="text-xl sm:text-2xl ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#08153A]/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-3xl overflow-hidden w-full max-w-5xl shadow-2xl border border-white/20">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-[#FF6600] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200 z-10"
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Video */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_fQFz4-7i5Q?autoplay=1"
                title="Odoo Development Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OdooDevelopment;