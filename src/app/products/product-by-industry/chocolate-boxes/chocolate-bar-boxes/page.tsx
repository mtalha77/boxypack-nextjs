import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Chocolate Bar Boxes | Premium Sweet Packaging',
  description: 'Boxy Pack produces premium chocolate bar boxes with fast turnaround, free shipping, and stylish design to present and protect chocolate bars professionally. Customize Now.',
};

const ChocolateBarBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'chocolate-bar-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="chocolate-bar-boxes"
      pageType="subcategory"
    />
  );
};

export default ChocolateBarBoxesPage;