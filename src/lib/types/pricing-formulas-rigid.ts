/**
 * Rigid Pricing Formulas Types
 * Separate pricing structure for Rigid boxes
 * 8 sections with different calculation logic
 */

import { ObjectId } from 'mongodb';

// ============================================================================
// USER INPUT TYPES
// ============================================================================

export interface RigidPricingCalculationRequest {
  productId: string;
  length: number;           // inches (user input)
  width: number;            // inches (user input)
  height: number;           // inches (user input)
  requiredUnits: number;
  lamination: RigidLaminationType;
}

export type RigidLaminationType = 'glossy' | 'softTouch' | 'none';

// ============================================================================
// SECTION 1: MATERIAL COST (RIGID)
// ============================================================================

export interface RigidMaterialCostFormula {
  gsmTable: {
    cardboard: { gsm: number; rate: number };  // Default: 1200, 300
    paper: { gsm: number; rate: number };      // Default: 150, 400
  };
  divisor: number;  // Default: 15500
  
  // Cardboard 1 formula (FLEXIBLE)
  cardboard1: {
    lengthFormula: {
      lengthMultiplier: number;   // Default: 1
      widthMultiplier: number;    // Default: 0
      heightMultiplier: number;   // Default: 0
      additionalInches: number;   // Default: 1
    };
    widthFormula: {
      lengthMultiplier: number;   // Default: 0
      widthMultiplier: number;    // Default: 2
      heightMultiplier: number;   // Default: 2
      additionalInches: number;   // Default: 1
    };
  };
  
  // Cardboard 2 formula (FLEXIBLE)
  cardboard2: {
    lengthFormula: {
      lengthMultiplier: number;   // Default: 1
      widthMultiplier: number;    // Default: 0
      heightMultiplier: number;   // Default: 2
      additionalInches: number;   // Default: 2 (adds 1 for length, then +1 at end = 2 total)
    };
    widthFormula: {
      lengthMultiplier: number;   // Default: 0
      widthMultiplier: number;    // Default: 2
      heightMultiplier: number;   // Default: 2
      additionalInches: number;   // Default: 1
    };
  };
  
  // Paper 1 formula (FLEXIBLE, ×2 sheets)
  paper1: {
    lengthFormula: {
      lengthMultiplier: number;   // Default: 1
      widthMultiplier: number;    // Default: 0
      heightMultiplier: number;   // Default: 0
      additionalInches: number;   // Default: 2
    };
    widthFormula: {
      lengthMultiplier: number;   // Default: 0
      widthMultiplier: number;    // Default: 2
      heightMultiplier: number;   // Default: 2
      additionalInches: number;   // Default: 2
    };
    sheetsMultiplier: number;     // Default: 2
  };
  
  // Paper 2 formula (FLEXIBLE, ×2 sheets)
  paper2: {
    lengthFormula: {
      lengthMultiplier: number;   // Default: 1
      widthMultiplier: number;    // Default: 0
      heightMultiplier: number;   // Default: 2
      additionalInches: number;   // Default: 0
    };
    widthFormula: {
      lengthMultiplier: number;   // Default: 0
      widthMultiplier: number;    // Default: 1
      heightMultiplier: number;   // Default: 2
      additionalInches: number;   // Default: 1
    };
    sheetsMultiplier: number;     // Default: 2
  };
}

// ============================================================================
// SECTION 2: SCANNING COST
// ============================================================================

export interface RigidScanningCostFormula {
  cost: number;  // Default: 200
}

// ============================================================================
// SECTION 3: PLATES COST (RIGID)
// ============================================================================

export interface RigidPlatesCostFormula {
  ranges: RigidPlatesCostRange[];
  multiplier: number;  // Default: 2 (multiply cost by 2)
}

export interface RigidPlatesCostRange {
  id?: string;
  name: string;  // e.g., "0-18", "18-25", etc.
  dimensionMin: number;
  dimensionMax: number;
  cost: number;  // Base cost before multiplying by 2
}

// ============================================================================
// SECTION 4: PRINTING COST (RIGID)
// ============================================================================

export interface RigidPrintingCostFormula {
  ranges: RigidPrintingCostRange[];
  sheetsMultiplier: number;  // Default: 4 (multiply cost by 4)
}

export interface RigidPrintingCostRange {
  id?: string;
  name: string;  // e.g., "0-18", "18-25", etc.
  dimensionMin: number;
  dimensionMax: number;
  cost: number;  // Base cost before multiplying by 4
}

// ============================================================================
// SECTION 5: LAMINATION COST (RIGID)
// ============================================================================

export interface RigidLaminationCostFormula {
  enabled: boolean;  // Default: true
  divisor: number;   // Default: 144
  sheetsMultiplier: number; // Default: 4
  glossy: {
    rate: number;    // Default: 3.5
  };
  softTouch: {
    rate: number;    // Default: 20
  };
}

