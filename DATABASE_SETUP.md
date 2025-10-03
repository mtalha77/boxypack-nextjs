# MongoDB Database Setup for Boxypack

This guide explains how to set up and use the MongoDB database integration for the Boxypack website.

## Prerequisites

1. MongoDB Atlas account or local MongoDB instance
2. Node.js and npm installed
3. Your MongoDB connection string

## Setup Instructions

### 1. Environment Configuration

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/BoxyPack?retryWrites=true&w=majority
```

Replace `username`, `password`, and `cluster` with your actual MongoDB credentials.

### 2. Database Structure

The application uses:
- **Database**: `BoxyPack`
- **Collection**: `Products`

Each product document should have the following structure:

```typescript
{
  _id: ObjectId,
  slug: string,           // URL-friendly identifier
  name: string,           // Product name
  description: string,    // Product description
  heroImage: string,      // Main product image path
  modelPath: string,      // 3D model path
  features: Array<{       // Product features
    icon: string,
    title: string,
    description: string
  }>,
  specifications: Array<{ // Product specifications
    label: string,
    value: string
  }>,
  sizes: Array<{          // Available sizes
    name: string,
    dimensions: string,
    price: string
  }>,
  galleryImages: string[], // Additional product images
  customizationOptions: string[], // Available customizations
  ctaTitle: string,       // Call-to-action title
  ctaDescription: string, // Call-to-action description
  createdAt: Date,        // Creation timestamp
  updatedAt: Date         // Last update timestamp
}
```

### 3. Seeding the Database

To populate your database with the existing product data:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit the test page: `http://localhost:3000/test-db`

3. Click "Seed Database with Product Data" to populate the database

Alternatively, you can make a POST request to `/api/seed-products`:

```bash
curl -X POST http://localhost:3000/api/seed-products
```

### 4. API Endpoints

The application provides the following API endpoints:

#### Products
- `GET /api/products` - Fetch all products
- `POST /api/products` - Create a new product
- `GET /api/products/[slug]` - Fetch a specific product by slug
- `PUT /api/products/[slug]` - Update a specific product
- `DELETE /api/products/[slug]` - Delete a specific product

#### Database Management
- `POST /api/seed-products` - Seed the database with product data

### 5. Using the Database in Components

#### Custom Hooks

Use the provided hooks to fetch data:

```typescript
import { useProducts, useProduct } from '@/lib/hooks/useProducts';

// Fetch all products
function ProductsList() {
  const { products, loading, error } = useProducts();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}

// Fetch a single product
function ProductPage({ slug }: { slug: string }) {
  const { product, loading, error } = useProduct(slug);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;
  
  return <div>{product.name}</div>;
}
```

#### Direct Database Access

For server-side operations, use the database utilities:

```typescript
import { getProductsCollection } from '@/lib/mongodb';

export async function getServerSideProps() {
  const collection = await getProductsCollection();
  const products = await collection.find({}).toArray();
  
  return {
    props: { products }
  };
}
```

### 6. Admin Interface

Access the admin interface at `/admin` to:
- View all products
- Edit product details
- Delete products
- Manage product data

### 7. Fallback System

The application includes a fallback system:
1. First, it tries to fetch data from the database
2. If that fails, it falls back to static data from `src/app/data/productData.ts`
3. If no static data exists, it generates dynamic content based on navigation structure

### 8. Testing

Test your database connection by visiting:
- `/test-db` - Database test page with seeding functionality
- `/admin` - Admin interface for managing products

### 9. Troubleshooting

#### Common Issues

1. **Connection Error**: Check your `MONGODB_URI` in `.env.local`
2. **Empty Database**: Run the seeding process at `/test-db`
3. **Import Errors**: Ensure all TypeScript paths are correct
4. **CORS Issues**: Make sure your MongoDB Atlas allows connections from your domain

#### Debug Mode

Enable debug logging by adding to your `.env.local`:

```env
DEBUG=mongodb:*
```

### 10. Production Considerations

1. **Environment Variables**: Ensure `MONGODB_URI` is set in your production environment
2. **Database Indexing**: Consider adding indexes for frequently queried fields
3. **Error Handling**: Implement proper error handling for production
4. **Caching**: Consider implementing caching for better performance
5. **Security**: Ensure proper authentication and authorization for admin functions

## File Structure

```
src/
├── lib/
│   ├── mongodb.ts              # Database connection utilities
│   └── hooks/
│       └── useProducts.ts      # React hooks for data fetching
├── app/
│   ├── api/
│   │   ├── products/
│   │   │   ├── route.ts        # Products API endpoints
│   │   │   └── [slug]/
│   │   │       └── route.ts    # Individual product endpoints
│   │   └── seed-products/
│   │       └── route.ts        # Database seeding endpoint
│   ├── admin/
│   │   └── page.tsx            # Admin interface
│   ├── test-db/
│   │   └── page.tsx            # Database test page
│   └── data/
│       └── productData.ts      # Static product data (fallback)
```

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your MongoDB connection string
3. Ensure all environment variables are set correctly
4. Check the network tab for failed API requests
