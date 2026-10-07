'use client';

import React from 'react';
import Head from 'next/head';

import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-support/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-support/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-support/hero/hero';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-support/second-contact-us/second-contact-us';
import EcommerceSections from '@/components/odoo/servicesweoffer/odoo-support/training/training';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-support/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Support & Training Services – NEXCORE ALLIANCE LLP</title>
        <meta
          name="description"
          content="Get expert Odoo support and training services from NEXCORE ALLIANCE LLP. Enhance your team's skills and optimize your Odoo ERP system."
        />
        <meta
          name="keywords"
          content="Odoo support, Odoo training, Odoo ERP support, Odoo expert services, NEXCORE ALLIANCE LLP Odoo"
        />
        <meta property="og:title" content="Odoo Support & Training Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Get expert Odoo support and training services from NEXCORE ALLIANCE LLP. Enhance your team's skills and optimize your Odoo ERP system."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services/odoo-support" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nexcorealliance.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Support & Training Services – NEXCORE ALLIANCE LLP" />
        <meta
          name="twitter:description"
          content="Get expert Odoo support and training services from NEXCORE ALLIANCE LLP. Enhance your team's skills and optimize your Odoo ERP system."
        />
        <meta name="twitter:image" content="https://www.nexcorealliance.com/og-image.png" />
        <link rel="canonical" href="https://www.nexcorealliance.com/services/odoo-support" />
      </Head>

      <Navbar />
      <Hero />
      <EcommerceSections />
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
