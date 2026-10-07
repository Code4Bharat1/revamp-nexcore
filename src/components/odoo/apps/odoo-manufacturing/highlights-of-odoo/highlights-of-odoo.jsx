import React from "react";

const Highlightsofodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:py-5">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[2rem] pb-[0rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="/images/odoo-images/oodu-implementers-odoo-manufacturing-module.png"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full border-white"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
        <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
          Highlights of Odoo Manufacturing Module
        </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Real-Time Communication- Display worksheets, and send quality alerts to workers during operations.</li>
            <li>
              Shop Floor Automation- Capture data in real-time from your equipment using the API.
            </li>
            <li>
              All-in-One- Fully integrated with MRP, Quality, Maintenance and PLM.
            </li>
            <li>No More Time Clocking- Accurate planning based on real-time manufacturing measures.</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Highlightsofodoo;
