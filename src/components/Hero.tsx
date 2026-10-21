import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
  Clock,
  Calculator,
  Award,
  Package,
  Building2,
  CheckCircle2,
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
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#10220F] via-[#1A3316] to-[#122310] text-white pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 font-sans"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C59B27]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-[350px] h-[350px] bg-[#446E33]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-[380px] h-[380px] bg-[#C59B27]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Badges (Visible ONLY on extra-wide screens 2xl and positioned strictly in outer margins) */}
      <div className="hidden 2xl:inline-flex absolute top-[36%] left-[3%] z-10 animate-roam-a items-center gap-2 px-4 py-2 rounded-full bg-[#10220F]/85 backdrop-blur-md border border-[#C59B27]/40 shadow-xl text-xs font-semibold text-[#FDF8E8] pointer-events-none">
        <Truck className="w-4 h-4 text-[#E5B945]" />
        <span>Daily Morning Delivery (7:00 AM)</span>
      </div>

      <div className="hidden 2xl:inline-flex absolute top-[34%] right-[3%] z-10 animate-roam-b items-center gap-2 px-4 py-2 rounded-full bg-[#10220F]/85 backdrop-blur-md border border-[#74A746]/50 shadow-xl text-xs font-semibold text-[#FDF8E8] pointer-events-none">
        <Leaf className="w-4 h-4 text-[#74A746]" />
        <span>100% Pure • No Chemical Bleach</span>
      </div>

      <div className="hidden 2xl:inline-flex absolute top-[62%] right-[4%] z-10 animate-roam-c items-center gap-2 px-4 py-2 rounded-full bg-[#10220F]/85 backdrop-blur-md border border-[#C59B27]/40 shadow-xl text-xs font-semibold text-[#FDF8E8] pointer-events-none">
        <Award className="w-4 h-4 text-[#E5B945]" />
        <span>Direct Factory Wholesale Pricing</span>
      </div>

      {/* Main Centered Content Container (Kevalon-style Majestic Centered Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C59B27]/50 text-[#FDF8E8] text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E5B945]" />
          <span>Automated Processing Unit • Kathwada, Ahmedabad</span>
        </div>

        {/* Main Headline with Serif Typography */}
        <h1 className="mb-5 sm:mb-7 flex flex-col gap-1 sm:gap-2 w-full m-0 p-0">
          <span className="font-serif-heading font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#E5B945] tracking-tight">
            Freshly Peeled Garlic
          </span>
          <span className="font-serif-heading font-extrabold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
            Quality You Can Trust.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-[#E1EBD7] max-w-2xl mb-8 sm:mb-10 font-normal px-2 sm:px-0">
          Ahmedabad’s premier wholesale processor of 100% natural, machine-peeled garlic cloves.
          Zero chemical bleach, zero kitchen waste, and dependable morning bulk delivery for{' '}
          <span className="text-[#F4CE6A] font-semibold">Hotels & Banquets</span>,{' '}
          <span className="text-[#F4CE6A] font-semibold">Restaurants</span>,{' '}
          <span className="text-[#F4CE6A] font-semibold">Caterers</span>, and{' '}
          <span className="text-[#F4CE6A] font-semibold">Food Processing Plants</span>.
        </p>

        {/* Dual Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-14">
          {/* Primary Wholesale Order Button */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shimmer-effect bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22] border border-[#E5B945]/40"
          >
            <span>Book Wholesale Order</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Secondary Calculator Button */}
          <button
            onClick={onScrollToCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 transition-all cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#E5B945]" />
            <span>Calculate Kitchen Savings</span>
          </button>
        </div>

        {/* 4 Clean Glassmorphism Highlight Cards (Centered & Balanced) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C59B27]/25 text-[#E5B945] flex items-center justify-center shrink-0 border border-[#C59B27]/40">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-white block leading-tight">
                99.9% Purity
              </span>
              <span className="text-[11px] text-gray-300 block mt-0.5">
                Spotless skin-free cloves
              </span>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#74A746]/25 text-[#74A746] flex items-center justify-center shrink-0 border border-[#74A746]/40">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-white block leading-tight">
                0% Bleach
              </span>
              <span className="text-[11px] text-gray-300 block mt-0.5">
                Pure natural aroma & oil
              </span>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C59B27]/25 text-[#E5B945] flex items-center justify-center shrink-0 border border-[#C59B27]/40">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-white block leading-tight">
                7:00 AM Delivery
              </span>
              <span className="text-[11px] text-gray-300 block mt-0.5">
                Ahmedabad morning routes
              </span>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#74A746]/25 text-[#74A746] flex items-center justify-center shrink-0 border border-[#74A746]/40">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-white block leading-tight">
                Bulk Packs
              </span>
              <span className="text-[11px] text-gray-300 block mt-0.5">
                5kg, 10kg, 20kg & 50kg
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Kevalon-style SVG Wave Transition to Section Below */}
      <div className="relative z-10 w-full leading-none mt-10 -mb-12 sm:-mb-16 pointer-events-none">
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
