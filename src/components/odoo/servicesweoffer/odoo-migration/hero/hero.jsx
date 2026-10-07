"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaSyncAlt, FaDatabase, FaShieldCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Migration"
      breadcrumbName="Migration"
      description="Seamless upgrade to the latest Odoo version with zero downtime"
      bgImage="/images/odoo-migration.png"
      features={["Smooth Transition", "Zero Data Loss", "Expert Team", "Schema Upgrade", "Custom Code Port", "Integrity Verification"]}
      specTitle="Odoo Migration Architecture"
      specSubtitle="Version Upgrade & Database Porting"
      specHighlights={[
        {
          icon: <FaSyncAlt className="w-4 h-4 text-[#ff6600]" />,
          title: "Version Upgrade (v14 → v18)",
          desc: "Community & Enterprise Edition Migration",
          badge: "v18 Ready",
        },
        {
          icon: <FaDatabase className="w-4 h-4 text-blue-400" />,
          title: "PostgreSQL Database Schema Porting",
          desc: "Data Cleansing • Relationship Verification • Scripts",
          badge: "Zero Loss",
        },
        {
          icon: <FaSyncAlt className="w-4 h-4 text-cyan-400" />,
          title: "Custom Code & Module Porting",
          desc: "API Deprecation Fixes • View Syntax Migration",
          badge: "Verified",
        },
      ]}
    />
  );
};

export default Hero;