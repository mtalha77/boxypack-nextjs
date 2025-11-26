import React from "react";
import TermsHero from "../components/terms/TermsHero";
import TermsContent from "../components/terms/TermsContent";
import CTASection from "../components/product-page/CTASection";

export default function TermsOfUsePage() {
  return (
    <main>
      <TermsHero />
      <TermsContent />
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
