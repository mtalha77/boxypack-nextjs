import Head from 'next/head';
import { MainCategory, NavigationSection } from '../../data/navigationData';

interface CategoryPageSEOProps {
  category: MainCategory;
  section: NavigationSection;
}

const CategoryPageSEO: React.FC<CategoryPageSEOProps> = ({ category, section }) => {
  const title = `${category.name} | ${section.name} | BoxyPack`;
  const description = category.description || `Premium ${category.name.toLowerCase()} packaging solutions. Explore our comprehensive range of ${category.name.toLowerCase()} products designed for optimal protection and presentation.`;
  const keywords = [
    category.name.toLowerCase(),
    'packaging',
    'boxes',
    'custom packaging',
    'packaging solutions',
    section.name.toLowerCase(),
    ...category.subcategories.map(sub => sub.name.toLowerCase())
  ].join(', ');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": category.name,
    "description": description,
    "category": section.name,
    "brand": {
      "@type": "Brand",
      "name": "BoxyPack"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    },
    "hasPart": category.subcategories.map(subcategory => ({
      "@type": "Product",
      "name": subcategory.name,
      "description": subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions`
    }))
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/img/products-box-img.png" />
      <meta property="og:url" content={`https://boxypack.com/products/${section.slug}/${category.slug}`} />
      <meta property="og:site_name" content="BoxyPack" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/img/products-box-img.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://boxypack.com/products/${section.slug}/${category.slug}`} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
};

export default CategoryPageSEO;
