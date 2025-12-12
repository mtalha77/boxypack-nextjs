"use client";

import React from "react";
import { 
  Shield, 
  Palette, 
  Package, 
  Star, 
  Zap, 
  Heart
} from "lucide-react";
import LightBlueBackground from "../../UI/LightBlueBackground";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strong & Durable",
      description: "Our custom packaging boxes are built with premium materials to keep your products safe during shipping and storage.",
      gradient: "from-[#0c6b76] to-[#0ca6c2]"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Fully Customizable",
      description: "You choose the size, shape, and finish. We bring your vision to life with precision printing and professional design.",
      gradient: "from-[#97602f] to-[#8B4513]"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Perfect Fit",
      description: "Each box is made to match your product and your purpose, ensuring a perfect fit that showcases your brand beautifully.",
      gradient: "from-[#0c6b76] to-[#0ca6c2]"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brand Impact",
      description: "Make customers remember your brand every time they open the box. Our boxes create lasting impressions that build loyalty.",
      gradient: "from-[#97602f] to-[#8B4513]"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "Quick production times without compromising quality. Get your custom boxes delivered on time, every time.",
      gradient: "from-[#0c6b76] to-[#0ca6c2]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Care & Attention",
      description: "We bring your boxes to life with care. Every detail matters, from design to printing to final delivery.",
      gradient: "from-[#97602f] to-[#8B4513]"
    }
  ];

  return (
    <LightBlueBackground className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full mb-6">
            WHY CHOOSE US
          </span>
          <h2 className="text-h2 md:text-4xl lg:text-5xl font-bold text-heading-primary mb-6 leading-tight">
            Boxes That Build Real Brands
          </h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            At BoxyPack, we make custom boxes that mean more. Each one is made to match your product and your purpose. You choose the size, shape, and finish, and we bring it to life with care. Our custom packaging boxes are strong, neat, and printed clearly. They keep your products safe and make customers remember your brand every time they open the box.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#0c6b76]/30 transform hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className="mb-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-h4 md:text-h3 text-heading-primary mb-3 md:mb-4 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-body text-body-primary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </LightBlueBackground>
  );
};

export default WhyChooseUs;

