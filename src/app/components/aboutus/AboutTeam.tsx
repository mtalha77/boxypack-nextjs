'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Award, Users, Clock, Star } from 'lucide-react';

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
            Meet the People Behind Boxypack
          </h2>
          <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
            Our diverse team of passionate professionals brings together decades of experience in packaging, 
            design, sustainability, and customer service. We&apos;re united by our shared commitment to excellence.
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

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Member Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center hover:bg-[var(--color-teal-deep)] transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center hover:bg-[var(--color-turquoise-bright)] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-h4 font-bold text-heading-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-[var(--color-turquoise-bright)] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-body text-body-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Section */}
        <div className="bg-gradient-to-br from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-h3 text-heading-secondary mb-6">
              Our Team Culture
            </h3>
            <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
              We believe that great products come from great people. Our culture is built on collaboration, 
              innovation, and mutual respect - creating an environment where everyone can thrive and contribute their best work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-h5 font-bold text-heading-secondary mb-4">Collaborative</h4>
              <p className="text-body text-body-secondary">
                We work together as one team, sharing knowledge and supporting each other&apos;s growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-h5 font-bold text-heading-secondary mb-4">Excellence-Driven</h4>
              <p className="text-body text-body-secondary">
                We&apos;re committed to delivering the highest quality in everything we do, from design to delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--color-brown-golden)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-h5 font-bold text-heading-secondary mb-4">Innovative</h4>
              <p className="text-body text-body-secondary">
                We encourage creative thinking and embrace new ideas that push the boundaries of packaging.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
