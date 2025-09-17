'use client';

import React from 'react';
import Image from 'next/image';
import LightBlueBackground from '../LightBlueBackground';

const MoreThanPackage: React.FC = () => {
  return (
    <LightBlueBackground>
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Custom Packaging Image */}
          <div className="relative">
            {/* Light cream/beige background frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2]/10 -m-4"></div>
            
            {/* Main content area with image */}
            
              <div className="relative h-full w-auto">
                <Image 
                  src="/img/products-box-img.png" 
                  alt="Custom Packaging Boxes"
                  width={600}
                  height={400}
                  className="w-auto h-full object-cover shadow-2xl"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
             
            </div>
          </div>
          
          {/* Right Side - Text and Buttons */}
          <div className="space-y-8">
            {/* Headline */}
            <h2 className="text-h2 text-heading-primary leading-tight">
              More than just a pretty package
            </h2>
            
            {/* Body Text */}
            <p className="text-body text-body-primary">
              Customizable from the inside out, every custom printed box we create is made just for you – and with your customers in mind. Make a statement in the mail or on display with an unboxing experience unlike any other. Your products deserve custom packaging boxes crafted with sustainable materials, impeccable print quality, and picture-perfect design. Create packaging that wows no matter your use-case, business, or industry.
            </p>
            
            {/* Call-to-Action Button */}
            <div className="space-y-4">
              {/* Primary CTA Button */}
              <button className="w-full lg:w-auto font-semibold bg-brown-rustic hover:bg-[#97602f] text-white py-4 px-8 cursor-pointer rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                FIND OUT WHAT MAKES OUR BOXES SPECIAL
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
    </LightBlueBackground>
  );
};

export default MoreThanPackage;
