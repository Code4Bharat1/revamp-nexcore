"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaChartLine, FaCogs, FaUsersCog } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Consulting"
      breadcrumbName="Consulting"
      description="Expert Odoo ERP consultation to drive digital growth, streamline workflows, and optimize enterprise operations."
      bgImage="/images/odoo-consulting.png"
      features={["Consulting", "Configuration", "Customization", "Development", "Implementation", "Support"]}
      specTitle="Strategic Odoo Consulting"
      specSubtitle="Business Process Advisory"
      specHighlights={[
        {
          icon: <FaChartLine className="w-4 h-4 text-[#ff6600]" />,
          title: "ERP Strategy & Digital Roadmap",
          desc: "Business Gap Analysis & Solution Architecture",
          badge: "Strategic",
        },
        {
          icon: <FaCogs className="w-4 h-4 text-blue-400" />,
          title: "Process & Workflow Optimization",
          desc: "Sales • Inventory • Accounting • Manufacturing",
          badge: "Optimized",
        },
        {
          icon: <FaUsersCog className="w-4 h-4 text-cyan-400" />,
          title: "Certified Odoo Consultants",
          desc: "Enterprise Scale Planning & Best Practices",
          badge: "Certified",
        },
      ]}
    />
  );
};

export default Hero;
