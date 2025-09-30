'use client';

import React, { useState } from 'react';
import { useProducts } from '@/lib/hooks/useProducts';

export default function TestDBPage() {
  const { products, loading, error } = useProducts();
  const [seeding, setSeeding] = useState(false);
  const [seedingProducts, setSeedingProducts] = useState(false);
  const [seedingIndustries, setSeedingIndustries] = useState(false);
  const [seedResult, setSeedResult] = useState<string>('');
  const [industries, setIndustries] = useState<Array<{
    _id?: string;
    slug: string;
    name: string;
    description: string;
    industry?: string;
    industrySubcategory?: string;
  }>>([]);
  const [industriesLoading, setIndustriesLoading] = useState(true);

  const handleSeedDatabase = async () => {
    setSeeding(true);
    setSeedResult('');
    
    try {
      const response = await fetch('/api/seed-all-products', {
        method: 'POST',
      });
      const data = await response.json();
      
      if (data.success) {
        setSeedResult(`✅ ${data.message}`);
        if (data.breakdown) {
          setSeedResult(prev => prev + `\n📊 Breakdown: Main(${data.breakdown.main}), Material(${data.breakdown.material}), Industry(${data.breakdown.industry}), Mylar(${data.breakdown.mylar}), Bags(${data.breakdown.shoppingBags}), Other(${data.breakdown.other})`);
        }
        // Refresh the products list
        window.location.reload();
      } else {
        setSeedResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setSeedResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setSeeding(false);
    }
  };

  const handleSeedProductsOnly = async () => {
    setSeedingProducts(true);
    setSeedResult('');
    
    try {
      const response = await fetch('/api/seed-products-only', {
        method: 'POST',
      });
      const data = await response.json();
      
      if (data.success) {
        setSeedResult(`✅ ${data.message}`);
        if (data.breakdown) {
          setSeedResult(prev => prev + `\n📊 Breakdown: Main(${data.breakdown.main}), Material(${data.breakdown.material}), Mylar(${data.breakdown.mylar}), Bags(${data.breakdown.shoppingBags}), Other(${data.breakdown.other})`);
        }
        // Refresh the products list
        window.location.reload();
      } else {
        setSeedResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setSeedResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setSeedingProducts(false);
    }
  };

  const handleSeedIndustriesOnly = async () => {
    setSeedingIndustries(true);
    setSeedResult('');
    
    try {
      const response = await fetch('/api/seed-industries-only', {
        method: 'POST',
      });
      const data = await response.json();
      
      if (data.success) {
        setSeedResult(`✅ ${data.message}`);
        if (data.breakdown) {
          setSeedResult(prev => prev + `\n🏭 Breakdown: Categories(${data.breakdown.categories}), Total(${data.breakdown.total})`);
        }
        // Refresh the industries list
        fetchIndustries();
      } else {
        setSeedResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setSeedResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setSeedingIndustries(false);
    }
  };

  const fetchIndustries = async () => {
    try {
      setIndustriesLoading(true);
      const response = await fetch('/api/industries');
      const data = await response.json();
      
      if (data.success) {
        setIndustries(data.data);
      }
    } catch (error) {
      console.error('Error fetching industries:', error);
    } finally {
      setIndustriesLoading(false);
    }
  };

  // Fetch industries on component mount
  React.useEffect(() => {
    fetchIndustries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Database Test Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Database Actions</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={handleSeedProductsOnly}
                disabled={seedingProducts}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {seedingProducts ? 'Seeding Products...' : 'Seed Products Collection Only (~100 products)'}
              </button>
              <button
                onClick={handleSeedIndustriesOnly}
                disabled={seedingIndustries}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
              >
                {seedingIndustries ? 'Seeding Industries...' : 'Seed Industries Collection Only (~200 products)'}
              </button>
              <button
                onClick={handleSeedDatabase}
                disabled={seeding}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {seeding ? 'Seeding All...' : 'Seed Both Collections (Legacy)'}
              </button>
            </div>
            {seedResult && (
              <p className="mt-4 p-3 bg-gray-100 rounded whitespace-pre-line">{seedResult}</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Industries Collection</h2>
          
          {industriesLoading && <p className="text-gray-600">Loading industries...</p>}
          
          {!industriesLoading && (
            <div>
              <p className="text-gray-600 mb-4">Total industries: {industries.length}</p>
              
              {industries.length === 0 ? (
                <p className="text-gray-500">No industries found. Click &quot;Seed Industries Collection Only&quot; to populate with industry data.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industries.map((industry) => (
                    <div key={industry._id || industry.slug} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{industry.description}</p>
                      <p className="text-xs text-gray-500">Slug: {industry.slug}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium">Industry: {industry.industry || 'Main Category'}</p>
                        {industry.industrySubcategory && (
                          <p className="text-xs text-gray-500">Subcategory: {industry.industrySubcategory}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Products from Database</h2>
          
          {loading && <p className="text-gray-600">Loading products...</p>}
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              Error: {error}
            </div>
          )}
          
          {!loading && !error && (
            <div>
              <p className="text-gray-600 mb-4">Total products: {products.length}</p>
              
              {products.length === 0 ? (
                <p className="text-gray-500">No products found. Click &quot;Seed Database&quot; to populate with sample data.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div key={product._id || product.slug} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                      <p className="text-xs text-gray-500">Slug: {product.slug}</p>
                      {product.sizes && product.sizes.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm font-medium">Sizes:</p>
                          <ul className="text-xs text-gray-600">
                            {product.sizes.slice(0, 2).map((size, index) => (
                              <li key={index}>{size.name}: {size.dimensions} - {size.price}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
