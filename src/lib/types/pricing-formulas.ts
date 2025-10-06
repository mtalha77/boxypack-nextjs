/**
 * Pricing Formulas Types
 * Defines the structure for the new flexible pricing system
 * Each product has 12 configurable sections with editable formulas
 */

import { ObjectId } from 'mongodb';

// ============================================================================
// USER INPUT TYPES
// ============================================================================

export interface PricingCalculationRequest {
  productId: string;
  length: number;           // inches
  width: number;            // inches
  height: number;           // inches
  pt: string;               // "14", "16", "18", "N/A"
  requiredUnits: number;
  printing: PrintingType;
  lamination: LaminationType;
}

export type PrintingType = 'outside' | 'inside' | 'bothSide' | 'none';
export type LaminationType = 'glossy' | 'matt' | 'softTouch' | 'none';
export type MaterialType = 'kraft' | 'cardboard' | 'corrugated';

// ============================================================================
// SECTION 1: MATERIAL COST
// ============================================================================

export interface MaterialCostFormula {
  lengthFormula: {
    lengthMultiplier: number;      // Default: 2
    widthMultiplier: number;       // Default: 2
    heightMultiplier: number;      // Default: 0
    additionalInches: number;      // Default: 1.5
  };
  widthFormula: {
    lengthMultiplier: number;      // Default: 0
    widthMultiplier: number;       // Default: 0
    heightMultiplier: number;      // Default: 2
    additionalInches: number;      // Default: 2
  };
  gsmTable: GSMTableEntry[];
  weightOf100Units: {
    divisor: number;               // Default: 15500
  };
  costOf100Units: {
    rate: number;                  // Default: 300
  };
}

export interface GSMTableEntry {
  pt: string;                      // "14", "16", "18", "N/A"
  gsm: number;
  kraft: number | null;
  cardboard: number | null;
  corrugated: number | null;
}

// ============================================================================
// SECTION 2: SCANNING COST
// ============================================================================

export interface ScanningCostFormula {
  cost: number;                    // Fixed cost, default: 200
}

// ============================================================================
// SECTION 3: PLATES COST
// ============================================================================

export interface PlatesCostFormula {
  ranges: PlatesCostRange[];
}

export interface PlatesCostRange {
  id?: string;                     // For UI tracking
  name: string;                    // e.g., "Small", "Medium", "Large"
  lengthMin: number;
  lengthMax: number;
  widthMin: number;
  widthMax: number;
  costs: {
    outside: number;
    inside: number;
    bothSide: number;
    none: number;
  };
}

// ============================================================================
// SECTION 4: PRINTING COST
// ============================================================================

export interface PrintingCostFormula {
  ranges: PrintingCostRange[];
}

export interface PrintingCostRange {
  id?: string;                     // For UI tracking
  name: string;
  lengthMin: number;
  lengthMax: number;
  widthMin: number;
  widthMax: number;
  costs: {
    outside: number;
    inside: number;
    bothSide: number;
    none: number;
  };
}

// ============================================================================
// SECTION 5: LAMINATION COST
// ============================================================================

export interface LaminationCostFormula {
  enabled: boolean;                // Default: true
  glossy: {
    divisor: number;               // Default: 144
    rate: number;                  // Default: 3.5
  };
  matt: {
    divisor: number;               // Default: 144
    rate: number;                  // Default: 3.5
  };
  softTouch: {
    divisor: number;               // Default: 144
    rate: number;                  // Default: 20
  };
}

// ============================================================================
// SECTION 6: DIE MAKING COST
// ============================================================================

export interface DieMakingCostFormula {
  calculationType: 'calculated' | 'fixed';  // Default: 'calculated'
  multiplier: number;              // Default: 9 (Length × Width × 9) - only used when calculationType is 'calculated'
  fixedCost: number;               // Default: 1000 - only used when calculationType is 'fixed'
}

// ============================================================================
// SECTION 7: DIE CUTTING COST
// ============================================================================

export interface DieCuttingCostFormula {
  costPer1000: number;             // Default: 1000
}

// ============================================================================
// SECTION 8: PASTING COST
// ============================================================================

export interface PastingCostFormula {
  costPer1000: number;             // Default: 1000
}

// ============================================================================
// SECTION 9: TWO-PIECE BOX MULTIPLIER
// ============================================================================

