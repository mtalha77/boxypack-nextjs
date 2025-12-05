import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'CBD Gummies Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers high-quality CBD gummies boxes with fast turnaround, free shipping, and durable design for safe and appealing product packaging. Order Now.',
};

const CbdGummiesBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cbd-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cbd-gummies-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cbd-gummies-boxes"
      pageType="subcategory"
    />
  );
};

export default CbdGummiesBoxesPage;