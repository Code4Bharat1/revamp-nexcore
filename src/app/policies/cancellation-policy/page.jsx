import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import CancellationPolicy from "@/components/policies/cancellationpolicy";
import React from "react";

export const metadata = {
  title: "Cancellation Policy – NEXCORE ALLIANCE LLP",
  description:
    "Review NEXCORE ALLIANCE LLP’s cancellation policy. Learn about course cancellations, refund eligibility, and the process for withdrawing from services.",
  keywords: [
    "NEXCORE ALLIANCE LLP cancellation policy",
    "course cancellation India",
    "refund eligibility",
    "cancel enrollment",
    "NEXCORE ALLIANCE LLP services"
  ],
  openGraph: {
    title: "Cancellation Policy – NEXCORE ALLIANCE LLP",
    description:
      "Understand NEXCORE ALLIANCE LLP’s cancellation policy including refund eligibility and course withdrawal terms.",
    url: "https://www.nexcorealliance.com/policies/cancellationpolicy",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Cancellation Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation Policy – NEXCORE ALLIANCE LLP",
    description:
      "Check NEXCORE ALLIANCE LLP’s cancellation and refund policies for course enrollments and services.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/cancellationpolicy",
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
        <CancellationPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
