'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import CarouselSection from '@/components/odoo/apps/odoo-e-commerce/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-e-commerce/contact-us/contact-us';
import Designbrand from '@/components/odoo/apps/odoo-e-commerce/design-your-brand/design-your-brand';
import Hero from '@/components/odoo/apps/odoo-e-commerce/hero/hero';
import Highlights from '@/components/odoo/apps/odoo-e-commerce/highlights-of-odoo/highlights-of-odoo';
import Readymade from '@/components/odoo/apps/odoo-e-commerce/readymade-templates/readymade-templates';
import Whyodoo from '@/components/odoo/apps/odoo-e-commerce/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Designbrand />
      <Readymade />
      <CarouselSection />
      <Highlights />
      <Whyodoo />
      <ContactSection  />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page