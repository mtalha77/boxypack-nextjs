import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Pillow Gift Boxes | Elegant Premium Packaging',
  description: 'Boxy Pack produces premium pillow gift boxes with fast turnaround, free shipping, and stylish designs to make gifts look luxurious and memorable. Customize Now.',
};

const GiftPillowBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'gift-pillow-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="gift-pillow-boxes"
      pageType="subcategory"
    />
  );
};

export default GiftPillowBoxesPage;