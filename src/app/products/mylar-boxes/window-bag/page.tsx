import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Window Bags | Premium Custom Packaging by Boxy Pack',
  description: 'Boxy Pack creates premium custom window bags with fast turnaround, free shipping, and transparent panels to showcase products beautifully. Shop Today.',
};

const WindowBagPage = () => {
  const section = navigationData.find(s => s.slug === 'mylar-boxes');
  const category = section?.categories?.find(c => c.slug === 'mylar-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'window-bag');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="window-bag"
      pageType="subcategory"
    />
  );
};

export default WindowBagPage;
