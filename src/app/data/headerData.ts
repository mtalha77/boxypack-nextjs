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
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: NavigationDropdownItem[];
}

export interface NavigationDropdownItem {
  name: string;
  href: string;
  description?: string;
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
  // Box construction types - using Cloudinary IDs for consistency
  {
    pattern: 'magnetic',
    iconPath: 'rigid-box_wavmky',
    description: 'Magnetic closure boxes'
  },
  {
    pattern: 'two piece',
    iconPath: 'rigid-box_wavmky',
    description: 'Two-piece boxes'
  },
  {
    pattern: ['collapsible', 'foldable'],
    iconPath: 'kraft-boxes_hwu3cv',
    description: 'Foldable boxes'
  },
  {
    pattern: ['sliding', 'sleeve'],
    iconPath: 'rigid-box_wavmky',
    description: 'Sliding boxes'
  },
  {
    pattern: 'child resistant',
    iconPath: 'rigid-box_wavmky',
    description: 'Child-resistant boxes'
  },
  {
    pattern: 'brief case',
    iconPath: 'rigid-box_wavmky',
    description: 'Briefcase boxes'
  },
  {
    pattern: 'book style',
    iconPath: 'rigid-box_wavmky',
    description: 'Book-style boxes'
  },
  {
    pattern: 'bookend',
    iconPath: 'stationaryBox_zhokdh',
    description: 'Bookend boxes'
  },
  {
    pattern: 'hexagon',
    iconPath: 'rigid-box_wavmky',
    description: 'Hexagonal boxes'
  },
  {
    pattern: 'round',
    iconPath: 'rigid-box_wavmky',
    description: 'Round boxes'
  },
  {
    pattern: 'shoulder',
    iconPath: 'cardboard_jjfywq',
    description: 'Shoulder boxes'
  },
  {
    pattern: 'pillow',
    iconPath: 'soapBox_qpabxg',
    description: 'Pillow boxes'
  },
  {
    pattern: 'gable',
    iconPath: 'kraft-boxes_hwu3cv',
    description: 'Gable boxes'
  },
  {
    pattern: 'tuck',
    iconPath: 'cardboard_jjfywq',
    description: 'Tuck boxes'
  },
  {
    pattern: 'window',
    iconPath: 'window-bag_tw8vlq',
    description: 'Window boxes'
  },
  {
    pattern: 'display',
    iconPath: 'retailBox_qpyhws',
    description: 'Display boxes'
  },
  {
    pattern: 'dispenser',
    iconPath: 'soapBox_qpabxg',
    description: 'Dispenser boxes'
  },
  {
    pattern: 'hanger',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Hanger boxes'
  },
  {
    pattern: 'inserts',
    iconPath: 'cardboard_jjfywq',
    description: 'Box inserts'
  },
  {
    pattern: 'auto bottom',
    iconPath: 'cardboard_jjfywq',
    description: 'Auto bottom boxes'
  },
  {
    pattern: 'seal end',
    iconPath: 'cardboard_jjfywq',
    description: 'Seal end boxes'
  },
  {
    pattern: 'blister',
    iconPath: 'rigid-box_wavmky',
    description: 'Blister boxes'
  },
  {
    pattern: 'full flap',
    iconPath: 'shippingBox_v70vln',
    description: 'Full flap boxes'
  },
  {
    pattern: 'box with lid',
    iconPath: 'rigid-box_wavmky',
    description: 'Box with lid'
  },
  {
    pattern: 'six corner',
    iconPath: 'cardboard_jjfywq',
    description: 'Six corner boxes'
  },
  {
    pattern: 'side lock',
    iconPath: 'cardboard_jjfywq',
    description: 'Side lock boxes'
  },
  {
    pattern: 'double wall',
    iconPath: 'corrugated_ox51z1',
    description: 'Double wall boxes'
  },
  {
    pattern: 'double locked',
    iconPath: 'corrugated_ox51z1',
    description: 'Double locked boxes'
  },
  {
    pattern: 'frame tray',
    iconPath: 'cardboard_jjfywq',
    description: 'Frame tray'
  },
  
