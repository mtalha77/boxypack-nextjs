'use client';

import React from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import LightBlueBackground from '../../UI/LightBlueBackground';

const HowItWorksHero: React.FC = () => {
  return (
    <LightBlueBackground className="relative overflow-hidden !py-4 md:!py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-3 md:space-y-4">
            <div className="space-y-2 md:space-y-3 text-body-large text-body-primary">
              <h2 className="text-h2 text-heading-secondary">
                Simple Steps. Perfect Packaging. Every Time.
              </h2>
              
              <p>
                From first idea to final delivery, BoxyPack makes packaging simple. Clear steps, real support, and flawless results every time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link 
                href="/contact-us#contact-section"
                className="inline-flex items-center justify-center px-8 py-4 bg-brown-rustic hover:bg-[#97602f] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Get Free Quote
              </Link>
              
              <a 
                href="#our-process"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white font-semibold rounded-full transition-colors duration-300 cursor-pointer"
              >
                View Our Process
              </a>
            </div>
          </div>

          {/* Right Content - Image with Circular Design Element */}
          <div className="relative flex justify-end items-center">
            {/* Circular Design Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border-8 border-brown-rustic/20 rounded-full flex items-center justify-center">
                <div className="w-80 h-80 border-4 border-brown-rustic/30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-brown-rustic/40 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Main Image */}
            <div className="relative w-full max-w-lg z-10">
              <CldImage
                src="how-it-works-img_i6hojx"
                alt="BoxyPack process illustration - shipping box with checklist showing completed steps"
                width={300}
                height={300}
                className="w-full h-auto object-contain relative z-20"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </LightBlueBackground>
  );
};

export default HowItWorksHero;
