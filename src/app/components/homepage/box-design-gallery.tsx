"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { productData } from "../../data/productPagesData";
import LightBlueBackground from "../../UI/LightBlueBackground";

// Featured products for the gallery - using actual product data
const featuredProducts = [
  {
    key: "rigid-boxes",
    product: productData["rigid-boxes"],
    image: "Rigid-Briefcase-Box_sfcpy7",
  },
  {
    key: "shipping-boxes",
    product: productData["shipping-boxes"],
    image: "Corrugated-Full-Flap-Shipping-Box-3_lo3cv7",
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
  {
    key: "packaging-accessories",
    product: productData["packaging-accessories"],
    image: "Product-Bottle-Label-1_sq8eqg",
  },
  {
    key: "two-piece-rigid-boxes",
    product: productData["two-piece-rigid-boxes"],
    image: "Magnetic-Closure-Rigid-Box_vtf07m",
  },
] as const;

const getProductDescriptionSnippet = (index: number, length: number) => {
  const description = featuredProducts[index]?.product?.description;
  if (typeof description !== "string") {
    return "";
  }
  return description.substring(0, length);
};

const BoxDesignGallery: React.FC = () => {
  return (
    <LightBlueBackground className="py-12 md:py-24" id="box-design-gallery">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-h2 text-heading-primary mb-6">
            Every Packaging Box Tells Your Story
          </h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            At BoxyPack, we see packaging as more than a box. It is the first thing people see, the first thing they remember. Our custom packaging and boxes are made to fit your product and your story. Each design is built with care, shaped by real ideas, and printed to perfection. Every custom box shows your effort and pride. Take a look below and find the perfect box that brings your product and brand to life.
          </p>
        </div>

        {/* Mobile Layout: 2 images in a row, then 1 image in a row (alternating pattern) */}
        <div className="block lg:hidden space-y-4 sm:space-y-6">
          {/* Row 1: 2 images side by side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="group relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
              <CldImage
                src={featuredProducts[0].image}
                alt={featuredProducts[0].product.name}
                width={400}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                  {featuredProducts[0].product.name}
                </h3>
                <p className="text-center text-xs sm:text-sm px-2">
                  {getProductDescriptionSnippet(0, 100)}
                  ...
                </p>
              </div>
            </div>
            <div className="group relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
              <CldImage
                src={featuredProducts[1].image}
                alt={featuredProducts[1].product.name}
                width={400}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                  {featuredProducts[1].product.name}
                </h3>
                <p className="text-center text-xs sm:text-sm px-2">
                  {getProductDescriptionSnippet(1, 100)}
                  ...
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 1 full-width image */}
          <div className="group relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
            <CldImage
              src={featuredProducts[2].image}
              alt={featuredProducts[2].product.name}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            {/* Hover overlay with text */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4 text-center">
                {featuredProducts[2].product.name}
              </h3>
              <p className="text-center text-sm sm:text-base px-2 max-w-md">
                {getProductDescriptionSnippet(2, 150)}
                ...
              </p>
            </div>
          </div>

          {/* Row 3: 2 images side by side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="group relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
              <CldImage
                src={featuredProducts[3].image}
                alt={featuredProducts[3].product.name}
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                  {featuredProducts[3].product.name}
                </h3>
                <p className="text-center text-xs sm:text-sm px-2">
                  {getProductDescriptionSnippet(3, 100)}
                  ...
                </p>
              </div>
            </div>
            <div className="group relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
              <CldImage
                src={featuredProducts[4].image}
                alt={featuredProducts[4].product.name}
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 text-center">
                  {featuredProducts[4].product.name}
                </h3>
                <p className="text-center text-xs sm:text-sm px-2">
                  {getProductDescriptionSnippet(4, 100)}
                  ...
                </p>
              </div>
            </div>
          </div>

          {/* Row 4: 1 full-width image */}
          <div className="group relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
            <CldImage
              src={featuredProducts[5].image}
              alt={featuredProducts[5].product.name}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            {/* Hover overlay with text */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4 text-center">
                {featuredProducts[5].product.name}
              </h3>
              <p className="text-center text-sm sm:text-base px-2 max-w-md">
                {getProductDescriptionSnippet(5, 150)}
                ...
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Original 2-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {/* Left Side - 2 images on top, 1 below */}
          <div className="space-y-6">
            {/* Top Row - 2 images side by side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative h-80 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
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
                  <h3 className="text-h3 text-white mb-3 text-center">
                    {featuredProducts[0].product.name}
                  </h3>
                  <p className="text-center text-body-small px-2">
                    {getProductDescriptionSnippet(0, 120)}
                    ...
                  </p>
                </div>
              </div>
              <div className="group relative h-80 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
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
                  <h3 className="text-h3 text-white mb-3 text-center">
                    {featuredProducts[1].product.name}
                  </h3>
                  <p className="text-center text-body-small px-2">
                    {getProductDescriptionSnippet(1, 120)}
                    ...
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row - 1 wide image */}
            <div className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
              <CldImage
                src={featuredProducts[2].image}
                alt={featuredProducts[2].product.name}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-h2 text-white mb-4 text-center">
                  {featuredProducts[2].product.name}
                </h3>
                <p className="text-center text-body px-2 max-w-md">
                  {getProductDescriptionSnippet(2, 150)}
                  ...
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - 1 tall image on top, 2 below */}
          <div className="space-y-6">
            {/* Top - 1 tall image */}
            <div className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
              <CldImage
                src={featuredProducts[3].image}
                alt={featuredProducts[3].product.name}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-h2 text-white mb-4 text-center">
                  {featuredProducts[3].product.name}
                </h3>
                <p className="text-center text-body px-2 max-w-md">
                  {getProductDescriptionSnippet(3, 150)}
                  ...
                </p>
              </div>
            </div>

            {/* Bottom - 2 images side by side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative h-80 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
                <CldImage
                  src={featuredProducts[4].image}
                  alt={featuredProducts[4].product.name}
                  width={300}
                  height={320}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-h3 text-white mb-3 text-center">
                    {featuredProducts[4].product.name}
                  </h3>
                  <p className="text-center text-body-small px-2">
                    {getProductDescriptionSnippet(4, 120)}
                    ...
                  </p>
                </div>
              </div>
              <div className="group relative h-80 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
                <CldImage
                  src={featuredProducts[5].image}
                  alt={featuredProducts[5].product.name}
                  width={300}
                  height={320}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-h3 text-white mb-3 text-center">
                    {featuredProducts[5].product.name}
                  </h3>
                  <p className="text-center text-body-small px-2">
                    {getProductDescriptionSnippet(5, 120)}
                    ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default BoxDesignGallery;
