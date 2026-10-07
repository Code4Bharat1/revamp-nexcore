
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-configuration/contact-us-second/contact-us-second';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-configuration/contact-us/contact-us';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-configuration/erp-module/erp-module';
import GeneralConfiguration from '@/components/odoo/servicesweoffer/odoo-configuration/general-configuration/general-configuration';
import Hero from '@/components/odoo/servicesweoffer/odoo-configuration/hero/hero';
import Services from '@/components/odoo/servicesweoffer/odoo-configuration/our-service/our-service';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react';

export const metadata = {
  title: "Odoo Services – NEXCORE ALLIANCE LLP",
  description: "Explore the range of Odoo services we offer, from ERP modules to general configurations and contact support.",
  keywords: [
    "Odoo ERP services",
    "Odoo configuration",
    "ERP solutions",
    "Odoo customization",
    "Odoo support",
    "Odoo India",
  ],
  openGraph: {
    title: "Odoo Services – NEXCORE ALLIANCE LLP",
    description: "Discover our specialized Odoo services and solutions, designed to optimize your business processes.",
    url: "https://www.nexcorealliance.com/services/odoo",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/og-image.png",  // Make sure to use the appropriate image for the page
        width: 1200,
        height: 630,
        alt: "Odoo Services NEXCORE ALLIANCE LLP",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo Services – NEXCORE ALLIANCE LLP",
    description: "Optimize your business with our professional Odoo services, from configuration to support.",
    images: ["https://www.nexcorealliance.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/services/odoo",  // Make sure the URL is correct
  },
  robots: {
    index: true,
    follow: true,
  },
};

const OdooServicesPage = () => {
  return (
    <div className="odoo-services-page">
      <Navbar />
      <Hero />
      <EcommerceSection />
      <Services />
      <ContactSection />
      <GeneralConfiguration />
      <SecondcontactSection />
      <FooterLinks />
      <Footer />
    </div>
  );
};

export default OdooServicesPage;
