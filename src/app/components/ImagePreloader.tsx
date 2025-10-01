'use client';

import { useEffect } from 'react';

// Critical images that should be preloaded for faster initial page load
const CRITICAL_IMAGES = [
  // Homepage hero images (highest priority)
  'logo-horizontal_wriy7t',
  'products-box-img_x8vu4b',
  
  // Hero section images
  'Box-4_lztqi7',
  'Box-5_pdb8xw',
  'Box-6_vm3fmh',
  'shipping-box_jyysru',
  
  // Navigation icons (medium priority)
  '/icons/rigid.png',
  '/icons/kraft.png',
  '/icons/cardboard.png',
  '/icons/corrugated.png',
  '/icons/bakeryBox.png',
  '/icons/cosmaticsBox.png',
  '/icons/foodBox.png',
  '/icons/giftBox.png',
  '/icons/jwelryBox.png',
  '/icons/retailBox.png',
  '/icons/candelBox.png',
  '/icons/shippingBox.png',
  '/icons/soapBox.png',
  '/icons/apparelBox.png',
  '/icons/sportsBox.png',
  '/icons/cigratteeBox.png',
  '/icons/CBDBox.png',
  '/icons/eliquidBox.png',
  '/icons/stationaryBox.png',
  '/icons/christmasBox.png',
  '/icons/chocolateBox.png',
  '/icons/carealBox.png',
  '/icons/preRollBox.png',
  '/icons/pizzaBox.png',
  
  // Background and decorative elements
  'cs_slider_shape_yszisl',
];

// Secondary images that can be loaded after critical ones
const SECONDARY_IMAGES = [
  'logo-vertical_zkxna0',
  'Product-Packaging-Boxes',
  'product-box-2',
  'shipping-box_jyysru',
  'contact-hero-img_pknqdz',
  'how-it-works-img_i6hojx',
];

// Preload a single image
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images with error handling
const preloadImages = async (imageUrls: string[]): Promise<void> => {
  const promises = imageUrls.map(src => 
    preloadImage(src).catch(error => {
      console.warn(`Failed to preload image: ${src}`, error);
      // Don't fail the entire preloading process for one failed image
      return Promise.resolve();
    })
  );
  
  await Promise.all(promises);
};

interface ImagePreloaderProps {
  images?: string[];
  children: React.ReactNode;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ 
  children 
}) => {
  useEffect(() => {
    // Preload critical images immediately
    const preloadCriticalImages = async () => {
      try {
        await preloadImages(CRITICAL_IMAGES);
        console.log('✅ Critical images preloaded successfully');
        
        // Preload secondary images after critical ones are done
        setTimeout(async () => {
          try {
            await preloadImages(SECONDARY_IMAGES);
            console.log('✅ Secondary images preloaded successfully');
          } catch (error) {
            console.warn('⚠️ Some secondary images failed to preload:', error);
          }
        }, 500); // Small delay to ensure critical images load first
        
      } catch (error) {
        console.warn('⚠️ Some critical images failed to preload:', error);
      }
    };

    // Start preloading immediately
    preloadCriticalImages();

    // Also preload on idle for better performance
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloadCriticalImages();
      });
    }
  }, []);

  return <>{children}</>;
};

export default ImagePreloader;
