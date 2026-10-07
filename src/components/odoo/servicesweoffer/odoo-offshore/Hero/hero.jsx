"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaGlobe, FaUserCheck, FaClock } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Offshore Development"
      breadcrumbName="Offshore Development"
      description="Access world-class development talent and scale your business with our dedicated offshore team"
      bgImage="/images/odoo-offshore-development.png"
      features={["Expert Team", "Cost Effective", "Secure & Reliable", "Timezone Flexibility", "Skilled Developers", "Quick Scaling"]}
      specTitle="Dedicated Offshore Odoo Team"
      specSubtitle="Global Engineering Hub"
      specHighlights={[
        {
          icon: <FaGlobe className="w-4 h-4 text-[#ff6600]" />,
          title: "Dedicated Certified Developers",
          desc: "Full-Time Senior Odoo & Python Software Engineers",
          badge: "Dedicated",
        },
        {
          icon: <FaClock className="w-4 h-4 text-blue-400" />,
          title: "Timezone-Aligned Agile Sprints",
          desc: "Daily Standups • Transparent Jira/GitHub Tracking",
          badge: "Flexible",
        },
        {
          icon: <FaUserCheck className="w-4 h-4 text-cyan-400" />,
          title: "Rapid Scaling & Flexible Engagement",
          desc: "On-Demand Resource Ramp-Up • Transparent Billing",
          badge: "Cost-Effective",
        },
      ]}
    />
  );
};

export default Hero;