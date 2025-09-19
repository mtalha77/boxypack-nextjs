'use client';

import React from 'react';
import LightBlueBackground from '../LightBlueBackground';
import { FileText, Scale, Shield, CheckCircle } from 'lucide-react';

const TermsHero: React.FC = () => {
  return (
    <LightBlueBackground className="relative min-h-[60vh] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
         <div className="grid lg:grid-cols-2 gap-12 items-stretch">
           {/* Left Content */}
           <div className="space-y-6 flex flex-col">
             <div className="space-y-6">
               <h1 className="text-h1 leading-tight">
                 Our <span className="text-heading-secondary">Terms of Use</span>
               </h1>
               
               <div className="space-y-4 text-body-large text-body-primary max-w-lg">
                 <p>
                   Welcome to <span className="font-semibold text-[var(--color-teal-deep)]">Boxypack</span>! These terms 
                   govern your use of our <span className="font-semibold text-[var(--color-teal-deep)]">packaging services{" "}</span> 
                   and website.
                 </p>
                 
                 <p>
                   By using our services, you agree to be bound by these terms. Please read them carefully to understand 
                   your <span className="font-semibold text-[var(--color-turquoise-bright)]">rights and responsibilities{" "}</span> 
                   when working with us.
                 </p>
               </div>
             </div>

             {/* Key Points */}
             <div className="grid grid-cols-2 gap-4 pt-6">
               <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                 <div className="w-12 h-12 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center mx-auto mb-3">
                   <FileText className="w-6 h-6 text-white" />
                 </div>
                 <div className="text-h4 font-bold text-heading-secondary">Clear</div>
                 <div className="text-caption text-body-secondary">Terms & Conditions</div>
               </div>
               
               <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                 <div className="w-12 h-12 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center mx-auto mb-3">
                   <Scale className="w-6 h-6 text-white" />
                 </div>
                 <div className="text-h4 font-bold text-heading-secondary">Fair</div>
                 <div className="text-caption text-body-secondary">Legal Framework</div>
               </div>
               
               <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                 <div className="w-12 h-12 bg-[var(--color-brown-golden)] rounded-full flex items-center justify-center mx-auto mb-3">
                   <Shield className="w-6 h-6 text-white" />
                 </div>
                 <div className="text-h4 font-bold text-heading-secondary">Protected</div>
                 <div className="text-caption text-body-secondary">Your Rights</div>
               </div>
               
               <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
                 <div className="w-12 h-12 bg-[var(--color-brown-rustic)] rounded-full flex items-center justify-center mx-auto mb-3">
                   <CheckCircle className="w-6 h-6 text-white" />
                 </div>
                 <div className="text-h4 font-bold text-heading-secondary">Agreed</div>
                 <div className="text-caption text-body-secondary">Mutual Understanding</div>
               </div>
             </div>
           </div>

           {/* Right Content - Image */}
           <div className="relative flex justify-center">
             <div className="relative w-full h-full">
               <div className="w-full h-full bg-gradient-to-br from-[var(--color-turquoise-bright)]/10 to-[var(--color-teal-deep)]/10 rounded-2xl flex items-center justify-center">
                 <div className="text-center space-y-4">
                   <FileText className="w-24 h-24 text-[var(--color-teal-deep)] mx-auto" />
                   <h3 className="text-h3 font-bold text-heading-secondary">Fair & Transparent</h3>
                   <p className="text-body-secondary max-w-sm">
                     Clear terms that protect both you and us in our business relationship
                   </p>
                 </div>
               </div>
               {/* Decorative elements */}
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-turquoise-bright)]/20 rounded-full blur-xl"></div>
               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-teal-deep)]/20 rounded-full blur-xl"></div>
             </div>
           </div>
         </div>
      </div>
    </LightBlueBackground>
  );
};

export default TermsHero;
