"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaShoppingCart, FaBoxes, FaCreditCard } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="E-Commerce"
      breadcrumbName="E-Commerce"
      description="Build your powerful online store with seamless integration"
      bgImage="/images/odoo-ecommerce.png"
      features={["Fast Setup", "Online Store", "24/7 Support", "Omnichannel Storefront", "Real-time Stock Sync", "Customer Portal"]}
      specTitle="Odoo E-Commerce Platform"
      specSubtitle="Omnichannel Digital Commerce"
      specHighlights={[
        {
          icon: <FaShoppingCart className="w-4 h-4 text-[#ff6600]" />,
          title: "Modern Omnichannel Storefront",
          desc: "Mobile Responsive • Fast Checkout • Multi-Language",
          badge: "B2B & B2C",
        },
        {
          icon: <FaBoxes className="w-4 h-4 text-blue-400" />,
          title: "Real-Time Inventory Synchronization",
          desc: "Multi-Warehouse • Automated Stock Levels • Barcode",
          badge: "Synced",
        },
        {
          icon: <FaCreditCard className="w-4 h-4 text-cyan-400" />,
          title: "Integrated Checkout & Customer Portal",
          desc: "One-Click Reorders • Invoice Tracking • Secure Pay",
          badge: "PCI Compliant",
        },
      ]}
    />
  );
};

export default Hero;