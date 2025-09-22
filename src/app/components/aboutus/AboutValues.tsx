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
import LightBlueBackground from '../../UI/LightBlueBackground';

const AboutValues: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "Boxes made with care, ensuring products stay safe and look polished.",
      color: "bg-[var(--color-turquoise-bright)]"
    },
    {
      icon: Zap,
      title: "Simplicity",
      description: "Our easy process makes custom orders quick, clear, and stress-free.",
      color: "bg-[var(--color-teal-deep)]"
    },
    {
      icon: Users,
      title: "Variety",
      description: "Choose from many styles designed to match your product perfectly.",
      color: "bg-[var(--color-brown-golden)]"
    },
    {
      icon: Lightbulb,
      title: "Design",
      description: "Creative design choices highlight branding, adding uniqueness to every product.",
      color: "bg-[var(--color-brown-rustic)]"
    },
    {
      icon: Heart,
      title: "Support",
      description: "Our helpful team guides you step by step with clear answers.",
      color: "bg-[var(--color-turquoise-bright)]"
    },
    {
      icon: Target,
      title: "Value",
      description: "Fair pricing paired with durability ensures your box investment lasts.",
      color: "bg-[var(--color-teal-deep)]"
    }
  ];

  const commitments = [
    "Smooth ordering from the first step to delivery",
    "Clear answers offered at every stage",
    "Designs that highlight your brand strongly",
    "Durable boxes built for lasting protection",
    "Packaging that leaves lasting customer impressions"
  ];

  return (
    <LightBlueBackground className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-heading-secondary mb-6">
            Strong Reasons To Choose BoxyPack
          </h2>
          <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
            BoxyPack stands out with packaging that goes beyond protection. Each service is designed with your brand in mind, offering value, care, and solutions that inspire customer trust.
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
                Focused On Your Growth
              </h3>
              <p className="text-body text-body-secondary mb-8">
                At BoxyPack, commitment means supporting your brand with solutions you trust. From design to delivery, our team ensures a smooth process. We promise reliability, creativity, and guidance, giving you a box that reflects care and strength. Your growth is our focus, and every order is handled with pride.
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
            <div 
              className="relative bg-gradient-to-br from-[var(--color-turquoise-bright)]/10 to-[var(--color-teal-deep)]/10 rounded-3xl p-12 text-center overflow-hidden"
              style={{
                backgroundImage: 'url(/img/mailer-box.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-white/80 rounded-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="w-24 h-24 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h4 className="text-h3 font-bold text-heading-secondary mb-4">
                    Our Promise
                  </h4>
                  <p className="text-body text-body-secondary leading-relaxed">
                    We promise to deliver boxes that protect products and highlight brands. Boxypack creates unboxing moments that customers enjoy, remember, and trust every single time.
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
              <Link 
                href="/#product-by-material"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default AboutValues;
