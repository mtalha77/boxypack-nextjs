import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Chocolate Candy Boxes | Premium Sweet Packaging',
  description: 'Boxy Pack delivers high-quality chocolate candy boxes with fast turnaround, free shipping, and stylish design for attractive gift and retail packaging. Order Now.',
};

const ChocolateCandyBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'chocolate-candy-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="chocolate-candy-boxes"
      pageType="subcategory"
    />
  );
};

export default ChocolateCandyBoxesPage;