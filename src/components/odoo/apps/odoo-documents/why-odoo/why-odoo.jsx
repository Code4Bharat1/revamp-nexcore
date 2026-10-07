"use client";
import React from "react";
import { motion } from "framer-motion";

const Whychoose = () => {
  return (
    <section className="relative bg-white py-16 sm:py-10 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem] pb-[7rem]">
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
              src="/images/bg-image/odoo-documents-software.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-lg"
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
              Why Odoo Implementers for Odoo Document Management System
            </h2>
            <div className=" text-slate-500">
              <div>
                odoo Implementers is an Official Odoo partner and help you get a wide range of Odoo apps for the smooth and efficient running of your business.
              </div>
              <div className="mt-4">
                odoo Implementers helps your business share, collaborate, store and organize documents effortlessly with the installation of Odoo DMS. A powerful Document Management System is integral to operating efficiently and empowers all the teams involved in the business to perform better in a short time, regardless of their locations. Odoo Documents software provides employees with a single point of access to the right information at the right time and allows them to sort, filter and group based on numerous parameters.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whychoose;

