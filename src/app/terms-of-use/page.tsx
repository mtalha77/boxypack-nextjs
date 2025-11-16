import React from "react";
import TermsHero from "../components/terms/TermsHero";
import TermsContent from "../components/terms/TermsContent";
import CTASection from "../components/product-page/CTASection";

export default function TermsOfUsePage() {
  return (
    <main>
      <TermsHero />
      <TermsContent />
      <CTASection />
    </main>
  );
}
