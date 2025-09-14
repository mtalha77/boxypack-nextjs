'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeFAQs, setActiveFAQs] = useState<number[]>([0, 5]); // Top 2 FAQs active by default

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
      question: "Can I get an instant quote for my order?",
      answer: "Yes! Our 3D design tool gives you real-time unit price updates as you customize your box. You can adjust artwork, text, and colors to see exactly how they affect your pricing before placing your order."
    },
    {
      question: "What packaging products can I order from Packlane?",
      answer: "We offer Shipping Boxes, Mailer Boxes, and Product Boxes. All come in stock and custom sizes, suitable for both retail and e-commerce use. Our box designer tool helps you customize each type to your needs."
    },
    {
      question: "What if I'm designing in Adobe Illustrator?",
      answer: "You can submit your files through our Dieline Upload tool, or email us your dielines for quotes. You can also get rough quotes by using solid colors on our 3D design tool while working on your final artwork."
    },
    {
      question: "How does your 3D box designer work?",
      answer: "Our 3D designer lets you customize all specifications and see real-time price updates. You can proceed to checkout, save your design for later, or share it with your team for feedback before ordering."
    },
    {
      question: "What is the turnaround time on my order?",
      answer: "Standard turnaround is 10 business days, with rush options available at 7 business days. Transit time varies by location. Special finishes and bulk orders may have additional delays. We recommend ordering early for time-sensitive projects."
    },
    // Right Column
    {
      question: "What happens after I place my order? Do I get a proof?",
      answer: "Yes! Our Prepress team reviews your design within 24 hours and sends you a 2D digital proof. They'll help finalize any design details and ensure everything is ready for production."
    },
    {
      question: "Will I see a proof for my order?",
      answer: "Absolutely. You'll receive a digital proof within 24 hours of checkout, giving you time to review and approve before we begin printing."
    },
    {
      question: "How do I know if my art is printable?",
      answer: "Our Prepress team reviews all artwork for technical concerns like resolution, blurriness, splits, lines, and bleeds. They'll note any issues that need attention and help you fix them. Note: They don't check spelling/grammar or provide subjective design feedback."
    },
    {
      question: "Can you print inside the boxes?",
      answer: "Yes! We can print on the inside of corrugated box styles including Mailers, Shipping Boxes, and Tuck Tops. Product Boxes are exterior-only. Use our online designer or submit 2D dieline templates for custom interior/exterior designs."
    },
    {
      question: "What choices affect my pricing?",
      answer: "Pricing is influenced by dimensions, box style, ink coverage, box material, and quantity. We offer volume discounts for orders of 5,000+. Our customer support team can help answer any specific pricing questions you have."
    }
  ];

  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-heading-primary mb-6">Frequently Asked Questions</h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            Below you&apos;ll find answers to some common questions around creating a custom box. Every order is little different though, so don&apos;t hesitate to reach out with anything else you might be wondering.
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
