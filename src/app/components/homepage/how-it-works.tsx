"use client";

import React from "react";
import { MessageCircle, Palette, Factory, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
}

const ProgressSteps: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Consultation",
      description:
        "We listen to your needs, goals, and product details, then guide you toward the right packaging solution.",
      icon: MessageCircle,
      bgColor: "bg-[#0c6b76]",
    },
    {
      number: 2,
      title: "Design Setup",
      description:
        "Our experts prepare dielines, templates, and artwork checks, ensuring your custom packaging looks perfect before production begins.",
      icon: Palette,
      bgColor: "bg-[#0c6b76]",
    },
    {
      number: 3,
      title: "Production",
      description:
        "We manufacture with precision, using strong materials and sharp printing to create boxes that protect and impress.",
      icon: Factory,
      bgColor: "bg-[#0c6b76]",
    },
    {
      number: 4,
      title: "Delivery",
      description:
        "Your order arrives safely, on time, and ready to showcase your brand in front of customers with confidence.",
      icon: Truck,
      bgColor: "bg-[#0c6b76]",
    },
  ];

  return (
    <section id="our-process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-left mb-16">
          <h2 className="text-h2 font-bold text-heading-primary mb-4">
            How it Works
          </h2>
          <h3 className="text-h3 text-heading-primary mb-6">
            Simple Steps. Perfect Packaging. Every Time.
          </h3>
          <p className="text-body-large text-body-primary max-w-4xl">
            From first idea to final delivery, BoxyPack makes packaging simple. Clear steps, real support, and flawless results every time.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-left mb-12">
          <h2 className="text-h2 font-bold text-heading-primary">
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className={`${step.bgColor} rounded-2xl p-6 shadow-lg`}>
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {/* Left Side - Content */}
                  <div className="flex-1 space-y-4">
                    {/* Step Number and Title */}
                    <div className="flex items-start gap-5">
                      <div className="relative">
                        <div className="w-14 h-14 bg-[#8B4513] border-4 border-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-h4 font-bold text-white">
                            {step.number}
                          </span>
                        </div>
                        {/* Dotted line extending down from the number circle - only show if not last step */}
                        {step.number < steps.length && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-14 w-0.5 h-12 border-l-2 border-dashed border-white"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-h4 text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-body text-white/90">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Icon */}
                  <div className="lg:w-64 w-full flex items-center justify-center">
                    <div className="relative h-40 w-full rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <step.icon
                        className="w-24 h-24 text-white"
                        strokeWidth={1.5}
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
