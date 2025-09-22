import React from 'react';
import TermsHero from '../components/terms/TermsHero';
import TermsContent from '../components/terms/TermsContent';
import CTASection from '../components/product-design-page/CTASection';

export default function TermsOfUsePage() {
  return (
    <main>
      <TermsHero />
      <TermsContent />
      <CTASection 
        productData={{
          ctaTitle: "Ready to Get Started?",
          ctaDescription: "Now that you understand our terms, let's create amazing packaging together. Our team is ready to help you every step of the way."
        }}
      />
    </main>
  );
}
