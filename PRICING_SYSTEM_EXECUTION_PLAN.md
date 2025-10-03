# Pricing System Execution Plan

## Overview
This document outlines the complete execution plan for implementing a flexible, formula-based pricing system with 11 configurable sections. Each product will have the same structure but editable values and formulas.

---

## 1. User Inputs (Frontend Form)

The system will collect the following inputs from users:

| Input Field | Type | Description |
|------------|------|-------------|
| Product Selection | Dropdown | Select from available products |
| Length | Number (inches) | Product length |
| Width | Number (inches) | Product width |
| Height | Number (inches) | Product height |
| PT | Dropdown | Paper thickness (14, 16, 18, N/A) - For Cardboard & Kraft only |
| Required Units | Number | Quantity user wants to order |
| Printing | Radio/Dropdown | Options: Single Side, Both Side, None |
| Lamination | Radio/Dropdown | Options: Glossy, Matt, Soft Touch, None |

---

## 2. Pricing Calculation Sections (11 Sections)

### **Section 1: Material Cost**

**Description:** Calculates the material cost based on dimensions, GSM values, and weight calculations.

**Formula Variables (Editable per product):**
```javascript
{
  // Calculated Length Formula
  lengthFormula: {
    lengthMultiplier: 2,        // Length x 2
    widthMultiplier: 2,         // Width x 2  
    additionalInches: 1.5       // + 1.5
  },
  
  // Calculated Width Formula
  widthFormula: {
    heightMultiplier: 2,        // Height x 2
    lengthAdded: true,          // + Length
    additionalInches: 2         // + 2
  },
  
  // GSM Table
  gsmTable: [
    { pt: "14", gsm: 250, kraft: 400, cardboard: 300, corrugated: null },
    { pt: "16", gsm: 300, kraft: 400, cardboard: 300, corrugated: null },
    { pt: "18", gsm: 350, kraft: 400, cardboard: 300, corrugated: null },
    { pt: "N/A", gsm: 700, kraft: null, cardboard: null, corrugated: 300 }
  ],
  
  // Weight Calculation
  weightOf100Units: {
    divisor: 15500              // Editable divisor
  },
  
  // Cost Calculation
  costOf100Units: {
    rate: 300                   // Editable rate
  }
}
```

**Calculation Steps:**
1. Calculated Length = (Length × lengthMultiplier) + (Width × widthMultiplier) + additionalInches
2. Calculated Width = (Height × heightMultiplier) + Length + additionalInches
3. Get GSM value from table based on PT selection and material type
4. Weight of 100 units = (Calculated Length × Calculated Width × GSM) / divisor
5. Cost of 100 units = Weight of 100 units × rate
6. **Final Material Cost = (Cost of 100 units / 100) × Required Units**

---

### **Section 2: Scanning Cost**

**Description:** One-time scanning cost for setup.

**Formula Variables (Editable per product):**
```javascript
{
  scanningCost: 200            // Fixed cost, editable
}
```

**Calculation:**
- **Final Scanning Cost = scanningCost** (if applicable)

---

### **Section 3: Plates Cost**

**Description:** Cost based on calculated length ranges with different pricing for printing types.

**Formula Variables (Editable per product):**
```javascript
{
  platesCostRanges: [
    {
      name: "Small",
      lengthMin: 0.1,
      lengthMax: 12.5,
      widthMin: 0.1,
      widthMax: 18,
      costs: {
        outside: 1200,
        inside: 1200,
        bothSide: 2400,
        none: 0
      }
    },
    {
      name: "Medium",
      lengthMin: 12.6,
      lengthMax: 18,
      widthMin: 18.1,
      widthMax: 25,
      costs: {
        outside: 2400,
        inside: 2400,
        bothSide: 4800,
        none: 0
      }
    },
    {
      name: "Large",
      lengthMin: 18.1,
      lengthMax: 20,
      widthMin: 25.1,
      widthMax: 30,
      costs: {
        outside: 5000,
        inside: 5000,
        bothSide: 10000,
        none: 0
      }
    },
    {
      name: "Extra Large",
      lengthMin: 20.1,
      lengthMax: 28,
      widthMin: 30.1,
      widthMax: 40,
      costs: {
        outside: 8000,
        inside: 8000,
        bothSide: 16000,
        none: 0
      }
    }
  ]
}
```

