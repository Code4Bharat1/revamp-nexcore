"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Trackcontrol = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24 overflow-hidden [perspective:1000px]">
      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
        {/* Left Section - Text Content */}
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-purple-700 text-sm sm:text-[17px] font-semibold uppercase tracking-wider mb-2">
            Track & Control Your Expenses with Odoo Expenses Module
          </p>
          <h1 className="text-2xl sm:text-[20px] font-extrabold text-gray-800 mb-6 leading-snug">
           Manage your Employee Expenses Effortlessly with Odoo Expenses Software
          </h1>
          <h2 className="text-base sm:text-[24px] font-medium text-gray-900 mb-4">
            Manage Your Employee Expenses Effortlessly
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            The financial well-being of a company depends on its success in expense management. Odoo Expenses app makes your job of managing the expenses of your employees very easier. At odoo Implementers, we help you get the class-leading Odoo expenses module for your business. Our team of experts will assist you in the entire configuration process of the Odoo Expenses app and guide you to encode real-time expense reports, validate your expenses and track your journey.
          </p>
        </motion.div>

        {/* Right Section - Image/Video */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/App images/expenses_screenshot_03.gif"
            alt="Odoo CRM Software"
            className="shadow-2xl p-[10px] border-white shadow-[#895d7d]/100 sm:w-full md:w-auto rounded-lg"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayVideo}
              className="bg-purple-700 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:bg-black transition animate-bounce"
            >
              ▶
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-600 transition"
            >
              ✕
            </button>
            {/* Video */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/wrzf-LWruvo?si=rz-jsSnPrKvhfUfK"
              title="Odoo Development Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trackcontrol;
