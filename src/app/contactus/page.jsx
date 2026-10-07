import Contact from "@/components/Contactus/Contact";
import React from "react";

export const metadata = {
  title: "Contact NEXCORE ALLIANCE LLP – Let's Connect & Build What's Next",
  description:
    "Get in touch with NEXCORE ALLIANCE LLP for enterprise software development, IT consulting, AI solutions, web development, and cloud services.",
  keywords: [
    "Contact NEXCORE ALLIANCE LLP",
    "enterprise software development",
    "IT consulting India",
    "web development inquiries",
    "custom software development",
    "Odoo ERP implementation",
    "AI solutions Mumbai",
  ],
  openGraph: {
    title: "Contact NEXCORE ALLIANCE LLP – Let's Connect & Build What's Next",
    description:
      "Reach out to NEXCORE ALLIANCE LLP for enterprise digital transformation, AI solutions, web development, and IT consulting.",
    url: "https://www.nexcorealliance.com/contactus",
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
    title: "Contact NEXCORE ALLIANCE LLP – Let's Connect & Build What's Next",
    description:
      "Have questions or want to collaborate? Contact NEXCORE ALLIANCE LLP today for enterprise digital solutions.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/contactus",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Contact />
    </div>
  );
};

export default Page;
