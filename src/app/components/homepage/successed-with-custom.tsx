'use client';

import React from 'react';

const VideoSection: React.FC = () => {
  return (
         <section className="relative py-16 px-4" style={{
           background: 'linear-gradient(135deg, rgba(12, 166, 194, 0.1) 0%, rgba(12, 107, 118, 0.1) 100%)',
           backgroundColor: '#f8fafc' // fallback background
         }}>

      <div className="max-w-6xl mx-auto relative z-10">
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
            
            {/* Video overlay text */}
            <div className="absolute bottom-4 left-4 bg-white border-2 border-[#0c6b76] px-3 py-1 rounded">
              <span className="text-[#0c6b76] font-semibold text-sm">Taylor & Kara West</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
