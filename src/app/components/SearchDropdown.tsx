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
  onResultClick: () => void;
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
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            onResultClick();
            window.location.href = results[selectedIndex].url;
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
  }, [isOpen, results, selectedIndex, onClose, onResultClick]);

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
    console.log('Search dropdown not open');
    return null;
  }

  console.log('Rendering search dropdown with results:', results.length);

  return (
    <div
      ref={dropdownRef}
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
        ) : results.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <div className="text-gray-500 mb-2">No results found</div>
            <div className="text-sm text-gray-400">
              Try searching for customboxes or packaging
            </div>
          </div>
        ) : (
          results.map((result, index) => {
            const Icon = getResultIcon(result.type);
            const isSelected = index === selectedIndex;

            console.log('Rendering search result button:', result.title, 'at index', index);

            return (
              <Link
                key={result.id}
                href={result.url}
                onClick={(e) => {
                  console.log('=== LINK CLICK EVENT ===');
                  console.log('Link clicked for:', result.title);
                  console.log('URL:', result.url);
                  console.log('Event:', e);
                  onResultClick();
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors block ${
                  isSelected ? 'bg-[#0c6b76]/5 border-r-4 border-[#0c6b76]' : ''
                }`}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      result.type === 'main-section' ? 'bg-[#0c6b76]/10 text-[#0c6b76]' :
                      result.type === 'category' ? 'bg-[#0ca6c2]/10 text-[#0ca6c2]' :
                      result.type === 'subcategory' ? 'bg-[#0c6b76]/10 text-[#0c6b76]' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {result.title}
                      </h3>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                        {getTypeLabel(result.type)}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {result.description}
                    </p>
                    
                    {(result.section || result.category) && (
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        {result.section && (
                          <span className="flex items-center">
                            <span className="truncate">{result.section}</span>
                            {result.category && <ChevronRight className="w-3 h-3 mx-1" />}
                          </span>
                        )}
                        {result.category && (
                          <span className="truncate">{result.category}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      {/* Footer */}
      {results.length > 0 && (
        <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span>Press Enter to select, ↑↓ to navigate</span>
            </div>
            <div>
              {results.length} result{results.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
