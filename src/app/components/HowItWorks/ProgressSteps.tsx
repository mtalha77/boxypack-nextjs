'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';

const ProgressSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We listen to your needs, goals, and product details, then guide you toward the right packaging solution.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 2,
      title: "Design Setup",
      description: "Our experts prepare dielines, templates, and artwork checks, ensuring your custom packaging looks perfect before production begins.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 3,
      title: "Production",
      description: "We manufacture with precision, using strong materials and sharp printing to create boxes that protect and impress.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 4,
      title: "Delivery",
      description: "Your order arrives safely, on time, and ready to showcase your brand in front of customers with confidence.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-heading-primary">
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className={`${step.bgColor} rounded-2xl p-8 shadow-lg`}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Left Side - Content */}
                  <div className="flex-1 space-y-6">
                    {/* Step Number and Title */}
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-[#1e40af] border-4 border-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-h3 font-bold text-white">{step.number}</span>
                        </div>
                        {/* Dotted line extending down from the number circle - only show if not last step */}
                        {step.number < steps.length && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-0.5 h-16 border-l-2 border-dashed border-white"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-h3 text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-body-large text-white/90">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="lg:w-80 w-full">
                    <div className="relative h-64 rounded-xl overflow-hidden shadow-xl bg-gray-800">
                      <CldImage
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgressSteps;
