'use client';

import React from 'react';
import Head from 'next/head';

import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import Card from '@/components/odoo/servicesweoffer/odoo-development-services/cards/cards';
import Hero from '@/components/odoo/servicesweoffer/odoo-development-services/hero/hero';
import OdooDevelopmentKeyPoints from '@/components/odoo/servicesweoffer/odoo-development-services/key-points/key-points';
import OdooAchievements from '@/components/odoo/servicesweoffer/odoo-development-services/odoo-achievements/odoo-achievements';
import OdooDevelopment from '@/components/odoo/servicesweoffer/odoo-development-services/odoo-development/odoo-development';
import WhyodooImplementers from '@/components/odoo/servicesweoffer/odoo-development-services/why-oodu/why-oodu';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function Page() {
  return (
    <>
      <Head>
        <title>Odoo Development Services – NEXCORE ALLIANCE LLP</title>
        <meta
          name="description"
          content="Get robust, scalable, and tailored Odoo development services from NEXCORE ALLIANCE LLP. We help you build, integrate, and optimize Odoo apps for your business."
        />
        <meta
          name="keywords"
          content="Odoo development, Odoo ERP development India, custom Odoo modules, Odoo app development, NEXCORE ALLIANCE LLP Odoo services"
        />
        <meta property="og:title" content="Odoo Development Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Explore professional Odoo development services from NEXCORE ALLIANCE LLP. We develop custom modules, integrate features, and deliver complete ERP solutions."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services/odoo-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nexcorealliance.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Development Services – NEXCORE ALLIANCE LLP" />
        <meta
          name="twitter:description"
          content="Custom Odoo app development and integration services tailored to your business needs by NEXCORE ALLIANCE LLP."
        />
        <meta name="twitter:image" content="https://www.nexcorealliance.com/og-image.png" />
        <link rel="canonical" href="https://www.nexcorealliance.com/services/odoo-development" />
      </Head>

      <Navbar />
      <Hero />
      <OdooDevelopment />
      <Card />
      <OdooDevelopmentKeyPoints />
      <WhyodooImplementers />
      <OdooAchievements />
      <FooterLinks />
      <Footer />
    </>
  );
}

export default Page;
