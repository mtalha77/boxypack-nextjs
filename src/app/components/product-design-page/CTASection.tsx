"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Phone } from "lucide-react";

interface CTASectionProps {
  productData: {
    ctaTitle: string;
    ctaDescription: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({ productData }) => {
  const router = useRouter();

  // Handle Request Quote button click
  const handleRequestQuote = () => {
    // Navigate to contact us page and scroll to contact section
    router.push('/contact-us#contact-section');
  };

  // Handle Call Us button click
  const handleCallUs = () => {
    // Open phone dialer
    window.location.href = 'tel:+1-800-725-9660';
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-h2 text-white mb-6">
          {productData.ctaTitle}
        </h2>
        <p className="text-body-large text-white/90 mb-8">
          {productData.ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleRequestQuote}
            className="bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
          >
            Request Quote
          </button>
          <button 
            onClick={handleCallUs}
            className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-[#0c6b76] px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
