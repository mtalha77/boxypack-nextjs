import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Luxury Pre Roll Packaging | Premium Custom Cannabis Boxes',
  description: 'Boxy Pack delivers premium luxury pre roll packaging with fast turnaround, free shipping, and sophisticated design for high-end cannabis product presentation. Order Now.',
};

const LuxuryPreRollPackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pre-roll-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'luxury-pre-roll-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="luxury-pre-roll-packaging"
      pageType="subcategory"
    />
  );
};

export default LuxuryPreRollPackagingPage;