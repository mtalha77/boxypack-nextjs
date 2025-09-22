'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Mail, Clock, ArrowRight, Package } from 'lucide-react';
import GradientBackground from '../UI/GradientBackground';

const ComingSoon: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Show coming soon modal
    setShowComingSoon(true);
    
    // Hide header and footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scrolling and show header/footer when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  useEffect(() => {
    // Set initial time to 5 days from now
    const targetTime = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!showComingSoon) {
    return null;
  }

  return (
    <div className="h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(45deg, rgba(1, 63, 74, 1) 0%, rgba(128, 223, 242, 1) 100%, rgba(128, 223, 242, 1) 30%, rgba(128, 223, 242, 1) 10%)'
    }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/video/Box.webm" type="video/webm" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Coming Soon Text */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            COMING SOON
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Get ready! Something really cool is coming!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="w-full max-w-2xl">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {/* Days */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                DAYS
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                HOURS
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                MINUTES
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                SECONDS
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12">
          <p className="text-white/80 mb-4">Have questions?</p>
          <a 
            href="mailto:info@boxypack.com"
            className="inline-flex items-center text-white"
          >
            <Mail className="w-5 h-5 mr-2" />
            info@boxypack.com
          </a>
        </div>
      </div>

      {/* Bottom Cloud-like Shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white/10 rounded-t-full"></div>
        <div className="absolute bottom-4 left-1/4 w-24 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-6 right-1/4 w-32 h-6 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-2 left-1/2 w-20 h-10 bg-white/25 rounded-full">        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
