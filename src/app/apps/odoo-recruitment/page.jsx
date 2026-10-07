'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Customise from '@/components/odoo/apps/odoo-recruitment/customise/customise';
import Evaluatechannels from '@/components/odoo/apps/odoo-recruitment/evaluate-channels/evaluate-channels';
import Experiencesimple from '@/components/odoo/apps/odoo-recruitment/experience-simple/experience-simple';
import Hero from '@/components/odoo/apps/odoo-recruitment/Hero/hero';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experiencesimple />
      <Evaluatechannels />
      <Customise />
      <FooterLinks />
      <Footer />
    </div>
  )
}

export default page