// ============================================================================
// SECTION 6: MAKING COST
// ============================================================================

export interface RigidMakingCostFormula {
  tiers: RigidMakingCostTier[];
}

export interface RigidMakingCostTier {
  minUnits: number;
  maxUnits: number;
  costPerUnit: number;
}

// ============================================================================
// SECTION 7: VENDOR PERCENTAGE
// ============================================================================

export interface RigidVendorPercentageFormula {
  percentage: number;  // Default: 25
}

// ============================================================================
// SECTION 8: SHIPPING COST (RIGID)
// ============================================================================

export interface RigidShippingCostFormula {
  shippingTiers: ShippingTier[];  // Weight-based tier structure
  // Note: Conversion factors (2.54, +1, etc.) are hardcoded in calculator
  // Weight formula: ((lengthCm × requiredUnitsCalc) × (widthCm × temp) × (heightCm × temp2)) / 5000
}

export interface ShippingTier {
  minWeight: number;
  maxWeight: number;
  cost: number;
}

// ============================================================================
// SECTION 9: MARGIN COST
// ============================================================================

export interface RigidMarginCostFormula {
  percentage: number;  // Default: 100
}

// ============================================================================
// COMPLETE RIGID PRODUCT PRICING FORMULA
// ============================================================================

export interface RigidProductPricingFormula {
  _id?: ObjectId | string;
  productId: string;
  productName: string;
  category: 'rigid';
  subcategory?: string;
  formulaType: 'rigid';  // Distinguishes from standard formulas
  
  // All 9 sections
  materialCost: RigidMaterialCostFormula;
  scanningCost: RigidScanningCostFormula;
  platesCost: RigidPlatesCostFormula;
  printingCost: RigidPrintingCostFormula;
  laminationCost: RigidLaminationCostFormula;
  makingCost: RigidMakingCostFormula;
  vendorPercentage: RigidVendorPercentageFormula;
  shippingCost: RigidShippingCostFormula;
  marginCost: RigidMarginCostFormula;
  
  // Metadata
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// CALCULATION RESULT TYPES
// ============================================================================

export interface RigidPricingCalculationResult {
  success: boolean;
  productName: string;
  breakdown: RigidSectionBreakdown[];
  summary: {
    subtotal: number;
    totalSections: number;
    pricePerUnit: number;
  };
}

export interface RigidSectionBreakdown {
  sectionNumber: number;
  sectionName: string;
  description: string;
  formula: string;
  calculations: Record<string, unknown>;
  cost: number;
}

// ============================================================================
// SECTION-SPECIFIC CALCULATION RESULTS
// ============================================================================

export interface RigidMaterialCostCalculation {
  inputLength: number;
  inputWidth: number;
  inputHeight: number;
  
  // Cardboard 1
  cardboard1CalculatedLength: number;
  cardboard1CalculatedWidth: number;
  cardboard1Cost: number;
  
  // Cardboard 2
  cardboard2CalculatedLength: number;
  cardboard2CalculatedWidth: number;
  cardboard2Cost: number;
  
  // Paper 1
  paper1CalculatedLength: number;
  paper1CalculatedWidth: number;
  paper1CostBeforeSheets: number;
  paper1Cost: number;
  
  // Paper 2
  paper2CalculatedLength: number;
  paper2CalculatedWidth: number;
  paper2CostBeforeSheets: number;
  paper2Cost: number;
  
  // NEW: Sum all 4 costs
  totalCost: number;
  costRatio: number;
  requiredUnits: number;
  finalCost: number;
}

export interface RigidPlatesCostCalculation {
  paper1Length: number;
  paper1Width: number;
  paper2Length: number;
  paper2Width: number;
  largestDimension: number;
  rangeMatched: string | null;
  baseCost: number;
  multiplier: number;
  finalCost: number;
}

export interface RigidPrintingCostCalculation {
  paper1Length: number;
  paper1Width: number;
  paper2Length: number;
  paper2Width: number;
  largestDimension: number;
  rangeMatched: string | null;
  baseCost: number;
  sheetsMultiplier: number;
  finalCost: number;
}

export interface RigidLaminationCostCalculation {
  laminationType: RigidLaminationType;
  paper1Length: number;
  paper1Width: number;
  paper2Length: number;
  paper2Width: number;
  largestLength: number;
  largestWidth: number;
  divisor: number;
  rate: number;
  costPerUnit: number;
  sheetsMultiplier: number;
  requiredUnits: number;
  finalCost: number;
}

export interface RigidMakingCostCalculation {
  requiredUnits: number;
  tierMatched: string;
  costPerUnit: number;
  finalCost: number;
}

export interface RigidVendorPercentageCalculation {
  sumOfPreviousSections: number;
  percentage: number;
  finalCost: number;
}

export interface RigidShippingCostCalculation {
  // Dimension conversion
  lengthCm: number;
  widthCm: number;
  heightCm: number;
  
