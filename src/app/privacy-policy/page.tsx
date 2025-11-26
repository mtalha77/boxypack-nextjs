import React from "react";
import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacyContent from "../components/privacy/PrivacyContent";
import CTASection from "../components/product-page/CTASection";

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
