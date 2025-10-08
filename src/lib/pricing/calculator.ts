/**
 * Pricing Calculator Engine
 * Implements all 13 sections of the pricing calculation
 * Based on flexible, formula-driven approach
 */

import {
  ProductPricingFormula,
  PricingCalculationRequest,
  PricingCalculationResult,
  SectionBreakdown,
  MaterialCostCalculation,
  PlatesCostCalculation,
  PrintingCostCalculation,
  LaminationCostCalculation,
  DieMakingCostCalculation,
  DieCuttingCostCalculation,
  PastingCostCalculation,
  TwoPieceBoxCalculation,
  BothSidePrintingSurchargeCalculation,
  VendorPercentageCalculation,
  ShippingCostCalculation,
  CostMarginCalculation
} from '../types/pricing-formulas';

export class PricingCalculator {
  private formula: ProductPricingFormula;
  private request: PricingCalculationRequest;
  private sectionCosts: number[] = [];
  private calculatedLength: number = 0;
  private calculatedWidth: number = 0;
  private weightOf100Units: number = 0;

  constructor(formula: ProductPricingFormula, request: PricingCalculationRequest) {
    this.formula = formula;
    this.request = request;
  }

  /**
   * Main calculation method - calculates all 12 sections
   */
  calculate(): PricingCalculationResult {
    const breakdown: SectionBreakdown[] = [];

    // Section 1: Material Cost
    const materialCost = this.calculateMaterialCost();
    breakdown.push(materialCost);
    this.sectionCosts.push(materialCost.cost);

    // Section 2: Scanning Cost
    const scanningCost = this.calculateScanningCost();
    breakdown.push(scanningCost);
    this.sectionCosts.push(scanningCost.cost);

    // Section 3: Plates Cost
    const platesCost = this.calculatePlatesCost();
    breakdown.push(platesCost);
    this.sectionCosts.push(platesCost.cost);

    // Section 4: Printing Cost
    const printingCost = this.calculatePrintingCost();
    breakdown.push(printingCost);
    this.sectionCosts.push(printingCost.cost);

    // Section 5: Lamination Cost
    const laminationCost = this.calculateLaminationCost();
    breakdown.push(laminationCost);
    this.sectionCosts.push(laminationCost.cost);

    // Section 6: Die Making Cost
    const dieMakingCost = this.calculateDieMakingCost();
    breakdown.push(dieMakingCost);
    this.sectionCosts.push(dieMakingCost.cost);

    // Section 7: Die Cutting Cost
    const dieCuttingCost = this.calculateDieCuttingCost();
    breakdown.push(dieCuttingCost);
    this.sectionCosts.push(dieCuttingCost.cost);

    // Section 8: Pasting Cost
    const pastingCost = this.calculatePastingCost();
    breakdown.push(pastingCost);
    this.sectionCosts.push(pastingCost.cost);

    // Section 9: Two-Piece Box Multiplier
    const twoPieceBox = this.calculateTwoPieceBox();
    breakdown.push(twoPieceBox);
    this.sectionCosts.push(twoPieceBox.cost);

    // Section 10: Both Side Printing Surcharge
    const bothSideSurcharge = this.calculateBothSideSurcharge();
    breakdown.push(bothSideSurcharge);
    this.sectionCosts.push(bothSideSurcharge.cost);

    // Section 11: Vendor Percentage
    const vendorPercentage = this.calculateVendorPercentage();
    breakdown.push(vendorPercentage);
    this.sectionCosts.push(vendorPercentage.cost);

    // Section 12: Shipping Cost
    const shippingCost = this.calculateShippingCost();
    breakdown.push(shippingCost);
    this.sectionCosts.push(shippingCost.cost);

    // Section 13: Cost Margin Percentage
    const costMargin = this.calculateCostMargin();
    breakdown.push(costMargin);
    this.sectionCosts.push(costMargin.cost);

    // Calculate totals
    const subtotal = this.sectionCosts.reduce((sum, cost) => sum + cost, 0);
    const pricePerUnit = subtotal / this.request.requiredUnits;

    return {
      success: true,
      productName: this.formula.productName,
      breakdown,
      summary: {
        subtotal: this.roundTo2(subtotal),
        totalSections: 13,
        pricePerUnit: this.roundTo2(pricePerUnit)
      }
    };
  }

