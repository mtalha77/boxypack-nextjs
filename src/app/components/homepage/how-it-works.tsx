'use client';

import React from 'react';

const HowItWorks: React.FC = () => {
  return (
         <section className="relative bg-white py-16 px-4 overflow-hidden">
                               {/* Background triangle shape */}
         <div className="absolute top-20 right-10 w-[400px] aspect-[1/0.866] opacity-10 transform rotate-100 translate-x-0 -translate-y-0">
           <div 
             className="w-full h-full"
             style={{
               clipPath: 'polygon(50% 100%, 100% 0, 0 0, 50% 100%, 50% calc(100% - 50px), calc(50px * 0.866) calc(50px / 2), calc(100% - 50px * 0.866) calc(50px / 2), 50% calc(100% - 50px))',
               background: 'linear-gradient(45deg, #FA6900, #C02942)'
             }}
           ></div>
         </div>

         {/* Background hamburger menu shape */}
         <div className="absolute top-70 left-10 w-[250px] h-[200px] rotate-170 opacity-10">
           <div 
             className="w-full h-full"
             style={{
               background: `
                 radial-gradient(closest-side at 12.5% 25%, #556270 97%, transparent 101%) 0 0/80% 40%,
                 linear-gradient(#556270 50%, transparent 0) top/80% 40% repeat-y
               `
             }}
           ></div>
         </div>

      <div className="max-w-6xl mx-auto relative z-10">s
                          {/* How it works section */}
         <div className="text-center mb-16">
           <h2 className="text-5xl font-bold text-[#0c6b76] mb-6">How it works</h2>
           <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
             Select a packaging style, quantity, and choose from custom or stock sizes - then start designing your custom boxes. Add customization options like images, text, and any color your brand requires. As you design you&apos;ll see an instant quote so you know exactly what your final order will come to.
           </p>
         </div>

         {/* Proofing process section */}
         <div className="bg-[#0c6b76] rounded-2xl p-6 relative h-auto">
           
           {/* Video section covering the whole container */}
           <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
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
             
           </div>
         </div>

        {/* GET STARTED NOW button */}
        <div className="text-center py-10">
        <button className="bg-brown-rustic hover:bg-[#97602f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
            Get Started Now
          </button>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Tiny minimums. No maximums. */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#b27635] text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b27635]/10 to-[#b27635]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#b27635] to-[#97602f] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#714622] mb-4 group-hover:text-[#b27635] transition-colors duration-300">Tiny minimums. No maximums.</h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                No matter the size of your custom packaging order, you&apos;ll get the best boxes at prices to match.
              </p>
            </div>
          </div>

          {/* Feature 2: Instant quotes */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#b27635] text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b27635]/10 to-[#b27635]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#b27635] to-[#97602f] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#714622] mb-4 group-hover:text-[#b27635] transition-colors duration-300">Instant quotes</h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Pick your style, design your boxes, and get an instant quote.
              </p>
            </div>
          </div>

          {/* Feature 3: Fast turnarounds */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#b27635] text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b27635]/10 to-[#b27635]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#b27635] to-[#97602f] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#714622] mb-4 group-hover:text-[#b27635] transition-colors duration-300">Fast turnarounds</h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                Eligible orders may ship within 10 days or less with priority turnaround options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
