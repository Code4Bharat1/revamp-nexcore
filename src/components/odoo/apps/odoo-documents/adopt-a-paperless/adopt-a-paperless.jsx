"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Adoptpaperless = () => {
  return (
    <div className="relative min-h-[42rem] md:min-h-[37rem] bg-[#211f3b] text-white overflow-hidden">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-100 pointer-events-none"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-100 pointer-events-none"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[6rem] pb-[15rem] sm:pb-13">
        {/* Left Section: CRM Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src="/images/bg-image/odoo-document-management-system.png"
            alt="Odoo CRM Dashboard"
            className="shadow-2xl border-[11px] border-[#211f3b]/50 shadow-[#895d7d]/100 transition-transform rounded-xl"
          />
        </motion.div>

        {/* Right Section: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"
        >
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6">
            Adopt a paperless approach to your business
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            You can share, send, categorize, and archive scanned documents in a hassle-free manner with Odoo Documents. You can also create documents for your business such as vendor bills, tasks and product sheets for manufacturing in no time.
          </p>
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-6">
            Keep your workflow running smooth
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Ensure all the tasks are completed by the right person at the right time with a fully integrated approval, control, and validation centre that activities, chatter and action rules.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Adoptpaperless;

