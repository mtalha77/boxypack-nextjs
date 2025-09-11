"use client";

import React from "react";

const BoxDesignGallery: React.FC = () => {
  return (
    <section className="relative bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-5xl font-bold text-[#0c6b76] mb-6">
            Box design that inspires
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We&apos;re here to help with packaging solutions that make sense for
            businesses of any kind. Whether you&apos;re designing custom retail
            packaging with your logo or need corrugated cardboard mailers for
            your ecommerce biz, there&apos;s lots of inspiration to be found for
            your custom product packaging.
          </p>
        </div>

        {/* Gallery Grid - Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - 2 images on top, 1 below */}
          <div className="space-y-6">
            {/* Top Row - 2 images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Mailer Boxes */}
              <div className="group">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src="/img/mailer-box.jpg"
                    alt="Mailer Boxes"
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-3">Mailer Boxes</h3>
                    <p className="text-center text-sm leading-relaxed">
                      Perfect for shipping and showcasing your products with
                      style. Custom printed designs that make unboxing
                      memorable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Flat-pack Boxes */}
              <div className="group">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src="/img/product-box-2.webp"
                    alt="Flat-pack Boxes"
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-3">Flat-pack Boxes</h3>
                    <p className="text-center text-sm leading-relaxed">
                      Easy to assemble and perfect for retail packaging. Custom
                      designs that showcase your brand beautifully.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 1 wide image */}
            <div className="group">
              <div className="relative h-160 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src="/img/shipping-box.jpg"
                  alt="WHALE! Collection"
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-3xl font-bold mb-4">WHALE! Collection</h3>
                  <p className="text-center text-base leading-relaxed">
                    Fun and playful packaging designs featuring marine themes.
                    Perfect for children&apos;s products and creative brands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 1 tall image on top, 2 below */}
          <div className="space-y-6">
            {/* Top - 1 tall image */}
            <div className="group">
              <div className="relative h-160 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src="/img/product-box-2.jpg"
                  alt="KOYAH Brand"
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-3">KOYAH Brand</h3>
                  <p className="text-center text-sm leading-relaxed">
                    Sustainable packaging solutions with custom branding.
                    Eco-friendly materials meet beautiful design.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom - 2 images side by side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 5: Cosmetic Packaging */}
              <div className="group">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src="/img/product-box-2.webp"
                    alt="Cosmetic Packaging"
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-lg font-bold mb-2">Cosmetic</h3>
                    <p className="text-center text-xs leading-relaxed">
                      Elegant packaging for beauty products.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 6: BLK-TRI PICKUPS */}
              <div className="group">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src="/img/shipping-box-2.webp"
                    alt="BLK-TRI PICKUPS"
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-lg font-bold mb-2">BLK-TRI</h3>
                    <p className="text-center text-xs leading-relaxed">
                      Bold packaging designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxDesignGallery;
