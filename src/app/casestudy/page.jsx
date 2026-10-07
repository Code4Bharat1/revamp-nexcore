import CaseStudiesPage from "@/components/case-study/case-study";
import React from "react";

export const metadata = {
  title: "Client Success Stories & Case Studies | NEXCORE ALLIANCE LLP",
  description:
    "Explore how NEXCORE ALLIANCE LLP delivered scalable AI solutions, enterprise web applications, and Odoo ERP transformations for businesses across Qatar, UAE, Saudi Arabia, and globally.",
  keywords: [
    "Nexcore Alliance case studies",
    "AI implementation case study",
    "Odoo ERP transformation Qatar",
    "web development success stories",
    "enterprise software case studies",
  ],
  openGraph: {
    title: "Client Success Stories & Case Studies | NEXCORE ALLIANCE LLP",
    description:
      "Real results from real businesses: Discover how we helped enterprises achieve measurable ROI and automation.",
    url: "https://www.nexcorealliance.com/casestudy",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/nex.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Case Studies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Success Stories & Case Studies | NEXCORE ALLIANCE LLP",
    description:
      "Real results from real businesses: AI, Web, and ERP transformation case studies.",
    images: ["https://www.nexcorealliance.com/nex.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/casestudy",
  },
};

const Page = () => {
  return (
    <div>
      <CaseStudiesPage />
    </div>
  );
};

export default Page;