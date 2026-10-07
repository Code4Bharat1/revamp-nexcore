import React from "react";
import Aboutus from "@/components/Aboutus/Aboutus";

export const metadata = {
  title: "About Us – NEXCORE ALLIANCE LLP | Empowering Businesses with Innovation",
  description:
    "Learn more about NEXCORE ALLIANCE LLP’s mission to empower enterprises with cutting-edge software development, Odoo ERP implementation, AI automation, and digital transformation.",
  keywords: [
    "About NEXCORE ALLIANCE LLP",
    "enterprise software development",
    "IT consulting India",
    "Odoo ERP partners",
    "AI automation solutions",
    "cloud migration services",
    "web development Mumbai",
  ],
  openGraph: {
    title: "About Us – NEXCORE ALLIANCE LLP | Empowering Businesses with Innovation",
    description:
      "NEXCORE ALLIANCE LLP is a premier IT solutions provider delivering enterprise software, Odoo ERP, and AI transformations globally.",
    url: "https://www.nexcorealliance.com/aboutus",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About NEXCORE ALLIANCE LLP",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – NEXCORE ALLIANCE LLP | Empowering Businesses with Innovation",
    description:
      "Discover our mission, core values, track record, and how we empower global businesses with technological innovation.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/aboutus",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Aboutus />
    </div>
  );
}
