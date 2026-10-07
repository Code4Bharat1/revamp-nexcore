'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Cards from '@/components/odoo/apps/odoo-e-mail-marketing/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-e-mail-marketing/contact-us/contact-us';
import Hero from '@/components/odoo/apps/odoo-e-mail-marketing/hero/hero';
import Launchmail from '@/components/odoo/apps/odoo-e-mail-marketing/launch-your-e-mail/launch-your-e-mail';
import Runpowerful from '@/components/odoo/apps/odoo-e-mail-marketing/run-powerful-e-mail/run-powerful-e-mail';
import Whychoose from '@/components/odoo/apps/odoo-e-mail-marketing/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Launchmail />
      <Runpowerful />
      <Cards />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page