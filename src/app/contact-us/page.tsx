import React from "react";
import ContactHero from "../components/contactUs/ContactHero";
import ContactUs from "../components/contactUs/ContactUs";
import CTASection from "../components/product-page/CTASection";

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <ContactUs />
      <CTASection 
        productData={{
          cta: {
            title: "Exceptional Design That Leaves a Lasting Impression",
            description: "Get a custom quote for your premium boxes today. Experience the difference that luxury packaging makes."
          }
        }}
      />
    </main>
  );
}
