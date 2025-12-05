import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Lingerie Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack produces premium lingerie boxes with fast turnaround, free shipping, and stylish design to enhance intimate apparel presentation. Customize Now.',
};

const LingerieBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'apparel-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'lingerie-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="lingerie-boxes"
      pageType="subcategory"
    />
  );
};

export default LingerieBoxesPage;