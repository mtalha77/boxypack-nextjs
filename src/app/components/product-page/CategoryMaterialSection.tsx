import React from "react";
import { categoryMaterialData } from "../../data/categoryMaterialData";
import { MainCategory } from "../../data/navigationData";

interface CategoryMaterialSectionProps {
  category?: MainCategory;
  slug: string;
}

const CategoryMaterialSection: React.FC<CategoryMaterialSectionProps> = ({
  category,
  slug,
}) => {
  // Get content for this category slug
  const content = categoryMaterialData[slug];

  // If no content found, don't render
  if (!content) {
    return null;
  }

  return (
    <section className="pt-12 pb-16 bg-gradient-to-b from-white to-[#f0f7fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl space-y-10">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight">
              {content.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] rounded-full" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-8 text-[#2f2f2f] text-pretty">
              {content.paragraph1}
            </p>
            <p className="text-lg md:text-xl leading-8 text-[#2f2f2f] text-pretty">
              {content.paragraph2}
            </p>
          </div>

          {/* Features */}
          {content.features && content.features.length > 0 && (
            <div className="space-y-4 pt-6">
              <p className="text-lg font-semibold text-[#0c6b76]">
                We also offer multiple finishes and design options to suit your style:
              </p>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-full">
                {content.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#d2e4eb] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-base md:text-lg leading-7 text-[#2f2f2f] text-pretty">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Decorative Element */}
          <div className="pt-8 flex justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#0c6b76]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryMaterialSection;

