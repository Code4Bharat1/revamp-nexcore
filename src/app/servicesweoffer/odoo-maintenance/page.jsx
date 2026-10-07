'use client';

import React from 'react';
import Head from 'next/head';

import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-maintenance/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-maintenance/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-maintenance/hero/hero';
import OdooModuleConfiguration from '@/components/odoo/servicesweoffer/odoo-maintenance/maintenance-services/maintenance-services';
import Services from '@/components/odoo/servicesweoffer/odoo-maintenance/preventive-maintenance-services/preventive-maintenance-services';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-maintenance/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-maintenance/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Maintenance Services – NEXCORE ALLIANCE LLP</title>
        <meta
          name="description"
          content="Keep your Odoo ERP running smoothly with NEXCORE ALLIANCE LLP’s comprehensive Odoo Maintenance Services. Preventive maintenance and support tailored to your business."
        />
        <meta
          name="keywords"
          content="Odoo maintenance, Odoo preventive maintenance, ERP support services, NEXCORE ALLIANCE LLP Odoo maintenance, Odoo module configuration"
        />
        <meta property="og:title" content="Odoo Maintenance Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Keep your Odoo ERP running smoothly with NEXCORE ALLIANCE LLP’s comprehensive Odoo Maintenance Services. Preventive maintenance and support tailored to your business."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services/odoo-maintenance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nexcorealliance.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Maintenance Services – NEXCORE ALLIANCE LLP" />
        <meta
          name="twitter:description"
          content="Keep your Odoo ERP running smoothly with NEXCORE ALLIANCE LLP’s comprehensive Odoo Maintenance Services. Preventive maintenance and support tailored to your business."
        />
        <meta name="twitter:image" content="https://www.nexcorealliance.com/og-image.png" />
        <link rel="canonical" href="https://www.nexcorealliance.com/services/odoo-maintenance" />
      </Head>

      <Navbar />
      <Hero />
      <OdooModuleConfiguration />
      <Services />
      <ContactSection />
      <EcommerceBenefits />
      <WhyChooseUs />
      <SecondcontactSection />
      <FooterLinks />
      <Footer />
    </>
  );
}

export default Page;
