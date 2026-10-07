'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Cards from '@/components/odoo/apps/odoo-helpdesk/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-helpdesk/contact-us/contact-us';
import Exploreodoo from '@/components/odoo/apps/odoo-helpdesk/explore-odoo/explore-odoo';
import Hero from '@/components/odoo/apps/odoo-helpdesk/hero/hero';
import Offergreat from '@/components/odoo/apps/odoo-helpdesk/offer-great-customer/offer-great-customer';
import Whychoose from '@/components/odoo/apps/odoo-helpdesk/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero  />
      <Offergreat />
      <Exploreodoo />
      <Cards />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page