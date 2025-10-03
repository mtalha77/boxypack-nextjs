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
 
  // Cloudinary public IDs for all 150 box sequence images
  const imagePublicIds = [
    "1_j7240m", "2_wxynh5", "3_n4mcqq", "4_jd9uhu", "5_k0ilnp",
    "6_lazod2", "7_hb3tz6", "8_fx5upc", "9_zomcxr", "10_dexrsi",
    "11_gi4pko", "12_ji0sch", "13_m0gwqt", "14_bxhnbm", "15_e4uknf",
    "16_ye0vbw", "17_sxbjz1", "18_gkm0om", "19_web1lb", "20_edmbtp",
    "21_cu3o7h", "22_gurzrh", "23_lbwbav", "24_cmb3xh", "25_t29jha",
    "26_n70vv5", "27_darnw1", "28_danout", "29_pnnuav", "30_fnhcsj",
    "31_ojhu2e", "32_cvtxi6", "33_eit4rz", "34_krudjn", "35_odkuqf",
    "36_iejnko", "37_vx5scc", "38_wu3art", "39_ijmmw3", "40_zpiv3y",
    "41_pfcoqc", "42_vo5jkr", "43_i9cwkd", "44_loodlh", "45_zyl0bc",
    "46_yb3vvh", "47_tqzcs7", "48_bqjdx3", "49_gsu0dz", "50_c1e1uq",
    "51_kzgpba", "52_ieuimq", "53_wsci2v", "54_w9whbk", "55_eiigq7",
    "56_hshori", "57_ojangp", "58_eksxxo", "59_ipgter", "60_ro3v2k",
    "61_g71roi", "62_bawwim", "63_yftusi", "64_ajyzda", "65_v6gpjd",
    "66_w3jd57", "67_hm1fmv", "68_hqsrbr", "69_n7lmhq", "70_zygkdi",
    "71_x0umg8", "72_nkzxtt", "73_riyeka", "74_vu8kor", "75_awqer9",
    "76_goadqd", "77_icawjd", "78_xgvqsf", "79_rs98cf", "80_kmdf7l",
    "81_fd02sd", "82_sxijof", "83_rxjzgu", "84_hgzwkd", "85_dnignv",
    "86_wgw5ox", "87_u3bvum", "88_ieqo87", "89_uejjhy", "90_fok4aq",
    "91_lp0vfx", "92_rupxu5", "93_vmmrlv", "94_ycrsb6", "95_pkhpx0",
    "96_tdwvm5", "97_vowgnn", "98_w5fez5", "99_pyi9uw", "100_e3zaox",
    "101_zfwtph", "102_lkepip", "103_iohmob", "104_cqdf5j", "105_nggose",
    "106_a2zupy", "107_ds3arz", "108_dwh1ot", "109_icywsw", "110_g5hvdz",
    "111_qlc11j", "112_imzaew", "113_xz6gix", "114_ehlned", "115_ybgosc",
    "116_w7spri", "117_uxucs0", "118_x4izhz", "119_rdhvyl", "120_chxer3",
    "121_gqxcq5", "122_jjkwpo", "123_vavler", "124_wejztr", "125_gtb1kz",
    "126_ypt4qt", "127_rewqfi", "128_qhh3tm", "129_nijb8n", "130_d3qfxo",
    "131_yvv3tg", "132_sd9z45", "133_tysge4", "134_uk4w0a", "135_bxt0uj",
    "136_gh30ve", "137_uzebqa", "138_jfnjdc", "139_zblova", "140_r78ppl",
    "141_czkj56", "142_fha4ii", "143_f92eqh", "144_hlevrx", "145_aoqlke",
    "146_ekk4ga", "147_nnccpz", "148_gde2xr", "149_d6vrzy", "150_hldhvd"
  ];

  // Load all 150 images from Cloudinary
  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < 150; i++) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = `https://res.cloudinary.com/du5lyrqvz/image/upload/f_auto,q_auto,w_1000,h_500,c_fill/${imagePublicIds[i]}`;
      
      // Add error handling for failed image loads
      img.onerror = () => {
        console.warn(`Failed to load image ${i + 1}: ${imagePublicIds[i]}`);
      };
      
      loadedImages.push(img);
    }

    console.log('🎬 Loaded 150 images for animation');
    return loadedImages;
  }, [imagePublicIds]);
 
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
        threshold: 1.0, // Trigger only when 100% of the section is visible
        rootMargin: '0px 0px 0px 0px', // No margin adjustment - exact visibility
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
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          const canvas = canvasRef.current;
          const img = images[index - 1];
          
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Check if image is loaded and has dimensions
          if (img && img.complete && img.naturalWidth > 0) {
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
          } else {
            // Show loading state or placeholder without text
            ctx.fillStyle = '#f3f4f6';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
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
    
    // Ensure imageIndex is within bounds
    const clampedIndex = Math.max(1, Math.min(150, imageIndex));
    
    // Debug logging
    console.log(`🎬 Scroll: ${(scrollYProgress.get() * 100).toFixed(1)}% → Frame ${clampedIndex}/150`);
   
    // Check if animation is completed
    if (clampedIndex >= 150) {
      setAnimationCompleted(true);
    } else {
      setAnimationCompleted(false);
    }
   
    // Always render the current frame
    render(clampedIndex);
  });
 
  // Initial render - show first image
  useEffect(() => {
    render(1);
  }, [render]);

  // Fallback: Force animation to start after a delay
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      console.log('🔄 Fallback: Ensuring animation is running...');
      render(currentImageIndex);
    }, 1000);

    return () => clearTimeout(fallbackTimer);
  }, [currentImageIndex, render]);
 
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
            className="w-full h-full md:h-full h-screen"
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