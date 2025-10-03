'use client';

import React, { useState, useEffect } from 'react';
import { CSVProductPricing, ProductCategory } from '@/lib/types/pricing';

const AdminPricingDashboard: React.FC = () => {
  const [products, setProducts] = useState<CSVProductPricing[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<CSVProductPricing | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories: ProductCategory[] = ['rigid', 'kraft', 'cardboard', 'corrugated', 'mylar', 'shopping', 'other'];

  useEffect(() => {
    loadProducts();
  }, [searchTerm, selectedCategory]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: '1',
        limit: '50',
        ...(searchTerm && { search: searchTerm }),
        ...(selectedCategory && { category: selectedCategory })
      });

      const response = await fetch(`/api/admin/csv-products?${params}`);
      const data = await response.json();

      if (data.success) {
        setProducts(data.data.products);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductSelect = (product: CSVProductPricing) => {
    setSelectedProduct(product);
  };

  const handleProductUpdate = async (updatedProduct: CSVProductPricing) => {
    try {
      const response = await fetch(`/api/admin/csv-products/${updatedProduct._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
      });

      const data = await response.json();
      if (data.success) {
        setSelectedProduct(data.data);
        loadProducts(); // Refresh the list
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to update product');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pricing Management</h1>
        <p className="mt-2 text-gray-600">
          Manage product pricing, formulas, and production costs
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Products
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by product name..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="w-full bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Products</h2>
                <p className="text-sm text-gray-600">
                  {products.length} products found
                </p>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading products...</p>
                  </div>
                ) : products.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No products found
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {products.map((product) => (
                      <div
                        key={product._id}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedProduct?._id === product._id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                        }`}
                        onClick={() => handleProductSelect(product)}
                      >
                        <h3 className="font-medium text-gray-900">{product.productName}</h3>
                        <p className="text-sm text-gray-600 capitalize">{product.category}</p>
                        <p className="text-xs text-gray-500">
                          MOQ: {product.moq} | Material Cost: ${product.materialCostOf100Units}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Editor */}
          <div className="lg:col-span-2">
            {selectedProduct ? (
              <ProductPricingEditor
                product={selectedProduct}
                onUpdate={handleProductUpdate}
              />
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Product</h3>
                <p className="text-gray-600">Choose a product from the list to edit its pricing</p>
              </div>
            )}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
    </div>
  );
};

// Product Pricing Editor Component
interface ProductPricingEditorProps {
  product: CSVProductPricing;
  onUpdate: (product: CSVProductPricing) => void;
}

const ProductPricingEditor: React.FC<ProductPricingEditorProps> = ({ product, onUpdate }) => {
  const [editedProduct, setEditedProduct] = useState<CSVProductPricing>(product);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onUpdate(editedProduct);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditedProduct(product);
    setIsEditing(false);
  };

  const handleFieldChange = (field: string, value: any) => {
    setEditedProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedFieldChange = (parentField: string, subField: string, value: any) => {
    setEditedProduct(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField as keyof CSVProductPricing],
        [subField]: value
      }
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{product.productName}</h2>
            <p className="text-sm text-gray-600 capitalize">{product.category}</p>
          </div>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 max-h-96 overflow-y-auto">
        <div className="space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={editedProduct.productName}
                  onChange={(e) => handleFieldChange('productName', e.target.value)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={editedProduct.category}
                  onChange={(e) => handleFieldChange('category', e.target.value)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                >
                  <option value="rigid">Rigid</option>
                  <option value="kraft">Kraft</option>
                  <option value="cardboard">Cardboard</option>
                  <option value="corrugated">Corrugated</option>
                  <option value="mylar">Mylar</option>
                  <option value="shopping">Shopping</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">MOQ</label>
                <input
                  type="number"
                  value={editedProduct.moq}
                  onChange={(e) => handleFieldChange('moq', parseInt(e.target.value) || 0)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vendor Percentage (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={editedProduct.vendorPercentage}
                  onChange={(e) => handleFieldChange('vendorPercentage', parseFloat(e.target.value) || 0)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Material Costs */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Material Costs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight of 100 Units</label>
                <input
                  type="number"
                  step="0.1"
                  value={editedProduct.weightOf100Units}
                  onChange={(e) => handleFieldChange('weightOf100Units', parseFloat(e.target.value) || 0)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Material Cost of 100 Units</label>
                <input
                  type="number"
                  step="0.01"
                  value={editedProduct.materialCostOf100Units}
                  onChange={(e) => handleFieldChange('materialCostOf100Units', parseFloat(e.target.value) || 0)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* One-time Costs */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">One-time Costs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">Scanning Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Outside</label>
                    <input
                      type="number"
                      value={editedProduct.scanningCost.outside}
                      onChange={(e) => handleNestedFieldChange('scanningCost', 'outside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Inside</label>
                    <input
                      type="number"
                      value={editedProduct.scanningCost.inside}
                      onChange={(e) => handleNestedFieldChange('scanningCost', 'inside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Both Side</label>
                    <input
                      type="number"
                      value={editedProduct.scanningCost.bothside}
                      onChange={(e) => handleNestedFieldChange('scanningCost', 'bothside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Blank</label>
                    <input
                      type="number"
                      value={editedProduct.scanningCost.blank}
                      onChange={(e) => handleNestedFieldChange('scanningCost', 'blank', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">Plates Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Outside</label>
                    <input
                      type="number"
                      value={editedProduct.platesCost.outside}
                      onChange={(e) => handleNestedFieldChange('platesCost', 'outside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Inside</label>
                    <input
                      type="number"
                      value={editedProduct.platesCost.inside}
                      onChange={(e) => handleNestedFieldChange('platesCost', 'inside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Both Side</label>
                    <input
                      type="number"
                      value={editedProduct.platesCost.bothside}
                      onChange={(e) => handleNestedFieldChange('platesCost', 'bothside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Blank</label>
                    <input
                      type="number"
                      value={editedProduct.platesCost.blank}
                      onChange={(e) => handleNestedFieldChange('platesCost', 'blank', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Per-1k-unit Costs */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Per-1k-unit Costs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">Printing Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Outside</label>
                    <input
                      type="number"
                      value={editedProduct.printingCost.outside}
                      onChange={(e) => handleNestedFieldChange('printingCost', 'outside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Inside</label>
                    <input
                      type="number"
                      value={editedProduct.printingCost.inside}
                      onChange={(e) => handleNestedFieldChange('printingCost', 'inside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Both Side</label>
                    <input
                      type="number"
                      value={editedProduct.printingCost.bothside}
                      onChange={(e) => handleNestedFieldChange('printingCost', 'bothside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Blank</label>
                    <input
                      type="number"
                      value={editedProduct.printingCost.blank}
                      onChange={(e) => handleNestedFieldChange('printingCost', 'blank', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">Lamination Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Outside</label>
                    <input
                      type="number"
                      value={editedProduct.laminationCost.outside}
                      onChange={(e) => handleNestedFieldChange('laminationCost', 'outside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Inside</label>
                    <input
                      type="number"
                      value={editedProduct.laminationCost.inside}
                      onChange={(e) => handleNestedFieldChange('laminationCost', 'inside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Both Side</label>
                    <input
                      type="number"
                      value={editedProduct.laminationCost.bothside}
                      onChange={(e) => handleNestedFieldChange('laminationCost', 'bothside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Blank</label>
                    <input
                      type="number"
                      value={editedProduct.laminationCost.blank}
                      onChange={(e) => handleNestedFieldChange('laminationCost', 'blank', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">Die Making Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Outside</label>
                    <input
                      type="number"
                      value={editedProduct.dieMakingCost.outside}
                      onChange={(e) => handleNestedFieldChange('dieMakingCost', 'outside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Inside</label>
                    <input
                      type="number"
                      value={editedProduct.dieMakingCost.inside}
                      onChange={(e) => handleNestedFieldChange('dieMakingCost', 'inside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Both Side</label>
                    <input
                      type="number"
                      value={editedProduct.dieMakingCost.bothside}
                      onChange={(e) => handleNestedFieldChange('dieMakingCost', 'bothside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Blank</label>
                    <input
                      type="number"
                      value={editedProduct.dieMakingCost.blank}
                      onChange={(e) => handleNestedFieldChange('dieMakingCost', 'blank', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">Die Cutting Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Outside</label>
                    <input
                      type="number"
                      value={editedProduct.dieCuttingCost.outside}
                      onChange={(e) => handleNestedFieldChange('dieCuttingCost', 'outside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Inside</label>
                    <input
                      type="number"
                      value={editedProduct.dieCuttingCost.inside}
                      onChange={(e) => handleNestedFieldChange('dieCuttingCost', 'inside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Both Side</label>
                    <input
                      type="number"
                      value={editedProduct.dieCuttingCost.bothside}
                      onChange={(e) => handleNestedFieldChange('dieCuttingCost', 'bothside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Blank</label>
                    <input
                      type="number"
                      value={editedProduct.dieCuttingCost.blank}
                      onChange={(e) => handleNestedFieldChange('dieCuttingCost', 'blank', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-800 mb-2">Pasting Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Outside</label>
                    <input
                      type="number"
                      value={editedProduct.pastingCost.outside}
                      onChange={(e) => handleNestedFieldChange('pastingCost', 'outside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Inside</label>
                    <input
                      type="number"
                      value={editedProduct.pastingCost.inside}
                      onChange={(e) => handleNestedFieldChange('pastingCost', 'inside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Both Side</label>
                    <input
                      type="number"
                      value={editedProduct.pastingCost.bothside}
                      onChange={(e) => handleNestedFieldChange('pastingCost', 'bothside', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Blank</label>
                    <input
                      type="number"
                      value={editedProduct.pastingCost.blank}
                      onChange={(e) => handleNestedFieldChange('pastingCost', 'blank', parseFloat(e.target.value) || 0)}
                      disabled={!isEditing}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Settings */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Special Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Two Piece Box Multiplier</label>
                <input
                  type="number"
                  step="0.1"
                  value={editedProduct.twoPieceBoxMultiplier}
                  onChange={(e) => handleFieldChange('twoPieceBoxMultiplier', parseFloat(e.target.value) || 1)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Both Side Printing Multiplier</label>
                <input
                  type="number"
                  step="0.1"
                  value={editedProduct.bothSidePrintingMultiplier}
                  onChange={(e) => handleFieldChange('bothSidePrintingMultiplier', parseFloat(e.target.value) || 1.5)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={editedProduct.shippingWeight}
                  onChange={(e) => handleFieldChange('shippingWeight', parseFloat(e.target.value) || 0)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Cost</label>
                <input
                  type="number"
                  step="0.01"
                  value={editedProduct.shippingCost}
                  onChange={(e) => handleFieldChange('shippingCost', parseFloat(e.target.value) || 0)}
                  disabled={!isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPricingDashboard;