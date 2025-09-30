'use client';

import { useEffect } from 'react';

// TypeScript interfaces for Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorPerformance = () => {
      // Monitor Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('🎯 LCP:', entry.startTime, 'ms');
              
              // Log performance insights
              if (entry.startTime < 2500) {
                console.log('✅ Good LCP performance');
              } else if (entry.startTime < 4000) {
                console.log('⚠️ Needs improvement LCP');
              } else {
                console.log('❌ Poor LCP performance');
              }
            }
            
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as PerformanceEventTiming;
              console.log('🎯 FID:', fidEntry.processingStart - fidEntry.startTime, 'ms');
            }
            
            if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as LayoutShift;
              if (!clsEntry.hadRecentInput) {
                console.log('🎯 CLS:', clsEntry.value);
              }
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      }

      // Monitor image loading performance
      const monitorImageLoading = () => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        const totalImages = images.length;
        
        const checkImageLoading = () => {
          loadedImages = 0;
          images.forEach(img => {
            if (img.complete && img.naturalHeight !== 0) {
              loadedImages++;
            }
          });
          
          if (loadedImages === totalImages && totalImages > 0) {
            console.log(`✅ All ${totalImages} images loaded successfully`);
          }
        };

        // Check periodically
        const interval = setInterval(checkImageLoading, 1000);
        
        // Clean up after 30 seconds
        setTimeout(() => {
          clearInterval(interval);
        }, 30000);
      };

      // Monitor resource loading
      const monitorResourceLoading = () => {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          console.log('⚠️ Slow loading resources:', slowResources.map(r => ({
            name: r.name,
            duration: r.duration
          })));
        } else {
          console.log('✅ All resources loaded efficiently');
        }
      };

      // Run monitoring after page load
      if (document.readyState === 'complete') {
        monitorImageLoading();
        monitorResourceLoading();
      } else {
        window.addEventListener('load', () => {
          monitorImageLoading();
          monitorResourceLoading();
        });
      }
    };

    // Start monitoring
    monitorPerformance();

    // Log initial page load metrics
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('📊 Page Load Metrics:', {
          'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          'Page Load Time': navigation.loadEventEnd - navigation.loadEventStart,
          'Total Load Time': navigation.loadEventEnd - navigation.fetchStart
        });
      }
    });

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
