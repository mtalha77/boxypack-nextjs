import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Book Style Rigid Boxes | Luxury Printed Boxes',
  description: 'Boxy Pack produces premium book style rigid boxes with elegant printing, free shipping, and fast delivery for high-end branding. Customize Now.',
};

const BookStyleRigidBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'rigid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'book-style-rigid-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="book-style-rigid-boxes"
      pageType="subcategory"
    />
  );
};

export default BookStyleRigidBoxesPage;