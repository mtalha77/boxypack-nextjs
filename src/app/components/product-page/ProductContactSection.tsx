'use client';

import React from 'react';
import Link from 'next/link';

interface ContactChannel {
  label: string;
  value: string;
  type?: 'phone' | 'email' | 'link';
  href?: string;
}

interface ProductContactSectionProps {
  contactSection?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    channels: ContactChannel[];
    cta?: {
      label: string;
      href?: string;
    };
  };
}

const renderChannel = (channel: ContactChannel) => {
  const content = (
    <div className="space-y-1">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#0c6b76]">
        {channel.label}
      </p>
      <p className="text-lg text-[#0c2a30]">
        {channel.value}
      </p>
    </div>
  );

  if (channel.href) {
    return (
      <Link href={channel.href} className="block hover:bg-white/60 transition rounded-3xl p-6">
        {content}
      </Link>
    );
  }

  if (channel.type === 'phone') {
    return (
      <a href={`tel:${channel.value}`} className="block hover:bg-white/60 transition rounded-3xl p-6">
        {content}
      </a>
    );
  }

  if (channel.type === 'email') {
    return (
      <a href={`mailto:${channel.value}`} className="block hover:bg-white/60 transition rounded-3xl p-6">
        {content}
      </a>
    );
  }

  return <div className="rounded-3xl p-6 bg-white/40">{content}</div>;
};

const ProductContactSection: React.FC<ProductContactSectionProps> = ({ contactSection }) => {
  if (!contactSection || !contactSection.channels || contactSection.channels.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#f0f7fb] via-white to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full">
            {contactSection.eyebrow || 'Partner With Us'}
          </span>
          <h2 className="text-4xl md:text-[2.75rem] font-semibold leading-tight text-[#171717]">
            {contactSection.heading || 'Let’s Bring Your Packaging Vision to Life'}
          </h2>
          <p className="text-lg md:text-xl leading-8 text-[#2f2f2f] text-pretty">
            {contactSection.description || 'Connect with our packaging team to talk through materials, structural design, finishes, and timelines tailored to your launch.'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactSection.channels.map(channel => (
            <div key={channel.label} className="bg-white border border-[#d2e4eb] rounded-3xl shadow-sm hover:shadow-lg transition">
              {renderChannel(channel)}
            </div>
          ))}
        </div>

        {contactSection.cta && (
          <div className="mt-12 text-center">
            <Link
              href={contactSection.cta.href || '/contact-us'}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white font-semibold rounded-full transition"
            >
              {contactSection.cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductContactSection;