  // Calculation steps
  requiredUnitsCalculated: number;
  temp: number;
  temp2: number;
  
  // Weight calculation
  weightInKgs: number;
  tierMatched: string;
  shippingCost: number;
}

export interface RigidMarginCostCalculation {
  sumOfPreviousSections: number;
  percentage: number;
  finalCost: number;
}

// ============================================================================
// DEFAULT FORMULAS FOR RIGID
// ============================================================================

export const DEFAULT_RIGID_PLATES_COST: RigidPlatesCostFormula = {
  ranges: [
    { name: "0-18", dimensionMin: 0, dimensionMax: 18, cost: 2400 },
    { name: "18.1-25", dimensionMin: 18.1, dimensionMax: 25, cost: 4800 },
    { name: "25.1-30", dimensionMin: 25.1, dimensionMax: 30, cost: 10000 },
    { name: "30.1-40", dimensionMin: 30.1, dimensionMax: 40, cost: 16000 }
  ],
  multiplier: 2
};

export const DEFAULT_RIGID_PRINTING_COST: RigidPrintingCostFormula = {
  ranges: [
    { name: "0-18", dimensionMin: 0, dimensionMax: 18, cost: 6000 },
    { name: "18.1-25", dimensionMin: 18.1, dimensionMax: 25, cost: 8000 },
    { name: "25.1-30", dimensionMin: 25.1, dimensionMax: 30, cost: 9000 },
    { name: "30.1-40", dimensionMin: 30.1, dimensionMax: 40, cost: 10000 }
  ],
  sheetsMultiplier: 4
};

export const DEFAULT_RIGID_MAKING_COST: RigidMakingCostFormula = {
  tiers: [
    { minUnits: 100, maxUnits: 500, costPerUnit: 300 },
    { minUnits: 501, maxUnits: 1000, costPerUnit: 250 },
    { minUnits: 1001, maxUnits: Infinity, costPerUnit: 200 }
  ]
};

export const DEFAULT_RIGID_SHIPPING_TIERS: ShippingTier[] = [
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
// HELPER FUNCTION TO CREATE DEFAULT RIGID FORMULA
// ============================================================================

export function createDefaultRigidFormula(
  productId: string,
  productName: string
): Omit<RigidProductPricingFormula, '_id' | 'createdAt' | 'updatedAt'> {
  return {
    productId,
    productName,
    category: 'rigid',
    formulaType: 'rigid',
    
    materialCost: {
      gsmTable: {
        cardboard: { gsm: 1200, rate: 300 },
        paper: { gsm: 150, rate: 400 }
      },
      divisor: 15500,
      cardboard1: {
        lengthFormula: {
          lengthMultiplier: 1,
          widthMultiplier: 0,
          heightMultiplier: 0,
          additionalInches: 1
        },
        widthFormula: {
          lengthMultiplier: 0,
          widthMultiplier: 2,
          heightMultiplier: 2,
          additionalInches: 1
        }
      },
      cardboard2: {
        lengthFormula: {
          lengthMultiplier: 1,
          widthMultiplier: 0,
          heightMultiplier: 2,
          additionalInches: 2
        },
        widthFormula: {
          lengthMultiplier: 0,
          widthMultiplier: 2,
          heightMultiplier: 2,
          additionalInches: 1
        }
      },
      paper1: {
        lengthFormula: {
          lengthMultiplier: 1,
          widthMultiplier: 0,
          heightMultiplier: 0,
          additionalInches: 2
        },
        widthFormula: {
          lengthMultiplier: 0,
          widthMultiplier: 2,
          heightMultiplier: 2,
          additionalInches: 2
        },
        sheetsMultiplier: 2
      },
      paper2: {
        lengthFormula: {
          lengthMultiplier: 1,
          widthMultiplier: 0,
          heightMultiplier: 2,
          additionalInches: 0
        },
        widthFormula: {
          lengthMultiplier: 0,
          widthMultiplier: 1,
          heightMultiplier: 2,
          additionalInches: 1
        },
        sheetsMultiplier: 2
      }
    },
    
    scanningCost: { cost: 200 },
    
    platesCost: DEFAULT_RIGID_PLATES_COST,
    
    printingCost: DEFAULT_RIGID_PRINTING_COST,
    
    laminationCost: {
      enabled: true,
      divisor: 144,
      sheetsMultiplier: 4,
      glossy: { rate: 3.5 },
      softTouch: { rate: 20 }
    },
    
    makingCost: DEFAULT_RIGID_MAKING_COST,
    
    vendorPercentage: { percentage: 25 },
    
    shippingCost: {
      shippingTiers: DEFAULT_RIGID_SHIPPING_TIERS
    },
    
    marginCost: { percentage: 100 },
    
    isActive: true
  };
}

