import React from 'react';
import PrivacyHero from '../components/privacy/PrivacyHero';
import PrivacyContent from '../components/privacy/PrivacyContent';
import CTASection from '../components/product-design-page/CTASection';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
      <CTASection 
        productData={{
          ctaTitle: "Questions About Our Privacy Policy?",
          ctaDescription: "We're committed to protecting your privacy. If you have any questions or concerns, our team is here to help and provide clarity."
        }}
      />
    </main>
  );
}
