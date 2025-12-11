import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Vape Boxes | Premium E-Cigarette Packaging',
  description: 'Boxy Pack delivers premium custom vape boxes with fast turnaround, free shipping, and stylish design to enhance your e-cigarette product presentation. Order Now.',
};

const VapeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-and-e-cigarette-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'vape-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="vape-boxes"
      pageType="subcategory"
    />
  );
};

export default VapeBoxesPage;