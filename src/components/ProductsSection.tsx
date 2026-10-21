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
} from 'lucide-react';
import { PRODUCTS_ITEMS, COMPANY_INFO } from '../data/garlicData';
import type { ProductItem } from '../types';

interface ProductsSectionProps {
  onOpenOrderModal: (defaultProduct?: string) => void;
}

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
        {/* MOBILE VIEW (Matches Kevalon's swipeable card carousel)        */}
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
          <div className="relative rounded-3xl overflow-hidden bg-[#FAF8F2] border-2 border-[#C59B27]/50 shadow-[0_10px_30px_rgba(45,74,34,0.12)]">
            {/* Top gold bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

            {/* Product Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
              <img
                src={currentMobileProd.image}
                alt={currentMobileProd.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2D4A22] text-white text-[11px] font-bold shadow-md">
                {currentMobileProd.tag}
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#E5B945] text-[10px] font-semibold border border-white/20">
                Min. {currentMobileProd.minOrder}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C59B27]">
                  {currentMobileProd.subtitle}
                </span>
                <h3 className="font-serif-heading font-extrabold text-lg text-[#2D4A22] leading-tight m-0 mt-0.5">
                  {currentMobileProd.title}
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {currentMobileProd.desc}
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] bg-white p-3 rounded-2xl border border-gray-100 mb-4">
                <div>
                  <span className="text-gray-400 block text-[9.5px]">Purity:</span>
                  <span className="font-bold text-[#2D4A22]">{currentMobileProd.specs.purity}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9.5px]">Shelf Life:</span>
                  <span className="font-bold text-[#C59B27]">{currentMobileProd.shelfLife}</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-gray-100">
                  <span className="text-gray-400 block text-[9.5px]">Packs:</span>
                  <span className="font-semibold text-gray-800">{currentMobileProd.packaging}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(currentMobileProd)}
                  className="flex-1 py-2.5 rounded-full text-xs font-bold text-[#2D4A22] bg-white border border-[#2D4A22]/30 hover:bg-[#F2F7EF] transition-all cursor-pointer"
                >
                  Specs & Details
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
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#2D4A22]"
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
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#2D4A22]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (4-column grid of rich cards)                     */}
        {/* ============================================================== */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_ITEMS.map((prod) => (
            <div
              key={prod.id}
              className="rounded-3xl overflow-hidden bg-white border border-[#2D4A22]/15 shadow-[0_6px_25px_rgba(45,74,34,0.06)] hover:shadow-[0_12px_36px_rgba(45,74,34,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black/10">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2D4A22]/90 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
                    {prod.tag}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#E5B945] text-[10px] font-semibold border border-white/20">
                    Min. {prod.minOrder}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C59B27] block mb-1">
                    {prod.subtitle}
                  </span>
                  <h3 className="font-serif-heading font-extrabold text-base lg:text-lg text-[#2D4A22] leading-tight mb-2">
                    {prod.title}
                  </h3>
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
                  className="w-full py-2 rounded-full text-xs font-bold text-[#2D4A22] bg-[#F2F7EF] hover:bg-[#E5EFE1] transition-colors cursor-pointer"
                >
                  View Full Specs
                </button>
                <button
                  onClick={() => onOpenOrderModal(prod.title)}
                  className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C59B27] to-[#2D4A22] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Specs Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#C59B27]/30 max-h-[90vh] flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

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
                <p className="font-bold text-[#2D4A22] mb-1.5">Recommended For:</p>
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
