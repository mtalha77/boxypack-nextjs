import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Retro Cereal Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces retro cereal boxes with fast turnaround, free shipping, and stylish design to present breakfast cereals with a nostalgic twist. Customize Now.',
};

const RetroCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'retro-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="retro-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default RetroCerealBoxesPage;