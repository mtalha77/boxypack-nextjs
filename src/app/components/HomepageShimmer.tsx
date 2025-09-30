'use client';

import React from 'react';
import ShimmerLoader from './ShimmerLoader';

const HomepageShimmer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Shimmer */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <ShimmerLoader height="40px" width="150px" className="rounded" />
            <div className="hidden md:flex items-center space-x-8">
              <ShimmerLoader height="20px" width="80px" className="rounded" />
              <ShimmerLoader height="20px" width="100px" className="rounded" />
              <ShimmerLoader height="20px" width="60px" className="rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Shimmer */}
      <section className="relative h-[80vh] bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
            {/* Left Content Shimmer */}
            <div className="space-y-6">
              <ShimmerLoader height="80px" width="90%" className="rounded-lg" />
              <ShimmerLoader height="32px" width="70%" className="rounded" />
              <div className="flex flex-col sm:flex-row gap-4">
                <ShimmerLoader height="56px" width="200px" className="rounded-full" />
                <ShimmerLoader height="56px" width="150px" className="rounded-full" />
              </div>
              <div className="flex flex-wrap gap-6">
                <ShimmerLoader height="20px" width="120px" className="rounded" />
                <ShimmerLoader height="20px" width="100px" className="rounded" />
                <ShimmerLoader height="20px" width="80px" className="rounded" />
              </div>
            </div>
            
            {/* Right Video Shimmer */}
            <div className="flex justify-center">
              <ShimmerLoader height="400px" width="100%" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Dimensions Form Shimmer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <ShimmerLoader height="48px" width="60%" className="rounded-lg mx-auto mb-4" />
            <ShimmerLoader height="24px" width="80%" className="rounded mx-auto" />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <ShimmerLoader height="20px" width="60%" className="rounded" />
                  <ShimmerLoader height="50px" width="100%" className="rounded-lg" />
                </div>
              ))}
            </div>
            <ShimmerLoader height="56px" width="200px" className="rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Content Sections Shimmer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <ShimmerLoader height="48px" width="50%" className="rounded-lg mx-auto mb-4" />
            <ShimmerLoader height="24px" width="70%" className="rounded mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <ShimmerLoader height="200px" className="rounded-lg" />
                <div className="space-y-2">
                  <ShimmerLoader height="20px" width="80%" className="rounded" />
                  <ShimmerLoader height="16px" width="60%" className="rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More sections shimmer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ShimmerLoader height="400px" className="rounded-lg" />
            <div className="space-y-6">
              <ShimmerLoader height="48px" width="80%" className="rounded-lg" />
              <ShimmerLoader height="24px" width="100%" className="rounded" />
              <ShimmerLoader height="24px" width="90%" className="rounded" />
              <ShimmerLoader height="24px" width="85%" className="rounded" />
              <div className="flex space-x-4">
                <ShimmerLoader height="50px" width="150px" className="rounded-full" />
                <ShimmerLoader height="50px" width="120px" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Shimmer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <ShimmerLoader height="48px" width="40%" className="rounded-lg mx-auto mb-4" />
          </div>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6">
                <ShimmerLoader height="24px" width="80%" className="rounded mb-3" />
                <ShimmerLoader height="20px" width="100%" className="rounded" />
                <ShimmerLoader height="20px" width="90%" className="rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Shimmer */}
      <section className="py-16 bg-[#0c6b76]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShimmerLoader height="48px" width="60%" className="rounded-lg mx-auto mb-4 bg-white/20" />
          <ShimmerLoader height="24px" width="80%" className="rounded mx-auto mb-8 bg-white/20" />
          <ShimmerLoader height="56px" width="200px" className="rounded-full mx-auto bg-white/20" />
        </div>
      </section>
    </div>
  );
};

export default HomepageShimmer;
