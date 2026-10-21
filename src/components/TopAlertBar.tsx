import React from 'react';
import { Sparkles, Phone, MapPin, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

interface TopAlertBarProps {
  isVisible: boolean;
}

export const TopAlertBar: React.FC<TopAlertBarProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-[1000] h-9 bg-gradient-to-r from-[#1B3216] via-[#2D4A22] to-[#1B3216] text-[#FDF8E8] text-xs font-medium px-3 sm:px-6 flex items-center justify-between shadow-sm border-b border-[#C59B27]/30 transition-all duration-300">
      {/* Left: Fresh batch announcement */}
      <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C59B27]/25 text-[#E5B945] font-semibold text-[11px] border border-[#C59B27]/40 shrink-0">
          <Sparkles className="w-3 h-3 text-[#E5B945] animate-pulse" />
          <span>Fresh Batch Ready</span>
        </span>
        <span className="hidden sm:inline text-white/90">
          Direct wholesale supplier of 100% natural peeled garlic across Ahmedabad & Gujarat
        </span>
        <span className="sm:hidden text-white/90 truncate">
          Daily fresh peeled garlic delivery in Ahmedabad
        </span>
      </div>

      {/* Right: Quick contacts & event */}
      <div className="flex items-center gap-4 shrink-0 text-[11px] text-[#FDF8E8]">
        <div className="hidden md:flex items-center gap-1.5 text-white/80">
          <Calendar className="w-3 h-3 text-[#C59B27]" />
          <span>Opening: 20-10-2026 (Kathwada)</span>
        </div>
        <div className="hidden lg:flex items-center gap-1 text-white/80">
          <MapPin className="w-3 h-3 text-[#C59B27]" />
          <span>Kathwada, Ahmedabad</span>
        </div>
        <a
          href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
          className="flex items-center gap-1 text-[#E5B945] font-bold hover:text-white transition-colors"
        >
          <Phone className="w-3 h-3" />
          <span>{COMPANY_INFO.phones.primary}</span>
        </a>
      </div>
    </div>
  );
};
