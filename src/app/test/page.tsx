'use client';

import SearchDropdown from '../components/SearchDropdown';
import { useState } from 'react';
import { SearchResult } from '../utils/searchData';

export default function TestPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState('custom boxes');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([
    {
      id: 'test-1',
      title: 'Custom Product Boxes',
      description: 'High-quality custom product packaging boxes for your business',
      url: '/products/product-boxes',
      type: 'category',
      section: 'Products',
      category: 'Product Boxes',
      priority: 10
    },
    {
      id: 'test-2',
      title: 'Mailer Boxes',
      description: 'Perfect for shipping and protecting your products',
      url: '/products/mailer-boxes',
      type: 'subcategory',
      section: 'Products',
      category: 'Product Boxes',
      priority: 8
    },
    {
      id: 'test-3',
      title: 'Cosmetic Boxes',
      description: 'Elegant packaging solutions for cosmetic products',
      url: '/products/product-by-industry/cosmetic-boxes',
      type: 'category',
      section: 'Product By Industry',
      category: 'Cosmetic Boxes',
      priority: 7
    },
    {
      id: 'test-4',
      title: 'Cardboard Boxes',
      description: 'Eco-friendly cardboard packaging solutions',
      url: '/products/product-by-material/cardboard-boxes',
      type: 'category',
      section: 'Product By Material',
      category: 'Cardboard Boxes',
      priority: 6
    },
    {
      id: 'test-5',
      title: 'How It Works',
      description: 'Learn about our custom packaging process',
      url: '/how-it-works',
      type: 'page',
      priority: 5
    }
  ]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleResultClick = (resultTitle?: string) => {
    console.log('Result clicked - navigating to:', resultTitle);
    // Update the search query to show the selected result
    if (resultTitle) {
      setQuery(resultTitle);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Search Dropdown</h1>
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="font-semibold text-blue-900 mb-2">Instructions:</h2>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Click on any search result below to test navigation</li>
          <li>• Each result should navigate to its specific product section</li>
          <li>• Check the browser console for click event logs</li>
          <li>• The search dropdown should close after clicking</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-[#0c6b76] text-white rounded-lg hover:bg-[#0a5a63] transition-colors"
        >
          {isOpen ? 'Hide' : 'Show'} Search Dropdown
        </button>
      </div>
      
      <SearchDropdown
        isOpen={isOpen}
        onClose={handleClose}
        results={results}
        isLoading={isLoading}
        query={query}
        onResultClick={handleResultClick}
      />
    </div>
  );
}
