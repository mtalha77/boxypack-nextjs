import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Vape And E-Cigarette Boxes | Premium Packaging',
  description: 'Boxy Pack delivers premium custom vape and e-cigarette boxes with fast turnaround, free shipping, and stylish design to enhance your e-cigarette product presentation. Order Now.',
};

const VapeAndECigaretteBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-and-e-cigarette-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="vape-and-e-cigarette-boxes"
      pageType="category"
    />
  );
};

export default VapeAndECigaretteBoxesPage;
