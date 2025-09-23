"use client"
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';
 
const ScrollVideoSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
 
  // Load all 110 images
  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];

  for (let i = 1; i <= 110; i++) {
      const img = new Image();
      img.src = `/box-squence/${i}.png`;
      loadedImages.push(img);
    }

    return loadedImages;
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
 
  // Transform scroll progress to image index (1 to 110)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 110]);
 
  // Update image when scroll changes
  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Number(latest.toFixed()));
  });
 
  // Initial render
  useEffect(() => {
    render(1);
  }, [render]);
 
  return (
    <section
      ref={containerRef}
      className="relative h-auto w-full bg-[#EFEFEF]"
    >
      <div className="w-full mx-auto h-full">
        <div className="sticky top-0 h-screen flex items-center justify-center">
                     <canvas
             ref={canvasRef}
             width={800}
             height={800}
           className="w-full h-full object-fill"
           />
        </div>
      </div>
    </section>
  );
};
 
export default ScrollVideoSection;