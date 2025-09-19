'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Menu, 
  X, 
  ChevronRight,
  Package,
  Box,
  Archive,
  Layers,
  ShoppingBag,
  Gift,
  Heart,
  Star,
  Coffee,
  Shirt,
  Gem,
  Zap,
  Cigarette,
  Leaf,
  Droplets,
  Flame,
  BookOpen,
  Calendar,
  Tag,
  FileText,
  Printer,
  Briefcase,
  Car,
  Home,
  Utensils,
  Gamepad2,
  Crown,
  Sparkles,
  Truck,
  Mail,
  Lock,
  Eye,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pill,
  Pen,
  Cookie,
  Pizza,
  Wheat,
  Watch,
  Book,
  Presentation,
  Candy,
  Milk,
  Slice,
  Tags,
  Table,
  Tent,
  // Box-related icons only
  HardHat,
  Recycle,
  Shield,
  Award,
  Snowflake,
  Sun,
  Moon,
  TreePine,
  Flower,
  Fish,
  Carrot,
  Apple,
  Cherry,
  IceCream,
  Cake,
  Wine,
  Beer,
  Syringe,
  Stethoscope,
  Microscope,
  TestTube,
  Beaker,
  Atom,
  Dna,
  Activity,
  Footprints,
  Dumbbell,
  Trophy,
  Medal,
  Target,
  Crosshair,
  Key,
  Unlock,
  EyeOff,
  Camera,
  Video,
  Headphones,
  Speaker,
  Mic,
  Radio,
  Tv,
  Monitor,
  Smartphone,
  Laptop,
  Tablet,
  Mouse,
  Keyboard,
  HardDrive,
  Database,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  Battery,
  Plug,
  Lightbulb,
  Flashlight,
  Diamond,
  Octagon,
  Pentagon,
  RectangleHorizontal,
  RectangleVertical,
  Ellipsis,
  Plus,
  Minus,
  Check,
  AlertCircle,
  AlertTriangle,
  Info,
  Ban,
  CheckCircle,
  XCircle,
  Clock,
  Timer,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarClock,
  CalendarHeart
} from 'lucide-react';
import Link from 'next/link';
import { navigationData, NavigationSection, MainCategory } from '../data/navigationData';
import SearchDropdown from './SearchDropdown';
import { getAllSearchData, searchData, SearchResult } from '../utils/searchData';

// Icon mapping functions
const getCategoryIcon = (categoryName: string) => {
  const name = categoryName.toLowerCase();
  
  // Main navigation sections - all use box-related icons
  if (name.includes('product by material')) return Layers; // Layered materials
  if (name.includes('product by industry')) return Package; // Industry packaging
  if (name.includes('pouches')) return Archive; // Flexible packaging
  if (name.includes('shopping bags')) return ShoppingBag; // Shopping containers
  if (name.includes('other')) return Tag; // Miscellaneous packaging
  
  // Material categories - all use box-related icons
  if (name.includes('rigid')) return Shield; // Strong, protective boxes
  if (name.includes('kraft')) return Recycle; // Eco-friendly boxes
  if (name.includes('cardboard')) return Box; // Basic cardboard boxes
  if (name.includes('corrugated')) return Layers; // Layered structure boxes
  
  // Industry categories - all use box-related icons
  if (name.includes('bakery')) return Package; // Bakery boxes
  if (name.includes('cosmetic')) return Package; // Cosmetic boxes
  if (name.includes('food')) return Package; // Food boxes
  if (name.includes('gift')) return Gift; // Gift boxes
  if (name.includes('jewelry')) return Package; // Jewelry boxes
  if (name.includes('retail')) return ShoppingBag; // Retail boxes
  if (name.includes('candle')) return Package; // Candle boxes
  if (name.includes('shipping')) return Truck; // Shipping boxes
  if (name.includes('soap')) return Package; // Soap boxes
  if (name.includes('apparel')) return Package; // Apparel boxes
  if (name.includes('sports')) return Package; // Sports boxes
  if (name.includes('cigarette')) return Package; // Cigarette boxes
  if (name.includes('cbd')) return Package; // CBD boxes
  if (name.includes('e-liquid')) return Package; // E-liquid boxes
  if (name.includes('stationery')) return Package; // Stationery boxes
  if (name.includes('christmas')) return Package; // Christmas boxes
  if (name.includes('chocolate')) return Package; // Chocolate boxes
  if (name.includes('cereal')) return Package; // Cereal boxes
  if (name.includes('pre roll')) return Package; // Pre-roll boxes
  if (name.includes('pizza')) return Package; // Pizza boxes
  
  return Package; // Default box icon
};

