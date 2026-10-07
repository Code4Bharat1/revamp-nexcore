// No 'use client' directive here, SEO metadata requires SSR

import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import About from "@/components/policies/about";
import React from "react";

// Define metadata here for SEO
export const metadata = {
  title: "About Policy – NEXCORE ALLIANCE LLP",
  description:
    "Learn about NEXCORE ALLIANCE LLP’s company background, mission, and values. Discover how we empower developers in India through coding tutorials, tools, and modern web development resources.",
  keywords: [
    "NEXCORE ALLIANCE LLP about",
    "company background",
    "mission and values",
    "empowering developers in India",
    "coding tutorials",
    "web development resources"
  ],
  openGraph: {
    title: "About Policy – NEXCORE ALLIANCE LLP",
    description:
      "Learn about NEXCORE ALLIANCE LLP’s company background, mission, and values. Discover how we empower developers in India through coding tutorials, tools, and modern web development resources.",
    url: "https://www.nexcorealliance.com/policies/about",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP About Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Policy – NEXCORE ALLIANCE LLP",
    description:
      "Learn about NEXCORE ALLIANCE LLP’s company background, mission, and values. Discover how we empower developers in India through coding tutorials, tools, and modern web development resources.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
