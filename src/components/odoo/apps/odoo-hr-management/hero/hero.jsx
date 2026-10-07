import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(100vh-4rem)] sm:h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/Odoo Inventory.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-center items-center sm:justify-between sm:flex-row px-6 sm:px-[11.5rem] bg-gradient-to-b from-transparent to-black/0">
        {/* Left Side - Main Title */}
        <h2 className="text-[22px] sm:text-[36px] font-extrabold text-white text-center sm:text-left mb-4 sm:mb-0">
          HR Management
        </h2>

        {/* Right Side - Breadcrumb */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-2 sm:space-x-4 text-sm sm:text-xl font-medium text-gray-300">
        <Link href="/">
          <span className="hover:text-white text-[#885c7c] font-bold cursor-pointer">
            Home
          </span>
        </Link>
          <span className="text-white">HR Management</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
