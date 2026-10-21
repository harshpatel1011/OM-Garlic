import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
  Clock,
  CheckCircle,
  Calculator,
  PhoneCall,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

interface HeroProps {
  onOpenOrderModal: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onScrollToCalculator }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#122411] via-[#1B3417] to-[#142813] text-white pt-28 sm:pt-36 pb-12 sm:pb-16"
    >
      {/* Ambient background glow & organic blur lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C59B27]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#446E33]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[320px] h-[320px] bg-[#C59B27]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Badges (Desktop Only, matching Kevalon's roam animations) */}
      <div className="hidden xl:flex absolute top-[28%] left-[5%] z-10 animate-roam-a items-center gap-2.5 px-4 py-2 rounded-full bg-[#122411]/80 backdrop-blur-md border border-[#C59B27]/40 shadow-lg text-xs font-semibold text-[#FDF8E8]">
        <Truck className="w-4 h-4 text-[#E5B945]" />
        <span>Daily Ahmedabad Morning Delivery</span>
      </div>

      <div className="hidden xl:flex absolute top-[45%] right-[5%] z-10 animate-roam-b items-center gap-2.5 px-4 py-2 rounded-full bg-[#122411]/80 backdrop-blur-md border border-[#446E33]/60 shadow-lg text-xs font-semibold text-[#FDF8E8]">
        <Leaf className="w-4 h-4 text-[#74A746]" />
        <span>100% Pure • No Bleach / Preservatives</span>
      </div>

      <div className="hidden xl:flex absolute bottom-[22%] left-[8%] z-10 animate-roam-c items-center gap-2.5 px-4 py-2 rounded-full bg-[#122411]/80 backdrop-blur-md border border-[#C59B27]/40 shadow-lg text-xs font-semibold text-[#FDF8E8]">
        <Clock className="w-4 h-4 text-[#E5B945]" />
        <span>Saves 70% Kitchen Prep Time & Labor</span>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C59B27]/50 text-[#FDF8E8] text-xs font-bold tracking-wide uppercase mb-5 sm:mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B945]" />
              <span>100% Machine Peeled & Hand Inspected</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] mb-4 sm:mb-6 text-white">
              Freshly Peeled Garlic.{' '}
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E5B945] via-[#F4CE6A] to-[#D4A346]">
                Quality You Can Trust.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#E3ECD9] leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal">
              Direct factory supply of crisp, spotless, and hygienic peeled garlic cloves. Zero
              chemicals, zero food waste, and ready-to-cook daily morning delivery for{' '}
              <span className="text-[#F4CE6A] font-semibold">Homes</span>,{' '}
              <span className="text-[#F4CE6A] font-semibold">Hotels</span>,{' '}
              <span className="text-[#F4CE6A] font-semibold">Restaurants</span>, and{' '}
              <span className="text-[#F4CE6A] font-semibold">Food Industries</span> in Ahmedabad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary Wholesale Order Button */}
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shimmer-effect bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22] border border-[#E5B945]/40"
              >
                <span>Book Wholesale Order</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {/* Secondary Calculator Button */}
              <button
                onClick={onScrollToCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#E5B945]" />
                <span>Calculate Savings</span>
              </button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/15 w-full">
              <div className="flex items-center gap-2 text-left">
                <CheckCircle className="w-4 h-4 text-[#74A746] shrink-0" />
                <span className="text-xs text-white/85 font-medium">99.9% Skin-Free Intact Cloves</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-4 h-4 text-[#E5B945] shrink-0" />
                <span className="text-xs text-white/85 font-medium">100% Food-Grade Packaging</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-left justify-center sm:justify-start">
                <Truck className="w-4 h-4 text-[#74A746] shrink-0" />
                <span className="text-xs text-white/85 font-medium">Same-Day Dispatch in Ahmedabad</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
              {/* Product Flyer Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#122411]">
                <img
                  src="/images/flyer-product.jpg"
                  alt="OM Enterprise Peeled Garlic Bowl"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Price / Batch Tag */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#1B3216]/90 backdrop-blur-md border border-[#C59B27]/50 text-[11px] font-bold text-[#E5B945] flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#74A746] animate-ping" />
                  <span>Fresh Morning Batch</span>
                </div>

                {/* Bottom Overlay Info on Card */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-left">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif-heading font-extrabold text-[#FDF8E8] text-sm">
                      OM Enterprise Fresh Garlic
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#C59B27] text-white">
                      Nikol Hub
                    </span>
                  </div>
                  <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed mb-2 m-0">
                    Whole jumbo peeled cloves packed in 1kg, 5kg & 20kg food-grade vacuum pouches.
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-white/10">
                    <span className="text-[#E5B945] font-semibold">Min. Order: 1 Kg</span>
                    <a
                      href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1 text-[#74A746] hover:text-white font-bold"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>{COMPANY_INFO.phones.primary}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kevalon-style SVG Wave Transition to Section Below */}
      <div className="relative z-10 w-full leading-none mt-8 -mb-12 sm:-mb-16 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-16 block"
        >
          <path
            fill="#FAF8F2"
            d="M0,32 C320,70 640,0 960,35 C1160,55 1320,15 1440,32 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
};
