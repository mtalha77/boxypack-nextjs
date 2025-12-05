import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Essential Oil Boxes | Premium Luxury Packaging',
  description: 'Boxy Pack creates high-quality essential oil boxes with fast turnaround, free shipping, and stylish design for premium cosmetic product packaging. Customize Now.',
};

const EssentialOilBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'essential-oil-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="essential-oil-boxes"
      pageType="subcategory"
    />
  );
};

export default EssentialOilBoxesPage;