'use client';

import { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];

      criticalFonts.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = fontUrl;
        link.onload = () => {
          link.rel = 'stylesheet';
        };
        document.head.appendChild(link);
      });

      // Preload critical videos
      const criticalVideos = [
        '/video/Box.webm',
        '/video/box-video.mp4'
      ];

      criticalVideos.forEach(videoSrc => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = videoSrc;
        document.head.appendChild(link);
      });

      // Preload critical CSS
      const criticalCSS = [
        '/styles/critical.css' // If you have critical CSS
      ];

      criticalCSS.forEach(cssUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = cssUrl;
        document.head.appendChild(link);
      });
    };

    // Run optimizations immediately
    preloadCriticalResources();

    // Additional performance optimizations
    const optimizePerformance = () => {
      // Enable passive event listeners for better scroll performance
      const originalAddEventListener = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'scroll' || type === 'touchstart' || type === 'touchmove') {
          options = options || {};
          if (typeof options === 'boolean') {
            options = { passive: true };
          } else if (typeof options === 'object') {
            options.passive = true;
          }
        }
        return originalAddEventListener.call(this, type, listener, options);
      };

      // Optimize image loading
      if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
          img.setAttribute('loading', 'lazy');
        });
      }

      // Prefetch next page resources on idle
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Prefetch likely next pages
          const likelyNextPages = [
            '/contact-us',
            '/about-us',
            '/products'
          ];

          likelyNextPages.forEach(page => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = page;
            document.head.appendChild(link);
          });
        });
      }
    };

    // Run performance optimizations
    optimizePerformance();

    // Cleanup function
    return () => {
      // Remove any added event listeners or resources if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
