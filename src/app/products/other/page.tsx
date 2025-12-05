import { Metadata } from 'next';
import ProductsDesignPage from '../Products-design-page';

export const metadata: Metadata = {
  title: 'Other Products | Premium Custom Packaging Solutions',
  description: 'Boxy Pack offers specialized packaging solutions and accessories including booklets, brochures, labels, and custom materials with fast turnaround and free shipping. Order Now.',
};

const OtherPage = () => {
  // Create proper product data structure for other products
  const productData = {
    name: 'Other Products',
    description: 'Specialized packaging solutions and accessories for unique requirements. Our other products category includes custom solutions, protective materials, and specialized packaging components.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Custom Solutions',
        description: 'Tailored packaging solutions for unique product requirements'
      },
      {
        icon: 'palette',
        title: 'Specialized Materials',
        description: 'Wide range of materials and finishes for specific applications'
      },
      {
        icon: 'truck',
        title: 'Protective Accessories',
        description: 'Bubble wrap, foam inserts, and other protective materials'
      },
      {
        icon: 'check',
        title: 'Flexible Options',
        description: 'Adaptable solutions for various industries and applications'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Various (Custom)' },
      { label: 'Thickness', value: 'Customizable' },
      { label: 'Printing', value: 'Full Color CMYK' },
      { label: 'Finish', value: 'Multiple Options' },
      { label: 'Assembly', value: 'Custom Design' },
      { label: 'Customization', value: 'Full Customization' }
    ],
    sizes: [
      { name: 'Custom', dimensions: 'As per requirement', price: 'Quote' },
      { name: 'Standard', dimensions: 'Various sizes', price: 'Contact us' },
      { name: 'Bulk', dimensions: 'Large quantities', price: 'Volume discount' },
      { name: 'Prototype', dimensions: 'Sample size', price: 'Development cost' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Fully custom design',
      'Specialized materials',
      'Unique dimensions',
      'Custom printing',
      'Protective accessories'
    ],
    ctaTitle: 'Ready to Get Started?',
    ctaDescription: 'Get a custom quote for your specialized packaging needs today. Our team is ready to help you create the perfect solution.'
  };

  return <ProductsDesignPage productData={productData} />;
};

export default OtherPage;
