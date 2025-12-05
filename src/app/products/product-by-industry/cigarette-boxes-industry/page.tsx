import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cigarette Boxes | Premium Tobacco Packaging',
  description: 'Boxy Pack delivers premium custom cigarette boxes with fast turnaround, free shipping, and durable design for stylish and secure tobacco product packaging. Order Now.',
};

const CigaretteBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cigarette-boxes-industry');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="cigarette-boxes-industry"
      pageType="category"
    />
  );
};

export default CigaretteBoxesIndustryPage;