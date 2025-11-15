const fs = require('fs');
const path = require('path');

// Import data files
const { productByMaterialData } = require('../src/app/data/productByMaterialData.ts');
const { productByIndustryData } = require('../src/app/data/productByIndustryData.ts');
const { mylarBoxesData } = require('../src/app/data/mylarBoxesData.ts');
const { shoppingBagsData } = require('../src/app/data/shoppingBagsData.ts');
const { otherData } = require('../src/app/data/otherData.ts');

const pageTemplate = (sectionSlug, categorySlug, subcategorySlug, sectionName, categoryName) => {
  const importPath = sectionSlug === 'product-by-material' || sectionSlug === 'product-by-industry' 
    ? '../../../../data/navigationData'
    : '../../../data/navigationData';
  
  const componentPath = sectionSlug === 'product-by-material' || sectionSlug === 'product-by-industry'
    ? '../../../../components/product-page/page'
    : '../../../components/product-page/page';

  const componentName = subcategorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';

  return `import React from 'react';
import { navigationData } from '${importPath}';
import ProductPageTemplate from '${componentPath}';

const ${componentName} = () => {
  const section = navigationData.find(s => s.slug === '${sectionSlug}');
  const category = section?.categories?.find(c => c.slug === '${categorySlug}');
  const subcategory = category?.subcategories?.find(sc => sc.slug === '${subcategorySlug}');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="${subcategorySlug}"
      pageType="subcategory"
    />
  );
};

export default ${componentName};
`;
};

function generatePages() {
  const baseDir = path.join(__dirname, '../src/app/products');
  let created = 0;
  let skipped = 0;

  // Generate pages for product-by-material
  productByMaterialData.forEach(category => {
    category.subcategories.forEach(subcategory => {
      const pageDir = path.join(baseDir, 'product-by-material', category.slug, subcategory.slug);
      const pageFile = path.join(pageDir, 'page.tsx');
      
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
        fs.writeFileSync(pageFile, pageTemplate('product-by-material', category.slug, subcategory.slug, 'product-by-material', category.name));
        console.log(`✅ Created: ${pageFile}`);
        created++;
      } else {
        skipped++;
      }
    });
  });

  // Generate pages for product-by-industry
  productByIndustryData.forEach(category => {
    category.subcategories.forEach(subcategory => {
      const pageDir = path.join(baseDir, 'product-by-industry', category.slug, subcategory.slug);
      const pageFile = path.join(pageDir, 'page.tsx');
      
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
        fs.writeFileSync(pageFile, pageTemplate('product-by-industry', category.slug, subcategory.slug, 'product-by-industry', category.name));
        console.log(`✅ Created: ${pageFile}`);
        created++;
      } else {
        skipped++;
      }
    });
  });

  // Generate pages for mylar-boxes
  mylarBoxesData.subcategories.forEach(subcategory => {
    const pageDir = path.join(baseDir, 'mylar-boxes', subcategory.slug);
    const pageFile = path.join(pageDir, 'page.tsx');
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(pageFile, pageTemplate('mylar-boxes', 'mylar-boxes', subcategory.slug, 'mylar-boxes', 'mylar-boxes'));
      console.log(`✅ Created: ${pageFile}`);
      created++;
    } else {
      skipped++;
    }
  });

  // Generate pages for shopping-bags
  shoppingBagsData.subcategories.forEach(subcategory => {
    const pageDir = path.join(baseDir, 'shopping-bags', subcategory.slug);
    const pageFile = path.join(pageDir, 'page.tsx');
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(pageFile, pageTemplate('shopping-bags', 'shopping-bags', subcategory.slug, 'shopping-bags', 'shopping-bags'));
      console.log(`✅ Created: ${pageFile}`);
      created++;
    } else {
      skipped++;
    }
  });

  // Generate pages for other
  otherData.subcategories.forEach(subcategory => {
    const pageDir = path.join(baseDir, 'other', subcategory.slug);
    const pageFile = path.join(pageDir, 'page.tsx');
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(pageFile, pageTemplate('other', 'other', subcategory.slug, 'other', 'other'));
      console.log(`✅ Created: ${pageFile}`);
      created++;
    } else {
      skipped++;
    }
  });

  console.log(`\n📊 Summary: ${created} pages created, ${skipped} already existed`);
}

generatePages();

