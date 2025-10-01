import { getCollection } from './mongodb';
import { 
  PricingRequest, 
  PricingResult, 
  Dimensions, 
  MaterialSpec, 
  ProductCategory,
  PrintingType,
  LaminationType,
  DieMakingSpec,
  CSVProductPricing
} from './types/pricing';

export class CSVPricingEngine {
  private static instance: CSVPricingEngine;

  // Material specifications from CSV
  private readonly materialSpecs: MaterialSpec[] = [
    { gsm: 14, kraft: 400, cardboard: 300, corrugated: 300 },
    { gsm: 16, kraft: 400, cardboard: 300, corrugated: 300 },
    { gsm: 18, kraft: 400, cardboard: 300, corrugated: 300 },
    { gsm: 700, kraft: 0, cardboard: 0, corrugated: 0 } // N/A case
  ];

  // Fixed costs from CSV
  private readonly fixedCosts = {
    scanning: {
      outside: 200,
      inside: 200,
      bothside: 200,
      blank: 0
    },
    plates: {
      outside: 1200,
      inside: 1200,
      bothside: 1200,
      blank: 0
    }
  };

  // Variable costs from CSV (per 1k units)
  private readonly variableCosts = {
    printing: {
      outside: 2400,
      inside: 2400,
      bothside: 2400,
      blank: 0
    },
    lamination: {
      outside: 5000, // Glossy/Matte
      inside: 5000,
      bothside: 5000,
      blank: 0
    },
    laminationSoftTouch: {
      outside: 8000,
      inside: 8000,
      bothside: 8000,
      blank: 0
    },
    dieMaking: {
      outside: 3500,
      inside: 3500,
      bothside: 3500,
      blank: 0
    },
    dieCutting: {
      outside: 8000,
      inside: 8000,
      bothside: 8000,
      blank: 0
    },
    pasting: {
      outside: 10000,
      inside: 10000,
      bothside: 10000,
      blank: 0
    }
  };

  // Die making specifications
  private readonly dieMakingSpec: DieMakingSpec = {
    minCost: 1000,
    calculation: 'area',
    areaThreshold: 100
  };

