"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SupporterCard = ({ imageSrc, altText, link }) => {
  const [imgSrc, setImgSrc] = useState(imageSrc);

  const handleImageError = () => {
    setImgSrc("/images/default.png");
  };

  return (
    <motion.div
      className="flex-shrink-0 w-40 sm:w-48 md:w-56 h-20 sm:h-24 md:h-28 flex items-center justify-center p-3 sm:p-4 transition-transform duration-300 cursor-pointer focus:outline-none bg-transparent"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      tabIndex={0}
      role="button"
      aria-label={`View details about ${altText}`}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter" && link) {
          window.open(link, "_blank");
        }
      }}
    >
      <img
        src={imgSrc}
        alt={altText}
        className="max-h-12 sm:max-h-14 md:max-h-16 max-w-[140px] sm:max-w-[170px] md:max-w-[190px] w-auto h-auto object-contain transition-all"
        onError={handleImageError}
      />
    </motion.div>
  );
};

export default SupporterCard;
