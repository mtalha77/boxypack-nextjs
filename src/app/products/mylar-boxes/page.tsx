import { Metadata } from 'next';
import ProductsDesignPage from '../Products-design-page';

export const metadata: Metadata = {
  title: 'Custom Mailer Pouches | Premium Durable Packaging by Boxy',
  description: 'Boxy Pack delivers premium custom mailer pouches with fast turnaround, eco-friendly materials, and free shipping for standout product packaging. Order Now.',
};

const MylarBoxesPage = () => {
  // Create proper product data structure for mylar boxes
  // Updated to fix Vercel deployment issue
  const productData = {
    name: 'Mylar Boxes',
    description: 'Premium mylar packaging solutions with excellent barrier properties and durability for various products. Our mylar boxes provide superior protection against moisture, oxygen, and light.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Superior Barrier Protection',
        description: 'Excellent barrier against moisture, oxygen, and light for product preservation'
      },
      {
        icon: 'palette',
        title: 'Custom Branding',
        description: 'Full color printing and custom design options for brand enhancement'
      },
      {
        icon: 'truck',
        title: 'Durable Material',
        description: 'High-quality mylar material ensures long-lasting protection'
      },
      {
        icon: 'check',
        title: 'Versatile Applications',
        description: 'Perfect for food, electronics, and various industrial products'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Mylar Film' },
      { label: 'Thickness', value: '2-8 mil' },
      { label: 'Barrier Properties', value: 'Moisture & Oxygen Resistant' },
      { label: 'Printing', value: 'Full Color CMYK' },
      { label: 'Finish', value: 'Matte/Glossy Available' },
      { label: 'Customization', value: 'Logo, Text, Graphics' }
    ],
    sizes: [
      { name: 'Small', dimensions: '4×3×2 inches', price: '$0.65' },
      { name: 'Medium', dimensions: '8×6×3 inches', price: '$0.85' },
      { name: 'Large', dimensions: '12×9×4 inches', price: '$1.15' },
      { name: 'X-Large', dimensions: '16×12×6 inches', price: '$1.45' }
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
      'Various sizes available',
      'Barrier coating options'
    ],
    ctaTitle: 'Ready to Get Started?',
    ctaDescription: 'Get a custom quote for your mylar boxes today. Our team is ready to help you create the perfect packaging solution.'
  };

  return <ProductsDesignPage productData={productData} />;
};

export default MylarBoxesPage;