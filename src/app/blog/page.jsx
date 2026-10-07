import React from "react";
import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "Tech Blogs, AI Tutorials & Enterprise Software Insights | NEXCORE ALLIANCE",
  description:
    "Explore the latest insights on enterprise AI development, modern web engineering, Odoo ERP customization, and cloud architecture from the engineering team at NEXCORE ALLIANCE.",
  keywords: [
    "Nexcore Alliance blog",
    "AI software tutorials",
    "web development insights",
    "Odoo ERP guides",
    "cloud computing articles",
    "technology blog Mumbai",
  ],
  alternates: {
    canonical: "https://www.nexcorealliance.com/blog",
  },
  openGraph: {
    title: "Tech Blogs, AI Tutorials & Enterprise Software Insights | NEXCORE ALLIANCE",
    description:
      "Explore modern web development, AI architectures, and real-world tech tutorials to accelerate your digital growth.",
    url: "https://www.nexcorealliance.com/blog",
    siteName: "NEXCORE ALLIANCE LLP",
    type: "website",
    images: [
      {
        url: "https://www.nexcorealliance.com/nex.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE Tech Blogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blogs, AI Tutorials & Enterprise Software Insights | NEXCORE ALLIANCE",
    description:
      "Explore modern web development, AI architectures, and tech tutorials from NEXCORE ALLIANCE.",
    images: ["https://www.nexcorealliance.com/nex.png"],
  },
};

export default function BlogPage() {
  return <BlogListClient />;
}
