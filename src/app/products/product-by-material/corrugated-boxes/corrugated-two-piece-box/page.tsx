import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Two Piece Boxes | Premium Packaging',
  description: 'Boxy Pack produces high-quality corrugated two piece boxes with fast turnaround, free shipping, and sturdy construction for professional-grade packaging. Customize Now.',
};

const CorrugatedTwoPieceBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-two-piece-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-two-piece-box"
      pageType="subcategory"
    />
  );
};

export default CorrugatedTwoPieceBoxPage;
