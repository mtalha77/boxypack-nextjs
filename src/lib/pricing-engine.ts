import { 
  PricingRequest, 
  PricingResult, 
  PricingBreakdown, 
  Dimensions,
  Material,
  SizePricing,
  QuantityTier,
  LocationPricing,
  PricingRule
} from './types/pricing';
import { csvPricingEngine } from './csv-pricing-engine';
import { getCollection } from './mongodb';

export class PricingCalculationEngine {
  private static instance: PricingCalculationEngine;
  
  private constructor() {}
  
  public static getInstance(): PricingCalculationEngine {
    if (!PricingCalculationEngine.instance) {
      PricingCalculationEngine.instance = new PricingCalculationEngine();
    }
    return PricingCalculationEngine.instance;
  }

  async calculatePrice(request: PricingRequest): Promise<PricingResult> {
    try {
      // Use CSV-based pricing engine for accurate calculations
      return await csvPricingEngine.calculatePrice(request);
    } catch (error) {
      console.error('Pricing calculation error:', error);
      throw new Error(`Pricing calculation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private validatePricingRequest(request: PricingRequest): { isValid: boolean; errors: any[] } {
    const errors: any[] = [];

    if (!request.productId) {
      errors.push({ field: 'productId', message: 'Product ID is required' });
    }

    if (!request.material) {
      errors.push({ field: 'material', message: 'Material is required' });
    }

    if (!request.dimensions || !this.validateDimensions(request.dimensions)) {
      errors.push({ field: 'dimensions', message: 'Valid dimensions are required' });
    }

    if (!request.quantity || request.quantity <= 0) {
      errors.push({ field: 'quantity', message: 'Valid quantity is required' });
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private validateDimensions(dimensions: Dimensions): boolean {
    return dimensions.length > 0 && 
           dimensions.width > 0 && 
           dimensions.height > 0 && 
           ['in', 'cm', 'mm'].includes(dimensions.unit);
  }

  private async getProduct(productId: string) {
    const productsCollection = await getCollection('products');
    const { ObjectId } = await import('mongodb');
    const product = await productsCollection.findOne({ _id: new ObjectId(productId), isActive: true });
    if (!product) {
      throw new Error(`Product not found: ${productId}`);
    }
    return product;
  }

  private async getMaterial(materialName: string) {
    const materialsCollection = await getCollection('materials');
    const material = await materialsCollection.findOne({ name: materialName, isActive: true });
    if (!material) {
      throw new Error(`Material not found: ${materialName}`);
    }
    return material;
  }

  private async getSizePricing(productId: string, dimensions: Dimensions) {
    const sizePricingCollection = await getCollection('sizePricing');
    const { ObjectId } = await import('mongodb');
    const sizePricing = await sizePricingCollection.findOne({
      productId: new ObjectId(productId),
      minLength: { $lte: dimensions.length },
      maxLength: { $gte: dimensions.length },
      minWidth: { $lte: dimensions.width },
      maxWidth: { $gte: dimensions.width },
      minHeight: { $lte: dimensions.height },
      maxHeight: { $gte: dimensions.height },
      isActive: true
    });
    return sizePricing;
  }

  private async getQuantityTier(productId: string, quantity: number) {
    const quantityTiersCollection = await getCollection('quantityTiers');
    const { ObjectId } = await import('mongodb');
    const tier = await quantityTiersCollection.findOne({
      productId: new ObjectId(productId),
      minQuantity: { $lte: quantity },
      maxQuantity: { $gte: quantity },
      isActive: true
    });
    return tier;
  }

  private async getLocationPricing(location: string) {
    const locationPricingCollection = await getCollection('locationPricing');
    const locationPricing = await locationPricingCollection.findOne({
      location,
      isActive: true
    });
    return locationPricing;
  }

  private async getPricingRules(productId: string) {
    const pricingRulesCollection = await getCollection('pricingRules');
    const { ObjectId } = await import('mongodb');
    const rules = await pricingRulesCollection.find({
      $or: [
        { productId: new ObjectId(productId) },
        { productId: { $exists: false } }
      ],
      isActive: true
    }).sort({ priority: 1 }).toArray();
    return rules;
  }

  private async calculateBasePrice(product: any, request: PricingRequest): Promise<{ basePrice: number; breakdown: PricingBreakdown[] }> {
    const basePrice = product.basePrice || 0;
    return {
      basePrice,
      breakdown: [{
        category: 'Base Price',
        description: `Base price for ${product.name}`,
        cost: basePrice,
        unit: 'per unit'
      }]
    };
  }

  private async calculateMaterialCost(material: Material, request: PricingRequest): Promise<{ materialCost: number; breakdown: PricingBreakdown[] }> {
    const area = this.calculateArea(request.dimensions);
    const materialCost = area * material.baseCostPerSqFt * material.thicknessFactor * material.qualityMultiplier;
    
    return {
      materialCost,
      breakdown: [{
        category: 'Material Cost',
        description: `${material.name} material cost`,
        cost: materialCost,
        unit: 'per unit',
        quantity: area
      }]
    };
  }

  private async calculateSizeCost(sizePricing: SizePricing | null, request: PricingRequest): Promise<{ sizeCost: number; breakdown: PricingBreakdown[] }> {
    if (!sizePricing) {
      return { sizeCost: 0, breakdown: [] };
    }

    const area = this.calculateArea(request.dimensions);
    const sizeCost = (area * sizePricing.sizeMultiplier) + sizePricing.baseSurcharge;
    
    return {
      sizeCost,
      breakdown: [{
        category: 'Size Cost',
        description: 'Size-based pricing adjustment',
        cost: sizeCost,
        unit: 'per unit'
      }]
    };
  }

  private async calculateQuantityDiscount(quantityTier: QuantityTier | null, request: PricingRequest): Promise<{ quantityDiscount: number; breakdown: PricingBreakdown[] }> {
    if (!quantityTier) {
      return { quantityDiscount: 0, breakdown: [] };
    }

    const discountAmount = (request.quantity * quantityTier.pricePerUnit * quantityTier.discountPercentage) / 100;
    
    return {
      quantityDiscount: -discountAmount, // Negative because it's a discount
      breakdown: [{
        category: 'Quantity Discount',
        description: `${quantityTier.discountPercentage}% discount for ${request.quantity} units`,
        cost: -discountAmount,
        unit: 'total'
      }]
    };
  }

  private async calculateCustomizationCost(request: PricingRequest, pricingRules: PricingRule[]): Promise<{ customizationCost: number; breakdown: PricingBreakdown[] }> {
    let totalCost = 0;
    const breakdown: PricingBreakdown[] = [];

    // Logo placement cost
    if (request.logoPlacement && request.logoPlacement.length > 0) {
      const logoCost = this.calculateLogoCost(request.logoPlacement, request.dimensions);
      totalCost += logoCost;
      breakdown.push({
        category: 'Logo Placement',
        description: `Logo placement on ${request.logoPlacement.length} side(s)`,
        cost: logoCost,
        unit: 'per unit'
      });
    }

    // Printing cost
    if (request.printingOptions && request.printingOptions.type !== 'none') {
      const printingCost = this.calculatePrintingCost(request.printingOptions, request.quantity);
      totalCost += printingCost;
      breakdown.push({
        category: 'Printing',
        description: `${request.printingOptions.type} printing on ${request.printingOptions.sides} side(s)`,
        cost: printingCost,
        unit: 'per unit'
      });
    }

    return { customizationCost: totalCost, breakdown };
  }

  private async calculateFinishingCost(request: PricingRequest, pricingRules: PricingRule[]): Promise<{ finishingCost: number; breakdown: PricingBreakdown[] }> {
    let totalCost = 0;
    const breakdown: PricingBreakdown[] = [];

    if (request.finishingOptions && request.finishingOptions.type !== 'none') {
      const finishingCost = this.calculateFinishingCostForType(request.finishingOptions, request.quantity);
      totalCost += finishingCost;
      breakdown.push({
        category: 'Finishing',
        description: `${request.finishingOptions.type} finishing`,
        cost: finishingCost,
        unit: 'per unit'
      });
    }

    return { finishingCost: totalCost, breakdown };
  }

  private async calculateLocationCost(locationPricing: LocationPricing | null, request: PricingRequest): Promise<{ locationCost: number; breakdown: PricingBreakdown[] }> {
    if (!locationPricing) {
      return { locationCost: 0, breakdown: [] };
    }

    const area = this.calculateArea(request.dimensions);
    const locationCost = locationPricing.baseShippingCost + 
                        (area * locationPricing.sizeMultiplier) + 
                        (request.quantity * locationPricing.weightMultiplier);
    
    return {
      locationCost,
      breakdown: [{
        category: 'Shipping',
        description: `Shipping to ${locationPricing.location}`,
        cost: locationCost,
        unit: 'total'
      }]
    };
  }

  private async calculateRushOrderCost(request: PricingRequest, pricingRules: PricingRule[]): Promise<{ rushOrderCost: number; breakdown: PricingBreakdown[] }> {
    if (!request.rushOrder) {
      return { rushOrderCost: 0, breakdown: [] };
    }

    // Rush order typically adds 25-50% to the total cost
    const rushOrderMultiplier = 0.3; // 30% additional cost
    const baseCost = this.calculateBaseCost(request);
    const rushOrderCost = baseCost * rushOrderMultiplier;
    
    return {
      rushOrderCost,
      breakdown: [{
        category: 'Rush Order',
        description: 'Rush order processing fee',
        cost: rushOrderCost,
        unit: 'total'
      }]
    };
  }

  private calculateArea(dimensions: Dimensions): number {
    // Convert to square feet for consistent calculation
    let length = dimensions.length;
    let width = dimensions.width;
    let height = dimensions.height;

    // Convert to inches first
    if (dimensions.unit === 'cm') {
      length *= 0.393701;
      width *= 0.393701;
      height *= 0.393701;
    } else if (dimensions.unit === 'mm') {
      length *= 0.0393701;
      width *= 0.0393701;
      height *= 0.0393701;
    }

    // Calculate surface area in square feet
    const surfaceArea = (length * width * 2) + (length * height * 2) + (width * height * 2);
    return surfaceArea / 144; // Convert square inches to square feet
  }

  private calculateLogoCost(logoPlacements: any[], dimensions: Dimensions): number {
    let totalCost = 0;
    const area = this.calculateArea(dimensions);
    
    for (const placement of logoPlacements) {
      let baseCost = 0.5; // Base cost per logo
      let sizeMultiplier = 1;
      
      switch (placement.size) {
        case 'small':
          sizeMultiplier = 0.5;
          break;
        case 'medium':
          sizeMultiplier = 1;
          break;
        case 'large':
          sizeMultiplier = 1.5;
          break;
        case 'custom':
          sizeMultiplier = 2;
          break;
      }
      
      let complexityMultiplier = 1;
      switch (placement.complexity) {
        case 'simple':
          complexityMultiplier = 1;
          break;
        case 'medium':
          complexityMultiplier = 1.5;
          break;
        case 'complex':
          complexityMultiplier = 2;
          break;
      }
      
      totalCost += baseCost * sizeMultiplier * complexityMultiplier * area;
    }
    
    return totalCost;
  }

  private calculatePrintingCost(printingOptions: any, quantity: number): number {
    let baseCost = 0;
    
    switch (printingOptions.type) {
      case 'single_color':
        baseCost = 0.1;
        break;
      case 'multi_color':
        baseCost = 0.3;
        break;
      case 'full_color':
        baseCost = 0.5;
        break;
      default:
        return 0;
    }
    
    const sidesMultiplier = printingOptions.sides || 1;
    const complexityMultiplier = printingOptions.complexity === 'complex' ? 1.5 : 1;
    
    return baseCost * sidesMultiplier * complexityMultiplier * quantity;
  }

  private calculateFinishingCostForType(finishingOptions: any, quantity: number): number {
    let baseCost = 0;
    
    switch (finishingOptions.type) {
      case 'matte':
        baseCost = 0.05;
        break;
      case 'glossy':
        baseCost = 0.08;
        break;
      case 'satin':
        baseCost = 0.06;
        break;
      default:
        return 0;
    }
    
    return baseCost * quantity;
  }

  private calculateBaseCost(request: PricingRequest): number {
    // This is a simplified calculation for rush order
    // In a real implementation, you'd want to calculate the actual base cost
    return request.quantity * 10; // Placeholder
  }

  private aggregateCalculations(calculations: any[], request: PricingRequest): PricingResult {
    const basePrice = calculations[0].basePrice || 0;
    const materialCost = calculations[1].materialCost || 0;
    const sizeCost = calculations[2].sizeCost || 0;
    const quantityDiscount = calculations[3].quantityDiscount || 0;
    const customizationCost = calculations[4].customizationCost || 0;
    const finishingCost = calculations[5].finishingCost || 0;
    const locationCost = calculations[6].locationCost || 0;
    const rushOrderCost = calculations[7].rushOrderCost || 0;

    const subtotal = basePrice + materialCost + sizeCost + quantityDiscount + customizationCost + finishingCost + locationCost + rushOrderCost;
    const tax = subtotal * 0.08; // 8% tax rate
    const total = subtotal + tax;

    // Combine all breakdowns
    const breakdown: PricingBreakdown[] = [];
    calculations.forEach(calc => {
      if (calc.breakdown) {
        breakdown.push(...calc.breakdown);
      }
    });

    return {
      basePrice,
      materialCost,
      sizeCost,
      quantityDiscount,
      customizationCost,
      finishingCost,
      locationCost,
      rushOrderCost,
      subtotal,
      tax,
      total,
      breakdown,
      estimatedDelivery: this.calculateEstimatedDelivery(request),
      currency: 'USD'
    };
  }

  private calculateEstimatedDelivery(request: PricingRequest): string {
    const baseDays = 7; // Base production time
    const rushDays = request.rushOrder ? 3 : 0;
    const quantityDays = Math.ceil(request.quantity / 1000); // Additional day per 1000 units
    
    const totalDays = baseDays - rushDays + quantityDays;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + totalDays);
    
    return deliveryDate.toISOString().split('T')[0];
  }
}

// Export singleton instance
export const pricingEngine = PricingCalculationEngine.getInstance();
