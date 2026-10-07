import Home from "@/components/home/Home";

export const metadata = {
  title:
    "NEXCORE ALLIANCE LLP | AI Solutions, Web & App Development, MVPs & Odoo Customization",
  description:
    "NEXCORE ALLIANCE LLP builds scalable AI solutions, custom web and mobile apps, startup MVPs, and Odoo ERP customizations. We help businesses accelerate digital transformation with automation and innovative technology.",
  keywords: [
    "NEXCORE ALLIANCE LLP",
    "AI solutions company Mumbai",
    "AI development services",
    "AI automation company India",
    "custom AI development",
    "web development company Mumbai",
    "mobile app development Mumbai",
    "MVP development for startups",
    "Odoo customization India",
    "Odoo ERP developers",
    "custom software development",
    "digital transformation services",
    "business automation solutions",
    "enterprise app development",
    "full-stack development company",
    "React and Next.js development",
    "Node.js development services",
    "AI-powered app development",
    "AI consulting services",
    "cloud-based AI solutions",
    "ecommerce development Mumbai",
    "UI/UX design services",
    "technology consulting",
    "IT consulting Mumbai",
    "software development company Mumbai",
    "AI integration services India",
  ],
  openGraph: {
    title:
      "NEXCORE ALLIANCE LLP | AI Solutions, Web & App Development, MVPs & Odoo Customization",
    description:
      "NEXCORE ALLIANCE LLP delivers scalable AI solutions, custom app development, MVP builds, Odoo customization, and smart automation services for businesses.",
    url: "https://www.nexcorealliance.com",
    type: "website",
    images: [
      {
        url: "https://www.nexcorealliance.com/nex.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP - AI & App Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXCORE ALLIANCE LLP | AI, Web & Mobile App Development in Mumbai",
    description:
      "We provide AI solutions, web & mobile app development, Odoo customization, and automation services for startups and enterprises.",
    images: ["https://www.nexcorealliance.com/nex.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.nexcorealliance.com/",
  },
};

export default function Page() {
  return (
    // ✅ FIXED: removed h-screen (was clipping page content on mobile)
    // and w-screen (caused horizontal overflow on some browsers).
    // overflow-x-hidden stays to prevent horizontal scrollbar from
    // absolutely-positioned decorative elements.
    <div className="w-full overflow-x-hidden">
      <Home />
    </div>
  );
}