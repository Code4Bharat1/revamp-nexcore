"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaWrench, FaServer, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Maintenance"
      breadcrumbName="Maintenance"
      description="Keep your Odoo system running smoothly with our comprehensive maintenance and support services"
      bgImage="/images/odoo-maintenance.png"
      features={["24/7 Support", "Secure & Reliable", "Expert Team", "Server & DB Tuning", "Automated Backups", "Security Patches"]}
      specTitle="Odoo SLA & Maintenance"
      specSubtitle="Continuous Performance Engineering"
      specHighlights={[
        {
          icon: <FaWrench className="w-4 h-4 text-[#ff6600]" />,
          title: "Server & PostgreSQL Tuning",
          desc: "Query Optimization • Cache Management • DB Vacuuming",
          badge: "Optimized",
        },
        {
          icon: <FaServer className="w-4 h-4 text-blue-400" />,
          title: "Automated Backup & Disaster Recovery",
          desc: "Encrypted Cloud Backups • Failover Testing",
          badge: "Redundant",
        },
        {
          icon: <FaShieldAlt className="w-4 h-4 text-cyan-400" />,
          title: "Continuous Security & Bug Patching",
          desc: "Vulnerability Scans • Module Updates • Log Monitoring",
          badge: "99.9% SLA",
        },
      ]}
    />
  );
};

export default Hero;