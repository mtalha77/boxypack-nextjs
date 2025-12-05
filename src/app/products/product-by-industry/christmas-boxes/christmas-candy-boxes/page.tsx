import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Candy Boxes | Premium Festive Packaging',
  description: 'Boxy Pack produces premium Christmas candy boxes with fast turnaround, free shipping, and vibrant designs for delightful holiday gifting. Customize Now.',
};

const ChristmasCandyBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-candy-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-candy-boxes"
      pageType="subcategory"
    />
  );
};

export default ChristmasCandyBoxesPage;