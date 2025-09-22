'use client';

import React, { useRef, useEffect, useState } from 'react';
import LightBlueBackground from '../../UI/LightBlueBackground';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video is ready to play
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        video.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      };

      const handleLoadedData = () => {
        video.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      };

      // Add event listeners for better video handling
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play().catch(console.error);
      });

      // Force play on load
      video.load();
      
      // Cleanup
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <LightBlueBackground className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Video section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0c6b76] mb-6">See How Boxes Protect And Build Brand Value</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            See how our custom boxes turn products into experiences customers remember. From store shelves to doorstep delivery, each design gives strength and details that build trust.
          </p>
        </div>

        {/* Video player */}
        <div className="relative w-full max-w-4xl mx-auto mb-16">
          <div className="relative w-full h-auto overflow-hidden shadow-2xl border-b-20 border-r-20 border-[#0c6b76]">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              style={{ 
                willChange: 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                MozTransform: 'translateZ(0)',
                msTransform: 'translateZ(0)',
                OTransform: 'translateZ(0)'
              }}
              onError={(e) => {
                console.error('Video error:', e);
              }}
              onStalled={() => {
                console.log('Video stalled, attempting to resume...');
                if (videoRef.current) {
                  videoRef.current.play().catch(console.error);
                }
              }}
              onSuspend={() => {
                console.log('Video suspended, attempting to resume...');
                if (videoRef.current) {
                  videoRef.current.play().catch(console.error);
                }
              }}
            >
              <source src="/video/box-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play button overlay - only show if video is not loaded */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[12px] border-l-purple-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            )}

            {/* Loading indicator */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c6b76]"></div>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default VideoSection;
