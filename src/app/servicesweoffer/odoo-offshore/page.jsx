'use client';

import React from 'react';
import Head from 'next/head';

import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import EcommerceSection from '@/components/odoo/servicesweoffer/odoo-offshore/business-outsourcing/business-outsourcing';
import EcommerceBenefits from '@/components/odoo/servicesweoffer/odoo-offshore/cards/cards';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-offshore/contact-us/contact-us';
import Hero from '@/components/odoo/servicesweoffer/odoo-offshore/Hero/hero';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-offshore/oodu-implementers/oodu-implementers';
import ContactSectionsecond from '@/components/odoo/servicesweoffer/odoo-offshore/second-contact-us/second-contact-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Offshore Development Services – NEXCORE ALLIANCE LLP</title>
        <meta
          name="description"
          content="Partner with NEXCORE ALLIANCE LLP for reliable Odoo offshore development services. Scale your business efficiently with expert remote Odoo developers."
        />
        <meta
          name="keywords"
          content="Odoo offshore development, offshore Odoo developers, remote Odoo services, Odoo outsourcing India, NEXCORE ALLIANCE LLP Odoo offshore"
        />
        <meta property="og:title" content="Odoo Offshore Development Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Partner with NEXCORE ALLIANCE LLP for reliable Odoo offshore development services. Scale your business efficiently with expert remote Odoo developers."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services/odoo-offshore" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nexcorealliance.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Offshore Development Services – NEXCORE ALLIANCE LLP" />
        <meta
          name="twitter:description"
          content="Partner with NEXCORE ALLIANCE LLP for reliable Odoo offshore development services. Scale your business efficiently with expert remote Odoo developers."
        />
        <meta name="twitter:image" content="https://www.nexcorealliance.com/og-image.png" />
        <link rel="canonical" href="https://www.nexcorealliance.com/services/odoo-offshore" />
      </Head>

      <Navbar />
      <Hero />
      <EcommerceSection />
      <ContactSection />
      <EcommerceBenefits />
      <WhyChooseUs />
      <ContactSectionsecond />
      <FooterLinks />
      <Footer />
    </>
  );
}

export default Page;
