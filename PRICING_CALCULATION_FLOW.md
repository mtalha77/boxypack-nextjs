# Pricing Calculation Flow - Visual Guide

## User Input Flow

```
┌─────────────────────────────────────────────────────────┐
│                   USER INPUTS                           │
├─────────────────────────────────────────────────────────┤
│  1. Product Selection:  [Kraft Mailer Box        ▼]    │
│  2. Length (inches):    [10                      ]      │
│  3. Width (inches):     [8                       ]      │
│  4. Height (inches):    [3                       ]      │
│  5. PT:                 [14 ▼]                          │
│  6. Required Units:     [250                     ]      │
│  7. Printing:           ○ Single Side  ● Both Side      │
│  8. Lamination:         ○ Glossy  ● Matt  ○ Soft Touch │
│                                                          │
│                    [CALCULATE PRICE]                     │
└─────────────────────────────────────────────────────────┘
```

## Calculation Pipeline

```
USER INPUTS
     ↓
┌────────────────────────────────────────────┐
│  1. MATERIAL COST                          │
│  ✓ Calculate dimensions                    │
│  ✓ Get GSM from table                      │
│  ✓ Calculate weight                        │
│  ✓ Calculate cost                          │
│  Result: $118.55                           │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  2. SCANNING COST                          │
│  ✓ Fixed cost                              │
│  Result: $200.00                           │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  3. PLATES COST                            │
│  ✓ Check length/width range                │
│  ✓ Get cost for "Both Side"               │
│  Result: $2,400.00                         │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  4. PRINTING COST                          │
│  ✓ Check length/width range                │
│  ✓ Calculate 1000-unit multiplier          │
│  ✓ Base cost × multiplier                  │
│  Result: $7,000.00                         │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  5. LAMINATION COST                        │
│  ✓ Calculate single unit cost              │
│  ✓ Multiply by quantity                    │
│  Result: $253.47                           │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  6. DIE MAKING COST                        │
│  ✓ Length × Width × 9                      │
│  Result: $1,845.00                         │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  7. DIE CUTTING COST                       │
│  ✓ Calculate 1000-unit multiplier          │
│  ✓ 1000 × multiplier                       │
│  Result: $1,000.00                         │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  8. PASTING COST                           │
│  ✓ Calculate 1000-unit multiplier          │
│  ✓ 1000 × multiplier                       │
│  Result: $1,000.00                         │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  9. TWO-PIECE BOX MULTIPLIER               │
│  ✓ If enabled: Sum(1-8) × 2               │
│  Result: $0.00 (disabled)                  │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  10. BOTH SIDE PRINTING SURCHARGE          │
│  ✓ If "Both Side": Sum(1-9) × 10%        │
│  Result: $1,381.70                         │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  11. VENDOR PERCENTAGE                     │
│  ✓ Sum(1-10) × 25%                        │
│  Result: $3,749.68                         │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│  12. SHIPPING COST                         │
│  ✓ Calculate total weight                  │
│  ✓ Find shipping tier                      │
│  Result: $10,668.00                        │
└────────────────────────────────────────────┘
     ↓
┌────────────────────────────────────────────┐
│           TOTAL PRICE: $29,616.40          │
│           Per Unit: $118.47                │
└────────────────────────────────────────────┘
```

## Admin Formula Editor Example

### Section 1: Material Cost Editor

