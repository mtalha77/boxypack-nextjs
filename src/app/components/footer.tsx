'use client';

import React, { useState } from 'react';
import { ArrowRight, Package } from 'lucide-react';
import { FaFacebook, FaYoutube, FaPinterest, FaTwitter, FaTiktok, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";   

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => { 
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section - Navigation Links + Newsletter Signup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
                     {/* Custom Packaging Column */}
           <div>
             <h3 className="text-h4 text-heading-primary mb-6">Custom Packaging</h3>
             <ul className="space-y-3">
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Mailer Boxes</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Product Boxes</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Standard Shipping Boxes</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Econoflex Shipping Boxes</a></li>
             </ul>
           </div>

           {/* Company Column */}
           <div>
             <h3 className="text-h4 text-heading-primary mb-6">Company</h3>
             <ul className="space-y-3">
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">About Us</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Terms & Conditions</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">CA Transparency Act</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Legal Matters</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Privacy Policy</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Accessibility Statement</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Blog</a></li>
             </ul>
           </div>

           {/* Help Column */}
           <div>
             <h3 className="text-h4 text-heading-primary mb-6">Help</h3>
             <ul className="space-y-3">
                <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Support Portal</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Artwork Tips and Tricks</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">Request a Quote</a></li>
               <li><a href="#" className="text-body-small text-body-secondary hover:text-body-primary transition-colors font-semibold duration-200">FAQs</a></li>
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
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </form>
            
            {/* Social Media Icons */}
            <div className="mt-12">
            <h4 className="text-h4 text-heading-primary mb-6">Follow us on:</h4>
              <div className="flex items-center space-x-4">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/boxypack1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#1877f2] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 md:w-7 md:h-7" />
                </a>
                
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@boxypack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#ff0000] transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5 md:w-7 md:h-7" />
                </a>
                
                {/* Pinterest */}
                <a 
                  href="https://www.pinterest.com/boxypack1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#e60023] transition-colors duration-200"
                  aria-label="Pinterest"
                >
                  <FaPinterest className="w-5 h-5 md:w-7 md:h-7" />
                </a>
                
                {/* X (Twitter) */}
                <a 
                  href="https://x.com/boxypack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#000000] transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="w-5 h-5 md:w-7 md:h-7"/>
                </a>
                
                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@boxy.pack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#000000] transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5 md:w-7 md:h-7" />
                </a>
                
                {/* Reddit */}
                <a 
                  href="https://www.reddit.com/user/boxypack/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#ff4500] transition-colors duration-200"
                  aria-label="Reddit"
                >
                  <FaReddit className="w-5 h-5 md:w-7 md:h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Middle Section - Payment Methods */}
        <div className="text-center mb-16">
          <h3 className="text-h3 text-heading-primary mb-4">Payment Methods</h3>
          <p className="text-body text-body-secondary mb-6 max-w-2xl mx-auto">
            Our website is compatible with many popular payment methods. SSL 100% Secure Transactions.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center justify-center space-x-6">
            {/* Mastercard */}
            <div className="flex items-center space-x-1">
              <div className="w-8 h-5 bg-red-500 rounded-full"></div>
              <div className="w-8 h-5 bg-orange-500 rounded-full"></div>
            </div>
            
            {/* Visa */}
            <div className="text-heading-primary font-bold text-body">VISA</div>
            
            {/* American Express */}
            <div className="w-12 h-8 bg-[#0c6b76] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AMEX</span>
            </div>
            
            {/* Discover */}
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="w-6 h-6 bg-[#0c6b76] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Address */}
        <div className="text-center border-t border-gray-300 pt-8">

          
          {/* Copyright Text */}
          <div className="text-caption text-heading-primary">
            All rights reserved
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
