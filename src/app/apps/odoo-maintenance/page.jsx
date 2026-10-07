'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Automate from '@/components/odoo/apps/odoo-maintenance/automate-and-organize/automate-and-organize';
import Hero from '@/components/odoo/apps/odoo-maintenance/hero/hero';
import Salientfeatures from '@/components/odoo/apps/odoo-maintenance/salient-features/salient-features';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Automate />
      <Salientfeatures />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page