"use client";

import React from 'react';
import { motion } from "framer-motion";

const Spendtime = () => {
  return (
    <div className="relative h-[42rem] md:h-[40rem] bg-[#211f3b] text-white overflow-hidden [perspective:1000px]">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[6rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/App images/odoo-expenses-management-system-reports.gif"
            alt="Odoo CRM Dashboard"
            className="shadow-2xl border-[11px] border-[#211f3b]/50 shadow-[#895d7d]/100 rounded-lg"
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
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6">
           Spend time on expense reports efficiently
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
           Odoo Expenses Module brings everything you need in one place. Managing the daily expenses of your employees is now a very simple task. From employee expenditure and travel expenses to office supplies, you can access all receipts and expense submissions on the go from your Odoo Expenses dashboard and validate, accept or refuse them in a few clicks. No specialized software is required to keep expense records and perform any action directly through the app.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Spendtime;
