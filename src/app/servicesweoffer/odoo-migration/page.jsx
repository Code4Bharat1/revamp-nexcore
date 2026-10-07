'use client';

import React from 'react';
import Head from 'next/head';

import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-migration/card/card';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-migration/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-migration/hero/hero';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-migration/odoo-implementers/odoo-implementers';
import EcommerceSections from '@/components/odoo/servicesweoffer/odoo-migration/seamless/seamless';
import SecondcontactSection from '@/components/odoo/servicesweoffer/odoo-migration/second-contact-us/second-contact-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Migration Services – NEXCORE ALLIANCE LLP</title>
        <meta
          name="description"
          content="Seamlessly migrate your Odoo ERP with expert services from NEXCORE ALLIANCE LLP. Ensure smooth transitions and zero downtime."
        />
        <meta
          name="keywords"
          content="Odoo migration, ERP migration, Odoo upgrade, seamless Odoo migration, NEXCORE ALLIANCE LLP Odoo services"
        />
        <meta property="og:title" content="Odoo Migration Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Seamlessly migrate your Odoo ERP with expert services from NEXCORE ALLIANCE LLP. Ensure smooth transitions and zero downtime."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services/odoo-migration" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nexcorealliance.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Migration Services – NEXCORE ALLIANCE LLP" />
        <meta
          name="twitter:description"
          content="Seamlessly migrate your Odoo ERP with expert services from NEXCORE ALLIANCE LLP. Ensure smooth transitions and zero downtime."
        />
        <meta name="twitter:image" content="https://www.nexcorealliance.com/og-image.png" />
        <link rel="canonical" href="https://www.nexcorealliance.com/services/odoo-migration" />
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
