'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AllProducts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    // Mailer Boxes
    { 
      title: "Standard Mailer Boxes", 
      image: "/img/mailer-box.jpg", 
      category: "Mailer Boxes",
      description: "Perfect for e-commerce shipping with secure closure and professional appearance"
    },
    { 
      title: "Custom Mailer Boxes", 
      image: "/img/mailer-box.jpg", 
      category: "Mailer Boxes",
      description: "Branded packaging solutions tailored to your specific product dimensions"
    },
    { 
      title: "Eco-Friendly Mailers", 
      image: "/img/mailer-box.jpg", 
      category: "Mailer Boxes",
      description: "Sustainable packaging made from recycled materials for environmentally conscious brands"
    },
    { 
      title: "Kraft Mailer Boxes", 
      image: "/img/mailer-box.jpg", 
      category: "Mailer Boxes",
      description: "Natural brown kraft paper boxes with rustic appeal and excellent durability"
    },
    
    // Product Boxes
    { 
      title: "Product Display Boxes", 
      image: "/img/product-box-2.jpg", 
      category: "Product Boxes",
      description: "Showcase your products with window cutouts and premium finishing options"
    },
    { 
      title: "Custom Product Boxes", 
      image: "/img/product-box-2.jpg", 
      category: "Product Boxes",
      description: "Fully customized boxes designed to perfectly fit your product specifications"
    },
    { 
      title: "Luxury Product Boxes", 
      image: "/img/product-box-2.jpg", 
      category: "Product Boxes",
      description: "Premium packaging with foiling, embossing, and high-end materials for luxury brands"
    },
    { 
      title: "Gift Product Boxes", 
      image: "/img/product-box-2.jpg", 
      category: "Product Boxes",
      description: "Elegant gift packaging with ribbons, inserts, and special finishing touches"
    },
    
    // Rigid Boxes
    { 
      title: "Premium Rigid Boxes", 
      image: "/img/Product-Packaging-Boxes.webp", 
      category: "Rigid Boxes",
      description: "High-quality rigid construction with premium materials for maximum protection"
    },
    { 
      title: "Custom Rigid Boxes", 
      image: "/img/Product-Packaging-Boxes.webp", 
      category: "Rigid Boxes",
      description: "Tailored rigid boxes with custom dimensions, colors, and printing options"
    },
    { 
      title: "Luxury Rigid Boxes", 
      image: "/img/Product-Packaging-Boxes.webp", 
      category: "Rigid Boxes",
      description: "Ultra-premium rigid boxes with velvet lining, magnetic closure, and gold foiling"
    },
    { 
      title: "Gift Rigid Boxes", 
      image: "/img/Product-Packaging-Boxes.webp", 
      category: "Rigid Boxes",
      description: "Sophisticated gift boxes with compartments, inserts, and luxury finishing"
    },
    
    // Shipping Boxes
    { 
      title: "Standard Shipping Boxes", 
      image: "/img/shipping-box.jpg", 
      category: "Shipping Boxes",
      description: "Durable corrugated boxes designed for safe transportation of various products"
    },
    { 
      title: "Custom Shipping Boxes", 
      image: "/img/shipping-box.jpg", 
      category: "Shipping Boxes",
      description: "Branded shipping boxes with your logo and custom dimensions for optimal fit"
    },
    { 
      title: "Eco-Friendly Shipping", 
      image: "/img/shipping-box.jpg", 
      category: "Shipping Boxes",
      description: "Sustainable shipping solutions made from recycled and biodegradable materials"
    },
    { 
      title: "Heavy Duty Shipping", 
      image: "/img/shipping-box.jpg", 
      category: "Shipping Boxes",
      description: "Extra-strength boxes with reinforced corners for heavy and fragile items"
    },
    
    // Pouches
    { 
      title: "Stand-up Pouches", 
      image: "/img/products-box-img.png", 
      category: "Pouches",
      description: "Self-standing pouches with zipper closure for easy access and product visibility"
    },
    { 
      title: "Flat Pouches", 
      image: "/img/products-box-img.png", 
      category: "Pouches",
      description: "Space-efficient flat pouches perfect for retail display and storage"
    },
    { 
      title: "Custom Pouches", 
      image: "/img/products-box-img.png", 
      category: "Pouches",
      description: "Personalized pouches with custom printing, sizes, and closure options"
    },
    { 
      title: "Resealable Pouches", 
      image: "/img/products-box-img.png", 
      category: "Pouches",
      description: "Convenient resealable pouches to maintain freshness and extend product life"
    },
    
    // Shopping Bags
    { 
      title: "Paper Shopping Bags", 
      image: "/img/2.png", 
      category: "Shopping Bags",
      description: "Eco-friendly paper bags with handles, perfect for retail and promotional use"
    },
    { 
      title: "Plastic Shopping Bags", 
      image: "/img/2.png", 
      category: "Shopping Bags",
      description: "Durable plastic bags with custom printing for branding and marketing"
    },
    { 
      title: "Canvas Shopping Bags", 
      image: "/img/2.png", 
      category: "Shopping Bags",
      description: "Reusable canvas bags with custom designs for sustainable retail solutions"
    },
    { 
      title: "Custom Shopping Bags", 
      image: "/img/2.png", 
      category: "Shopping Bags",
      description: "Fully customized bags with your brand colors, logo, and unique design elements"
    },
    
    // Packaging Accessories
    { 
      title: "Tissue Paper", 
      image: "/img/3.png", 
      category: "Packaging Accessories",
      description: "Premium tissue paper in various colors for elegant product wrapping and protection"
    },
    { 
      title: "Bubble Wrap", 
      image: "/img/3.png", 
      category: "Packaging Accessories",
      description: "Protective bubble wrap in multiple sizes for safe shipping of fragile items"
    },
    { 
      title: "Packing Tape", 
      image: "/img/3.png", 
      category: "Packaging Accessories",
      description: "High-quality packing tape with custom printing for secure box sealing"
    },
    { 
      title: "Labels & Stickers", 
      image: "/img/3.png", 
      category: "Packaging Accessories",
      description: "Custom labels and stickers for branding, instructions, and product identification"
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !cardsContainerRef.current) return;

    // Set initial state to prevent jerky start
    gsap.set(cardsContainerRef.current, { x: 0 });

    const tl = gsap
      .timeline({
        defaults: {
          ease: "none",
          duration: 1
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
          markers: false,
          anticipatePin: 1,
          refreshPriority: -1,
          onUpdate: (self) => {
            // Smooth progress calculation
            if (!cardsContainerRef.current) return;
            const progress = self.progress;
            const maxScroll = cardsContainerRef.current.clientWidth - cardsContainerRef.current.scrollWidth;
            const currentX = progress * maxScroll;
            gsap.set(cardsContainerRef.current, { x: currentX });
          }
        }
      });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className=" bg-white relative overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ca6c2' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-screen flex flex-col justify-start pt-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
            ALL PRODUCTS
          </div>
          <h2 className="text-4xl font-bold text-[#0c6b76] mb-6 leading-tight">
            Complete Product Range
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive collection of packaging solutions including mailer boxes, product boxes, rigid boxes, shipping boxes, pouches, shopping bags, and packaging accessories.
          </p>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="horizontal-center w-full h-80 flex items-center justify-center">
            <div 
              ref={cardsContainerRef}
              className="cards-container w-full flex flex-nowrap gap-6"
            >
              {cards.map((card, cardIndex) => (
                <div 
                  key={cardIndex}
                  className="card-center bg-white rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-[#0c6b76]/10 text-[#0c6b76] text-xs font-semibold rounded-full">
                        {card.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#0c6b76] mb-3 group-hover:text-[#0ca6c2] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
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

export default AllProducts;