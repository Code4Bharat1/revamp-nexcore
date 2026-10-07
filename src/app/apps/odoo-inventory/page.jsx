'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Cards from '@/components/odoo/apps/odoo-inventory/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-inventory/contact-us/contact-us';
import Enhancedperformance from '@/components/odoo/apps/odoo-inventory/enhanced-performance/enhanced-performance';
import Futuristicfeatures from '@/components/odoo/apps/odoo-inventory/futuristic-features/futuristic-features';
import Hero from '@/components/odoo/apps/odoo-inventory/Hero/hero';
import Inventorymanagement from '@/components/odoo/apps/odoo-inventory/inventory-management/inventory-management';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Inventorymanagement />
      <Enhancedperformance />
      <Cards />
      <Futuristicfeatures />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page