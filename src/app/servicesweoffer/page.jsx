import dynamic from 'next/dynamic';
import Navbar from '@/components/layouts/navbar/Navbar';
import Hero from '@/components/odoo/servicesweoffer/hero/hero';
import LazySection from '@/components/home/LazySection';
import React from 'react';

const Services = dynamic(() => import('@/components/odoo/servicesweoffer/services/services'));
const FooterLinks = dynamic(() => import('@/components/odoo/servicesweoffer/usefullinks/links'));
const Footer = dynamic(() => import('@/components/layouts/footer/Footer'));

export const metadata = {
  title: 'Odoo Services – NEXCORE ALLIANCE LLP',
  description:
    'Explore comprehensive Odoo services by NEXCORE ALLIANCE LLP including implementation, customization, support, and more.',
  keywords: [
    'Odoo services',
    'Odoo implementation',
    'Odoo customization',
    'Odoo support',
    'ERP services India',
    'NEXCORE ALLIANCE LLP Odoo',
  ],
  openGraph: {
    title: 'Odoo Services – NEXCORE ALLIANCE LLP',
    description:
      'Get expert Odoo services tailored for your business needs by NEXCORE ALLIANCE LLP.',
    url: 'https://www.nexcorealliance.com/servicesweoffer',
    siteName: 'NEXCORE ALLIANCE LLP',
    images: [
      {
        url: 'https://www.nexcorealliance.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Odoo Services by NEXCORE ALLIANCE LLP',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odoo Services – NEXCORE ALLIANCE LLP',
    description:
      'Explore comprehensive Odoo services by NEXCORE ALLIANCE LLP including implementation, customization, and support.',
    images: ['https://www.nexcorealliance.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.nexcorealliance.com/servicesweoffer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LazySection id="services-grid" minHeight={600}>
        <Services />
      </LazySection>
      <LazySection id="useful-links" minHeight={300}>
        <FooterLinks />
      </LazySection>
      <LazySection id="footer" minHeight={300}>
        <Footer />
      </LazySection>
    </div>
  );
}

export default App;
