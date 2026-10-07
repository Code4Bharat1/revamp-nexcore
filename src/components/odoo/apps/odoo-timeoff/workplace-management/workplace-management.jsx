"use client";

import React from 'react';
import { motion } from "framer-motion";

const Workplace = () => {
  return (
    <div className="relative h-[47rem] md:h-[37rem] bg-[#211f3b] text-white overflow-hidden [perspective:1000px]">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[5rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/App images/odoo-software-for-timeoff-calendar.webp"
            alt="Odoo CRM Dashboard"
            className="rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Right Section: Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"
          initial={{ opacity: 0, x: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-[1000] mb-6">
            Workplace Management with Odoo Timeoff App
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Approve or decline all leave requests from your employees. Let employees record their leave requests by themselves and get notifications via email for each new request. You can either approve or refuse requests. If you decide to reject, you can add an explanatory note for your action and send it to your employees.
          </p>
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-[1000] mb-6">
            Plan ahead by creating reports
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
             A Simple reporting tool. Get reports in just a click for each leave request, with information per request type, department, employee and even for the entire organization. View statistics on each leave and plan for the upcoming task to ensure you maintain productivity at the highest level.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Workplace;
