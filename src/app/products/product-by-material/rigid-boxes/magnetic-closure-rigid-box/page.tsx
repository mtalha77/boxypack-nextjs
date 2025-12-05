import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Magnetic Closure Rigid Boxes | Premium Quality',
  description: 'Boxy Pack creates premium magnetic rigid boxes with luxury finishes, fast turnaround, and free shipping for elegant branding. Order Now.',
};

const MagneticClosureRigidBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'rigid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'magnetic-closure-rigid-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="magnetic-closure-rigid-box"
      pageType="subcategory"
    />
  );
};

export default MagneticClosureRigidBoxPage;

