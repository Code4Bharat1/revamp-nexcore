'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Cards from '@/components/odoo/apps/odoo-marketing-automation/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-marketing-automation/contact-us/contact-us';
import Herosection from '@/components/odoo/apps/odoo-marketing-automation/hero/hero';
import Mechanizeworkflows from '@/components/odoo/apps/odoo-marketing-automation/mechanize-workflows/mechanize-workflows';
import Targetedmarketing from '@/components/odoo/apps/odoo-marketing-automation/targeted-marketing/targeted-marketing';
import Whyodoo from '@/components/odoo/apps/odoo-marketing-automation/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Targetedmarketing />
      <Mechanizeworkflows />  
      <Cards />
      <Whyodoo />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page