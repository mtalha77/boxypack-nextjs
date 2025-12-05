import React from "react";
import { Metadata } from "next";
import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacyContent from "../components/privacy/PrivacyContent";
import CTASection from "../components/product-page/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy | Secure Custom Packaging Services",
  description: "Boxy Pack protects your data while offering fast, premium custom packaging and a secure online ordering experience. Review Our Policy Today.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
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
