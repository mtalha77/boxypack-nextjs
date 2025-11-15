import React from 'react';
import PrivacyHero from '../components/privacy/PrivacyHero';
import PrivacyContent from '../components/privacy/PrivacyContent';
import CTASection from '../components/product-design-page/CTASection';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
      <CTASection />
    </main>
  );
}
