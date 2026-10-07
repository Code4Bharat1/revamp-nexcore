"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaCode, FaCogs, FaPuzzlePiece } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Customization"
      breadcrumbName="Customization"
      description="Transform your business operations with bespoke Odoo modules and tailored ERP features crafted for your exact requirements."
      bgImage="/images/odoo-customization.png"
      features={["Customization", "Custom Modules", "UI/UX Design", "Reports", "Integrations", "Support"]}
      specTitle="Tailored Odoo Customization"
      specSubtitle="Bespoke Feature Architecture"
      specHighlights={[
        {
          icon: <FaPuzzlePiece className="w-4 h-4 text-[#ff6600]" />,
          title: "Custom Module Development",
          desc: "Tailored Models • Custom Business Logic • Clean Hooks",
          badge: "Modular",
        },
        {
          icon: <FaCode className="w-4 h-4 text-blue-400" />,
          title: "UI/UX & View Tailoring",
          desc: "Custom Forms • Kanban Views • Dynamic Dashboards",
          badge: "Dynamic",
        },
        {
          icon: <FaCogs className="w-4 h-4 text-cyan-400" />,
          title: "QWeb Reports & Documents",
          desc: "Invoices • Delivery Slips • Custom PDF Layouts",
          badge: "Pixel-Perfect",
        },
      ]}
    />
  );
};

export default Hero;
