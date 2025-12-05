import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Chocolate Bomb Boxes | Premium Sweet Packaging',
  description: 'Boxy Pack delivers premium chocolate bomb boxes with fast turnaround, free shipping, and stylish design to make your chocolates look fun and gift-ready. Order Now.',
};

const ChocolateBombBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'chocolate-bomb-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="chocolate-bomb-boxes"
      pageType="subcategory"
    />
  );
};

export default ChocolateBombBoxesPage;