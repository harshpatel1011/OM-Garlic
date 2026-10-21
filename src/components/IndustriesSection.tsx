import React, { useState } from 'react';
import {
  Hotel,
  UtensilsCrossed,
  Factory,
  ChefHat,
  CheckCircle2,
  Package,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Building2,
} from 'lucide-react';
import { INDUSTRIES_ITEMS } from '../data/garlicData';

const iconMap: Record<string, React.ElementType> = {
  Hotel,
  UtensilsCrossed,
  Factory,
  ChefHat,
  Building2,
};

interface IndustriesSectionProps {
  onOpenOrderModal: (defaultIndustry?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenOrderModal }) => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES_ITEMS[0].id);

  return (
    <section id="industries" className="py-14 sm:py-20 bg-[#FAF8F2] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5EFE1] border border-[#2D4A22]/20 text-[#2D4A22] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Commercial B2B Supply</span>
          </div>

          <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#2D4A22] tracking-tight leading-tight mb-4">
            Industries We Proudly Serve
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto m-0">
            We specialize exclusively in high-volume, bulk B2B commercial supply. Delivering
            spotless, ready-to-cook peeled garlic daily to hotels, restaurant chains, catering
            operations, and food processing plants across Ahmedabad and Gujarat.
          </p>
        </div>

        {/* Mobile Tab Selector */}
        <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-2 pb-4 mb-2">
          {INDUSTRIES_ITEMS.map((item) => {
            const Icon = iconMap[item.icon] || Building2;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#2D4A22] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E5B945]' : 'text-gray-500'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Active Tab Card (Shown on mobile only) */}
        <div className="sm:hidden">
          {INDUSTRIES_ITEMS.filter((item) => item.id === activeTab).map((item) => {
            const Icon = iconMap[item.icon] || Building2;
            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 bg-white border-2 border-[#C59B27] shadow-[0_10px_30px_rgba(45,74,34,0.12)] relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C59B27] to-[#2D4A22] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading font-extrabold text-lg text-[#2D4A22] leading-tight m-0">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C59B27] m-0">{item.subtitle}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">{item.desc}</p>

                <div className="space-y-2 mb-5">
                  <p className="text-[11px] font-extrabold text-[#2D4A22] uppercase tracking-wider">
                    Commercial Advantages:
                  </p>
                  {item.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#74A746] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-[#FAF8F2] border border-[#C59B27]/20 text-xs mb-5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-medium">Bulk Supply Volume:</span>
                    <span className="font-bold text-[#2D4A22]">{item.typicalVolume}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-medium">Packaging Spec:</span>
                    <span className="font-bold text-[#C59B27]">{item.packagingRecommendation}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenOrderModal(item.title)}
                  className="w-full py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C59B27] to-[#2D4A22] shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Bulk Order For {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Desktop 4-Card Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_ITEMS.map((item) => {
            const Icon = iconMap[item.icon] || Building2;
            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 bg-white border border-[#2D4A22]/15 shadow-[0_6px_25px_rgba(45,74,34,0.06)] hover:shadow-[0_12px_40px_rgba(45,74,34,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F7EF] border border-[#2D4A22]/15 text-[#2D4A22] group-hover:bg-gradient-to-br group-hover:from-[#C59B27] group-hover:to-[#2D4A22] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif-heading font-extrabold text-lg text-[#2D4A22] leading-tight m-0">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-bold text-[#C59B27] m-0">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{item.desc}</p>

                  {/* Sector Benefits */}
                  <div className="space-y-2 mb-5">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#74A746] shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Volume Badge */}
                  <div className="p-3 rounded-2xl bg-[#FAF8F2] border border-[#C59B27]/20 text-[11px] mb-4 space-y-1">
                    <div className="flex items-center justify-between text-gray-500">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#C59B27]" />
                        <span>Supply:</span>
                      </span>
                      <span className="font-bold text-[#2D4A22]">{item.typicalVolume}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                      <span className="flex items-center gap-1">
                        <Package className="w-3 h-3 text-[#74A746]" />
                        <span>Packs:</span>
                      </span>
                      <span className="font-bold text-[#C59B27] truncate max-w-[130px]">
                        {item.packagingRecommendation}
                      </span>
                    </div>
                  </div>

                  {/* Card Button */}
                  <button
                    onClick={() => onOpenOrderModal(item.title)}
                    className="w-full py-2.5 rounded-full text-xs font-bold text-[#2D4A22] bg-[#F2F7EF] hover:bg-[#2D4A22] hover:text-white border border-[#2D4A22]/20 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inquire for {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
