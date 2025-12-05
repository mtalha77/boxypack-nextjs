import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: '90s Cereal Boxes | Premium Nostalgic Packaging',
  description: 'Boxy Pack delivers premium 90s cereal boxes with fast turnaround, free shipping, and vintage design for unique and eye-catching breakfast packaging. Order Now.',
};

const CerealBoxes90sPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === '90s-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="90s-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default CerealBoxes90sPage;