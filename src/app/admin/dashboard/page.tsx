'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    totalRevenue: 0,
    activeUsers: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      // Load basic stats
      const productsResponse = await fetch('/api/admin/csv-products?limit=1');
      const productsData = await productsResponse.json();
      
      if (productsData.success) {
        setStats(prev => ({
          ...prev,
          totalProducts: productsData.data.pagination.total
        }));
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const adminFeatures = [
    {
      title: 'Pricing Management',
      description: 'Manage product pricing, formulas, and production costs',
      href: '/admin/pricing',
      icon: '💰',
      color: 'bg-blue-500'
    },
    {
      title: 'Product Catalog',
      description: 'Add, edit, and manage product information',
      href: '/admin/products',
      icon: '📦',
      color: 'bg-green-500'
    },
    {
      title: 'Order Management',
      description: 'View and manage customer orders',
      href: '/admin/orders',
      icon: '📋',
      color: 'bg-purple-500'
    },
    {
      title: 'Customer Management',
      description: 'Manage customer accounts and information',
      href: '/admin/customers',
      icon: '👥',
      color: 'bg-orange-500'
    },
    {
      title: 'Analytics & Reports',
      description: 'View sales analytics and generate reports',
      href: '/admin/analytics',
      icon: '📊',
      color: 'bg-indigo-500'
    },
    {
      title: 'System Settings',
      description: 'Configure system settings and preferences',
      href: '/admin/settings',
      icon: '⚙️',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage your Boxypack pricing system and business operations
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">📦</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Products</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalProducts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">🏷️</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Categories</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalCategories}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">💰</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-medium">👥</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.activeUsers}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/pricing"
              className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">💰</span>
                <div>
                  <h3 className="font-medium">Manage Pricing</h3>
                  <p className="text-sm opacity-90">Edit product pricing and formulas</p>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/seed-csv"
              className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">📊</span>
                <div>
                  <h3 className="font-medium">Import Data</h3>
                  <p className="text-sm opacity-90">Import CSV pricing data</p>
                </div>
              </div>
            </Link>

            <Link
              href="/pricing"
              className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">🧮</span>
                <div>
                  <h3 className="font-medium">Test Pricing</h3>
                  <p className="text-sm opacity-90">Test pricing calculations</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Admin Features Grid */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Admin Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminFeatures.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mr-4`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Pricing system updated with CSV data</span>
                  <span className="ml-auto text-gray-400">2 minutes ago</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>3 new products added to catalog</span>
                  <span className="ml-auto text-gray-400">1 hour ago</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Pricing formulas updated</span>
                  <span className="ml-auto text-gray-400">3 hours ago</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>Database cleanup completed</span>
                  <span className="ml-auto text-gray-400">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
