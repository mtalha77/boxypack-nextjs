'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ProductPricingFormula } from '@/lib/types/pricing-formulas';

interface PaginationData {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function PricingFormulasPage() {
  const router = useRouter();
  const [formulas, setFormulas] = useState<ProductPricingFormula[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  });

  // Fetch formulas
  const fetchFormulas = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString()
      });

      if (searchQuery) params.append('search', searchQuery);
      if (categoryFilter) params.append('category', categoryFilter);

      const response = await fetch(`/api/admin/pricing-formulas?${params}`);
      const data = await response.json();

      if (data.success) {
        setFormulas(data.data.formulas);
        setPagination(data.data.pagination);
      } else {
        console.error('Failed to fetch formulas:', data.error);
      }
    } catch (error) {
      console.error('Error fetching formulas:', error);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, searchQuery, categoryFilter]);

  useEffect(() => {
    fetchFormulas();
  }, [fetchFormulas]);

  // Handle delete
  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this pricing formula?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/pricing-formulas/${productId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        alert('Pricing formula deleted successfully');
        fetchFormulas();
      } else {
        alert(`Failed to delete: ${data.error}`);
      }
    } catch (error) {
      console.error('Error deleting formula:', error);
      alert('Error deleting formula');
    }
  };

  // Handle cost values migration
  const handleCostValuesMigration = async () => {
    if (!confirm('This will update Plates & Printing cost values for all products.\n\nPlates Costs:\n• 0-18: $1,200\n• 18.1-25: $2,400\n• 25.1-30: $5,000\n• 30.1-40: $8,000\n\nPrinting Costs:\n• 0-18: $3,500\n• 18.1-25: $6,000\n• 25.1-30: $8,000\n• 30.1-40: $10,000\n\nContinue?')) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/admin/migrate-pricing-values', {
        method: 'POST'
      });

      const data = await response.json();

      if (data.success) {
        alert(`Cost values migration completed!\n\nUpdated: ${data.summary.updated}\nSkipped: ${data.summary.skipped}\nFailed: ${data.summary.failed}`);
        fetchFormulas();
      } else {
        alert(`Migration failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error running migration:', error);
      alert('Error running migration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 text-gray-900 admin-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pricing Formulas</h1>
              <p className="mt-2 text-sm text-gray-600">
                Manage product pricing formulas and calculations
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/admin/pricing-formulas/new')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                + Add New Product
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Products
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name or ID..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="">All Categories</option>
                <option value="kraft">Kraft</option>
                <option value="cardboard">Cardboard</option>
                <option value="corrugated">Corrugated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {formulas.length} of {pagination.total} products
          </p>
        </div>

        {/* Formulas List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : formulas.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 text-lg">No pricing formulas found</p>
            <p className="text-gray-400 text-sm mt-2">
              Click &quot;Add New Product&quot; to create a pricing formula
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vendor %
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Two-Piece Box
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formulas.map((formula) => (
                  <tr key={formula.productId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {formula.productName}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {formula.productId}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        formula.category === 'kraft' ? 'bg-yellow-100 text-yellow-800' :
                        formula.category === 'cardboard' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {formula.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formula.vendorPercentage?.percentage || 0}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        formula.twoPieceBox?.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {formula.twoPieceBox?.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(formula.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => router.push(`/admin/pricing-formulas/${formula.productId}/edit`)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(formula.productId)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Page <span className="font-medium">{pagination.page}</span> of{' '}
                <span className="font-medium">{pagination.pages}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPagination({...pagination, page: pagination.page - 1})}
                disabled={pagination.page === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setPagination({...pagination, page: pagination.page + 1})}
                disabled={pagination.page === pagination.pages}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

