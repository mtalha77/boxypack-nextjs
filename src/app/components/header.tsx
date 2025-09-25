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
import EnhancedSearchDropdown from './EnhancedSearchDropdown';
import { getAllSearchData, searchData, SearchResult } from '../utils/searchData';
import { getAllEnhancedSearchData, enhancedSearch, getSearchSuggestions, EnhancedSearchResult, SearchSuggestion } from '../utils/enhancedSearchData';

// Icon mapping functions using custom box icons
const getCategoryIcon = (categoryName: string) => {
  const name = categoryName.toLowerCase();
  
  // Main navigation sections - using custom box icons
  if (name.includes('product by material')) return '/icons/box.svg'; // Layered materials
  if (name.includes('product by industry')) return '/icons/colored-foldable-box.svg'; // Industry packaging
  if (name.includes('pouches')) return '/icons/paper-bag-with-round-window.svg'; // Flexible packaging
  if (name.includes('shopping bags')) return '/icons/paper-bag-with-round-window.svg'; // Shopping containers
  if (name.includes('other')) return '/icons/empty-box.svg'; // Miscellaneous packaging
  
  // Material categories - using custom PNG icons
  if (name.includes('rigid')) return '/icons/rigid.png'; // Strong, protective boxes
  if (name.includes('kraft')) return '/icons/kraft.png'; // Eco-friendly boxes
  if (name.includes('cardboard')) return '/icons/cardboard.png'; // Basic cardboard boxes
  if (name.includes('corrugated')) return '/icons/corrugated.png'; // Layered structure boxes
  
  // Industry categories - using specific PNG icons from icons folder
  if (name.includes('bakery')) return '/icons/bakeryBox.png'; // Bakery boxes
  if (name.includes('cosmetic')) return '/icons/cosmaticsBox.png'; // Cosmetic boxes
  if (name.includes('food')) return '/icons/foodBox.png'; // Food boxes
  if (name.includes('gift')) return '/icons/giftBox.png'; // Gift boxes
  if (name.includes('jewelry')) return '/icons/jwelryBox.png'; // Jewelry boxes
  if (name.includes('retail')) return '/icons/retailBox.png'; // Retail boxes
  if (name.includes('candle')) return '/icons/candelBox.png'; // Candle boxes
  if (name.includes('shipping')) return '/icons/shippingBox.png'; // Shipping boxes
  if (name.includes('soap')) return '/icons/soapBox.png'; // Soap boxes
  if (name.includes('apparel')) return '/icons/apparelBox.png'; // Apparel boxes
  if (name.includes('sports')) return '/icons/sportsBox.png'; // Sports boxes
  if (name.includes('cigarette')) return '/icons/cigratteeBox.png'; // Cigarette boxes
  if (name.includes('cbd')) return '/icons/CBDBox.png'; // CBD boxes
  if (name.includes('e-liquid')) return '/icons/eliquidBox.png'; // E-liquid boxes
  if (name.includes('stationery')) return '/icons/stationaryBox.png'; // Stationery boxes
  if (name.includes('christmas')) return '/icons/christmasBox.png'; // Christmas boxes
  if (name.includes('chocolate')) return '/icons/chocolateBox.png'; // Chocolate boxes
  if (name.includes('cereal')) return '/icons/carealBox.png'; // Cereal boxes
  if (name.includes('pre roll')) return '/icons/preRollBox.png'; // Pre-roll boxes
  if (name.includes('pizza')) return '/icons/pizzaBox.png'; // Pizza boxes
  
  return '/icons/box.svg'; // Default box icon
};

