"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Reviewemployees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="pr-[50px] pl-[50px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="text-purple-700 text-sm sm:text-[17px] font-semibold uppercase tracking-wider mb-2"
          >
            Review employees' performances in no time and create appraisals
          </motion.p>
          <h2 className="text-[20px] sm:text-3xl font-[1000] text-gray-800 mb-6 leading-snug lg:text-[20px]">
            Optimise Employee Performance with Odoo Appraisal Software
          </h2>
          <h2 className="text-[20px] sm:text-3xl font-[1000] text-gray-500 mb-6 leading-snug lg:text-[20px]">
            Timely Employee Appraisals with Odoo Appraisal App
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            Keep the encouragement process in your organization by performing periodical evaluations of your employees' performance. Frequently evaluate your human resources to provide benefits for your employees and for your company, whether it’s a small business or a large corporation.
          </p>
        </motion.div>

        {/* Right Section - Image/Video */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/images/App images/odoo-appraisal-software.webp"
              alt="Odoo Development"
              className="rounded-xl shadow-xl transition-transform"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviewemployees;