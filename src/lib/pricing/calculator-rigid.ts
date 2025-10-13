/**
 * Rigid Pricing Calculator Engine
 * Implements all 9 sections of the Rigid pricing calculation
 * Separate from standard calculator for different formula logic
 */

import {
  RigidProductPricingFormula,
  RigidPricingCalculationRequest,
  RigidPricingCalculationResult,
  RigidSectionBreakdown,
  RigidMaterialCostCalculation,
  RigidPlatesCostCalculation,
  RigidPrintingCostCalculation,
  RigidLaminationCostCalculation,
  RigidMakingCostCalculation,
  RigidVendorPercentageCalculation,
  RigidShippingCostCalculation,
  RigidMarginCostCalculation
} from '../types/pricing-formulas-rigid';

export class RigidPricingCalculator {
  private formula: RigidProductPricingFormula;
  private request: RigidPricingCalculationRequest;
  private sectionCosts: number[] = [];
  
  // Store calculated dimensions for use in later sections
  private cardboard1Length: number = 0;
  private cardboard1Width: number = 0;
  private cardboard2Length: number = 0;
  private cardboard2Width: number = 0;
  private paper1Length: number = 0;
  private paper1Width: number = 0;
  private paper2Length: number = 0;
  private paper2Width: number = 0;

  constructor(formula: RigidProductPricingFormula, request: RigidPricingCalculationRequest) {
    this.formula = formula;
    this.request = request;
  }

  /**
   * Main calculation method - calculates all 9 sections
   */
  calculate(): RigidPricingCalculationResult {
    const breakdown: RigidSectionBreakdown[] = [];

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

    // Section 6: Making Cost
    const makingCost = this.calculateMakingCost();
    breakdown.push(makingCost);
    this.sectionCosts.push(makingCost.cost);

    // Section 7: Vendor Percentage
    const vendorPercentage = this.calculateVendorPercentage();
    breakdown.push(vendorPercentage);
    this.sectionCosts.push(vendorPercentage.cost);

    // Section 8: Shipping Cost
    const shippingCost = this.calculateShippingCost();
    breakdown.push(shippingCost);
    this.sectionCosts.push(shippingCost.cost);

    // Section 9: Margin Cost
    const marginCost = this.calculateMarginCost();
    breakdown.push(marginCost);
    this.sectionCosts.push(marginCost.cost);

    // Calculate totals
    const subtotal = this.sectionCosts.reduce((sum, cost) => sum + cost, 0);
    const pricePerUnit = subtotal / this.request.requiredUnits;

    return {
      success: true,
      productName: this.formula.productName,
      breakdown,
      summary: {
        subtotal: this.roundTo2(subtotal),
        totalSections: 9,
        pricePerUnit: this.roundTo2(pricePerUnit)
      }
    };
  }

