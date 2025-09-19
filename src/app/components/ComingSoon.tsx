'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Clock, ArrowRight } from 'lucide-react';

const ComingSoon: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    // Temporarily disabled - don't show coming soon for now
    setShowComingSoon(false);
  }, []);

  if (!showComingSoon) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-12 max-w-2xl w-full text-center shadow-2xl">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-teal-deep)] mb-2">
            Boxypack
          </h1>
          <div className="w-24 h-1 bg-[var(--color-turquoise-bright)] mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Message */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-[var(--color-turquoise-bright)]/10 text-[var(--color-turquoise-bright)] px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Coming Soon
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We&apos;re Building Something Amazing
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Boxypack is currently under development. We&apos;re working hard to bring you 
            the best packaging solutions. Stay tuned for our launch!
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-4">
            For any queries or to learn more about our upcoming services:
          </p>
          
          <a 
            href="mailto:info@boxypack.com"
            className="inline-flex items-center justify-center bg-[var(--color-teal-deep)] hover:bg-[var(--color-turquoise-bright)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us: info@boxypack.com
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-turquoise-bright)] rounded-full mr-2"></div>
            Custom Packaging
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-teal-deep)] rounded-full mr-2"></div>
            Eco-Friendly Solutions
          </div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-brown-golden)] rounded-full mr-2"></div>
            Premium Quality
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
