import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Premium Cosmetic Display Boxes | Stylish Packaging',
  description: 'Boxy Pack creates premium cosmetic display boxes with fast turnaround, free shipping, and professional design to showcase beauty products. Customize Now.',
};

const CosmeticDisplayBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cosmetic-display-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cosmetic-display-boxes"
      pageType="subcategory"
    />
  );
};

export default CosmeticDisplayBoxesPage;