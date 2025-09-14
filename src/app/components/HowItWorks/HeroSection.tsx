'use client';

import React from 'react';
import Image from 'next/image';
import LightBlueBackground from '../LightBlueBackground';

const HowItWorksHero: React.FC = () => {
  return (
    <LightBlueBackground className="relative min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-h1 leading-tight">
                How Boxy Pack Brings Your <span className="text-heading-secondary">Packaging Design Ideas</span> to Life
              </h1>
              
              <div className="space-y-4 text-body-large text-body-primary max-w-lg">
                <p>
                  Peek behind the curtain to see how we transform your custom packaging concept into a 
                  <span className="font-semibold text-[var(--color-teal-deep)]"> powerhouse piece</span> that 
                  <span className="font-semibold text-[var(--color-teal-deep)]"> skyrockets your brand</span>.
                </p>
                
                <p>
                  From initial concept to final delivery, our 
                  <span className="font-semibold text-[var(--color-turquoise-bright)]"> packaging wizards</span> work 
                  tirelessly to bring your vision to life with precision and creativity.
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
          <div className="relative flex justify-center items-center">
            {/* Circular Design Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border-8 border-brown-rustic/20 rounded-full flex items-center justify-center">
                <div className="w-80 h-80 border-4 border-brown-rustic/30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-brown-rustic/40 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Main Image */}
            <div className="relative w-full z-10">
              <Image
                src="/img/products-box-img.png"
                alt="Packaging design process illustration"
                width={500}
                height={500}
                className="w-full h-auto object-contain relative z-20"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </LightBlueBackground>
  );
};

export default HowItWorksHero;
