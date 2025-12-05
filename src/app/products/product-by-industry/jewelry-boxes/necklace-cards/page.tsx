import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Necklace Cards | Premium Jewelry Display Packaging',
  description: 'Boxy Pack produces premium necklace cards with fast turnaround, free shipping, and elegant design for professional jewelry display. Customize Now.',
};

const NecklaceCardsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'necklace-cards');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="necklace-cards"
      pageType="subcategory"
    />
  );
};

export default NecklaceCardsPage;