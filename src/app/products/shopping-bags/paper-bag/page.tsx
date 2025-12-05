import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Paper Bags | Durable & Premium Packaging',
  description: 'Boxy Pack delivers high-quality paper bags with fast turnaround, premium materials, and free shipping to elevate your brand\'s packaging presentation. Order Now.',
};

const PaperBagPage = () => {
  const section = navigationData.find(s => s.slug === 'shopping-bags');
  const category = section?.categories?.find(c => c.slug === 'shopping-bags');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'paper-bag');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="paper-bag"
      pageType="subcategory"
    />
  );
};

export default PaperBagPage;