// Header Data Configuration
// This file contains all header-related data including icon mappings, navigation items, and UI configurations

export interface IconMapping {
  pattern: string | string[];
  iconPath: string;
  description: string;
  exactMatch?: boolean;
}

export interface HeaderConfig {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  search: {
    placeholder: string;
    debounceDelay: number;
  };
  navigation: {
    items: NavigationItem[];
  };
  mobile: {
    menuWidth: string;
    overlayOpacity: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

// Icon mapping configurations
export const categoryIconMappings: IconMapping[] = [
  // Main navigation sections - using available PNG icons
  {
    pattern: 'product by material',
    iconPath: '/icons/rigid.png',
    description: 'Layered materials'
  },
  {
    pattern: 'product by industry',
    iconPath: '/icons/retailBox.png',
    description: 'Industry packaging'
  },
  {
    pattern: 'mylar-boxes',
    iconPath: '/icons/standup-zip-lock-myler-box.png',
    description: 'Mylar Boxes'
  },
  {
    pattern: 'shopping bags',
    iconPath: '/icons/kraft-shopping-bag.png',
    description: 'Shopping containers'
  },
  {
    pattern: 'other',
    iconPath: '/icons/packing-tape.png',
    description: 'Miscellaneous packaging'
  },
  
  // Material categories - exact matches for data file names
  {
    pattern: 'rigid boxes',
    iconPath: '/icons/rigid.png',
    description: 'Strong, protective boxes'
  },
  {
    pattern: 'kraft boxes',
    iconPath: '/icons/kraft.png',
    description: 'Eco-friendly boxes'
  },
  {
    pattern: 'cardboard boxes',
    iconPath: '/icons/cardboard.png',
    description: 'Basic cardboard boxes'
  },
  {
    pattern: 'corrugated boxes',
    iconPath: '/icons/corrugated.png',
    description: 'Layered structure boxes'
  },
  
  
  // Industry categories - exact matches for data file names
  {
    pattern: 'bakery boxes',
    iconPath: '/icons/bakeryBox.png',
    description: 'Bakery boxes'
  },
  {
    pattern: 'cosmetic boxes',
    iconPath: '/icons/cosmaticsBox.png',
    description: 'Cosmetic boxes'
  },
  {
    pattern: 'food boxes',
    iconPath: '/icons/foodBox.png',
    description: 'Food boxes'
  },
  {
    pattern: 'gift boxes',
    iconPath: '/icons/giftBox.png',
    description: 'Gift boxes'
  },
  {
    pattern: 'jewelry boxes',
    iconPath: '/icons/jwelryBox.png',
    description: 'Jewelry boxes'
  },
  {
    pattern: 'retail boxes',
    iconPath: '/icons/retailBox.png',
    description: 'Retail boxes'
  },
  {
    pattern: 'candle boxes',
    iconPath: '/icons/candelBox.png',
    description: 'Candle boxes'
  },
  {
    pattern: 'shipping boxes',
    iconPath: '/icons/shippingBox.png',
    description: 'Shipping boxes'
  },
  {
    pattern: 'soap boxes',
    iconPath: '/icons/soapBox.png',
    description: 'Soap boxes'
  },
  {
    pattern: 'apparel boxes',
    iconPath: '/icons/apparelBox.png',
    description: 'Apparel boxes'
  },
  {
    pattern: 'sports boxes',
    iconPath: '/icons/sportsBox.png',
    description: 'Sports boxes'
  },
  {
    pattern: 'cigarette boxes',
    iconPath: '/icons/cigratteeBox.png',
    description: 'Cigarette boxes'
  },
  {
    pattern: 'cbd boxes',
    iconPath: '/icons/CBDBox.png',
    description: 'CBD boxes'
  },
  {
    pattern: 'vape boxes',
    iconPath: '/icons/eliquidBox.png',
    description: 'Vape boxes'
  },
  {
    pattern: 'e-liquid boxes',
    iconPath: '/icons/eliquidBox.png',
    description: 'E-liquid boxes'
  },
  {
    pattern: 'stationery boxes',
    iconPath: '/icons/stationaryBox.png',
    description: 'Stationery boxes'
  },
  {
    pattern: 'christmas boxes',
    iconPath: '/icons/christmasBox.png',
    description: 'Christmas boxes'
  },
  {
    pattern: 'chocolate boxes',
    iconPath: '/icons/chocolateBox.png',
    description: 'Chocolate boxes'
  },
  {
    pattern: 'cereal boxes',
    iconPath: '/icons/carealBox.png',
    description: 'Cereal boxes'
  },
  {
    pattern: 'pre roll boxes',
    iconPath: '/icons/preRollBox.png',
    description: 'Pre-roll boxes'
  },
  {
    pattern: 'pizza boxes',
    iconPath: '/icons/pizzaBox.png',
    description: 'Pizza boxes'
  },
  
];

export const subcategoryIconMappings: IconMapping[] = [
  // Box construction types - using available PNG icons
  {
    pattern: 'magnetic',
    iconPath: '/icons/rigid.png',
    description: 'Magnetic closure boxes'
  },
  {
    pattern: 'two piece',
    iconPath: '/icons/rigid.png',
    description: 'Two-piece boxes'
  },
  {
    pattern: ['collapsible', 'foldable'],
    iconPath: '/icons/kraft.png',
    description: 'Foldable boxes'
  },
  {
    pattern: ['sliding', 'sleeve'],
    iconPath: '/icons/cardboard.png',
    description: 'Sliding boxes'
  },
  {
    pattern: 'child resistant',
    iconPath: '/icons/rigid.png',
    description: 'Child-resistant boxes'
  },
  {
    pattern: 'brief case',
    iconPath: '/icons/rigid.png',
    description: 'Briefcase boxes'
  },
  {
    pattern: 'book style',
    iconPath: '/icons/kraft.png',
    description: 'Book-style boxes'
  },
  {
    pattern: 'hexagon',
    iconPath: '/icons/rigid.png',
    description: 'Hexagonal boxes'
  },
  {
    pattern: 'round',
    iconPath: '/icons/rigid.png',
    description: 'Round boxes'
  },
  {
    pattern: 'shoulder',
    iconPath: '/icons/cardboard.png',
    description: 'Shoulder boxes'
  },
  {
    pattern: 'pillow',
    iconPath: '/icons/rigid.png',
    description: 'Pillow boxes'
  },
  {
    pattern: 'gable',
    iconPath: '/icons/kraft.png',
    description: 'Gable boxes'
  },
  {
    pattern: 'tuck',
    iconPath: '/icons/kraft.png',
    description: 'Tuck boxes'
  },
  {
    pattern: 'window',
    iconPath: '/icons/myler-ziplock-bag.png',
    description: 'Window boxes'
  },
  {
    pattern: 'display',
    iconPath: '/icons/rigid.png',
    description: 'Display boxes'
  },
  {
    pattern: 'dispenser',
    iconPath: '/icons/soapBox.png',
    description: 'Dispenser boxes'
  },
  {
    pattern: 'hanger',
    iconPath: '/icons/rigid.png',
    description: 'Hanger boxes'
  },
  {
    pattern: 'inserts',
    iconPath: '/icons/cardboard.png',
    description: 'Box inserts'
  },
  {
    pattern: 'auto bottom',
    iconPath: '/icons/rigid.png',
    description: 'Auto bottom boxes'
  },
  {
    pattern: 'seal end',
    iconPath: '/icons/rigid.png',
    description: 'Seal end boxes'
  },
  {
    pattern: 'blister',
    iconPath: '/icons/rigid.png',
    description: 'Blister boxes'
  },
  {
    pattern: 'full flap',
    iconPath: '/icons/shippingBox.png',
    description: 'Full flap boxes'
  },
  
  // Industry-specific subcategories - consolidated by industry type
  // Bakery items
  { pattern: ['cake', 'donut', 'cupcake', 'cookie', 'pastry', 'candy'], iconPath: '/icons/bakeryBox.png', description: 'Bakery items' },
  // Cosmetic items  
  { pattern: ['perfume', 'makeup', 'lipstick', 'mascara', 'nail polish'], iconPath: '/icons/cosmaticsBox.png', description: 'Cosmetic items' },
  // Food items
  { pattern: ['coffee', 'burger', 'sandwich', 'french fry', 'noodle', 'popcorn', 'snack', 'tea'], iconPath: '/icons/foodBox.png', description: 'Food items' },
  // Gift items
  { pattern: ['birthday', 'party favor', 'deluxe'], iconPath: '/icons/giftBox.png', description: 'Gift items' },
  // Jewelry items
  { pattern: ['anklet', 'pendant', 'bracelet', 'ring', 'earring', 'necklace', 'velvet'], iconPath: '/icons/jwelryBox.png', description: 'Jewelry items' },
  // Retail items
  { pattern: ['die cut', 'toy'], iconPath: '/icons/retailBox.png', description: 'Retail items' },
  // Candle items
  { pattern: ['luxury', 'taper', 'wax melt'], iconPath: '/icons/candelBox.png', description: 'Candle items' },
  // Shipping items
  { pattern: ['mailer', 'shipping', 'black shipping', 'corrugated shipping', 'custom shipping'], iconPath: '/icons/shippingBox.png', description: 'Shipping items' },
  // Soap items
  { pattern: ['bath bomb', 'handmade', 'square soap'], iconPath: '/icons/soapBox.png', description: 'Soap items' },
  // Apparel items
  { pattern: ['cufflink', 'tie', 'belt', 'clothing', 'lingerie', 'underwear', 't-shirt', 'socks'], iconPath: '/icons/apparelBox.png', description: 'Apparel items' },
  // Sports items
  { pattern: ['shoe', 'golf', 'football'], iconPath: '/icons/sportsBox.png', description: 'Sports items' },
  // Cigarette items
  { pattern: ['paper cigarette', 'empty cigarette', 'blank cigarette', 'flip top'], iconPath: '/icons/cigratteeBox.png', description: 'Cigarette items' },
  // CBD items
  { pattern: ['cbd gummies', 'cannabis', 'hemp oil', 'tincture'], iconPath: '/icons/CBDBox.png', description: 'CBD items' },
  // Vape items
  { pattern: ['vape cartridge', 'disposable vape'], iconPath: '/icons/eliquidBox.png', description: 'Vape items' },
  // Stationery items
  { pattern: ['pencil', 'pen', 'book', 'presentation'], iconPath: '/icons/stationaryBox.png', description: 'Stationery items' },
  // Christmas items
  { pattern: ['christmas eve', 'christmas present', 'christmas treat', 'christmas favor'], iconPath: '/icons/christmasBox.png', description: 'Christmas items' },
  // Chocolate items
  { pattern: ['chocolate milk', 'chocolate bomb', 'chocolate bar'], iconPath: '/icons/chocolateBox.png', description: 'Chocolate items' },
  // Cereal items
  { pattern: ['cereal wholesale', 'mini cereal', 'corn flakes', 'breakfast cereal', 'colorful cereal', 'vintage cereal', 'retro cereal', '90s cereal', '80s cereal', 'funny cereal'], iconPath: '/icons/carealBox.png', description: 'Cereal items' },
  // Pre-roll items
  { pattern: ['delta 8'], iconPath: '/icons/preRollBox.png', description: 'Pre-roll items' },
  // Pizza items
  { pattern: ['white pizza', 'pizza slice', 'round pizza', 'rectangle pizza', 'flatbread pizza', 'inch pizza', 'blank pizza'], iconPath: '/icons/pizzaBox.png', description: 'Pizza items' },
  
  // Mylar boxes products

  {
    pattern: 'stand up pouche',
    iconPath: '/icons/standup-zip-lock-myler-box.png',
    description: 'Stand Up Pouche',
    exactMatch: true
  },
  {
    pattern: 'zipper bag',
    iconPath: '/icons/myler-ziplock-bag.png',
    description: 'Zipper Bag',
    exactMatch: true
  },
  {
    pattern: 'window bag',
    iconPath: '/icons/window-bag.png',
    description: 'Window Bag',
    exactMatch: true
  },
  
  // Shopping bag products
  {
    pattern: 'kraft shopping bag',
    iconPath: '/icons/kraft-shopping-bag.png',
    description: 'Kraft Shopping Bag',
    exactMatch: true
  },
  {
    pattern: 'paper bag',
    iconPath: '/icons/paper-bag.png',
    description: 'Paper Bag',
    exactMatch: true
  },
  {
    pattern: 'pvc bag',
    iconPath: '/icons/pvc-bag.png',
    description: 'PVC Bag',
    exactMatch: true
  },
  
  // Other products
  {
    pattern: 'booklets',
    iconPath: '/icons/booklets.png',
    description: 'Booklets',
    exactMatch: true
  },
  {
    pattern: 'brochures',
    iconPath: '/icons/brochures.png',
    description: 'Brochures',
    exactMatch: true
  },
  {
    pattern: 'tags printing',
    iconPath: '/icons/tag-printing.png',
    description: 'Tags Printing',
    exactMatch: true
  },
  {
    pattern: 'business cards',
    iconPath: '/icons/business-cards.png',
    description: 'Business Cards',
    exactMatch: true
  },
  {
    pattern: 'custom tissue paper',
    iconPath: '/icons/cutom-tissue-paper.png',
    description: 'Custom Tissue Paper',
    exactMatch: true
  },
  {
    pattern: 'butter paper',
    iconPath: '/icons/butter-paper.png',
    description: 'Butter Paper',
    exactMatch: true
  },
  {
    pattern: 'product labels & bottle labels',
    iconPath: '/icons/product-label.png',
    description: 'Product Labels & Bottle Labels',
    exactMatch: true
  },
  {
    pattern: ['product labels', 'bottle labels'],
    iconPath: '/icons/product-label.png',
    description: 'Product Labels & Bottle Labels',
    exactMatch: true
  },
  {
    pattern: 'table tents',
    iconPath: '/icons/table-tents.png',
    description: 'Table Tents',
    exactMatch: true
  },
  {
    pattern: 'packing tape',
    iconPath: '/icons/packing-tape.png',
    description: 'Packing Tape',
    exactMatch: true
  },
  
  // Additional fallback patterns for better matching
  {
    pattern: 'box',
    iconPath: '/icons/rigid.png',
    description: 'Generic box'
  },
  {
    pattern: 'bag',
    iconPath: '/icons/kraft-shopping-bag.png',
    description: 'Generic bag'
  },
  {
    pattern: 'pouch',
    iconPath: '/icons/myler-ziplock-bag.png',
    description: 'Generic pouch'
  }
];

// Header configuration
export const headerConfig: HeaderConfig = {
  logo: {
    src: '/img/logo-vertical.png',
    alt: 'Boxypack',
    width: 200,
    height: 100
  },
  search: {
    placeholder: 'Search for products, categories, or anything...',
    debounceDelay: 200
  },
  navigation: {
    items: [
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'About Us', href: '/about-us' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Use', href: '/terms-of-use' },
      { name: 'Contact Us', href: '/contact-us' }
    ]
  },
  mobile: {
    menuWidth: 'w-80',
    overlayOpacity: 'bg-opacity-50'
  }
};

// Helper functions for icon mapping
export const getCategoryIcon = (categoryName: string): string => {
  const name = categoryName.toLowerCase();
  
  // First try exact matches
  for (const mapping of categoryIconMappings) {
    if (mapping.exactMatch) {
      if (Array.isArray(mapping.pattern)) {
        if (mapping.pattern.some(pattern => name === pattern.toLowerCase())) {
          return mapping.iconPath;
        }
      } else {
        if (name === mapping.pattern.toLowerCase()) {
          return mapping.iconPath;
        }
      }
    }
  }
  
  // Then try partial matches
  for (const mapping of categoryIconMappings) {
    if (!mapping.exactMatch) {
      if (Array.isArray(mapping.pattern)) {
        if (mapping.pattern.some(pattern => name.includes(pattern))) {
          return mapping.iconPath;
        }
      } else {
        if (name.includes(mapping.pattern)) {
          return mapping.iconPath;
        }
      }
    }
  }
  
  return '/icons/rigid.png'; // Default box icon
};

export const getSubcategoryIcon = (subcategoryName: string): string => {
  const name = subcategoryName.toLowerCase();
  
  // First try exact matches
  for (const mapping of subcategoryIconMappings) {
    if (mapping.exactMatch) {
      // For exact matches, check if the name exactly matches the pattern
      if (Array.isArray(mapping.pattern)) {
        if (mapping.pattern.some(pattern => name === pattern.toLowerCase())) {
          return mapping.iconPath;
        }
      } else {
        if (name === mapping.pattern.toLowerCase()) {
          return mapping.iconPath;
        }
      }
    }
  }
  
  // Then try partial matches
  for (const mapping of subcategoryIconMappings) {
    if (!mapping.exactMatch) {
      // For partial matches, check if the name includes the pattern
      if (Array.isArray(mapping.pattern)) {
        if (mapping.pattern.some(pattern => name.includes(pattern))) {
          return mapping.iconPath;
        }
      } else {
        if (name.includes(mapping.pattern)) {
          return mapping.iconPath;
        }
      }
    }
  }
  
  return '/icons/rigid.png'; // Default box icon
};

export default {
  categoryIconMappings,
  subcategoryIconMappings,
  headerConfig,
  getCategoryIcon,
  getSubcategoryIcon
};
