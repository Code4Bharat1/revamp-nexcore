"use client";

import React from "react";
import { motion } from "framer-motion";

const Evaluatechannels = () => {
  return (
    <div className="relative h-[32rem] md:h-[37rem] bg-[#211f3b] text-white flex flex-col justify-center items-center overflow-hidden [perspective:1000px]">
      {/* Background Images */}
      <div  
        className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[264px] h-[250px] sm:h-[300px] md:h-[362px] bg-contain bg-no-repeat"
        style={{
          backgroundImage:
            "url(/images/App images/bg-art-6.png)",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[180px] sm:w-[250px] md:w-[366px] h-[220px] sm:h-[300px] md:h-[501px] bg-contain bg-no-repeat"
        style={{
          backgroundImage:
            "url(/images/App images/bg-art-5.png)",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-36 py-[3rem]">
        {/* Right Section: Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left space-y-4"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold">
            Evaluate Channels that Deliver the Best Job Placement Results with Odoo App
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-relaxed">
            Assign a new email address automatically to every job offer to route
            applications directly to the right one.
          </p>
          <p className="text-[14px] sm:text-[16px] leading-relaxed">
            Whether applicants reach out to you by email or through an online form,
            ensure they all are answered in just a click, with the help of templates
            or personalized emails. Get every data like a resume, personal info and
            more automatically indexed.
          </p>
        </motion.div>

        {/* Left Section: CRM Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/App images/odoo-recruitment-system-for-best-job-placement-results.gif"
            alt="Odoo CRM Dashboard"
            className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-full rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Evaluatechannels;
  