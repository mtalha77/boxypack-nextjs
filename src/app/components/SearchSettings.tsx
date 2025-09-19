'use client';

import React, { useState } from 'react';
import { Settings, Search, Zap, Filter, Star, Eye } from 'lucide-react';

interface SearchSettingsProps {
  useEnhanced: boolean;
  onToggleEnhanced: (enabled: boolean) => void;
  showFilters: boolean;
  onToggleFilters: (enabled: boolean) => void;
}

const SearchSettings: React.FC<SearchSettingsProps> = ({
  useEnhanced,
  onToggleEnhanced,
  showFilters,
  onToggleFilters
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
        title="Search Settings"
      >
        <Settings className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Search Settings</h3>
            
            <div className="space-y-3">
              {/* Enhanced Search Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Enhanced Search</div>
                    <div className="text-xs text-gray-500">AI-powered search with filters</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useEnhanced}
                    onChange={(e) => onToggleEnhanced(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Filters Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Filter className="w-4 h-4 mr-2 text-blue-500" />
                  <div>
                    <div className="text-sm font-medium text-gray-700">Search Filters</div>
                    <div className="text-xs text-gray-500">Filter by material, industry, price</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFilters}
                    onChange={(e) => onToggleFilters(e.target.checked)}
                    className="sr-only peer"
                    disabled={!useEnhanced}
                  />
                  <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 ${!useEnhanced ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
                </label>
              </div>
            </div>

            {/* Search Features Info */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center">
                  <Star className="w-3 h-3 mr-2 text-yellow-500" />
                  Popular searches & trends
                </div>
                <div className="flex items-center">
                  <Eye className="w-3 h-3 mr-2 text-blue-500" />
                  Visual product previews
                </div>
                <div className="flex items-center">
                  <Search className="w-3 h-3 mr-2 text-green-500" />
                  Smart suggestions
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchSettings;
