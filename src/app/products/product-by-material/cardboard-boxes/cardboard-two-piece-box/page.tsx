import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Two Piece Boxes | Premium Packaging',
  description: 'Boxy Pack delivers premium cardboard two piece boxes with fast turnaround, free shipping, and top-quality printing for elegant product presentation. Order Now.',
};

const CardboardTwoPieceBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-two-piece-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-two-piece-box"
      pageType="subcategory"
    />
  );
};

export default CardboardTwoPieceBoxPage;









