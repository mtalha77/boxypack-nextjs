import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Funny Cereal Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces premium funny cereal boxes with fast turnaround, free shipping, and creative design for entertaining and eye-catching breakfast packaging. Customize Now.',
};

const FunnyCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'funny-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="funny-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default FunnyCerealBoxesPage;