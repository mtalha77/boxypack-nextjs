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
    iconPath: string;
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
    pattern: 'product-by-material',
    iconPath: '/icons/rigid.png',
    description: 'Material-based packaging'
  },
  {
    pattern: 'mylar-boxes',
    iconPath: 'standup-zip-lock-myler-box_dlgobk',
    description: 'Mylar Boxes'
  },
  {
    pattern: 'shopping-bags',
    iconPath: 'kraft-shopping-bag_otahpn',
    description: 'Shopping Bags'
  },
  {
    pattern: 'other',
    iconPath: 'packing-tape_v4prqu',
    description: 'Other Products'
  },
  {
    pattern: 'product-by-industry',
    iconPath: 'retailBox_qpyhws',
    description: 'Industry-specific packaging'
  },
  
  // Material categories - exact matches for data file names
  {
    pattern: 'rigid boxes',
    iconPath: 'rigid-box_wavmky',
    description: 'Strong, protective boxes'
  },
  {
    pattern: 'kraft boxes',
    iconPath: 'kraft-boxes_hwu3cv',
    description: 'Eco-friendly boxes'
  },
  {
    pattern: 'cardboard boxes',
    iconPath: 'cardboard_jjfywq',
    description: 'Basic cardboard boxes'
  },
  {
    pattern: 'corrugated boxes',
    iconPath: 'corrugated_ox51z1',
    description: 'Layered structure boxes'
  },
  
  // Also support partial matches for flexibility
  {
    pattern: 'rigid',
    iconPath: 'rigid-box_wavmky',
    description: 'Strong, protective boxes'
  },
  {
    pattern: 'kraft',
    iconPath: 'kraft-boxes_hwu3cv',
    description: 'Eco-friendly boxes'
  },
  {
    pattern: 'cardboard',
    iconPath: 'cardboard_jjfywq',
    description: 'Basic cardboard boxes'
  },
  {
    pattern: 'corrugated',
    iconPath: 'corrugated_ox51z1',
    description: 'Layered structure boxes'
  },
  
  // Industry categories - exact matches for data file names
  {
    pattern: 'bakery boxes',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Bakery boxes'
  },
  {
    pattern: 'cosmetic boxes',
    iconPath: 'cosmaticsBox_gfjkea',
    description: 'Cosmetic boxes'
  },
  {
    pattern: 'food boxes',
    iconPath: 'foodBox_bmo9dr',
    description: 'Food boxes'
  },
  {
    pattern: 'gift boxes',
    iconPath: 'giftBox_gmbygu',
    description: 'Gift boxes'
  },
  {
    pattern: 'jewelry boxes',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Jewelry boxes'
  },
  {
    pattern: 'retail boxes',
    iconPath: 'retailBox_qpyhws',
    description: 'Retail boxes'
  },
  {
    pattern: 'candle boxes',
    iconPath: 'candelBox_unqhum',
    description: 'Candle boxes'
  },
  {
    pattern: 'shipping boxes',
    iconPath: 'shippingBox_v70vln',
    description: 'Shipping boxes'
  },
  {
    pattern: 'soap boxes',
    iconPath: 'soapBox_qpabxg',
    description: 'Soap boxes'
  },
  {
    pattern: 'apparel boxes',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Apparel boxes'
  },
  {
    pattern: 'sports boxes',
    iconPath: 'sportsBox_v6pwaf',
    description: 'Sports boxes'
  },
  {
    pattern: 'cigarette boxes',
    iconPath: 'cigratteeBox_kaytkj',
    description: 'Cigarette boxes'
  },
  {
    pattern: 'cbd boxes',
    iconPath: 'CBDBox_aizsuy',
    description: 'CBD boxes'
  },
  {
    pattern: 'vape boxes',
    iconPath: 'eliquidBox_wpu3he',
    description: 'Vape boxes'
  },
  {
    pattern: 'e-liquid boxes',
    iconPath: 'eliquidBox_wpu3he',
    description: 'E-liquid boxes'
  },
  {
    pattern: 'stationery boxes',
    iconPath: 'stationaryBox_zhokdh',
    description: 'Stationery boxes'
  },
  {
    pattern: 'christmas boxes',
    iconPath: 'christmasBox_eldfzv',
    description: 'Christmas boxes'
  },
  {
    pattern: 'chocolate boxes',
    iconPath: 'chocolateBox_yuhq78',
    description: 'Chocolate boxes'
  },
  {
    pattern: 'cereal boxes',
    iconPath: 'carealBox_y12zuv',
    description: 'Cereal boxes'
  },
  {
    pattern: 'pre roll boxes',
    iconPath: 'preRollBox_h6woxr',
    description: 'Pre-roll boxes'
  },
  {
    pattern: 'pizza boxes',
    iconPath: 'pizzaBox_c15rfj',
    description: 'Pizza boxes'
  },
  
  // Also support partial matches for flexibility
  {
    pattern: 'bakery',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Bakery boxes'
  },
  {
    pattern: 'cosmetic',
    iconPath: 'cosmaticsBox_gfjkea',
    description: 'Cosmetic boxes'
  },
  {
    pattern: 'food',
    iconPath: 'foodBox_bmo9dr',
    description: 'Food boxes'
  },
  {
    pattern: 'gift',
    iconPath: 'giftBox_gmbygu',
    description: 'Gift boxes'
  },
  {
    pattern: 'jewelry',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Jewelry boxes'
  },
  {
    pattern: 'retail',
    iconPath: 'retailBox_qpyhws',
    description: 'Retail boxes'
  },
  {
    pattern: 'candle',
    iconPath: 'candelBox_unqhum',
    description: 'Candle boxes'
  },
  {
    pattern: 'shipping',
    iconPath: 'shippingBox_v70vln',
    description: 'Shipping boxes'
  },
  {
    pattern: 'soap',
    iconPath: 'soapBox_qpabxg',
    description: 'Soap boxes'
  },
  {
    pattern: 'apparel',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Apparel boxes'
  },
  {
    pattern: 'sports',
    iconPath: 'sportsBox_v6pwaf',
    description: 'Sports boxes'
  },
  {
    pattern: 'cigarette',
    iconPath: 'cigratteeBox_kaytkj',
    description: 'Cigarette boxes'
  },
  {
    pattern: 'cbd',
    iconPath: 'CBDBox_aizsuy',
    description: 'CBD boxes'
  },
  {
    pattern: ['vape', 'e-liquid'],
    iconPath: 'eliquidBox_wpu3he',
    description: 'Vape boxes'
  },
  {
    pattern: 'stationery',
    iconPath: 'stationaryBox_zhokdh',
    description: 'Stationery boxes'
  },
  {
    pattern: 'christmas',
    iconPath: 'christmasBox_eldfzv',
    description: 'Christmas boxes'
  },
  {
    pattern: 'chocolate',
    iconPath: 'chocolateBox_yuhq78',
    description: 'Chocolate boxes'
  },
  {
    pattern: 'cereal',
    iconPath: 'carealBox_y12zuv',
    description: 'Cereal boxes'
  },
  {
    pattern: 'pre roll',
    iconPath: 'preRollBox_h6woxr',
    description: 'Pre-roll boxes'
  },
  {
    pattern: 'pizza',
    iconPath: 'pizzaBox_c15rfj',
    description: 'Pizza boxes'
  }
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
    iconPath: 'shippingBox_v70vln',
    description: 'Full flap boxes'
  },
  
  // Specific subcategory patterns from actual data
  {
    pattern: 'mailer',
    iconPath: 'shippingBox_v70vln',
    description: 'Mailer boxes'
  },
  {
    pattern: 'cake',
    iconPath: '/icons/bakeryBox.png',
    description: 'Cake boxes'
  },
  {
    pattern: 'donut',
    iconPath: '/icons/bakeryBox.png',
    description: 'Donut boxes'
  },
  {
    pattern: 'cupcake',
    iconPath: '/icons/bakeryBox.png',
    description: 'Cupcake boxes'
  },
  {
    pattern: 'cookie',
    iconPath: '/icons/bakeryBox.png',
    description: 'Cookie boxes'
  },
  {
    pattern: 'pastry',
    iconPath: '/icons/bakeryBox.png',
    description: 'Pastry boxes'
  },
  {
    pattern: 'candy',
    iconPath: '/icons/bakeryBox.png',
    description: 'Candy boxes'
  },
  {
    pattern: 'perfume',
    iconPath: '/icons/cosmaticsBox.png',
    description: 'Perfume boxes'
  },
  {
    pattern: 'makeup',
    iconPath: '/icons/cosmaticsBox.png',
    description: 'Makeup boxes'
  },
  {
    pattern: 'lipstick',
    iconPath: '/icons/cosmaticsBox.png',
    description: 'Lipstick boxes'
  },
  {
    pattern: 'mascara',
    iconPath: '/icons/cosmaticsBox.png',
    description: 'Mascara boxes'
  },
  {
    pattern: 'nail polish',
    iconPath: '/icons/cosmaticsBox.png',
    description: 'Nail polish boxes'
  },
  {
    pattern: 'coffee',
    iconPath: '/icons/foodBox.png',
    description: 'Coffee boxes'
  },
  {
    pattern: 'burger',
    iconPath: '/icons/foodBox.png',
    description: 'Burger boxes'
  },
  {
    pattern: 'sandwich',
    iconPath: '/icons/foodBox.png',
    description: 'Sandwich boxes'
  },
  {
    pattern: 'french fry',
    iconPath: '/icons/foodBox.png',
    description: 'French fry boxes'
  },
  {
    pattern: 'noodle',
    iconPath: '/icons/foodBox.png',
    description: 'Noodle boxes'
  },
  {
    pattern: 'popcorn',
    iconPath: '/icons/foodBox.png',
    description: 'Popcorn boxes'
  },
  {
    pattern: 'snack',
    iconPath: '/icons/foodBox.png',
    description: 'Snack boxes'
  },
  {
    pattern: 'tea',
    iconPath: '/icons/foodBox.png',
    description: 'Tea boxes'
  },
  {
    pattern: 'birthday',
    iconPath: '/icons/giftBox.png',
    description: 'Birthday gift boxes'
  },
  {
    pattern: 'party favor',
    iconPath: '/icons/giftBox.png',
    description: 'Party favor boxes'
  },
  {
    pattern: 'deluxe',
    iconPath: '/icons/giftBox.png',
    description: 'Deluxe gift boxes'
  },
  {
    pattern: 'anklet',
    iconPath: '/icons/jwelryBox.png',
    description: 'Anklet boxes'
  },
  {
    pattern: 'pendant',
    iconPath: '/icons/jwelryBox.png',
    description: 'Pendant boxes'
  },
  {
    pattern: 'bracelet',
    iconPath: '/icons/jwelryBox.png',
    description: 'Bracelet boxes'
  },
  {
    pattern: 'ring',
    iconPath: '/icons/jwelryBox.png',
    description: 'Ring boxes'
  },
  {
    pattern: 'earring',
    iconPath: '/icons/jwelryBox.png',
    description: 'Earring boxes'
  },
  {
    pattern: 'necklace',
    iconPath: '/icons/jwelryBox.png',
    description: 'Necklace boxes'
  },
  {
    pattern: 'velvet',
    iconPath: '/icons/jwelryBox.png',
    description: 'Velvet bags'
  },
  {
    pattern: 'die cut',
    iconPath: '/icons/retailBox.png',
    description: 'Die cut boxes'
  },
  {
    pattern: 'toy',
    iconPath: '/icons/retailBox.png',
    description: 'Toy boxes'
  },
  {
    pattern: 'luxury',
    iconPath: '/icons/candelBox.png',
    description: 'Luxury candle boxes'
  },
  {
    pattern: 'taper',
    iconPath: '/icons/candelBox.png',
    description: 'Taper candle boxes'
  },
  {
    pattern: 'wax melt',
    iconPath: '/icons/candelBox.png',
    description: 'Wax melt boxes'
  },
  {
    pattern: 'black shipping',
    iconPath: 'shippingBox_v70vln',
    description: 'Black shipping boxes'
  },
  {
    pattern: 'corrugated shipping',
    iconPath: 'shippingBox_v70vln',
    description: 'Corrugated shipping boxes'
  },
  {
    pattern: 'custom shipping',
    iconPath: 'shippingBox_v70vln',
    description: 'Custom shipping boxes'
  },
  {
    pattern: 'bath bomb',
    iconPath: '/icons/soapBox.png',
    description: 'Bath bomb boxes'
  },
  {
    pattern: 'handmade',
    iconPath: '/icons/soapBox.png',
    description: 'Handmade soap boxes'
  },
  {
    pattern: 'square soap',
    iconPath: '/icons/soapBox.png',
    description: 'Square soap boxes'
  },
  {
    pattern: 'cufflink',
    iconPath: '/icons/apparelBox.png',
    description: 'Cufflink boxes'
  },
  {
    pattern: 'tie',
    iconPath: '/icons/apparelBox.png',
    description: 'Tie boxes'
  },
  {
    pattern: 'belt',
    iconPath: '/icons/apparelBox.png',
    description: 'Belt boxes'
  },
  {
    pattern: 'clothing',
    iconPath: '/icons/apparelBox.png',
    description: 'Clothing boxes'
  },
  {
    pattern: 'lingerie',
    iconPath: '/icons/apparelBox.png',
    description: 'Lingerie boxes'
  },
  {
    pattern: 'underwear',
    iconPath: '/icons/apparelBox.png',
    description: 'Underwear boxes'
  },
  {
    pattern: 't-shirt',
    iconPath: '/icons/apparelBox.png',
    description: 'T-shirt boxes'
  },
  {
    pattern: 'socks',
    iconPath: '/icons/apparelBox.png',
    description: 'Socks boxes'
  },
  {
    pattern: 'shoe',
    iconPath: '/icons/sportsBox.png',
    description: 'Shoe boxes'
  },
  {
    pattern: 'golf',
    iconPath: '/icons/sportsBox.png',
    description: 'Golf ball boxes'
  },
  {
    pattern: 'football',
    iconPath: '/icons/sportsBox.png',
    description: 'Football boxes'
  },
  {
    pattern: 'paper cigarette',
    iconPath: '/icons/cigratteeBox.png',
    description: 'Paper cigarette boxes'
  },
  {
    pattern: 'empty cigarette',
    iconPath: '/icons/cigratteeBox.png',
    description: 'Empty cigarette boxes'
  },
  {
    pattern: 'blank cigarette',
    iconPath: '/icons/cigratteeBox.png',
    description: 'Blank cigarette boxes'
  },
  {
    pattern: 'flip top',
    iconPath: '/icons/cigratteeBox.png',
    description: 'Flip top cigarette boxes'
  },
  {
    pattern: 'cbd gummies',
    iconPath: '/icons/CBDBox.png',
    description: 'CBD gummies boxes'
  },
  {
    pattern: 'cannabis',
    iconPath: '/icons/CBDBox.png',
    description: 'Cannabis boxes'
  },
  {
    pattern: 'hemp oil',
    iconPath: '/icons/CBDBox.png',
    description: 'Hemp oil boxes'
  },
  {
    pattern: 'tincture',
    iconPath: '/icons/CBDBox.png',
    description: 'CBD tincture boxes'
  },
  {
    pattern: 'vape cartridge',
    iconPath: '/icons/eliquidBox.png',
    description: 'Vape cartridge boxes'
  },
  {
    pattern: 'disposable vape',
    iconPath: '/icons/eliquidBox.png',
    description: 'Disposable vape boxes'
  },
  {
    pattern: 'pencil',
    iconPath: '/icons/stationaryBox.png',
    description: 'Pencil boxes'
  },
  {
    pattern: 'pen',
    iconPath: '/icons/stationaryBox.png',
    description: 'Pen boxes'
  },
  {
    pattern: 'book',
    iconPath: '/icons/stationaryBox.png',
    description: 'Book boxes'
  },
  {
    pattern: 'presentation',
    iconPath: '/icons/stationaryBox.png',
    description: 'Presentation folders'
  },
  {
    pattern: 'christmas eve',
    iconPath: '/icons/christmasBox.png',
    description: 'Christmas eve boxes'
  },
  {
    pattern: 'christmas present',
    iconPath: '/icons/christmasBox.png',
    description: 'Christmas present boxes'
  },
  {
    pattern: 'christmas treat',
    iconPath: '/icons/christmasBox.png',
    description: 'Christmas treat boxes'
  },
  {
    pattern: 'christmas favor',
    iconPath: '/icons/christmasBox.png',
    description: 'Christmas favor boxes'
  },
  {
    pattern: 'chocolate milk',
    iconPath: '/icons/chocolateBox.png',
    description: 'Chocolate milk boxes'
  },
  {
    pattern: 'chocolate bomb',
    iconPath: '/icons/chocolateBox.png',
    description: 'Chocolate bomb boxes'
  },
  {
    pattern: 'chocolate bar',
    iconPath: '/icons/chocolateBox.png',
    description: 'Chocolate bar boxes'
  },
  {
    pattern: 'cereal wholesale',
    iconPath: '/icons/carealBox.png',
    description: 'Cereal boxes wholesale'
  },
  {
    pattern: 'mini cereal',
    iconPath: '/icons/carealBox.png',
    description: 'Mini cereal boxes'
  },
  {
    pattern: 'corn flakes',
    iconPath: '/icons/carealBox.png',
    description: 'Corn flakes boxes'
  },
  {
    pattern: 'breakfast cereal',
    iconPath: '/icons/carealBox.png',
    description: 'Breakfast cereal boxes'
  },
  {
    pattern: 'colorful cereal',
    iconPath: '/icons/carealBox.png',
    description: 'Colorful cereal boxes'
  },
  {
    pattern: 'vintage cereal',
    iconPath: '/icons/carealBox.png',
    description: 'Vintage cereal boxes'
  },
  {
    pattern: 'retro cereal',
    iconPath: '/icons/carealBox.png',
    description: 'Retro cereal boxes'
  },
  {
    pattern: '90s cereal',
    iconPath: '/icons/carealBox.png',
    description: '90s cereal boxes'
  },
  {
    pattern: '80s cereal',
    iconPath: '/icons/carealBox.png',
    description: '80s cereal boxes'
  },
  {
    pattern: 'funny cereal',
    iconPath: '/icons/carealBox.png',
    description: 'Funny cereal boxes'
  },
  {
    pattern: 'delta 8',
    iconPath: '/icons/preRollBox.png',
    description: 'Delta 8 boxes'
  },
  {
    pattern: 'white pizza',
    iconPath: '/icons/pizzaBox.png',
    description: 'White pizza boxes'
  },
  {
    pattern: 'pizza slice',
    iconPath: '/icons/pizzaBox.png',
    description: 'Pizza slice boxes'
  },
  {
    pattern: 'round pizza',
    iconPath: '/icons/pizzaBox.png',
    description: 'Round pizza boxes'
  },
  {
    pattern: 'rectangle pizza',
    iconPath: '/icons/pizzaBox.png',
    description: 'Rectangle pizza boxes'
  },
  {
    pattern: 'flatbread pizza',
    iconPath: '/icons/pizzaBox.png',
    description: 'Flatbread pizza boxes'
  },
  {
    pattern: 'inch pizza',
    iconPath: '/icons/pizzaBox.png',
    description: 'Pizza boxes by size'
  },
  {
    pattern: 'blank pizza',
    iconPath: '/icons/pizzaBox.png',
    description: 'Blank pizza boxes'
  },
  
  // Specific product types
  {
    pattern: 'mailer',
    iconPath: 'shippingBox_v70vln',
    description: 'Mailer boxes'
  },
  {
    pattern: 'shipping',
    iconPath: 'shippingBox_v70vln',
    description: 'Shipping boxes'
  },
  
  // Mylar boxes products

  {
    pattern: 'stand up pouche',
    iconPath: 'standup-zip-lock-myler-box_dlgobk',
    description: 'Stand Up Pouche',
    exactMatch: true
  },
  {
    pattern: 'zipper bag',
    iconPath: 'myler-ziplock-bag_w6x2cz',
    description: 'Zipper Bag',
    exactMatch: true
  },
  {
    pattern: 'window bag',
    iconPath: 'window-bag_tw8vlq',
    description: 'Window Bag',
    exactMatch: true
  },
  
  // Shopping bag products
  {
    pattern: 'kraft shopping bag',
    iconPath: 'kraft-shopping-bag_otahpn',
    description: 'Kraft Shopping Bag',
    exactMatch: true
  },
  {
    pattern: 'paper bag',
    iconPath: 'paper-bag_q7nlaf',
    description: 'Paper Bag',
    exactMatch: true
  },
  {
    pattern: 'pvc bag',
    iconPath: 'pvc-bag_jztehq',
    description: 'PVC Bag',
    exactMatch: true
  },
  
  // Other products
  {
    pattern: 'booklets',
    iconPath: 'booklets_xu1ahx',
    description: 'Booklets',
    exactMatch: true
  },
  {
    pattern: 'brochures',
    iconPath: 'brochures_eal6ji',
    description: 'Brochures',
    exactMatch: true
  },
  {
    pattern: 'tags printing',
    iconPath: 'tag-printing_mimtc4',
    description: 'Tags Printing',
    exactMatch: true
  },
  {
    pattern: 'business cards',
    iconPath: 'business-cards_ggfnab',
    description: 'Business Cards',
    exactMatch: true
  },
  {
    pattern: 'custom tissue paper',
    iconPath: 'cutom-tissue-paper_vlplnt',
    description: 'Custom Tissue Paper',
    exactMatch: true
  },
  {
    pattern: 'butter paper',
    iconPath: 'butter-paper_duhyqp',
    description: 'Butter Paper',
    exactMatch: true
  },
  {
    pattern: 'product labels & bottle labels',
    iconPath: 'product-label_t1kpzp',
    description: 'Product Labels & Bottle Labels',
    exactMatch: true
  },
  {
    pattern: ['product labels', 'bottle labels'],
    iconPath: 'product-label_t1kpzp',
    description: 'Product Labels & Bottle Labels',
    exactMatch: true
  },
  {
    pattern: 'table tents',
    iconPath: 'table-tents_xokzfv',
    description: 'Table Tents',
    exactMatch: true
  },
  {
    pattern: 'packing tape',
    iconPath: 'packing-tape_v4prqu',
    description: 'Packing Tape',
    exactMatch: true
  },
  
  // Additional fallback patterns for better matching
  {
    pattern: 'box',
    iconPath: 'rigid-box_wavmky',
    description: 'Generic box'
  },
  {
    pattern: 'bag',
    iconPath: 'kraft-shopping-bag_otahpn',
    description: 'Generic bag'
  },
  {
    pattern: 'pouch',
    iconPath: 'myler-ziplock-bag_w6x2cz',
    description: 'Generic pouch'
  }
];

