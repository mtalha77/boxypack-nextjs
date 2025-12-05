import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Hair Extension Boxes | Premium Packaging for Salons',
  description: 'Boxy Pack delivers premium hair extension boxes with fast turnaround, free shipping, and high-quality packaging to elevate your beauty brand. Customize Now.',
};

const HairExtensionBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'hair-extension-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="hair-extension-boxes"
      pageType="subcategory"
    />
  );
};

export default HairExtensionBoxesPage;