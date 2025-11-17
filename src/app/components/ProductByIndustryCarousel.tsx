"use client";

import React, { useRef, useState } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { productByIndustryData } from "../data/productByIndustryData";

const ProductByIndustryCarousel: React.FC = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(324);
  const [isMobile, setIsMobile] = useState(false);
  const [gap, setGap] = useState(24);

  // Calculate card width and gap based on screen size
  React.useEffect(() => {
    const updateCardWidth = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      if (isMobileView) {
        // Mobile: full viewport width minus container padding (16px on each side = 32px total)
        const viewportWidth = window.innerWidth;
        setCardWidth(viewportWidth - 32); // 32px for container padding
        setGap(16); // Smaller gap on mobile
      } else {
        // Desktop: fixed width and gap
        setCardWidth(300);
        setGap(24);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Choose a representative image for each industry category.
  // Prefer the first image from the first subcategory that has images; otherwise use category.image.
  const getCategoryDisplayImage = (
    category: (typeof productByIndustryData)[number]
  ): string => {
    // Direct overrides for remaining boxes - always use these images for the specified cards
    const directCategoryOverrides: Record<string, string> = {
      "Cosmetic Boxes": "Display-Cosmetic-Boxes-1_qorgwe",
      "Food Boxes": "Custom-Burger-Boxes-1_k09ujk",
      "Gift Boxes": "Large-Gift-Boxes-2_tlo55s",
      "Retail Boxes": "Retail-Boxes-1_e0snxl",
      "Candle Boxes": "Candle-Boxes-3_jwwwiz",
      "Candle Box": "Candle-Boxes-3_jwwwiz",
      "Shipping Boxes": "Black-Shipping-Boxes-2_qxrrap",
    };
    if (directCategoryOverrides[category.name]) {
      return directCategoryOverrides[category.name];
    }

    // Fallback images for specific subcategory names that lack images in data
    const subcategoryFallbackImageMap: Record<string, string> = {
      "Vape Boxes": "Vape-Boxes-2_npdki3",
      "E-liquid Bottle Boxes": "E-Liquid-Bottle-Boxes-2_qjrkus",
      "Custom Pen Boxes": "Custom_Pen_Boxes_2_pfqmnc",
      "Christmas Boxes with Lids": "Christmas_Boxes_with_Lids_2_sz6gc0",
    };
    // Fallback images for specific industry category names
    const categoryFallbackImageMap: Record<string, string> = {
      "Stationery Boxes": "Custom_Pen_Boxes_2_pfqmnc",
      "Christmas Boxes": "Christmas_Boxes_with_Lids_2_sz6gc0",
      "Chocolate Boxes": "Chocolate_box_2_kfnskd",
      "Cereal Boxes": "cereal_box_3_bdi3jq",
      "Pizza Boxes": "14_inch_pizza_box_1_egqkcw",
      "Vape Boxes": "Vape-Boxes-2_npdki3",
      "E-liquid Boxes": "E-Liquid-Bottle-Boxes-2_qjrkus",
    };

    if (Array.isArray(category.subcategories)) {
      for (const sub of category.subcategories) {
        if (Array.isArray(sub.images) && sub.images.length > 0) {
          return sub.images[0]; // pick one image from the available 3
        }
        // If no images, try fallback map by subcategory name
        if (subcategoryFallbackImageMap[sub.name]) {
          return subcategoryFallbackImageMap[sub.name];
        }
      }
    }
    // If none found from subcategories, try category-level fallback
    if (categoryFallbackImageMap[category.name]) {
      return categoryFallbackImageMap[category.name];
    }
    // Final fallback to category.image from data
    return category.image;
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < productByIndustryData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      <div className="w-full">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center lg:text-left mb-12">
            <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
              <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
              PRODUCT BY INDUSTRY
            </div>
            <h2 className="text-h2 text-heading-primary mb-6 leading-tight max-w-3xl mx-auto lg:mx-0">
              Choose the Right Box for Your Industry
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-8 lg:mb-0">
                Explore custom packaging boxes designed for every type of
                industry. Each box is crafted to match your product’s needs,
                offering style, strength, and perfect presentation.
              </p>

              {/* Navigation Buttons - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex justify-end gap-4">
                {/* Left Arrow Button */}
                <button
                  onClick={slideLeft}
                  disabled={currentIndex === 0}
                  className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                    currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={slideRight}
                  disabled={currentIndex === productByIndustryData.length - 1}
                  className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                    currentIndex === productByIndustryData.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full mb-8 overflow-hidden">
          <div className={isMobile ? "px-4" : "md:px-0"}>
            <div
              ref={cardsContainerRef}
              className="flex transition-transform duration-500 ease-in-out md:justify-center"
              style={{
                transform: isMobile 
                  ? `translateX(-${currentIndex * (cardWidth + gap)}px)`
                  : `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                gap: `${gap}px`,
              }}
            >
              {productByIndustryData.map((category, cardIndex) => (
                <div
                  key={cardIndex}
                  className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
                  style={{
                    width: isMobile ? `${cardWidth}px` : "300px",
                  }}
                >
                <Link href={`/products/product-by-industry/${category.slug}`}>
                  <CldImage
                    src={getCategoryDisplayImage(category)}
                    alt={category.name}
                    width={400}
                    height={400}
                    className="w-full h-80 sm:h-96 md:h-64 object-cover rounded-t-lg"
                  />
                </Link>
                <div className="p-5">
                  <Link href={`/products/product-by-industry/${category.slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-teal-deep)] line-clamp-2 min-h-[3.5rem] flex items-start transition-colors duration-200">
                      {category.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 line-clamp-2">
                    {category.description ||
                      `Premium ${category.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`}
                  </p>
                  <Link
                    href={`/products/product-by-industry/${category.slug}`}
                    className="inline-flex justify-end items-center text-sm font-semibold text-[var(--color-teal-deep)] hover:text-[var(--color-turquoise-bright)] transition-colors duration-200 group-hover:text-[var(--color-teal-deep)]"
                  >
                    View Product
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 18 6-6-6-6"
                      />
                    </svg>
                  </Link>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Buttons - Shown only on mobile */}
        <div className="flex lg:hidden justify-center gap-4 mb-8">
          {/* Left Arrow Button */}
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={slideRight}
            disabled={currentIndex === productByIndustryData.length - 1}
            className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
              currentIndex === productByIndustryData.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductByIndustryCarousel;
