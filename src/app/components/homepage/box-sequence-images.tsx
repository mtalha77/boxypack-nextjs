"use client"
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
 
const ScrollVideoSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
 
  // Load all 150 images
  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= 150; i++) {
      const img = new Image();
      img.src = `/box-sequence/${i}.png`;
      loadedImages.push(img);
    }

    return loadedImages;
  }, []);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setAnimationStarted(true);
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
      if (images[index - 1] && canvasRef.current) {
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
    setCurrentImageIndex(imageIndex);
    
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