```
╔═══════════════════════════════════════════════════════════╗
║  SECTION 1: MATERIAL COST                                 ║
╠═══════════════════════════════════════════════════════════╣
║                                                            ║
║  📝 Description:                                           ║
║  Calculates the base material cost using dimensions,      ║
║  GSM values from the table, and weight calculations.      ║
║                                                            ║
║  📐 Formula Breakdown:                                     ║
║  ┌──────────────────────────────────────────────────┐    ║
║  │ Step 1: Calculate Adjusted Dimensions            │    ║
║  │   Calculated Length = (L × 2) + (W × 2) + 1.5   │    ║
║  │   Calculated Width = (H × 2) + L + 2             │    ║
║  │                                                    │    ║
║  │ Step 2: Get GSM from Table                       │    ║
║  │   Based on PT and Material Type                  │    ║
║  │                                                    │    ║
║  │ Step 3: Calculate Weight                         │    ║
║  │   Weight of 100 units =                          │    ║
║  │   (CalcLength × CalcWidth × GSM) / 15500        │    ║
║  │                                                    │    ║
║  │ Step 4: Calculate Cost                           │    ║
║  │   Cost of 100 units = Weight × 300               │    ║
║  │                                                    │    ║
║  │ Step 5: Scale to User Quantity                   │    ║
║  │   Final Cost = (Cost of 100 / 100) × Units      │    ║
║  └──────────────────────────────────────────────────┘    ║
║                                                            ║
║  ⚙️ Editable Parameters:                                   ║
║  ┌──────────────────────────────────────────────────┐    ║
║  │ Length Formula                                    │    ║
║  │   Length Multiplier:    [  2    ]               │    ║
║  │   Width Multiplier:     [  2    ]               │    ║
║  │   Additional Inches:    [  1.5  ]               │    ║
║  │                                                    │    ║
║  │ Width Formula                                     │    ║
║  │   Height Multiplier:    [  2    ]               │    ║
║  │   Add Length:           [✓] Yes                  │    ║
║  │   Additional Inches:    [  2    ]               │    ║
║  │                                                    │    ║
║  │ Weight Calculation                                │    ║
║  │   Divisor:              [ 15500 ]                │    ║
║  │                                                    │    ║
║  │ Cost Calculation                                  │    ║
║  │   Rate per unit:        [  300  ]                │    ║
║  └──────────────────────────────────────────────────┘    ║
║                                                            ║
║  📊 GSM Table:                                             ║
║  ┌─────┬──────┬────────┬────────────┬─────────────┐      ║
║  │ PT  │ GSM  │ Kraft  │ Cardboard  │ Corrugated  │      ║
║  ├─────┼──────┼────────┼────────────┼─────────────┤      ║
║  │ 14  │ 250  │  400   │    300     │      -      │ [✏️]  ║
║  │ 16  │ 300  │  400   │    300     │      -      │ [✏️]  ║
║  │ 18  │ 350  │  400   │    300     │      -      │ [✏️]  ║
║  │ N/A │ 700  │   -    │     -      │    300      │ [✏️]  ║
║  └─────┴──────┴────────┴────────────┴─────────────┘      ║
║  [+ Add New Row]                                          ║
║                                                            ║
║  🧪 Test Calculator:                                       ║
║  ┌──────────────────────────────────────────────────┐    ║
║  │ Test Inputs:                                      │    ║
║  │   Length:  [  10  ]  Width:   [  8   ]          │    ║
║  │   Height:  [  3   ]  PT:      [ 14 ▼ ]          │    ║
║  │   Units:   [ 250  ]  Material: [Kraft▼]         │    ║
║  │                                                    │    ║
║  │ [Calculate Test]                                  │    ║
║  │                                                    │    ║
║  │ Test Results:                                     │    ║
║  │   Calc Length:    20.5 inches                    │    ║
║  │   Calc Width:     15 inches                      │    ║
║  │   GSM Used:       400                            │    ║
║  │   Weight 100:     158.06                         │    ║
║  │   Cost 100:       $47.42                         │    ║
║  │   Final Cost:     $118.55                        │    ║
║  └──────────────────────────────────────────────────┘    ║
║                                                            ║
║  [Cancel]                        [Save Changes] ✓         ║
║                                                            ║
╚═══════════════════════════════════════════════════════════╝
```

## Range-Based Sections (Plates & Printing)

### Visual Range Editor

