'use client';

import React, { useState } from 'react';
import { RigidProductPricingFormula, RigidShippingCostFormula, ShippingTier } from '@/lib/types/pricing-formulas-rigid';
import { Trash2, Plus } from 'lucide-react';

interface Props {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidShippingCostFormula) => void;
}

export default function RigidShippingCostEditor({ formula, onUpdate }: Props) {
  const [config, setConfig] = useState(formula.shippingCost);
  
  // Test values
  const [testLength, setTestLength] = useState(10);
  const [testWidth, setTestWidth] = useState(8);
  const [testHeight, setTestHeight] = useState(3);
  const [testUnits, setTestUnits] = useState(500);

  const handleUpdate = (newConfig: RigidShippingCostFormula) => {
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const addTier = () => {
    const lastTier = config.shippingTiers[config.shippingTiers.length - 1];
    const newTier: ShippingTier = {
      minWeight: lastTier.maxWeight,
      maxWeight: lastTier.maxWeight + 5,
      cost: lastTier.cost + 1000
    };
    handleUpdate({ ...config, shippingTiers: [...config.shippingTiers, newTier] });
  };

  const deleteTier = (index: number) => {
    if (config.shippingTiers.length <= 1) {
      alert('Must have at least one tier');
      return;
    }
    handleUpdate({ ...config, shippingTiers: config.shippingTiers.filter((_, i) => i !== index) });
  };

  const updateTier = (index: number, field: string, value: string | number) => {
    const newTiers = [...config.shippingTiers];
    newTiers[index] = { ...newTiers[index], [field]: value };
    handleUpdate({ ...config, shippingTiers: newTiers });
  };

  const calculateTest = () => {
    // Step 1: Convert dimensions to cm
    const lengthCm = (testLength * 2.54) + 1;
    const widthCm = testWidth * 2.54;
    const heightCm = testHeight * 2.54;

    // Step 2: Calculate required units (cube root rounded up)
    const requiredUnitsCalculated = Math.ceil(Math.pow(testUnits, 1/3));

    // Step 3: Calculate temp
    const temp = Math.ceil(Math.sqrt(testUnits / requiredUnitsCalculated));

    // Step 4: Calculate temp2
    const temp2 = Math.ceil(testUnits / (requiredUnitsCalculated * temp));

    // Step 5: Calculate weight in kgs
    const weightInKgs = ((lengthCm * requiredUnitsCalculated) * (widthCm * temp) * (heightCm * temp2)) / 5000;

    // Step 6: Find matching tier
    const matchedTier = config.shippingTiers.find(t => weightInKgs >= t.minWeight && weightInKgs < t.maxWeight);
    let shippingCost: number;
    let tierMatched: string;

    if (matchedTier) {
      shippingCost = matchedTier.cost;
      tierMatched = `${matchedTier.minWeight}-${matchedTier.maxWeight} kg`;
    } else {
      const baseCost = 183454;
      const perKgRate = 2250;
      shippingCost = baseCost + (weightInKgs * perKgRate);
      tierMatched = `70+ kg`;
    }

    return {
      lengthCm,
      widthCm,
      heightCm,
      requiredUnitsCalculated,
      temp,
      temp2,
      weightInKgs,
      tierMatched,
      shippingCost
    };
  };

  const testResult = calculateTest();

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Rigid Shipping Cost (NEW FORMULA):</h4>
        <p className="text-blue-800 text-sm">Volumetric weight calculation based on dimensions and quantity:</p>
        <ol className="text-blue-800 text-sm mt-2 ml-4 list-decimal space-y-1">
          <li>Convert user dimensions to cm: (L×2.54)+1, W×2.54, H×2.54</li>
          <li>requiredUnitsCalc = ROUNDUP(Quantity^(1/3))</li>
          <li>temp = ROUNDUP(SQRT(Quantity / requiredUnitsCalc))</li>
          <li>temp2 = CEILING(Quantity / (requiredUnitsCalc × temp))</li>
          <li>Weight(kg) = ((lengthCm × requiredUnitsCalc) × (widthCm × temp) × (heightCm × temp2)) / 5000</li>
          <li>Match weight to shipping tier</li>
        </ol>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> The shipping weight calculation is fixed in the formula:
          <br/>• Dimensions converted to cm: (L×2.54)+1, W×2.54, H×2.54
          <br/>• Weight calculated using volumetric formula
          <br/>• No editable multipliers - formula is hardcoded for consistency
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">Shipping Tiers</h4>
          <button
            onClick={addTier}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Tier
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto border border-gray-200 rounded">
          <table className="min-w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Min Weight (kg)</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Max Weight (kg)</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Cost (PKR)</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {config.shippingTiers.map((tier, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={tier.minWeight}
                      onChange={(e) => updateTier(index, 'minWeight', Number(e.target.value))}
                      step="0.1"
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={tier.maxWeight === Infinity ? 'Infinity' : tier.maxWeight}
                      onChange={(e) => {
                        const val = e.target.value === 'Infinity' ? Infinity : Number(e.target.value);
                        updateTier(index, 'maxWeight', val);
                      }}
                      step="0.1"
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={tier.cost}
                      onChange={(e) => updateTier(index, 'cost', Number(e.target.value))}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => deleteTier(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {config.shippingTiers.length} tiers configured
        </p>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-4 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
            <input
              type="number"
              value={testLength}
              onChange={(e) => setTestLength(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
            <input
              type="number"
              value={testWidth}
              onChange={(e) => setTestWidth(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
            <input
              type="number"
              value={testHeight}
              onChange={(e) => setTestHeight(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
            <input
              type="number"
              value={testUnits}
              onChange={(e) => setTestUnits(Number(e.target.value))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="bg-white rounded p-3 text-sm space-y-1">
          <p><strong>Step 1 - Dimensions in cm:</strong></p>
          <p className="ml-4">Length: {testResult.lengthCm.toFixed(2)} cm</p>
          <p className="ml-4">Width: {testResult.widthCm.toFixed(2)} cm</p>
          <p className="ml-4">Height: {testResult.heightCm.toFixed(2)} cm</p>
          <hr className="my-2" />
          <p><strong>Step 2 - Required Units Calculated:</strong> {testResult.requiredUnitsCalculated}</p>
          <p><strong>Step 3 - Temp:</strong> {testResult.temp}</p>
          <p><strong>Step 4 - Temp2:</strong> {testResult.temp2}</p>
          <hr className="my-2" />
          <p><strong>Step 5 - Weight:</strong> {testResult.weightInKgs.toFixed(2)} kg</p>
          <p><strong>Step 6 - Matched Tier:</strong> {testResult.tierMatched}</p>
          <p className="text-xl font-bold text-purple-700 mt-2 pt-2 border-t">
            Shipping Cost: {testResult.shippingCost.toFixed(2)} PKR
          </p>
        </div>
      </div>
    </div>
  );
}

