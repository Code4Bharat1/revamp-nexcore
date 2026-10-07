'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Card from '@/components/odoo/apps/odoo-accounting/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-accounting/contact-us/contact-us';
import Domore from '@/components/odoo/apps/odoo-accounting/do-more/do-more';
import Hero from '@/components/odoo/apps/odoo-accounting/hero/hero';
import Highpoints from '@/components/odoo/apps/odoo-accounting/high-points/high-points';
import Smartodoo from '@/components/odoo/apps/odoo-accounting/smart-odoo/smart-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Domore />
      <Smartodoo />
      <Card />
      <Highpoints />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page