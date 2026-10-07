"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Mechanizeworkflows = () => {
  return (
    <div className="relative min-h-screen bg-[#211f3b] text-white overflow-hidden">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[264px] h-[362px] bg-contain bg-no-repeat opacity-100 pointer-events-none"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[366px] h-[501px] bg-contain bg-no-repeat opacity-100 pointer-events-none"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:p-[9rem]">
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
            src="/images/App images/odoo-marketing-automation-for-business.gif"
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
          <h3 className="text-2xl font-bold mb-4">
            Mechanize workflows and elevate your business
          </h3>
          <p className="text-[16px] leading-relaxed mb-4">
            Divide your potential customer database to reach out to the right prospect with the right message at the right time. Create advanced marketing workflows that put your prospects in the centre and nurture them effectively by means of your sales funnel all the time.
          </p>
          <h3 className="text-2xl font-bold mt-9 mb-4">
            Design explicit end-to-end customer journeys
          </h3>
          <p className="text-[16px] leading-relaxed ">
            A friendly visual interface to help customize your workflows easily.
          </p>
          <p className="text-[16px] leading-relaxed mt-5">
            Planning a multi-stage campaign with various paths is much easier similar to two-step campaigns. Insert new actions and set up time triggers directly on your workflow.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mechanizeworkflows;

