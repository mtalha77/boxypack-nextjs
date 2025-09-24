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
          // Clear canvas
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          // Draw the current image
          ctx.drawImage(images[index - 1], 0, 0, canvasRef.current.width, canvasRef.current.height);
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
        zIndex: animationCompleted ? 'auto' : 10 // Higher z-index when animation is not complete
      }}
    >
      <div className="w-full mx-auto h-full">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            className="w-full h-full object-fit"
          />   
        </div>
      </div>
    </section>
  );
};
 
export default ScrollVideoSection;