export interface TwoPieceBoxFormula {
  enabled: boolean;                // Default: false
  multiplier: number;              // Default: 2
}

// ============================================================================
// SECTION 10: BOTH SIDE PRINTING SURCHARGE
// ============================================================================

export interface BothSidePrintingSurchargeFormula {
  percentage: number;              // Default: 10 (10%)
}

// ============================================================================
// SECTION 11: VENDOR PERCENTAGE
// ============================================================================

export interface VendorPercentageFormula {
  percentage: number;              // Default: 25 (25%)
}

// ============================================================================
// SECTION 12: SHIPPING COST
// ============================================================================

export interface ShippingCostFormula {
  weightCalculation: {
    multiplier: number;            // Default: 0.9
    divisor: number;               // Default: 100
  };
  shippingTiers: ShippingTier[];
}

export interface ShippingTier {
  minWeight: number;
  maxWeight: number;
  cost: number;
}

// ============================================================================
// COMPLETE PRODUCT PRICING FORMULA
// ============================================================================

export interface ProductPricingFormula {
  _id?: ObjectId | string;
  productId: string;
  productName: string;
  category: MaterialType;
  subcategory?: string;
  
  // All 12 sections
  materialCost: MaterialCostFormula;
  scanningCost: ScanningCostFormula;
  platesCost: PlatesCostFormula;
  printingCost: PrintingCostFormula;
  laminationCost: LaminationCostFormula;
  dieMakingCost: DieMakingCostFormula;
  dieCuttingCost: DieCuttingCostFormula;
  pastingCost: PastingCostFormula;
  twoPieceBox: TwoPieceBoxFormula;
  bothSidePrintingSurcharge: BothSidePrintingSurchargeFormula;
  vendorPercentage: VendorPercentageFormula;
  shippingCost: ShippingCostFormula;
  
