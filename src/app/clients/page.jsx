import Client from "@/components/Clients/Client";
import React from "react";

export const metadata = {
  title: "Our Clients – NEXCORE ALLIANCE LLP Partnerships & Collaborations",
  description:
    "Discover NEXCORE ALLIANCE LLP’s clients and partnerships. We collaborate with developers, organizations, and communities across India to build modern web development solutions.",
  keywords: [
    "NEXCORE ALLIANCE LLP clients",
    "developer partnerships India",
    "coding collaborations",
    "IT clients India",
    "software development partners",
  ],
  openGraph: {
    title: "Our Clients – NEXCORE ALLIANCE LLP",
    description:
      "See NEXCORE ALLIANCE LLP’s clients and collaborations with developers and organizations across India.",
    url: "https://www.nexcorealliance.com/clients",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Clients",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients – NEXCORE ALLIANCE LLP Partnerships & Collaborations",
    description:
      "Explore NEXCORE ALLIANCE LLP’s collaborations with developers, businesses, and communities across India.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/clients",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Client />
    </div>
  );
};

export default Page;