**Calculation:**
1. Check if calculated length AND calculated width fall within range
2. Get cost based on printing selection (outside/inside/bothSide/none)
3. **Final Plates Cost = matched range cost**

---

### **Section 4: Printing Cost**

**Description:** Cost based on length ranges and quantity (per 1000 units rule).

**Formula Variables (Editable per product):**
```javascript
{
  printingCostRanges: [
    {
      name: "Small",
      lengthMin: 0.1,
      lengthMax: 12.5,
      widthMin: 0.1,
      widthMax: 18,
      costs: {
        outside: 3500,
        inside: 3500,
        bothSide: 7000,
        none: 0
      }
    },
    {
      name: "Medium",
      lengthMin: 12.6,
      lengthMax: 18,
      widthMin: 18.1,
      widthMax: 25,
      costs: {
        outside: 6000,
        inside: 6000,
        bothSide: 12000,
        none: 0
      }
    },
    {
      name: "Large",
      lengthMin: 18.1,
      lengthMax: 20,
      widthMin: 25.1,
      widthMax: 30,
      costs: {
        outside: 8000,
        inside: 8000,
        bothSide: 16000,
        none: 0
      }
    },
    {
      name: "Extra Large",
      lengthMin: 20.1,
      lengthMax: 28,
      widthMin: 30.1,
      widthMax: 40,
      costs: {
        outside: 10000,
        inside: 10000,
        bothSide: 20000,
        none: 0
      }
    }
  ]
}
```

**Calculation:**
1. Check if calculated length AND width fall within range
2. Get base cost based on printing selection
3. Calculate multiplier: `ceil(Required Units / 1000)`
   - 1-1000 units = 1x
   - 1001-2000 units = 2x
   - 2001-3000 units = 3x
   - etc.
4. **Final Printing Cost = base cost × multiplier**

---

### **Section 5: Lamination Cost**

**Description:** Cost based on lamination type selected by user.

**Formula Variables (Editable per product):**
```javascript
{
  lamination: {
    glossy: {
      divisor: 144,             // Length × Width / 144
      rate: 3.5                 // Result × 3.5
    },
    matt: {
      divisor: 144,
      rate: 3.5
    },
    softTouch: {
      divisor: 144,
      rate: 20                  // Higher rate for soft touch
    },
    none: {
      cost: 0
    }
  }
}
```

**Calculation:**
- **For Glossy/Matt:**
  1. Single unit cost = (Calculated Length × Calculated Width / divisor) × rate
  2. **Final Lamination Cost = Single unit cost × Required Units**

- **For Soft Touch:**
  1. Single unit cost = (Calculated Length × Calculated Width / divisor) × rate
  2. **Final Lamination Cost = Single unit cost × Required Units**

- **For None:** Final Lamination Cost = 0

---

### **Section 6: Die Making Cost**

**Description:** One-time die making cost.

**Formula Variables (Editable per product):**
```javascript
{
  dieMaking: {
    multiplier: 9              // Length × Width × 9
  }
}
```

**Calculation:**
- **Final Die Making Cost = Calculated Length × Calculated Width × multiplier**

---

### **Section 7: Die Cutting Cost**

**Description:** Cost per 1000 units with multiplier based on quantity.

**Formula Variables (Editable per product):**
```javascript
{
  dieCutting: {
    costPer1000: 1000          // Base cost per 1000 units
  }
}
```

**Calculation:**
1. Calculate multiplier: `ceil(Required Units / 1000)`
   - 1-1000 = 1x = 1000
   - 1001-2000 = 2x = 2000
   - 2001-3000 = 3x = 3000
2. **Final Die Cutting Cost = costPer1000 × multiplier**

---

### **Section 8: Pasting Cost**

**Description:** Cost per 1000 units with multiplier based on quantity.

**Formula Variables (Editable per product):**
```javascript
{
  pasting: {
    costPer1000: 1000          // Base cost per 1000 units
  }
}
```

**Calculation:**
1. Calculate multiplier: `ceil(Required Units / 1000)`
   - 1-1000 = 1x = 1000
   - 1001-2000 = 2x = 2000
   - 2001-3000 = 3x = 3000
