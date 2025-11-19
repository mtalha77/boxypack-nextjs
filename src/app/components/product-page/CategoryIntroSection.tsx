import React from "react";
import { categoryIntroData } from "../../data/categoryIntroData";
import { MainCategory } from "../../data/navigationData";

interface CategoryIntroSectionProps {
  category?: MainCategory;
  slug: string;
}

const CategoryIntroSection: React.FC<CategoryIntroSectionProps> = ({
  category,
  slug,
}) => {
  // Get content for this category slug
  const content = categoryIntroData[slug];

  // If no content found, don't render
  if (!content) {
    return null;
  }

  const categoryName = category?.name || slug.replace(/-/g, " ");

  return (
    <section className="pt-12 pb-8 bg-gradient-to-b from-[#f9f2eb] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
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

          {/* Decorative Element */}
          <div className="pt-8 flex justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#0c6b76]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryIntroSection;

