import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";
import HeroSection from "./ContactSection/HeroSection";
import ContactForm from "./ContactCard/ContactForm";
import OfficeLocation from "./LocationSection/OfficeLocation";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7FAFF] text-[#060F28] flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ContactForm />
        <OfficeLocation />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
