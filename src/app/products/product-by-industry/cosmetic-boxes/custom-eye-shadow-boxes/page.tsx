import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Eye Shadow Boxes | Elegant Cosmetic Packaging',
  description: 'Boxy Pack produces premium custom eye shadow boxes with fast turnaround, free shipping, and luxurious finishes to enhance your makeup brand. Customize Now.',
};

const CustomEyeShadowBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-eye-shadow-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-eye-shadow-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomEyeShadowBoxesPage;