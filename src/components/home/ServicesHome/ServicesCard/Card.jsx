import React, { useState } from "react";
import Image from "next/image";

const ServiceCard = ({ image, imageHover, title, description, noLineHeight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[80vw] md:w-[30vw] lg:w-[22vw] min-h-[45vh] cursor-pointer rounded-2xl flex flex-col items-start justify-start p-5 shadow-lg transition-all duration-300 ease-in-out
        ${isHovered ? "shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-500 scale-105" : "bg-white scale-100"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo/Image */}
      <div className="w-full flex justify-center md:justify-start mb-4">
        <div
          className={`w-[60px] md:w-[80px] h-[60px] md:h-[80px] relative transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
        >
          <Image
            src={isHovered ? imageHover : image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-lg md:text-xl font-bold transition-colors duration-300 mb-2 ${
          isHovered ? "text-white" : "text-gray-900"
        } ${noLineHeight ? "leading-none" : "leading-snug"}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm md:text-base transition-colors duration-300 ${
          isHovered ? "text-white/90" : "text-gray-700"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
