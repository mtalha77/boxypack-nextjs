'use client';

import React, { useState } from 'react';
import { RigidProductPricingFormula, RigidMaterialCostFormula } from '@/lib/types/pricing-formulas-rigid';

interface Props {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidMaterialCostFormula) => void;
}

export default function RigidMaterialCostEditor({ formula, onUpdate }: Props) {
  const [config, setConfig] = useState(formula.materialCost);
  
  // Test values
  const [testLength, setTestLength] = useState(10);
  const [testWidth, setTestWidth] = useState(8);
  const [testHeight, setTestHeight] = useState(3);
  const [testUnits, setTestUnits] = useState(500);

  const handleUpdate = (newConfig: RigidMaterialCostFormula) => {
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const updateGSM = (type: 'cardboard' | 'paper', field: 'gsm' | 'rate', value: number) => {
    const updated = {
      ...config,
      gsmTable: {
        ...config.gsmTable,
        [type]: { ...config.gsmTable[type], [field]: value }
      }
    };
    handleUpdate(updated);
  };

  // Generic update functions for each component
  const updateFormula = (component: 'cardboard1' | 'cardboard2' | 'paper1' | 'paper2', dimension: 'lengthFormula' | 'widthFormula', field: string, value: number) => {
    const updated = {
      ...config,
      [component]: {
        ...config[component],
        [dimension]: {
          ...config[component][dimension],
          [field]: value
        }
      }
    };
    handleUpdate(updated);
  };

  const updateSheetsMultiplier = (component: 'paper1' | 'paper2', value: number) => {
    const updated = {
      ...config,
      [component]: {
        ...config[component],
        sheetsMultiplier: value
      }
    };
    handleUpdate(updated);
  };

  // Test calculation
  const calculateTest = () => {
    const { gsmTable, divisor, cardboard1, cardboard2, paper1, paper2 } = config;

    // Cardboard 1
    const c1Length = (testLength * cardboard1.lengthFormula.lengthMultiplier) + 
                     (testWidth * cardboard1.lengthFormula.widthMultiplier) + 
                     (testHeight * cardboard1.lengthFormula.heightMultiplier) + 
                     cardboard1.lengthFormula.additionalInches;
    const c1Width = (testLength * cardboard1.widthFormula.lengthMultiplier) + 
                    (testWidth * cardboard1.widthFormula.widthMultiplier) + 
                    (testHeight * cardboard1.widthFormula.heightMultiplier) + 
                    cardboard1.widthFormula.additionalInches;
    const c1Cost = (c1Length * c1Width * gsmTable.cardboard.gsm) / divisor * gsmTable.cardboard.rate;

    // Cardboard 2
    const c2Length = (testLength * cardboard2.lengthFormula.lengthMultiplier) + 
                     (testWidth * cardboard2.lengthFormula.widthMultiplier) + 
                     (testHeight * cardboard2.lengthFormula.heightMultiplier) + 
                     cardboard2.lengthFormula.additionalInches;
    const c2Width = (testLength * cardboard2.widthFormula.lengthMultiplier) + 
                    (testWidth * cardboard2.widthFormula.widthMultiplier) + 
                    (testHeight * cardboard2.widthFormula.heightMultiplier) + 
                    cardboard2.widthFormula.additionalInches;
    const c2Cost = (c2Length * c2Width * gsmTable.cardboard.gsm) / divisor * gsmTable.cardboard.rate;

    // Paper 1
    const p1Length = (testLength * paper1.lengthFormula.lengthMultiplier) + 
                     (testWidth * paper1.lengthFormula.widthMultiplier) + 
                     (testHeight * paper1.lengthFormula.heightMultiplier) + 
                     paper1.lengthFormula.additionalInches;
    const p1Width = (testLength * paper1.widthFormula.lengthMultiplier) + 
                    (testWidth * paper1.widthFormula.widthMultiplier) + 
                    (testHeight * paper1.widthFormula.heightMultiplier) + 
                    paper1.widthFormula.additionalInches;
    const p1CostBeforeSheets = (p1Length * p1Width * gsmTable.paper.gsm) / divisor * gsmTable.paper.rate;
    const p1Cost = p1CostBeforeSheets * paper1.sheetsMultiplier;

    // Paper 2
    const p2Length = (testLength * paper2.lengthFormula.lengthMultiplier) + 
                     (testWidth * paper2.lengthFormula.widthMultiplier) + 
                     (testHeight * paper2.lengthFormula.heightMultiplier) + 
                     paper2.lengthFormula.additionalInches;
    const p2Width = (testLength * paper2.widthFormula.lengthMultiplier) + 
                    (testWidth * paper2.widthFormula.widthMultiplier) + 
                    (testHeight * paper2.widthFormula.heightMultiplier) + 
                    paper2.widthFormula.additionalInches;
    const p2CostBeforeSheets = (p2Length * p2Width * gsmTable.paper.gsm) / divisor * gsmTable.paper.rate;
    const p2Cost = p2CostBeforeSheets * paper2.sheetsMultiplier;

    // Sum all 4 costs
    const totalCost = c1Cost + c2Cost + p1Cost + p2Cost;
    const costRatio = totalCost / 100;
    const finalCost = costRatio * testUnits;

    return {
      cardboard1: { length: c1Length, width: c1Width, cost: c1Cost },
      cardboard2: { length: c2Length, width: c2Width, cost: c2Cost },
      paper1: { length: p1Length, width: p1Width, costBeforeSheets: p1CostBeforeSheets, cost: p1Cost },
      paper2: { length: p2Length, width: p2Width, costBeforeSheets: p2CostBeforeSheets, cost: p2Cost },
      totalCost,
      costRatio,
      finalCost
    };
  };

  const testResult = calculateTest();

  // Helper component for formula editor
  const FormulaEditor = ({ 
    title, 
    component, 
    dimension, 
    config 
  }: { 
    title: string; 
    component: 'cardboard1' | 'cardboard2' | 'paper1' | 'paper2'; 
    dimension: 'lengthFormula' | 'widthFormula';
    config: any;
  }) => (
    <div className="border border-gray-200 rounded p-3">
      <h5 className="font-medium text-gray-800 mb-2">{title}</h5>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <label className="block text-xs text-gray-600 mb-1">L ×</label>
          <input
            type="number"
            value={config.lengthMultiplier}
            onChange={(e) => updateFormula(component, dimension, 'lengthMultiplier', Number(e.target.value))}
            step="0.1"
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">W ×</label>
          <input
            type="number"
            value={config.widthMultiplier}
            onChange={(e) => updateFormula(component, dimension, 'widthMultiplier', Number(e.target.value))}
            step="0.1"
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">H ×</label>
          <input
            type="number"
            value={config.heightMultiplier}
            onChange={(e) => updateFormula(component, dimension, 'heightMultiplier', Number(e.target.value))}
            step="0.1"
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">+ inches</label>
          <input
            type="number"
            value={config.additionalInches}
            onChange={(e) => updateFormula(component, dimension, 'additionalInches', Number(e.target.value))}
            step="0.1"
            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          />
        </div>
      </div>
      <div className="bg-gray-50 rounded p-2 mt-2">
        <code className="text-xs">
          = (L × {config.lengthMultiplier}) + (W × {config.widthMultiplier}) + (H × {config.heightMultiplier}) + {config.additionalInches}
        </code>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Rigid Material Cost Structure:</h4>
        <p className="text-blue-800 text-sm">
          Fully flexible formula system with individual multipliers for each dimension component.
        </p>
        <ul className="text-blue-800 text-sm mt-2 ml-4 list-disc space-y-1">
          <li><strong>2 Cardboard calculations</strong> (Cardboard 1 + Cardboard 2)</li>
          <li><strong>2 Paper calculations</strong> with ×2 sheets multiplier (Paper 1 + Paper 2)</li>
          <li><strong>Final cost</strong> = (C1 + C2 + P1 + P2) / 100 × Units</li>
        </ul>
      </div>

      {/* GSM Table */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">GSM Table</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded p-3">
            <h5 className="font-medium text-gray-800 mb-2">Cardboard</h5>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GSM</label>
                <input
                  type="number"
                  value={config.gsmTable.cardboard.gsm}
                  onChange={(e) => updateGSM('cardboard', 'gsm', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rate (PKR)</label>
                <input
                  type="number"
                  value={config.gsmTable.cardboard.rate}
                  onChange={(e) => updateGSM('cardboard', 'rate', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
          <div className="border rounded p-3">
            <h5 className="font-medium text-gray-800 mb-2">Paper</h5>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GSM</label>
                <input
                  type="number"
                  value={config.gsmTable.paper.gsm}
                  onChange={(e) => updateGSM('paper', 'gsm', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rate (PKR)</label>
                <input
                  type="number"
                  value={config.gsmTable.paper.rate}
                  onChange={(e) => updateGSM('paper', 'rate', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Divisor</label>
          <input
            type="number"
            value={config.divisor}
            onChange={(e) => handleUpdate({ ...config, divisor: Number(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 15500</p>
        </div>
      </div>

      {/* Cardboard 1 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Cardboard 1 Formula</h4>
        <div className="space-y-3">
          <FormulaEditor 
            title="Length Formula" 
            component="cardboard1" 
            dimension="lengthFormula" 
            config={config.cardboard1.lengthFormula} 
          />
          <FormulaEditor 
            title="Width Formula" 
            component="cardboard1" 
            dimension="widthFormula" 
            config={config.cardboard1.widthFormula} 
          />
        </div>
      </div>

      {/* Cardboard 2 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Cardboard 2 Formula</h4>
        <div className="space-y-3">
          <FormulaEditor 
            title="Length Formula" 
            component="cardboard2" 
            dimension="lengthFormula" 
            config={config.cardboard2.lengthFormula} 
          />
          <FormulaEditor 
            title="Width Formula" 
            component="cardboard2" 
            dimension="widthFormula" 
            config={config.cardboard2.widthFormula} 
          />
        </div>
      </div>

      {/* Paper 1 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Paper 1 Formula (×{config.paper1.sheetsMultiplier} sheets)</h4>
        <div className="space-y-3">
          <FormulaEditor 
            title="Length Formula" 
            component="paper1" 
            dimension="lengthFormula" 
            config={config.paper1.lengthFormula} 
          />
          <FormulaEditor 
            title="Width Formula" 
            component="paper1" 
            dimension="widthFormula" 
            config={config.paper1.widthFormula} 
          />
          <div className="border border-gray-200 rounded p-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sheets Multiplier
            </label>
            <input
              type="number"
              value={config.paper1.sheetsMultiplier}
              onChange={(e) => updateSheetsMultiplier('paper1', Number(e.target.value))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Default: 2</p>
          </div>
        </div>
      </div>

      {/* Paper 2 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Paper 2 Formula (×{config.paper2.sheetsMultiplier} sheets)</h4>
        <div className="space-y-3">
          <FormulaEditor 
            title="Length Formula" 
            component="paper2" 
            dimension="lengthFormula" 
            config={config.paper2.lengthFormula} 
          />
          <FormulaEditor 
            title="Width Formula" 
            component="paper2" 
            dimension="widthFormula" 
            config={config.paper2.widthFormula} 
          />
          <div className="border border-gray-200 rounded p-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sheets Multiplier
            </label>
            <input
              type="number"
              value={config.paper2.sheetsMultiplier}
              onChange={(e) => updateSheetsMultiplier('paper2', Number(e.target.value))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Default: 2</p>
          </div>
        </div>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-4 gap-4 mb-4">
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

        <div className="bg-white rounded p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-500 pl-3">
              <h5 className="font-semibold text-blue-900 mb-2">Cardboard 1</h5>
              <p className="text-sm">Length: {testResult.cardboard1.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.cardboard1.width.toFixed(2)}"</p>
              <p className="text-sm font-bold text-blue-700">Cost: {testResult.cardboard1.cost.toFixed(2)} PKR</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-3">
              <h5 className="font-semibold text-blue-900 mb-2">Cardboard 2</h5>
              <p className="text-sm">Length: {testResult.cardboard2.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.cardboard2.width.toFixed(2)}"</p>
              <p className="text-sm font-bold text-blue-700">Cost: {testResult.cardboard2.cost.toFixed(2)} PKR</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="border-l-4 border-green-500 pl-3">
              <h5 className="font-semibold text-green-900 mb-2">Paper 1 (×{config.paper1.sheetsMultiplier})</h5>
              <p className="text-sm">Length: {testResult.paper1.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.paper1.width.toFixed(2)}"</p>
              <p className="text-sm">Before sheets: {testResult.paper1.costBeforeSheets.toFixed(2)} PKR</p>
              <p className="text-sm font-bold text-green-700">Cost: {testResult.paper1.cost.toFixed(2)} PKR</p>
            </div>
            <div className="border-l-4 border-green-600 pl-3">
              <h5 className="font-semibold text-green-900 mb-2">Paper 2 (×{config.paper2.sheetsMultiplier})</h5>
              <p className="text-sm">Length: {testResult.paper2.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.paper2.width.toFixed(2)}"</p>
              <p className="text-sm">Before sheets: {testResult.paper2.costBeforeSheets.toFixed(2)} PKR</p>
              <p className="text-sm font-bold text-green-700">Cost: {testResult.paper2.cost.toFixed(2)} PKR</p>
            </div>
          </div>

          <div className="border-t-2 border-purple-200 pt-3 mt-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm"><strong>C1 + C2:</strong> {(testResult.cardboard1.cost + testResult.cardboard2.cost).toFixed(2)} PKR</p>
                <p className="text-sm"><strong>P1 + P2:</strong> {(testResult.paper1.cost + testResult.paper2.cost).toFixed(2)} PKR</p>
                <p className="text-sm"><strong>Total Cost:</strong> {testResult.totalCost.toFixed(2)} PKR</p>
              </div>
              <div>
                <p className="text-sm"><strong>Cost Ratio:</strong> {testResult.costRatio.toFixed(2)}</p>
                <p className="text-xl font-bold text-purple-700 mt-1">
                  Final Cost: {testResult.finalCost.toFixed(2)} PKR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
