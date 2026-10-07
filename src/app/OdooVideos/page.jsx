import React from "react";
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import Hero from "@/components/odoo/Odoo Videos/hero/hero";
import VideoGrid from "@/components/odoo/Odoo Videos/odd-videos/odd-videos";
import FooterLinks from "@/components/odoo/servicesweoffer/usefullinks/links";

export const metadata = {
  title: "Odoo ERP Application Tutorials & Demonstration Videos | NEXCORE ALLIANCE",
  description:
    "Explore comprehensive Odoo ERP video tutorials and feature demonstrations for CRM, Accounting, Manufacturing, Inventory, Point of Sale, and HR management by Nexcore Alliance.",
  keywords: [
    "Odoo Videos",
    "Odoo ERP Tutorials",
    "Odoo Demo",
    "Odoo CRM Video",
    "Odoo Accounting Guide",
    "Odoo Manufacturing Demo",
    "NEXCORE ALLIANCE LLP",
  ],
  alternates: {
    canonical: "https://www.nexcorealliance.com/OdooVideos",
  },
  openGraph: {
    title: "Odoo ERP Video Tutorials & Demonstrations | NEXCORE ALLIANCE",
    description:
      "Watch step-by-step Odoo ERP application demos and expert walkthroughs across all key business modules.",
    url: "https://www.nexcorealliance.com/OdooVideos",
    siteName: "NEXCORE ALLIANCE LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo ERP Video Tutorials & Demonstrations | NEXCORE ALLIANCE",
    description:
      "Explore comprehensive Odoo ERP feature demonstrations and app tutorials by Nexcore Alliance.",
  },
};

export default function OdooVideosPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main className="w-full">
        <Hero />
        <VideoGrid />
        <FooterLinks />
      </main>
      <Footer />
    </div>
  );
}