"use client";

import React from "react";
import OdooDetailHero from "@/components/odoo/servicesweoffer/common/OdooDetailHero";
import { FaNetworkWired, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <OdooDetailHero
      serviceTitle="Integration"
      breadcrumbName="Integration"
      description="Seamlessly connect your business systems and unlock the full potential of your operations"
      bgImage="/images/odoo-integration.png"
      features={["API Integration", "Fast & Secure", "Reliable", "Payment Gateways", "Shipping Connectors", "Legacy Sync"]}
      specTitle="Odoo Integration Suite"
      specSubtitle="Connected Enterprise Ecosystem"
      specHighlights={[
        {
          icon: <FaNetworkWired className="w-4 h-4 text-[#ff6600]" />,
          title: "Payment & Gateway Connectors",
          desc: "Stripe • PayPal • Razorpay • Authorize.Net",
          badge: "Real-Time",
        },
        {
          icon: <FaExchangeAlt className="w-4 h-4 text-blue-400" />,
          title: "Logistics & Shipping APIs",
          desc: "FedEx • DHL • UPS • Custom Freight Carriers",
          badge: "Automated",
        },
        {
          icon: <FaShieldAlt className="w-4 h-4 text-cyan-400" />,
          title: "Third-Party & CRM Integration",
          desc: "Salesforce • HubSpot • Shopify • WooCommerce",
          badge: "Bi-Directional",
        },
      ]}
    />
  );
};

export default Hero;