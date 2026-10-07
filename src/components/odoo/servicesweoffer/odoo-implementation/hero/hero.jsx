"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaRocket, FaDatabase, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Implementation"
      breadcrumbName="Implementation"
      description="End-to-end Odoo ERP implementation ensuring smooth data migration, full system alignment, and zero downtime deployment."
      bgImage="/images/odoo-implementation.png"
      features={["Implementation", "Deployment", "Data Import", "Go-Live Support", "Training", "Maintenance"]}
      specTitle="Turnkey ERP Implementation"
      specSubtitle="Zero-Downtime Deployment Lifecycle"
      specHighlights={[
        {
          icon: <FaRocket className="w-4 h-4 text-[#ff6600]" />,
          title: "Phased Deployment Methodology",
          desc: "Requirement Scoping • Gap Analysis • Go-Live Support",
          badge: "Turnkey",
        },
        {
          icon: <FaDatabase className="w-4 h-4 text-blue-400" />,
          title: "Clean Data Migration & Validation",
          desc: "Legacy System Extraction • Field Cleansing • Verification",
          badge: "Zero Loss",
        },
        {
          icon: <FaUsers className="w-4 h-4 text-cyan-400" />,
          title: "User Training & Change Management",
          desc: "Staff Onboarding • Process SOPs • Admin Handoff",
          badge: "100% Adoption",
        },
      ]}
    />
  );
};

export default Hero;