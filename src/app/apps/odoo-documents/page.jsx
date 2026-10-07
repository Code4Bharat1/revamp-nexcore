'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Adoptpaperless from '@/components/odoo/apps/odoo-documents/adopt-a-paperless/adopt-a-paperless';
import Cards from '@/components/odoo/apps/odoo-documents/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-documents/contact-us/contact-us';
import Godigital from '@/components/odoo/apps/odoo-documents/go-digital/go-digital';
import Hero from '@/components/odoo/apps/odoo-documents/hero/hero';
import Whychoose from '@/components/odoo/apps/odoo-documents/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Godigital />
      <Adoptpaperless />
      <Cards />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page