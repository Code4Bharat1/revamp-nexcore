"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaHeadset, FaClock, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Support"
      breadcrumbName="Support"
      description="Expert assistance for your Odoo ERP system anytime, anywhere"
      bgImage="/images/odoo-support.png"
      features={["Quick Response", "Expert Help", "24/7 Support", "SLA Guarantee", "Bug Fixes", "Health Checks"]}
      specTitle="Odoo Dedicated Support"
      specSubtitle="Round-the-Clock Enterprise Helpdesk"
      specHighlights={[
        {
          icon: <FaHeadset className="w-4 h-4 text-[#ff6600]" />,
          title: "Dedicated Technical Helpdesk",
          desc: "Multi-Tier Ticket Support • Remote Diagnostics",
          badge: "24/7/365",
        },
        {
          icon: <FaClock className="w-4 h-4 text-blue-400" />,
          title: "Guaranteed SLA Response Times",
          desc: "Critical Issue Escalation • Rapid Patch Deployment",
          badge: "< 1 Hour SLA",
        },
        {
          icon: <FaShieldAlt className="w-4 h-4 text-cyan-400" />,
          title: "Proactive Health Monitoring",
          desc: "System Performance Audits • Security Patching",
          badge: "99.9% Uptime",
        },
      ]}
    />
  );
};

export default Hero;