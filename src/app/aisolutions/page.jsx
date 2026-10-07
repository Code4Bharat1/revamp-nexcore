import dynamic from "next/dynamic";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import Hero from "@/app/components/Hero";


const AISolutions = dynamic(() => import("@/components/Aisolutions/Aisolutions"));

export const metadata = {
  title: "Next-Gen AI Solutions, Computer Vision & Automation | NEXCORE ALLIANCE LLP",
  description:
    "Accelerate business intelligence with NEXCORE ALLIANCE LLP's custom AI development, machine learning, computer vision, OCR, and smart automation pipelines.",
  keywords: [
    "AI solutions Mumbai",
    "custom machine learning",
    "computer vision services",
    "AI automation",
    "OCR intelligent document processing",
    "Nexcore Alliance AI",
  ],
  openGraph: {
    title: "Next-Gen AI Solutions, Computer Vision & Automation | NEXCORE ALLIANCE LLP",
    description:
      "Accelerate business intelligence with custom AI development, machine learning, and smart automation.",
    url: "https://www.nexcorealliance.com/aisolutions",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/nex.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP AI Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next-Gen AI Solutions, Computer Vision & Automation | NEXCORE ALLIANCE LLP",
    description:
      "Custom AI development, machine learning, and smart automation pipelines.",
    images: ["https://www.nexcorealliance.com/nex.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/aisolutions",
  },
};

const Page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />  
      {/* Hero section with background visual */}
      <Hero />
      {/* Full AI Solutions page content */}
      <AISolutions />
      <Footer />
    </div>
  );
};

export default Page;