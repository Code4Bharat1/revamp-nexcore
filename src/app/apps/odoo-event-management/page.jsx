'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Cards from '@/components/odoo/apps/odoo-event-management/cards/cads';
import ContactSection from '@/components/odoo/apps/odoo-event-management/contact-us/contact-us';
import Endtoend from '@/components/odoo/apps/odoo-event-management/end-to-end/end-to-end';
import Hero from '@/components/odoo/apps/odoo-event-management/hero/hero';
import Hostsuccessful from '@/components/odoo/apps/odoo-event-management/host-successful/host-successful';
import Leverage from '@/components/odoo/apps/odoo-event-management/leverage-odoo/leverage-odoo';
import Whychoose from '@/components/odoo/apps/odoo-event-management/why-odoo/why-oodu';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hostsuccessful />
      <Endtoend />
      <Leverage />
      <Cards />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page