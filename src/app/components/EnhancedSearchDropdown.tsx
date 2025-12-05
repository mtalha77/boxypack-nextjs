'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Package, 
  Layers, 
  Tag, 
  Home, 
  ChevronRight, 
  Clock, 
  Star,
  Filter,
  X,
  TrendingUp,
  Sparkles,
  Leaf,
  Shield,
  Zap,
  Eye,
  Lock,
  RefreshCw
} from 'lucide-react';
import { EnhancedSearchResult, SearchSuggestion, SearchFilter, popularSearches, searchFilters } from '../utils/enhancedSearchData';
import SearchAnalytics from './SearchAnalytics';

interface EnhancedSearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  results: EnhancedSearchResult[];
  suggestions: SearchSuggestion[];
  isLoading: boolean;
  query: string;
  onResultClick: (resultTitle?: string, resultUrl?: string) => void;
  onQueryChange: (query: string) => void;
  showFilters?: boolean;
}

const EnhancedSearchDropdown: React.FC<EnhancedSearchDropdownProps> = ({
  isOpen,
  onClose,
  results,
  suggestions,
  isLoading,
  query,
  onResultClick,
  onQueryChange,
  showFilters = true
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter results to only show subcategories (products)
  const productResults = results.filter((result) => result.type === 'subcategory');

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      const totalItems = productResults.length + suggestions.length;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, totalItems - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex < productResults.length && productResults[selectedIndex]) {
            onResultClick(productResults[selectedIndex].title, productResults[selectedIndex].url);
            router.push(productResults[selectedIndex].url);
            onClose();
          } else if (selectedIndex >= productResults.length) {
            const suggestion = suggestions[selectedIndex - productResults.length];
            if (suggestion) {
              onQueryChange(suggestion.text);
            }
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
  }, [isOpen, productResults, suggestions, selectedIndex, onClose, onResultClick, onQueryChange, router]);

  // Get icon based on result type
  const getResultIcon = (type: EnhancedSearchResult['type']) => {
    switch (type) {
      case 'main-section':
        return Layers;
      case 'category':
        return Package;
      case 'subcategory':
        return Tag;
      case 'page':
        return Home;
      case 'feature':
        return Sparkles;
      case 'material':
        return Package;
      case 'industry':
        return Package;
      default:
        return Search;
    }
  };

  // Get type label with better formatting
  const getTypeLabel = (type: EnhancedSearchResult['type']) => {
    switch (type) {
      case 'main-section':
        return 'Section';
      case 'category':
        return 'Category';
      case 'subcategory':
        return 'Product';
      case 'page':
        return 'Page';
      case 'feature':
        return 'Feature';
      case 'material':
        return 'Material';
      case 'industry':
        return 'Industry';
      default:
        return 'Result';
    }
  };

  // Get feature icons
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'custom-printing':
        return RefreshCw;
      case 'window':
        return Eye;
      case 'magnetic':
        return Lock;
      case 'eco-friendly':
        return Leaf;
      case 'food-safe':
        return Shield;
      case 'child-resistant':
        return Shield;
      default:
        return Zap;
    }
  };

  // Handle filter change
  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => {
      const currentValues = prev[filterType] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return {
        ...prev,
        [filterType]: newValues
      };
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({});
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      data-search-dropdown
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9999] max-h-[600px] overflow-hidden"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Search Header */}
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <Search className="w-4 h-4 mr-2" />
            <span>
              {isLoading ? 'Searching...' : 
               query.trim() ? `Search results for "${query}"` : 
               'Search for products, categories, or features...'}
            </span>
          </div>
          {showFilters && (
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className="flex items-center text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Filter className="w-3 h-3 mr-1" />
              Filters
            </button>
          )}
        </div>
      </div>

      {/* Filter Panel */}
      {showFilterPanel && showFilters && (
        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">Filters</h3>
            <button
              onClick={clearFilters}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Clear all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {searchFilters.map((filter) => (
              <div key={filter.type}>
                <div className="text-xs font-medium text-gray-600 mb-1">
                  {filter.label}
                </div>
                <div className="space-y-1">
                  {filter.options.slice(0, 3).map((option) => (
                    <label key={option.value} className="flex items-center text-xs">
                      <input
                        type="checkbox"
                        checked={activeFilters[filter.type]?.includes(option.value) || false}
                        onChange={() => handleFilterChange(filter.type, option.value)}
                        className="mr-2 rounded"
                      />
                      <span className="text-gray-600">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="max-h-96 overflow-y-auto">
        {isLoading ? (
          <div className="px-4 py-8 text-center">
            <div className="inline-flex items-center text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0c6b76] mr-2"></div>
              Searching...
            </div>
          </div>
        ) : productResults.length === 0 && suggestions.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <div className="text-gray-500 mb-2">
              {query.trim() ? 'No results found' : 'Start typing to search...'}
            </div>
            <div className="text-sm text-gray-400">
              {query.trim() ? 'Try different keywords or check spelling' : 'Search for products, categories, or features...'}
            </div>
          </div>
        ) : (
          <>
            {/* Search Results - Only show subcategories (products) */}
            {productResults.map((result, index) => {
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
              })}

            {/* Suggestions */}
            {productResults.length === 0 && suggestions.length > 0 && (
              <div className="px-4 py-3 border-t border-gray-100">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Popular searches
                </div>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => {
                        const isSelected = index + productResults.length === selectedIndex;
                    return (
                      <button
                        key={suggestion.text}
                        onClick={() => onQueryChange(suggestion.text)}
                        className={`w-full text-left px-2 py-1 rounded text-sm hover:bg-gray-50 transition-colors ${
                          isSelected ? 'bg-gray-100' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">{suggestion.text}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Search Analytics */}
      <SearchAnalytics 
        searchQuery={query} 
        onSuggestionClick={onQueryChange} 
      />

      {/* Footer */}
      {(productResults.length > 0 || suggestions.length > 0) && (
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

export default EnhancedSearchDropdown;
