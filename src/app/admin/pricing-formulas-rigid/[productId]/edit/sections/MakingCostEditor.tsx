'use client';

import React, { useState } from 'react';
import { RigidProductPricingFormula, RigidMakingCostFormula, RigidMakingCostTier } from '@/lib/types/pricing-formulas-rigid';
import { Trash2, Plus } from 'lucide-react';

interface Props {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidMakingCostFormula) => void;
}

export default function RigidMakingCostEditor({ formula, onUpdate }: Props) {
  const [config, setConfig] = useState(formula.makingCost);
  const [testUnits, setTestUnits] = useState(750);

  const handleUpdate = (newConfig: RigidMakingCostFormula) => {
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const addTier = () => {
    const lastTier = config.tiers[config.tiers.length - 1];
    const newTier: RigidMakingCostTier = {
      minUnits: lastTier.maxUnits === Infinity ? lastTier.minUnits + 500 : lastTier.maxUnits + 1,
      maxUnits: lastTier.maxUnits === Infinity ? Infinity : lastTier.maxUnits + 500,
      costPerUnit: lastTier.costPerUnit - 20
    };
    handleUpdate({ tiers: [...config.tiers, newTier] });
  };

  const deleteTier = (index: number) => {
    if (config.tiers.length <= 1) {
      alert('Must have at least one tier');
      return;
    }
    handleUpdate({ tiers: config.tiers.filter((_, i) => i !== index) });
  };

  const updateTier = (index: number, field: keyof RigidMakingCostTier, value: number) => {
    const newTiers = [...config.tiers];
    newTiers[index] = { ...newTiers[index], [field]: value };
    handleUpdate({ tiers: newTiers });
  };

  const calculateTest = () => {
    const matchedTier = config.tiers.find(t => testUnits >= t.minUnits && testUnits <= t.maxUnits);
    const costPerUnit = matchedTier ? matchedTier.costPerUnit : config.tiers[config.tiers.length - 1].costPerUnit;
    const finalCost = costPerUnit * testUnits;
    return { 
      tierName: matchedTier ? `${matchedTier.minUnits}-${matchedTier.maxUnits === Infinity ? '∞' : matchedTier.maxUnits}` : 'Not found',
      costPerUnit,
      finalCost
    };
  };

  const testResult = calculateTest();

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Making Cost:</h4>
        <p className="text-blue-800 text-sm">
          Assembly/making cost based on quantity tiers. Lower cost per unit for higher quantities.
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">Quantity Tiers</h4>
          <button
            onClick={addTier}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Tier
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Min Units</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Max Units</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Cost Per Unit (PKR)</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {config.tiers.map((tier, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={tier.minUnits}
                      onChange={(e) => updateTier(index, 'minUnits', Number(e.target.value))}
                      min="1"
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      value={tier.maxUnits === Infinity ? 'Infinity' : tier.maxUnits}
                      onChange={(e) => {
                        const val = e.target.value === 'Infinity' ? Infinity : Number(e.target.value);
                        updateTier(index, 'maxUnits', val);
                      }}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={tier.costPerUnit}
                      onChange={(e) => updateTier(index, 'costPerUnit', Number(e.target.value))}
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
          {config.tiers.length} tiers configured. Last tier should have maxUnits = &quot;Infinity&quot;
        </p>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Required Units</label>
          <input
            type="number"
            value={testUnits}
            onChange={(e) => setTestUnits(Number(e.target.value))}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="bg-white rounded p-3 text-sm space-y-2">
          <p><strong>Matched Tier:</strong> {testResult.tierName}</p>
          <p><strong>Cost Per Unit:</strong> {testResult.costPerUnit} PKR</p>
          <p className="text-xl font-bold text-purple-700 mt-2 pt-2 border-t">
            Total Making Cost: {testResult.finalCost.toFixed(2)} PKR
          </p>
        </div>
      </div>
    </div>
  );
}

