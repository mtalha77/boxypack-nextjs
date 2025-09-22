'use client';

import React from 'react';
import Image from 'next/image';
import LightBlueBackground from '../../UI/LightBlueBackground';

const ContactHero: React.FC = () => {
  return (
    <LightBlueBackground className="relative min-h-[80vh] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-6">
              <h1 className="text-h1 leading-tight">
              Ready For Your Custom Box Journey? <span className="text-heading-secondary">Let&apos;s Get Started</span>
              </h1>
              
              <div className="space-y-4 text-body-large text-body-primary max-w-lg">
                <p>
                  Reach out to Boxyack for all your custom box needs. Our team is ready to provide clear answers, helpful advice, and the right solutions for your brand. Whether you are starting small or planning large runs, we make the process simple and smooth.
                </p>
                
                <p>
                  We also assist with pricing inquiries, placing orders, and addressing questions, supporting you from first idea to final delivery.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-brown-rustic hover:bg-[#97602f] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                Get Free Quote
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white font-semibold rounded-full transition-colors duration-300 cursor-pointer">
                Call Us: 1-800-725-9660
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center items-center">
            {/* Professional woman image with integrated background elements */}
            <div className="relative w-full">
              <Image
                src="/img/contact-us-banner.png"
                alt="Professional woman with crossed arms smiling"
                width={500}
                height={700}
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

export default ContactHero;
