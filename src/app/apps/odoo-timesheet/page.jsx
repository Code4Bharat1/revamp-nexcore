'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Card from '@/components/odoo/apps/odoo-timesheet/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-timesheet/contact-us/contact-us';
import Hero from '@/components/odoo/apps/odoo-timesheet/hero/hero';
import Improveproductivity from '@/components/odoo/apps/odoo-timesheet/improve-productivity/improve-productivity';
import Manage from '@/components/odoo/apps/odoo-timesheet/manage-day-to-day/manage-day-to-day';
import Whyodoo from '@/components/odoo/apps/odoo-timesheet/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Improveproductivity />
      <Manage />
      <Card />
      <Whyodoo />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page