```
┌─────────────────────────────────────────────────────────┐
│  Length/Width Ranges                                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Range 1: Small                              [🗑️ Delete] │
│  ├─ Length:  [ 0.1  ] to [ 12.5 ]                      │
│  ├─ Width:   [ 0.1  ] to [ 18   ]                      │
│  └─ Costs:                                              │
│      ├─ Outside:   [ 1200  ]                           │
│      ├─ Inside:    [ 1200  ]                           │
│      ├─ Both Side: [ 2400  ]                           │
│      └─ None:      [ 0     ]                           │
│                                                          │
│  Range 2: Medium                             [🗑️ Delete] │
│  ├─ Length:  [ 12.6 ] to [ 18   ]                      │
│  ├─ Width:   [ 18.1 ] to [ 25   ]                      │
│  └─ Costs:                                              │
│      ├─ Outside:   [ 2400  ]                           │
│      ├─ Inside:    [ 2400  ]                           │
│      ├─ Both Side: [ 4800  ]                           │
│      └─ None:      [ 0     ]                           │
│                                                          │
│  [+ Add New Range]                                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## API Response Example

### POST /api/pricing/calculate

**Request:**
```json
{
  "productId": "kraft-mailer-box",
  "length": 10,
  "width": 8,
  "height": 3,
  "pt": "14",
  "requiredUnits": 250,
  "printing": "bothSide",
  "lamination": "matt"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "productName": "Kraft Mailer Box",
    "breakdown": [
      {
        "sectionNumber": 1,
        "sectionName": "Material Cost",
        "description": "Calculates material cost based on dimensions and GSM",
        "formula": "((L×2 + W×2 + 1.5) × (H×2 + L + 2) × GSM / 15500) × 300 / 100 × Units",
        "calculations": {
          "inputLength": 10,
          "inputWidth": 8,
          "inputHeight": 3,
          "calculatedLength": 20.5,
          "calculatedWidth": 15,
          "gsmUsed": 400,
          "weightOf100Units": 158.06,
          "costOf100Units": 47.42,
          "requiredUnits": 250
        },
        "cost": 118.55
      },
      {
        "sectionNumber": 2,
        "sectionName": "Scanning Cost",
        "description": "One-time scanning setup cost",
        "formula": "Fixed Cost",
        "calculations": {
          "fixedCost": 200
        },
        "cost": 200.00
      },
      {
        "sectionNumber": 3,
        "sectionName": "Plates Cost",
        "description": "Plates cost based on dimensions",
        "formula": "Cost based on length/width range",
        "calculations": {
          "rangeMatched": "Small",
          "printingType": "bothSide",
          "baseCost": 2400
        },
        "cost": 2400.00
      },
      {
        "sectionNumber": 4,
        "sectionName": "Printing Cost",
        "description": "Printing cost with quantity multiplier",
        "formula": "Base Cost × ceil(Units / 1000)",
        "calculations": {
          "rangeMatched": "Small",
          "baseCost": 7000,
          "unitsMultiplier": 1,
          "printingType": "bothSide"
        },
        "cost": 7000.00
      },
      {
        "sectionNumber": 5,
        "sectionName": "Lamination Cost",
        "description": "Lamination cost based on type",
        "formula": "(Length × Width / 144) × Rate × Units",
        "calculations": {
          "laminationType": "matt",
          "singleUnitCost": 1.01,
          "totalUnits": 250
        },
        "cost": 253.47
      },
      {
        "sectionNumber": 6,
        "sectionName": "Die Making Cost",
        "description": "One-time die making cost",
        "formula": "Calculated Length × Calculated Width × 9",
        "calculations": {
          "calculatedLength": 20.5,
          "calculatedWidth": 15,
          "multiplier": 9
        },
        "cost": 1845.00
      },
      {
        "sectionNumber": 7,
        "sectionName": "Die Cutting Cost",
        "description": "Die cutting cost per 1000 units",
        "formula": "1000 × ceil(Units / 1000)",
        "calculations": {
          "costPer1000": 1000,
          "multiplier": 1
        },
        "cost": 1000.00
      },
      {
        "sectionNumber": 8,
        "sectionName": "Pasting Cost",
        "description": "Pasting cost per 1000 units",
        "formula": "1000 × ceil(Units / 1000)",
        "calculations": {
          "costPer1000": 1000,
          "multiplier": 1
        },
        "cost": 1000.00
      },
      {
        "sectionNumber": 9,
        "sectionName": "Two-Piece Box Multiplier",
        "description": "Multiplies total by 2 if enabled",
        "formula": "Sum(Sections 1-8) × 2",
        "calculations": {
          "enabled": false,
          "sumOfPreviousSections": 13817.02,
          "multiplier": 2,
          "additionalCost": 0
        },
        "cost": 0.00
      },
      {
        "sectionNumber": 10,
        "sectionName": "Both Side Printing Surcharge",
        "description": "10% surcharge for both side printing",
        "formula": "Sum(Sections 1-9) × 10%",
        "calculations": {
          "applicable": true,
          "sumOfPreviousSections": 13817.02,
          "percentage": 10
        },
        "cost": 1381.70
      },
      {
        "sectionNumber": 11,
        "sectionName": "Vendor Percentage",
        "description": "Vendor markup percentage",
        "formula": "Sum(Sections 1-10) × 25%",
        "calculations": {
          "sumOfPreviousSections": 14998.72,
          "percentage": 25
        },
        "cost": 3749.68
      },
      {
        "sectionNumber": 12,
        "sectionName": "Shipping Cost",
        "description": "Shipping cost based on weight",
        "formula": "Based on shipping tier",
        "calculations": {
          "weightOf100Units": 158.06,
          "singleUnitWeight": 1.42,
          "totalWeight": 355.64,
          "tierMatched": "70+ kg",
          "shippingCost": 10668
        },
        "cost": 10668.00
      }
    ],
    "summary": {
      "subtotal": 29616.40,
      "totalSections": 12,
      "pricePerUnit": 118.47
    }
  }
}
```

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── pricing-formulas/
│   │   │   ├── page.tsx                    # List all products
│   │   │   └── [productId]/
│   │   │       └── edit/
│   │   │           └── page.tsx            # Edit product formulas
│   │   └── ...
│   ├── api/
│   │   ├── admin/
│   │   │   └── pricing-formulas/
│   │   │       ├── route.ts                # GET, POST
│   │   │       └── [productId]/
│   │   │           └── route.ts            # GET, PUT, DELETE
│   │   └── pricing/
│   │       └── calculate/
│   │           └── route.ts                # POST - Calculate price
│   ├── pricing/
│   │   └── page.tsx                        # User pricing calculator
│   └── components/
│       ├── admin/
│       │   ├── FormulaEditor/
│       │   │   ├── MaterialCostEditor.tsx
│       │   │   ├── PlatesCostEditor.tsx
│       │   │   ├── PrintingCostEditor.tsx
│       │   │   ├── LaminationEditor.tsx
│       │   │   ├── DieMakingEditor.tsx
│       │   │   ├── DieCuttingEditor.tsx
│       │   │   ├── PastingEditor.tsx
│       │   │   ├── TwoPieceBoxEditor.tsx
│       │   │   ├── BothSideEditor.tsx
│       │   │   ├── VendorEditor.tsx
│       │   │   └── ShippingEditor.tsx
│       │   └── RangeManager.tsx
│       └── pricing/
│           ├── PricingForm.tsx
│           └── PriceBreakdown.tsx
├── lib/
│   ├── pricing/
│   │   ├── calculator.ts                   # Main calculation engine
│   │   ├── materialCost.ts                 # Section 1
│   │   ├── platesCost.ts                   # Section 3
│   │   ├── printingCost.ts                 # Section 4
│   │   ├── laminationCost.ts               # Section 5
│   │   ├── dieMakingCost.ts                # Section 6
│   │   ├── dieCuttingCost.ts               # Section 7
│   │   ├── pastingCost.ts                  # Section 8
│   │   ├── twoPieceBox.ts                  # Section 9
│   │   ├── bothSideSurcharge.ts            # Section 10
│   │   ├── vendorPercentage.ts             # Section 11
│   │   └── shippingCost.ts                 # Section 12
│   └── types/
│       └── pricing-formulas.ts             # TypeScript interfaces
└── ...
```

## Testing Strategy

### Unit Tests
- ✅ Test each section calculation independently
- ✅ Test edge cases (0 values, very large numbers)
- ✅ Test range matching logic
- ✅ Test GSM table lookups

### Integration Tests
- ✅ Test complete pricing calculation flow
- ✅ Test API endpoints
- ✅ Test formula updates in DB

### Manual Testing Checklist
- [ ] Calculate price for Kraft product
- [ ] Calculate price for Cardboard product
- [ ] Calculate price for Corrugated product
- [ ] Test with minimum quantity (1 unit)
- [ ] Test with maximum quantity (20,000+ units)
- [ ] Test all printing options
- [ ] Test all lamination options
- [ ] Verify Two-Piece Box multiplier
- [ ] Verify Both Side surcharge
- [ ] Test formula editing and saving
- [ ] Test range adding/editing/deleting
- [ ] Verify calculations match manual calculations

---

**Ready to begin implementation!**

