import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/hooks/useProducts';
import GradientBackground from '../../UI/GradientBackground';

interface ProductCustomizationProps {
  productData?: Product;
}

const defaultDetails = [
  { label: 'Material Type', value: 'Rigid Board / Cardboard / Kraft' },
  { label: 'Structure', value: 'Magnetic / Two-Piece / Drawer / Foldable' },
  { label: 'Thickness', value: '14PT / 18PT / 24PT' },
  { label: 'Finish', value: 'Glossy / Matte / Soft Touch' },
  { label: 'Printing', value: 'Inside, Outside, or Both' },
  { label: 'Dimensions (L × W × H)', value: 'e.g., 9.5 × 7.75 × 4' },
  { label: 'Quantity', value: '250 units (Bulk discounts available)' }
];

const defaultSupportActions = [
  {
    label: 'Live Assistance',
    description: 'Connect directly with an agent for instant guidance.'
  },
  {
    label: 'Email Consultation',
    description: 'Get a quick reply about materials, pricing, or design options.'
  }
];

const ProductCustomization: React.FC<ProductCustomizationProps> = ({
  productData
}) => {
  // Extract customization data from productData, with fallbacks to defaults
  const customization = productData?.customization;
  
  const eyebrow = customization?.eyebrow || 'Customization';
  const heading = customization?.heading || `Customize Your ${productData?.name || 'Packaging'}`;
  const description =
    customization?.description ||
    `Design and order custom ${productData?.name?.toLowerCase() || 'packaging'} to match your exact needs. Choose your materials, structures, and finishes that bring your brand vision to life.`;
  const detailsHeading = customization?.detailsHeading || 'Tailor Every Detail';
  const details =
    Array.isArray(customization?.details) && customization?.details.length
      ? customization.details
      : defaultDetails;
  const footerNote =
    customization?.footerNote || 'Review your design, preview your sample, and place your order online.';
  const supportTitle = customization?.supportTitle || 'Need help before ordering?';
  const supportDescription =
    customization?.supportDescription ||
    'If you’d like to talk before placing your order, our support team is ready.';
  const supportActions =
    Array.isArray(customization?.supportActions) && customization.supportActions.length
      ? customization.supportActions
      : defaultSupportActions;

  return (
    <section className="py-24 bg-[#f0f7fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-10 text-[#0c2a30]">
            <div className="space-y-6">
              <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full">
                {eyebrow}
              </span>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight">
                  {heading}
                </h2>
                <p className="text-lg md:text-xl leading-8 text-[#2f2f2f] text-pretty">
                  {description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#171717]">{detailsHeading}</h3>
              <dl className="grid gap-4 md:grid-cols-2">
                {details.map(detail => (
                  <div key={detail.label} className="bg-white border border-[#d2e4eb] rounded-3xl p-5 shadow-sm">
                    <dt className="text-sm font-semibold uppercase tracking-wide text-[#0c6b76] mb-2">
                      {detail.label}
                    </dt>
                    <dd className="text-base md:text-lg leading-7 text-[#0c2a30] text-pretty">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="text-lg md:text-xl leading-8 text-[#2f2f2f] text-pretty">
              {footerNote}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-4xl shadow-xl border border-[#0ca6c2]/20 text-white lg:mt-16">
            <GradientBackground className="absolute inset-0 opacity-90" />
            <div className="relative z-10 p-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{supportTitle}</h3>
                <div className="space-y-3 text-base md:text-lg leading-7 text-white/85 text-pretty">
                  <p>{supportDescription}</p>
                </div>
              </div>

              <div className="space-y-5">
                {supportActions.map(action => (
                  <div
                    key={action.label}
                    className="bg-white/10 border border-white/25 rounded-3xl p-5 space-y-2 backdrop-blur-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                      {action.label}
                    </p>
                    <p className="text-base leading-7 text-white/90 text-pretty">
                      {action.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/10 border border-white/30 rounded-3xl p-6 backdrop-blur-sm">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                    Ready to collaborate?
                  </p>
                  <p className="text-lg font-semibold leading-7 text-white">
                    Send us your brief and we’ll follow up within one business day.
                  </p>
                </div>
                <Link 
                  href="/contact-us#contact-section"
                  className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#013f4a] hover:bg-white transition"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCustomization;

