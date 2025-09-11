# Product Page Components

This directory contains modular, SEO-friendly components for displaying product category pages with subcategory cards.

## Components

### 1. SubcategoryCards.tsx
A reusable component that displays subcategory cards for any category page.

**Features:**
- Responsive grid layout (1-4 columns based on screen size)
- Hover effects with smooth transitions
- SEO-friendly with proper ARIA labels
- Lazy loading for images
- Theme color integration
- Accessibility features

**Props:**
- `subcategories`: Array of subcategory objects
- `parentCategoryName`: Name of the parent category
- `parentCategorySlug`: Slug of the parent category
- `sectionSlug`: Slug of the section (e.g., 'product-by-material')
- `className`: Optional additional CSS classes

### 2. CategoryPageSEO.tsx
SEO optimization component for category pages.

**Features:**
- Dynamic meta tags based on category data
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for search engines
- Canonical URLs
- Keyword optimization

### 3. CategoryPage.tsx
Main category page component that combines SEO and content.

**Features:**
- Integrates SEO optimization
- Uses ProductPageTemplate for content
- Clean, maintainable structure

### 4. page.tsx (ProductPageTemplate)
Updated main template that now uses SubcategoryCards component.

**Key Changes:**
- Replaced old subcategory display with SubcategoryCards component
- Better separation of concerns
- Improved maintainability

## Usage

### For Category Pages
```tsx
import CategoryPage from '../../../components/product-page/CategoryPage';

const MyCategoryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'my-category');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="my-category"
    />
  );
};
```

### For Custom Subcategory Cards
```tsx
import SubcategoryCards from '../../../components/product-page/SubcategoryCards';

<SubcategoryCards
  subcategories={category.subcategories}
  parentCategoryName={category.name}
  parentCategorySlug={category.slug}
  sectionSlug={section.slug}
/>
```

## SEO Features

1. **Meta Tags**: Dynamic title, description, and keywords
2. **Structured Data**: JSON-LD markup for search engines
3. **Open Graph**: Social media sharing optimization
4. **Canonical URLs**: Prevents duplicate content issues
5. **Accessibility**: ARIA labels and semantic HTML

## Theme Integration

All components use the theme colors defined in `globals.css`:
- Primary: `#0c6b76` (Deep Teal)
- Secondary: `#0ca6c2` (Bright Turquoise)
- Accent: `#46959c` (Teal Blue)

## Responsive Design

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Large Desktop: 4 columns

## Performance

- Lazy loading for images
- Optimized hover effects
- Minimal re-renders
- SEO-friendly markup
