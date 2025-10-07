// Pricing form types for the pricing calculator component

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'in' | 'cm' | 'mm';
}

export interface LogoPlacement {
  side: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom';
  position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size: number;
  colorCount: number;
}

export interface PrintingOptions {
  type: 'none' | 'outside' | 'inside' | 'bothSide';
  sides: number;
  complexity: 'simple' | 'medium' | 'complex';
}

export interface FinishingOptions {
  type: 'none' | 'glossy' | 'matt' | 'softTouch';
}

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
  // CSV-based pricing options
  scanningRequired: boolean;
  platesRequired: boolean;
  printingType: 'outside' | 'inside' | 'bothSide' | 'none';
  laminationType: 'glossy' | 'matt' | 'softTouch' | 'none';
  dieMakingRequired: boolean;
  dieCuttingRequired: boolean;
  pastingRequired: boolean;
  twoPieceBox: boolean;
  vendorPercentage: number;
  shippingWeight: number;
}

export interface Material {
  _id: string;
  name: string;
  gsm?: number;
  pricePerUnit?: number;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  description?: string;
}

export interface PricingResult {
  summary?: {
    pricePerUnit: number;
    subtotal: number;
    total: number;
  };
  breakdown?: Array<{
    sectionNumber: number;
    sectionName: string;
    cost: number;
    description: string;
    formula: string;
  }>;
  calculations?: Record<string, unknown>;
}
