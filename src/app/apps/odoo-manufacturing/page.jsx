'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import ContactSection from '@/components/odoo/apps/odoo-manufacturing/contact-us/contact-us';
import Expertsolutions from '@/components/odoo/apps/odoo-manufacturing/expert-solutions/expert-solutions';
import Hero from '@/components/odoo/apps/odoo-manufacturing/hero/hero';
import Highlightsofodoo from '@/components/odoo/apps/odoo-manufacturing/highlights-of-odoo/highlights-of-odoo';
import Manufacturing from '@/components/odoo/apps/odoo-manufacturing/manufacturing-reinvented/manufacturing-reinvented';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Manufacturing />
      <Expertsolutions />
      <Highlightsofodoo />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page