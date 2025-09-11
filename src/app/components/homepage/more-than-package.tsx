'use client';

import React from 'react';

const MoreThanPackage: React.FC = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Custom Packaging Image */}
          <div className="relative">
            {/* Light cream/beige background frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2]/10 -m-4"></div>
            
            {/* Main content area with image */}
            
              <div className="relative h-full w-auto">
                <img 
                  src="/img/product-box-2.webp" 
                  alt="Custom Packaging Boxes"
                  className="w-auto h-full object-cover shadow-2xl"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
             
            </div>
          </div>
          
          {/* Right Side - Text and Buttons */}
          <div className="space-y-8">
            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0c6b76] leading-tight">
              More than just a pretty package
            </h2>
            
            {/* Body Text */}
            <p className="text-lg text-gray-800 leading-relaxed">
              Customizable from the inside out, every custom printed box we create is made just for you – and with your customers in mind. Make a statement in the mail or on display with an unboxing experience unlike any other. Your products deserve custom packaging boxes crafted with sustainable materials, impeccable print quality, and picture-perfect design. Create packaging that wows no matter your use-case, business, or industry.
            </p>
            
            {/* Call-to-Action Button */}
            <div className="space-y-4">
              {/* Primary CTA Button */}
              <button className="w-full lg:w-auto font-semibold bg-gray-200 hover:bg-[#0c6b76] text-[#0c6b76] hover:text-white py-4 px-8 cursor-pointer rounded-lg transition-colors duration-300">
                FIND OUT WHAT MAKES OUR BOXES SPECIAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanPackage;
