// Core Pricing Types
export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'in' | 'cm' | 'mm';
}

// Material specifications from CSV
export interface MaterialSpec {
  gsm: number;
  kraft: number;
  cardboard: number;
  corrugated: number;
}

// Product categories from CSV
export type ProductCategory = 'rigid' | 'kraft' | 'cardboard' | 'corrugated' | 'mylar' | 'shopping' | 'other';

// Printing options from CSV
export type PrintingType = 'outside' | 'inside' | 'bothside' | 'blank';
export type LaminationType = 'glossy' | 'matte' | 'softtouch' | 'none';

// Die making calculation
export interface DieMakingSpec {
  minCost: number;
  calculation: 'area' | 'fixed';
  areaThreshold: number;
}

export interface PricingRequest {
  productId: string;
  material: string;
  dimensions: Dimensions;
  quantity: number;
  logoPlacement?: LogoPlacement[];
  printingOptions?: PrintingOptions;
  finishingOptions?: FinishingOptions;
  deliveryLocation?: string;
  rushOrder?: boolean;
  // CSV-based pricing components
  scanningRequired?: boolean;
  platesRequired?: boolean;
  printingType?: PrintingType;
  laminationType?: LaminationType;
  dieMakingRequired?: boolean;
  dieCuttingRequired?: boolean;
  pastingRequired?: boolean;
  twoPieceBox?: boolean;
  vendorPercentage?: number;
  shippingWeight?: number;
  // Product-specific overrides
  customMaterialCost?: number;
  customPrintingCost?: number;
  customLaminationCost?: number;
  customDieMakingCost?: number;
  customDieCuttingCost?: number;
  customPastingCost?: number;
}

export interface PricingResult {
  basePrice: number;
  materialCost: number;
  sizeCost: number;
  quantityDiscount: number;
  customizationCost: number;
  finishingCost: number;
  locationCost: number;
  rushOrderCost: number;
  // CSV-based pricing components
  scanningCost: number;
  platesCost: number;
  printingCost: number;
  laminationCost: number;
  dieMakingCost: number;
  dieCuttingCost: number;
  pastingCost: number;
  twoPieceBoxMultiplier: number;
  vendorCost: number;
  shippingCost: number;
  bothSidePrintingSurcharge: number;
  subtotal: number;
  tax: number;
  total: number;
  breakdown: PricingBreakdown[];
  estimatedDelivery: string;
  currency: string;
}

export interface PricingBreakdown {
  category: string;
  description: string;
  cost: number;
  unit?: string;
  quantity?: number;
}

// Product Types
export interface Product {
  _id?: string;
  name: string;
  category: string;
  subcategory?: string;
  basePrice: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  specifications?: ProductSpecifications;
}

export interface ProductSpecifications {
  minDimensions: Dimensions;
  maxDimensions: Dimensions;
  availableMaterials: string[];
  availableFinishing: string[];
  availablePrinting: string[];
}

// Material Types
export interface Material {
  _id?: string;
  name: string;
  type: 'cardboard' | 'kraft' | 'corrugated' | 'rigid' | 'mylar' | 'other';
  baseCostPerSqFt: number;
  thicknessFactor: number;
  qualityMultiplier: number;
  isPremium: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Size Pricing Types
export interface SizePricing {
  _id?: string;
  productId: string;
  minLength: number;
  maxLength: number;
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  sizeMultiplier: number;
  baseSurcharge: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Quantity Tiers Types
export interface QuantityTier {
  _id?: string;
  productId: string;
  minQuantity: number;
  maxQuantity: number;
  discountPercentage: number;
  pricePerUnit: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Customization Types
export interface LogoPlacement {
  position: 'front' | 'back' | 'side' | 'top' | 'bottom' | 'all_sides';
  size: 'small' | 'medium' | 'large' | 'custom';
  customSize?: Dimensions;
  complexity: 'simple' | 'medium' | 'complex';
}

export interface PrintingOptions {
  type: 'none' | 'single_color' | 'multi_color' | 'full_color';
  sides: number;
  complexity: 'simple' | 'medium' | 'complex';
  specialEffects?: string[];
}

export interface FinishingOptions {
  type: 'none' | 'matte' | 'glossy' | 'satin';
  specialFinishing?: string[];
  embossing?: boolean;
  foilStamping?: boolean;
}

// Pricing Rules Types
export interface PricingRule {
  _id?: string;
  category: 'base' | 'material' | 'size' | 'quantity' | 'customization' | 'finishing' | 'location';
  productId?: string;
  conditionType: 'range' | 'exact' | 'formula';
  conditionData: any;
  priceFormula: string;
  baseValue: number;
  multiplier: number;
  isActive: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}

// Location Pricing Types
export interface LocationPricing {
  _id?: string;
  location: string;
  country: string;
  state?: string;
  city?: string;
  baseShippingCost: number;
  weightMultiplier: number;
  sizeMultiplier: number;
  rushOrderMultiplier: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Admin Types
export interface PricingFormula {
  _id?: string;
  name: string;
  description: string;
  formula: string;
  variables: string[];
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BulkPricingUpdate {
  productId: string;
  field: string;
  value: any;
  operation: 'set' | 'increment' | 'multiply';
}

// API Response Types
export interface PricingApiResponse {
  success: boolean;
  data?: PricingResult;
  error?: string;
  message?: string;
}

export interface MaterialsApiResponse {
  success: boolean;
  data?: Material[];
  error?: string;
}

export interface ProductsApiResponse {
  success: boolean;
  data?: Product[];
  error?: string;
}

// Form Types
export interface PricingFormData {
  productId: string;
  material: string;
  dimensions: Dimensions;
  quantity: number;
  logoPlacement: LogoPlacement[];
  printingOptions: PrintingOptions;
  finishingOptions: FinishingOptions;
  deliveryLocation: string;
  rushOrder: boolean;
}

// Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

export interface PricingValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// CSV-based Product Pricing Structure
export interface CSVProductPricing {
  _id?: string;
  productName: string;
  category: ProductCategory;
  subcategory?: string;
  moq: number;
  url?: string;
  // Dimensions
  length: number;
  width: number;
  height: number;
  // Material specifications
  materialSpec: MaterialSpec;
  // Weight calculations
  weightOf100Units: number;
  materialCostOf100Units: number;
  // Fixed costs (one-time)
  scanningCost: {
    outside: number;
    inside: number;
    bothside: number;
    blank: number;
  };
  platesCost: {
    outside: number;
    inside: number;
    bothside: number;
    blank: number;
  };
  // Variable costs (per 1k units)
  printingCost: {
    outside: number;
    inside: number;
    bothside: number;
    blank: number;
  };
  laminationCost: {
    outside: number;
    inside: number;
    bothside: number;
    blank: number;
  };
  dieMakingCost: {
    outside: number;
    inside: number;
    bothside: number;
    blank: number;
  };
  dieCuttingCost: {
    outside: number;
    inside: number;
    bothside: number;
    blank: number;
  };
  pastingCost: {
    outside: number;
    inside: number;
    bothside: number;
    blank: number;
  };
  // Special calculations
  dieMakingSpec: DieMakingSpec;
  twoPieceBoxMultiplier: number;
  vendorPercentage: number;
  bothSidePrintingMultiplier: number;
  // Shipping
  shippingWeight: number;
  shippingCost: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
