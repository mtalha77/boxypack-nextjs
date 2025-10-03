'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';
import { Target, Lightbulb, Globe, Shield, Heart, Award, Users, Clock } from 'lucide-react';

const AboutStory: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <div className="w-16 h-16 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-h3 font-bold text-heading-secondary mb-2">10+</div>
            <div className="text-caption text-body-secondary">Years Experience</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <div className="w-16 h-16 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-h3 font-bold text-heading-secondary mb-2">5K+</div>
            <div className="text-caption text-body-secondary">Happy Clients</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <div className="w-16 h-16 bg-[var(--color-brown-golden)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-h3 font-bold text-heading-secondary mb-2">24hr</div>
            <div className="text-caption text-body-secondary">Quote Response</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <div className="w-16 h-16 bg-[var(--color-brown-rustic)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-h3 font-bold text-heading-secondary mb-2">100%</div>
            <div className="text-caption text-body-secondary">Satisfaction</div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Mission */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h2 text-heading-secondary mb-6">
                Our Mission
              </h2>
              <p className="text-body-large text-body-secondary">
                Our mission is clear. We create boxes that support every business, big or small. We believe boxes should protect products, build trust, and connect with customers. Every design choice we provide strengthens your brand identity and ensures your products stand out with pride and clarity in every order.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Box Solutions</h4>
                  <p className="text-gray-600">Boxes created with care to support brand growth.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Customer Care</h4>
                  <p className="text-gray-600">Every order is guided with advice and clear support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <CldImage
              src="Box-4_lztqi7"
              alt="BoxyPack mission - custom boxes that support every business with quality and care"
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
            <CldImage
              src="product-box-2"
              alt="BoxyPack vision - innovative packaging solutions that inspire and create lasting customer experiences"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Right Content - Vision */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h2 text-heading-secondary mb-6">
                Our Vision
              </h2>
              <p className="text-body-large text-body-secondary mb-6">
                We see a future where every product is delivered in packaging that inspires. BoxyPack aims to make boxes more than containers by turning them into tools for growth. Our vision blends creativity, clarity, and care to shape packaging that protects products while leaving lasting experiences that customers value.
              </p>
            </div>

            {/* Vision Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-brown-golden)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Creative Growth</h4>
                  <p className="text-gray-600">We aim to design packaging that helps businesses grow stronger.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-brown-rustic)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading-secondary text-h5 mb-2">Global Reach</h4>
                  <p className="text-gray-600">Our goal is to serve brands across many markets.</p>
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
