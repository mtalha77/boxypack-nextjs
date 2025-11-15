import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';
import { notFound } from 'next/navigation';

interface SubcategoryPageProps {
  params: {
    slug: string;
  };
}

const SubcategoryPage = async ({ params }: SubcategoryPageProps) => {
  const { slug } = params;
  
  const section = navigationData.find(s => s.slug === 'mylar-boxes');
  const category = section?.categories?.find(c => c.slug === 'mylar-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === slug);
  
  if (!section || !category || !subcategory) {
    notFound();
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug={slug}
      pageType="subcategory"
    />
  );
};

export default SubcategoryPage;

