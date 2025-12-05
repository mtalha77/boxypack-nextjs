import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Business Cards | Premium Professional Design',
  description: 'Boxy Pack produces high-quality custom business cards with fast turnaround, free shipping, and stylish design to make a strong first impression. Customize Now.',
};

const BusinessCardsPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'business-cards');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="business-cards"
      pageType="subcategory"
    />
  );
};

export default BusinessCardsPage;