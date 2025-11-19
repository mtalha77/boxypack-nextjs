"use client";

import React from "react";
import { Check, Star, Truck, Shield, Palette } from "lucide-react";
import LightBlueBackground from "../../UI/LightBlueBackground";
import { whyChooseUsData } from "../../data/whyChooseUsData";

interface FeaturesSectionProps {
  productData: {
    slug: string;
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
  // First, check if there's data from the data file by slug
  const slug = productData.slug;
  const dataFileContent = slug ? whyChooseUsData[slug] : null;
  
  // Use data file content if available, otherwise fall back to productData.whyChooseUs, then defaults
  const whyChooseUsContent = dataFileContent || productData.whyChooseUs || {};
  const sectionFeatures =
    whyChooseUsContent.features && whyChooseUsContent.features.length > 0
      ? whyChooseUsContent.features
      : productData.features || [];

  const eyebrow = whyChooseUsContent.eyebrow || "Why Choose Us";
  const heading = whyChooseUsContent.heading || 
    `${productData.name} That Build Real Brands`;
  
  const closingDescription = dataFileContent?.closingDescription;

  const getIcon = (iconName: string) =>
    iconLookup[iconName] || <Shield className="w-8 h-8" />;

  return (
    <LightBlueBackground>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight mb-6">
            {eyebrow}
          </h2>
          <p className="text-body-large text-body-primary leading-relaxed max-w-4xl mx-auto">
            {heading}
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

        {/* Closing Description */}
        {closingDescription && (
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-body-large text-body-primary leading-relaxed">
              {closingDescription}
            </p>
          </div>
        )}
      </div>
    </LightBlueBackground>
  );
};

export default FeaturesSection;
