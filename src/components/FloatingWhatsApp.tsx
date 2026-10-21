import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-[950] flex-col items-end gap-2 font-sans">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative px-3.5 py-2 rounded-2xl bg-white shadow-xl border border-gray-100 text-xs font-semibold text-gray-800 flex items-center gap-2 max-w-[220px] animate-bounce">
          <span>Need fresh garlic delivered? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
        </div>
      )}

      {/* WhatsApp Button with pulse ring */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
          'Hello OM Enterprise, I want to order fresh peeled garlic.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
};
