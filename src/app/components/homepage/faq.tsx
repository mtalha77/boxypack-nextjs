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
      question: "Can I get an instant quote for my order?",
      answer: "Yes, you can get an instant quote right from our website. Just choose your box size, material, and quantity, and our system will calculate pricing in real time. You can also upload your logo or artwork to see how it fits your design. This helps you know the exact cost before ordering, saving time and avoiding surprises later. Our support team can guide you through any special quote requests."
    },
    {
      question: "What types of packaging can I order from BoxyPack?",
      answer: "At BoxyPack, you can order a wide range of custom packaging boxes including mailer boxes, rigid boxes, folding cartons, and shipping boxes. Each style is fully customizable in size, color, and material. Whether you need strong packaging for deliveries or stylish retail boxes for store displays, we've got you covered. Every box type is designed to protect your products while reflecting your brand's identity."
    },
    {
      question: "How does the online 3D design tool work?",
      answer: "Our 3D design tool helps you see your box come to life before you order. You can upload your artwork, add your logo, and choose colors or finishes. As you make changes, the preview updates instantly so you can see exactly how your custom packaging boxes will look. It also shows live pricing updates, giving you full control over both design and budget, all in one easy-to-use tool."
    },
    {
      question: "Can I submit my own design file?",
      answer: "Yes, absolutely. Suppose you've already created a design using Adobe Illustrator or any other design software. In that case, you can upload your dieline directly through our website. Our design team reviews every file carefully for print accuracy, bleed areas, and resolution. If we notice anything that might affect print quality, we'll reach out before production starts. This ensures your custom boxes look exactly how you imagined: sharp, clean, and professional."
    },
    {
      question: "Will I receive a proof before production?",
      answer: "Yes, you'll always receive a digital proof before we print anything. Within 24 hours of placing your order, our prepress team will send you a 2D preview showing your final box layout. You can review every detail, logo placement, color alignment, and text spacing before giving approval. Once you're fully satisfied, production begins. This step ensures your custom packaging boxes are printed perfectly the first time."
    },
    // Right Column
    
    {
      question: "How long will my order take?",
      answer: "Most standard orders take about 10 business days for production after proof approval. Rush orders can be completed in around 7 business days. Shipping time depends on your location, usually between 1 to 7 days. If you're working with a deadline, our team can help you plan your order to make sure it arrives on time. Every BoxyPack order is tracked from production to delivery."
    },
    {
      question: "Can you print inside the boxes, too?",
      answer: "Yes, we can print both inside and outside of your custom packaging boxes. Inside printing creates a great unboxing experience and adds an extra touch of creativity. You can print brand messages, patterns, or product instructions on the interior panels. It's perfect for brands that want customers to feel something special when opening their package. Our team can help you design both sides for a seamless, branded look."
    },
    {
      question: "How can I be sure my artwork is printable?",
      answer: "Before printing, our expert prepress team reviews your artwork carefully. We check image resolution, color setup, alignment, and bleed areas to make sure every design prints clearly. If we spot any issues that might reduce print quality, we'll contact you with suggestions. You'll get a digital proof to approve before anything goes to print, ensuring your custom boxes look professional and match your brand colors perfectly."
    },
    {
      question: "What factors affect my box pricing?",
      answer: "The main factors that affect pricing include your box size, material type, ink coverage, and order quantity. Larger boxes or full-color prints may cost slightly more, while bulk orders often qualify for lower unit pricing. We also consider any custom add-ons like foil, embossing, or lamination. At BoxyPack, we're transparent about all pricing. You can get an instant estimate online or contact us for a tailored quote."
    },
    {
      question: "What makes BoxyPack different from other packaging companies?",
      answer: "BoxyPack focuses on both creativity and quality. We make every box to fit your product, not a standard template. Our team uses premium materials, modern printing, and detailed finishing to make sure every order looks professional and lasts long. We also provide personal support from design to delivery. Whether you're ordering 50 boxes or 5,000, you'll get the same attention, care, and consistent results that keep customers returning."
    }
  ];

  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-h2 md:text-4xl lg:text-5xl font-bold text-heading-primary mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            Find quick answers to the most common questions about our custom packaging boxes. Every order is different, and we&apos;re here to help.
          </p>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-5">
            {faqData.slice(0, 5).map((faq, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-300 ${
                  activeFAQs.includes(index) ? 'pb-4' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-start justify-between gap-4 py-3 group-hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-all duration-200"
                >
                  <h3 className={`text-base font-medium text-gray-800 flex-1 leading-snug transition-colors duration-200 ${
                    activeFAQs.includes(index) ? 'text-[#0c6b76]' : 'group-hover:text-[#0c6b76]'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeFAQs.includes(index)
                      ? 'bg-[#0c6b76] text-white'
                      : 'bg-gray-200 text-gray-500 group-hover:bg-[#0c6b76] group-hover:text-white'
                  }`}>
                    {activeFAQs.includes(index) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <div className={`px-2 transition-all duration-400 ease-in-out ${
                  activeFAQs.includes(index) 
                    ? 'max-h-96 opacity-100 mt-2' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {faqData.slice(5, 10).map((faq, index) => (
              <div 
                key={index + 5} 
                className={`group transition-all duration-300 ${
                  activeFAQs.includes(index + 5) ? 'pb-4' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index + 5)}
                  className="w-full text-left flex items-start justify-between gap-4 py-3 group-hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-all duration-200"
                >
                  <h3 className={`text-base font-medium text-gray-800 flex-1 leading-snug transition-colors duration-200 ${
                    activeFAQs.includes(index + 5) ? 'text-[#0c6b76]' : 'group-hover:text-[#0c6b76]'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeFAQs.includes(index + 5)
                      ? 'bg-[#0c6b76] text-white'
                      : 'bg-gray-200 text-gray-500 group-hover:bg-[#0c6b76] group-hover:text-white'
                  }`}>
                    {activeFAQs.includes(index + 5) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <div className={`px-2 transition-all duration-400 ease-in-out ${
                  activeFAQs.includes(index + 5) 
                    ? 'max-h-96 opacity-100 mt-2' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
