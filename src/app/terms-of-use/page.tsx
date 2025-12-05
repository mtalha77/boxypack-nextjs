import React from "react";
import { Metadata } from "next";
import TermsHero from "../components/terms/TermsHero";
import TermsContent from "../components/terms/TermsContent";
import CTASection from "../components/product-page/CTASection";

export const metadata: Metadata = {
  title: "Terms of Use | Custom Packaging Services & Policies",
  description: "Review Boxy Pack's terms for using our custom packaging services, ensuring a smooth, secure, and trusted ordering experience. View Terms Today.",
};

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
