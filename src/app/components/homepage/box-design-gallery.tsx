"use client";

import React from "react";
import Link from "next/link";
import { productData } from "../../data/productData";

// Featured products for the gallery - using actual product data
const featuredProducts = [
  {
    key: 'mailer-boxes',
    product: productData['mailer-boxes'],
    image: '/img/mailer-box.jpg'
  },
  {
    key: 'product-boxes',
    product: productData['product-boxes'],
    image: '/img/product-box-2.webp'
  },
  {
    key: 'rigid-boxes',
    product: productData['rigid-boxes'],
    image: '/img/shipping-box.jpg'
  },
  {
    key: 'shipping-boxes',
    product: productData['shipping-boxes'],
    image: '/img/product-box-2.jpg'
  },
  {
    key: 'pouches',
    product: productData['pouches'],
    image: '/img/product-box-2.webp'
  },
  {
    key: 'shopping-bags',
    product: productData['shopping-bags'],
    image: '/img/shipping-box-2.webp'
  }
];

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
              <Link href={`/products/${featuredProducts[0].key}`} className="group block">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src={featuredProducts[0].image}
                    alt={featuredProducts[0].product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-3">{featuredProducts[0].product.name}</h3>
                    <p className="text-center text-sm leading-relaxed">
                      {featuredProducts[0].product.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 2: Product Boxes */}
              <Link href={`/products/${featuredProducts[1].key}`} className="group block">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src={featuredProducts[1].image}
                    alt={featuredProducts[1].product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-3">{featuredProducts[1].product.name}</h3>
                    <p className="text-center text-sm leading-relaxed">
                      {featuredProducts[1].product.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Bottom Row - 1 wide image */}
            <Link href={`/products/${featuredProducts[2].key}`} className="group block">
              <div className="relative h-160 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src={featuredProducts[2].image}
                  alt={featuredProducts[2].product.name}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-3xl font-bold mb-4">{featuredProducts[2].product.name}</h3>
                  <p className="text-center text-base leading-relaxed">
                    {featuredProducts[2].product.description.substring(0, 150)}...
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side - 1 tall image on top, 2 below */}
          <div className="space-y-6">
            {/* Top - 1 tall image */}
            <Link href={`/products/${featuredProducts[3].key}`} className="group block">
              <div className="relative h-160 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src={featuredProducts[3].image}
                  alt={featuredProducts[3].product.name}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-3">{featuredProducts[3].product.name}</h3>
                  <p className="text-center text-sm leading-relaxed">
                    {featuredProducts[3].product.description.substring(0, 120)}...
                  </p>
                </div>
              </div>
            </Link>

            {/* Bottom - 2 images side by side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 5: Pouches */}
              <Link href={`/products/${featuredProducts[4].key}`} className="group block">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src={featuredProducts[4].image}
                    alt={featuredProducts[4].product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-lg font-bold mb-2">{featuredProducts[4].product.name}</h3>
                    <p className="text-center text-xs leading-relaxed">
                      {featuredProducts[4].product.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 6: Shopping Bags */}
              <Link href={`/products/${featuredProducts[5].key}`} className="group block">
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <img
                    src={featuredProducts[5].image}
                    alt={featuredProducts[5].product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-lg font-bold mb-2">{featuredProducts[5].product.name}</h3>
                    <p className="text-center text-xs leading-relaxed">
                      {featuredProducts[5].product.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxDesignGallery;
