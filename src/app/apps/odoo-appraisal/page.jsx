'use client';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/odoo/apps/odoo-appraisal/Hero/hero';
import Reviewemployees from '@/components/odoo/apps/odoo-appraisal/review-employees/review-employees';
import Followup from '@/components/odoo/apps/odoo-appraisal/follow-up-effortlessly/follow-up-effortlessly';
import React from 'react'
import Automateassessment from '@/components/odoo/apps/odoo-appraisal/automate-the-assessment/automate-the-assessment';
import EcommerceBenefits from '@/components/odoo/apps/odoo-appraisal/cards/cards';
import Whyodoo from '@/components/odoo/apps/odoo-appraisal/why-odoo/why-odoo';
import ContactSection from '@/components/odoo/apps/odoo-appraisal/contact-us/contact-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import Footer from '@/components/layouts/footer/Footer';

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reviewemployees />
      <Followup />
      <Automateassessment />
      <EcommerceBenefits />
      <Whyodoo />
      <ContactSection />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page