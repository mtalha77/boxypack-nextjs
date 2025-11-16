'use client';

import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { ArrowRight } from 'lucide-react';
import { FaFacebook, FaYoutube, FaPinterest, FaTiktok, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";   
import Link from 'next/link';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => { 
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="bg-white text-gray-800 relative">
      {/* Decorative Shape - Top Right Corner Background */}
      <div className="absolute top-40 right-0 w-64 h-48 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <CldImage
          src="cs_slider_shape_yszisl"
          alt="Decorative shape"
          width={256}
          height={160}
          className="w-full h-full object-contain opacity-80 transform scale-150"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-16 relative z-10">
        
        {/* Top Section - Navigation Links + Newsletter Signup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          
          {/* Logo and About Column */}
          <div>
            <div className="mb-6">
              <CldImage src="logo-vertical_zkxna0" alt="Boxypack" width={180} height={90} className="mb-4" priority />
              <p className="text-body-small text-body-secondary leading-relaxed">
               BoxyPack is where box and packaging meet passion. We create boxes to protect your products, present your brand beautifully, and promote endless customer trust with every detail.
              </p>
            </div>
          </div>

          {/* Product By Material Column */}
          <div>
            <h3 className="text-h4 text-heading-primary mb-6">Product By Material</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/product-by-material/cardboard-boxes" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">
                  Cardboard Boxes
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-material/corrugated-boxes" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">
                  Corrugated Boxes
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-material/kraft-boxes" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">
                  Kraft Boxes
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-material/rigid-boxes" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">
                  Rigid Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Product By Industry Column */}
          <div>
            <h3 className="text-h4 text-heading-primary mb-6">Product By Industry</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/product-by-industry/bakery-boxes" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">
                  Bakery Boxes
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-industry/jewelry-boxes" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">
                  Jewelry Boxes
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-industry/soap-boxes-industry" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">
                  Soap Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-h4 text-heading-primary mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about-us" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">About Us</a></li>
              <li><a href="/how-it-works" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">How It Works</a></li>
              <li><a href="/contact-us" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="text-body-small text-body-secondary hover:text-[#0c6b76] hover:translate-x-1 transition-all duration-300 font-semibold inline-block">Terms of Use</a></li>
            </ul>
          </div>

          {/* Newsletter Signup Column */}
          <div>
            <h3 className="text-h4 text-heading-primary mb-6">Sign up for exclusive offers</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 pr-24 border-2 border-gray-400 rounded-full focus:border-gray-800 outline-none bg-transparent text-gray-800 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-gray-600 hover:text-[#0c6b76] cursor-pointer font-semibold text-sm transition-colors duration-200"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Social Media Section */}
        <div className="text-center mb-16">
          {/* Social Media Icons */}
          <div>
            <h4 className="text-h4 text-heading-primary mb-6">Follow us on:</h4>
            <div className="flex items-center justify-center space-x-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/boxypack1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1877f2] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 md:w-7 md:h-7" />
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@boxypack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#ff0000] hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 md:w-7 md:h-7" />
              </a>
              
              {/* Pinterest */}
              <a 
                href="https://www.pinterest.com/boxypack1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#e60023] hover:scale-110 transition-all duration-300"
                aria-label="Pinterest"
              >
                <FaPinterest className="w-5 h-5 md:w-7 md:h-7" />
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/boxypack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#000000] hover:scale-110 transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-5 h-5 md:w-7 md:h-7"/>
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@boxy.pack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#000000] hover:scale-110 transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 md:w-7 md:h-7" />
              </a>
              
              {/* Reddit */}
              <a 
                href="https://www.reddit.com/user/boxypack/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#ff4500] hover:scale-110 transition-all duration-300"
                aria-label="Reddit"
              >
                <FaReddit className="w-5 h-5 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Section - Copyright and Address */}
        <div className="text-center border-t border-gray-300 pt-8">        
          {/* Copyright Text */}
          <div className="text-caption text-heading-primary">
            © {new Date().getFullYear()} BoxyPack. All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
