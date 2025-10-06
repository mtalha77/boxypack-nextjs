'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, ShippingCostFormula, ShippingTier } from '@/lib/types/pricing-formulas';
import { Trash2, Plus } from 'lucide-react';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: ShippingCostFormula) => void;
}

export default function ShippingCostEditor({ formula, onUpdate }: Props) {
  const [weightCalc, setWeightCalc] = useState(formula.shippingCost.weightCalculation);
  const [tiers, setTiers] = useState<ShippingTier[]>(formula.shippingCost.shippingTiers);
  
  // Test values
  const [testWeight100, setTestWeight100] = useState(158.06);
  const [testUnits, setTestUnits] = useState(250);

  const handleUpdate = (newWeightCalc: typeof weightCalc, newTiers: ShippingTier[]) => {
    setWeightCalc(newWeightCalc);
    setTiers(newTiers);
    onUpdate({
      weightCalculation: newWeightCalc,
      shippingTiers: newTiers
    });
  };

  const updateWeightCalc = (field: string, value: number) => {
    const updated = { ...weightCalc, [field]: value };
    handleUpdate(updated, tiers);
  };

  const addTier = () => {
    const lastTier = tiers[tiers.length - 1];
    const newTier: ShippingTier = {
      minWeight: lastTier.maxWeight,
      maxWeight: lastTier.maxWeight + 5,
      cost: lastTier.cost + 1000
    };
    handleUpdate(weightCalc, [...tiers, newTier]);
  };

  const deleteTier = (index: number) => {
    if (tiers.length <= 1) {
      alert('Must have at least one tier');
      return;
    }
    handleUpdate(weightCalc, tiers.filter((_, i) => i !== index));
  };

  const updateTier = (index: number, field: string, value: string | number) => {
    const newTiers = [...tiers];
    newTiers[index] = { ...newTiers[index], [field]: value };
    handleUpdate(weightCalc, newTiers);
  };

  const calculateTest = () => {
    const singleUnitWeight = (testWeight100 * weightCalc.multiplier) / weightCalc.divisor;
    const totalWeight = singleUnitWeight * testUnits;
    const matchedTier = tiers.find(t => totalWeight >= t.minWeight && totalWeight < t.maxWeight);
    const shippingCost = matchedTier ? matchedTier.cost : tiers[tiers.length - 1].cost;
    return { singleUnitWeight, totalWeight, shippingCost, tierName: matchedTier ? `${matchedTier.minWeight}-${matchedTier.maxWeight} kg` : '70+ kg' };
  };

  const testResult = calculateTest();

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          Shipping cost is calculated based on total weight:
        </p>
        <ol className="text-blue-800 text-sm mt-2 ml-4 list-decimal space-y-1">
          <li>Calculate single unit weight from weight of 100 units (from Section 1)</li>
          <li>Multiply by required units to get total weight</li>
          <li>Find matching shipping tier</li>
          <li>Apply tier cost</li>
        </ol>
      </div>

      {/* Weight Calculation Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Weight Calculation Formula</h4>
        <div className="bg-gray-100 rounded p-3 mb-3">
          <code className="text-sm">
            Single Unit Weight = (Weight of 100 Units × {weightCalc.multiplier}) / {weightCalc.divisor}
          </code>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Multiplier
            </label>
            <input
              type="number"
              value={weightCalc.multiplier}
              onChange={(e) => updateWeightCalc('multiplier', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Default: 0.9</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Divisor
            </label>
            <input
              type="number"
              value={weightCalc.divisor}
              onChange={(e) => updateWeightCalc('divisor', Number(e.target.value))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Default: 100</p>
          </div>
        </div>
      </div>

      {/* Shipping Tiers */}
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
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Cost ($)</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier, index) => (
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
          {tiers.length} tiers configured. Last tier maxWeight should be &quot;Infinity&quot; for 70+ kg.
        </p>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight of 100 Units (from Section 1)
            </label>
            <input
              type="number"
              value={testWeight100}
              onChange={(e) => setTestWeight100(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Required Units
            </label>
            <input
              type="number"
              value={testUnits}
              onChange={(e) => setTestUnits(Number(e.target.value))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="bg-white rounded p-3 space-y-1 text-sm">
          <p><strong>Single Unit Weight:</strong> {testResult.singleUnitWeight.toFixed(4)} kg</p>
          <p><strong>Total Weight:</strong> {testResult.totalWeight.toFixed(2)} kg</p>
          <p><strong>Matched Tier:</strong> {testResult.tierName}</p>
          <p className="text-xl font-bold text-purple-700 mt-2">
            Shipping Cost: ${testResult.shippingCost.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Important:</strong> Make sure your tiers are in order from lowest to highest weight,
          with no gaps. The last tier should have maxWeight as &quot;Infinity&quot; to catch all remaining weights.
        </p>
      </div>
    </div>
  );
}

