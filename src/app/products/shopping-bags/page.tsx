import { Metadata } from 'next';
import ProductsDesignPage from '../Products-design-page';

export const metadata: Metadata = {
  title: 'Custom Shopping Bags | Premium Durable Packaging',
  description: 'Boxy Pack delivers premium custom shopping bags with fast turnaround, durable materials, and free shipping to enhance your brand packaging. Order Now.',
};

const ShoppingBagsPage = () => {
  // Create proper product data structure for shopping bags
  const productData = {
    name: 'Shopping Bags',
    description: 'Eco-friendly and branded shopping bag solutions for retail and promotional use. Our shopping bags combine sustainability with style, perfect for enhancing your brand presence.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Eco-Friendly Materials',
        description: 'Made from sustainable and recyclable materials for environmental responsibility'
      },
      {
        icon: 'palette',
        title: 'Custom Branding',
        description: 'Full color printing and custom design options for maximum brand impact'
      },
      {
        icon: 'truck',
        title: 'Durable Construction',
        description: 'Strong handles and reinforced construction for reliable use'
      },
      {
        icon: 'check',
        title: 'Versatile Design',
        description: 'Perfect for retail, events, and promotional activities'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Kraft Paper/Recycled Materials' },
      { label: 'Handle Type', value: 'Twisted Paper/Cotton Rope' },
      { label: 'Printing', value: 'Full Color CMYK' },
      { label: 'Finish', value: 'Matte/Glossy Available' },
      { label: 'Capacity', value: 'Up to 20 lbs' },
      { label: 'Customization', value: 'Logo, Text, Graphics' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6×4×10 inches', price: '$0.25' },
      { name: 'Medium', dimensions: '8×5×12 inches', price: '$0.35' },
      { name: 'Large', dimensions: '10×6×14 inches', price: '$0.45' },
      { name: 'X-Large', dimensions: '12×8×16 inches', price: '$0.65' }
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
      'Various handle options',
      'Eco-friendly materials'
    ],
    ctaTitle: 'Ready to Get Started?',
    ctaDescription: 'Get a custom quote for your shopping bags today. Our team is ready to help you create the perfect promotional solution.'
  };

  return <ProductsDesignPage productData={productData} />;
};

export default ShoppingBagsPage;