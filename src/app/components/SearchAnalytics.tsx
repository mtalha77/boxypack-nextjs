'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Star, Search, Eye, MousePointer } from 'lucide-react';

interface SearchAnalyticsProps {
  searchQuery: string;
  onSuggestionClick: (suggestion: string) => void;
}

interface SearchStats {
  totalSearches: number;
  popularSearches: Array<{ term: string; count: number; trend: 'up' | 'down' | 'stable' }>;
  recentSearches: string[];
  trendingNow: Array<{ term: string; growth: number }>;
}

const SearchAnalytics: React.FC<SearchAnalyticsProps> = ({ searchQuery, onSuggestionClick }) => {
  const [stats, setStats] = useState<SearchStats>({
    totalSearches: 0,
    popularSearches: [],
    recentSearches: [],
    trendingNow: []
  });

  // Simulate analytics data (in real app, this would come from your analytics service)
  useEffect(() => {
    const mockStats: SearchStats = {
      totalSearches: 15420,
      popularSearches: [
        { term: 'Custom Boxes', count: 1250, trend: 'up' },
        { term: 'Mailer Boxes', count: 890, trend: 'up' },
        { term: 'Cosmetic Boxes', count: 750, trend: 'stable' },
        { term: 'Rigid Boxes', count: 680, trend: 'down' },
        { term: 'Cardboard Boxes', count: 620, trend: 'up' },
        { term: 'Bakery Boxes', count: 580, trend: 'up' },
        { term: 'Gift Boxes', count: 520, trend: 'stable' },
        { term: 'Eco Friendly Packaging', count: 480, trend: 'up' }
      ],
      recentSearches: [
        'Custom Printing',
        'Luxury Packaging',
        'Food Safe Boxes',
        'Window Boxes',
        'Magnetic Closure'
      ],
      trendingNow: [
        { term: 'Subscription Boxes', growth: 45 },
        { term: 'Eco Friendly', growth: 32 },
        { term: 'Custom Labels', growth: 28 },
        { term: 'Child Resistant', growth: 25 }
      ]
    };
    setStats(mockStats);
  }, []);

  if (!searchQuery.trim()) {
    return (
      <div className="px-4 py-6 border-t border-gray-100 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Popular Searches */}
          <div>
            <div className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <TrendingUp className="w-4 h-4 mr-2" />
              Popular Searches
            </div>
            <div className="space-y-2">
              {stats.popularSearches.slice(0, 5).map((search, index) => (
                <button
                  key={search.term}
                  onClick={() => onSuggestionClick(search.term)}
                  className="w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 w-6">{index + 1}</span>
                    <span className="text-sm text-gray-700 group-hover:text-[#0c6b76] transition-colors">
                      {search.term}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400 mr-2">{search.count}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      search.trend === 'up' ? 'bg-green-500' :
                      search.trend === 'down' ? 'bg-red-500' : 'bg-gray-400'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Trending Now */}
          <div>
            <div className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <Star className="w-4 h-4 mr-2" />
              Trending Now
            </div>
            <div className="space-y-2">
              {stats.trendingNow.map((trend, index) => (
                <button
                  key={trend.term}
                  onClick={() => onSuggestionClick(trend.term)}
                  className="w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-gray-700 group-hover:text-[#0c6b76] transition-colors">
                    {trend.term}
                  </span>
                  <span className="text-xs text-green-600 font-medium">
                    +{trend.growth}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Tips */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center text-sm font-medium text-blue-900 mb-2">
            <Search className="w-4 h-4 mr-2" />
            Search Tips
          </div>
          <div className="text-xs text-blue-800 space-y-1">
            <div>• Try searching by material: &apos;cardboard&apos;, &apos;kraft&apos;, &apos;rigid&apos;</div>
            <div>• Search by industry: &apos;cosmetic&apos;, &apos;food&apos;, &apos;jewelry&apos;</div>
            <div>• Look for features: &apos;window&apos;, &apos;magnetic&apos;, &apos;eco-friendly&apos;</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SearchAnalytics;
