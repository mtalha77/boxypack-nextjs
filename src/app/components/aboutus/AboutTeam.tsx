'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Award, Users, Clock, Star, CheckCircle } from 'lucide-react';

const AboutTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80&bg=transparent",
      bio: "Visionary leader with 15+ years in packaging innovation. Passionate about sustainable solutions.",
      linkedin: "#",
      email: "sarah@boxypack.com"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80&bg=transparent",
      bio: "Creative genius behind our most innovative designs. 12+ years of award-winning packaging design.",
      linkedin: "#",
      email: "michael@boxypack.com"
    },
    {
      name: "Emily Rodriguez",
      role: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80&bg=transparent",
      bio: "Environmental advocate leading our green initiatives. PhD in Environmental Science.",
      linkedin: "#",
      email: "emily@boxypack.com"
    },
    {
      name: "David Thompson",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80&bg=transparent",
      bio: "Operations expert ensuring quality and efficiency. 18+ years in manufacturing excellence.",
      linkedin: "#",
      email: "david@boxypack.com"
    },
    {
      name: "Lisa Park",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format&q=80&bg=transparent",
      bio: "Customer champion dedicated to ensuring every client's success. 10+ years in client relations.",
      linkedin: "#",
      email: "lisa@boxypack.com"
    },
    {
      name: "James Wilson",
      role: "Quality Assurance Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80&bg=transparent",
      bio: "Quality perfectionist ensuring every product meets our high standards. 14+ years in QA.",
      linkedin: "#",
      email: "james@boxypack.com"
    }
  ];

  const teamStats = [
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      color: "bg-[var(--color-turquoise-bright)]"
    },
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards",
      color: "bg-[var(--color-teal-deep)]"
    },
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      color: "bg-[var(--color-brown-golden)]"
    },
    {
      icon: Star,
      number: "98%",
      label: "Client Satisfaction",
      color: "bg-[var(--color-brown-rustic)]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-heading-secondary mb-6">
            Focused On Your Growth
          </h2>
          <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
            At BoxyPack, commitment means supporting your brand with solutions you trust. From design to delivery, our team ensures a smooth process. We promise reliability, creativity, and guidance, giving you a box that reflects care and strength. Your growth is our focus, and every order is handled with pride.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-h3 font-bold text-heading-secondary mb-2">{stat.number}</div>
              <div className="text-caption text-body-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Commitments List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            "Smooth ordering from the first step to delivery",
            "Clear answers offered at every stage", 
            "Designs that highlight your brand strongly",
            "Durable boxes built for lasting protection",
            "Packaging that leaves lasting customer impressions"
          ].map((commitment, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-body text-body-secondary leading-relaxed">
                  {commitment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Promise Section */}
        <div 
          className="relative bg-gradient-to-br from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-3xl p-12 overflow-hidden"
          style={{
            backgroundImage: 'url(/img/shipping-box-2.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/90 rounded-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-h3 text-heading-secondary mb-6">
              Our Promise
            </h3>
            <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
              We promise to deliver boxes that protect products and highlight brands. Boxypack creates unboxing moments that customers enjoy, remember, and trust every single time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
