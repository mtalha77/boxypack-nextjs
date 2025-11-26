'use client';

import React from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { ArrowDown, Sparkles } from 'lucide-react';
import LightBlueBackground from '../../UI/LightBlueBackground';

const ContactHero: React.FC = () => {
  return (
    <LightBlueBackground className="relative min-h-[70vh] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0c6b76]/15 to-[#0ca6c2]/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#97602F]/15 to-[#c47a3f]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#0c6b76]/5 to-[#97602F]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-0">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0c6b76]/10 to-[#0ca6c2]/10 rounded-full border border-[#0c6b76]/20">
                <Sparkles className="w-4 h-4 text-[#0c6b76]" />
                <span className="text-sm font-semibold text-[#0c6b76]">Let's Create Something Amazing</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
                <span className="text-[#97602F]">Ready For Your Custom Box Journey?</span>{' '}
                <span className="text-heading-secondary bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] bg-clip-text text-transparent">
                  Let&apos;s Get Started
                </span>
              </h1>
              
              <div className="space-y-4 text-lg text-body-primary max-w-2xl leading-relaxed">
                <p className="text-gray-700">
                  Reach out to Boxyack for all your custom box needs. Our team is ready to provide clear answers, helpful advice, and the right solutions for your brand.
                </p>
                
                <p className="text-gray-600">
                  Whether you are starting small or planning large runs, we make the process simple and smooth. We support you from first idea to final delivery.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contact-section"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#97602F] to-[#c47a3f] hover:from-[#7a4d25] hover:to-[#97602F] text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Quote
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
              
              <a 
                href="tel:1-800-725-9660"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0c6b76] text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer bg-white/50 backdrop-blur-sm"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-end items-center">
            {/* Premium packaging boxes showcase */}
            <div className="relative w-full max-w-lg">
              {/* Decorative background elements with animation */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#0c6b76]/25 to-[#0ca6c2]/25 rounded-full blur-3xl z-0 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-[#97602F]/25 to-[#c47a3f]/25 rounded-full blur-3xl z-0 animate-pulse delay-1000"></div>
              
              {/* Main image with enhanced shadow and border */}
              <div className="relative z-10 transform hover:scale-[1.02] transition-all duration-500 group">
                {/* Glowing effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0c6b76] via-[#0ca6c2] to-[#97602F] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c6b76]/20 to-[#0ca6c2]/20 rounded-3xl blur-xl opacity-50 -z-10"></div>
                
                {/* Image with border glow */}
                <div className="relative rounded-3xl p-2 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm border border-white/30 shadow-2xl">
                  <CldImage
                    src="Box-4_lztqi7"
                    alt="Custom Packaging Boxes - BoxyPack kraft boxes with professional design"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl relative z-10"
                    priority
                  />
                </div>
              </div>
              
              {/* Enhanced floating decorative boxes with better animations */}
              <div className="absolute -top-6 -left-6 w-28 h-28 z-20 opacity-90 animate-bounce-slow">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0c6b76]/20 to-[#0ca6c2]/20 rounded-xl blur-md"></div>
                  <CldImage
                    src="Magnetic-Closure-Rigid-Box-2_qinyd2"
                    alt="Custom box"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain rounded-xl shadow-xl relative z-10"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 z-20 opacity-85 animate-bounce-slow delay-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#97602F]/20 to-[#c47a3f]/20 rounded-xl blur-md"></div>
                  <CldImage
                    src="Rigid-Sleeve-Box_zjauff"
                    alt="Custom box"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain rounded-xl shadow-xl relative z-10"
                  />
                </div>
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/2 -right-12 w-16 h-16 border-4 border-[#0c6b76]/20 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/4 -left-12 w-12 h-12 border-4 border-[#97602F]/20 rounded-full animate-spin-slow-reverse"></div>
            </div>
          </div>
        </div>
      </div>     
    </LightBlueBackground>
  );
};

export default ContactHero;