const getSubcategoryIcon = (subcategoryName: string) => {
  const name = subcategoryName.toLowerCase();
  
  // Debug logging for all subcategories
  console.log('Getting icon for:', subcategoryName, 'processed name:', name);
  
  // Box construction types - using custom box icons
  if (name.includes('magnetic')) return '/icons/box-upside.svg'; // Magnetic closure boxes
  if (name.includes('two piece')) return '/icons/box (1).svg'; // Two-piece boxes
  if (name.includes('collapsible') || name.includes('foldable')) return '/icons/colored-foldable-box.svg'; // Foldable boxes
  if (name.includes('sliding') || name.includes('sleeve')) return '/icons/box (3).svg'; // Sliding boxes
  if (name.includes('child resistant')) return '/icons/box (4).svg'; // Child-resistant boxes
  if (name.includes('brief case')) return '/icons/rectangular-folding-box.svg'; // Briefcase boxes
  if (name.includes('book style')) return '/icons/flat-paper-box.svg'; // Book-style boxes
  if (name.includes('hexagon')) return '/icons/box.svg'; // Hexagonal boxes
  if (name.includes('round')) return '/icons/box (1).svg'; // Round boxes
  if (name.includes('shoulder')) return '/icons/box (3).svg'; // Shoulder boxes
  if (name.includes('pillow')) return '/icons/box (4).svg'; // Pillow boxes
  if (name.includes('gable')) return '/icons/tuck-top-box.svg'; // Gable boxes
  if (name.includes('tuck')) return '/icons/tuck-top-box.svg'; // Tuck boxes
  if (name.includes('window')) return '/icons/paper-bag-with-round-window.svg'; // Window boxes
  if (name.includes('display')) return '/icons/open-box.svg'; // Display boxes
  if (name.includes('dispenser')) return '/icons/tear-top-container.svg'; // Dispenser boxes
  if (name.includes('hanger')) return '/icons/box.svg'; // Hanger boxes
  if (name.includes('inserts')) return '/icons/box (3).svg'; // Box inserts
  if (name.includes('auto bottom')) return '/icons/box (1).svg'; // Auto bottom boxes
  if (name.includes('seal end')) return '/icons/box-upside.svg'; // Seal end boxes
  if (name.includes('blister')) return '/icons/box (4).svg'; // Blister boxes
  if (name.includes('full flap')) return '/icons/wide-open-box.svg'; // Full flap boxes
  
  // Specific product types - using custom box icons
  if (name.includes('mailer')) return '/icons/box.svg'; // Mailer boxes
  if (name.includes('shipping')) return '/icons/wide-open-box.svg'; // Shipping boxes
  
  // All product categories use custom box icons
  if (name.includes('donut')) return '/icons/tuck-top-box.svg'; // Donut boxes
  if (name.includes('pastry')) return '/icons/flat-paper-box.svg'; // Pastry boxes
  if (name.includes('cake')) return '/icons/colored-foldable-box.svg'; // Cake boxes
  if (name.includes('cookie')) return '/icons/box (1).svg'; // Cookie boxes
  if (name.includes('candy')) return '/icons/box (3).svg'; // Candy boxes
  if (name.includes('cupcake')) return '/icons/tuck-top-box.svg'; // Cupcake boxes
  if (name.includes('truffle')) return '/icons/box (4).svg'; // Truffle boxes
  if (name.includes('sweet')) return '/icons/box.svg'; // Sweet boxes
  
  // Cosmetic boxes
  if (name.includes('perfume')) return '/icons/open-lid-box.svg'; // Perfume boxes
  if (name.includes('makeup')) return '/icons/box-upside.svg'; // Makeup boxes
  if (name.includes('lipstick')) return '/icons/box (1).svg'; // Lipstick boxes
  if (name.includes('mascara')) return '/icons/box (3).svg'; // Mascara boxes
  if (name.includes('nail polish')) return '/icons/box (4).svg'; // Nail polish boxes
  if (name.includes('lip balm')) return '/icons/box.svg'; // Lip balm boxes
  if (name.includes('foundation')) return '/icons/rectangular-folding-box.svg'; // Foundation boxes
  if (name.includes('lotion')) return '/icons/box (1).svg'; // Lotion boxes
  if (name.includes('eyelash')) return '/icons/box (3).svg'; // Eyelash boxes
  if (name.includes('cream')) return '/icons/box (4).svg'; // Cream boxes
  if (name.includes('oil')) return '/icons/box.svg'; // Oil boxes
  if (name.includes('serum')) return '/icons/box (1).svg'; // Serum boxes
  if (name.includes('hair')) return '/icons/box (3).svg'; // Hair boxes
  if (name.includes('eye shadow')) return '/icons/box (4).svg'; // Eye shadow boxes
  if (name.includes('eyeliner')) return '/icons/box.svg'; // Eyeliner boxes
  
  // Food boxes
  if (name.includes('french fry')) return '/icons/flat-paper-box.svg'; // French fry boxes
  if (name.includes('coffee')) return '/icons/box (1).svg'; // Coffee boxes
  if (name.includes('noodle')) return '/icons/box (3).svg'; // Noodle boxes
  if (name.includes('popcorn')) return '/icons/box (4).svg'; // Popcorn boxes
  if (name.includes('snack')) return '/icons/box.svg'; // Snack boxes
  if (name.includes('tea')) return '/icons/box (1).svg'; // Tea boxes
  if (name.includes('burger')) return '/icons/box (3).svg'; // Burger boxes
  if (name.includes('sandwich')) return '/icons/box (4).svg'; // Sandwich boxes
  if (name.includes('chinese takeout')) return '/icons/flat-paper-box.svg'; // Chinese takeout boxes
  if (name.includes('pizza')) return '/icons/flat-paper-box.svg'; // Pizza boxes
  
  // Gift boxes
  if (name.includes('gift')) return '/icons/colored-foldable-box.svg'; // Gift boxes
  if (name.includes('birthday')) return '/icons/colored-foldable-box.svg'; // Birthday boxes
  if (name.includes('party')) return '/icons/colored-foldable-box.svg'; // Party boxes
  if (name.includes('favor')) return '/icons/colored-foldable-box.svg'; // Favor boxes
  if (name.includes('deluxe')) return '/icons/box-upside.svg'; // Deluxe boxes
  if (name.includes('luxury')) return '/icons/box-upside.svg'; // Luxury boxes
  if (name.includes('small')) return '/icons/box (1).svg'; // Small boxes
  if (name.includes('large')) return '/icons/wide-open-box.svg'; // Large boxes
  
  // Jewelry boxes
  if (name.includes('anklet')) return '/icons/box-upside.svg'; // Anklet boxes
  if (name.includes('velvet')) return '/icons/box-upside.svg'; // Velvet boxes
  if (name.includes('jewelry')) return '/icons/box-upside.svg'; // Jewelry boxes
  if (name.includes('pendant')) return '/icons/box (1).svg'; // Pendant boxes
  if (name.includes('bracelet')) return '/icons/box (3).svg'; // Bracelet boxes
  if (name.includes('ring')) return '/icons/box (4).svg'; // Ring boxes
  if (name.includes('earring')) return '/icons/box.svg'; // Earring boxes
  if (name.includes('necklace')) return '/icons/box (1).svg'; // Necklace boxes
  if (name.includes('subscription')) return '/icons/box (3).svg'; // Subscription boxes
  if (name.includes('bags')) return '/icons/paper-bag-with-round-window.svg'; // Jewelry bags
  if (name.includes('cards')) return '/icons/flat-paper-box.svg'; // Jewelry cards
  
  // Apparel boxes
  if (name.includes('cufflink')) return '/icons/box (4).svg'; // Cufflink boxes
  if (name.includes('tie')) return '/icons/box.svg'; // Tie boxes
  if (name.includes('belt')) return '/icons/box (1).svg'; // Belt boxes
  if (name.includes('clothing')) return '/icons/box (3).svg'; // Clothing boxes
  if (name.includes('lingerie')) return '/icons/box (4).svg'; // Lingerie boxes
  if (name.includes('underwear')) return '/icons/box.svg'; // Underwear boxes
  if (name.includes('tshirt')) return '/icons/box (1).svg'; // T-shirt boxes
  if (name.includes('socks')) return '/icons/box (3).svg'; // Socks boxes
  
  // Sports boxes
  if (name.includes('shoe')) return '/icons/wide-open-box.svg'; // Shoe boxes
  if (name.includes('golf')) return '/icons/box (4).svg'; // Golf boxes
  if (name.includes('football')) return '/icons/box.svg'; // Football boxes
  if (name.includes('ball')) return '/icons/box (1).svg'; // Ball boxes
  
  // Tobacco boxes
  if (name.includes('cigarette')) return '/icons/box (3).svg'; // Cigarette boxes
  if (name.includes('empty')) return '/icons/empty-box.svg'; // Empty boxes
  if (name.includes('blank')) return '/icons/empty-box.svg'; // Blank boxes
  if (name.includes('flip top')) return '/icons/tuck-top-box.svg'; // Flip top boxes
  if (name.includes('paper')) return '/icons/flat-paper-box.svg'; // Paper boxes
  
  // CBD/Cannabis boxes
  if (name.includes('cbd')) return '/icons/box (4).svg'; // CBD boxes
  if (name.includes('cannabis')) return '/icons/box.svg'; // Cannabis boxes
  if (name.includes('gummies')) return '/icons/box (1).svg'; // Gummies boxes
  if (name.includes('hemp')) return '/icons/box (3).svg'; // Hemp boxes
  if (name.includes('pre roll')) return '/icons/box (3).svg'; // Pre-roll boxes
  if (name.includes('tincture')) return '/icons/box (4).svg'; // Tincture boxes
  if (name.includes('delta')) return '/icons/box.svg'; // Delta boxes
  
  // Vape boxes
  if (name.includes('vape')) return '/icons/box (1).svg'; // Vape boxes
  if (name.includes('cartridge')) return '/icons/box (3).svg'; // Cartridge boxes
  if (name.includes('disposable')) return '/icons/box (4).svg'; // Disposable boxes
  if (name.includes('e liquid')) return '/icons/box (1).svg'; // E-liquid boxes
  
  // Stationery boxes
  if (name.includes('pencil')) return '/icons/box (3).svg'; // Pencil boxes
  if (name.includes('pen')) return '/icons/box (4).svg'; // Pen boxes
  if (name.includes('book')) return '/icons/flat-paper-box.svg'; // Book boxes
  if (name.includes('presentation')) return '/icons/rectangular-folding-box.svg'; // Presentation boxes
  if (name.includes('folder')) return '/icons/flat-paper-box.svg'; // Folder boxes
  
  // Holiday boxes
  if (name.includes('christmas')) return '/icons/colored-foldable-box.svg'; // Christmas boxes
  if (name.includes('eve')) return '/icons/colored-foldable-box.svg'; // Eve boxes
  if (name.includes('present')) return '/icons/colored-foldable-box.svg'; // Present boxes
  if (name.includes('treat')) return '/icons/colored-foldable-box.svg'; // Treat boxes
  
  // Chocolate boxes
  if (name.includes('chocolate')) return '/icons/tuck-top-box.svg'; // Chocolate boxes
  if (name.includes('milk')) return '/icons/box (1).svg'; // Milk boxes
  if (name.includes('bomb')) return '/icons/box (3).svg'; // Bomb boxes
  if (name.includes('bar')) return '/icons/box (4).svg'; // Bar boxes
  
  // Cereal boxes
  if (name.includes('cereal')) return '/icons/wide-open-box.svg'; // Cereal boxes
  if (name.includes('corn flakes')) return '/icons/wide-open-box.svg'; // Corn flakes boxes
  if (name.includes('breakfast')) return '/icons/wide-open-box.svg'; // Breakfast boxes
  if (name.includes('mini')) return '/icons/box (1).svg'; // Mini boxes
  if (name.includes('wholesale')) return '/icons/box (3).svg'; // Wholesale boxes
  if (name.includes('vintage')) return '/icons/box (4).svg'; // Vintage boxes
  if (name.includes('retro')) return '/icons/box.svg'; // Retro boxes
  if (name.includes('90s')) return '/icons/box (1).svg'; // 90s boxes
  if (name.includes('80s')) return '/icons/box (3).svg'; // 80s boxes
  if (name.includes('funny')) return '/icons/box (4).svg'; // Funny boxes
  if (name.includes('unique')) return '/icons/box.svg'; // Unique boxes
  if (name.includes('colorful')) return '/icons/colored-foldable-box.svg'; // Colorful boxes
  
  // Candle boxes
  if (name.includes('candle')) return '/icons/box (4).svg'; // Candle boxes
  if (name.includes('taper')) return '/icons/box.svg'; // Taper boxes
  if (name.includes('jar')) return '/icons/box (1).svg'; // Jar boxes
  if (name.includes('wax melt')) return '/icons/box (3).svg'; // Wax melt boxes
  if (name.includes('subscription')) return '/icons/box (3).svg'; // Subscription boxes
  
  // Soap boxes
  if (name.includes('soap')) return '/icons/tear-top-container.svg'; // Soap boxes
  if (name.includes('bath bomb')) return '/icons/box (4).svg'; // Bath bomb boxes
  if (name.includes('wrapping paper')) return '/icons/flat-paper-box.svg'; // Wrapping paper boxes
  if (name.includes('handmade')) return '/icons/box.svg'; // Handmade boxes
  if (name.includes('bar')) return '/icons/box (1).svg'; // Bar boxes
  
  // Retail boxes
  if (name.includes('toy')) return '/icons/box (3).svg'; // Toy boxes
  if (name.includes('die cut')) return '/icons/box (4).svg'; // Die cut boxes
  if (name.includes('business card')) return '/icons/flat-paper-box.svg'; // Business card boxes
  
  // Pouch products
  if (name.includes('stand up')) return '/icons/paper-bag-with-round-window.svg'; // Stand-up pouches
  if (name.includes('ziplock')) return '/icons/paper-bag-with-round-window.svg'; // Ziplock pouches
  if (name.includes('mylar')) return '/icons/paper-bag-with-round-window.svg'; // Mylar pouches
  
  // Shopping bag products - using specific PNG icons
  if (name.includes('kraft shopping bag') || name === 'kraft shopping bag' || name.toLowerCase().includes('kraft shopping bag')) return '/icons/kraft-shopping-bag.png'; // Kraft Shopping Bag
  if (name.includes('paper bag') || name === 'paper bag' || name.toLowerCase().includes('paper bag')) return '/icons/paper-bag.png'; // Paper Bag
  if (name.includes('pvc bag') || name === 'pvc bag' || name.toLowerCase().includes('pvc bag')) return '/icons/pvc-bag.png'; // PVC Bag
  
  // Other products - using specific PNG icons
  if (name.includes('booklets') || name === 'booklets') {
    console.log('Matched Booklets:', name, '/icons/booklets.png');
    return '/icons/booklets.png';
  }
  if (name.includes('brochures') || name === 'brochures') {
    console.log('Matched Brochures:', name, '/icons/brochures.png');
    return '/icons/brochures.png';
  }
  if (name.includes('business cards') || name === 'business cards') {
    console.log('Matched Business Cards:', name, '/icons/business-cards.png');
    return '/icons/business-cards.png';
  }
  if (name.includes('custom tissue paper') || name === 'custom tissue paper') {
    console.log('Matched Custom Tissue Paper:', name, '/icons/custom-tissue-paper.png');
    return '/icons/custom-tissue-paper.png';
  }
  if (name.includes('butter paper') || name === 'butter paper') {
    console.log('Matched Butter Paper:', name, '/icons/butter-paper.png');
    return '/icons/butter-paper.png';
  }
  if (name.includes('product labels') || name.includes('bottle labels') || name === 'product labels & bottle labels') {
    console.log('Matched Product Labels:', name, '/icons/product-label.png');
    return '/icons/product-label.png';
  }
  if (name.includes('table tents') || name === 'table tents') {
    console.log('Matched Table Tents:', name, '/icons/table-tents.png');
    return '/icons/table-tents.png';
  }
  if (name.includes('tags printing') || name === 'tags printing') {
    console.log('Matched Tags Printing:', name, '/icons/tag-printing.png');
    return '/icons/tag-printing.png';
  }
  if (name.includes('packing tape') || name === 'packing tape') {
    console.log('Matched Packing Tape:', name, '/icons/packing-tape.png');
    return '/icons/packing-tape.png';
  }
  
  return '/icons/box.svg'; // Default box icon
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
      }, 200); // Reduced debounce for better responsiveness
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
            {/* How It Works - No Dropdown */}
            <Link href="/how-it-works" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              How It Works
            </Link>

            {/* About Us - No Dropdown */}
            <Link href="/about-us" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              About Us
            </Link>

            {/* Privacy Policy */}
            <Link href="/privacy-policy" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              Privacy Policy
            </Link>

            {/* Terms of Use */}
            <Link href="/terms-of-use" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              Terms of Use
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
                 {/* How It Works - No Dropdown */}
                 <Link href="/how-it-works" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">How It Works</span>
                 </Link>

                 {/* About Us - No Dropdown */}
                 <Link href="/about-us" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">About Us</span>
                 </Link>

                 {/* Privacy Policy */}
                 <Link href="/privacy-policy" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">Privacy Policy</span>
                 </Link>

                 {/* Terms of Use */}
                 <Link href="/terms-of-use" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">Terms of Use</span>
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
                             
                                  {/* Column 2: POUCHES & SHOPPING BAGS */}
                                  <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">POUCHES</h3>
                                    <div className="space-y-3 mb-6">
                                      {section.categories.filter(cat => 
                                        cat.name.toLowerCase().includes('pouches')
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
                                                <div className="text-xs text-gray-500">Flexible packaging solutions</div>
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
