'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/odoo/apps/odoo-plm/hero/hero';
import Transformproduct from '@/components/odoo/apps/odoo-plm/transform-your-product/transform-your-product';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Transformproduct />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page