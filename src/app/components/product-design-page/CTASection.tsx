"use client";

import React from "react";
import { Download } from "lucide-react";

interface CTASectionProps {
  productData: {
    ctaTitle: string;
    ctaDescription: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({ productData }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {productData.ctaTitle}
        </h2>
        <p className="text-xl text-white/90 mb-8">
          {productData.ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brown-rustic hover:bg-[#97602f] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
            Request Quote
          </button>
          <button className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-[#0c6b76] px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center">
            <Download className="w-5 h-5 mr-2" />
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
