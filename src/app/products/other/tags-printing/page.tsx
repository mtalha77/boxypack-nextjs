import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Printed Tags | Premium Product Packaging',
  description: 'Boxy Pack delivers premium custom printed tags with fast turnaround, free shipping, and stylish design for branding and product labeling. Order Now.',
};

const TagsPrintingPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'tags-printing');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="tags-printing"
      pageType="subcategory"
    />
  );
};

export default TagsPrintingPage;