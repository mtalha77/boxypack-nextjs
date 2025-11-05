"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import LightBlueBackground from "../../UI/LightBlueBackground";

const MoreThanPackage: React.FC = () => {
  return (
    <LightBlueBackground>
      <section className="relative py-0 md:py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Side - Custom Packaging Image */}
            <div className="relative">
              <CldImage
                src="Box-6_vm3fmh"
                alt="Custom Packaging Boxes - BoxyPack kraft boxes with professional design"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Right Side - Text and Buttons */}
            <div className="space-y-6 md:space-y-8 lg:pl-4">
              {/* Headline */}
              <h2 className="text-h2 text-heading-primary leading-tight">
                Every Packaging Box Tells Your Story
              </h2>

              {/* Body Text */}
              <p className="text-body text-body-primary">
                At BoxyPack, we see packaging as more than a box. It’s the first
                thing people see, the first thing they remember. Our custom
                packaging and boxes are made to fit your product and your story.
                Each design is built with care, shaped by real ideas, and
                printed to perfection. Every custom box shows your effort and
                pride. Take a look below and find the perfect box that brings
                your product and brand to life.
              </p>

              <div className="space-y-4">
                {/* Primary CTA Button */}
                <button className="w-full lg:w-auto font-semibold bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white py-4 px-8 cursor-pointer rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  FIND OUT WHAT MAKES OUR BOXES SPECIAL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LightBlueBackground>
  );
};

export default MoreThanPackage;