  // Specific subcategory patterns from actual data
  {
    pattern: 'mailer',
    iconPath: 'shippingBox_v70vln',
    description: 'Mailer boxes'
  },
  {
    pattern: 'cake',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Cake boxes'
  },
  {
    pattern: 'bakery',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Bakery boxes'
  },
  {
    pattern: 'donut',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Donut boxes'
  },
  {
    pattern: 'cupcake',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Cupcake boxes'
  },
  {
    pattern: 'cookie',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Cookie boxes'
  },
  {
    pattern: 'pastry',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Pastry boxes'
  },
  {
    pattern: 'candy',
    iconPath: 'bakeryBox_ntpjfy',
    description: 'Candy boxes'
  },
  {
    pattern: 'perfume',
    iconPath: 'cosmaticsBox_gfjkea',
    description: 'Perfume boxes'
  },
  {
    pattern: 'makeup',
    iconPath: 'cosmaticsBox_gfjkea',
    description: 'Makeup boxes'
  },
  {
    pattern: 'lipstick',
    iconPath: 'cosmaticsBox_gfjkea',
    description: 'Lipstick boxes'
  },
  {
    pattern: 'mascara',
    iconPath: 'cosmaticsBox_gfjkea',
    description: 'Mascara boxes'
  },
  {
    pattern: 'nail polish',
    iconPath: 'cosmaticsBox_gfjkea',
    description: 'Nail polish boxes'
  },
  {
    pattern: 'coffee',
    iconPath: 'foodBox_bmo9dr',
    description: 'Coffee boxes'
  },
  {
    pattern: 'burger',
    iconPath: 'foodBox_bmo9dr',
    description: 'Burger boxes'
  },
  {
    pattern: 'sandwich',
    iconPath: 'foodBox_bmo9dr',
    description: 'Sandwich boxes'
  },
  {
    pattern: 'french fry',
    iconPath: 'foodBox_bmo9dr',
    description: 'French fry boxes'
  },
  {
    pattern: 'noodle',
    iconPath: 'foodBox_bmo9dr',
    description: 'Noodle boxes'
  },
  {
    pattern: 'popcorn',
    iconPath: 'foodBox_bmo9dr',
    description: 'Popcorn boxes'
  },
  {
    pattern: 'snack',
    iconPath: 'foodBox_bmo9dr',
    description: 'Snack boxes'
  },
  {
    pattern: 'tea',
    iconPath: 'foodBox_bmo9dr',
    description: 'Tea boxes'
  },
  {
    pattern: 'birthday',
    iconPath: 'giftBox_gmbygu',
    description: 'Birthday gift boxes'
  },
  {
    pattern: 'party favor',
    iconPath: 'giftBox_gmbygu',
    description: 'Party favor boxes'
  },
  {
    pattern: 'deluxe',
    iconPath: 'giftBox_gmbygu',
    description: 'Deluxe gift boxes'
  },
  {
    pattern: 'anklet',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Anklet boxes'
  },
  {
    pattern: 'pendant',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Pendant boxes'
  },
  {
    pattern: 'bracelet',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Bracelet boxes'
  },
  {
    pattern: 'ring',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Ring boxes'
  },
  {
    pattern: 'earring',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Earring boxes'
  },
  {
    pattern: 'necklace',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Necklace boxes'
  },
  {
    pattern: 'velvet',
    iconPath: 'jwelryBox_qcz5al',
    description: 'Velvet bags'
  },
  {
    pattern: 'die cut',
    iconPath: 'retailBox_qpyhws',
    description: 'Die cut boxes'
  },
  {
    pattern: 'toy',
    iconPath: 'retailBox_qpyhws',
    description: 'Toy boxes'
  },
  {
    pattern: 'luxury',
    iconPath: 'candelBox_unqhum',
    description: 'Luxury candle boxes'
  },
  {
    pattern: 'taper',
    iconPath: 'candelBox_unqhum',
    description: 'Taper candle boxes'
  },
  {
    pattern: 'wax melt',
    iconPath: 'candelBox_unqhum',
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
    iconPath: 'soapBox_qpabxg',
    description: 'Bath bomb boxes'
  },
  {
    pattern: 'handmade',
    iconPath: 'soapBox_qpabxg',
    description: 'Handmade soap boxes'
  },
  {
    pattern: 'square soap',
    iconPath: 'soapBox_qpabxg',
    description: 'Square soap boxes'
  },
  {
    pattern: 'cufflink',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Cufflink boxes'
  },
  {
    pattern: 'tie',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Tie boxes'
  },
  {
    pattern: 'belt',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Belt boxes'
  },
  {
    pattern: 'clothing',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Clothing boxes'
  },
  {
    pattern: 'lingerie',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Lingerie boxes'
  },
  {
    pattern: 'underwear',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Underwear boxes'
  },
  {
    pattern: 't-shirt',
    iconPath: 'apparelBox_c0r1bo',
    description: 'T-shirt boxes'
  },
  {
    pattern: 'socks',
    iconPath: 'apparelBox_c0r1bo',
    description: 'Socks boxes'
  },
  {
    pattern: 'shoe',
    iconPath: 'sportsBox_v6pwaf',
    description: 'Shoe boxes'
  },
  {
    pattern: 'golf',
    iconPath: 'sportsBox_v6pwaf',
    description: 'Golf ball boxes'
  },
  {
    pattern: 'football',
    iconPath: 'sportsBox_v6pwaf',
    description: 'Football boxes'
  },
  {
    pattern: 'paper cigarette',
    iconPath: 'cigratteeBox_kaytkj',
    description: 'Paper cigarette boxes'
  },
  {
    pattern: 'empty cigarette',
    iconPath: 'cigratteeBox_kaytkj',
    description: 'Empty cigarette boxes'
  },
  {
    pattern: 'blank cigarette',
    iconPath: 'cigratteeBox_kaytkj',
    description: 'Blank cigarette boxes'
  },
  {
    pattern: 'flip top',
    iconPath: 'cigratteeBox_kaytkj',
    description: 'Flip top cigarette boxes'
  },
  {
    pattern: 'ciggeret',
    iconPath: 'cigratteeBox_kaytkj',
    description: 'Cigarette boxes'
  },
  {
    pattern: 'cbd gummies',
    iconPath: 'CBDBox_aizsuy',
    description: 'CBD gummies boxes'
  },
  {
    pattern: 'cannabis',
    iconPath: 'CBDBox_aizsuy',
    description: 'Cannabis boxes'
  },
  {
    pattern: 'hemp oil',
    iconPath: 'CBDBox_aizsuy',
    description: 'Hemp oil boxes'
  },
  {
    pattern: 'tincture',
    iconPath: 'CBDBox_aizsuy',
    description: 'CBD tincture boxes'
  },
  {
    pattern: 'vape cartridge',
    iconPath: 'eliquidBox_wpu3he',
    description: 'Vape cartridge boxes'
  },
  {
    pattern: 'disposable vape',
    iconPath: 'eliquidBox_wpu3he',
    description: 'Disposable vape boxes'
  },
  {
    pattern: 'pencil',
    iconPath: 'stationaryBox_zhokdh',
    description: 'Pencil boxes'
  },
  {
    pattern: 'pen',
    iconPath: 'stationaryBox_zhokdh',
    description: 'Pen boxes'
  },
  {
    pattern: 'book',
    iconPath: 'stationaryBox_zhokdh',
    description: 'Book boxes'
  },
  {
    pattern: 'presentation',
    iconPath: 'stationaryBox_zhokdh',
    description: 'Presentation folders'
  },
  {
    pattern: 'christmas eve',
    iconPath: 'christmasBox_eldfzv',
    description: 'Christmas eve boxes'
  },
  {
    pattern: 'christmas present',
    iconPath: 'christmasBox_eldfzv',
    description: 'Christmas present boxes'
  },
  {
    pattern: 'christmas treat',
    iconPath: 'christmasBox_eldfzv',
    description: 'Christmas treat boxes'
  },
  {
    pattern: 'christmas favor',
    iconPath: 'christmasBox_eldfzv',
    description: 'Christmas favor boxes'
  },
  {
    pattern: 'chocolate milk',
    iconPath: 'chocolateBox_yuhq78',
    description: 'Chocolate milk boxes'
  },
  {
    pattern: 'chocolate bomb',
    iconPath: 'chocolateBox_yuhq78',
    description: 'Chocolate bomb boxes'
  },
  {
    pattern: 'chocolate bar',
    iconPath: 'chocolateBox_yuhq78',
    description: 'Chocolate bar boxes'
  },
  {
    pattern: 'cereal wholesale',
    iconPath: 'carealBox_y12zuv',
    description: 'Cereal boxes wholesale'
  },
  {
    pattern: 'mini cereal',
    iconPath: 'carealBox_y12zuv',
    description: 'Mini cereal boxes'
  },
  {
    pattern: 'corn flakes',
    iconPath: 'carealBox_y12zuv',
    description: 'Corn flakes boxes'
  },
  {
    pattern: 'breakfast cereal',
    iconPath: 'carealBox_y12zuv',
    description: 'Breakfast cereal boxes'
  },
  {
    pattern: 'colorful cereal',
    iconPath: 'carealBox_y12zuv',
    description: 'Colorful cereal boxes'
  },
  {
    pattern: 'vintage cereal',
    iconPath: 'carealBox_y12zuv',
    description: 'Vintage cereal boxes'
  },
  {
    pattern: 'retro cereal',
    iconPath: 'carealBox_y12zuv',
    description: 'Retro cereal boxes'
  },
  {
    pattern: '90s cereal',
    iconPath: 'carealBox_y12zuv',
    description: '90s cereal boxes'
  },
  {
    pattern: '80s cereal',
    iconPath: 'carealBox_y12zuv',
    description: '80s cereal boxes'
  },
  {
    pattern: 'funny cereal',
    iconPath: 'carealBox_y12zuv',
    description: 'Funny cereal boxes'
  },
  {
    pattern: 'delta 8',
    iconPath: 'preRollBox_h6woxr',
    description: 'Delta 8 boxes'
  },
  {
    pattern: 'white pizza',
    iconPath: 'pizzaBox_c15rfj',
    description: 'White pizza boxes'
  },
  {
    pattern: 'pizza slice',
    iconPath: 'pizzaBox_c15rfj',
    description: 'Pizza slice boxes'
  },
  {
    pattern: 'round pizza',
    iconPath: 'pizzaBox_c15rfj',
    description: 'Round pizza boxes'
  },
  {
    pattern: 'rectangle pizza',
    iconPath: 'pizzaBox_c15rfj',
    description: 'Rectangle pizza boxes'
  },
  {
    pattern: 'flatbread pizza',
    iconPath: 'pizzaBox_c15rfj',
    description: 'Flatbread pizza boxes'
  },
  {
    pattern: 'inch pizza',
    iconPath: 'pizzaBox_c15rfj',
    description: 'Pizza boxes by size'
  },
  {
    pattern: 'blank pizza',
    iconPath: 'pizzaBox_c15rfj',
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
    description: 'Mylar Ziplock Bag',
    exactMatch: true
  },
  {
    pattern: 'window bag',
    iconPath: 'window-bag_tw8vlq',
    description: 'Mylar Window Bag',
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
      { 
        name: 'About Company', 
        hasDropdown: true,
        dropdownItems: [
          { name: 'About Us', href: '/about-us' },
          { name: 'Privacy Policy', href: '/privacy-policy' },
          { name: 'Terms of Use', href: '/terms-of-use' }
        ]
      },
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
  
  return 'rigid-box_wavmky'; // Default box icon
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
  
  return 'rigid-box_wavmky'; // Default box icon
};

export default {
  categoryIconMappings,
  subcategoryIconMappings,
  headerConfig,
  getCategoryIcon,
  getSubcategoryIcon
};
