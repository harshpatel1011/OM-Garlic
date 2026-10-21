import React from 'react';
import { Phone, MessageCircle, ShoppingCart } from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

interface MobileBottomNavProps {
  onOpenOrderModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-[950] bg-white/95 backdrop-blur-lg border-t border-[#2D4A22]/15 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-2 flex items-center justify-around font-sans">
      {/* Call Direct */}
      <a
        href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-gray-700 hover:text-[#2D4A22] active:scale-90 transition-transform"
      >
        <div className="w-8 h-8 rounded-full bg-[#FAF8F2] border border-[#C59B27]/40 text-[#2D4A22] flex items-center justify-center">
          <Phone className="w-4 h-4 text-[#C59B27]" />
        </div>
        <span>Call Us</span>
      </a>

      {/* WhatsApp Direct */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
          'Hi OM Enterprise, I want to inquire about peeled garlic rates.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-gray-700 hover:text-green-600 active:scale-90 transition-transform"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center">
          <MessageCircle className="w-4 h-4 fill-[#25D366]" />
        </div>
        <span>WhatsApp</span>
      </a>

      {/* Instant Order Button */}
      <button
        onClick={onOpenOrderModal}
        className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22] text-white text-xs font-bold shadow-md active:scale-95 transition-transform cursor-pointer shimmer-effect relative overflow-hidden"
      >
        <ShoppingCart className="w-3.5 h-3.5" />
        <span>Quick Order</span>
      </button>
    </div>
  );
};