  /**
   * SECTION 1: Material Cost
   */
  private calculateMaterialCost(): SectionBreakdown {
    const { length, width, height, pt, requiredUnits } = this.request;
    const { lengthFormula, widthFormula, gsmTable, weightOf100Units, costOf100Units } = this.formula.materialCost;

    // Step 1: Calculate adjusted dimensions
    this.calculatedLength = 
      (length * lengthFormula.lengthMultiplier) + 
      (width * lengthFormula.widthMultiplier) + 
      (height * lengthFormula.heightMultiplier) + 
      lengthFormula.additionalInches;

    this.calculatedWidth = 
      (length * widthFormula.lengthMultiplier) + 
      (width * widthFormula.widthMultiplier) + 
      (height * widthFormula.heightMultiplier) + 
      widthFormula.additionalInches;

    // Check if calculated dimensions exceed 40 inches
    if (this.calculatedLength > 40 || this.calculatedWidth > 40) {
      throw new Error('DIMENSIONS_EXCEED_LIMIT');
    }

    // Step 2: Get GSM from table based on PT only
    const gsmEntry = gsmTable.find(entry => entry.pt === pt);
    if (!gsmEntry) {
      throw new Error(`Invalid PT value: ${pt}`);
    }

    const gsmValue = gsmEntry.gsm;

    // Step 3: Calculate weight of 100 units
    this.weightOf100Units = 
      (this.calculatedLength * this.calculatedWidth * gsmValue) / weightOf100Units.divisor;

    // Step 4: Calculate cost of 100 units
    const costOf100 = this.weightOf100Units * costOf100Units.rate;

    // Step 5: Calculate final cost for required units
    const finalCost = (costOf100 / 100) * requiredUnits;

    const calculations: MaterialCostCalculation = {
      inputLength: length,
      inputWidth: width,
      inputHeight: height,
      calculatedLength: this.roundTo2(this.calculatedLength),
      calculatedWidth: this.roundTo2(this.calculatedWidth),
      pt,
      gsmUsed: gsmValue,
      weightOf100Units: this.roundTo2(this.weightOf100Units),
      costOf100Units: this.roundTo2(costOf100),
      requiredUnits,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 1,
      sectionName: "Material Cost",
      description: "Calculates material cost based on dimensions, GSM values, and weight",
      formula: `((L×${lengthFormula.lengthMultiplier} + W×${lengthFormula.widthMultiplier} + H×${lengthFormula.heightMultiplier} + ${lengthFormula.additionalInches}) × (L×${widthFormula.lengthMultiplier} + W×${widthFormula.widthMultiplier} + H×${widthFormula.heightMultiplier} + ${widthFormula.additionalInches}) × GSM / ${weightOf100Units.divisor}) × ${costOf100Units.rate} / 100 × Units`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 2: Scanning Cost
   */
  private calculateScanningCost(): SectionBreakdown {
    const cost = this.formula.scanningCost.cost;

    return {
      sectionNumber: 2,
      sectionName: "Scanning Cost",
      description: "One-time scanning setup cost",
      formula: "Fixed Cost",
      calculations: {
        fixedCost: cost
      },
      cost: this.roundTo2(cost)
    };
  }

  /**
   * SECTION 3: Plates Cost
   */
  private calculatePlatesCost(): SectionBreakdown {
    const { printing } = this.request;
    const { ranges } = this.formula.platesCost;

    // Find matching range based on largest dimension
    const largestDimension = Math.max(this.calculatedLength, this.calculatedWidth);
    const matchedRange = ranges.find(range => 
      largestDimension >= range.dimensionMin && largestDimension <= range.dimensionMax
    );

    const baseCost = matchedRange ? matchedRange.costs[printing] : 0;

    const calculations: PlatesCostCalculation = {
      calculatedLength: this.roundTo2(this.calculatedLength),
      calculatedWidth: this.roundTo2(this.calculatedWidth),
      rangeMatched: matchedRange?.name || null,
      printingType: printing,
      baseCost,
      finalCost: baseCost
    };

    return {
      sectionNumber: 3,
      sectionName: "Plates Cost",
      description: "Cost based on largest dimension and printing type",
      formula: "Cost from matched range based on largest dimension",
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(baseCost)
    };
  }

  /**
   * SECTION 4: Printing Cost
   */
  private calculatePrintingCost(): SectionBreakdown {
    const { printing, requiredUnits } = this.request;
    const { ranges } = this.formula.printingCost;

    // Find matching range based on largest dimension
    const largestDimension = Math.max(this.calculatedLength, this.calculatedWidth);
    const matchedRange = ranges.find(range => 
      largestDimension >= range.dimensionMin && largestDimension <= range.dimensionMax
    );

    const baseCost = matchedRange ? matchedRange.costs[printing] : 0;
    
    // Calculate multiplier based on 1000-unit rule
    const unitsMultiplier = Math.ceil(requiredUnits / 1000);
    const finalCost = baseCost * unitsMultiplier;

    const calculations: PrintingCostCalculation = {
      calculatedLength: this.roundTo2(this.calculatedLength),
      calculatedWidth: this.roundTo2(this.calculatedWidth),
      rangeMatched: matchedRange?.name || null,
      printingType: printing,
      baseCost,
      unitsMultiplier,
      finalCost
    };

    return {
      sectionNumber: 4,
      sectionName: "Printing Cost",
      description: "Printing cost with quantity multiplier (per 1000 units)",
      formula: `Base Cost × ceil(Units / 1000)`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 5: Lamination Cost
   */
  private calculateLaminationCost(): SectionBreakdown {
    const { lamination, requiredUnits } = this.request;
    const { enabled } = this.formula.laminationCost;
    
    if (!enabled) {
      return {
        sectionNumber: 5,
        sectionName: "Lamination Cost",
        description: "Lamination cost calculation is disabled",
        formula: "Disabled",
        calculations: { enabled: false },
        cost: 0
      };
    }
    
    if (lamination === 'none') {
      return {
        sectionNumber: 5,
        sectionName: "Lamination Cost",
        description: "No lamination selected",
        formula: "None",
        calculations: { laminationType: 'none' },
        cost: 0
      };
    }

    const laminationConfig = this.formula.laminationCost[lamination];
    const { divisor, rate } = laminationConfig;

    // Calculate single unit cost
    const singleUnitCost = (this.calculatedLength * this.calculatedWidth / divisor) * rate;
    
    // Total cost
    const finalCost = singleUnitCost * requiredUnits;

    const calculations: LaminationCostCalculation = {
      calculatedLength: this.roundTo2(this.calculatedLength),
      calculatedWidth: this.roundTo2(this.calculatedWidth),
      laminationType: lamination,
      divisor,
      rate,
      singleUnitCost: this.roundTo2(singleUnitCost),
      totalUnits: requiredUnits,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 5,
      sectionName: "Lamination Cost",
      description: `Lamination cost for ${lamination} finish`,
      formula: `(Length × Width / ${divisor}) × ${rate} × Units`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 6: Die Making Cost
   */
  private calculateDieMakingCost(): SectionBreakdown {
    const { calculationType, multiplier, fixedCost } = this.formula.dieMakingCost;
    
    let finalCost: number;
    let formula: string;
    let description: string;

    if (calculationType === 'fixed') {
      finalCost = fixedCost;
      formula = `Fixed Cost: $${fixedCost}`;
      description = "Fixed die making cost";
    } else {
      finalCost = this.calculatedLength * this.calculatedWidth * multiplier;
      formula = `Length × Width × ${multiplier}`;
      description = "Calculated die making cost based on dimensions";
    }

    const calculations: DieMakingCostCalculation = {
      calculationType,
      calculatedLength: this.roundTo2(this.calculatedLength),
      calculatedWidth: this.roundTo2(this.calculatedWidth),
      ...(calculationType === 'calculated' ? { multiplier } : { fixedCost }),
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 6,
      sectionName: "Die Making Cost",
      description,
      formula,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 7: Die Cutting Cost
   */
  private calculateDieCuttingCost(): SectionBreakdown {
    const { requiredUnits } = this.request;
    const { costPer1000 } = this.formula.dieCuttingCost;
    
    const multiplier = Math.ceil(requiredUnits / 1000);
    const finalCost = costPer1000 * multiplier;

    const calculations: DieCuttingCostCalculation = {
      requiredUnits,
      costPer1000,
      multiplier,
      finalCost
    };

    return {
      sectionNumber: 7,
      sectionName: "Die Cutting Cost",
      description: "Die cutting cost per 1000 units",
      formula: `${costPer1000} × ceil(Units / 1000)`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 8: Pasting Cost
   */
  private calculatePastingCost(): SectionBreakdown {
    const { requiredUnits } = this.request;
    const { costPer1000 } = this.formula.pastingCost;
    
    const multiplier = Math.ceil(requiredUnits / 1000);
    const finalCost = costPer1000 * multiplier;

    const calculations: PastingCostCalculation = {
      requiredUnits,
      costPer1000,
      multiplier,
      finalCost
    };

    return {
      sectionNumber: 8,
      sectionName: "Pasting Cost",
      description: "Pasting cost per 1000 units",
      formula: `${costPer1000} × ceil(Units / 1000)`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 9: Two-Piece Box Multiplier
   */
  private calculateTwoPieceBox(): SectionBreakdown {
    const { enabled, multiplier } = this.formula.twoPieceBox;
    
    // Sum of sections 1-8
    const sumOfPreviousSections = this.sectionCosts.slice(0, 8).reduce((sum, cost) => sum + cost, 0);
    
    const additionalCost = enabled ? sumOfPreviousSections * (multiplier - 1) : 0;

    const calculations: TwoPieceBoxCalculation = {
      enabled,
      sumOfPreviousSections: this.roundTo2(sumOfPreviousSections),
      multiplier,
      additionalCost: this.roundTo2(additionalCost)
    };

    return {
      sectionNumber: 9,
      sectionName: "Two-Piece Box Multiplier",
      description: enabled ? `Multiplies sections 1-8 by ${multiplier}` : "Not enabled for this product",
      formula: enabled ? `Sum(Sections 1-8) × ${multiplier}` : "N/A",
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(additionalCost)
    };
  }

  /**
   * SECTION 10: Both Side Printing Surcharge
   */
  private calculateBothSideSurcharge(): SectionBreakdown {
    const { printing } = this.request;
    const { percentage } = this.formula.bothSidePrintingSurcharge;
    
    const applicable = printing === 'bothSide';
    
    // Sum of sections 1-9
    const sumOfPreviousSections = this.sectionCosts.slice(0, 9).reduce((sum, cost) => sum + cost, 0);
    
    const finalCost = applicable ? sumOfPreviousSections * (percentage / 100) : 0;

    const calculations: BothSidePrintingSurchargeCalculation = {
      applicable,
      sumOfPreviousSections: this.roundTo2(sumOfPreviousSections),
      percentage,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 10,
      sectionName: "Both Side Printing Surcharge",
      description: applicable ? `${percentage}% surcharge for both side printing` : "Not applicable (single side or no printing)",
      formula: applicable ? `Sum(Sections 1-9) × ${percentage}%` : "N/A",
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 11: Vendor Percentage
   */
  private calculateVendorPercentage(): SectionBreakdown {
    const { percentage } = this.formula.vendorPercentage;
    
    // Sum of sections 1-10
    const sumOfPreviousSections = this.sectionCosts.slice(0, 10).reduce((sum, cost) => sum + cost, 0);
    
    const finalCost = sumOfPreviousSections * (percentage / 100);

    const calculations: VendorPercentageCalculation = {
      sumOfPreviousSections: this.roundTo2(sumOfPreviousSections),
      percentage,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 11,
      sectionName: "Vendor Percentage",
      description: `${percentage}% vendor markup`,
      formula: `Sum(Sections 1-10) × ${percentage}%`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 12: Shipping Cost
   */
  private calculateShippingCost(): SectionBreakdown {
    const { requiredUnits } = this.request;
    const { weightCalculation, shippingTiers } = this.formula.shippingCost;
    const { multiplier, divisor } = weightCalculation;

    // Calculate single unit weight
    const singleUnitWeight = (this.weightOf100Units * multiplier) / divisor;
    
    // Calculate total weight
    let totalWeight = singleUnitWeight * requiredUnits;
    
    // Check if two-piece box is enabled (this controls both multipliers)
    const twoPieceBoxEnabled = this.formula.twoPieceBox?.enabled || false;
    const twoPieceBoxMultiplier = this.formula.twoPieceBox?.multiplier || 2;
    
    // Apply both-side printing multiplier if two-piece box is enabled AND user selected both-side printing
    const isBothSidePrinting = this.request.printing === 'bothSide';
    if (twoPieceBoxEnabled && isBothSidePrinting) {
      totalWeight = totalWeight * 2;
    }
    
    // Apply two-piece box multiplier if enabled
    if (twoPieceBoxEnabled) {
      totalWeight = totalWeight * twoPieceBoxMultiplier;
    }

    // Find matching shipping tier
    const matchedTier = shippingTiers.find(tier => 
      totalWeight >= tier.minWeight && totalWeight < tier.maxWeight
    );

    let shippingCost: number;
    let tierMatched: string;

    if (matchedTier) {
      // Use the matched tier cost
      shippingCost = matchedTier.cost;
      tierMatched = `${matchedTier.minWeight}-${matchedTier.maxWeight} kg`;
    } else {
      // For weights over 70kg, calculate: 183454 + (weight × 2250)
      const baseCost = 183454;
      const perKgRate = 2250;
      shippingCost = baseCost + (totalWeight * perKgRate);
      tierMatched = `70+ kg (${baseCost.toFixed(0)} + ${totalWeight.toFixed(2)} kg × $${perKgRate}/kg)`;
    }

    const calculations: ShippingCostCalculation = {
      weightOf100Units: this.roundTo2(this.weightOf100Units),
      weightMultiplier: multiplier,
      weightDivisor: divisor,
      singleUnitWeight: this.roundTo2(singleUnitWeight),
      requiredUnits,
      totalWeight: this.roundTo2(totalWeight),
      tierMatched,
      shippingCost,
      bothSidePrintingMultiplierApplied: twoPieceBoxEnabled && isBothSidePrinting,
      twoPieceBoxMultiplierApplied: twoPieceBoxEnabled,
      twoPieceBoxMultiplierValue: twoPieceBoxEnabled ? twoPieceBoxMultiplier : undefined
    };

    // Build formula string
    let formulaStr = `Weight per unit: (k × ${multiplier}) / ${divisor}`;
    if (twoPieceBoxEnabled && isBothSidePrinting) {
      formulaStr += ` × 2 (Both-Side Printing)`;
    }
    if (twoPieceBoxEnabled) {
      formulaStr += ` × ${twoPieceBoxMultiplier} (Two-Piece Box)`;
    }
    formulaStr += `, then match to shipping tier or calculate per-kg for 70+ kg`;
    const formula = formulaStr;

    return {
      sectionNumber: 12,
      sectionName: "Shipping Cost",
      description: "Shipping cost based on total weight (over 70kg: per-kg rate)",
      formula,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(shippingCost)
    };
  }

  /**
   * SECTION 13: Cost Margin Percentage
   */
  private calculateCostMargin(): SectionBreakdown {
    // Default to 50% if costMargin is not defined (for backwards compatibility)
    const percentage = this.formula.costMargin?.percentage ?? 50;
    
    // Sum of sections 1-12
    const sumOfPreviousSections = this.sectionCosts.slice(0, 12).reduce((sum, cost) => sum + cost, 0);
    
    const finalCost = sumOfPreviousSections * (percentage / 100);

    const calculations: CostMarginCalculation = {
      sumOfPreviousSections: this.roundTo2(sumOfPreviousSections),
      percentage,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 13,
      sectionName: "Cost Margin",
      description: `${percentage}% cost margin added to previous sections`,
      formula: `Sum(Sections 1-12) × ${percentage}%`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * Helper: Round to 2 decimal places
   */
  private roundTo2(value: number): number {
    return Math.round(value * 100) / 100;
  }
}

/**
 * Main calculation function
 */
export async function calculatePricing(
  formula: ProductPricingFormula,
  request: PricingCalculationRequest
): Promise<PricingCalculationResult> {
  try {
    const calculator = new PricingCalculator(formula, request);
    return calculator.calculate();
  } catch (error) {
    console.error('Pricing calculation error:', error);
    throw new Error(`Pricing calculation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

