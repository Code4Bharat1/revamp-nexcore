import Service from "@/components/Services/Service";
import React from "react";

export const metadata = {
  title: "Our Services – NEXCORE ALLIANCE LLP Web Development & Developer Resources",
  description:
    "Explore NEXCORE ALLIANCE LLP’s services, including web development tutorials, coding tools, and developer resources. We empower developers in India with modern web technologies.",
  keywords: [
    "NEXCORE ALLIANCE LLP services",
    "web development services India",
    "coding tutorials",
    "developer tools",
    "programming resources India",
  ],
  openGraph: {
    title: "Our Services – NEXCORE ALLIANCE LLP",
    description:
      "Learn more about NEXCORE ALLIANCE LLP’s services for developers, including tutorials, tools, and resources.",
    url: "https://www.nexcorealliance.com/services",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services – NEXCORE ALLIANCE LLP Web Development & Resources",
    description:
      "Explore tutorials, coding tools, and web development resources offered by NEXCORE ALLIANCE LLP.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Service />
    </div>
  );
};

export default Page;
