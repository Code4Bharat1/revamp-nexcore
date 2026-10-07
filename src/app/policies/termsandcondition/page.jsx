import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import TermsAndConditions from "@/components/policies/TermsAndConditions";
import React from "react";

export const metadata = {
  title: "Terms and Conditions – NEXCORE ALLIANCE LLP",
  description:
    "Review the terms and conditions for using NEXCORE ALLIANCE LLP’s services, courses, and website.",
  keywords: [
    "NEXCORE ALLIANCE LLP terms and conditions",
    "website usage terms",
    "course terms",
    "service agreement NEXCORE ALLIANCE LLP",
  ],
  openGraph: {
    title: "Terms and Conditions – NEXCORE ALLIANCE LLP",
    description:
      "Understand NEXCORE ALLIANCE LLP’s terms and conditions for using our platform and services.",
    url: "https://www.nexcorealliance.com/policies/terms-and-conditions",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Terms and Conditions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions – NEXCORE ALLIANCE LLP",
    description:
      "Read NEXCORE ALLIANCE LLP’s terms and conditions for using our services and courses.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TermsAndConditionsPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage; // Ensure the export matches the component name