2. **Final Pasting Cost = costPer1000 × multiplier**

---

### **Section 9: Two-Piece Box Multiplier**

**Description:** Multiplies all previous costs by 2 if enabled.

**Formula Variables (Editable per product):**
```javascript
{
  twoPieceBox: {
    enabled: false,            // Boolean: true/false
    multiplier: 2              // 2x multiplier
  }
}
```

**Calculation:**
- If enabled:
  - Sum all sections 1-8
  - **Additional Cost = Sum of Sections 1-8 × (multiplier - 1)**

---

### **Section 10: Both Side Printing Surcharge**

**Description:** Adds 10% surcharge if both side printing is selected.

**Formula Variables (Editable per product):**
```javascript
{
  bothSidePrintingSurcharge: {
    percentage: 10             // 10% surcharge
  }
}
```

**Calculation:**
- If printing = "Both Side":
  - Sum all previous sections (1-9)
  - **Both Side Surcharge = Sum × (percentage / 100)**

---

### **Section 11: Vendor Percentage**

**Description:** Applies a custom vendor percentage markup.

**Formula Variables (Editable per product):**
```javascript
{
  vendorPercentage: {
    percentage: 25             // Custom percentage (e.g., 25%)
  }
}
```

**Calculation:**
- Sum all previous sections (1-10)
- **Vendor Cost = Sum × (percentage / 100)**

---

### **Section 12: Shipping Cost**

**Description:** Calculates shipping based on total weight and shipping tiers.

**Formula Variables (Editable per product):**
```javascript
{
  shipping: {
    weightCalculation: {
      multiplier: 0.9,         // k × 0.9
      divisor: 100             // / 100
    },
    shippingTiers: [
      { minWeight: 0, maxWeight: 0.5, cost: 7253 },
      { minWeight: 0.5, maxWeight: 1, cost: 9103 },
      { minWeight: 1, maxWeight: 1.5, cost: 10668 },
      // ... (full shipping table from CSV)
      { minWeight: 70, maxWeight: Infinity, cost: 2250 }
    ]
  }
}
```

**Calculation:**
1. Single unit weight = (k × multiplier) / divisor
   - Where k = Weight of 100 units from Section 1
2. Total weight = Single unit weight × Required Units
3. Find matching shipping tier
4. **Final Shipping Cost = matched tier cost**

---

## 3. Database Schema

### Collection: `productPricingFormulas`

