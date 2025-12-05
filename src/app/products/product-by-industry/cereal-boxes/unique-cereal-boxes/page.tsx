import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Unique Cereal Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces high-quality unique cereal boxes with fast turnaround, free shipping, and creative design for standout breakfast cereal presentation. Customize Now.',
};

const UniqueCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'unique-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="unique-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default UniqueCerealBoxesPage;