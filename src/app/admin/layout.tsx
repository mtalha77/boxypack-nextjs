'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { LogOut, Settings, Package } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip authentication check for auth page
    if (pathname === '/admin/auth') {
      setIsLoading(false);
      return;
    }

    // Check if user is authenticated via cookies
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const authStatus = getCookie('adminAuth');
    const adminUser = getCookie('adminUser');
    
    if (authStatus === 'true' && adminUser) {
      setIsAuthenticated(true);
    } else {
      // Redirect to login if not authenticated
      router.push('/login');
    }
    setIsLoading(false);
  }, [router, pathname]);

  const handleLogout = () => {
    // Clear cookies
    document.cookie = 'adminAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'adminUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show auth page content without admin header
  if (pathname === '/admin/auth') {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Image
                src="/img/logo-vertical.png"
                alt="Boxypack"
                width={120}
                height={60}
                className="mr-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Pricing Management</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-4">
              <a
                href="/admin/pricing"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/admin/pricing'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Package className="w-4 h-4 inline mr-2" />
                Pricing
              </a>
              
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
