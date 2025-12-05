import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Wax Melt Boxes | Premium Custom Candle Packaging',
  description: 'Boxy Pack produces premium wax melt boxes with fast turnaround, free shipping, and stylish design for safe and attractive candle packaging. Customize Now.',
};

const WaxMeltBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'candle-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'wax-melt-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="wax-melt-boxes"
      pageType="subcategory"
    />
  );
};

export default WaxMeltBoxesPage;