import Head from 'next/head';

import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import Hero from '@/components/odoo/servicesweoffer/odoo-consulting/hero/hero';
import StrategicConsulting from '@/components/odoo/servicesweoffer/odoo-consulting/strategic-consulting/strategic-consulting';
import Services from '@/components/odoo/servicesweoffer/odoo-consulting/our-service/service';
import ContactSection from '@/components/odoo/servicesweoffer/odoo-consulting/contact-us/contact-us';
import WhyChooseUs from '@/components/odoo/servicesweoffer/odoo-consulting/why-choose/why-choose';
import SecondContactSection from '@/components/odoo/servicesweoffer/odoo-consulting/second-contact-us/second-contact-us';
import FooterLinks from '@/components/odoo/servicesweoffer/usefullinks/links';

function OdooConsultingPage() {
  return (
    <>
      <Head>
        <title>Odoo Consulting Services – NEXCORE ALLIANCE LLP</title>
        <meta
          name="description"
          content="Explore NEXCORE ALLIANCE LLP’s strategic Odoo consulting services to streamline your business processes and maximize ROI."
        />
        <meta
          name="keywords"
          content="Odoo consulting, ERP consulting India, NEXCORE ALLIANCE LLP Odoo services, Odoo expert consultation, Odoo strategy implementation"
        />

        <meta property="og:title" content="Odoo Consulting Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Discover expert-led Odoo consulting tailored for businesses looking to scale with strategic ERP implementation."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services/odoo-consulting" />
        <meta property="og:image" content="https://www.nexcorealliance.com/og-image.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Odoo Consulting Services – NEXCORE ALLIANCE LLP" />
        <meta
          name="twitter:description"
          content="Get the most out of Odoo with NEXCORE ALLIANCE LLP’s consulting services. ERP strategy, customization, and support."
        />
        <meta name="twitter:image" content="https://www.nexcorealliance.com/og-image.png" />

        <link rel="canonical" href="https://www.nexcorealliance.com/services/odoo-consulting" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar />
      <Hero />
      <StrategicConsulting />
      <Services />
      <ContactSection />
      <WhyChooseUs />
      <SecondContactSection />
      <FooterLinks />
      <Footer />
    </>
  );
}

export default OdooConsultingPage;
