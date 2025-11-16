"use client";

import React from "react";
import { Check, Star, Truck, Shield, Palette } from "lucide-react";
import LightBlueBackground from "../../UI/LightBlueBackground";

interface FeaturesSectionProps {
  productData: {
    name: string;
    whyChooseUs?: {
      eyebrow?: string;
      heading?: string;
      description?: string;
      features?: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    features?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

const iconLookup: Record<string, React.ReactNode> = {
  shield: <Shield className="w-8 h-8" />,
  palette: <Palette className="w-8 h-8" />,
  truck: <Truck className="w-8 h-8" />,
  check: <Check className="w-8 h-8" />,
  star: <Star className="w-8 h-8" />,
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ productData }) => {
  const whyChooseUs = productData.whyChooseUs || {};
  const sectionFeatures =
    whyChooseUs.features && whyChooseUs.features.length > 0
      ? whyChooseUs.features
      : productData.features || [];

  const eyebrow = whyChooseUs.eyebrow || "Why Choose Us";
  const heading =
    whyChooseUs.heading || `${productData.name} That Build Real Brands`;
  const description =
    whyChooseUs.description ||
    `At BoxyPack, we engineer ${productData.name.toLowerCase()} that combine on-brand presentation with real-world durability. Every project is guided by packaging strategists who know how to transform boxes into repeat business.`;

  const getIcon = (iconName: string) =>
    iconLookup[iconName] || <Shield className="w-8 h-8" />;

  return (
    <LightBlueBackground>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full mb-6">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight mb-6">
            {heading}
          </h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectionFeatures.length > 0 ? (
            sectionFeatures.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
              >
                {/* Icon container */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                    {getIcon(feature.icon)}
                  </div>
                </div>
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-h3 text-heading-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-body-muted text-body">
                No features available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default FeaturesSection;
