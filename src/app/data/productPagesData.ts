import { productByMaterialData } from './productByMaterialData';
import { productByIndustryData } from './productByIndustryData';
import { mylarBoxesData } from './mylarBoxesData';
import { shoppingBagsData } from './shoppingBagsData';
import { otherData } from './otherData';

export const productData = {
  'mailer-boxes': {
    name: 'Mailer Boxes',
    description: 'Our mailer boxes bring strength and style together, ideal for gifts and subscription packs. Each box protects products while giving a clean look that strengthens brand identity.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Durable Protection',
        description: 'Strong corrugated material ensures your products arrive safely'
      },
      {
        icon: 'palette',
        title: 'Custom Design',
        description: 'Full color printing and custom branding options available'
      },
      {
        icon: 'truck',
        title: 'Easy Assembly',
        description: 'Self-locking design for quick and secure packaging'
      },
      {
        icon: 'check',
        title: 'Eco-Friendly',
        description: 'Made from recyclable materials, sustainable packaging solution'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Corrugated Cardboard' },
      { label: 'Thickness', value: '200-400 GSM' },
      { label: 'Printing', value: 'Full Color CMYK' },
      { label: 'Finish', value: 'Matte/Glossy Available' },
      { label: 'Assembly', value: 'Self-Locking' },
      { label: 'Customization', value: 'Logo, Text, Graphics' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6×4×2 inches', price: '$0.45' },
      { name: 'Medium', dimensions: '10×7×3 inches', price: '$0.65' },
      { name: 'Large', dimensions: '12×9×4 inches', price: '$0.85' },
      { name: 'X-Large', dimensions: '15×11×5 inches', price: '$1.15' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Full color printing',
      'Custom logo placement',
      'Matte or glossy finish',
      'Various sizes available'
    ],
    ctaTitle: 'Ready to Get Started?',
    ctaDescription: 'Get a custom quote for your mailer boxes today. Our team is ready to help you create the perfect packaging solution.'
  },
  'product-boxes': {
    name: 'Product Boxes',
    description: 'Premium boxes crafted to showcase retail and online products with care. Product designs add visibility, highlight your branding, and provide trusted protection for every item.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Premium Quality',
        description: 'High-grade materials ensure superior protection for your products'
      },
      {
        icon: 'palette',
        title: 'Brand Enhancement',
        description: 'Elevate your brand with custom designs and premium finishes'
      },
      {
        icon: 'truck',
        title: 'Retail Ready',
        description: 'Perfect for retail displays and e-commerce fulfillment'
      },
      {
        icon: 'check',
        title: 'Versatile Design',
        description: 'Suitable for various industries and product types'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Premium Cardboard' },
      { label: 'Thickness', value: '300-500 GSM' },
      { label: 'Printing', value: 'High-Resolution CMYK' },
      { label: 'Finish', value: 'UV Coating Available' },
      { label: 'Assembly', value: 'Tuck-in or Glue' },
      { label: 'Customization', value: 'Full Brand Integration' }
    ],
    sizes: [
      { name: 'Small', dimensions: '4×3×2 inches', price: '$0.55' },
      { name: 'Medium', dimensions: '8×6×3 inches', price: '$0.75' },
      { name: 'Large', dimensions: '12×9×4 inches', price: '$0.95' },
      { name: 'X-Large', dimensions: '16×12×6 inches', price: '$1.35' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'High-resolution printing',
      'UV coating protection',
      'Premium finishes',
      'Custom inserts available'
    ],
    ctaTitle: 'Ready to Elevate Your Brand?',
    ctaDescription: 'Get a custom quote for your premium product boxes today. Let us help you create packaging that reflects your brand\'s quality.'
  },
  'rigid-boxes': {
    name: 'Rigid Boxes',
    description: 'Luxury rigid boxes designed for products that need more. Combining strength with style, they create memorable unboxing moments. It lifts your brand with a refined presentation.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Luxury Protection',
        description: 'High-end luxury packaging with superior strength and premium finish'
      },
      {
        icon: 'palette',
        title: 'Premium Design',
        description: 'Elegant designs that reflect luxury and sophistication'
      },
      {
        icon: 'truck',
        title: 'Durable Construction',
        description: 'Built to last with reinforced corners and premium materials'
      },
      {
        icon: 'check',
        title: 'Luxury Appeal',
        description: 'Perfect for high-end products and premium brand experiences'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Heavy-Duty Cardboard' },
      { label: 'Thickness', value: '400-600 GSM' },
      { label: 'Printing', value: 'Premium CMYK + Spot Colors' },
      { label: 'Finish', value: 'Embossed/Debossed Available' },
      { label: 'Assembly', value: 'Reinforced Corners' },
      { label: 'Customization', value: 'Luxury Brand Integration' }
    ],
    sizes: [
      { name: 'Small', dimensions: '5×4×3 inches', price: '$1.25' },
      { name: 'Medium', dimensions: '8×6×4 inches', price: '$1.65' },
      { name: 'Large', dimensions: '12×9×6 inches', price: '$2.15' },
      { name: 'X-Large', dimensions: '16×12×8 inches', price: '$2.85' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Embossed/debossed finishes',
      'Foil stamping available',
      'Premium materials',
      'Custom inserts & padding'
    ],
    ctaTitle: 'Ready for Luxury Packaging?',
    ctaDescription: 'Get a custom quote for your premium rigid boxes today. Experience the difference that luxury packaging makes.'
  },
  'shipping-boxes': {
    name: 'Shipping Boxes',
    description: 'Strong and reliable, our shipping boxes ensure products travel safely across any distance. Built for value and strength, they provide trusted protection and a perfect look.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Secure Shipping',
        description: 'Reliable shipping solutions for safe product delivery worldwide'
      },
      {
        icon: 'truck',
        title: 'Durable Construction',
        description: 'Built to withstand the rigors of shipping and handling'
      },
      {
        icon: 'palette',
        title: 'Brand Visibility',
        description: 'Custom printing options to maintain brand presence during transit'
      },
      {
        icon: 'check',
        title: 'Cost Effective',
        description: 'Optimized designs for maximum protection at minimum cost'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Corrugated Cardboard' },
      { label: 'Thickness', value: '150-300 GSM' },
      { label: 'Printing', value: 'Single/Double Color' },
      { label: 'Finish', value: 'Standard/Water Resistant' },
      { label: 'Assembly', value: 'Tape/Glue Sealed' },
      { label: 'Customization', value: 'Logo & Branding' }
    ],
    sizes: [
      { name: 'Small', dimensions: '8×6×4 inches', price: '$0.35' },
      { name: 'Medium', dimensions: '12×9×6 inches', price: '$0.55' },
      { name: 'Large', dimensions: '16×12×8 inches', price: '$0.75' },
      { name: 'X-Large', dimensions: '20×16×12 inches', price: '$1.05' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Weather resistant options',
      'Custom branding available',
      'Easy assembly design',
      'Cost-effective solutions'
    ],
    ctaTitle: 'Ready to Ship with Confidence?',
    ctaDescription: 'Get a custom quote for your shipping boxes today. Ensure your products arrive safely every time.'
  },
  'mylar-boxes': {
    name: 'Mylar Boxes',
    description: 'Premium mylar packaging solutions with excellent barrier properties and durability for various products.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Barrier Protection',
        description: 'Excellent barrier properties protect products from moisture, oxygen, and light'
      },
      {
        icon: 'palette',
        title: 'Custom Design',
        description: 'Full color printing and custom graphics for brand visibility'
      },
      {
        icon: 'truck',
        title: 'Durable Material',
        description: 'Strong mylar material ensures long-lasting protection and durability'
      },
      {
        icon: 'check',
        title: 'Versatile Use',
        description: 'Perfect for food, electronics, pharmaceuticals, and more'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Mylar Film' },
      { label: 'Thickness', value: '50-200 Microns' },
      { label: 'Printing', value: 'Full Color Flexographic' },
      { label: 'Finish', value: 'Matte/Glossy Available' },
      { label: 'Sealing', value: 'Heat Seal/Zipper' },
      { label: 'Customization', value: 'Custom Shapes & Sizes' }
    ],
    sizes: [
      { name: 'Small', dimensions: '3×4 inches', price: '$0.15' },
      { name: 'Medium', dimensions: '5×7 inches', price: '$0.25' },
      { name: 'Large', dimensions: '8×10 inches', price: '$0.35' },
      { name: 'X-Large', dimensions: '10×12 inches', price: '$0.45' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Resealable zipper options',
      'Barrier protection',
      'Custom shapes available',
      'Food-grade materials'
    ],
    ctaTitle: 'Ready for Mylar Packaging?',
    ctaDescription: 'Get a custom quote for your mylar boxes today. Discover the perfect barrier packaging solution for your products.'
  },
  'mailers': {
    name: 'Mailers',
    description: 'Efficient mail packaging for documents and small items. Professional, secure, and cost-effective solutions for all your mailing needs.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Secure Mail',
        description: 'Efficient mail packaging for documents and small items with reliable protection'
      },
      {
        icon: 'palette',
        title: 'Professional Look',
        description: 'Clean, professional appearance perfect for business communications'
      },
      {
        icon: 'truck',
        title: 'Easy Handling',
        description: 'Lightweight design reduces shipping costs and handling time'
      },
      {
        icon: 'check',
        title: 'Cost Effective',
        description: 'Affordable solution for regular mailing needs'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Kraft Paper/Cardboard' },
      { label: 'Thickness', value: '100-200 GSM' },
      { label: 'Printing', value: 'Single/Double Color' },
      { label: 'Finish', value: 'Standard/Water Resistant' },
      { label: 'Assembly', value: 'Self-Sealing' },
      { label: 'Customization', value: 'Logo & Branding' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6×9 inches', price: '$0.25' },
      { name: 'Medium', dimensions: '9×12 inches', price: '$0.35' },
      { name: 'Large', dimensions: '12×15 inches', price: '$0.45' },
      { name: 'X-Large', dimensions: '15×18 inches', price: '$0.55' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Self-sealing design',
      'Tear-resistant material',
      'Custom branding options',
      'Weather protection'
    ],
    ctaTitle: 'Ready for Professional Mailing?',
    ctaDescription: 'Get a custom quote for your mailers today. Professional packaging that protects and impresses.'
  },
  'shopping-bags': {
    name: 'Shopping Bags',
    description: 'Our stylish shopping bags combine strength with modern appeal. They extend your brand presence and keep customers engaged well beyond purchase.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Eco-Friendly',
        description: 'Sustainable and environmentally conscious shopping bag solutions'
      },
      {
        icon: 'palette',
        title: 'Brand Promotion',
        description: 'Walking advertisement for your brand with custom designs'
      },
      {
        icon: 'truck',
        title: 'Durable Design',
        description: 'Strong handles and reinforced construction for heavy items'
      },
      {
        icon: 'check',
        title: 'Versatile Use',
        description: 'Perfect for retail, events, and promotional activities'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Recycled Paper/Cotton' },
      { label: 'Thickness', value: '200-400 GSM' },
      { label: 'Printing', value: 'Full Color CMYK' },
      { label: 'Finish', value: 'Matte/Glossy Available' },
      { label: 'Handles', value: 'Reinforced Paper/Cotton' },
      { label: 'Customization', value: 'Full Brand Integration' }
    ],
    sizes: [
      { name: 'Small', dimensions: '8×10×4 inches', price: '$0.85' },
      { name: 'Medium', dimensions: '12×14×6 inches', price: '$1.15' },
      { name: 'Large', dimensions: '16×18×8 inches', price: '$1.45' },
      { name: 'X-Large', dimensions: '20×22×10 inches', price: '$1.85' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Reinforced handles',
      'Eco-friendly materials',
      'Custom branding',
      'Reusable design'
    ],
    ctaTitle: 'Ready for Eco-Friendly Shopping?',
    ctaDescription: 'Get a custom quote for your shopping bags today. Promote your brand while protecting the environment.'
  },
  'packaging-accessories': {
    name: 'Packaging Accessories',
    description: 'Essential accessories to complete your packaging needs. From protective materials to decorative elements, we have everything you need.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Complete Protection',
        description: 'Essential accessories to complete your packaging needs with maximum protection'
      },
      {
        icon: 'palette',
        title: 'Custom Solutions',
        description: 'Tailored accessories designed to complement your packaging perfectly'
      },
      {
        icon: 'truck',
        title: 'Easy Integration',
        description: 'Seamlessly integrate with your existing packaging for enhanced functionality'
      },
      {
        icon: 'check',
        title: 'Quality Materials',
        description: 'Premium materials ensure durability and professional appearance'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Various Premium Materials' },
      { label: 'Thickness', value: 'Custom Specifications' },
      { label: 'Printing', value: 'Full Color Available' },
      { label: 'Finish', value: 'Multiple Options' },
      { label: 'Assembly', value: 'Easy Integration' },
      { label: 'Customization', value: 'Full Custom Design' }
    ],
    sizes: [
      { name: 'Bubble Wrap', dimensions: 'Protective cushioning', price: '$0.15' },
      { name: 'Tissue Paper', dimensions: 'Elegant wrapping', price: '$0.05' },
      { name: 'Stickers', dimensions: 'Custom branding', price: '$0.02' },
      { name: 'Ribbons', dimensions: 'Decorative finishing', price: '$0.25' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Protective materials',
      'Decorative elements',
      'Branding materials',
      'Functional components'
    ],
    ctaTitle: 'Ready to Complete Your Packaging?',
    ctaDescription: 'Get a custom quote for your packaging accessories today. Complete your packaging solution with our premium accessories.'
  }
};

// Helper function to get product data by slug from database or fallback to static data
export const getProductDataBySlug = async (slug: string) => {
  try {
    // Try to fetch from database first
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${slug}`);
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
    }
  } catch (error) {
    console.warn('Failed to fetch from database, falling back to static data:', error);
  }

  // Fallback to static data
  // Check material categories
  const materialCategory = productByMaterialData.find(cat => cat.slug === slug);
  if (materialCategory) {
    return {
      name: materialCategory.name,
      description: materialCategory.description,
      heroImage: materialCategory.image,
      modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
      features: [
        {
          icon: 'shield',
          title: 'Premium Quality',
          description: 'High-grade materials ensure superior protection for your products'
        },
        {
          icon: 'palette',
          title: 'Custom Design',
          description: 'Full color printing and custom branding options available'
        },
        {
          icon: 'truck',
          title: 'Durable Construction',
          description: 'Built to last with reinforced materials and quality construction'
        },
        {
          icon: 'check',
          title: 'Versatile Use',
          description: 'Suitable for various industries and product types'
        }
      ],
      specifications: [
        { label: 'Material', value: 'Premium Cardboard' },
        { label: 'Thickness', value: '300-500 GSM' },
        { label: 'Printing', value: 'High-Resolution CMYK' },
        { label: 'Finish', value: 'Matte/Glossy Available' },
        { label: 'Assembly', value: 'Self-Locking' },
        { label: 'Customization', value: 'Full Brand Integration' }
      ],
      sizes: [
        { name: 'Small', dimensions: '4×3×2 inches', price: '$0.55' },
        { name: 'Medium', dimensions: '8×6×3 inches', price: '$0.75' },
        { name: 'Large', dimensions: '12×9×4 inches', price: '$0.95' },
        { name: 'X-Large', dimensions: '16×12×6 inches', price: '$1.35' }
      ],
      galleryImages: [
        materialCategory.image,
        '/img/product-box-2.jpg',
        '/img/Product-Packaging-Boxes.webp',
        '/img/shipping-box-2.webp'
      ],
      customizationOptions: [
        'High-resolution printing',
        'Custom branding',
        'Premium finishes',
        'Various sizes available'
      ],
      ctaTitle: 'Ready to Get Started?',
      ctaDescription: `Get a custom quote for your ${materialCategory.name.toLowerCase()} today. Our team is ready to help you create the perfect packaging solution.`
    };
  }

  // Check industry categories
  const industryCategory = productByIndustryData.find(cat => cat.slug === slug);
  if (industryCategory) {
    return {
      name: industryCategory.name,
      description: industryCategory.description,
      heroImage: industryCategory.image,
      modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
      features: [
        {
          icon: 'shield',
          title: 'Industry Specific',
          description: 'Specialized packaging designed for your specific industry needs'
        },
        {
          icon: 'palette',
          title: 'Custom Design',
          description: 'Tailored designs that meet industry standards and requirements'
        },
        {
          icon: 'truck',
          title: 'Professional Quality',
          description: 'High-quality materials and construction for professional use'
        },
        {
          icon: 'check',
          title: 'Compliance Ready',
          description: 'Designed to meet industry regulations and standards'
        }
      ],
      specifications: [
        { label: 'Material', value: 'Industry-Grade Cardboard' },
        { label: 'Thickness', value: '300-500 GSM' },
        { label: 'Printing', value: 'High-Resolution CMYK' },
        { label: 'Finish', value: 'Matte/Glossy Available' },
        { label: 'Assembly', value: 'Professional Assembly' },
        { label: 'Customization', value: 'Industry-Specific Branding' }
      ],
      sizes: [
        { name: 'Small', dimensions: '4×3×2 inches', price: '$0.55' },
        { name: 'Medium', dimensions: '8×6×3 inches', price: '$0.75' },
        { name: 'Large', dimensions: '12×9×4 inches', price: '$0.95' },
        { name: 'X-Large', dimensions: '16×12×6 inches', price: '$1.35' }
      ],
      galleryImages: [
        industryCategory.image,
        '/img/product-box-2.jpg',
        '/img/Product-Packaging-Boxes.webp',
        '/img/shipping-box-2.webp'
      ],
      customizationOptions: [
        'Industry-specific design',
        'Custom branding',
        'Compliance features',
        'Professional finishes'
      ],
      ctaTitle: 'Ready for Industry-Specific Packaging?',
      ctaDescription: `Get a custom quote for your ${industryCategory.name.toLowerCase()} today. Let us help you create packaging that meets your industry's specific requirements.`
    };
  }

  // Check mylar boxes
  if (slug === mylarBoxesData.slug) {
    return {
      name: mylarBoxesData.name,
      description: mylarBoxesData.description,
      heroImage: mylarBoxesData.image,
      modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
      features: [
        {
          icon: 'shield',
          title: 'Barrier Protection',
          description: 'Excellent barrier properties protect products from moisture, oxygen, and light'
        },
        {
          icon: 'palette',
          title: 'Custom Design',
          description: 'Full color printing and custom graphics for brand visibility'
        },
        {
          icon: 'truck',
          title: 'Durable Material',
          description: 'Strong mylar material ensures long-lasting protection and durability'
        },
        {
          icon: 'check',
          title: 'Versatile Use',
          description: 'Perfect for food, electronics, pharmaceuticals, and more'
        }
      ],
      specifications: [
        { label: 'Material', value: 'Mylar Film' },
        { label: 'Thickness', value: '50-200 Microns' },
        { label: 'Printing', value: 'Full Color Flexographic' },
        { label: 'Finish', value: 'Matte/Glossy Available' },
        { label: 'Sealing', value: 'Heat Seal/Zipper' },
        { label: 'Customization', value: 'Custom Shapes & Sizes' }
      ],
      sizes: [
        { name: 'Small', dimensions: '3×4 inches', price: '$0.15' },
        { name: 'Medium', dimensions: '5×7 inches', price: '$0.25' },
        { name: 'Large', dimensions: '8×10 inches', price: '$0.35' },
        { name: 'X-Large', dimensions: '10×12 inches', price: '$0.45' }
      ],
      galleryImages: [
        mylarBoxesData.image,
        '/img/product-box-2.jpg',
        '/img/Product-Packaging-Boxes.webp',
        '/img/shipping-box-2.webp'
      ],
      customizationOptions: [
        'Resealable zipper options',
        'Barrier protection',
        'Custom shapes available',
        'Food-grade materials'
      ],
      ctaTitle: 'Ready for Mylar Packaging?',
      ctaDescription: 'Get a custom quote for your mylar boxes today. Discover the perfect barrier packaging solution for your products.'
    };
  }

  // Check shopping bags
  if (slug === shoppingBagsData.slug) {
    return {
      name: shoppingBagsData.name,
      description: shoppingBagsData.description,
      heroImage: shoppingBagsData.image,
      modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
      features: [
        {
          icon: 'shield',
          title: 'Eco-Friendly',
          description: 'Sustainable and environmentally conscious shopping bag solutions'
        },
        {
          icon: 'palette',
          title: 'Brand Promotion',
          description: 'Walking advertisement for your brand with custom designs'
        },
        {
          icon: 'truck',
          title: 'Durable Design',
          description: 'Strong handles and reinforced construction for heavy items'
        },
        {
          icon: 'check',
          title: 'Versatile Use',
          description: 'Perfect for retail, events, and promotional activities'
        }
      ],
      specifications: [
        { label: 'Material', value: 'Recycled Paper/Cotton' },
        { label: 'Thickness', value: '200-400 GSM' },
        { label: 'Printing', value: 'Full Color CMYK' },
        { label: 'Finish', value: 'Matte/Glossy Available' },
        { label: 'Handles', value: 'Reinforced Paper/Cotton' },
        { label: 'Customization', value: 'Full Brand Integration' }
      ],
      sizes: [
        { name: 'Small', dimensions: '8×10×4 inches', price: '$0.85' },
        { name: 'Medium', dimensions: '12×14×6 inches', price: '$1.15' },
        { name: 'Large', dimensions: '16×18×8 inches', price: '$1.45' },
        { name: 'X-Large', dimensions: '20×22×10 inches', price: '$1.85' }
      ],
      galleryImages: [
        shoppingBagsData.image,
        '/img/product-box-2.jpg',
        '/img/Product-Packaging-Boxes.webp',
        '/img/shipping-box-2.webp'
      ],
      customizationOptions: [
        'Reinforced handles',
        'Eco-friendly materials',
        'Custom branding',
        'Reusable design'
      ],
      ctaTitle: 'Ready for Eco-Friendly Shopping?',
      ctaDescription: 'Get a custom quote for your shopping bags today. Promote your brand while protecting the environment.'
    };
  }

  // Check other
  if (slug === otherData.slug) {
    return {
      name: otherData.name,
      description: otherData.description,
      heroImage: otherData.image,
      modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
      features: [
        {
          icon: 'shield',
          title: 'Complete Solutions',
          description: 'Additional packaging accessories and printing services for complete solutions'
        },
        {
          icon: 'palette',
          title: 'Custom Design',
          description: 'Professional design services for all your packaging needs'
        },
        {
          icon: 'truck',
          title: 'Quality Materials',
          description: 'Premium materials ensure durability and professional appearance'
        },
        {
          icon: 'check',
          title: 'Versatile Options',
          description: 'Wide range of accessories and services to complete your packaging'
        }
      ],
      specifications: [
        { label: 'Material', value: 'Various Premium Materials' },
        { label: 'Thickness', value: 'Custom Specifications' },
        { label: 'Printing', value: 'Full Color Available' },
        { label: 'Finish', value: 'Multiple Options' },
        { label: 'Assembly', value: 'Easy Integration' },
        { label: 'Customization', value: 'Full Custom Design' }
      ],
      sizes: [
        { name: 'Booklets', dimensions: 'Custom sizes', price: '$0.25' },
        { name: 'Business Cards', dimensions: 'Standard 3.5×2 inches', price: '$0.15' },
        { name: 'Labels', dimensions: 'Various sizes', price: '$0.05' },
        { name: 'Tape', dimensions: 'Custom width', price: '$0.10' }
      ],
      galleryImages: [
        otherData.image,
        '/img/product-box-2.jpg',
        '/img/Product-Packaging-Boxes.webp',
        '/img/shipping-box-2.webp'
      ],
      customizationOptions: [
        'Professional printing',
        'Custom designs',
        'Various materials',
        'Complete solutions'
      ],
      ctaTitle: 'Ready for Complete Packaging Solutions?',
      ctaDescription: 'Get a custom quote for your packaging accessories today. Complete your packaging solution with our premium services.'
    };
  }

  // Fallback to static data if not found in centralized data
  return productData[slug as keyof typeof productData];
};

// Helper function to get all products from database or fallback to static data
export const getAllProducts = async () => {
  try {
    // Try to fetch from database first
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`);
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
    }
  } catch (error) {
    console.warn('Failed to fetch from database, falling back to static data:', error);
  }

  // Fallback to static data - convert object to array
  return Object.entries(productData).map(([slug, product]) => ({
    slug,
    ...product
  }));
};

export default productData;
