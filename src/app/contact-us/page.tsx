import React from 'react';
import ContactHero from '../components/contactUs/ContactHero';
import ContactUs from '../components/contactUs/ContactUs';
import CTASection from '../components/product-design-page/CTASection';

export default function ContactUsPage() {
  return (
    <main>
      <ContactHero />
      <ContactUs />
      <CTASection 
        productData={{
          ctaTitle: "Get In Touch",
          ctaDescription: "Reach out today for quick answers. Our friendly team guides every step, making custom box orders simple and stress-free."
        }}
      />
    </main>
  );
}
