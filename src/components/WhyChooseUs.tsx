import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Sparkles,
  Leaf,
  Clock,
  PackageCheck,
  Truck,
  BadgePercent,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  ArrowRight,
  ShieldCheck,
  Award,
  Timer,
  TrendingDown,
  Zap,
  Package,
  Shield,
  Box,
  MapPin,
  Repeat,
  IndianRupee,
  TrendingUp,
  FileText,
  Ban,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS, COMPANY_INFO } from '../data/garlicData';
import type { FeatureItem } from '../types';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Leaf,
  Clock,
  PackageCheck,
  Truck,
  BadgePercent,
  CheckCircle2,
  ShieldCheck,
  Award,
  Timer,
  TrendingDown,
  Zap,
  Package,
  Shield,
  Box,
  MapPin,
  Repeat,
  IndianRupee,
  TrendingUp,
  FileText,
  Ban,
};

interface WhyChooseUsProps {
  onOpenOrderModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenOrderModal }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % WHY_CHOOSE_ITEMS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + WHY_CHOOSE_ITEMS.length) % WHY_CHOOSE_ITEMS.length);
  }, []);

  // Mobile Carousel Auto-play
  useEffect(() => {
    if (!isPaused && !selectedFeature) {
      autoPlayTimer.current = setInterval(nextSlide, 3500);
      return () => {
        if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      };
    }
  }, [isPaused, selectedFeature, nextSlide]);

  const currentFeature = WHY_CHOOSE_ITEMS[activeIndex];
  const CurrentIcon = iconMap[currentFeature.icon] || Sparkles;

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-white relative overflow-hidden font-sans">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF8F2] rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F2F7EF] rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2F7EF] border border-[#2D4A22]/20 text-[#2D4A22] text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
            <span>Why Choose OM Enterprise</span>
          </div>

          <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#2D4A22] tracking-tight leading-tight mb-4">
            Spotless Garlic Quality, Engineered For Kitchen Speed & Hygiene.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto m-0">
            From our high-capacity Kathwada plant to your hot pans, we deliver peeled garlic that
            meets rigorous standards of cleanliness, pungency, and zero kitchen waste.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (Matches Kevalon's swipeable circular card UI)     */}
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
              if (diff > 40) nextSlide();
              else if (diff < -40) prevSlide();
            }
            touchStartX.current = null;
            setIsPaused(false);
          }}
        >
          {/* Circular 3D-effect Card Row */}
          <div className="relative flex items-center justify-center gap-3 py-2 px-2 min-h-[300px]">
            {[-1, 0, 1].map((offset) => {
              const idx =
                (activeIndex + offset + WHY_CHOOSE_ITEMS.length) % WHY_CHOOSE_ITEMS.length;
              const item = WHY_CHOOSE_ITEMS[idx];
              const isCenter = offset === 0;
              const ItemIcon = iconMap[item.icon] || Sparkles;

              return (
                <div
                  key={`${item.id}-${offset}`}
                  onClick={() => {
                    if (offset === -1) prevSlide();
                    else if (offset === 1) nextSlide();
                    else setSelectedFeature(item);
                  }}
                  className={`flex-shrink-0 flex flex-col items-center justify-center text-center transition-all duration-300 rounded-2xl cursor-pointer ${
                    isCenter
                      ? 'w-[75vw] max-w-[280px] p-6 bg-gradient-to-b from-[#FAF8F2] to-white border-2 border-[#C59B27] shadow-[0_12px_32px_rgba(45,74,34,0.15)] scale-100 z-10'
                      : 'w-[15vw] max-w-[60px] p-2 bg-gray-50 border border-gray-200 opacity-40 scale-90 z-0'
                  }`}
                >
                  <div
                    className={`rounded-2xl flex items-center justify-center mb-3 transition-transform ${
                      isCenter
                        ? 'w-16 h-16 bg-gradient-to-br from-[#C59B27] to-[#2D4A22] text-white shadow-md'
                        : 'w-10 h-10 bg-gray-200 text-gray-500'
                    }`}
                  >
                    <ItemIcon className={isCenter ? 'w-8 h-8' : 'w-5 h-5'} />
                  </div>

                  <h3
                    className={`font-serif-heading font-extrabold leading-snug mb-2 ${
                      isCenter ? 'text-base text-[#2D4A22]' : 'hidden'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {isCenter && (
                    <>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C59B27] bg-[#FAF8F2] px-3 py-1 rounded-full border border-[#C59B27]/30">
                        Tap to learn more ↗
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              aria-label="Previous strength"
              className="w-9 h-9 rounded-full bg-[#FAF8F2] border border-[#2D4A22]/20 flex items-center justify-center text-[#2D4A22] active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {WHY_CHOOSE_ITEMS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIdx === activeIndex ? 'w-6 bg-[#2D4A22]' : 'w-2 bg-[#2D4A22]/25'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next strength"
              className="w-9 h-9 rounded-full bg-[#FAF8F2] border border-[#2D4A22]/20 flex items-center justify-center text-[#2D4A22] active:scale-95 transition-transform"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-2 m-0">
            Swipe left or right to explore strengths
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (Matches Kevalon's 3-column split view)          */}
        {/* ============================================================== */}
        <div className="hidden sm:grid grid-cols-12 rounded-3xl overflow-hidden border border-[#2D4A22]/15 shadow-[0_10px_40px_rgba(45,74,34,0.08)] bg-white min-h-[460px]">
          {/* Left Column: Strengths Tab List */}
          <div className="col-span-4 bg-[#FAF8F2] border-r border-[#2D4A22]/10 flex flex-col justify-between p-4">
            <div>
              <div className="px-3 py-2 border-b border-[#2D4A22]/10 mb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C59B27]">
                  Our Strengths
                </span>
              </div>
              <div className="space-y-1">
                {WHY_CHOOSE_ITEMS.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  const ItemIcon = iconMap[item.icon] || Sparkles;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#2D4A22] shadow-[0_4px_16px_rgba(45,74,34,0.10)] border border-[#C59B27]/40'
                          : 'text-gray-700 hover:bg-white/60 hover:text-[#2D4A22]'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-gradient-to-br from-[#C59B27] to-[#2D4A22] text-white shadow-sm'
                            : 'bg-[#2D4A22]/10 text-[#2D4A22]'
                        }`}
                      >
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-xs lg:text-sm flex-1 leading-snug">
                        {item.title}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-[#C59B27] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 mt-4 rounded-xl bg-white border border-[#2D4A22]/10 text-xs text-gray-600 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>Tested & certified food-grade hygienic processing</span>
            </div>
          </div>

          {/* Center Column: Detailed Feature In-Depth Spotlight */}
          <div className="col-span-5 p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C59B27]/30 text-xs font-bold text-[#C59B27] mb-4">
                <CurrentIcon className="w-3.5 h-3.5" />
                <span>Feature Spotlight</span>
              </div>

              <h3 className="font-serif-heading font-extrabold text-2xl lg:text-3xl text-[#2D4A22] leading-tight mb-3">
                {currentFeature.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                {currentFeature.desc}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-2.5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  What this means for your kitchen:
                </p>
                {currentFeature.highlights.slice(0, 4).map((hl, hlIdx) => (
                  <div key={hlIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#74A746] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedFeature(currentFeature)}
                className="text-xs font-bold text-[#2D4A22] hover:text-[#C59B27] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View Full Quality Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenOrderModal}
                className="px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C59B27] to-[#2D4A22] hover:shadow-md transition-all cursor-pointer"
              >
                Order This Grade
              </button>
            </div>
          </div>

          {/* Right Column: Statistics Cards */}
          <div className="col-span-3 bg-[#FAF8F2]/60 border-l border-[#2D4A22]/10 p-6 flex flex-col justify-center space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#2D4A22]/80 mb-1">
              Verified Metrics
            </p>

            {currentFeature.stats.map((st, stIdx) => {
              const StatIcon = iconMap[st.icon] || Award;
              return (
                <div
                  key={stIdx}
                  className="p-4 rounded-2xl bg-white border border-[#2D4A22]/10 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <StatIcon className="w-4 h-4 text-[#C59B27]" />
                    <span className="text-[11px] font-medium">{st.label}</span>
                  </div>
                  <span className="font-serif-heading font-extrabold text-2xl text-[#2D4A22]">
                    {st.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* FULL FEATURE MODAL (Kevalon-style Interactive Pop-up)          */}
      {/* ============================================================== */}
      {selectedFeature && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedFeature(null)}
          />
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#C59B27]/30 max-h-[90vh] flex flex-col">
            {/* Modal Top Bar */}
            <div className="h-2 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-gray-100 flex items-start justify-between bg-[#FAF8F2]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C59B27] to-[#2D4A22] text-white flex items-center justify-center shrink-0 shadow-md">
                  {React.createElement(iconMap[selectedFeature.icon] || Sparkles, {
                    className: 'w-6 h-6',
                  })}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#C59B27] uppercase block">
                    OM Enterprise Quality Standard
                  </span>
                  <h3 className="font-serif-heading font-extrabold text-lg sm:text-xl text-[#2D4A22] leading-tight m-0">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              <p className="text-sm text-gray-600 leading-relaxed font-normal m-0">
                {selectedFeature.desc}
              </p>

              {/* Highlights */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#2D4A22] mb-2.5">
                  What this means for you:
                </p>
                <div className="space-y-2 bg-[#F2F7EF] p-4 rounded-2xl border border-[#2D4A22]/10">
                  {selectedFeature.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#74A746] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#2D4A22] mb-2.5">
                  By the numbers:
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  {selectedFeature.stats.map((st, i) => {
                    const ModalStatIcon = iconMap[st.icon] || Award;
                    return (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#FAF8F2] border border-[#C59B27]/20 text-center"
                      >
                        <ModalStatIcon className="w-4 h-4 text-[#C59B27] mx-auto mb-1" />
                        <span className="font-serif-heading font-extrabold text-base text-[#2D4A22] block leading-none">
                          {st.value}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium block mt-1">
                          {st.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 bg-[#FAF8F2] border-t border-gray-100 flex items-center justify-between gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hi OM Enterprise, I am inquiring regarding your ${selectedFeature.title} garlic.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#C59B27] to-[#2D4A22] shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