  // Metadata
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// CALCULATION RESULT TYPES
// ============================================================================

export interface PricingCalculationResult {
  success: boolean;
  productName: string;
  breakdown: SectionBreakdown[];
  summary: {
    subtotal: number;
    totalSections: number;
    pricePerUnit: number;
  };
}

export interface SectionBreakdown {
  sectionNumber: number;
  sectionName: string;
  description: string;
  formula: string;
  calculations: Record<string, any>;
  cost: number;
}

// ============================================================================
// SECTION-SPECIFIC CALCULATION RESULTS
// ============================================================================

export interface MaterialCostCalculation {
  inputLength: number;
  inputWidth: number;
  inputHeight: number;
  calculatedLength: number;
  calculatedWidth: number;
  pt: string;
  gsmUsed: number;
  weightOf100Units: number;
  costOf100Units: number;
  requiredUnits: number;
  finalCost: number;
}

export interface PlatesCostCalculation {
  calculatedLength: number;
  calculatedWidth: number;
  rangeMatched: string | null;
  printingType: PrintingType;
  baseCost: number;
  finalCost: number;
}

export interface PrintingCostCalculation {
  calculatedLength: number;
  calculatedWidth: number;
  rangeMatched: string | null;
  printingType: PrintingType;
  baseCost: number;
  unitsMultiplier: number;
  finalCost: number;
}

export interface LaminationCostCalculation {
  enabled?: boolean;
  calculatedLength: number;
  calculatedWidth: number;
  laminationType: LaminationType;
  divisor: number;
  rate: number;
  singleUnitCost: number;
  totalUnits: number;
  finalCost: number;
}

export interface DieMakingCostCalculation {
  calculationType: 'calculated' | 'fixed';
  calculatedLength: number;
  calculatedWidth: number;
  multiplier?: number;
  fixedCost?: number;
  finalCost: number;
}

export interface DieCuttingCostCalculation {
  requiredUnits: number;
  costPer1000: number;
  multiplier: number;
  finalCost: number;
}

export interface PastingCostCalculation {
  requiredUnits: number;
  costPer1000: number;
  multiplier: number;
  finalCost: number;
}

export interface TwoPieceBoxCalculation {
  enabled: boolean;
  sumOfPreviousSections: number;
  multiplier: number;
  additionalCost: number;
}

export interface BothSidePrintingSurchargeCalculation {
  applicable: boolean;
  sumOfPreviousSections: number;
  percentage: number;
  finalCost: number;
}

export interface VendorPercentageCalculation {
  sumOfPreviousSections: number;
  percentage: number;
  finalCost: number;
}

export interface ShippingCostCalculation {
  weightOf100Units: number;
  weightMultiplier: number;
  weightDivisor: number;
  singleUnitWeight: number;
  requiredUnits: number;
  totalWeight: number;
  tierMatched: string;
  shippingCost: number;
}

// ============================================================================
// DEFAULT FORMULAS
// ============================================================================

export const DEFAULT_MATERIAL_COST: MaterialCostFormula = {
  lengthFormula: {
    lengthMultiplier: 2,
    widthMultiplier: 2,
    heightMultiplier: 0,
    additionalInches: 1.5
  },
  widthFormula: {
    lengthMultiplier: 0,
    widthMultiplier: 0,
    heightMultiplier: 2,
    additionalInches: 2
  },
  gsmTable: [
    { pt: "14", gsm: 250, kraft: 400, cardboard: 300, corrugated: null },
    { pt: "16", gsm: 300, kraft: 400, cardboard: 300, corrugated: null },
    { pt: "18", gsm: 350, kraft: 400, cardboard: 300, corrugated: null },
    { pt: "N/A", gsm: 700, kraft: null, cardboard: null, corrugated: 300 }
  ],
  weightOf100Units: {
    divisor: 15500
  },
  costOf100Units: {
    rate: 300
  }
};

export const DEFAULT_PLATES_COST: PlatesCostFormula = {
  ranges: [
    {
      name: "Small",
      lengthMin: 0.1,
      lengthMax: 12.5,
      widthMin: 0.1,
      widthMax: 18,
      costs: { outside: 1200, inside: 1200, bothSide: 2400, none: 0 }
    },
    {
      name: "Medium",
      lengthMin: 12.6,
      lengthMax: 18,
      widthMin: 18.1,
      widthMax: 25,
      costs: { outside: 2400, inside: 2400, bothSide: 4800, none: 0 }
    },
    {
      name: "Large",
      lengthMin: 18.1,
      lengthMax: 20,
      widthMin: 25.1,
      widthMax: 30,
      costs: { outside: 5000, inside: 5000, bothSide: 10000, none: 0 }
    },
    {
      name: "Extra Large",
      lengthMin: 20.1,
      lengthMax: 28,
      widthMin: 30.1,
      widthMax: 40,
      costs: { outside: 8000, inside: 8000, bothSide: 16000, none: 0 }
    }
  ]
};

export const DEFAULT_PRINTING_COST: PrintingCostFormula = {
  ranges: [
    {
      name: "Small",
      lengthMin: 0.1,
      lengthMax: 12.5,
      widthMin: 0.1,
      widthMax: 18,
      costs: { outside: 3500, inside: 3500, bothSide: 7000, none: 0 }
    },
    {
      name: "Medium",
      lengthMin: 12.6,
      lengthMax: 18,
      widthMin: 18.1,
      widthMax: 25,
      costs: { outside: 6000, inside: 6000, bothSide: 12000, none: 0 }
    },
    {
      name: "Large",
      lengthMin: 18.1,
      lengthMax: 20,
      widthMin: 25.1,
      widthMax: 30,
      costs: { outside: 8000, inside: 8000, bothSide: 16000, none: 0 }
    },
    {
      name: "Extra Large",
      lengthMin: 20.1,
      lengthMax: 28,
      widthMin: 30.1,
      widthMax: 40,
      costs: { outside: 10000, inside: 10000, bothSide: 20000, none: 0 }
    }
  ]
};

export const DEFAULT_SHIPPING_TIERS: ShippingTier[] = [
  { minWeight: 0, maxWeight: 0.5, cost: 7253 },
  { minWeight: 0.5, maxWeight: 1, cost: 9103 },
  { minWeight: 1, maxWeight: 1.5, cost: 10668 },
  { minWeight: 1.5, maxWeight: 2, cost: 12188 },
  { minWeight: 2, maxWeight: 2.5, cost: 14512 },
  { minWeight: 2.5, maxWeight: 3, cost: 15569 },
  { minWeight: 3, maxWeight: 3.5, cost: 16613 },
  { minWeight: 3.5, maxWeight: 4, cost: 18631 },
  { minWeight: 4, maxWeight: 4.5, cost: 20443 },
  { minWeight: 4.5, maxWeight: 5, cost: 22058 },
  { minWeight: 5, maxWeight: 5.5, cost: 21604 },
  { minWeight: 5.5, maxWeight: 6, cost: 23499 },
  { minWeight: 6, maxWeight: 6.5, cost: 24794 },
  { minWeight: 6.5, maxWeight: 7, cost: 26089 },
  { minWeight: 7, maxWeight: 7.5, cost: 27384 },
  { minWeight: 7.5, maxWeight: 8, cost: 28682 },
  { minWeight: 8, maxWeight: 8.5, cost: 29975 },
  { minWeight: 8.5, maxWeight: 9, cost: 31273 },
  { minWeight: 9, maxWeight: 9.5, cost: 32568 },
  { minWeight: 9.5, maxWeight: 10, cost: 33864 },
  { minWeight: 10, maxWeight: 11, cost: 34936 },
  { minWeight: 11, maxWeight: 12, cost: 38043 },
  { minWeight: 12, maxWeight: 13, cost: 40895 },
  { minWeight: 13, maxWeight: 14, cost: 43957 },
  { minWeight: 14, maxWeight: 15, cost: 47078 },
  { minWeight: 15, maxWeight: 16, cost: 50059 },
  { minWeight: 16, maxWeight: 17, cost: 53078 },
  { minWeight: 17, maxWeight: 18, cost: 56136 },
  { minWeight: 18, maxWeight: 19, cost: 59227 },
  { minWeight: 19, maxWeight: 20, cost: 62357 },
  { minWeight: 20, maxWeight: 21, cost: 62538 },
  { minWeight: 21, maxWeight: 22, cost: 65504 },
  { minWeight: 22, maxWeight: 23, cost: 68349 },
  { minWeight: 23, maxWeight: 24, cost: 70954 },
  { minWeight: 24, maxWeight: 25, cost: 72826 },
  { minWeight: 25, maxWeight: 26, cost: 71845 },
  { minWeight: 26, maxWeight: 27, cost: 74304 },
  { minWeight: 27, maxWeight: 28, cost: 76762 },
  { minWeight: 28, maxWeight: 29, cost: 79220 },
  { minWeight: 29, maxWeight: 30, cost: 80423 },
  { minWeight: 30, maxWeight: 31, cost: 82286 },
  { minWeight: 31, maxWeight: 32, cost: 84939 },
  { minWeight: 32, maxWeight: 33, cost: 87594 },
  { minWeight: 33, maxWeight: 34, cost: 90248 },
  { minWeight: 34, maxWeight: 35, cost: 92903 },
  { minWeight: 35, maxWeight: 40, cost: 106174 },
  { minWeight: 40, maxWeight: 45, cost: 119446 },
  { minWeight: 45, maxWeight: 50, cost: 132718 },
  { minWeight: 50, maxWeight: 55, cost: 144142 },
  { minWeight: 55, maxWeight: 60, cost: 157246 },
  { minWeight: 60, maxWeight: 65, cost: 170350 },
  { minWeight: 65, maxWeight: 70, cost: 183454 },
  { minWeight: 70, maxWeight: Infinity, cost: 2250 }
];

// ============================================================================
// HELPER FUNCTION TO CREATE DEFAULT FORMULA
// ============================================================================

export function createDefaultProductFormula(
  productId: string,
  productName: string,
  category: MaterialType
): Omit<ProductPricingFormula, '_id' | 'createdAt' | 'updatedAt'> {
  return {
    productId,
    productName,
    category,
    materialCost: DEFAULT_MATERIAL_COST,
    scanningCost: { cost: 200 },
    platesCost: DEFAULT_PLATES_COST,
    printingCost: DEFAULT_PRINTING_COST,
    laminationCost: {
      enabled: true,
      glossy: { divisor: 144, rate: 3.5 },
      matt: { divisor: 144, rate: 3.5 },
      softTouch: { divisor: 144, rate: 20 }
    },
    dieMakingCost: { calculationType: 'calculated', multiplier: 9, fixedCost: 1000 },
    dieCuttingCost: { costPer1000: 1000 },
    pastingCost: { costPer1000: 1000 },
    twoPieceBox: { enabled: false, multiplier: 2 },
    bothSidePrintingSurcharge: { percentage: 10 },
    vendorPercentage: { percentage: 25 },
    shippingCost: {
      weightCalculation: { multiplier: 0.9, divisor: 100 },
      shippingTiers: DEFAULT_SHIPPING_TIERS
    },
    isActive: true
  };
}

