'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Package
} from 'lucide-react';
import Link from 'next/link';
import { navigationData, NavigationSection, MainCategory } from '../data/navigationData';
import { headerConfig, getCategoryIcon, getSubcategoryIcon } from '../data/headerData';
import SearchDropdown from './SearchDropdown';
import EnhancedSearchDropdown from './EnhancedSearchDropdown';
import { getAllSearchData, searchData, SearchResult } from '../utils/searchData';
import { getAllEnhancedSearchData, enhancedSearch, getSearchSuggestions, EnhancedSearchResult, SearchSuggestion } from '../utils/enhancedSearchData';

// Icon mapping functions are now imported from headerData.ts

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMainSection, setHoveredMainSection] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [enhancedSearchResults, setEnhancedSearchResults] = useState<EnhancedSearchResult[]>([]);
  const [searchSuggestions, setSearchSuggestions] = useState<SearchSuggestion[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [allSearchData, setAllSearchData] = useState<SearchResult[]>([]);
  const [allEnhancedSearchData, setAllEnhancedSearchData] = useState<EnhancedSearchResult[]>([]);
  const [useEnhancedSearch, setUseEnhancedSearch] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Initialize search data
  useEffect(() => {
    const searchData = getAllSearchData();
    const enhancedData = getAllEnhancedSearchData();
    console.log('Initializing search data:', searchData.length, 'items');
    console.log('Initializing enhanced search data:', enhancedData.length, 'items');
    setAllSearchData(searchData);
    setAllEnhancedSearchData(enhancedData);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchQuery.trim()) {
      // Open dropdown immediately when user starts typing
      setIsSearchOpen(true);
      setIsSearchLoading(true);
      
      searchTimeoutRef.current = setTimeout(() => {
        if (useEnhancedSearch) {
          const results = enhancedSearch(searchQuery, allEnhancedSearchData);
          const suggestions = getSearchSuggestions(searchQuery, allEnhancedSearchData);
          setEnhancedSearchResults(results);
          setSearchSuggestions(suggestions);
          console.log('Enhanced search completed:', { query: searchQuery, resultsCount: results.length, suggestionsCount: suggestions.length });
        } else {
          const results = searchData(searchQuery, allSearchData);
          setSearchResults(results);
          console.log('Search completed:', { query: searchQuery, resultsCount: results.length });
        }
        setIsSearchLoading(false);
      }, headerConfig.search.debounceDelay);
    } else {
      setSearchResults([]);
      setEnhancedSearchResults([]);
      setSearchSuggestions([]);
      setIsSearchOpen(false);
      setIsSearchLoading(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, allSearchData, allEnhancedSearchData, useEnhancedSearch]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search when URL changes (navigation occurs)
  const pathname = usePathname();
  useEffect(() => {
    const handleRouteChange = () => {
      setIsSearchOpen(false);
      setSearchQuery('');
      // Clear search input focus
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    };

    // Close search on pathname change
    handleRouteChange();
  }, [pathname]);

  // Close dropdown on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (hoveredMainSection || hoveredCategory) {
        setHoveredMainSection(null);
        setHoveredCategory(null);
        setHoveredSubcategory(null);
        setIsClosing(false);
      }
      // Also close search on scroll
      setIsSearchOpen(false);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [hoveredMainSection, hoveredCategory]);

  // Function to handle smooth closing with delay
  const handleSmoothClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setHoveredMainSection(null);
      setHoveredCategory(null);
      setHoveredSubcategory(null);
      setIsClosing(false);
    }, 1000); // 1000ms delay for smooth transition
  };

  // Search handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Open dropdown immediately when user starts typing
    if (value.trim()) {
      setIsSearchOpen(true);
    }
  };

  const handleSearchFocus = () => {
    // Always open search dropdown when focused, even if no query yet
    setIsSearchOpen(true);
  };

  const handleSearchResultClick = (resultTitle?: string) => {
    console.log('Search result clicked:', resultTitle);
    
    // If a result title is provided, show it in the search bar
    if (resultTitle) {
      setSearchQuery(resultTitle);
    }
    
    // Close the dropdown
    setIsSearchOpen(false);
    
    // Clear search input focus after a short delay to show the selected text
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }, 100);
  };

  const handleQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
    // Focus the input to show the dropdown
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };


  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
      searchInputRef.current?.blur();
    }
  };

  // Helper function to get navigation section by slug
  const getNavSection = (slug: string): NavigationSection | undefined => {
    return navigationData.find(section => section.slug === slug);
  };

  return (
    <header className="bg-white">
      {/* Main Header Bar */}
      <div className="md:px-12 lg:px-16 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src={headerConfig.logo.src} 
              alt={headerConfig.logo.alt} 
              width={headerConfig.logo.width} 
              height={headerConfig.logo.height} 
            />
          </ Link>

          {/* Center - Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                ref={searchInputRef}
                type="text"
                placeholder={headerConfig.search.placeholder}
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onKeyDown={handleSearchKeyDown}
                className="w-full px-4 py-3 bg-gray-100 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0c6b76] focus:bg-white transition-all duration-200"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0c6b76]" />
              
              {/* Search Dropdown */}
              {useEnhancedSearch ? (
                <EnhancedSearchDropdown
                  isOpen={isSearchOpen}
                  onClose={() => setIsSearchOpen(false)}
                  results={enhancedSearchResults}
                  suggestions={searchSuggestions}
                  isLoading={isSearchLoading}
                  query={searchQuery}
                  onResultClick={handleSearchResultClick}
                  onQueryChange={handleQueryChange}
                  showFilters={true}
                />
              ) : (
                <SearchDropdown
                  isOpen={isSearchOpen}
                  onClose={() => setIsSearchOpen(false)}
                  results={searchResults}
                  isLoading={isSearchLoading}
                  query={searchQuery}
                  onResultClick={handleSearchResultClick}
                />
              )}
            </div>
          </div>

          {/* Right Side - Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {headerConfig.navigation.items.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#0c6b76] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

             {/* Mobile Menu Overlay */}
       {isMobileMenuOpen && (
         <div className={`md:hidden fixed inset-0 bg-black ${headerConfig.mobile.overlayOpacity} z-50`} onClick={() => setIsMobileMenuOpen(false)}>
           <div className={`absolute top-0 right-0 ${headerConfig.mobile.menuWidth} h-full bg-white shadow-lg`} onClick={(e) => e.stopPropagation()}>
             <div className="p-6">
               <div className="flex items-center justify-between mb-6">
                 {/* Logo instead of "Menu" text */}
                 <div className="flex items-center space-x-3">
                   <div className="relative">
                     <div className="w-8 h-8 bg-transparent border-2 border-[#0ca6c2] transform rotate-45"></div>
                     <div className="absolute inset-1 bg-transparent border-2 border-[#0ca6c2] rounded-md flex items-center justify-center">
                       <span className="text-[#0ca6c2] font-bold text-sm transform -rotate-45">P</span>
                     </div>
                   </div>
                   <span className="text-[#0c6b76] font-bold text-lg uppercase">Boxypack</span>
                 </div>
                 <button
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-gray-500 hover:text-gray-700"
                 >
                   <X className="w-6 h-6" />
                 </button>
               </div>
               
               {/* Mobile Search Bar */}
               <div className="mb-6">
                 <div className="relative">
                   <input
                     type="text"
                     placeholder={headerConfig.search.placeholder}
                     value={searchQuery}
                     onChange={handleSearchChange}
                     onFocus={handleSearchFocus}
                     onKeyDown={handleSearchKeyDown}
                     className="w-full px-4 py-3 bg-gray-100 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0c6b76] focus:bg-white transition-all duration-200"
                   />
                   <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0c6b76]" />
                   
                   {/* Mobile Search Dropdown */}
                   {isSearchOpen && (
                     <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-64 overflow-y-auto">
                       {isSearchLoading ? (
                         <div className="px-4 py-8 text-center">
                           <div className="inline-flex items-center text-gray-500">
                             <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0c6b76] mr-2"></div>
                             Searching...
                           </div>
                         </div>
                       ) : (useEnhancedSearch ? enhancedSearchResults : searchResults).length === 0 ? (
                         <div className="px-4 py-8 text-center">
                           <div className="text-gray-500 mb-2">No results found</div>
                           <div className="text-sm text-gray-400">
                             Try searching for custom boxes or packaging
                           </div>
                         </div>
                       ) : (
                         (useEnhancedSearch ? enhancedSearchResults : searchResults).map((result) => (
                           <Link
                             key={result.id}
                             href={result.url}
                             onClick={(e) => {
                               console.log('=== MOBILE LINK CLICK EVENT ===');
                               console.log('Mobile link clicked for:', result.title);
                               console.log('URL:', result.url);
                               console.log('Event:', e);
                               handleSearchResultClick(result.title);
                               setIsMobileMenuOpen(false);
                             }}
                             className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 block"
                             style={{ cursor: 'pointer' }}
                           >
                             <div className="flex items-center">
                               <div className="w-8 h-8 rounded-lg bg-[#0c6b76]/10 text-[#0c6b76] flex items-center justify-center mr-3 flex-shrink-0">
                                 <Package className="w-4 h-4" />
                               </div>
                               <div className="flex-1 min-w-0">
                                 <h3 className="text-sm font-medium text-gray-900 truncate">
                                   {result.title}
                                 </h3>
                                 <p className="text-xs text-gray-600 truncate">
                                   {result.description}
                                 </p>
                               </div>
                             </div>
                           </Link>
                         ))
                       )}
                     </div>
                   )}
                 </div>
               </div>
               
               {/* Mobile Navigation Items */}
               <div className="space-y-4">
                 {headerConfig.navigation.items.map((item) => (
                   <Link 
                     key={item.href}
                     href={item.href} 
                     className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                   >
                     <span className="font-semibold text-gray-900">{item.name}</span>
                   </Link>
                 ))}
               </div>
             </div>
           </div>
         </div>
       )}

      {/* Category Navigation Bar - Hidden on mobile */}
      <div className="hidden md:block white border-t border-gray-200 relative">
        <div className="md:px-20 px-6 py-4">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-12 md:space-x-16 lg:space-x-20">
              {navigationData.map((section) => (
                <div key={section.slug} className="relative">
                    <div
                     className="text-black hover:text-black font-medium transition-colors pb-2 relative group cursor-pointer flex items-center"
                    onMouseEnter={() => setHoveredMainSection(section.slug)}
                     onMouseLeave={() => {
                      // Don't close immediately when leaving the section text
                       // Let the dropdown handle its own hover state
                     }}
                   >
                    <span>{section.name}</span>
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                    {/* Animated border bottom that grows from left to right */}
                    <div 
                      className={`absolute bottom-0 left-0 h-1 bg-[#0c6b76] transition-all duration-500 ease-out ${
                        hoveredMainSection === section.slug ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                  
          {/* Hover Dropdown Menu */}
                  {hoveredMainSection === section.slug && !isClosing && (
                                           <div 
                      className="absolute left-0 w-7xl h-[70vh] z-50 bg-white shadow-lg  transition-all duration-1000 ease-in-out"
                      style={section.slug === 'product-by-industry' ? { left: '-165px' } : { left: '0px' }}
                      onMouseEnter={() => setHoveredMainSection(section.slug)}
                        onMouseLeave={() => {
                          // Only close when user actually leaves the dropdown area
                        setHoveredMainSection(null);
                          setHoveredCategory(null);
                        setHoveredSubcategory(null);
                      }}
                    >
                      {/* Decorative Shape - Top Right Corner Background */}
                      <div className="absolute top-0 right-0 w-96 h-60 pointer-events-none" style={{ zIndex: 10 }}>
                        <Image
                          src="/img/cs_slider_shape.svg"
                          alt="Decorative shape"
                          width={384}
                          height={240}
                          className="w-full h-full object-cover opacity-60"
                        />
                      </div>
                      <div className="w-full h-full flex">
                        <div className="w-full px-0 py-6 h-full">
                          {section.hasSubcategories && section.categories ? (
                            <div className="flex h-full">
                              {section.slug === 'product-by-material' ? (
                                // Special layout for Products only
                                 <div className="w-full px-6 py-2">
                                   <div className="grid grid-cols-4 gap-0 max-h-80">
                                  {/* Column 1: PRODUCTS (Materials) */}
                                  <div>
                                    {/* <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">PRODUCTS</h3> */}
                                    <div className="space-y-3">
                                      {section.categories.filter(cat => 
                                        ['rigid', 'kraft', 'cardboard', 'corrugated'].some(material => 
                                          cat.name.toLowerCase().includes(material)
                                        )
                                      ).map((category) => (
                                        <Link
                                          key={category.slug}
                                          href={`/products/${section.slug}/${category.slug}`}
                                          onClick={handleSmoothClose}
                                          className="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                        >
                                          <Image
                                            src={getCategoryIcon(category.name)}
                                            alt={category.name}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 mr-3 flex-shrink-0 rounded-lg"
                                          />
                                          <div>
                                            <div className="font-medium text-sm">{category.name}</div>
                                            <div className="text-xs text-gray-500">
                                              {category.name.includes('rigid') ? 'Premium and luxurious packaging' :
                                               category.name.includes('kraft') ? 'Eco-friendly natural packaging' :
                                               category.name.includes('cardboard') ? 'Versatile all-round packaging' :
                                               category.name.includes('corrugated') ? 'Sturdy and durable packaging' :
                                               'Custom packaging solutions'}
                                        </div>
                                    </div>
                                        </Link>
                                  ))}
                               </div>
                             </div>
                             
                                  {/* Column 2: MYLAR BOXES & SHOPPING BAGS */}
                                  <div>
                                     <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">MYLAR BOXES</h3>
                                     <div className="space-y-3 mb-6">
                                       {section.categories.filter(cat => 
                                         cat.name.toLowerCase().includes('mylar')
                                       ).map((category) => (
                                        <div key={category.slug}>
                                          {category.subcategories.map((subcategory) => (
                                            <Link
                                              key={subcategory.slug}
                                              href={`/products/${category.slug}/${subcategory.slug}`}
                                              onClick={handleSmoothClose}
                                              className="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                            >
                                              <Image
                                                src={getSubcategoryIcon(subcategory.name)}
                                                alt={subcategory.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 mr-3 flex-shrink-0 rounded-lg"
                                              />
                                              <div>
                                                <div className="font-medium text-sm">{subcategory.name}</div>
                                                <div className="text-xs text-gray-500">Self-locking packaging solutions</div>
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">SHOPPING BAGS</h3>
                                    <div className="space-y-3">
                                      {section.categories.filter(cat => 
                                        cat.name.toLowerCase().includes('shopping bags')
                                      ).map((category) => (
                                        <div key={category.slug}>
                                          {category.subcategories.map((subcategory) => (
                                            <Link
                                              key={subcategory.slug}
                                              href={`/products/${category.slug}/${subcategory.slug}`}
                                              onClick={handleSmoothClose}
                                              className="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                            >
                                              <Image
                                                src={getSubcategoryIcon(subcategory.name)}
                                                alt={subcategory.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 mr-3 flex-shrink-0 rounded-lg"
                                              />
                                              <div>
                                                <div className="font-medium text-sm">{subcategory.name}</div>
                                                <div className="text-xs text-gray-500">Eco-friendly bag solutions</div>
                                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Column 3: OTHERS (Part 1) */}
                                  <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">OTHERS</h3>
                                    <div className="space-y-3">
                                      {section.categories.filter(cat => 
                                        cat.name.toLowerCase().includes('other')
                                      ).map((category) => (
                                        <div key={category.slug}>
                                          {category.subcategories.slice(0, Math.ceil(category.subcategories.length / 2)).map((subcategory) => (
                                              <Link
                                                key={subcategory.slug}
                                              href={`/products/${category.slug}/${subcategory.slug}`}
                                                onClick={handleSmoothClose}
                                              className="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                            >
                                              <Image
                                                src={getSubcategoryIcon(subcategory.name)}
                                                alt={subcategory.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 mr-3 flex-shrink-0 rounded-lg"
                                                onError={(e) => {
                                                  console.error('Image failed to load:', getSubcategoryIcon(subcategory.name), 'for:', subcategory.name);
                                                }}
                                                onLoad={() => {
                                                  console.log('Image loaded successfully:', getSubcategoryIcon(subcategory.name), 'for:', subcategory.name);
                                                }}
                                              />
                                              <div>
                                                <div className="font-medium text-sm">{subcategory.name}</div>
                                                <div className="text-xs text-gray-500">Additional packaging accessories</div>
                                              </div>
                                              </Link>
                                            ))}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Column 4: OTHERS (Part 2) */}
                                  <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">&nbsp;</h3>
                                    <div className="space-y-3">
                                      {section.categories.filter(cat => 
                                        cat.name.toLowerCase().includes('other')
                                      ).map((category) => (
                                        <div key={category.slug}>
                                          {category.subcategories.slice(Math.ceil(category.subcategories.length / 2)).map((subcategory) => (
                                            <Link
                                              key={subcategory.slug}
                                              href={`/products/${category.slug}/${subcategory.slug}`}
                                              onClick={handleSmoothClose}
                                              className="flex items-center px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                            >
                                              <Image
                                                src={getSubcategoryIcon(subcategory.name)}
                                                alt={subcategory.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 mr-3 flex-shrink-0 rounded-lg"
                                                onError={(e) => {
                                                  console.error('Image failed to load:', getSubcategoryIcon(subcategory.name), 'for:', subcategory.name);
                                                }}
                                                onLoad={() => {
                                                  console.log('Image loaded successfully:', getSubcategoryIcon(subcategory.name), 'for:', subcategory.name);
                                                }}
                                              />
                                              <div>
                                                <div className="font-medium text-sm">{subcategory.name}</div>
                                                <div className="text-xs text-gray-500">Additional packaging accessories</div>
                              </div>
                                            </Link>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  </div>
                              </div>
                              ) : (
                                // Simple grid layout for Industries and other sections
                                <div className="w-full px-6">
                                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-h-80 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 pt-4 pb-4">
                                    {section.categories.map((category) => (
                                      <Link
                                        key={category.slug}
                                        href={`/products/${section.slug}/${category.slug}`}
                                        onClick={handleSmoothClose}
                                        className="flex items-center px-4 py-3 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                      >
                                        <Image
                                          src={getCategoryIcon(category.name)}
                                          alt={category.name}
                                          width={32}
                                          height={32}
                                          className="w-8 h-8 mr-3 flex-shrink-0"
                                        />
                                        <span className="font-medium text-sm">{category.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            // Simple dropdown for sections without subcategories - using same layout as complex dropdowns
                            <div className="flex h-full">
                              {/* Left Side - Section Info */}
                              <div className="w-1/4 pr-6 border-r border-gray-200">
                                <div className="flex items-center h-full">
                                  <div className="text-center w-full">
                                    <div className="flex items-center justify-center mb-4">
                                      <Image
                                        src={getCategoryIcon(section.name)}
                                        alt={section.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 mr-4"
                                      />
                                      <h2 className="text-xl font-bold text-[#0c6b76]">
                                        {section.name}
                                      </h2>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                      {section.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Right Side - Subcategories */}
                              <div className="w-3/4 pl-6">
                                <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                                  {section.subcategories?.map((subcategory) => (
                                    <Link
                                      key={subcategory.slug}
                                      href={`/products/${section.slug}/${subcategory.slug}`}
                                      onClick={handleSmoothClose}
                                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#0c6b76] hover:bg-[#0c6b76]/5 rounded-md transition-colors"
                                    >
                                      <span className="truncate">{subcategory.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                         </div>
                       </div>
                     </div>
                   )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
