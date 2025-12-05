import React from "react";
import { Metadata } from "next";
import ContactHero from "../components/contactUs/ContactHero";
import ContactUs from "../components/contactUs/ContactUs";
import CTASection from "../components/product-page/CTASection";

export const metadata: Metadata = {
  title: "Contact Us for Custom Packaging Help | Fast Support",
  description: "Connect with Boxy Pack for custom packaging quotes, expert guidance, and fast order support. Enjoy premium printing and free shipping. Contact Today.",
};

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
