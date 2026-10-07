'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/odoo/apps/odoo-hr-management/hero/hero';
import HRManagement from '@/components/odoo/apps/odoo-hr-management/streamline/streamline';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HRManagement />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page