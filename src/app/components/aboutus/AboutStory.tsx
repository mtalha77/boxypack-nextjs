'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Lightbulb, Globe, Shield } from 'lucide-react';

const AboutStory: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-heading-secondary mb-6">
            Our Story: From Vision to Reality
          </h2>
          <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
            What started as a simple idea to revolutionize packaging has grown into a company that&apos;s 
            transforming how brands connect with their customers through thoughtful, sustainable packaging solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Mission */}
          <div className="space-y-8">
            <div>
              <h3 className="text-h3 text-heading-secondary mb-6">
                Our Mission
              </h3>
              <p className="text-body text-body-secondary mb-6">
                To empower every brand, from startups to enterprise, with packaging solutions that not only 
                protect their products but also amplify their brand story and create unforgettable customer experiences.
              </p>
              <p className="text-body text-body-secondary">
                We believe that great packaging is the first touchpoint between your brand and your customer - 
                and we&apos;re here to make that moment count.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Precision & Quality</h4>
                  <p className="text-gray-600">Every box is crafted with meticulous attention to detail and uncompromising quality standards.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Innovation First</h4>
                  <p className="text-gray-600">We continuously push boundaries with cutting-edge materials and design techniques.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop&crop=center&auto=format&q=80&bg=transparent"
              alt="Modern packaging facility with quality control"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Vision & Values Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop&crop=center&auto=format&q=80&bg=transparent"
              alt="Sustainable packaging materials and eco-friendly solutions"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Right Content - Vision */}
          <div className="space-y-8">
            <div>
              <h3 className="text-h3 text-heading-secondary mb-6">
                Our Vision
              </h3>
              <p className="text-body text-body-secondary mb-6">
                To be the global leader in sustainable packaging solutions, setting the standard for 
                environmental responsibility while delivering exceptional quality and design innovation.
              </p>
              <p className="text-body text-body-secondary">
                We envision a future where every package tells a story of sustainability, quality, 
                and thoughtful design - creating a positive impact on both businesses and the planet.
              </p>
            </div>

            {/* Vision Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-brown-golden)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Global Impact</h4>
                  <p className="text-gray-600">Expanding our reach worldwide while maintaining our commitment to local communities and sustainability.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-brown-rustic)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Environmental Stewardship</h4>
                  <p className="text-gray-600">Leading the industry in sustainable practices and eco-friendly packaging solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
