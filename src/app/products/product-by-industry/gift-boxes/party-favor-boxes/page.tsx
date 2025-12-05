import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Party Favor Boxes | Premium Custom Gift Packaging',
  description: 'Boxy Pack delivers high-quality party favor boxes with fast turnaround, free shipping, and stylish designs to delight guests with elegant gifts. Order Now.',
};

const PartyFavorBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'party-favor-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="party-favor-boxes"
      pageType="subcategory"
    />
  );
};

export default PartyFavorBoxesPage;