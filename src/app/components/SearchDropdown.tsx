'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Package, Layers, Tag, Home, ChevronRight, Clock } from 'lucide-react';
import { SearchResult } from '../utils/searchData';

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  results: SearchResult[];
  isLoading: boolean;
  query: string;
  onResultClick: (resultTitle?: string, resultUrl?: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isOpen,
  onClose,
  results,
  isLoading,
  query,
  onResultClick,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter results to show categories and subcategories (products)
  const productResults = results.filter((result) => 
    result.type === 'category' || result.type === 'subcategory'
  );

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, productResults.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (productResults[selectedIndex]) {
            onResultClick(productResults[selectedIndex].title, productResults[selectedIndex].url);
            router.push(productResults[selectedIndex].url);
            onClose();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, productResults, selectedIndex, onClose, onResultClick, router]);

  // Get icon based on result type
  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'main-section':
        return Layers;
      case 'category':
        return Package;
      case 'subcategory':
        return Tag;
      case 'page':
        return Home;
      default:
        return Search;
    }
  };

  // Get type label
  const getTypeLabel = (type: SearchResult['type']) => {
    switch (type) {
      case 'main-section':
        return 'Section';
      case 'category':
        return 'Category';
      case 'subcategory':
        return 'Product';
      case 'page':
        return 'Page';
      default:
        return 'Result';
    }
  };


  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      data-search-dropdown
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9999] max-h-96 overflow-hidden"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Search Header */}
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center text-sm text-gray-600">
          <Search className="w-4 h-4 mr-2" />
          <span>
            {isLoading ? 'Searching...' : `Search results for "${query}"`}
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="max-h-80 overflow-y-auto">
        {isLoading ? (
          <div className="px-4 py-8 text-center">
            <div className="inline-flex items-center text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0c6b76] mr-2"></div>
              Searching...
            </div>
          </div>
        ) : productResults.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <div className="text-gray-500 mb-2">
              {query.trim() ? 'No results found' : 'Start typing to search...'}
            </div>
            <div className="text-sm text-gray-400">
              {query.trim() ? 'Try searching for custom boxes or packaging' : 'Search for products, categories, or anything...'}
            </div>
          </div>
        ) : (
          productResults.map((result, index) => {
              const Icon = getResultIcon(result.type);
              const isSelected = index === selectedIndex;

              return (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={(e) => {
                    e.preventDefault();
                    onResultClick(result.title, result.url);
                    router.push(result.url);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-all duration-200 block group ${
                    isSelected ? 'bg-[#0c6b76]/5 border-r-4 border-[#0c6b76]' : ''
                  }`}
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#0c6b76]/10 text-[#0c6b76]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate group-hover:text-[#0c6b76] transition-colors">
                        {result.title}
                      </h3>
                    </div>
                    
                    <ChevronRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-[#0c6b76] transition-colors flex-shrink-0" />
                  </div>
                </Link>
              );
            })
        )}
      </div>

      {/* Footer */}
      {productResults.length > 0 && (
        <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span>Press Enter to select, ↑↓ to navigate</span>
            </div>
            <div>
              {productResults.length} result{productResults.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
