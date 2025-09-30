"use client"
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
 
const ScrollVideoSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
 
  // Load images progressively and cache them
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const imagesLoadedRef = useRef<HTMLImageElement[]>([]);

  // Preload critical images immediately and load others progressively
  useEffect(() => {
    const preloadCriticalImages = async () => {
      // Preload first 20 images immediately for smooth start
      const criticalImages = [];
      const criticalPromises = [];
      
      for (let i = 1; i <= 20; i++) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        const loadPromise = new Promise<HTMLImageElement>((resolve) => {
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`Failed to load critical image ${i}`);
            resolve(img);
          };
          img.src = `/box-sequence/${i}.png`;
        });
        
        criticalPromises.push(loadPromise);
      }
      
      // Load critical images immediately
      const criticalLoaded = await Promise.all(criticalPromises);
      imagesLoadedRef.current = criticalLoaded;
      setLoadedImageCount(20);
      
      // Now load remaining images in larger batches for speed
      const remainingImages = [];
      const batchSize = 25; // Increased batch size for faster loading
      
      for (let i = 21; i <= 150; i++) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        const loadPromise = new Promise<HTMLImageElement>((resolve) => {
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`Failed to load image ${i}`);
            resolve(img);
          };
          img.src = `/box-sequence/${i}.png`;
        });
        
        remainingImages.push(loadPromise);
        
        // Load in batches of 25
        if (remainingImages.length >= batchSize || i === 150) {
          const batchLoaded = await Promise.all(remainingImages);
          imagesLoadedRef.current = [...imagesLoadedRef.current, ...batchLoaded];
          setLoadedImageCount(imagesLoadedRef.current.length);
          
          // Clear the batch
          remainingImages.length = 0;
          
          // Very small delay to prevent blocking
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      }
      
      setImages(imagesLoadedRef.current);
    };

    if (isInView) {
      preloadCriticalImages();
    }
  }, [isInView]);

  // Intersection Observer to detect when section is in view - start loading early
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '200px 0px 200px 0px', // Start loading 200px before section comes into view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
 
  const render = useCallback(
    (index: number) => {
      if (images[index - 1] && canvasRef.current && images[index - 1].complete) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          const canvas = canvasRef.current;
          const img = images[index - 1];
          
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Calculate aspect ratios
          const canvasAspect = canvas.width / canvas.height;
          const imgAspect = img.width / img.height;
          
          let drawWidth, drawHeight, offsetX, offsetY;
          
          if (imgAspect > canvasAspect) {
            // Image is wider than canvas - fit to height, center horizontally
            drawHeight = canvas.height;
            drawWidth = drawHeight * imgAspect;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          } else {
            // Image is taller than canvas - fit to width, center vertically
            drawWidth = canvas.width;
            drawHeight = drawWidth / imgAspect;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          }
          
          // Draw the image centered and maintaining aspect ratio
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      }
    },
    [images]
  );
 
  // Transform scroll progress to image index (1 to 150)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 150]);

  // Update image when scroll changes
  useMotionValueEvent(currentIndex, 'change', (latest) => {
    const imageIndex = Number(latest.toFixed());
    
    // Check if animation is completed
    if (imageIndex >= 150) {
      setAnimationCompleted(true);
    } else {
      setAnimationCompleted(false);
    }
    
    render(imageIndex);
  });

  // Initial render - show first image
  useEffect(() => {
    render(1);
  }, [render]);
 
  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#EFEFEF]"
      style={{ 
        height: '500vh', // Increased height to make animation slower
        position: 'relative',
        zIndex: animationCompleted ? 'auto' : 10
      }}
    >
      <div className="w-full mx-auto h-full">
        <div className="sticky top-0 w-full h-screen">
          {/* Loading indicator with progress */}
          {loadedImageCount < 150 && (
            <div className="absolute top-4 left-4 z-20 bg-white/95 px-6 py-4 rounded-xl shadow-xl border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0c6b76]"></div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800">
                    Loading Animation... ({loadedImageCount}/150)
                  </span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                    <div 
                      className="h-full bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] rounded-full transition-all duration-300"
                      style={{ width: `${(loadedImageCount / 150) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Shimmer overlay while loading */}
          {loadedImageCount < 20 && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </div>
          )}
          
          <canvas
            ref={canvasRef}
            width={1000}
            height={500}
            className="w-full h-full"
            style={{
              display: 'block'
            }}
          />   
        </div>
      </div>
    </section>
  );
};
 
export default ScrollVideoSection;