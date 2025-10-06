/**
 * Pricing Form Types
 * Used by the pricing form component
 */

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'in' | 'cm' | 'mm';
}

export interface LogoPlacement {
  position: string;
  size: string;
  complexity: string;
}

export interface PrintingOptions {
  type: string;
  sides: number;
  complexity: string;
}

export interface FinishingOptions {
  type: string;
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
  printingType: string;
  laminationType: string;
  dieMakingRequired: boolean;
  dieCuttingRequired: boolean;
  pastingRequired: boolean;
  twoPieceBox: boolean;
  vendorPercentage: number;
  shippingWeight: number;
}

export interface PricingBreakdownItem {
  description: string;
  cost: number;
}

export interface PricingResult {
  total: number;
  breakdown: PricingBreakdownItem[];
  estimatedDelivery: string;
}

export interface Product {
  _id: string;
  name: string;
  category?: string;
  description?: string;
}

export interface Material {
  _id: string;
  name: string;
  type?: string;
  description?: string;
}

