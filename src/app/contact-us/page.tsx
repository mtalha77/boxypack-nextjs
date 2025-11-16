import React from "react";
import ContactHero from "../components/contactUs/ContactHero";
import ContactUs from "../components/contactUs/ContactUs";
import CTASection from "../components/product-page/CTASection";

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <ContactUs />
      <CTASection />
    </main>
  );
}