  /**
   * SECTION 1: Material Cost (Complex Rigid Formula)
   */
  private calculateMaterialCost(): RigidSectionBreakdown {
    const { length, width, height, requiredUnits } = this.request;
    const { gsmTable, divisor, cardboard1, cardboard2, paper1, paper2 } = this.formula.materialCost;

    // ===== CARDBOARD 1 CALCULATION =====
    this.cardboard1Length = (length * cardboard1.lengthFormula.lengthMultiplier) + 
                            (width * cardboard1.lengthFormula.widthMultiplier) + 
                            (height * cardboard1.lengthFormula.heightMultiplier) + 
                            cardboard1.lengthFormula.additionalInches;
    
    this.cardboard1Width = (length * cardboard1.widthFormula.lengthMultiplier) + 
                           (width * cardboard1.widthFormula.widthMultiplier) + 
                           (height * cardboard1.widthFormula.heightMultiplier) + 
                           cardboard1.widthFormula.additionalInches;
    
    const cardboard1Cost = (this.cardboard1Length * this.cardboard1Width * gsmTable.cardboard.gsm) / 
                           divisor * gsmTable.cardboard.rate;

    // ===== CARDBOARD 2 CALCULATION =====
    this.cardboard2Length = (length * cardboard2.lengthFormula.lengthMultiplier) + 
                            (width * cardboard2.lengthFormula.widthMultiplier) + 
                            (height * cardboard2.lengthFormula.heightMultiplier) + 
                            cardboard2.lengthFormula.additionalInches;
    
    this.cardboard2Width = (length * cardboard2.widthFormula.lengthMultiplier) + 
                           (width * cardboard2.widthFormula.widthMultiplier) + 
                           (height * cardboard2.widthFormula.heightMultiplier) + 
                           cardboard2.widthFormula.additionalInches;
    
    const cardboard2Cost = (this.cardboard2Length * this.cardboard2Width * gsmTable.cardboard.gsm) / 
                           divisor * gsmTable.cardboard.rate;

    // ===== PAPER 1 CALCULATION (×2 sheets) =====
    this.paper1Length = (length * paper1.lengthFormula.lengthMultiplier) + 
                        (width * paper1.lengthFormula.widthMultiplier) + 
                        (height * paper1.lengthFormula.heightMultiplier) + 
                        paper1.lengthFormula.additionalInches;
    
    this.paper1Width = (length * paper1.widthFormula.lengthMultiplier) + 
                       (width * paper1.widthFormula.widthMultiplier) + 
                       (height * paper1.widthFormula.heightMultiplier) + 
                       paper1.widthFormula.additionalInches;
    
    const paper1CostBeforeSheets = (this.paper1Length * this.paper1Width * gsmTable.paper.gsm) / 
                                   divisor * gsmTable.paper.rate;
    const paper1Cost = paper1CostBeforeSheets * paper1.sheetsMultiplier;

    // ===== PAPER 2 CALCULATION (×2 sheets) =====
    this.paper2Length = (length * paper2.lengthFormula.lengthMultiplier) + 
                        (width * paper2.lengthFormula.widthMultiplier) + 
                        (height * paper2.lengthFormula.heightMultiplier) + 
                        paper2.lengthFormula.additionalInches;
    
    this.paper2Width = (length * paper2.widthFormula.lengthMultiplier) + 
                       (width * paper2.widthFormula.widthMultiplier) + 
                       (height * paper2.widthFormula.heightMultiplier) + 
                       paper2.widthFormula.additionalInches;
    
    const paper2CostBeforeSheets = (this.paper2Length * this.paper2Width * gsmTable.paper.gsm) / 
                                   divisor * gsmTable.paper.rate;
    const paper2Cost = paper2CostBeforeSheets * paper2.sheetsMultiplier;

    // ===== SUM ALL 4 COSTS (NEW FORMULA) =====
    const totalCost = cardboard1Cost + cardboard2Cost + paper1Cost + paper2Cost;

    // ===== FINAL MATERIAL COST =====
    const costRatio = totalCost / 100;
    const finalCost = costRatio * requiredUnits;

    const calculations: RigidMaterialCostCalculation = {
      inputLength: length,
      inputWidth: width,
      inputHeight: height,
      
      cardboard1CalculatedLength: this.roundTo2(this.cardboard1Length),
      cardboard1CalculatedWidth: this.roundTo2(this.cardboard1Width),
      cardboard1Cost: this.roundTo2(cardboard1Cost),
      
      cardboard2CalculatedLength: this.roundTo2(this.cardboard2Length),
      cardboard2CalculatedWidth: this.roundTo2(this.cardboard2Width),
      cardboard2Cost: this.roundTo2(cardboard2Cost),
      
      paper1CalculatedLength: this.roundTo2(this.paper1Length),
      paper1CalculatedWidth: this.roundTo2(this.paper1Width),
      paper1CostBeforeSheets: this.roundTo2(paper1CostBeforeSheets),
      paper1Cost: this.roundTo2(paper1Cost),
      
      paper2CalculatedLength: this.roundTo2(this.paper2Length),
      paper2CalculatedWidth: this.roundTo2(this.paper2Width),
      paper2CostBeforeSheets: this.roundTo2(paper2CostBeforeSheets),
      paper2Cost: this.roundTo2(paper2Cost),
      
      totalCost: this.roundTo2(totalCost),
      costRatio: this.roundTo2(costRatio),
      requiredUnits,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 1,
      sectionName: "Material Cost",
      description: "Cardboard and paper costs (sums all 4 costs)",
      formula: `(Cardboard1 + Cardboard2 + Paper1 + Paper2) / 100 × Units`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 2: Scanning Cost
   */
  private calculateScanningCost(): RigidSectionBreakdown {
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
   * SECTION 3: Plates Cost (Based on Paper dimensions, ×2)
   */
  private calculatePlatesCost(): RigidSectionBreakdown {
    const { ranges, multiplier } = this.formula.platesCost;

    // Get largest dimension from Paper 1 or Paper 2
    const largestDimension = Math.max(
      this.paper1Length, this.paper1Width,
      this.paper2Length, this.paper2Width
    );

    // Find matching range
    const matchedRange = ranges.find(range => 
      largestDimension >= range.dimensionMin && largestDimension <= range.dimensionMax
    );

    const baseCost = matchedRange ? matchedRange.cost : 0;
    const finalCost = baseCost * multiplier;

    const calculations: RigidPlatesCostCalculation = {
      paper1Length: this.roundTo2(this.paper1Length),
      paper1Width: this.roundTo2(this.paper1Width),
      paper2Length: this.roundTo2(this.paper2Length),
      paper2Width: this.roundTo2(this.paper2Width),
      largestDimension: this.roundTo2(largestDimension),
      rangeMatched: matchedRange?.name || null,
      baseCost,
      multiplier,
      finalCost
    };

    return {
      sectionNumber: 3,
      sectionName: "Plates Cost",
      description: `Plates cost based on largest paper dimension (×${multiplier})`,
      formula: `Base Cost × ${multiplier}`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 4: Printing Cost (Based on Paper dimensions, ×4)
   */
  private calculatePrintingCost(): RigidSectionBreakdown {
    const { ranges, sheetsMultiplier } = this.formula.printingCost;

    // Get largest dimension from Paper 1 or Paper 2
    const largestDimension = Math.max(
      this.paper1Length, this.paper1Width,
      this.paper2Length, this.paper2Width
    );

    // Find matching range
    const matchedRange = ranges.find(range => 
      largestDimension >= range.dimensionMin && largestDimension <= range.dimensionMax
    );

    const baseCost = matchedRange ? matchedRange.cost : 0;
    const finalCost = baseCost * sheetsMultiplier;

    const calculations: RigidPrintingCostCalculation = {
      paper1Length: this.roundTo2(this.paper1Length),
      paper1Width: this.roundTo2(this.paper1Width),
      paper2Length: this.roundTo2(this.paper2Length),
      paper2Width: this.roundTo2(this.paper2Width),
      largestDimension: this.roundTo2(largestDimension),
      rangeMatched: matchedRange?.name || null,
      baseCost,
      sheetsMultiplier,
      finalCost
    };

    return {
      sectionNumber: 4,
      sectionName: "Printing Cost",
      description: `Printing cost based on largest paper dimension (×${sheetsMultiplier})`,
      formula: `Base Cost × ${sheetsMultiplier}`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 5: Lamination Cost (Based on Paper dimensions, ×4)
   */
  private calculateLaminationCost(): RigidSectionBreakdown {
    const { lamination, requiredUnits } = this.request;
    const { enabled, divisor, sheetsMultiplier, glossy, softTouch } = this.formula.laminationCost;

    if (!enabled) {
      return {
        sectionNumber: 5,
        sectionName: "Lamination Cost",
        description: "Lamination is disabled for this product",
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

    // Get largest dimensions from Paper 1 or Paper 2
    const largestLength = Math.max(this.paper1Length, this.paper2Length);
    const largestWidth = Math.max(this.paper1Width, this.paper2Width);

    // Get rate based on lamination type
    const rate = lamination === 'glossy' ? glossy.rate : softTouch.rate;

    // Calculate cost
    const costPerUnit = (largestLength * largestWidth / divisor) * rate * sheetsMultiplier;
    const finalCost = costPerUnit * requiredUnits;

    const calculations: RigidLaminationCostCalculation = {
      laminationType: lamination,
      paper1Length: this.roundTo2(this.paper1Length),
      paper1Width: this.roundTo2(this.paper1Width),
      paper2Length: this.roundTo2(this.paper2Length),
      paper2Width: this.roundTo2(this.paper2Width),
      largestLength: this.roundTo2(largestLength),
      largestWidth: this.roundTo2(largestWidth),
      divisor,
      rate,
      costPerUnit: this.roundTo2(costPerUnit),
      sheetsMultiplier,
      requiredUnits,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 5,
      sectionName: "Lamination Cost",
      description: `${lamination} lamination (×${sheetsMultiplier} sheets)`,
      formula: `(Length × Width / ${divisor}) × ${rate} × Units × ${sheetsMultiplier}`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 5: Making Cost (Tiered based on quantity)
   */
  private calculateMakingCost(): RigidSectionBreakdown {
    const { requiredUnits } = this.request;
    const { tiers } = this.formula.makingCost;

    // Find matching tier
    const matchedTier = tiers.find(tier => 
      requiredUnits >= tier.minUnits && requiredUnits <= tier.maxUnits
    );

    const costPerUnit = matchedTier ? matchedTier.costPerUnit : tiers[tiers.length - 1].costPerUnit;
    const finalCost = costPerUnit * requiredUnits;

    const tierMatched = matchedTier 
      ? `${matchedTier.minUnits}-${matchedTier.maxUnits === Infinity ? '∞' : matchedTier.maxUnits}` 
      : 'Default';

    const calculations: RigidMakingCostCalculation = {
      requiredUnits,
      tierMatched,
      costPerUnit,
      finalCost
    };

    return {
      sectionNumber: 6,
      sectionName: "Making Cost",
      description: `Assembly cost per unit (Tier: ${tierMatched})`,
      formula: `${costPerUnit} PKR per unit × ${requiredUnits} units`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 6: Vendor Percentage
   */
  private calculateVendorPercentage(): RigidSectionBreakdown {
    const { percentage } = this.formula.vendorPercentage;
    
    // Sum of sections 1-5
    const sumOfPreviousSections = this.sectionCosts.slice(0, 5).reduce((sum, cost) => sum + cost, 0);
    
    const finalCost = sumOfPreviousSections * (percentage / 100);

    const calculations: RigidVendorPercentageCalculation = {
      sumOfPreviousSections: this.roundTo2(sumOfPreviousSections),
      percentage,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 7,
      sectionName: "Vendor Percentage",
      description: `${percentage}% vendor markup`,
      formula: `Sum(Sections 1-5) × ${percentage}%`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(finalCost)
    };
  }

  /**
   * SECTION 7: Shipping Cost (NEW FORMULA)
   */
  private calculateShippingCost(): RigidSectionBreakdown {
    const { length, width, height, requiredUnits } = this.request;
    const { shippingTiers } = this.formula.shippingCost;

    // Step 1: Convert user dimensions to cm
    const lengthCm = (length * 2.54) + 1;
    const widthCm = width * 2.54;
    const heightCm = height * 2.54;

    // Step 2: Calculate required units (cube root rounded up)
    const requiredUnitsCalculated = Math.ceil(Math.pow(requiredUnits, 1/3));

    // Step 3: Calculate temp
    const temp = Math.ceil(Math.sqrt(requiredUnits / requiredUnitsCalculated));

    // Step 4: Calculate temp2
    const temp2 = Math.ceil(requiredUnits / (requiredUnitsCalculated * temp));

    // Step 5: Calculate weight in kgs
    const weightInKgs = ((lengthCm * requiredUnitsCalculated) * (widthCm * temp) * (heightCm * temp2)) / 5000;

    // Step 6: Find matching shipping tier
    const matchedTier = shippingTiers.find(tier => 
      weightInKgs >= tier.minWeight && weightInKgs < tier.maxWeight
    );

    let shippingCost: number;
    let tierMatched: string;

    if (matchedTier) {
      shippingCost = matchedTier.cost;
      tierMatched = `${matchedTier.minWeight}-${matchedTier.maxWeight} kg`;
    } else {
      // For weights over 70kg: base cost + per kg rate
      const baseCost = 183454;
      const perKgRate = 2250;
      shippingCost = baseCost + (weightInKgs * perKgRate);
      tierMatched = `70+ kg (${baseCost} + ${weightInKgs.toFixed(2)} kg × ${perKgRate}/kg)`;
    }

    const calculations: RigidShippingCostCalculation = {
      lengthCm: this.roundTo2(lengthCm),
      widthCm: this.roundTo2(widthCm),
      heightCm: this.roundTo2(heightCm),
      requiredUnitsCalculated,
      temp,
      temp2,
      weightInKgs: this.roundTo2(weightInKgs),
      tierMatched,
      shippingCost: this.roundTo2(shippingCost)
    };

    return {
      sectionNumber: 8,
      sectionName: "Shipping Cost",
      description: "Shipping cost based on volumetric weight calculation",
      formula: `Weight(kg) = ((lengthCm × requiredUnitsCalc) × (widthCm × temp) × (heightCm × temp2)) / 5000`,
      calculations: calculations as unknown as Record<string, unknown>,
      cost: this.roundTo2(shippingCost)
    };
  }

  /**
   * SECTION 8: Margin Cost (100% markup)
   */
  private calculateMarginCost(): RigidSectionBreakdown {
    const { percentage } = this.formula.marginCost;
    
    // Sum of sections 1-7
    const sumOfPreviousSections = this.sectionCosts.slice(0, 7).reduce((sum, cost) => sum + cost, 0);
    
    const finalCost = sumOfPreviousSections * (percentage / 100);

    const calculations: RigidMarginCostCalculation = {
      sumOfPreviousSections: this.roundTo2(sumOfPreviousSections),
      percentage,
      finalCost: this.roundTo2(finalCost)
    };

    return {
      sectionNumber: 9,
      sectionName: "Margin Cost",
      description: `${percentage}% profit margin`,
      formula: `Sum(Sections 1-7) × ${percentage}%`,
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
 * Main calculation function for Rigid products
 */
export async function calculateRigidPricing(
  formula: RigidProductPricingFormula,
  request: RigidPricingCalculationRequest
): Promise<RigidPricingCalculationResult> {
  try {
    const calculator = new RigidPricingCalculator(formula, request);
    return calculator.calculate();
  } catch (error) {
    console.error('Rigid pricing calculation error:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred during rigid pricing calculation');
  }
}

