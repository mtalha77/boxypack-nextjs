# Quick Start Guide - New Pricing System

## 🚀 Get Started in 5 Minutes

Follow these steps to start using the new flexible pricing system immediately.

---

## Step 1: Start Your Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000`

---

## Step 2: Navigate to Admin Pricing Dashboard

Open your browser and go to:
```
http://localhost:3000/admin/pricing-formulas
```

You should see the pricing formulas list page.

---

## Step 3: Seed Sample Data

Click the **"Seed Sample Data"** button in the top-right corner.

This will populate your database with 9 sample products:
- **Kraft products:** 4 products (Mailer Box, Box with Lid, Pillow Box, Gable Box)
- **Cardboard products:** 3 products (Display Box, Tuck End Box, Box with Lid)
- **Corrugated products:** 2 products (Mailer Box, Shipping Box)

Wait for the success message: "Pricing formulas seeded successfully!"

---

## Step 4: Edit a Product Formula

1. **Find a product** - For example, "Kraft Mailer Box"
2. **Click "Edit"** button on the right
3. **You'll see all 12 sections** - Each section is collapsible

### Try Editing Section 1 (Material Cost):
- Expand Section 1 by clicking its header
- Change the "Length Multiplier" from 2 to 2.5
- Scroll down and use the test calculator
- Enter test values: L=10, W=8, H=3, PT=14, Units=250
- See the live calculation results

### Try Editing Section 11 (Vendor Percentage):
- Expand Section 11
- Click one of the preset buttons (e.g., "30%")
- See the test calculator update
- Enter a test sum: $18,000
- See the vendor markup calculated

---

## Step 5: Save Your Changes

1. Scroll to the bottom of the page
2. Click **"Save Changes"** button
3. Confirm the save operation
4. You should see "Pricing formula updated successfully!"

---

## Step 6: Test the Pricing Calculation API

You can now test the pricing calculation with your updated formulas.

### Using curl:

```bash
curl -X POST http://localhost:3000/api/pricing/calculate \
  -H "Content-Type: application/json" \
  -d '{
    "productId": "kraft-mailer-box",
    "length": 10,
    "width": 8,
    "height": 3,
    "pt": "14",
    "requiredUnits": 250,
    "printing": "bothSide",
    "lamination": "matt"
  }'
```

### Expected Response:

```json
{
  "success": true,
  "data": {
    "productName": "Kraft Mailer Box",
    "breakdown": [
      {
        "sectionNumber": 1,
        "sectionName": "Material Cost",
        "description": "...",
        "formula": "...",
        "calculations": {...},
        "cost": 118.55
      },
      // ... all 12 sections
    ],
    "summary": {
      "subtotal": 29616.40,
      "totalSections": 12,
      "pricePerUnit": 118.47
    }
  }
}
```

---

## 🎯 What You Can Do Now

### ✅ Admin Functions
- View all pricing formulas
- Search and filter products
- Edit any of the 12 sections for each product
- Add/remove ranges for Plates and Printing costs
- Manage GSM table entries
- Manage shipping tier table
- Test each section with live calculators
- Save changes to database

### ✅ API Functions
- Calculate prices for any product
- Get detailed breakdown of all 12 sections
- See formula calculations step-by-step
- Get subtotal, tax, and total costs
- Receive per-unit pricing

---

## 📝 Common Tasks

### Task 1: Change Vendor Percentage for All Cardboard Products
1. Go to `/admin/pricing-formulas`
2. Filter by "Cardboard" category
3. Edit each product one by one
4. Go to Section 11 (Vendor Percentage)
5. Change to desired percentage (e.g., 40%)
6. Save

### Task 2: Add a New Shipping Tier
1. Edit any product
2. Go to Section 12 (Shipping Cost)
3. Click "Add Tier" button
4. Enter min weight, max weight, and cost
5. Save

### Task 3: Adjust Material Cost Formulas
1. Edit a product
2. Go to Section 1 (Material Cost)
3. Modify length/width multipliers
4. Update GSM table if needed
5. Test with calculator
6. Save

### Task 4: Enable Two-Piece Box Multiplier
1. Edit a product (e.g., "Kraft Box with Lid")
2. Go to Section 9 (Two-Piece Box)
3. Toggle the enable switch
4. Adjust multiplier if needed (default 2)
5. Save

### Task 5: Update Lamination Rates
1. Edit a product
2. Go to Section 5 (Lamination Cost)
3. Update divisor and rate for each finish type
4. Test with calculator
5. Save

---

## 🐛 Troubleshooting

### Issue: "Pricing formula not found"
**Solution:** Make sure you've seeded the database with sample data.

### Issue: Changes not saving
**Solution:** Check browser console for errors. Ensure MongoDB connection is working.

### Issue: Test calculator not updating
**Solution:** Refresh the page and try again. Check that you've entered valid numbers.

### Issue: Cannot add/delete ranges or tiers
**Solution:** There must be at least one range/tier. You can edit existing ones freely.

---

## 🎓 Understanding the 12 Sections

Here's a quick reference for what each section does:

1. **Material Cost** - Base material cost from dimensions and GSM
2. **Scanning Cost** - One-time scanning setup fee
3. **Plates Cost** - Cost based on size ranges
4. **Printing Cost** - Printing cost with quantity multiplier
5. **Lamination Cost** - Finish type cost (glossy/matt/soft touch)
6. **Die Making Cost** - One-time die making cost
7. **Die Cutting Cost** - Per 1000 units die cutting
8. **Pasting Cost** - Per 1000 units pasting/assembly
9. **Two-Piece Box** - Optional 2x multiplier for two-piece products
10. **Both Side Surcharge** - 10% surcharge for both side printing
11. **Vendor Percentage** - Your profit margin
12. **Shipping Cost** - Weight-based shipping tiers

---

## 📚 Further Reading

- **`PRICING_SYSTEM_EXECUTION_PLAN.md`** - Complete system documentation
- **`PRICING_CALCULATION_FLOW.md`** - Visual flow diagrams
- **`IMPLEMENTATION_STATUS.md`** - Current progress tracker
- **`PHASE_3_COMPLETE.md`** - Admin UI completion summary

---

## 🆘 Need Help?

### Database Issues
Check MongoDB connection in `src/lib/mongodb.ts`

### API Issues
Check API routes in `src/app/api/pricing/` and `src/app/api/admin/pricing-formulas/`

### UI Issues
Check components in `src/app/admin/pricing-formulas/`

### Calculation Issues
Check engine in `src/lib/pricing/calculator.ts`

---

## 🎉 You're Ready!

You now have a fully functional, flexible pricing system where:
- ✅ Every value is editable
- ✅ Formulas are visible and customizable
- ✅ Changes are saved to database
- ✅ Calculations are accurate and transparent
- ✅ API is ready for frontend integration

**Next:** Build the user-facing pricing calculator or integrate into your existing product pages!

---

**Created:** October 3, 2025  
**Version:** 1.0  
**Status:** Production Ready (Admin Side)