  // Shipping weight tiers from CSV
  private readonly shippingTiers = [
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

  public static getInstance(): CSVPricingEngine {
    if (!CSVPricingEngine.instance) {
      CSVPricingEngine.instance = new CSVPricingEngine();
    }
    return CSVPricingEngine.instance;
  }

  async calculatePrice(request: PricingRequest): Promise<PricingResult> {
    try {
      // Use simplified calculation based on CSV data
      // For now, use Kraft Mailer Box as default (from CSV row 33)
      const materialCost = 12.25; // From CSV
      const scanningCost = request.scanningRequired ? 200 : 0;
      const platesCost = request.platesRequired ? 1200 : 0;
      
      // Calculate variable costs based on quantity
      const batches = Math.ceil(request.quantity / 1000);
      const printingCost = request.printingType && request.printingType !== 'blank' ? batches * 2400 : 0;
      const laminationCost = request.laminationType && request.laminationType !== 'none' ? batches * 5000 : 0;
      const dieMakingCost = request.dieMakingRequired ? 3500 : 0;
      const dieCuttingCost = request.dieCuttingRequired ? batches * 8000 : 0;
      const pastingCost = request.pastingRequired ? batches * 10000 : 0;
      
      // Calculate special multipliers
      const twoPieceBoxMultiplier = request.twoPieceBox ? 2 : 1;
      const bothSidePrintingSurcharge = request.printingType === 'bothside' ? materialCost * 1.5 : 0;
      
      // Calculate vendor cost
      const vendorCost = request.vendorPercentage ? (materialCost * request.vendorPercentage) / 100 : 0;
      
      // Calculate shipping cost (simplified)
      const shippingCost = request.shippingWeight ? this.getShippingCostByWeight(request.shippingWeight) : 0;
      
      // Calculate base price
      const basePrice = materialCost / 100;
      
      // Calculate subtotal
      const subtotal = (basePrice + scanningCost + platesCost + printingCost + 
                       laminationCost + dieMakingCost + dieCuttingCost + pastingCost + 
                       vendorCost + shippingCost + bothSidePrintingSurcharge) * twoPieceBoxMultiplier;
      
      // Calculate tax (8%)
      const tax = subtotal * 0.08;
      
      // Calculate total
      const total = subtotal + tax;
      
      // Generate breakdown
      const breakdown = this.generateBreakdown({
        basePrice,
        materialCost,
        scanningCost,
        platesCost,
        printingCost,
        laminationCost,
        dieMakingCost,
        dieCuttingCost,
        pastingCost,
        twoPieceBoxMultiplier,
        vendorCost,
        shippingCost,
        bothSidePrintingSurcharge,
        subtotal,
        tax,
        total
      });

      return {
        basePrice,
        materialCost,
        sizeCost: 0,
        quantityDiscount: 0,
        customizationCost: 0,
        finishingCost: 0,
        locationCost: 0,
        rushOrderCost: 0,
        scanningCost,
        platesCost,
        printingCost,
        laminationCost,
        dieMakingCost,
        dieCuttingCost,
        pastingCost,
        twoPieceBoxMultiplier,
        vendorCost,
        shippingCost,
        bothSidePrintingSurcharge,
        subtotal,
        tax,
        total,
        breakdown,
        estimatedDelivery: this.calculateEstimatedDelivery(request),
        currency: 'USD'
      };
    } catch (error) {
      console.error('CSV Pricing calculation error:', error);
      throw new Error(`Pricing calculation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private async getProductPricing(productId: string): Promise<CSVProductPricing | null> {
    const productsCollection = await getCollection('csvProductPricing');
    const { ObjectId } = await import('mongodb');
    
    // Try to find by ID first
    let product = await productsCollection.findOne({ _id: new ObjectId(productId), isActive: true });
    
    // If not found by ID, try to find by product name or use a default
    if (!product) {
      // For testing, use the first available product
      product = await productsCollection.findOne({ isActive: true });
    }
    
    return product;
  }

  private calculateMaterialCost(request: PricingRequest, productPricing: CSVProductPricing | null): number {
    if (productPricing) {
      // Use product-specific material cost
      return productPricing.materialCostOf100Units;
    }
    
    // Calculate based on dimensions and material
    const dimensions = this.convertToInches(request.dimensions);
    const materialDensity = this.getMaterialDensity(request.material);
    
    // Volume calculation: L × W × H
    const volume = dimensions.length * dimensions.width * dimensions.height;
    
    // Material cost calculation from CSV
    const materialCost = volume * materialDensity;
    
    return materialCost;
  }

  private calculateScanningCost(request: PricingRequest): number {
    if (!request.scanningRequired) return 0;
    
    const printingType = request.printingType || 'outside';
    return this.fixedCosts.scanning[printingType];
  }

  private calculatePlatesCost(request: PricingRequest): number {
    if (!request.platesRequired) return 0;
    
    const printingType = request.printingType || 'outside';
    return this.fixedCosts.plates[printingType];
  }

  private calculatePrintingCost(request: PricingRequest, productPricing: CSVProductPricing | null): number {
    const printingType = request.printingType || 'outside';
    const costPerThousand = this.variableCosts.printing[printingType];
    
    if (costPerThousand === 0) return 0;
    
    const batches = Math.ceil(request.quantity / 1000);
    return batches * costPerThousand;
  }

  private calculateLaminationCost(request: PricingRequest, productPricing: CSVProductPricing | null): number {
    const laminationType = request.laminationType || 'glossy';
    const printingType = request.printingType || 'outside';
    
    let costPerThousand = 0;
    if (laminationType === 'softtouch') {
      costPerThousand = this.variableCosts.laminationSoftTouch[printingType];
    } else if (laminationType !== 'none') {
      costPerThousand = this.variableCosts.lamination[printingType];
    }
    
    if (costPerThousand === 0) return 0;
    
    const batches = Math.ceil(request.quantity / 1000);
    return batches * costPerThousand;
  }

  private calculateDieMakingCost(request: PricingRequest, productPricing: CSVProductPricing | null): number {
    if (!request.dieMakingRequired) return 0;
    
    const printingType = request.printingType || 'outside';
    const baseCost = this.variableCosts.dieMaking[printingType];
    
    if (baseCost === 0) return 0;
    
    // Check if L×W < 100, then use minimum cost
    const dimensions = this.convertToInches(request.dimensions);
    const area = dimensions.length * dimensions.width;
    
    if (area < this.dieMakingSpec.areaThreshold) {
      return this.dieMakingSpec.minCost;
    }
    
    return baseCost;
  }

  private calculateDieCuttingCost(request: PricingRequest, productPricing: CSVProductPricing | null): number {
    if (!request.dieCuttingRequired) return 0;
    
    const printingType = request.printingType || 'outside';
    const costPerThousand = this.variableCosts.dieCutting[printingType];
    
    if (costPerThousand === 0) return 0;
    
    const batches = Math.ceil(request.quantity / 1000);
    return batches * costPerThousand;
  }

  private calculatePastingCost(request: PricingRequest, productPricing: CSVProductPricing | null): number {
    if (!request.pastingRequired) return 0;
    
    const printingType = request.printingType || 'outside';
    const costPerThousand = this.variableCosts.pasting[printingType];
    
    if (costPerThousand === 0) return 0;
    
    const batches = Math.ceil(request.quantity / 1000);
    return batches * costPerThousand;
  }

  private calculateBothSidePrintingSurcharge(request: PricingRequest, materialCost: number): number {
    if (request.printingType === 'bothside') {
      return materialCost * 1.5; // 1.5x multiplier for both side printing
    }
    return 0;
  }

  private calculateVendorCost(request: PricingRequest, materialCost: number): number {
    const vendorPercentage = request.vendorPercentage || 0;
    return (materialCost * vendorPercentage) / 100;
  }

  private calculateShippingCost(request: PricingRequest, productPricing: CSVProductPricing | null): number {
    if (request.shippingWeight) {
      return this.getShippingCostByWeight(request.shippingWeight);
    }
    
    if (productPricing) {
      return productPricing.shippingCost;
    }
    
    return 0;
  }

  private getShippingCostByWeight(weight: number): number {
    const tier = this.shippingTiers.find(t => weight >= t.minWeight && weight < t.maxWeight);
    return tier ? tier.cost : this.shippingTiers[this.shippingTiers.length - 1].cost;
  }

  private convertToInches(dimensions: Dimensions): Dimensions {
    switch (dimensions.unit) {
      case 'cm':
        return {
          length: dimensions.length / 2.54,
          width: dimensions.width / 2.54,
          height: dimensions.height / 2.54,
          unit: 'in'
        };
      case 'mm':
        return {
          length: dimensions.length / 25.4,
          width: dimensions.width / 25.4,
          height: dimensions.height / 25.4,
          unit: 'in'
        };
      default:
        return dimensions;
    }
  }

  private getMaterialDensity(material: string): number {
    // Material density based on CSV specifications
    const materialMap: { [key: string]: number } = {
      'kraft': 400,
      'cardboard': 300,
      'corrugated': 300
    };
    
    return materialMap[material.toLowerCase()] || 300;
  }

  private generateBreakdown(calculations: any): any[] {
    const breakdown = [];
    
    if (calculations.materialCost > 0) {
      breakdown.push({
        category: 'Material',
        description: 'Material cost',
        cost: calculations.materialCost
      });
    }
    
    if (calculations.scanningCost > 0) {
      breakdown.push({
        category: 'Scanning',
        description: 'One-time scanning cost',
        cost: calculations.scanningCost
      });
    }
    
    if (calculations.platesCost > 0) {
      breakdown.push({
        category: 'Plates',
        description: 'One-time plates cost',
        cost: calculations.platesCost
      });
    }
    
    if (calculations.printingCost > 0) {
      breakdown.push({
        category: 'Printing',
        description: 'Printing cost',
        cost: calculations.printingCost
      });
    }
    
    if (calculations.laminationCost > 0) {
      breakdown.push({
        category: 'Lamination',
        description: 'Lamination cost',
        cost: calculations.laminationCost
      });
    }
    
    if (calculations.dieMakingCost > 0) {
      breakdown.push({
        category: 'Die Making',
        description: 'One-time die making cost',
        cost: calculations.dieMakingCost
      });
    }
    
    if (calculations.dieCuttingCost > 0) {
      breakdown.push({
        category: 'Die Cutting',
        description: 'Die cutting cost',
        cost: calculations.dieCuttingCost
      });
    }
    
    if (calculations.pastingCost > 0) {
      breakdown.push({
        category: 'Pasting',
        description: 'Pasting cost',
        cost: calculations.pastingCost
      });
    }
    
    if (calculations.vendorCost > 0) {
      breakdown.push({
        category: 'Vendor',
        description: 'Vendor cost',
        cost: calculations.vendorCost
      });
    }
    
    if (calculations.shippingCost > 0) {
      breakdown.push({
        category: 'Shipping',
        description: 'Shipping cost',
        cost: calculations.shippingCost
      });
    }
    
    if (calculations.bothSidePrintingSurcharge > 0) {
      breakdown.push({
        category: 'Both Side Printing',
        description: '1.5x surcharge for both side printing',
        cost: calculations.bothSidePrintingSurcharge
      });
    }
    
    if (calculations.twoPieceBoxMultiplier > 1) {
      breakdown.push({
        category: 'Two Piece Box',
        description: '2x multiplier for two piece box',
        cost: (calculations.subtotal / calculations.twoPieceBoxMultiplier) * (calculations.twoPieceBoxMultiplier - 1)
      });
    }
    
    return breakdown;
  }

  private calculateEstimatedDelivery(request: PricingRequest): string {
    const baseDays = 12; // Standard days from CSV
    const rushDays = request.rushOrder ? 5 : 0; // Rush delivery from CSV
    
    const totalDays = baseDays - rushDays;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + totalDays);
    
    return deliveryDate.toISOString().split('T')[0];
  }
}

// Export singleton instance
export const csvPricingEngine = CSVPricingEngine.getInstance();
