'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ProductPricingFormula } from '@/lib/types/pricing-formulas';
import { ChevronDown, ChevronUp, Save, X } from 'lucide-react';

// Section Editor Components (we'll create these)
import MaterialCostEditor from './sections/MaterialCostEditor';
import ScanningCostEditor from './sections/ScanningCostEditor';
import PlatesCostEditor from './sections/PlatesCostEditor';
import PrintingCostEditor from './sections/PrintingCostEditor';
import LaminationCostEditor from './sections/LaminationCostEditor';
import DieMakingCostEditor from './sections/DieMakingCostEditor';
import DieCuttingCostEditor from './sections/DieCuttingCostEditor';
import PastingCostEditor from './sections/PastingCostEditor';
import TwoPieceBoxEditor from './sections/TwoPieceBoxEditor';
import BothSideSurchargeEditor from './sections/BothSideSurchargeEditor';
import VendorPercentageEditor from './sections/VendorPercentageEditor';
import ShippingCostEditor from './sections/ShippingCostEditor';

interface Section {
  id: number;
  name: string;
  description: string;
  component: React.ComponentType<{
    formula: ProductPricingFormula;
    onUpdate: (data: unknown) => void;
  }>;
}

const SECTIONS: Section[] = [
  {
    id: 1,
    name: 'Material Cost',
    description: 'Calculate material cost based on dimensions, GSM, and weight',
    component: MaterialCostEditor
  },
  {
    id: 2,
    name: 'Scanning Cost',
    description: 'One-time scanning setup cost',
    component: ScanningCostEditor
  },
  {
    id: 3,
    name: 'Plates Cost',
    description: 'Cost based on dimension ranges and printing type',
    component: PlatesCostEditor
  },
  {
    id: 4,
    name: 'Printing Cost',
    description: 'Printing cost with quantity multiplier (per 1000 units)',
    component: PrintingCostEditor
  },
  {
    id: 5,
    name: 'Lamination Cost',
    description: 'Lamination cost for glossy, matt, or soft touch finishes',
    component: LaminationCostEditor
  },
  {
    id: 6,
    name: 'Die Making Cost',
    description: 'One-time die making cost based on dimensions',
    component: DieMakingCostEditor
  },
  {
    id: 7,
    name: 'Die Cutting Cost',
    description: 'Die cutting cost per 1000 units',
    component: DieCuttingCostEditor
  },
  {
    id: 8,
    name: 'Pasting Cost',
    description: 'Pasting cost per 1000 units',
    component: PastingCostEditor
  },
  {
    id: 9,
    name: 'Two-Piece Box Multiplier',
    description: 'Multiply total cost by 2 for two-piece boxes',
    component: TwoPieceBoxEditor
  },
  {
    id: 10,
    name: 'Both Side Printing Surcharge',
    description: 'Additional surcharge for both side printing',
    component: BothSideSurchargeEditor
  },
  {
    id: 11,
    name: 'Vendor Percentage',
    description: 'Vendor markup percentage',
    component: VendorPercentageEditor
  },
  {
    id: 12,
    name: 'Shipping Cost',
    description: 'Shipping cost based on weight tiers',
    component: ShippingCostEditor
  }
];

export default function EditPricingFormulaPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.productId as string;

  const [formula, setFormula] = useState<ProductPricingFormula | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]); // First section expanded by default
  const [hasChanges, setHasChanges] = useState(false);

  // Fetch formula
  useEffect(() => {
    const fetchFormula = async () => {
      try {
        const response = await fetch(`/api/admin/pricing-formulas/${productId}`);
        const data = await response.json();

        if (data.success) {
          setFormula(data.data);
        } else {
          alert(`Error: ${data.error}`);
          router.push('/admin/pricing-formulas');
        }
      } catch (error) {
        console.error('Error fetching formula:', error);
        alert('Error loading pricing formula');
        router.push('/admin/pricing-formulas');
      } finally {
        setLoading(false);
      }
    };

    fetchFormula();
  }, [productId, router]);

  // Toggle section expansion
  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Expand all sections
  const expandAll = () => {
    setExpandedSections(SECTIONS.map(s => s.id));
  };

  // Collapse all sections
  const collapseAll = () => {
    setExpandedSections([]);
  };

  // Update formula section
  const updateFormulaSection = (sectionKey: string, data: unknown) => {
    if (!formula) return;
    
    setFormula({
      ...formula,
      [sectionKey]: data
    });
    setHasChanges(true);
  };

  // Save formula
  const handleSave = async () => {
    if (!formula) return;

    if (!confirm('Save changes to this pricing formula?')) {
      return;
    }

    try {
      setSaving(true);
      const response = await fetch(`/api/admin/pricing-formulas/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formula)
      });

      const data = await response.json();

      if (data.success) {
        alert('Pricing formula updated successfully!');
        setHasChanges(false);
        setFormula(data.data);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error saving formula:', error);
      alert('Error saving pricing formula');
    } finally {
      setSaving(false);
    }
  };

  // Cancel and go back
  const handleCancel = () => {
    if (hasChanges) {
      if (!confirm('You have unsaved changes. Are you sure you want to leave?')) {
        return;
      }
    }
    router.push('/admin/pricing-formulas');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading pricing formula...</p>
        </div>
      </div>
    );
  }

  if (!formula) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 text-gray-900 admin-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Edit Pricing Formula
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {formula.productName} • {formula.category}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={collapseAll}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Collapse All
              </button>
              <button
                onClick={expandAll}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Expand All
              </button>
            </div>
          </div>

          {/* Unsaved changes warning */}
          {hasChanges && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-yellow-800">
                  You have unsaved changes
                </p>
              </div>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50 text-sm transition-colors"
              >
                Save Now
              </button>
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="space-y-4 mb-8">
          {SECTIONS.map((section) => {
            const isExpanded = expandedSections.includes(section.id);
            const SectionComponent = section.component;
            
            return (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                      {section.id}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {section.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
                    <SectionComponent
                      formula={formula}
                      onUpdate={(data: unknown) => {
                        // Map section ID to formula property key
                        const sectionKeys = [
                          'materialCost', 'scanningCost', 'platesCost', 'printingCost',
                          'laminationCost', 'dieMakingCost', 'dieCuttingCost', 'pastingCost',
                          'twoPieceBox', 'bothSidePrintingSurcharge', 'vendorPercentage', 'shippingCost'
                        ];
                        updateFormulaSection(sectionKeys[section.id - 1], data);
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between shadow-lg rounded-lg">
          <button
            onClick={handleCancel}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
          
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saving || !hasChanges}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

