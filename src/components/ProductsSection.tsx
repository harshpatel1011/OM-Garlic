import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Clock,
  ArrowRight,
  X,
  Award,
  Boxes,
  Zap,
  Scale,
  Thermometer,
  Layers,
} from 'lucide-react';
import { PRODUCTS_ITEMS } from '../data/garlicData';
import type { ProductItem } from '../types';

interface ProductsSectionProps {
  onOpenOrderModal: (defaultProduct?: string) => void;
}

// Product visual theme configurations
const productThemes: Record<
  string,
  {
    icon: React.ElementType;
    badgeBg: string;
    gradient: string;
    accentColor: string;
    cloveVisual: string;
  }
> = {
  'jumbo-peeled': {
    icon: Award,
    badgeBg: 'bg-[#C59B27]',
    gradient: 'from-[#1B3216] via-[#2D4A22] to-[#142611]',
    accentColor: '#E5B945',
    cloveVisual: 'Jumbo Selected Grade A+',
  },
  'standard-peeled': {
    icon: CheckCircle2,
    badgeBg: 'bg-[#2D4A22]',
    gradient: 'from-[#1E3517] via-[#284720] to-[#182C13]',
    accentColor: '#74A746',
    cloveVisual: 'High-Yield Kitchen Grade',
  },
  'crushed-garlic': {
    icon: Zap,
    badgeBg: 'bg-[#A27A15]',
    gradient: 'from-[#2C2411] via-[#3E3416] to-[#201A0B]',
    accentColor: '#F4CE6A',
    cloveVisual: 'Zero Additive Instant Mash',
  },
  'bulk-industrial': {
    icon: Boxes,
    badgeBg: 'bg-[#1B3216]',
    gradient: 'from-[#12220F] via-[#1A3316] to-[#0E1A0C]',
    accentColor: '#C59B27',
    cloveVisual: 'Commercial 20kg - 50kg Sacks',
  },
};

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenOrderModal }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextProduct = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % PRODUCTS_ITEMS.length);
  }, []);

  const prevProduct = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + PRODUCTS_ITEMS.length) % PRODUCTS_ITEMS.length);
  }, []);

  useEffect(() => {
    if (!isPaused && !selectedProduct) {
      autoPlayRef.current = setInterval(nextProduct, 4000);
      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }
  }, [isPaused, selectedProduct, nextProduct]);

  const currentMobileProd = PRODUCTS_ITEMS[mobileIndex];
  const currentMobileTheme = productThemes[currentMobileProd.id] || productThemes['jumbo-peeled'];
  const MobileThemeIcon = currentMobileTheme.icon;

  return (
    <section id="products" className="py-14 sm:py-20 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-[#C59B27]/30 text-[#C59B27] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Catalog</span>
          </div>

          <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#2D4A22] tracking-tight leading-tight mb-4">
            Fresh Peeled Garlic Varieties & Bulk Packs
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto m-0">
            Machine peeled, sorted into standard and jumbo grades, packed in food-grade vacuum
            pouches to seal in natural aroma and pungency.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (Card Carousel WITHOUT images)                     */}
        {/* ============================================================== */}
        <div
          className="sm:hidden select-none"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            setIsPaused(true);
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current !== null) {
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (diff > 40) nextProduct();
              else if (diff < -40) prevProduct();
            }
            touchStartX.current = null;
            setIsPaused(false);
          }}
        >
          <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-[#C59B27]/50 shadow-[0_12px_35px_rgba(45,74,34,0.12)]">
            {/* Visual Header Banner (Graphic UI instead of image) */}
            <div
              className={`p-6 bg-gradient-to-br ${currentMobileTheme.gradient} text-white relative overflow-hidden flex flex-col justify-between min-h-[170px]`}
            >
              {/* Background ambient pattern */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#FDF8E8] text-[11px] font-bold border border-white/20">
                  {currentMobileProd.tag}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#E5B945] text-[10px] font-bold border border-[#C59B27]/40">
                  Min. {currentMobileProd.minOrder}
                </span>
              </div>

              <div className="flex items-end justify-between relative z-10 mt-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5B945] block mb-1">
                    {currentMobileTheme.cloveVisual}
                  </span>
                  <h3 className="font-serif-heading font-extrabold text-xl text-white leading-tight m-0">
                    {currentMobileProd.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-md">
                  <MobileThemeIcon className="w-6 h-6 text-[#E5B945]" />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5">
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {currentMobileProd.desc}
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#FAF8F2] p-3.5 rounded-2xl border border-[#C59B27]/20 mb-4">
                <div>
                  <span className="text-gray-400 block text-[9.5px] uppercase font-bold">Purity:</span>
                  <span className="font-bold text-[#2D4A22]">{currentMobileProd.specs.purity}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9.5px] uppercase font-bold">Shelf Life:</span>
                  <span className="font-bold text-[#C59B27]">{currentMobileProd.shelfLife}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-gray-200/60">
                  <span className="text-gray-400 block text-[9.5px] uppercase font-bold">Bulk Packaging:</span>
                  <span className="font-semibold text-gray-800">{currentMobileProd.packaging}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(currentMobileProd)}
                  className="flex-1 py-2.5 rounded-full text-xs font-bold text-[#2D4A22] bg-[#FAF8F2] border border-[#2D4A22]/20 hover:bg-[#F2F7EF] transition-all cursor-pointer"
                >
                  Technical Specs
                </button>
                <button
                  onClick={() => onOpenOrderModal(currentMobileProd.title)}
                  className="flex-1 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C59B27] to-[#2D4A22] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Arrows & Dots */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prevProduct}
              aria-label="Previous product"
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#2D4A22] active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {PRODUCTS_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  aria-label={`Go to product ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === mobileIndex ? 'w-6 bg-[#C59B27]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextProduct}
              aria-label="Next product"
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#2D4A22] active:scale-95 transition-transform"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (4-column grid of Graphic Cards WITHOUT images)   */}
        {/* ============================================================== */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_ITEMS.map((prod) => {
            const theme = productThemes[prod.id] || productThemes['jumbo-peeled'];
            const ThemeIcon = theme.icon;

            return (
              <div
                key={prod.id}
                className="rounded-3xl overflow-hidden bg-white border border-[#2D4A22]/15 shadow-[0_6px_25px_rgba(45,74,34,0.06)] hover:shadow-[0_12px_36px_rgba(45,74,34,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header Banner */}
                  <div
                    className={`p-5 bg-gradient-to-br ${theme.gradient} text-white relative overflow-hidden flex flex-col justify-between min-h-[160px]`}
                  >
                    <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-white/10 blur-lg pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10">
                      <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#FDF8E8] text-[10px] font-bold border border-white/20">
                        {prod.tag}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[#E5B945] text-[10px] font-bold border border-[#C59B27]/40">
                        Min. {prod.minOrder}
                      </span>
                    </div>

                    <div className="flex items-end justify-between relative z-10 mt-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5B945] block mb-0.5">
                          {theme.cloveVisual}
                        </span>
                        <h3 className="font-serif-heading font-extrabold text-base lg:text-lg text-white leading-tight m-0">
                          {prod.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <ThemeIcon className="w-5 h-5 text-[#E5B945]" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {prod.desc}
                    </p>

                    {/* Quick specs box */}
                    <div className="p-3 rounded-2xl bg-[#FAF8F2] border border-[#C59B27]/20 text-[11px] space-y-1.5 mb-4">
                      <div className="flex items-center justify-between text-gray-600">
                        <span>Purity:</span>
                        <span className="font-bold text-[#2D4A22]">{prod.specs.purity}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                        <span>Shelf Life:</span>
                        <span className="font-bold text-[#C59B27]">{prod.shelfLife}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                        <span>Packs:</span>
                        <span className="font-semibold text-gray-800 truncate max-w-[130px]">
                          {prod.packaging}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="w-full py-2 rounded-full text-xs font-bold text-[#2D4A22] bg-[#FAF8F2] hover:bg-[#F2F7EF] border border-[#2D4A22]/15 transition-colors cursor-pointer"
                  >
                    View Technical Specs
                  </button>
                  <button
                    onClick={() => onOpenOrderModal(prod.title)}
                    className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C59B27] to-[#2D4A22] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Order Bulk Batch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Specs Modal (Clean UI without images) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
          <div className="fixed inset-0" onClick={() => setSelectedProduct(null)} />
          <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#C59B27]/30 max-h-[90vh] flex flex-col">
            <div className="h-2 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FAF8F2]">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C59B27]">
                  {selectedProduct.subtitle}
                </span>
                <h3 className="font-serif-heading font-extrabold text-lg text-[#2D4A22] leading-tight m-0">
                  {selectedProduct.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs">
              <p className="text-gray-600 leading-relaxed font-normal m-0">
                {selectedProduct.desc}
              </p>

              <div className="p-4 rounded-2xl bg-[#F2F7EF] border border-[#2D4A22]/10 space-y-2">
                <p className="font-bold text-[#2D4A22] text-xs uppercase tracking-wider mb-2">
                  Technical Specifications:
                </p>
                <div className="flex justify-between py-1 border-b border-gray-200/60">
                  <span className="text-gray-500">Purity Rating:</span>
                  <span className="font-bold text-[#2D4A22]">{selectedProduct.specs.purity}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200/60">
                  <span className="text-gray-500">Moisture Level:</span>
                  <span className="font-bold text-gray-800">{selectedProduct.specs.moisture}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200/60">
                  <span className="text-gray-500">Clove Size:</span>
                  <span className="font-bold text-gray-800">{selectedProduct.specs.cloveSize}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200/60">
                  <span className="text-gray-500">Chemical Preservatives:</span>
                  <span className="font-bold text-[#74A746]">0% (Nil - 100% Pure)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200/60">
                  <span className="text-gray-500">Shelf Life:</span>
                  <span className="font-bold text-[#C59B27]">{selectedProduct.shelfLife}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Pack Options:</span>
                  <span className="font-bold text-gray-800">{selectedProduct.packaging}</span>
                </div>
              </div>

              <div>
                <p className="font-bold text-[#2D4A22] mb-1.5">Recommended Commercial Sectors:</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.bestFor.map((bf, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-[#FAF8F2] border border-[#C59B27]/30 text-[11px] text-[#2D4A22] font-semibold"
                    >
                      {bf}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F2] border-t border-gray-100 flex gap-2">
              <button
                onClick={() => {
                  const title = selectedProduct.title;
                  setSelectedProduct(null);
                  onOpenOrderModal(title);
                }}
                className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C59B27] to-[#2D4A22] shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book This Variety</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
