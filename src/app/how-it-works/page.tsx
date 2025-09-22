import React from 'react';
import HowItWorksHero from '../components/HowItWorks/HeroSection';
import ProgressSteps from '../components/HowItWorks/ProgressSteps';
import CTASection from '../components/product-design-page/CTASection';

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorksHero />
      <ProgressSteps />
      <CTASection 
        productData={{
          ctaTitle: "Ready to Build Your Custom Box Journey?",
          ctaDescription: "Now that you know how it works, let's get started! Our team is ready to guide you through every step of creating your perfect packaging."
        }}
      />
    </main>
  );
}
