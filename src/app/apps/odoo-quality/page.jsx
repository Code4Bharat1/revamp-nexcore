'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import ContactSection from '@/components/odoo/apps/odoo-quality/contact-us/contact-us';
import Featuresofodoo from '@/components/odoo/apps/odoo-quality/features-of-odoo/features-of-odoo.';
import Hero from '@/components/odoo/apps/odoo-quality/hero/hero';
import Quality from '@/components/odoo/apps/odoo-quality/odoo-quality/odoo-quality';
import Whychoose from '@/components/odoo/apps/odoo-quality/why-choose-odoo/why-choose-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Quality />
      <Featuresofodoo />
      <Whychoose />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page