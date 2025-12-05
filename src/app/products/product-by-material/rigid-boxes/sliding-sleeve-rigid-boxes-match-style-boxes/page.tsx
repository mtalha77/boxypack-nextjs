import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Sleeve Rigid Boxes | Premium Sliding Packaging',
  description: 'Boxy Pack designs elegant sliding rigid boxes with premium finishes, free shipping, and fast turnaround to elevate product presentation. Order Now.',
};

const SlidingSleeveRigidBoxesMatchStyleBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'rigid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'sliding-sleeve-rigid-boxes-match-style-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="sliding-sleeve-rigid-boxes-match-style-boxes"
      pageType="subcategory"
    />
  );
};

export default SlidingSleeveRigidBoxesMatchStyleBoxesPage;

