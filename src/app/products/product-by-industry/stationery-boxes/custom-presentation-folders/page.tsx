import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Presentation Folders | Premium Stationery Boxes',
  description: 'Boxy Pack produces premium presentation folders with fast turnaround, free shipping, and stylish design to showcase documents professionally. Customize Now.',
};

const CustomPresentationFoldersPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'stationery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-presentation-folders');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-presentation-folders"
      pageType="subcategory"
    />
  );
};

export default CustomPresentationFoldersPage;