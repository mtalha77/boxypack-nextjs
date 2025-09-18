'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Leaf, 
  Users, 
  Award, 
  Zap, 
  Shield,
  Target,
  Lightbulb,
  Globe,
  CheckCircle
} from 'lucide-react';
import LightBlueBackground from '../LightBlueBackground';

const AboutValues: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Every decision we make is guided by what's best for our customers and their success.",
      color: "bg-[var(--color-turquoise-bright)]"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable packaging solutions.",
      color: "bg-[var(--color-teal-deep)]"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our partners.",
      color: "bg-[var(--color-brown-golden)]"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality standards in everything we do.",
      color: "bg-[var(--color-brown-rustic)]"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push boundaries and embrace new technologies and ideas.",
      color: "bg-[var(--color-turquoise-bright)]"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our customers can count on us for consistent, dependable service and quality.",
      color: "bg-[var(--color-teal-deep)]"
    }
  ];

  const commitments = [
    "100% satisfaction guarantee on all our products",
    "24-hour response time for all inquiries",
    "Sustainable and eco-friendly packaging options",
    "Custom design services for unique requirements",
    "Fast turnaround times without compromising quality",
    "Transparent pricing with no hidden fees"
  ];

  return (
    <LightBlueBackground className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-heading-secondary mb-6">
            Our Core Values & Commitments
          </h2>
          <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
            These values guide everything we do, from the way we work with our team to how we serve our customers. 
            They&apos;re not just words on a wall - they&apos;re the foundation of our company culture.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-h4 font-bold text-heading-secondary mb-4">
                {value.title}
              </h3>
              <p className="text-body text-body-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitments Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-h3 text-heading-secondary mb-6">
                Our Commitments to You
              </h3>
              <p className="text-body text-body-secondary mb-8">
                We don&apos;t just make promises - we make commitments. These are the standards we hold ourselves to 
                every single day, ensuring you get the best possible experience when working with Boxypack.
              </p>
            </div>

            {/* Commitment List */}
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-body text-body-secondary">{commitment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[var(--color-turquoise-bright)]/10 to-[var(--color-teal-deep)]/10 rounded-3xl p-12 text-center">
              <div className="space-y-8">
                <div className="w-24 h-24 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h4 className="text-h3 font-bold text-heading-secondary mb-4">
                    Our Promise
                  </h4>
                  <p className="text-body text-body-secondary leading-relaxed">
                    When you choose Boxypack, you&apos;re not just getting packaging - you&apos;re getting a partner 
                    committed to your success, your brand&apos;s growth, and the planet&apos;s future.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--color-brown-golden)]/20 rounded-full blur-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[var(--color-teal-deep)]/20 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
            <h3 className="text-h2 text-heading-secondary mb-4">
              Ready to Experience the Boxypack Difference?
            </h3>
            <p className="text-body-large text-body-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their packaging needs. 
              Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact-us#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brown-rustic)] hover:bg-[#97602f] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Get Free Quote
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white font-semibold rounded-full transition-all duration-300 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default AboutValues;
