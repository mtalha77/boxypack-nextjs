'use client';

import React, { Suspense } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const DefaultFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c6b76]"></div>
  </div>
);

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  fallback = <DefaultFallback />,
  rootMargin = '100px',
  threshold = 0.1,
  className = '',
}) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyLoadWrapper;
