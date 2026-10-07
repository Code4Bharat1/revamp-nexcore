'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Bestodoo from '@/components/odoo/apps/odoo-point-of-sale/best-odoo-pos/best-odoo-pos';
import Cards from '@/components/odoo/apps/odoo-point-of-sale/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-point-of-sale/contact-us/contact-us';
import Handypoint from '@/components/odoo/apps/odoo-point-of-sale/handy-point/handy-point';
import Hero from '@/components/odoo/apps/odoo-point-of-sale/hero/hero';
import Whyodoo from '@/components/odoo/apps/odoo-point-of-sale/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Handypoint />
      <Bestodoo />
      <Cards />
      <Whyodoo />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page