import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Flip Top Cigarette Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces premium flip top cigarette boxes with fast turnaround, free shipping, and stylish design for professional tobacco packaging. Customize Now.',
};

const FlipTopCigaretteBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cigarette-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'flip-top-cigarette-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="flip-top-cigarette-boxes"
      pageType="subcategory"
    />
  );
};

export default FlipTopCigaretteBoxesPage;