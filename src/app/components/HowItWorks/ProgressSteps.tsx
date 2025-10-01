'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';

const ProgressSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Pick Your Box Style",
      description: "Start by selecting the box style that matches your product. Options include mailer, product, rigid, shipping, pouches, or shopping bags. Each serves different needs, from online sales to retail shelves. Picking the correct style makes sure your product is packed properly, looks polished, and arrives safely to customers.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 2,
      title: "Choose Box By Material Or Industry",
      description: "BoxyPack allows you to select by material type or by industry focus. Pick sturdy corrugated boards for shipping or premium rigid boards for luxury items. Choose by industry needs such as food, fashion, or retail. This ensures packaging matches product demands and highlights your brand effectively.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 3,
      title: "Select Size And Fit",
      description: "Your product size decides the box fit. We offer ready sizes or custom dimensions to match exact needs. Choosing the right fit avoids damage, saves space, and improves presentation. Accurate sizing ensures every box works well for both small and large product orders.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 4,
      title: "Set Quantity And Get a Quote",
      description: "Decide the quantity of boxes you need for production. Entering quantity gives instant pricing details that match your choices. This step helps plan budgets, compare options, and confirm costs before moving ahead. Clear pricing ensures you make informed decisions with no hidden surprises.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 5,
      title: "Design Your Custom Box",
      description: "Add your brand identity with easy design options. Upload logos, artwork, colors, or text. You can print inside and outside for a stronger impression. Custom design turns every box into more than packaging. It builds customer connection, makes unboxing memorable, and shows care for every detail.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 6,
      title: "Review And Approve Order",
      description: "Check all order details before we begin production. You will see proof to confirm design, size, and material. This step prevents mistakes and ensures accuracy. If changes are needed, our team will guide you. Approval guarantees the final product matches your vision and brand needs.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 7,
      title: "Confirm Order And Receive Boxes",
      description: "After approval, production begins with a focus on quality and precision. Once completed, boxes are shipped directly to your chosen location. They arrive safely, ready for use. Every box reflects your brand, protects your product, and creates a presentation that builds trust and strengthens customer relationships immediately.",
      image: "products-box-img_x8vu4b",
      bgColor: "bg-[#0c6b76]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

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
                        {/* Dotted line extending down from the number circle */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-0.5 h-16 border-l-2 border-dashed border-white"></div>
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-h2 text-body-primary mb-4">
              Ready To Build Your Custom Box Journey AI BoxyPack?
            </h3>
            <p className="text-body-large text-body-secondary mb-8">
              Join growing brands that trust BoxyPack with every packaging need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-brown-rustic hover:bg-[#97602f] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Now
              </button>
              <button className="px-8 py-4 border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white font-semibold rounded-full transition-colors duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSteps;
