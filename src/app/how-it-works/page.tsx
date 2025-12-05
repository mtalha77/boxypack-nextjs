import React from "react";
import { Metadata } from "next";
import HowItWorksHero from "../components/HowItWorks/HeroSection";
import ProgressSteps from "../components/HowItWorks/ProgressSteps";
import CTASection from "../components/product-page/CTASection";

export const metadata: Metadata = {
  title: "How Custom Packaging Works | Easy Order & Fast Delivery",
  description: "Discover how Boxy Pack delivers high-quality custom packaging with quick turnaround and free shipping through a simple, seamless process. Get Started Today.",
};

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
