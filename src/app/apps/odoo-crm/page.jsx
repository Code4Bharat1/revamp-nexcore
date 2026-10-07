'use client';
import Navbar from '@/components/layouts/navbar/Navbar';
import CRMComponent from '@/components/odoo/apps/odoo-crm/business-management/business-management';
import Hero from '@/components/odoo/apps/odoo-crm/hero/hero';
import React from 'react'
import EcommerceBenefits from '@/components/odoo/apps/odoo-crm/card/card';
import Redeeming from '@/components/odoo/apps/odoo-crm/redeeming-features/redeeming-features';
import ContactSection from '@/components/odoo/apps/odoo-crm/contact-us/contact-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import Footer from '@/components/layouts/footer/Footer';
import OdooCRM from '@/components/odoo/apps/odoo-crm/odoo-crm-software/odoo-crm-software';
import GeneralConfiguration from '@/components/odoo/apps/odoo-crm/why-oodu/why-oodu';

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CRMComponent />
      <OdooCRM />
      <EcommerceBenefits />
      <GeneralConfiguration />
      <Redeeming />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page