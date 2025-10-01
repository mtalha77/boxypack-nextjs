'use client';

import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface ClientTestimonialsProps {
  productData: {
    name: string;
  };
}

const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ productData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "EcoFashion Co.",
      role: "Marketing Director",
      content: "The custom packaging boxes from BoxyPack transformed our brand presentation. The quality is exceptional and our customers love the unboxing experience. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "TechGadgets Inc.",
      role: "CEO",
      content: "Outstanding service and premium quality packaging. BoxyPack helped us create a memorable first impression that our customers rave about. The attention to detail is remarkable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Beauty Essentials",
      role: "Founder",
      content: "Working with BoxyPack has been a game-changer for our beauty brand. Their custom designs perfectly capture our brand essence and the packaging quality is top-notch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Luxury Goods Ltd.",
      role: "Operations Manager",
      content: "The premium packaging solutions from BoxyPack elevated our product presentation to new heights. Professional service, fast delivery, and exceptional quality every time.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "Artisan Crafts",
      role: "Creative Director",
      content: "BoxyPack understood our vision perfectly and delivered packaging that truly represents our brand. The craftsmanship and attention to detail exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Start auto-play immediately when component mounts
  useEffect(() => {
    setIsAutoPlaying(true);
  }, []);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    // Resume auto-play after a short delay
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 1000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundImage: 'url(https://res.cloudinary.com/du5lyrqvz/image/upload/spray-paint_bwq0bs)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center font-bold px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 text-sm font-semibold border-2 border-brown-dark2 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
            Client Reviews
          </div>
          <h2 className="text-h2 text-heading-primary mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied clients who have transformed their packaging with our premium solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Testimonial Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-teal-deep relative overflow-hidden transition-all duration-500 ease-in-out">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-[#0ca6c2]/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="md:text-2xl text-xl text-black  text-center mb-8 transition-all duration-500 ease-in-out">
                &quot;{testimonials[currentIndex].content}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-6">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-white/50">
                  <CldImage
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Client Details */}
                <div className="text-center transition-all duration-500 ease-in-out">
                  <h4 className="text-h4 text-heading-primary mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-[#0ca6c2] font-semibold">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                prevTestimonial();
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                nextTestimonial();
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#0c6b76] scale-125'
                    : 'bg-gray-300 hover:bg-[#0ca6c2]'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-r border-gray-200 md:border-r-2">
            <div className="text-5xl text-black font-semibold mb-2">500+</div>
            <div className="text-gray-700 font-medium">Happy Clients</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-r border-gray-200 md:border-r-2">
            <div className="text-5xl text-black font-semibold mb-2">4.9/5</div>
            <div className="text-gray-700 font-medium">Average Rating</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-5xl text-black font-semibold mb-2">1000+</div>
            <div className="text-gray-700 font-medium">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
