"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Followup = () => {
  return (
    <div className="relative min-h-[28rem] bg-[#211f3b] text-white overflow-hidden">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[1.5rem] sm:pt-40 md:pt-[6rem] pb-[15rem] sm:pb-13">
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
            src="/images/App images/odoo-appraisal-calendar-and-solutions.png"
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
          <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold mb-3">
            Follow-up Effortlessly
          </h3>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            View the appraisal status clearly for every employee or the entire company.
          </p>
          <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold mb-3">
            Explicit calendar view
          </h3>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Keep an eye on upcoming evaluations and send alerts to respondents.
          </p>
          <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold mb-3">
            Exportable Solutions
          </h3>
          <p className="text-[14px] sm:text-[16px] leading-relaxed mb-3">
            Convert every evaluation into a printable PDF format.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Followup;

