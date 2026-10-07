"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaTerminal, FaCodeBranch, FaServer } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Development"
      breadcrumbName="Development"
      description="High-performance custom Odoo app development, API integrations, and backend engineering to scale your business."
      bgImage="/images/odoo-development.png"
      features={["Development", "Custom Apps", "API Integration", "Python Code", "Webhooks", "Support"]}
      specTitle="Odoo Engineering & Development"
      specSubtitle="Python & Backend Architecture"
      specHighlights={[
        {
          icon: <FaTerminal className="w-4 h-4 text-[#ff6600]" />,
          title: "Custom Python & ORM Core",
          desc: "Scalable Logic • Performance Query Optimization",
          badge: "Python 3",
        },
        {
          icon: <FaCodeBranch className="w-4 h-4 text-blue-400" />,
          title: "REST & JSON-RPC Web APIs",
          desc: "Fast External Connections • Microservice Sync",
          badge: "REST/RPC",
        },
        {
          icon: <FaServer className="w-4 h-4 text-cyan-400" />,
          title: "PostgreSQL Database Architecture",
          desc: "High Throughput • Clean Indexes • Zero Data Loss",
          badge: "PostgreSQL",
        },
      ]}
    />
  );
};

export default Hero;