const getSubcategoryIcon = (subcategoryName: string) => {
  const name = subcategoryName.toLowerCase();
  
  // Box construction types - all use box-related icons
  if (name.includes('magnetic')) return Lock; // Magnetic closure boxes
  if (name.includes('two piece')) return Square; // Two-piece boxes
  if (name.includes('collapsible') || name.includes('foldable')) return Archive; // Foldable boxes
  if (name.includes('sliding') || name.includes('sleeve')) return Layers; // Sliding boxes
  if (name.includes('child resistant')) return Shield; // Child-resistant boxes
  if (name.includes('brief case')) return Briefcase; // Briefcase boxes
  if (name.includes('book style')) return Book; // Book-style boxes
  if (name.includes('hexagon')) return Hexagon; // Hexagonal boxes
  if (name.includes('round')) return Circle; // Round boxes
  if (name.includes('shoulder')) return Package; // Shoulder boxes
  if (name.includes('pillow')) return Package; // Pillow boxes
  if (name.includes('gable')) return Triangle; // Gable boxes
  if (name.includes('tuck')) return Square; // Tuck boxes
  if (name.includes('window')) return Eye; // Window boxes
  if (name.includes('display')) return Eye; // Display boxes
  if (name.includes('dispenser')) return Package; // Dispenser boxes
  if (name.includes('hanger')) return Package; // Hanger boxes
  if (name.includes('inserts')) return Layers; // Box inserts
  if (name.includes('auto bottom')) return Package; // Auto bottom boxes
  if (name.includes('seal end')) return Lock; // Seal end boxes
  if (name.includes('blister')) return Package; // Blister boxes
  if (name.includes('full flap')) return Package; // Full flap boxes
  
  // Specific product types - all use box-related icons
  if (name.includes('mailer')) return Mail; // Mailer boxes
  if (name.includes('shipping')) return Truck; // Shipping boxes
  
  // All product categories use box-related icons
  if (name.includes('donut')) return Package; // Donut boxes
  if (name.includes('pastry')) return Package; // Pastry boxes
  if (name.includes('cake')) return Package; // Cake boxes
  if (name.includes('cookie')) return Package; // Cookie boxes
  if (name.includes('candy')) return Package; // Candy boxes
  if (name.includes('cupcake')) return Package; // Cupcake boxes
  if (name.includes('truffle')) return Package; // Truffle boxes
  if (name.includes('sweet')) return Package; // Sweet boxes
  
  // Cosmetic boxes
  if (name.includes('perfume')) return Package; // Perfume boxes
  if (name.includes('makeup')) return Package; // Makeup boxes
  if (name.includes('lipstick')) return Package; // Lipstick boxes
  if (name.includes('mascara')) return Package; // Mascara boxes
  if (name.includes('nail polish')) return Package; // Nail polish boxes
  if (name.includes('lip balm')) return Package; // Lip balm boxes
  if (name.includes('foundation')) return Package; // Foundation boxes
  if (name.includes('lotion')) return Package; // Lotion boxes
  if (name.includes('eyelash')) return Package; // Eyelash boxes
  if (name.includes('cream')) return Package; // Cream boxes
  if (name.includes('oil')) return Package; // Oil boxes
  if (name.includes('serum')) return Package; // Serum boxes
  if (name.includes('hair')) return Package; // Hair boxes
  if (name.includes('eye shadow')) return Package; // Eye shadow boxes
  if (name.includes('eyeliner')) return Package; // Eyeliner boxes
  
  // Food boxes
  if (name.includes('french fry')) return Package; // French fry boxes
  if (name.includes('coffee')) return Package; // Coffee boxes
  if (name.includes('noodle')) return Package; // Noodle boxes
  if (name.includes('popcorn')) return Package; // Popcorn boxes
  if (name.includes('snack')) return Package; // Snack boxes
  if (name.includes('tea')) return Package; // Tea boxes
  if (name.includes('burger')) return Package; // Burger boxes
  if (name.includes('sandwich')) return Package; // Sandwich boxes
  if (name.includes('chinese takeout')) return Package; // Chinese takeout boxes
  if (name.includes('pizza')) return Package; // Pizza boxes
  
  // Gift boxes
  if (name.includes('gift')) return Gift; // Gift boxes
  if (name.includes('birthday')) return Gift; // Birthday boxes
  if (name.includes('party')) return Gift; // Party boxes
  if (name.includes('favor')) return Gift; // Favor boxes
  if (name.includes('deluxe')) return Package; // Deluxe boxes
  if (name.includes('luxury')) return Package; // Luxury boxes
  if (name.includes('small')) return Package; // Small boxes
  if (name.includes('large')) return Package; // Large boxes
  
  // Jewelry boxes
  if (name.includes('anklet')) return Package; // Anklet boxes
  if (name.includes('velvet')) return Package; // Velvet boxes
  if (name.includes('jewelry')) return Package; // Jewelry boxes
  if (name.includes('pendant')) return Package; // Pendant boxes
  if (name.includes('bracelet')) return Package; // Bracelet boxes
  if (name.includes('ring')) return Package; // Ring boxes
  if (name.includes('earring')) return Package; // Earring boxes
  if (name.includes('necklace')) return Package; // Necklace boxes
  if (name.includes('subscription')) return Package; // Subscription boxes
  if (name.includes('bags')) return Package; // Jewelry bags
  if (name.includes('cards')) return Package; // Jewelry cards
  
  // Apparel boxes
  if (name.includes('cufflink')) return Package; // Cufflink boxes
  if (name.includes('tie')) return Package; // Tie boxes
  if (name.includes('belt')) return Package; // Belt boxes
  if (name.includes('clothing')) return Package; // Clothing boxes
  if (name.includes('lingerie')) return Package; // Lingerie boxes
  if (name.includes('underwear')) return Package; // Underwear boxes
  if (name.includes('tshirt')) return Package; // T-shirt boxes
  if (name.includes('socks')) return Package; // Socks boxes
  
  // Sports boxes
  if (name.includes('shoe')) return Package; // Shoe boxes
  if (name.includes('golf')) return Package; // Golf boxes
  if (name.includes('football')) return Package; // Football boxes
  if (name.includes('ball')) return Package; // Ball boxes
  
  // Tobacco boxes
  if (name.includes('cigarette')) return Package; // Cigarette boxes
  if (name.includes('empty')) return Package; // Empty boxes
  if (name.includes('blank')) return Package; // Blank boxes
  if (name.includes('flip top')) return Package; // Flip top boxes
  if (name.includes('paper')) return Package; // Paper boxes
  
  // CBD/Cannabis boxes
  if (name.includes('cbd')) return Package; // CBD boxes
  if (name.includes('cannabis')) return Package; // Cannabis boxes
  if (name.includes('gummies')) return Package; // Gummies boxes
  if (name.includes('hemp')) return Package; // Hemp boxes
  if (name.includes('pre roll')) return Package; // Pre-roll boxes
  if (name.includes('tincture')) return Package; // Tincture boxes
  if (name.includes('delta')) return Package; // Delta boxes
  
  // Vape boxes
  if (name.includes('vape')) return Package; // Vape boxes
  if (name.includes('cartridge')) return Package; // Cartridge boxes
  if (name.includes('disposable')) return Package; // Disposable boxes
  if (name.includes('e liquid')) return Package; // E-liquid boxes
  
  // Stationery boxes
  if (name.includes('pencil')) return Package; // Pencil boxes
  if (name.includes('pen')) return Package; // Pen boxes
  if (name.includes('book')) return Package; // Book boxes
  if (name.includes('presentation')) return Package; // Presentation boxes
  if (name.includes('folder')) return Package; // Folder boxes
  
  // Holiday boxes
  if (name.includes('christmas')) return Package; // Christmas boxes
  if (name.includes('eve')) return Package; // Eve boxes
  if (name.includes('present')) return Package; // Present boxes
  if (name.includes('treat')) return Package; // Treat boxes
  
  // Chocolate boxes
  if (name.includes('chocolate')) return Package; // Chocolate boxes
  if (name.includes('milk')) return Package; // Milk boxes
  if (name.includes('bomb')) return Package; // Bomb boxes
  if (name.includes('bar')) return Package; // Bar boxes
  
  // Cereal boxes
  if (name.includes('cereal')) return Package; // Cereal boxes
  if (name.includes('corn flakes')) return Package; // Corn flakes boxes
  if (name.includes('breakfast')) return Package; // Breakfast boxes
  if (name.includes('mini')) return Package; // Mini boxes
  if (name.includes('wholesale')) return Package; // Wholesale boxes
  if (name.includes('vintage')) return Package; // Vintage boxes
  if (name.includes('retro')) return Package; // Retro boxes
  if (name.includes('90s')) return Package; // 90s boxes
  if (name.includes('80s')) return Package; // 80s boxes
  if (name.includes('funny')) return Package; // Funny boxes
  if (name.includes('unique')) return Package; // Unique boxes
  if (name.includes('colorful')) return Package; // Colorful boxes
  
  // Candle boxes
  if (name.includes('candle')) return Package; // Candle boxes
  if (name.includes('taper')) return Package; // Taper boxes
  if (name.includes('jar')) return Package; // Jar boxes
  if (name.includes('wax melt')) return Package; // Wax melt boxes
  if (name.includes('subscription')) return Package; // Subscription boxes
  
  // Soap boxes
  if (name.includes('soap')) return Package; // Soap boxes
  if (name.includes('bath bomb')) return Package; // Bath bomb boxes
  if (name.includes('wrapping paper')) return Package; // Wrapping paper boxes
  if (name.includes('handmade')) return Package; // Handmade boxes
  if (name.includes('bar')) return Package; // Bar boxes
  
  // Retail boxes
  if (name.includes('toy')) return Package; // Toy boxes
  if (name.includes('die cut')) return Package; // Die cut boxes
  if (name.includes('business card')) return Package; // Business card boxes
  
  // Pouch products
  if (name.includes('stand up')) return Archive; // Stand-up pouches
  if (name.includes('ziplock')) return Archive; // Ziplock pouches
  if (name.includes('mylar')) return Archive; // Mylar pouches
  
  // Shopping bag products
  if (name.includes('kraft')) return Recycle; // Kraft bags
  if (name.includes('paper')) return Recycle; // Paper bags
  if (name.includes('pvc')) return Recycle; // PVC bags
  
  // Other products
  if (name.includes('booklet')) return Package; // Booklet boxes
  if (name.includes('brochure')) return Package; // Brochure boxes
  if (name.includes('tags')) return Tag; // Tag boxes
  if (name.includes('business')) return Package; // Business boxes
  if (name.includes('tissue')) return Package; // Tissue boxes
  if (name.includes('butter')) return Package; // Butter boxes
  if (name.includes('labels')) return Tag; // Label boxes
  if (name.includes('table')) return Package; // Table boxes
  if (name.includes('tent')) return Package; // Tent boxes
  if (name.includes('packing')) return Package; // Packing boxes
  if (name.includes('tape')) return Package; // Tape boxes
  
  return Package; // Default box icon
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMainSection, setHoveredMainSection] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [allSearchData, setAllSearchData] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Initialize search data
  useEffect(() => {
    const searchData = getAllSearchData();
    console.log('Initializing search data:', searchData.length, 'items');
    setAllSearchData(searchData);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchQuery.trim()) {
      setIsSearchLoading(true);
      searchTimeoutRef.current = setTimeout(() => {
        const results = searchData(searchQuery, allSearchData);
        setSearchResults(results);
        setIsSearchLoading(false);
        setIsSearchOpen(true);
        console.log('Search completed:', { query: searchQuery, resultsCount: results.length, isOpen: true });
      }, 300); // Debounce search by 300ms
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
      setIsSearchLoading(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, allSearchData]);

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
    setSearchQuery(e.target.value);
  };

  const handleSearchFocus = () => {
    if (searchQuery.trim()) {
      setIsSearchOpen(true);
    }
  };

  const handleSearchResultClick = () => {
    console.log('Closing search dropdown and clearing query');
    setIsSearchOpen(false);
    setSearchQuery('');
    // Clear search input focus
    if (searchInputRef.current) {
      searchInputRef.current.blur();
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
            <Image src="/img/logo-vertical.png" alt="Boxypack" width={200} height={100} />
          </ Link>

          {/* Center - Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for products, categories, or anything..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onKeyDown={handleSearchKeyDown}
                className="w-full px-4 py-3 bg-gray-100 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0c6b76] focus:bg-white transition-all duration-200"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0c6b76]" />
              
              {/* Search Dropdown */}
              <SearchDropdown
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                results={searchResults}
                isLoading={isSearchLoading}
                query={searchQuery}
                onResultClick={handleSearchResultClick}
              />
            </div>
          </div>

          {/* Right Side - Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* How It Works - No Dropdown */}
            <Link href="/how-it-works" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              How It Works
            </Link>

            {/* About Us - No Dropdown */}
            <Link href="/about-us" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              About Us
            </Link>

            {/* Contact Us - No Dropdown */}
            <Link href="/contact-us" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              Contact Us
            </Link>

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
         <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMobileMenuOpen(false)}>
           <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
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
                     placeholder="Search for products..."
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
                       ) : searchResults.length === 0 ? (
                         <div className="px-4 py-8 text-center">
                           <div className="text-gray-500 mb-2">No results found</div>
                           <div className="text-sm text-gray-400">
                             Try searching for customboxes or packaging
                           </div>
                         </div>
                       ) : (
                         searchResults.map((result) => (
                           <Link
                             key={result.id}
                             href={result.url}
                             onClick={(e) => {
                               console.log('=== MOBILE LINK CLICK EVENT ===');
                               console.log('Mobile link clicked for:', result.title);
                               console.log('URL:', result.url);
                               console.log('Event:', e);
                               handleSearchResultClick();
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
                 {/* How It Works - No Dropdown */}
                 <Link href="/how-it-works" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">How It Works</span>
                 </Link>

                 {/* About Us - No Dropdown */}
                 <Link href="/about-us" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">About Us</span>
                 </Link>

                 {/* Contact Us - No Dropdown */}
                 <Link href="/contact" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">Contact Us</span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       )}

      {/* Category Navigation Bar - Hidden on mobile */}
      <div className="hidden md:block white border-t border-gray-200 relative">
        <div className="md:px-20 lg:px-24 px-6 py-4">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-12 md:space-x-16 lg:space-x-20">
              {navigationData.map((section) => (
                <div key={section.slug} className="relative">
                    <div
                     className="text-black hover:text-black font-medium transition-colors pb-2 relative group cursor-pointer"
                    onMouseEnter={() => setHoveredMainSection(section.slug)}
                     onMouseLeave={() => {
                      // Don't close immediately when leaving the section text
                       // Let the dropdown handle its own hover state
                     }}
                   >
                    {section.name}
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
                      className="fixed left-0 top-40 w-screen h-[50vh] z-50 bg-white shadow-lg border-t border-gray-200 transition-all duration-1000 ease-in-out"
                      onMouseEnter={() => setHoveredMainSection(section.slug)}
                        onMouseLeave={() => {
                          // Only close when user actually leaves the dropdown area
                        setHoveredMainSection(null);
                          setHoveredCategory(null);
                        setHoveredSubcategory(null);
                      }}
                    >
                      {/* Decorative Shape - Top Right Corner Background */}
                      <div className="absolute top-0 right-0 w-64 h-40 pointer-events-none" style={{ zIndex: 10 }}>
                        <Image
                          src="/img/cs_slider_shape.svg"
                          alt="Decorative shape"
                          width={256}
                          height={160}
                          className="w-full h-full object-contain opacity-80 transform scale-200"
                        />
                      </div>
                      <div className="w-full h-full flex">
                        <div className="max-w-7xl w-full mx-auto px-6 py-6 h-full">
                          {section.hasSubcategories && section.categories ? (
                            <div className="flex h-full">
                              {/* Left Side - Main Categories */}
                              <div className="w-1/4 pr-6 border-r border-gray-200 relative">
                                {/* Top gradient fade indicator */}
                                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
                                <div className="space-y-1 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 pt-4 pb-4">
                                  {section.categories.map((category) => (
                                    <div
                                      key={category.slug}
                                      className="relative"
                                      onMouseEnter={() => setHoveredCategory(category.slug)}
                                    >
                                      <Link
                                        href={`/products/${section.slug}/${category.slug}`}
                                        onClick={handleSmoothClose}
                                        className={`flex items-center justify-between px-2 py-2 rounded-lg transition-colors ${
                                          hoveredCategory === category.slug 
                                            ? 'bg-[#0c6b76]/10 text-[#0c6b76]' 
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                      >
                                        <div className="flex items-center flex-1">
                                          {React.createElement(getCategoryIcon(category.name), { 
                                            className: "w-4 h-4 mr-2 flex-shrink-0" 
                                          })}
                                          <span className="font-medium text-sm">{category.name}</span>
                                        </div>
                                        <ChevronRight className="w-3 h-3 ml-2 flex-shrink-0" />
                                      </Link>
                                    </div>
                                  ))}
                               </div>
                                {/* Gradient fade indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                             </div>
                             
                              {/* Right Side - Subcategories */}
                              <div className="w-3/4 pl-6">
                                {hoveredCategory && (
                                  <div>
                                    {(() => {
                                      const activeCategory = section.categories?.find(cat => cat.slug === hoveredCategory);
                                      return activeCategory ? (
                                        <div>
                                          <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                                            {activeCategory.subcategories.map((subcategory) => (
                                              <Link
                                                key={subcategory.slug}
                                                href={`/products/${section.slug}/${activeCategory.slug}/${subcategory.slug}`}
                                                onClick={handleSmoothClose}
                                                className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:text-[#0c6b76] hover:bg-[#0c6b76]/5 rounded-md transition-colors"
                                              >
                                                {React.createElement(getSubcategoryIcon(subcategory.name), { 
                                                  className: "w-4 h-4 mr-2 flex-shrink-0" 
                                                })}
                                                <span className="truncate">{subcategory.name}</span>
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ) : null;
                                    })()}
                                  </div>
                                )}
                                {!hoveredCategory && (
                                  <div className="flex items-center justify-center h-full text-gray-400">
                                    <p>Hover over a category to see subcategories</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            // Simple dropdown for sections without subcategories - using same layout as complex dropdowns
                            <div className="flex h-full">
                              {/* Left Side - Section Info */}
                              <div className="w-1/4 pr-6 border-r border-gray-200">
                                <div className="flex items-center h-full">
                                  <div className="text-center w-full">
                                    <div className="flex items-center justify-center mb-4">
                                      {React.createElement(getCategoryIcon(section.name), { 
                                        className: "w-8 h-8 text-[#0c6b76] mr-3" 
                                      })}
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
                                      {React.createElement(getSubcategoryIcon(subcategory.name), { 
                                        className: "w-4 h-4 mr-2 flex-shrink-0" 
                                      })}
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
