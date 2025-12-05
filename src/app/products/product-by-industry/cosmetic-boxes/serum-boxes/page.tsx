import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Serum Boxes | Luxury Cosmetic Packaging',
  description: 'Boxy Pack produces high-quality serum boxes with fast turnaround, free shipping, and elegant designs for standout cosmetic product packaging. Shop Today.',
};

const SerumBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'serum-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="serum-boxes"
      pageType="subcategory"
    />
  );
};

export default SerumBoxesPage;