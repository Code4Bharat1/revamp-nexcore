import Approach from "@/components/Approach/Approach";
import React from "react";

export const metadata = {
  title: "Our Approach – NEXCORE ALLIANCE LLP’s Way of Empowering Developers",
  description:
    "Discover NEXCORE ALLIANCE LLP’s approach to empowering developers in India with tutorials, tools, and resources. Learn how we build, support, and grow the developer community through modern web development practices.",
  keywords: [
    "NEXCORE ALLIANCE LLP approach",
    "developer empowerment India",
    "coding education approach",
    "web development strategy India",
  ],
  openGraph: {
    title: "Our Approach – NEXCORE ALLIANCE LLP",
    description:
      "See how NEXCORE ALLIANCE LLP empowers developers in India with tutorials, tools, and resources for modern web development.",
    url: "https://www.nexcorealliance.com/approach",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Approach",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach – NEXCORE ALLIANCE LLP’s Way of Empowering Developers",
    description:
      "Learn more about NEXCORE ALLIANCE LLP’s approach to supporting developers with tutorials, tools, and resources.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/approach",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Approach />
    </div>
  );
};

export default Page;
