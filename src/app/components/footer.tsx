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
    <footer className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 relative overflow-hidden">
      {/* Decorative Shape - Top Right Corner Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none overflow-hidden opacity-30" style={{ zIndex: 1 }}>
        <CldImage
          src="cs_slider_shape_yszisl"
          alt="Decorative shape"
          width={600}
          height={500}
          className="w-full h-full object-contain transform scale-150"
        />
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 relative z-10">
        
        {/* Top Section - Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and About Column */}
          <div>
            <div className="mb-8">
              <CldImage src="logo-vertical_zkxna0" alt="Boxypack" width={200} height={100} className="mb-6 transition-transform duration-300 hover:scale-105" priority />
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
               BoxyPack is where box and packaging meet passion. We create boxes to protect your products, present your brand beautifully, and promote endless customer trust with every detail.
              </p>
            </div>
          </div>

          {/* Product By Material Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#0c6b76] after:to-[#0ca6c2]">
              Product By Material
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/product-by-material/cardboard-boxes" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Cardboard Boxes
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-material/corrugated-boxes" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Corrugated Boxes
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-material/kraft-boxes" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Kraft Boxes
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-material/rigid-boxes" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Rigid Boxes
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product By Industry Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#0c6b76] after:to-[#0ca6c2]">
              Product By Industry
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/product-by-industry/bakery-boxes" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Bakery Boxes
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-industry/jewelry-boxes" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Jewelry Boxes
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products/product-by-industry/soap-boxes-industry" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Soap Boxes
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#0c6b76] after:to-[#0ca6c2]">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    About Us
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    How It Works
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Contact Us
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm text-gray-600 hover:text-[#0c6b76] hover:translate-x-2 transition-all duration-300 inline-block group">
                  <span className="relative">
                    Terms of Use
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0c6b76] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter Signup and Social Media Section */}
        <div className="mb-12 pt-10 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Newsletter Signup Section - Left */}
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sign up for exclusive offers</h3>
              <p className="text-sm text-gray-600 mb-8">Get the latest updates, special offers, and packaging tips delivered to your inbox.</p>
              <form onSubmit={handleSubscribe}>
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 pr-32 border-2 border-gray-300 rounded-full focus:border-[#0c6b76] focus:ring-4 focus:ring-[#0c6b76]/20 outline-none bg-white text-gray-800 placeholder-gray-400 transition-all duration-300 shadow-sm hover:shadow-md"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] hover:from-[#0ca6c2] hover:to-[#0c6b76] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <span>SUBSCRIBE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Social Media Section - Right */}
            <div className="max-w-md">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Follow us on social media</h4>
              <p className="text-sm text-gray-600 mb-8">Connect with us on our social platforms for the latest updates and inspiration.</p>
              <div className="flex items-center flex-wrap gap-6">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/boxypack1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1877f2] text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@boxypack_1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#ff0000] text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              
              {/* Pinterest */}
              <a 
                href="https://www.pinterest.com/boxypack1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#e60023] text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Pinterest"
              >
                <FaPinterest className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/boxypack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"/>
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@boxy.pack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              
              {/* Reddit */}
              <a 
                href="https://www.reddit.com/user/boxypack/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#ff4500] text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Reddit"
              >
                <FaReddit className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Section - Copyright and Address */}
        <div className="text-center border-t border-gray-200 pt-8 mt-8">        
          {/* Copyright Text */}
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-900">BoxyPack</span>. All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
