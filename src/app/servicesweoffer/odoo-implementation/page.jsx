'use client';

import React from 'react';
import Head from 'next/head';

import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-implementation/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-implementation/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-implementation/hero/hero';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-implementation/implementation-software/implementation-software';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-implementation/second-contact-us/second-contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-implementation/why-choose-us/why-choose-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Implementation Services – NEXCORE ALLIANCE LLP</title>
        <meta
          name="description"
          content="Professional Odoo Implementation services from NEXCORE ALLIANCE LLP. Streamline your business operations with our expert Odoo software implementation."
        />
        <meta
          name="keywords"
          content="Odoo implementation, Odoo ERP setup, Odoo software implementation, NEXCORE ALLIANCE LLP Odoo services"
        />
        <meta property="og:title" content="Odoo Implementation Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Professional Odoo Implementation services from NEXCORE ALLIANCE LLP. Streamline your business operations with our expert Odoo software implementation."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services/odoo-implementation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nexcorealliance.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Implementation Services – NEXCORE ALLIANCE LLP" />
        <meta
          name="twitter:description"
          content="Professional Odoo Implementation services from NEXCORE ALLIANCE LLP. Streamline your business operations with our expert Odoo software implementation."
        />
        <meta name="twitter:image" content="https://www.nexcorealliance.com/og-image.png" />
        <link rel="canonical" href="https://www.nexcorealliance.com/services/odoo-implementation" />
      </Head>

      <Navbar />
      <Hero />
      <EcommerceSection />
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
