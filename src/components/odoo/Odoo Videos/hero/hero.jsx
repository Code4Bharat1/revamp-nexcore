import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-100">
        <Image
          src="/images/App images/devices.gif"
          alt="Odoo ERP Application Demos and Training Videos"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-center items-center sm:flex-row px-6 sm:px-[11.5rem] bg-gradient-to-b from-transparent to-black/0">
        {/* Left Side - Main Title */}
        <h1 className="text-[28px] sm:text-[48px] font-bold text-black flex justify-center sm:text-left mb-4 sm:mb-0">
          Odoo Videos
        </h1>
      </div>
    </div>
  );
};

export default Hero;
