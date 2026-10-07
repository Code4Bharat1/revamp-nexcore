import dynamic from "next/dynamic";
import Navbar from "@/components/layouts/navbar/Navbar";
import SolutionsSection from "@/components/odoo/apps/page";
import React from "react";

const FooterLinks = dynamic(() => import("@/components/odoo/servicesweoffer/usefullinks/links"));
const Footer = dynamic(() => import("@/components/layouts/footer/Footer"));

export const metadata = {
  title: "Enterprise Odoo Apps & Business Solutions | NEXCORE ALLIANCE LLP",
  description:
    "Explore Nexcore Alliance LLP's comprehensive suite of Odoo ERP apps—CRM, Accounting, Inventory, Manufacturing, HR, POS, and custom enterprise modules.",
  keywords: [
    "Odoo apps",
    "Odoo CRM",
    "Odoo Accounting",
    "Odoo ERP modules",
    "enterprise ERP solutions",
    "Nexcore Alliance Odoo apps",
  ],
  openGraph: {
    title: "Enterprise Odoo Apps & Business Solutions | NEXCORE ALLIANCE LLP",
    description:
      "Explore comprehensive Odoo ERP business applications customized for your enterprise needs.",
    url: "https://www.nexcorealliance.com/apps",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/nex.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Odoo Apps",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Odoo Apps & Business Solutions | NEXCORE ALLIANCE LLP",
    description:
      "Explore comprehensive Odoo ERP business applications customized for your enterprise needs.",
    images: ["https://www.nexcorealliance.com/nex.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/apps",
  },
};

function Page() {
  return (
    <div>
      <Navbar />
      <SolutionsSection />
      <FooterLinks />
      <Footer />
    </div>
  );
}

export default Page;