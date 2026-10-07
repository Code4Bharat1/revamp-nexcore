"use client";

import React from "react";
import { motion } from "framer-motion";

const Whychoose = () => {
  return (
    <section className="relative bg-white py-16 sm:py-10 [perspective:1000px]">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem] pb-[7rem]">
        {/* Image Section */}
        <motion.div 
          className="relative flex justify-center mb-8 lg:mb-[60px]"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <img
              src="/images/App images/odoo-email-marketing-for-campaigns.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-xl shadow-xl"
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
            <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
              Why odoo Implementers for Odoo E-mail Marketing App
            </h2>
            <div className="text-slate-500 space-y-4">
              <div>
                odoo Implementers is an Official Odoo partner and delivers a variety of software solutions in collaboration with Odoo to help your business performance.
              </div>
              <div>
                With the installation of Odoo E-mail Marketing, odoo Implementers assists you to gain comprehensive support for creating, sending and evaluating E-mail marketing campaigns. Odoo's feature-rich E-mail marketing app allows you to manage and analyze the delivery of messages and their status with zero hassles.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whychoose;
