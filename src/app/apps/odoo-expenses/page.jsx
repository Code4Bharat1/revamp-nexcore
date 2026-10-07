'use client';
import Footer from '@/components/layouts/footer/Footer';
import Navbar from '@/components/layouts/navbar/Navbar';
import Cards from '@/components/odoo/apps/odoo-expenses/cards/cards';
import ContactSection from '@/components/odoo/apps/odoo-expenses/contact-us/contact-us';
import Hero from '@/components/odoo/apps/odoo-expenses/hero/hero';
import Spendtime from '@/components/odoo/apps/odoo-expenses/spend-time/spend-time';
import Trackcontrol from '@/components/odoo/apps/odoo-expenses/track-&-control/track-&-control';
import Whyodoo from '@/components/odoo/apps/odoo-expenses/why-odoo/why-odoo';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';
import React from 'react'

function page() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Trackcontrol />
    <Spendtime />
    <Cards />
    <Whyodoo />
    <ContactSection />
    <FooterLinks />
    <Footer />
    </div>
  )
}

export default page