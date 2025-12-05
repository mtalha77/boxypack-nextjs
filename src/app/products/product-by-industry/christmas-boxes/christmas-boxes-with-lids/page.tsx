import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Boxes with Lids | Premium Holiday Packaging',
  description: 'Boxy Pack produces high-quality Christmas boxes with lids with fast turnaround, free shipping, and elegant designs for festive gift presentation. Customize Now.',
};

const ChristmasBoxesWithLidsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-boxes-with-lids');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-boxes-with-lids"
      pageType="subcategory"
    />
  );
};

export default ChristmasBoxesWithLidsPage;