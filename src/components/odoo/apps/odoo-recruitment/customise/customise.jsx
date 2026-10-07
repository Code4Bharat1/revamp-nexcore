"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Customise = () => {
  return (
    <section className="relative bg-white py-16 sm:py-0 overflow-hidden [perspective:1000px]">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">
        {/* Image Section */}
        <motion.div 
          className="relative flex justify-center mb-8 lg:mb-[60px]"
          initial={{ opacity: 0, x: -40, rotateY: 10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2 rounded-xl">
            <img
              src="/images/App images/odoo-recruitment-software-for-customizing-the-recruitment-process.gif"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-lg"
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
              Customise the Recruitment Process with Odoo App
            </h2>
            <div className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
               Define each stage of the interview and interviewers. Take advantage of the kanban view and modify the steps of your recruitment process: pre-qualification, first interview, second interview, negotiation and more. View precise statistics on your recruitment funnel. Utilize reports to compare the performance of postings you published on various external job boards and alter your strategy and recruitment plan quickly depending on the results.
            </div>
            <div className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-4">
              Integrated Documents
            </div>
            <div className="text-gray-500 font-bold text-base sm:text-[16px] lg:text-[19px] mb-4">
              Set up your own documents management process.
            </div>
            <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6 space-y-2">
              <li>Create job positions and post them.</li>
              <li>Get the first applications.</li>
              <li>Discover the filled documents in the Documents module.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customise;
