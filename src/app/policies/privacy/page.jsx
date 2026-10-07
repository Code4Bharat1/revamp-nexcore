import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import PrivacyPolicy from "@/components/policies/Privacy";
import React from "react";

export const metadata = {
  title: "Privacy Policy – NEXCORE ALLIANCE LLP",
  description:
    "Read NEXCORE ALLIANCE LLP’s Privacy Policy to understand how we collect, use, and protect your personal data while providing coding tutorials, tools, and web development resources.",
  keywords: [
    "NEXCORE ALLIANCE LLP privacy policy",
    "data protection India",
    "personal information policy",
    "user privacy NEXCORE ALLIANCE LLP",
    "developer data security"
  ],
  openGraph: {
    title: "Privacy Policy – NEXCORE ALLIANCE LLP",
    description:
      "Learn how NEXCORE ALLIANCE LLP protects your data and ensures transparency with our Privacy Policy.",
    url: "https://www.nexcorealliance.com/policies/privacy",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – NEXCORE ALLIANCE LLP",
    description:
      "Read NEXCORE ALLIANCE LLP’s Privacy Policy to see how we safeguard your personal information and data.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/privacy",
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
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
