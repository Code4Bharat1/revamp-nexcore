"use client";
import React from "react";
import { motion } from "framer-motion";

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:pt-[0px] sm:pb-[120px] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">
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
              src="/images/bg-image/odoo-implementers-for-odoo-marketing-automation.jpg"
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
            <h2 className="text-gray-900 font-[1000] text-base sm:text-[28px] lg:text-2xl mb-6">
              Why odoo Implementers for Odoo Marketing automation
            </h2>
            <div className="text-gray-500">
              odoo Implementers is an official Gold Partner of Odoo and offers various Odoo apps that enable your business to perform in a better and more efficient manner.
            </div>
            <div className="text-gray-500 mt-5">
              With the Odoo Marketing Automation development solution, odoo Implementers lets you set up automatic targeted marketing programs, build end-to-end customer journeys, employ email templates, craft compelling emails, acquire leads and convert them into sales. Odoo Marketing Automation module is feature-rich and automates several facets of marketing to help you experiment with different sorts of marketing actions and deliver an improved brand experience for your customers.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whyodoo;

