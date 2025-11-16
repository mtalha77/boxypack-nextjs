'use client';

import React, { useState } from 'react';
import LightBlueBackground from '../../UI/LightBlueBackground';

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQSectionProps {
  faq?: {
    eyebrow?: string;
    heading?: string;
    items: FAQItem[];
  };
}

const ProductFAQSection: React.FC<ProductFAQSectionProps> = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  const toggleIndex = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <LightBlueBackground>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {(faq.eyebrow || faq.heading) && (
          <div className="text-center mb-14 space-y-6">
            {faq.eyebrow && (
              <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full">
                {faq.eyebrow}
              </span>
            )}
            {faq.heading && (
              <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight">
                {faq.heading}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-4">
          {faq.items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={item.question} className="border border-slate-200 rounded-2xl bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-[#0c2a30]">{item.question}</span>
                  <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0c6b76]/10 text-[#0c6b76]">
                    {isActive ? '-' : '+'}
                  </span>
                </button>
                {isActive && (
                  <div className="px-6 pb-5 text-base text-[#2f2f2f]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default ProductFAQSection;
