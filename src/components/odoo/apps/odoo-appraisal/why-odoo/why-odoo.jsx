"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:py-5 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[2rem] pb-[4rem]">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center mb-8 lg:mb-[60px]"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2 transition-transform rounded-xl"
          >  
            <img
              src="/images/App images/odoo-appraisal-app-form.png"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full border-white rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-12 sm:pb-[86px] text-center sm:text-left"
        >
          <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
            <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
              Why odoo Implementers for Odoo Appraisal App?
            </h2>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              Odoo Implementers is the trusted official partner of Odoo that offers a broad spectrum of Odoo's business apps to fuel the growth of your business.
            </div>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              We provide you with firm support for Odoo HR Management implementation. This Odoo HR management solution includes a prominent collection of various iconic modules such as odoo HR payroll, odoo appraisals, odoo recruitment system and more, which are designed to assist in several HR operations.
            </div>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              The HR team efficiently manage employee leaves with the time off module, maintain standardization in the appraisal process and perform the custom recruitment process in a hassle-free way and show utmost excellence in all operations.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whyodoo;

