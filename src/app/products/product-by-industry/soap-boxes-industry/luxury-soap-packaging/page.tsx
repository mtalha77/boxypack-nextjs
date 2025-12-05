import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Luxury Soap Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack produces high-quality luxury soap boxes with fast turnaround, free shipping, and stylish design to elevate your soap brand. Order Now.',
};

const LuxurySoapPackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'luxury-soap-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="luxury-soap-packaging"
      pageType="subcategory"
    />
  );
};

export default LuxurySoapPackagingPage;