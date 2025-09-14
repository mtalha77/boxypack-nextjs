'use client';

import React from 'react';
import Image from 'next/image';

const ContactHero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{
      background: 'linear-gradient(135deg, rgba(12, 166, 194, 0.1) 0%, rgba(12, 166, 194, 0.08) 50%, rgba(12, 166, 194, 0.05) 100%)',
      backgroundColor: '#f8fafc' // fallback background
    }}>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              Ready to Think Outside the Box? <span className="text-teal-deep">Let&apos;s Get Started.</span>
        
              </h1>
              
              <div className="space-y-4 text-lg text-gray-700 max-w-lg">
                <p>
                  It&apos;s <span className="font-semibold text-[var(--color-teal-deep)]">simple</span>, 
                  <span className="font-semibold text-[var(--color-teal-deep)]"> speedy</span> and 
                  <span className="font-semibold text-[var(--color-teal-deep)]"> free</span> to request a quote from us - just let us know what you&apos;re looking for, and our experienced team will come back to you within 24 hours or less.
                </p>
                
                <p>
                  If you&apos;re not sure what packaging solution is best for your brand, or you need a little guidance, contact our 
                  <span className="font-semibold text-[var(--color-turquoise-bright)]"> packaging wizards</span> below - we&apos;re just a call or click away!
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-brown-rustic hover:bg-[#97602f] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                Get Free Quote
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] font-semibold rounded-full transition-colors duration-300 cursor-pointer">
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

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;
