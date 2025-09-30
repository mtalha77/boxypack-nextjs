'use client';

import React from 'react';

interface ShimmerLoaderProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

const ShimmerLoader: React.FC<ShimmerLoaderProps> = ({ 
  className = '', 
  width = '100%', 
  height = '20px',
  rounded = false 
}) => {
  return (
    <div 
      className={`shimmer-loader ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
      style={{ width, height }}
    >
      <style jsx>{`
        .shimmer-loader {
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-loader::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          animation: shimmer-slide 2s infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes shimmer-slide {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

// Predefined shimmer components for common use cases
export const HomepageShimmerLoader = () => (
  <div className="space-y-6 p-6">
    {/* Hero section shimmer */}
    <div className="space-y-4">
      <ShimmerLoader height="60px" width="80%" className="rounded-lg" />
      <ShimmerLoader height="24px" width="60%" className="rounded" />
      <ShimmerLoader height="20px" width="40%" className="rounded" />
      <div className="flex space-x-4 mt-6">
        <ShimmerLoader height="50px" width="200px" className="rounded-full" />
        <ShimmerLoader height="50px" width="150px" className="rounded-full" />
      </div>
    </div>
    
    {/* Content sections shimmer */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ShimmerLoader height="300px" className="rounded-lg" />
      <div className="space-y-4">
        <ShimmerLoader height="30px" width="70%" className="rounded" />
        <ShimmerLoader height="20px" width="100%" className="rounded" />
        <ShimmerLoader height="20px" width="90%" className="rounded" />
        <ShimmerLoader height="20px" width="80%" className="rounded" />
      </div>
    </div>
    
    {/* Cards shimmer */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="space-y-3">
          <ShimmerLoader height="200px" className="rounded-lg" />
          <ShimmerLoader height="20px" width="80%" className="rounded" />
          <ShimmerLoader height="16px" width="60%" className="rounded" />
        </div>
      ))}
    </div>
  </div>
);

export const ImageShimmerLoader = ({ width = '100%', height = '300px' }) => (
  <div className="relative overflow-hidden rounded-lg" style={{ width, height }}>
    <ShimmerLoader 
      width="100%" 
      height="100%" 
      className="rounded-lg"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0c6b76]"></div>
    </div>
  </div>
);

export const CardShimmerLoader = () => (
  <div className="space-y-4 p-4 border rounded-lg">
    <ShimmerLoader height="150px" className="rounded-lg" />
    <div className="space-y-2">
      <ShimmerLoader height="20px" width="80%" className="rounded" />
      <ShimmerLoader height="16px" width="60%" className="rounded" />
      <ShimmerLoader height="16px" width="40%" className="rounded" />
    </div>
  </div>
);

export default ShimmerLoader;
