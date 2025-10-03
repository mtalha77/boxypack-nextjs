'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeFAQs, setActiveFAQs] = useState<number[]>([0, 5]); // Top 2 FAQs active by default
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set initial state based on screen size
  React.useEffect(() => {
    if (isMobile) {
      setActiveFAQs([0]); // Only first FAQ on mobile
    } else {
      setActiveFAQs([0, 5]); // First FAQ in both columns on desktop
    }
  }, [isMobile]);

  const toggleFAQ = (index: number) => {
    setActiveFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    // Left Column
    {
      question: "What types of boxes can I order?",
      answer: "We provide mailers, shipping, product, and rigid boxes. We also create pouches and shopping bags. Each option is designed for different business needs. You can choose by material or by industry type."
    },
    {
      question: "Can I fully customize my box?",
      answer: "Yes, every box can be customized. Select the size, material, and finish you prefer. Add your own design to reflect your brand identity. Inside and outside printing is also available for extra impact."
    },
    {
      question: "Do you offer sustainable box options?",
      answer: "Yes, we provide boxes made from recyclable materials. These options give strength and style while showing care for the environment. Many brands use them to connect with responsible customers."
    },
    {
      question: "How long does production take?",
      answer: "Production time depends on order size and design details. We keep processes simple and steady to deliver on time. Urgent orders may qualify for faster completion options if needed."
    },
    {
      question: "Can I print inside and outside the box?",
      answer: "Yes, both sides can be printed. This creates a more memorable unboxing moment. Your design will stand out clearly from every angle."
    },
    // Right Column
    
    {
      question: "What printing quality can I expect?",
      answer: "We provide clear, sharp, and lasting results. Our methods ensure strong colors and smooth lines. Each project is reviewed to maintain steady and trusted quality."
    },
    {
      question: "Can I review my design before production begins?",
      answer: "Yes, each order includes a digital proof. You can review artwork, confirm details, and request changes. Printing starts only after you approve the proof."
    },
    {
      question: "Is there a minimum order quantity?",
      answer: "Order minimums vary by product type. We keep them fair for small and large businesses. Our team can guide you toward the most cost-effective quantity."
    },
    {
      question: "Do you provide design support?",
      answer: "Yes, our team provides design help. We guide artwork preparation and offer layout advice. This support is available for both new and experienced customers."
    },
    {
      question: "How can I place my first order?",
      answer: "Getting started is simple. Choose your box style, add design details, and review. Confirm your order, and our team will guide you through every step."
    }
  ];

  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-heading-primary mb-6">Frequently Asked Questions</h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            Below are answers to common questions about custom boxes. Each project is unique, so feel free to contact our team anytime for more details or personal support.
          </p>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {faqData.slice(0, 5).map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between group"
                >
                  <h3 className="text-h4 text-body-primary group-hover:text-heading-primary transition-colors duration-200">
                    {faq.question}
                  </h3>
                  {activeFAQs.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-[#0c6b76] transition-colors duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#0c6b76] transition-colors duration-200" />
                  )}
                </button>
                
                <div className={`mt-4 transition-all duration-300 ease-in-out ${
                  activeFAQs.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <p className="text-body text-body-primary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqData.slice(5, 10).map((faq, index) => (
              <div key={index + 5} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() => toggleFAQ(index + 5)}
                  className="w-full text-left flex items-center justify-between group"
                >
                  <h3 className="text-h4 text-body-primary group-hover:text-heading-primary transition-colors duration-200">
                    {faq.question}
                  </h3>
                  {activeFAQs.includes(index + 5) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-[#0c6b76] transition-colors duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#0c6b76] transition-colors duration-200" />
                  )}
                </button>
                
                <div className={`mt-4 transition-all duration-300 ease-in-out ${
                  activeFAQs.includes(index + 5) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <p className="text-body text-body-primary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
