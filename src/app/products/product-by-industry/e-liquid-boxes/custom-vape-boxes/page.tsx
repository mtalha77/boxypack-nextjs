import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Vape Boxes | Premium E-Cigarette Packaging',
  description: 'Boxy Pack produces premium custom vape boxes with fast turnaround, free shipping, and stylish design for professional and secure e-cigarette packaging. Customize Now.',
};

const CustomVapeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-and-e-cigarette-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-vape-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-vape-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomVapeBoxesPage;