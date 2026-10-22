import React from 'react';
import { Sparkles, Leaf, Hotel, Truck, Package, Clock, Phone, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

export const InfiniteMarquee: React.FC = () => {
  const marqueeItems = [
    { text: '100% Machine Peeled & Spotless Cloves', icon: Sparkles },
    { text: 'Zero Chemical Bleach or Preservatives', icon: Leaf },
    { text: 'Daily Morning Delivery in Ahmedabad', icon: Truck },
    { text: 'Inaugural Wholesale Launch Rates Available', icon: Award },
    { text: 'Saves 70% Kitchen Prep Time & Labor', icon: Clock },
    { text: '5kg, 10kg, 20kg & 50kg Vacuum Packaging', icon: Package },
    { text: 'Direct Factory Wholesale Pricing', icon: Award },
    { text: `Call Orders: ${COMPANY_INFO.phones.primary}`, icon: Phone },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#1B3216] via-[#2D4A22] to-[#1B3216] py-3.5 border-y border-[#C59B27]/30 shadow-md">
      {/* Left/Right Edge fade gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-[#1B3216] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-[#1B3216] to-transparent" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-8 text-[#FAF8F2] text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 shrink-0">
              <span className="w-6 h-6 rounded-full bg-[#C59B27]/30 border border-[#C59B27]/50 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-[#E5B945]" />
              </span>
              <span>{item.text}</span>
              <span className="text-[#C59B27] ml-4 font-bold">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
