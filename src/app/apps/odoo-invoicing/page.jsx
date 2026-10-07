'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import CarouselSection from '@/components/odoo/apps/odoo-invoicing/card/card';
import ContactSection from '@/components/odoo/apps/odoo-invoicing/contact-us/contact-us';
import Personal from '@/components/odoo/apps/odoo-invoicing/create-personal/create-personal';
import Hero from '@/components/odoo/apps/odoo-invoicing/hero/hero';
import Makingsmart from '@/components/odoo/apps/odoo-invoicing/making-smartware/making-smartware';
import QuotesSection from '@/components/odoo/apps/odoo-invoicing/creating-quotes/creating-quotes';
import Whyget from '@/components/odoo/apps/odoo-invoicing/why-get-odoo/why-get-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';


import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Makingsmart />
      <Personal />
      <QuotesSection />
      <CarouselSection />
      <Whyget />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page