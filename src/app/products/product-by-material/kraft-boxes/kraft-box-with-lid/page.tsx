import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Premium Kraft Boxes with Lid | Custom Packaging',
  description: 'Boxy Pack produces custom kraft boxes with lid, offering premium quality, free shipping, and fast turnaround for elegant product presentation. Customize Now.',
};

const KraftBoxWithLidPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-box-with-lid');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-box-with-lid"
      pageType="subcategory"
    />
  );
};

export default KraftBoxWithLidPage;
