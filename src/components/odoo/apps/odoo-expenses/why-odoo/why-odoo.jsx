"use client";

import React from "react";
import { motion } from "framer-motion";

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:pt-[0px] sm:pb-[120px] overflow-hidden [perspective:1000px]">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">
        {/* Image Section */}
        <motion.div 
          className="relative flex justify-center mb-8 lg:mb-[60px]"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2 rounded-xl">
            <img
              src="/images/App images/expenses_screenshot_03.gif"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-lg"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="pb-12 sm:pb-[86px] text-center sm:text-left"
          initial={{ opacity: 0, x: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
            <h2 className="text-gray-900 font-[1000] text-base sm:text-[28px] lg:text-2xl mb-6">
             Why odoo Implementers for Odoo Expenses?
            </h2>
            <div className="text-gray-500">
              odoo Implementers is your reliable Official Odoo partner and offers a broad spectrum of Odoo apps to suit your business requirements and help run your business operations smoothly.
            </div>
            <div className="text-gray-500 mt-5">
              With the implementation of Odoo Expenses Management, odoo Implementers allows you to complete all the operations including creating, validating, approving and refusing expense reports in a much faster and simpler way. The Odoo App for Expenses is loaded with advanced features to digitize expense management and needs only a little bit of effort to integrate it with other business modules for seamless operations.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whyodoo;
