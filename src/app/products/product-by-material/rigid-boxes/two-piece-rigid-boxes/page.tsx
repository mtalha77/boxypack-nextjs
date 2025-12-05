import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Luxury Two Piece Rigid Boxes | Custom Printed Packaging',
  description: 'Boxy Pack offers high-quality two piece rigid boxes with premium printing, free shipping, and fast delivery for standout branding. Customize Now.',
};

const TwoPieceRigidBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'rigid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'two-piece-rigid-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="two-piece-rigid-boxes"
      pageType="subcategory"
    />
  );
};

export default TwoPieceRigidBoxesPage;