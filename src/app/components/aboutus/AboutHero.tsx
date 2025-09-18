'use client';

import React from 'react';
import Image from 'next/image';
import LightBlueBackground from '../LightBlueBackground';
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
                We&apos;re More Than Just <span className="text-heading-secondary">Packaging Experts</span>
              </h1>
              
              <div className="space-y-4 text-body-large text-body-primary max-w-lg">
                <p>
                  At <span className="font-semibold text-[var(--color-teal-deep)]">Boxypack</span>, we believe that 
                  <span className="font-semibold text-[var(--color-teal-deep)]"> every product deserves packaging that tells its story</span> - 
                  packaging that protects, impresses, and creates lasting connections with your customers.
                </p>
                
                <p>
                  Founded with a passion for <span className="font-semibold text-[var(--color-turquoise-bright)]">innovation and sustainability</span>, 
                  we&apos;ve grown from a small team of packaging enthusiasts to industry leaders, helping thousands of brands 
                  create memorable unboxing experiences.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-h3 font-bold text-heading-secondary">10+</div>
                <div className="text-caption text-body-secondary">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-h3 font-bold text-heading-secondary">5K+</div>
                <div className="text-caption text-body-secondary">Happy Clients</div>
              </div>
              
              <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[var(--color-brown-golden)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-h3 font-bold text-heading-secondary">24hr</div>
                <div className="text-caption text-body-secondary">Quote Response</div>
              </div>
              
              <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[var(--color-brown-rustic)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-h3 font-bold text-heading-secondary">100%</div>
                <div className="text-caption text-body-secondary">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=700&fit=crop&crop=center&auto=format&q=80&bg=transparent"
                alt="Professional packaging team working on custom boxes"
                width={600}
                height={700}
                className="w-full h-auto object-contain relative z-20 rounded-2xl shadow-2xl"
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
