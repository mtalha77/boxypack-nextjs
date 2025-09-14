'use client';

import React from 'react';
import Image from 'next/image';

const ProgressSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Custom Shipping Boxes",
      description: "Explore our range of curated printed packaging boxes to discover the packaging solution that's right for your business. If you have any questions about available custom boxes as you browse, our dedicated team is here to help. Simply click on the Live Chat Support function, which can be found in the bottom right-hand corner of your screen.",
      image: "/img/products-box-img.png",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 2,
      title: "Request a Free Instant Quote",
      description: "Get your personalized quote in minutes! Simply provide us with your box dimensions, custom printing options, quantity requirements, and any special specifications. Our experienced team will guide you through the process and ensure you get the best pricing.",
      image: "/img/products-box-img.png",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 3,
      title: "Finalize Your Order",
      description: "Review your detailed quotation and make any necessary adjustments. Once you're satisfied with the specifications and pricing, complete your order through our secure payment portal. We accept all major payment methods for your convenience.",
      image: "/img/products-box-img.png",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 4,
      title: "Time to Make a Custom Dieline",
      description: "Our design team creates a custom dieline - an artwork template that ensures your packaging will be laid out correctly before production. This template shows exactly where folds and cut lines should be, guaranteeing perfect results.",
      image: "/img/products-box-img.png",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 5,
      title: "Get Creative with Artwork",
      description: "Add your artwork to the dieline template following our comprehensive guidelines. We'll help you with file formats, color specifications, font requirements, and image quality. Our designers will proof your artwork to ensure print-ready perfection.",
      image: "/img/products-box-img.png",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 6,
      title: "Visualize Your Packaging with Mockups",
      description: "See your packaging come to life! We create detailed 3D renderings and physical samples so you can visualize the final product. This allows you to proofread text, check materials, and make any final adjustments before production begins.",
      image: "/img/products-box-img.png",
      bgColor: "bg-[#0c6b76]"
    },
    {
      number: 7,
      title: "Roll-on Production!",
      description: "Once everything is approved, we kick off production! Our state-of-the-art facilities get to work creating your custom packaging. You'll receive regular updates throughout the manufacturing and shipping process, keeping you informed every step of the way.",
      image: "/img/products-box-img.png",
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
                      <Image
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
              Ready to Start Your Custom Packaging Journey?
            </h3>
            <p className="text-body-large text-body-secondary mb-8">
              Join thousands of satisfied customers who trust us with their packaging needs
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
