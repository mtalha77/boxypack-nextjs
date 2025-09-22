'use client';

import React from 'react';
import Image from 'next/image';
import LightBlueBackground from '../../UI/LightBlueBackground';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <LightBlueBackground className="relative min-h-[80vh] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-6">
              <h1 className="text-h1 leading-tight">
                Boxes Built To <span className="text-heading-secondary">Grow Your Brand</span>
              </h1>
              
              <div className="space-y-4 text-body-large text-body-primary max-w-lg">
                <p>
                  <span className="font-semibold text-[var(--color-teal-deep)]">BoxyPack</span> is where box and packaging meet passion. We make boxes that protect, present, and promote your products. Select a box by material or industry type, set quantity, and design with colors. Our instant quotes bring clarity while our finishing choices add uniqueness.
                </p>
                
                <p>
                  Every box is made to match your brand needs and create lasting impressions that customers remember.
                </p>
              </div>
            </div>

            {/* Design Made Simple Section */}
            <div className="mt-8 p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/20">
              <h3 className="text-h4 font-bold text-heading-secondary mb-3">
                Design Made Simple For Everyone
              </h3>
              <p className="text-body text-body-secondary">
                Choose your box type, select quantity, and start designing. Add colors or text, then view instant pricing. BoxyPack makes custom packaging simple, creative, and easy.
              </p>
            </div>

          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative w-full h-full max-h-[600px]">
              <Image
                src="/img/Product-Packaging-Boxes.webp"
                alt="Custom packaging boxes that build brands - BoxyPack product showcase"
                width={600}
                height={600}
                className="w-full h-full object-cover relative z-20 rounded-2xl shadow-2xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-turquoise-bright)]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-teal-deep)]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

    </LightBlueBackground>
  );
};

export default AboutHero;
