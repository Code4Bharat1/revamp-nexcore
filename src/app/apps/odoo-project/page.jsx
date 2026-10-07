'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Opensource from '@/components/odoo/apps/odoo-project/an-open-source/an-open-source';
import Cards from '@/components/odoo/apps/odoo-project/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-project/contact-us/contact-us';
import Estimatebusiness from '@/components/odoo/apps/odoo-project/estimate-your-business/estimate-your-business';
import Hero from '@/components/odoo/apps/odoo-project/hero/hero';
import Whychoose from '@/components/odoo/apps/odoo-project/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Opensource />
      <Estimatebusiness />
      <Cards />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page