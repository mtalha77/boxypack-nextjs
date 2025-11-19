"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Phone } from "lucide-react";

const HomepageCTASection: React.FC = () => {
  const router = useRouter();

  const handleContactUs = () => {
    // Navigate to contact us page and scroll to contact section
    router.push("/contact-us#contact-section");
  };

  const handleCallUs = () => {
    // Open phone dialer
    window.location.href = "tel:+1-800-725-9660";
  };

  return (
    <section className="py-24 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-white tracking-tight">
            Start Your Packaging Journey Today
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl leading-8 text-white/90 max-w-2xl mx-auto">
            Lets turn your product into something unforgettable. Our team is here to design, print, and deliver boxes that fit your brand perfectly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleContactUs}
              className="group bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer flex items-center justify-center"
            >
              Contact Us
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      </div>
    </section>
  );
};

export default HomepageCTASection;

