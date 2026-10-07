"use client";
import React from "react";
import { motion } from "framer-motion";

const EcommerceBenefits = () => {
  return (
    <section
      className="relative bg-white py-8 sm:py-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 px-6 sm:px-12 lg:px-24 [perspective:1000px]">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
          className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[399px] w-full sm:w-[530px] transition-all duration-300 hover:shadow-2xl [transform-style:preserve-3d]"
        >
          <div className="flex items-center mb-4">
            <img
              src="/images/App images/App Icons/odoo-appraisal-templates-and-survey.png"
              alt="Benefits Icon"
              className="w-[5rem] h-16 sm:w-71 sm:h-[5.25rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
                Craft your own survey
              </h3>
              <p className="text-gray-600 text-sm sm:text-base space-y-2">
                Utilize templates or prepare them your way
              </p>
            </div>
          </div>
          <div className="text-gray-600 text-sm sm:text-base space-y-2">
            Build your own surveys to collect important information and/or opinions from your assets. Rapidly add questions, edit pages and draft a useful survey, with the help of excellent built-in templates or create your own design from scratch. Convert current surveys into templates to use and change them later. Proofread your surveys before uploading them: get the manager's review or other employees' and allow them to include comments before completing the final draft of surveys. You can also even draft multiple surveys for each step of evaluation to send them to different people.
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ y: -8, rotateX: -3, rotateY: 3, scale: 1.02 }}
          className="group bg-white shadow-lg rounded-lg p-4 sm:p-6 h-auto sm:h-[399px] w-full sm:w-[530px] transition-all duration-300 hover:shadow-2xl [transform-style:preserve-3d]"
        >
          <div className="flex items-center mb-4">
            <img
              src="/images/App images/App Icons/odoo-appraisal-app-development.png"
              alt="Store Icon"
              className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] mr-4 transform transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h3 className="text-lg sm:text-[20px] font-[1000] text-gray-800">
                Develop the perfect appraisal
              </h3>
              <p className="text-gray-600 text-sm sm:text-base space-y-2">
                Raise the right questions and secure insightful information
              </p>
            </div>
          </div>
          <div className="text-gray-600 text-sm sm:text-base space-y-2">
            Collect your employees' answers by taking the survey with the right queries. Create your own templates or choose from existing ones. Manage various types of assessments: bottom-up, top-down, self-evaluations and final evaluation by the manager. Allow employees to prepare evaluations themselves that can be sent to subordinates, juniors, as well as to their managers.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;