```javascript
{
  _id: ObjectId,
  productId: String,                    // Reference to product
  productName: String,
  category: String,                     // kraft, cardboard, corrugated, etc.
  
  // Section 1: Material Cost
  materialCost: {
    lengthFormula: {
      lengthMultiplier: Number,
      widthMultiplier: Number,
      additionalInches: Number
    },
    widthFormula: {
      heightMultiplier: Number,
      lengthAdded: Boolean,
      additionalInches: Number
    },
    gsmTable: [{
      pt: String,
      gsm: Number,
      kraft: Number,
      cardboard: Number,
      corrugated: Number
    }],
    weightOf100Units: {
      divisor: Number
    },
    costOf100Units: {
      rate: Number
    }
  },
  
  // Section 2: Scanning Cost
  scanningCost: {
    cost: Number
  },
  
  // Section 3: Plates Cost
  platesCost: {
    ranges: [{
      name: String,
      lengthMin: Number,
      lengthMax: Number,
      widthMin: Number,
      widthMax: Number,
      costs: {
        outside: Number,
        inside: Number,
        bothSide: Number,
        none: Number
      }
    }]
  },
  
  // Section 4: Printing Cost
  printingCost: {
    ranges: [{
      name: String,
      lengthMin: Number,
      lengthMax: Number,
      widthMin: Number,
      widthMax: Number,
      costs: {
        outside: Number,
        inside: Number,
        bothSide: Number,
        none: Number
      }
    }]
  },
  
  // Section 5: Lamination Cost
  laminationCost: {
    glossy: {
      divisor: Number,
      rate: Number
    },
    matt: {
      divisor: Number,
      rate: Number
    },
    softTouch: {
      divisor: Number,
      rate: Number
    }
  },
  
  // Section 6: Die Making Cost
  dieMakingCost: {
    multiplier: Number
  },
  
  // Section 7: Die Cutting Cost
  dieCuttingCost: {
    costPer1000: Number
  },
  
  // Section 8: Pasting Cost
  pastingCost: {
    costPer1000: Number
  },
  
  // Section 9: Two-Piece Box Multiplier
  twoPieceBox: {
    enabled: Boolean,
    multiplier: Number
  },
  
  // Section 10: Both Side Printing Surcharge
  bothSidePrintingSurcharge: {
    percentage: Number
  },
  
  // Section 11: Vendor Percentage
  vendorPercentage: {
    percentage: Number
  },
  
  // Section 12: Shipping Cost
  shippingCost: {
    weightCalculation: {
      multiplier: Number,
      divisor: Number
    },
    shippingTiers: [{
      minWeight: Number,
      maxWeight: Number,
      cost: Number
    }]
  },
  
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 4. API Endpoints

### Product Pricing Formulas

```
GET    /api/admin/pricing-formulas                    # List all products with formulas
GET    /api/admin/pricing-formulas/:productId         # Get specific product formulas
POST   /api/admin/pricing-formulas                    # Create new product formulas
PUT    /api/admin/pricing-formulas/:productId         # Update product formulas
DELETE /api/admin/pricing-formulas/:productId         # Delete product formulas
```

### Pricing Calculation

```
POST   /api/pricing/calculate                         # Calculate price based on inputs
```

**Request Body:**
```javascript
{
  productId: String,
  length: Number,
  width: Number,
  height: Number,
  pt: String,
  requiredUnits: Number,
  printing: String,        // "outside", "inside", "bothSide", "none"
  lamination: String       // "glossy", "matt", "softTouch", "none"
}
```

**Response:**
```javascript
{
  success: true,
  data: {
    breakdown: [
      {
        section: "Material Cost",
        description: "Calculated based on dimensions and GSM",
        formula: "((L×2 + W×2 + 1.5) × (H×2 + L + 2) × GSM / 15500) × 300 / 100 × Units",
        calculations: {
          calculatedLength: 20.5,
          calculatedWidth: 15,
          gsm: 400,
          weightOf100Units: 158.06,
          costOf100Units: 47.42,
          finalCost: 118.55
        },
        cost: 118.55
      },
      // ... other sections
    ],
    subtotal: 1234.56,
    total: 1234.56
  }
}
```

---

## 5. Admin Dashboard UI

### Page: `/admin/pricing-formulas`

**Features:**
- List all products with pricing formulas
- Search and filter by category
- "Edit Formulas" button for each product
- "Add New Product" button

### Page: `/admin/pricing-formulas/:productId/edit`

**Layout:** Accordion-style sections (collapsible)

**Each Section Contains:**
1. **Section Header:** Name + toggle button
2. **Description:** How the section calculates cost
3. **Formula Display:** Visual formula with editable fields
4. **Input Fields:** All editable values with labels
5. **Test Calculator:** Quick test with sample inputs
6. **Save Button:** Save changes to DB

**Example for Material Cost Section:**

```
┌─────────────────────────────────────────────────────┐
│ Section 1: Material Cost ▼                         │
├─────────────────────────────────────────────────────┤
│ Description:                                        │
│ Calculates material cost based on dimensions,      │
│ GSM values, and weight calculations.               │
│                                                     │
│ Formula:                                           │
│ Calculated Length = (L × [2]) + (W × [2]) + [1.5] │
│ Calculated Width = (H × [2]) + L + [2]            │
│ Weight of 100 = (CalcL × CalcW × GSM) / [15500]   │
│ Cost of 100 = Weight × [300]                       │
│ Final Cost = (Cost of 100 / 100) × Units          │
│                                                     │
│ Length Formula:                                    │
│ ├─ Length Multiplier: [2    ]                     │
│ ├─ Width Multiplier:  [2    ]                     │
│ └─ Additional Inches: [1.5  ]                     │
│                                                     │
│ Width Formula:                                     │
│ ├─ Height Multiplier: [2    ]                     │
│ ├─ Add Length:        [✓] Yes                     │
│ └─ Additional Inches: [2    ]                     │
│                                                     │
│ GSM Table:                                         │
│ ┌────────────────────────────────────────┐        │
│ │ PT  │ GSM │ Kraft │ Cardboard │ Corr.  │        │
│ ├────────────────────────────────────────┤        │
│ │ 14  │ 250 │ 400   │ 300       │ -      │        │
│ │ 16  │ 300 │ 400   │ 300       │ -      │        │
│ │ 18  │ 350 │ 400   │ 300       │ -      │        │
│ │ N/A │ 700 │ -     │ -         │ 300    │        │
│ └────────────────────────────────────────┘        │
│ [Edit Table]                                       │
│                                                     │
│ Weight Calculation:                                │
│ └─ Divisor: [15500]                               │
│                                                     │
│ Cost Calculation:                                  │
│ └─ Rate: [300]                                    │
│                                                     │
│ Test Calculator:                                   │
│ L: [10] W: [8] H: [3] PT: [14] Units: [250]      │
│ → Result: $118.55                                  │
│                                                     │
│ [Save Changes]                                     │
└─────────────────────────────────────────────────────┘
```

---

## 6. Frontend Pricing Calculator

### Page: `/pricing` (User-facing)

**Features:**
1. **Product Selection Dropdown**
2. **Dimensions Input:** Length, Width, Height
3. **PT Selection:** (shown only for Kraft/Cardboard)
4. **Quantity Input**
5. **Printing Options:** Radio buttons
6. **Lamination Options:** Radio buttons
7. **Real-time Price Display**
8. **Detailed Breakdown:** Expandable accordion showing all 12 sections
9. **Get Quote Button:** Save quote and proceed

---

## 7. Implementation Phases

### **Phase 1: Database & Types (Days 1-2)**
- [ ] Create TypeScript interfaces for pricing formulas
- [ ] Design MongoDB schema
- [ ] Create migration script for existing products
- [ ] Seed initial pricing formulas for sample products

### **Phase 2: Backend API (Days 3-4)**
- [ ] Create pricing formula CRUD endpoints
- [ ] Implement pricing calculation engine
- [ ] Add validation logic
- [ ] Write unit tests for calculations

### **Phase 3: Admin UI (Days 5-7)**
- [ ] Build product list page
- [ ] Create formula editor with 12 sections
- [ ] Add range management (add/edit/delete ranges)
- [ ] Implement test calculator per section
- [ ] Add save functionality

### **Phase 4: Frontend Calculator (Days 8-9)**
- [ ] Build user pricing form
- [ ] Implement real-time calculation
- [ ] Create breakdown display
- [ ] Add loading states and error handling

### **Phase 5: Testing & Refinement (Days 10-11)**
- [ ] Test all 12 sections with various inputs
- [ ] Validate formulas against CSV data
- [ ] Fix bugs and edge cases
- [ ] Performance optimization

### **Phase 6: Documentation & Deployment (Day 12)**
- [ ] Create admin user guide
- [ ] Document API endpoints
- [ ] Deploy to production
- [ ] Monitor and collect feedback

---

## 8. Key Features

✅ **Fully Editable:** All values and formulas customizable per product  
✅ **Formula Visibility:** Admins can see and understand each calculation  
✅ **Range Management:** Dynamic length/width ranges for plates and printing  
✅ **Real-time Calculation:** Instant price updates as user changes inputs  
✅ **Detailed Breakdown:** Transparent pricing with step-by-step calculations  
✅ **Test Mode:** Test formulas before saving  
✅ **Audit Trail:** Track all formula changes  
✅ **Copy Formulas:** Duplicate from one product to another  

---

## 9. Technical Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **Validation:** Zod
- **State Management:** React hooks
- **UI Components:** Custom components with Radix UI primitives

---

## 10. Success Metrics

- Admin can edit any pricing formula in < 2 minutes
- Price calculation completes in < 500ms
- 100% accuracy compared to manual calculations
- Zero formula errors after testing phase
- Easy to onboard new products with pricing

---

## Next Steps

1. **Review & Approve** this plan
2. **Clarify** any questions or modifications needed
3. **Begin Phase 1** implementation
4. **Iterative review** after each phase

Would you like me to proceed with implementing this plan, or would you like to modify any sections?

