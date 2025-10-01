"use client";

import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { productData } from "../../data/productData";

// Featured products for the gallery - using actual product data
const featuredProducts = [
  {
    key: "mailer-boxes",
    product: productData["mailer-boxes"],
    image: "Box-4_lztqi7",
  },
  {
    key: "product-boxes",
    product: productData["product-boxes"],
    image: "Box-5_pdb8xw",
  },
  {
    key: "rigid-boxes",
    product: productData["rigid-boxes"],
    image: "Box-6_vm3fmh",
  },
  {
    key: "shipping-boxes",
    product: productData["shipping-boxes"],
    image: "shipping-box_jyysru",
  },
  {
    key: "mylar-boxes",
    product: productData["mylar-boxes"],
    image: "Box-4_lztqi7",
  },
  {
    key: "shopping-bags",
    product: productData["shopping-bags"],
    image: "Box-5_pdb8xw",
  },
];

const BoxDesignGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-heading-primary mb-6">
            Boxes Designed To Inspire Trust
          </h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            First moments matter most. Custom boxes shape first impressions and
            lasting memories. At BoxyPack, we design boxes that go beyond
            packaging, turning them into clear brand statements. Boxes can be
            chosen by material for strength or by industry for unique needs.
            Each design is made to inspire and build trust. From product boxes
            to shipping choices, we provide presence and protection. Explore
            below and find the box that matches your product needs.
          </p>
        </div>

        {/* Gallery Grid - Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - 2 images on top, 1 below */}
          <div className="space-y-6">
            {/* Top Row - 2 images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Mailer Boxes */}
              <Link
                href={`/products/${featuredProducts[0].key}`}
                className="group block"
              >
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <CldImage
                    src={featuredProducts[0].image}
                    alt={featuredProducts[0].product.name}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-h3 text-white mb-3">
                      {featuredProducts[0].product.name}
                    </h3>
                    <p className="text-center text-body-small">
                      {featuredProducts[0].product.description.substring(
                        0,
                        120
                      )}
                      ...
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 2: Product Boxes */}
              <Link
                href={`/products/${featuredProducts[1].key}`}
                className="group block"
              >
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <CldImage
                    src={featuredProducts[1].image}
                    alt={featuredProducts[1].product.name}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-h3 text-white mb-3">
                      {featuredProducts[1].product.name}
                    </h3>
                    <p className="text-center text-body-small">
                      {featuredProducts[1].product.description.substring(
                        0,
                        120
                      )}
                      ...
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Bottom Row - 1 wide image */}
            <Link
              href={`/products/${featuredProducts[2].key}`}
              className="group block"
            >
              <div className="relative h-160 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <CldImage
                  src={featuredProducts[2].image}
                  alt={featuredProducts[2].product.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-h2 text-white mb-4">
                    {featuredProducts[2].product.name}
                  </h3>
                  <p className="text-center text-body">
                    {featuredProducts[2].product.description.substring(0, 150)}
                    ...
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side - 1 tall image on top, 2 below */}
          <div className="space-y-6">
            {/* Top - 1 tall image */}
            <Link
              href={`/products/${featuredProducts[3].key}`}
              className="group block"
            >
              <div className="relative h-160 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <CldImage
                  src={featuredProducts[3].image}
                  alt={featuredProducts[3].product.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-h2 text-white mb-4">
                    {featuredProducts[3].product.name}
                  </h3>
                  <p className="text-center text-body">
                    {featuredProducts[3].product.description.substring(0, 150)}
                    ...
                  </p>
                </div>
              </div>
            </Link>

            {/* Bottom - 2 images side by side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 5: Pouches */}
              <Link
                href={`/products/${featuredProducts[4].key}`}
                className="group block"
              >
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <CldImage
                    src={featuredProducts[4].image}
                    alt={featuredProducts[4].product.name}
                    width={300}
                    height={320}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-h5 text-white mb-2">
                      {featuredProducts[4].product.name}
                    </h3>
                    <p className="text-center text-caption">
                      {featuredProducts[4].product.description.substring(0, 80)}
                      ...
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 6: Shopping Bags */}
              <Link
                href={`/products/${featuredProducts[5].key}`}
                className="group block"
              >
                <div className="relative h-80 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <CldImage
                    src={featuredProducts[5].image}
                    alt={featuredProducts[5].product.name}
                    width={300}
                    height={320}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay with text */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-h5 text-white mb-2">
                      {featuredProducts[5].product.name}
                    </h3>
                    <p className="text-center text-caption">
                      {featuredProducts[5].product.description.substring(0, 80)}
                      ...
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
