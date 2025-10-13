'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { RigidProductPricingFormula } from '@/lib/types/pricing-formulas-rigid';

interface PaginationData {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function RigidPricingFormulasPage() {
  const router = useRouter();
  const [formulas, setFormulas] = useState<RigidProductPricingFormula[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  });
  const [seeding, setSeeding] = useState(false);

  // Fetch formulas
  const fetchFormulas = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        category: 'rigid'  // Only fetch rigid products
      });

      if (searchQuery) params.append('search', searchQuery);

      const response = await fetch(`/api/admin/pricing-formulas?${params}`);
      const data = await response.json();

      if (data.success) {
        setFormulas(data.data.formulas.filter((f: any) => f.formulaType === 'rigid'));
        setPagination(data.data.pagination);
      } else {
        console.error('Failed to fetch formulas:', data.error);
      }
    } catch (error) {
      console.error('Error fetching formulas:', error);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, searchQuery]);

  useEffect(() => {
    fetchFormulas();
  }, [fetchFormulas]);

  // Handle delete
  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this Rigid pricing formula?')) {
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

  // Handle cleanup and seeding
  const handleCleanupAndSeed = async () => {
    if (!confirm('⚠️ This will DELETE ALL existing Rigid products and create 5 new ones with 8-section structure:\n\n1. Magnetic Closure Rigid Box\n2. Two Piece Rigid Boxes\n3. Sliding / sleeve Rigid Boxes\n4. Brief Case Style\n5. Book Style Rigid Boxes\n\nContinue?')) {
      return;
    }

    try {
      setSeeding(true);
      const response = await fetch('/api/admin/cleanup-rigid', {
        method: 'POST'
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ Rigid products cleaned and seeded!\n\n🗑️  Deleted: ${data.data.deleted} old products\n✅ Seeded: ${data.data.seeded} new products`);
        fetchFormulas();
      } else {
        alert(`❌ Operation failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error in cleanup:', error);
      alert('Error cleaning up Rigid formulas');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 text-gray-900 admin-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rigid Pricing Formulas</h1>
              <p className="mt-2 text-sm text-gray-600">
                Manage Rigid box pricing formulas (8-section calculation)
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/admin/pricing-formulas')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                ← All Formulas
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
                Search Rigid Products
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name or ID..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {formulas.length} of {pagination.total} Rigid products
          </p>
        </div>

        {/* Formulas List */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : formulas.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 text-lg">No Rigid pricing formulas found</p>
            <p className="text-gray-400 text-sm mt-2">
              Click &quot;Seed Rigid Formulas&quot; to create default formulas
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
                    Margin %
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
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        Rigid
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formula.vendorPercentage?.percentage || 0}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formula.marginCost?.percentage || 0}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(formula.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => router.push(`/admin/pricing-formulas-rigid/${formula.productId}/edit`)}
                        className="text-purple-600 hover:text-purple-900 mr-4"
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

