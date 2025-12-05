import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cufflink Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack produces high-quality cufflink boxes with fast turnaround, free shipping, and stylish design to showcase jewelry and accessories professionally. Customize Now.',
};

const CufflinkBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'apparel-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cufflink-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cufflink-boxes"
      pageType="subcategory"
    />
  );
};

export default CufflinkBoxesPage;