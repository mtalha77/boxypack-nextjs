import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Window Bakery Boxes | Premium Custom Packaging',
  description: 'Boxy Pack creates window bakery boxes with fast turnaround, free shipping, and premium design to showcase baked goods beautifully. Shop Today.',
};

const WindowBakeryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'window-bakery-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="window-bakery-boxes"
      pageType="subcategory"
    />
  );
};

export default WindowBakeryBoxesPage;