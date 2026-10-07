import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import PrivacyAndSecurity from "@/components/policies/Privacy";
import React from "react";

export const metadata = {
  title: "Privacy and Security – NEXCORE ALLIANCE LLP",
  description:
    "Learn about NEXCORE ALLIANCE LLP's privacy and security policies to understand how we handle your data and ensure your privacy while using our services.",
  keywords: [
    "NEXCORE ALLIANCE LLP privacy policy",
    "privacy and security",
    "data protection",
    "user privacy NEXCORE ALLIANCE LLP",
  ],
  openGraph: {
    title: "Privacy and Security – NEXCORE ALLIANCE LLP",
    description:
      "Review NEXCORE ALLIANCE LLP’s privacy and security policies, and learn how we protect your personal information.",
    url: "https://www.nexcorealliance.com/privacyandsecurity",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Privacy and Security",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy and Security – NEXCORE ALLIANCE LLP",
    description:
      "Understand NEXCORE ALLIANCE LLP’s approach to protecting your privacy and securing your data on our platform.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/privacyandsecurity",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyAndSecurityPage = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <PrivacyAndSecurity />
      <Footer />
    </div>
  );
};

export default PrivacyAndSecurityPage;
