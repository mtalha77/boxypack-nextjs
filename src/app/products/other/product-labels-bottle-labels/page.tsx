import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Product & Bottle Labels | Premium Packaging',
  description: 'Boxy Pack delivers premium custom product and bottle labels with fast turnaround, free shipping, and stylish design to enhance branding and presentation. Order Now.',
};

const ProductLabelsBottleLabelsPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'product-labels-bottle-labels');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="product-labels-bottle-labels"
      pageType="subcategory"
    />
  );
};

export default ProductLabelsBottleLabelsPage;