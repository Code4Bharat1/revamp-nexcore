import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ProductPricing from "@/components/policies/productpricing";
import React from "react";

export const metadata = {
  title: "Product Pricing Policy – NEXCORE ALLIANCE LLP",
  description:
    "Read NEXCORE ALLIANCE LLP’s Product Pricing Policy. Learn how we set transparent and fair pricing for our coding tutorials, developer tools, and web development resources.",
  keywords: [
    "NEXCORE ALLIANCE LLP pricing policy",
    "product pricing transparency",
    "developer tools pricing",
    "coding tutorials cost",
    "web development resources pricing"
  ],
  openGraph: {
    title: "Product Pricing Policy – NEXCORE ALLIANCE LLP",
    description:
      "Understand NEXCORE ALLIANCE LLP’s approach to transparent pricing for coding tutorials, developer tools, and resources.",
    url: "https://www.nexcorealliance.com/policies/productpricing",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Product Pricing Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Pricing Policy – NEXCORE ALLIANCE LLP",
    description:
      "Review NEXCORE ALLIANCE LLP’s Product Pricing Policy to learn how we ensure fair and transparent pricing for developers in India.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/policies/productpricing",
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
        <ProductPricing />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
