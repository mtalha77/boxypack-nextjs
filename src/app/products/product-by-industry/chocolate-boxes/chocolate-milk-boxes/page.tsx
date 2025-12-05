import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Chocolate Milk Boxes | Premium Sweet Packaging',
  description: 'Boxy Pack produces premium chocolate milk boxes with fast turnaround, free shipping, and durable design to present and protect your chocolate products. Customize Now.',
};

const ChocolateMilkBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'chocolate-milk-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="chocolate-milk-boxes"
      pageType="subcategory"
    />
  );
};

export default ChocolateMilkBoxesPage;