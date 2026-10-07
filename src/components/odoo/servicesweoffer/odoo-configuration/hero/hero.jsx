"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaSlidersH, FaCogs, FaCheckDouble } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Configuration"
      breadcrumbName="Configuration"
      description="Expert Odoo configuration services to fine-tune your ERP modules and automate your daily workflows."
      bgImage="/images/odoo-configuration.png"
      features={["Configuration", "System Setup", "Module Setup", "Workflow Tuning", "Data Migration", "Support"]}
      specTitle="Odoo System Configuration"
      specSubtitle="Workflow & Module Alignment"
      specHighlights={[
        {
          icon: <FaSlidersH className="w-4 h-4 text-[#ff6600]" />,
          title: "Module Parameter & Rule Setup",
          desc: "Tax • Multi-Currency • Chart of Accounts • Security",
          badge: "Configured",
        },
        {
          icon: <FaCogs className="w-4 h-4 text-blue-400" />,
          title: "Automated Action Triggers",
          desc: "Email Alerts • Stage Progressions • Approvals",
          badge: "Automated",
        },
        {
          icon: <FaCheckDouble className="w-4 h-4 text-cyan-400" />,
          title: "End-to-End System Tuning",
          desc: "User Access Roles • Dashboard Metrics • Reporting",
          badge: "Verified",
        },
      ]}
    />
  );
};

export default Hero;
