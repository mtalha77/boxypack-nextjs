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
      href: '/admin/pricing-formulas',
      icon: '💰',
      color: 'bg-blue-500'
    },
    {
      title: 'Order Management',
      description: 'View and manage customer orders',
      href: '/admin/',
      icon: '📋',
      color: 'bg-purple-500'
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage your Boxypack pricing system and business operations
          </p>
        </div>

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
        </div>

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
