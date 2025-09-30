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

  // Load images in batches for better performance
  useEffect(() => {
    const loadImagesInBatches = async () => {
      const batchSize = 10; // Load 10 images at a time
      const totalImages = 150;
      
      for (let batch = 0; batch < Math.ceil(totalImages / batchSize); batch++) {
        const startIndex = batch * batchSize + 1;
        const endIndex = Math.min(startIndex + batchSize - 1, totalImages);
        
        const batchPromises = [];
        for (let i = startIndex; i <= endIndex; i++) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          
          const loadPromise = new Promise<HTMLImageElement>((resolve) => {
            img.onload = () => {
              resolve(img);
            };
            img.onerror = () => {
              console.warn(`Failed to load image ${i}`);
              resolve(img); // Continue even if one image fails
            };
            img.src = `/box-sequence/${i}.png`;
          });
          
          batchPromises.push(loadPromise);
        }
        
        const batchImages = await Promise.all(batchPromises);
        imagesLoadedRef.current = [...imagesLoadedRef.current, ...batchImages];
        setLoadedImageCount(imagesLoadedRef.current.length);
        
        // Small delay between batches to prevent blocking
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      setImages(imagesLoadedRef.current);
    };

    if (isInView) {
      loadImagesInBatches();
    }
  }, [isInView]);

  // Intersection Observer to detect when section is in view
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
        threshold: 0.8, // Trigger when 80% of the section is visible
        rootMargin: '0px 0px -10% 0px', // Start slightly before fully in view
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
          {/* Loading indicator */}
          {loadedImageCount < 150 && (
            <div className="absolute top-4 left-4 z-20 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0c6b76]"></div>
                <span className="text-sm text-gray-700">
                  Loading images... ({loadedImageCount}/150)
                </span>
              </div>
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