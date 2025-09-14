'use client';

import React from 'react';
import LightBlueBackground from '../LightBlueBackground';

const VideoSection: React.FC = () => {
  return (
    <LightBlueBackground className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Video section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0c6b76] mb-6">See how to succeed with custom packaging</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Watch how Father Time Bread is slicing up the competition by delivering the ultimate unboxing experience with fresh bread shipped directly to customers in custom printed boxes.
          </p>
        </div>

        {/* Video player */}
        <div className="relative w-full max-w-4xl mx-auto mb-16">
          <div className="relative w-full h-auto overflow-hidden shadow-2xl border-b-20 border-r-20 border-[#0c6b76]">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/video/box-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-l-[12px] border-l-purple-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default VideoSection;
