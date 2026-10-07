'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Card from '@/components/odoo/apps/odoo-purchase/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-purchase/contact-us/contact-us';
import Createpersonal from '@/components/odoo/apps/odoo-purchase/create-personal-branding/create-personal-branding';
import Hero from '@/components/odoo/apps/odoo-purchase/hero/hero';
import Managesuppliers from '@/components/odoo/apps/odoo-purchase/manage-suppliers/manage-suppliers';
import Whychoose from '@/components/odoo/apps/odoo-purchase/why-choose/why-choose';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Managesuppliers />
      <Createpersonal />
      <Card  />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page