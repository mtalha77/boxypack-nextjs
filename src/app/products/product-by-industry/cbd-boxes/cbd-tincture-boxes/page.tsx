import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'CBD Tincture Boxes | Premium Stylish Packaging',
  description: 'Boxy Pack produces high-quality CBD tincture boxes with fast turnaround, free shipping, and stylish design for safe and attractive cannabis packaging. Customize Now.',
};

const CbdTinctureBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cbd-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cbd-tincture-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cbd-tincture-boxes"
      pageType="subcategory"
    />
  );
};

export default CbdTinctureBoxesPage;