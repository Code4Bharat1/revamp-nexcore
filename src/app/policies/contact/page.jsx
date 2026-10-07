import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ContactUs from "@/components/policies/contact";
import React from "react";

export const metadata = {
  title: "Contact Policy – NEXCORE ALLIANCE LLP",
  description:
    "Find out how to contact NEXCORE ALLIANCE LLP for support, inquiries, or collaboration. Learn about our communication policy and how we handle your queries.",
  keywords: [
    "NEXCORE ALLIANCE LLP contact policy",
    "developer support India",
    "contact NEXCORE ALLIANCE LLP",
    "coding help India",
    "collaboration inquiries"
  ],
  openGraph: {
    title: "Contact Policy – NEXCORE ALLIANCE LLP",
    description:
      "Learn how to reach NEXCORE ALLIANCE LLP for inquiries, support, or collaboration opportunities.",
    url: "https://www.nexcorealliance.com/policies/contact",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact NEXCORE ALLIANCE LLP",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Policy – NEXCORE ALLIANCE LLP",
    description:
      "Reach out to NEXCORE ALLIANCE LLP for inquiries, support, and collaborations through our official contact policy.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/contact",
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
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
