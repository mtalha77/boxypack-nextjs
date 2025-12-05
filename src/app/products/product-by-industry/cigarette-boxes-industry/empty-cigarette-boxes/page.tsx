import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Empty Cigarette Boxes | Premium Packaging Solutions',
  description: 'Boxy Pack produces high-quality empty cigarette boxes with fast turnaround, free shipping, and sturdy design for professional tobacco packaging. Customize Now.',
};

const EmptyCigaretteBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cigarette-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'empty-cigarette-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="empty-cigarette-boxes"
      pageType="subcategory"
    />
  );
};

export default EmptyCigaretteBoxesPage;