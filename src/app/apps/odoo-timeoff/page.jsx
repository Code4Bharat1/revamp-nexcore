'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/odoo/apps/odoo-timeoff/Hero/hero';
import Manage from '@/components/odoo/apps/odoo-timeoff/manage-leaves/manage-leaves';
import Workplace from '@/components/odoo/apps/odoo-timeoff/workplace-management/workplace-management';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Manage />
      <Workplace />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page