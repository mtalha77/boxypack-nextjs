const fs = require('fs');
const path = require('path');

// Import data files
const productByMaterialData = require('./src/app/data/productByMaterialData.ts').productByMaterialData;
const productByIndustryData = require('./src/app/data/productByIndustryData.ts').productByIndustryData;
const pouchesData = require('./src/app/data/pouchesData.ts').pouchesData;
const shoppingBagsData = require('./src/app/data/shoppingBagsData.ts').shoppingBagsData;
const otherData = require('./src/app/data/otherData.ts').otherData;

// Function to check if a file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Function to generate page content
function generatePageContent(productName, description) {
  return `import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: '${productName} - Custom Packaging | BoxyPack',
  description: '${description}',
  keywords: '${productName.toLowerCase()}, custom packaging, ${productName.toLowerCase().replace(/\s+/g, ' ')}',
};

const ${productName.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  const productData = {
    name: '${productName}'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default ${productName.replace(/[^a-zA-Z0-9]/g, '')}Page;
`;
}

// Check material-based products
console.log('Checking material-based products...');
const materialMissing = [];

productByMaterialData.forEach(category => {
  category.subcategories.forEach(subcategory => {
    const filePath = `src/app/products/product-by-material/${category.slug}/${subcategory.slug}/page.tsx`;
    if (!fileExists(filePath)) {
      materialMissing.push({
        category: category.name,
        categorySlug: category.slug,
        subcategory: subcategory.name,
        subcategorySlug: subcategory.slug,
        description: subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`,
        path: filePath
      });
    }
  });
});

// Check industry-based products
console.log('Checking industry-based products...');
const industryMissing = [];

productByIndustryData.forEach(category => {
  category.subcategories.forEach(subcategory => {
    const filePath = `src/app/products/product-by-industry/${category.slug}/${subcategory.slug}/page.tsx`;
    if (!fileExists(filePath)) {
      industryMissing.push({
        category: category.name,
        categorySlug: category.slug,
        subcategory: subcategory.name,
        subcategorySlug: subcategory.slug,
        description: subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`,
        path: filePath
      });
    }
  });
});

// Check pouches
console.log('Checking pouches...');
const pouchMissing = [];

pouchesData.subcategories.forEach(subcategory => {
  const filePath = `src/app/products/pouches/${subcategory.slug}/page.tsx`;
  if (!fileExists(filePath)) {
    pouchMissing.push({
      category: 'Pouches',
      categorySlug: 'pouches',
      subcategory: subcategory.name,
      subcategorySlug: subcategory.slug,
      description: subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`,
      path: filePath
    });
  }
});

// Check shopping bags
console.log('Checking shopping bags...');
const shoppingBagMissing = [];

shoppingBagsData.subcategories.forEach(subcategory => {
  const filePath = `src/app/products/shopping-bags/${subcategory.slug}/page.tsx`;
  if (!fileExists(filePath)) {
    shoppingBagMissing.push({
      category: 'Shopping Bags',
      categorySlug: 'shopping-bags',
      subcategory: subcategory.name,
      subcategorySlug: subcategory.slug,
      description: subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`,
      path: filePath
    });
  }
});

// Check other products
console.log('Checking other products...');
const otherMissing = [];

otherData.subcategories.forEach(subcategory => {
  const filePath = `src/app/products/other/${subcategory.slug}/page.tsx`;
  if (!fileExists(filePath)) {
    otherMissing.push({
      category: 'Other',
      categorySlug: 'other',
      subcategory: subcategory.name,
      subcategorySlug: subcategory.slug,
      description: subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`,
      path: filePath
    });
  }
});

// Combine all missing pages
const allMissing = [...materialMissing, ...industryMissing, ...pouchMissing, ...shoppingBagMissing, ...otherMissing];

console.log(`\\nTotal missing pages: ${allMissing.length}`);
console.log('\\nMissing pages:');
allMissing.forEach((item, index) => {
  console.log(`${index + 1}. ${item.category} > ${item.subcategory}`);
  console.log(`   Path: ${item.path}`);
  console.log(`   Description: ${item.description}`);
  console.log('');
});

// Generate the missing pages
console.log('\\nGenerating missing pages...');
allMissing.forEach(item => {
  const dir = path.dirname(item.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const content = generatePageContent(item.subcategory, item.description);
  fs.writeFileSync(item.path, content);
  console.log(`Created: ${item.path}`);
});

console.log('\\nAll missing pages have been generated!');
