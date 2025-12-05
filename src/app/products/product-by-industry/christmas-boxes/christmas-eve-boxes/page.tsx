import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Eve Boxes | Premium Holiday Packaging',
  description: 'Boxy Pack produces premium Christmas Eve boxes with fast turnaround, free shipping, and stylish designs for special festive gift presentation. Customize Now.',
};

const ChristmasEveBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-eve-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-eve-boxes"
      pageType="subcategory"
    />
  );
};

export default ChristmasEveBoxesPage;