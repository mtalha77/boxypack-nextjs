'use client';

import React, { Suspense } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ShimmerLoader from './ShimmerLoader';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const DefaultFallback = () => (
  <div className="space-y-4 p-6">
    <ShimmerLoader height="300px" className="rounded-lg" />
    <div className="space-y-2">
      <ShimmerLoader height="24px" width="80%" className="rounded" />
      <ShimmerLoader height="20px" width="60%" className="rounded" />
      <ShimmerLoader height="20px" width="70%" className="rounded" />
    </div>
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
        <DefaultFallback />
      )}
    </div>
  );
};

export default LazyLoadWrapper;
