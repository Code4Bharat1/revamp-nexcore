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
          <div>
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/images/App images/odoo-implementers-for-odoo-helpdesk.webp"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-xl shadow-xl transition-transform"
            />
          </div>
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
              Why odoo Implementers for Odoo Helpdesk
            </h2>
            <div className=" text-slate-500">
              <div>
                 odoo Implementers is the trusted official partner of Odoo that offers a broad range of Odoo's software apps to help you accelerate the growth of your business.
              </div>
              <div className="mt-4">
                We provide you with dedicated support for implementing, customizing and troubleshooting Odoo Helpdesk. This Odoo Helpdesk app is fully customizable and flexible that includes all that you need to set up a service desk, technical support team and issue ticket system with service requests that can be managed in the Odoo backend. Customers and admin receive the support ticket via email and customers can also view the status of their reported ticket in the website portal easily.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whychoose;

