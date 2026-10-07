"use client";
import React from "react";
import Image from "next/image";

const HRManagement = () => {
  return (
    <div className="bg-white pt-[6.5rem] px-5 md:pr-[10rem] md:pl-[10rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Streamline Your HR Operations with Odoo HRMS
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Employees are the spine of any organization. With efficient
            management of employees, companies can improve performance,
            profitability, and redefine success in all aspects of their
            business. Odoo HR Management software is a complete suite that allows
            you to manage everything from hours worked to expense requests and
            assists your HR team in all their key responsibilities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Oodu Implementers, we help you install the Odoo HRMS that includes
            Odoo Time Off, Odoo Recruitment system, Odoo Appraisal, and more to
            enable you to handle all operations related to your staff and
            recruitment smoothly.
          </p>
        </div>

        {/* Right Side: Images Grid */}
        <div className="grid grid-cols-2 gap-7">
          <div className="relative">
            <Image
              src="/images/odoo-images/odoo-hr-development-1.jpg"
              alt="Meeting"
              width={300}
              height={200}
              className="w-full h-full hover:grayscale-[0%] grayscale-[90%] -mt-[30px] mb-[30px]"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/odoo-images/odoo-hrms-management-2.jpg"
              alt="Smiling Woman"
              width={300}
              height={200}
              className="w-full h-full hover:grayscale-[0%] grayscale-[90%] "
            />
          </div>
          <div className="relative">
            <Image
              src="/images/odoo-images/odoo-hr-development-3.jpg"
              alt="Working Woman"
              width={300}
              height={200}
              className="w-full h-full hover:grayscale-[0%] grayscale-[90%] -mt-[30px] mb-[30px]"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/odoo-images/odoo-hr-development-4.jpg"
              alt="Laptop Work"
              width={300}
              height={200}
              className="w-full h-full hover:grayscale-[0%] grayscale-[90%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRManagement;