// Header configuration
export const headerConfig: HeaderConfig = {
  logo: {
    iconPath: 'logo-vertical_zkxna0',
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
  
  console.log('🔍 Getting category icon for:', categoryName, 'processed name:', name);
  
  // First try exact matches
  for (const mapping of categoryIconMappings) {
    if (mapping.exactMatch) {
      if (Array.isArray(mapping.pattern)) {
        if (mapping.pattern.some(pattern => name === pattern.toLowerCase())) {
          console.log('✅ Exact category match found:', mapping.pattern, '->', mapping.iconPath);
          return mapping.iconPath;
        }
      } else {
        if (name === mapping.pattern.toLowerCase()) {
          console.log('✅ Exact category match found:', mapping.pattern, '->', mapping.iconPath);
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
          console.log('✅ Partial category match found:', mapping.pattern, '->', mapping.iconPath);
          return mapping.iconPath;
        }
      } else {
        if (name.includes(mapping.pattern)) {
          console.log('✅ Partial category match found:', mapping.pattern, '->', mapping.iconPath);
          return mapping.iconPath;
        }
      }
    }
  }
  
  console.log('❌ No category match found for:', categoryName, 'using default icon');
  return '/icons/rigid.png'; // Default box icon
};

export const getSubcategoryIcon = (subcategoryName: string): string => {
  const name = subcategoryName.toLowerCase();
  
  // Debug logging for all subcategories
  console.log('🔍 Getting subcategory icon for:', subcategoryName, 'processed name:', name);
  
  // First try exact matches
  for (const mapping of subcategoryIconMappings) {
    if (mapping.exactMatch) {
      // For exact matches, check if the name exactly matches the pattern
      if (Array.isArray(mapping.pattern)) {
        if (mapping.pattern.some(pattern => name === pattern.toLowerCase())) {
          console.log('✅ Exact subcategory match found:', mapping.pattern, '->', mapping.iconPath);
          return mapping.iconPath;
        }
      } else {
        if (name === mapping.pattern.toLowerCase()) {
          console.log('✅ Exact subcategory match found:', mapping.pattern, '->', mapping.iconPath);
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
          console.log('✅ Partial subcategory match found:', mapping.pattern, '->', mapping.iconPath);
          return mapping.iconPath;
        }
      } else {
        if (name.includes(mapping.pattern)) {
          console.log('✅ Partial subcategory match found:', mapping.pattern, '->', mapping.iconPath);
          return mapping.iconPath;
        }
      }
    }
  }
  
  console.log('❌ No subcategory match found for:', subcategoryName, 'using default icon');
  return '/icons/rigid.png'; // Default box icon
};

export default {
  categoryIconMappings,
  subcategoryIconMappings,
  headerConfig,
  getCategoryIcon,
  getSubcategoryIcon
};
