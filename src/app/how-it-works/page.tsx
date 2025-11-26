import React from "react";
import HowItWorksHero from "../components/HowItWorks/HeroSection";
import ProgressSteps from "../components/HowItWorks/ProgressSteps";
import CTASection from "../components/product-page/CTASection";

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorksHero />
      <ProgressSteps />
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
