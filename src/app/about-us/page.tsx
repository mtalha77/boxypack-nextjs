import React from "react";
import AboutHero from "../components/aboutus/AboutHero";
import AboutStory from "../components/aboutus/AboutStory";
import AboutTeam from "../components/aboutus/AboutTeam";
import AboutValues from "../components/aboutus/AboutValues";
import CTASection from "../components/product-page/CTASection";

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      {/* <AboutTeam /> */}
      <CTASection />
    </main>
  );
}
