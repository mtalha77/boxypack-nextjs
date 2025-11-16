"use client";

import React, { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import { useRouter, usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Search,
  Menu,
  X,
  Package,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import {
  navigationData,
  NavigationSection,
  MainCategory,
} from "../data/navigationData";
import {
  headerConfig,
  getCategoryIcon,
  getSubcategoryIcon,
} from "../data/headerData";
import SearchDropdown from "./SearchDropdown";
import EnhancedSearchDropdown from "./EnhancedSearchDropdown";
import CartDropdown from "./CartDropdown";
import { useCart } from "../contexts/CartContext";
import {
  getAllSearchData,
  searchData,
  SearchResult,
} from "../utils/searchData";
import {
  getAllEnhancedSearchData,
  enhancedSearch,
  getSearchSuggestions,
  EnhancedSearchResult,
  SearchSuggestion,
} from "../utils/enhancedSearchData";

// Icon mapping functions are now imported from headerData.ts

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMainSection, setHoveredMainSection] = useState<string | null>(
    null
  );
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(
    null
  );
  const [isClosing, setIsClosing] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState<
    Set<string>
  >(new Set());

  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();

  // Company dropdown state
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [enhancedSearchResults, setEnhancedSearchResults] = useState<
    EnhancedSearchResult[]
  >([]);
  const [searchSuggestions, setSearchSuggestions] = useState<
    SearchSuggestion[]
  >([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [allSearchData, setAllSearchData] = useState<SearchResult[]>([]);
  const [allEnhancedSearchData, setAllEnhancedSearchData] = useState<
    EnhancedSearchResult[]
  >([]);
  const [useEnhancedSearch, setUseEnhancedSearch] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Initialize search data
  useEffect(() => {
    const searchData = getAllSearchData();
    const enhancedData = getAllEnhancedSearchData();
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
          const suggestions = getSearchSuggestions(
            searchQuery,
            allEnhancedSearchData
          );
          setEnhancedSearchResults(results);
          setSearchSuggestions(suggestions);
        } else {
          const results = searchData(searchQuery, allSearchData);
          setSearchResults(results);
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

  // Close search and company dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close search when URL changes (navigation occurs)
  const pathname = usePathname();
  useEffect(() => {
    const handleRouteChange = () => {
      setIsSearchOpen(false);
      setSearchQuery("");
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

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
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

  // Function to toggle mobile section expansion
  const toggleMobileSection = (sectionSlug: string) => {
    setMobileExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionSlug)) {
        newSet.delete(sectionSlug);
      } else {
        newSet.add(sectionSlug);
      }
      return newSet;
    });
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

  // Company dropdown handlers with delay
  const handleCompanyDropdownEnter = () => {
    if (companyDropdownTimeoutRef.current) {
      clearTimeout(companyDropdownTimeoutRef.current);
    }
    setIsCompanyDropdownOpen(true);
  };

  const handleCompanyDropdownLeave = () => {
    companyDropdownTimeoutRef.current = setTimeout(() => {
      setIsCompanyDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      setSearchQuery("");
      searchInputRef.current?.blur();
    }
  };

  // Helper function to get navigation section by slug
  const getNavSection = (slug: string): NavigationSection | undefined => {
    return navigationData.find((section) => section.slug === slug);
  };

  // Restrict visible categories for industries until content is ready
  const allowedIndustryCategoryNames = new Set<string>([
    "Bakery Boxes",
    "Jewelry Boxes",
    "Soap Boxes",
  ]);
  const getVisibleCategories = (section: NavigationSection) => {
    if (section.slug === "product-by-industry" && section.categories) {
      return section.categories.filter((c) =>
        allowedIndustryCategoryNames.has(c.name)
      );
    }
    return section.categories || [];
  };

  return (
    <header className="bg-white">
      {/* Main Header Bar */}
      <div className="md:px-12 lg:px-16 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo */}
          <Link href="/" className="flex items-center">
            <CldImage
              src={headerConfig.logo.iconPath}
              alt={headerConfig.logo.alt}
              width={headerConfig.logo.width}
              height={headerConfig.logo.height}
              priority
            />
          </Link>

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
                className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0c6b76] focus:bg-white transition-all duration-200"
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
            {headerConfig.navigation.items.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={companyDropdownRef}
                  onMouseEnter={handleCompanyDropdownEnter}
                  onMouseLeave={handleCompanyDropdownLeave}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isCompanyDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Company Dropdown */}
                  {isCompanyDropdownOpen && item.dropdownItems && (
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#0c6b76] transition-colors font-medium"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href || "#"}
                  className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-700 hover:text-[#0c6b76] transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#0c6b76] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-700 hover:text-[#0c6b76] transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#0c6b76] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#0c6b76] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 bg-black ${headerConfig.mobile.overlayOpacity} z-50`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 ${headerConfig.mobile.menuWidth} h-full bg-white shadow-lg overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 pb-20">
              <div className="flex items-center justify-between mb-6">
                {/* mobile logo */}
                <Link href="/" className="flex items-center">
                  <CldImage
                    src={headerConfig.logo.iconPath}
                    alt={headerConfig.logo.alt}
                    width={headerConfig.logo.width}
                    height={headerConfig.logo.height}
                    priority
                  />
                </Link>
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
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={handleSearchFocus}
                    onKeyDown={handleSearchKeyDown}
                    className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0c6b76] focus:bg-white transition-all duration-200"
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
                      ) : (useEnhancedSearch
                          ? enhancedSearchResults
                          : searchResults
                        ).length === 0 ? (
                        <div className="px-4 py-8 text-center">
                          <div className="text-gray-500 mb-2">
                            No results found
                          </div>
                          <div className="text-sm text-gray-400">
                            Try searching for custom boxes or packaging
                          </div>
                        </div>
                      ) : (
                        (useEnhancedSearch
                          ? enhancedSearchResults
                          : searchResults
                        ).map((result) => (
                          <Link
                            key={result.id}
                            href={result.url}
                            onClick={() => {
                              handleSearchResultClick(result.title);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 block"
                            style={{ cursor: "pointer" }}
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

              {/* Mobile Category Navigation */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {navigationData.map((section) => {
                    const isExpanded = mobileExpandedSections.has(section.slug);
                    return (
                      <div
                        key={section.slug}
                        className="border-b border-gray-200"
                      >
                        <button
                          onClick={() => toggleMobileSection(section.slug)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-medium text-gray-900">
                            {section.name}
                          </h4>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-4">
                            <div className="pt-3 space-y-2">
                              {section.categories
                                ? section.categories.flatMap((category) => {
                                    // For Mylar Boxes, Shopping Bags, and Others, show subcategories directly
                                    if (
                                      [
                                        "mylar-boxes",
                                        "shopping-bags",
                                        "other",
                                      ].includes(section.slug)
                                    ) {
                                      return (
                                        category.subcategories?.map(
                                          (subcategory) => (
                                            <Link
                                              key={subcategory.slug}
                                              href={`/products/${section.slug}/${subcategory.slug}`}
                                              onClick={() =>
                                                setIsMobileMenuOpen(false)
                                              }
                                                  className="flex items-center gap-2 py-2 px-3 text-sm text-gray-600 hover:text-[#0c6b76] hover:bg-gray-50 rounded-md transition-colors"
                                            >
                                                  <CldImage
                                                    src={getSubcategoryIcon(
                                                      subcategory.name
                                                    )}
                                                    alt={subcategory.name}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6 flex-shrink-0"
                                                  />
                                              {subcategory.name}
                                            </Link>
                                          )
                                        ) || []
                                      );
                                    } else {
                                      // For Materials and Industries, show categories
                                      const categoriesToShow =
                                        section.slug === "product-by-industry"
                                          ? getVisibleCategories(section)
                                          : section.categories;
                                      return (categoriesToShow || []).map((cat) => (
                                        <Link
                                          key={cat.slug}
                                          href={`/products/${section.slug}/${cat.slug}`}
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                          className="block py-2 px-3 text-sm text-gray-600 hover:text-[#0c6b76] hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                          {cat.name}
                                        </Link>
                                      ));
                                    }
                                  })
                                : // Fallback for sections with direct subcategories
                                  section.subcategories?.map((subcategory) => (
                                    <Link
                                      key={subcategory.slug}
                                      href={`/products/${section.slug}/${subcategory.slug}`}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="group flex items-center gap-2 py-2 px-3 text-gray-600 hover:text-[#0c6b76] hover:bg-gray-50 rounded-md transition-colors"
                                    >
                                      <ArrowRight className="w-4 h-4 text-black" />
                                      <span className="text-sm font-medium">
                                        {subcategory.name}
                                      </span>
                                    </Link>
                                  ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Pages
                </h3>
                {headerConfig.navigation.items.map((item) =>
                  item.hasDropdown && item.dropdownItems ? (
                    <div key={item.name} className="space-y-2">
                      <div className="font-semibold text-gray-900 px-4 py-2 bg-gray-100 rounded-lg">
                        {item.name}
                      </div>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block py-2 px-6 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href || "#"}
                      className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-semibold text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Dropdown */}
      <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Category Navigation Bar - Hidden on mobile */}
      <div className="hidden md:block white border-t border-gray-200 relative">
        <div className="md:px-20 px-6 py-4">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-12 md:space-x-16 lg:space-x-20">
              {navigationData.map((section) => (
                <div key={section.slug} className="relative">
                  <div
                    className="text-black hover:text-black font-medium transition-colors pb-2 relative group cursor-pointer flex items-center"
                    onMouseEnter={() => {
                      setHoveredMainSection(section.slug);
                      // For material and industry sections, set first category as hovered by default
                      if (
                        (section.slug === "product-by-material" ||
                          section.slug === "product-by-industry") &&
                        section.categories &&
                        section.categories.length > 0
                      ) {
                        setHoveredCategory(section.categories[0].slug);
                      }
                    }}
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
                        hoveredMainSection === section.slug ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>

                  {/* Hover Dropdown Menu */}
                  {hoveredMainSection === section.slug && !isClosing && (
                    <div
                      className={`absolute left-0 w-auto max-h-[70vh] z-50 bg-white shadow-lg transition-all duration-1000 ease-in-out ${
                        section.slug === "product-by-industry" ||
                        section.slug === "product-by-material"
                          ? "min-w-[56rem] max-w-5xl"
                          : section.slug === "other"
                          ? "min-w-[32rem] max-w-6xl"
                          : "min-w-96 max-w-4xl"
                      }`}
                      style={
                        section.slug === "product-by-industry"
                          ? { left: "0px" }
                          : { left: "0px" }
                      }
                      onMouseEnter={() => setHoveredMainSection(section.slug)}
                      onMouseLeave={() => {
                        // Only close when user actually leaves the dropdown area
                        setHoveredMainSection(null);
                        setHoveredCategory(null);
                        setHoveredSubcategory(null);
                      }}
                    >
                      {/* Decorative Shape - Top Right Corner Background */}
                      <div
                        className="absolute top-0 right-0 w-96 h-60 pointer-events-none"
                        style={{ zIndex: 10 }}
                      >
                        <CldImage
                          src="cs_slider_shape_yszisl"
                          alt="Decorative shape"
                          width={384}
                          height={240}
                          className="w-full h-full object-cover opacity-60"
                        />
                      </div>
                      <div className="w-full flex">
                        <div className="w-full px-0 py-6">
                          {section.hasSubcategories ? (
                            <div className="flex">
                              {section.categories ? (
                                // Special layout for product-by-material and product-by-industry with two columns
                                section.slug === "product-by-material" ||
                                section.slug === "product-by-industry" ? (
                                  <div className="flex w-full">
                                    {/* Left Column - Categories */}
                                    <div className="w-1/3 px-6 border-r border-gray-200 max-h-[60vh] overflow-y-auto">
                                      <div className="space-y-2 pt-4 pb-4">
                                        {(section.slug === "product-by-industry"
                                          ? getVisibleCategories(section)
                                          : section.categories
                                        )?.map((category) => (
                                          <Link
                                            key={category.slug}
                                            href={`/products/${section.slug}/${category.slug}`}
                                            onMouseEnter={() =>
                                              setHoveredCategory(category.slug)
                                            }
                                            className={`flex items-center px-4 py-3 rounded-lg transition-all cursor-pointer ${
                                              hoveredCategory === category.slug
                                                ? "bg-[#0c6b76]/10 text-[#0c6b76]"
                                                : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                          >
                                            <CldImage
                                              src={getCategoryIcon(
                                                category.name
                                              )}
                                              alt={category.name}
                                              width={32}
                                              height={32}
                                              className="w-8 h-8 mr-3 flex-shrink-0"
                                            />
                                            <span className="font-medium text-sm">
                                              {category.name}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Right Column - Subcategories */}
                                    <div className="w-2/3 px-6 max-h-[60vh] overflow-y-auto">
                                      <div className="pt-4 pb-4">
                                        {hoveredCategory ? (
                                          <div>
                                            <h3 className="text-lg font-semibold text-[#0c6b76] mb-4">
                                              {
                                                (
                                                  (section.slug ===
                                                  "product-by-industry"
                                                    ? getVisibleCategories(
                                                        section
                                                      )
                                                    : section.categories) || []
                                                ).find(
                                                  (cat) =>
                                                    cat.slug === hoveredCategory
                                                )?.name
                                              }{" "}
                                              Products
                                            </h3>
                                            <div className="grid grid-cols-2 gap-3">
                                              {(
                                                (section.slug ===
                                                "product-by-industry"
                                                  ? getVisibleCategories(
                                                      section
                                                    )
                                                  : section.categories) || []
                                              )
                                                .find(
                                                  (cat) =>
                                                    cat.slug === hoveredCategory
                                                )
                                                ?.subcategories?.map(
                                                  (subcategory) => (
                                                    <Link
                                                      key={subcategory.slug}
                                                      href={`/products/${section.slug}/${hoveredCategory}/${subcategory.slug}`}
                                                      onClick={
                                                        handleSmoothClose
                                                      }
                                                    className="flex items-start px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] hover:bg-[#0c6b76]/5 group"
                                                    >
                                                      <ArrowRight className="w-4 h-4 mr-2 text-black mt-0.5" />
                                                      <span className="text-sm leading-tight font-medium">
                                                        {subcategory.name}
                                                      </span>
                                                    </Link>
                                                  )
                                                ) || []}
                                            </div>
                                          </div>
                                        ) : (
                                          <div className="flex items-center justify-center min-h-[200px] text-gray-400">
                                            <div className="text-center">
                                              <Package className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                              <p className="text-sm">
                                                Hover over a{" "}
                                                {section.slug ===
                                                "product-by-material"
                                                  ? "material"
                                                  : "industry"}{" "}
                                                to see products
                                              </p>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  // Layout for other sections with categories
                                  <div className="w-full px-6">
                                    <div
                                      className={`grid gap-4 pt-4 pb-4 ${
                                        section.slug === "other"
                                          ? "grid-cols-2"
                                          : "grid-cols-1"
                                      }`}
                                    >
                                      {section.categories.flatMap(
                                        (category) => {
                                          // For Mylar Boxes, Shopping Bags, and Others, show subcategories directly
                                          if (
                                            [
                                              "mylar-boxes",
                                              "shopping-bags",
                                              "other",
                                            ].includes(section.slug)
                                          ) {
                                            return (
                                              category.subcategories?.map(
                                                (subcategory) => (
                                                  <Link
                                                    key={subcategory.slug}
                                                    href={`/products/${section.slug}/${subcategory.slug}`}
                                                    onClick={handleSmoothClose}
                                                    className="flex items-center px-4 py-3 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                                  >
                                                    <CldImage
                                                      src={getSubcategoryIcon(
                                                        subcategory.name
                                                      )}
                                                      alt={subcategory.name}
                                                      width={32}
                                                      height={32}
                                                      className="w-8 h-8 mr-3 flex-shrink-0"
                                                    />
                                                    <span className="font-medium text-sm">
                                                      {subcategory.name}
                                                    </span>
                                                  </Link>
                                                )
                                              ) || []
                                            );
                                          } else {
                                            // For other sections, show categories
                                            return (
                                              <Link
                                                key={category.slug}
                                                href={`/products/${section.slug}/${category.slug}`}
                                                onClick={handleSmoothClose}
                                                className="flex items-center px-4 py-3 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                              >
                                                <CldImage
                                                  src={getCategoryIcon(
                                                    category.name
                                                  )}
                                                  alt={category.name}
                                                  width={32}
                                                  height={32}
                                                  className="w-8 h-8 mr-3 flex-shrink-0"
                                                />
                                                <span className="font-medium text-sm">
                                                  {category.name}
                                                </span>
                                              </Link>
                                            );
                                          }
                                        }
                                      )}
                                    </div>
                                  </div>
                                )
                              ) : (
                                // Layout for sections with direct subcategories (fallback)
                                <div className="w-full px-6">
                                  <div className="grid grid-cols-1 gap-4 pt-4 pb-4">
                                    {section.subcategories?.map(
                                      (subcategory) => (
                                        <Link
                                          key={subcategory.slug}
                                          href={`/products/${section.slug}/${subcategory.slug}`}
                                          onClick={handleSmoothClose}
                                          className="flex items-center px-4 py-3 rounded-lg transition-colors text-gray-700 hover:text-[#0c6b76] group"
                                        >
                                          {["mylar-boxes","shopping-bags","other"].includes(section.slug) ? (
                                            <CldImage
                                              src={getSubcategoryIcon(
                                                subcategory.name
                                              )}
                                              alt={subcategory.name}
                                              width={32}
                                              height={32}
                                              className="w-8 h-8 mr-3 flex-shrink-0"
                                            />
                                          ) : (
                                            <ArrowRight className="w-4 h-4 mr-2 text-black" />
                                          )}
                                          <span className="font-medium text-sm">
                                            {subcategory.name}
                                          </span>
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            // Simple dropdown for sections without subcategories - using same layout as complex dropdowns
                            <div className="flex">
                              {/* Left Side - Section Info */}
                              <div className="w-1/4 pr-6 border-r border-gray-200">
                                <div className="flex items-center">
                                  <div className="text-center w-full">
                                    <div className="flex items-center justify-center mb-4">
                                      <CldImage
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
                                <div className="grid grid-cols-1 gap-2">
                                  {section.subcategories?.map((subcategory) => (
                                    <Link
                                      key={subcategory.slug}
                                      href={`/products/${section.slug}/${subcategory.slug}`}
                                      onClick={handleSmoothClose}
                                      className="group flex items-center px-3 py-2 text-gray-600 hover:text-[#0c6b76] hover:bg-[#0c6b76]/5 rounded-md transition-colors"
                                    >
                                      <ArrowRight className="w-4 h-4 mr-2 text-black" />
                                      <span className="truncate text-sm font-medium">
                                        {subcategory.name}
                                      </span>
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
