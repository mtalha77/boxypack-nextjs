'use client';

import React from 'react';
import Image from 'next/image';
import LightBlueBackground from '../../UI/LightBlueBackground';

const HowItWorksHero: React.FC = () => {
  return (
    <LightBlueBackground className="relative min-h-[60vh] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-h1 leading-tight">
                How BoxyPack Turns Ideas Into <span className="text-heading-secondary">Custom Box Solutions</span>
              </h1>
              
              <div className="space-y-3 text-body-large text-body-primary">
                <p>
                  BoxyPack creating custom boxes is simple. We guide you with clear steps that combine 
                  <span className="font-semibold text-[var(--color-teal-deep)]"> creativity, choice, and reliable support</span>.
                </p>
                
                <p>
                  Our process helps every brand move smoothly from concept to completion. The result is packaging that 
                  <span className="font-semibold text-[var(--color-turquoise-bright)]"> protects products and strengthens identity</span>.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-brown-rustic hover:bg-[#97602f] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                Get Free Quote
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white font-semibold rounded-full transition-colors duration-300 cursor-pointer">
                View Our Process
              </button>
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
              <Image
                src="/img/how-it-works-img.png"
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
