'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Card from '@/components/odoo/apps/odoo-sales/card/card';
import ContactSection from '@/components/odoo/apps/odoo-sales/contact-us/contact-us';
import Hero from '@/components/odoo/apps/odoo-sales/hero/hero';
import Manage from '@/components/odoo/apps/odoo-sales/manage-customers/manage-customers';
import Takestep from '@/components/odoo/apps/odoo-sales/take-a-step/take-a-step';
import Whychoose from '@/components/odoo/apps/odoo-sales/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Manage />
      <Takestep />
      <Card />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page