import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Lotion Boxes | Premium Skincare Packaging',
  description: 'Boxy Pack delivers high-quality lotion boxes with fast turnaround, free shipping, and elegant design to enhance your skincare product presentation. Order Now.',
};

const LotionBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'lotion-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="lotion-boxes"
      pageType="subcategory"
    />
  );
};

export default LotionBoxesPage;