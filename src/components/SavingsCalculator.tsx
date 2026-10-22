import React, { useState } from 'react';
import {
  Calculator,
  Clock,
  TrendingDown,
  Trash2,
  DollarSign,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface SavingsCalculatorProps {
  onOpenOrderModal: (defaultVolume?: string) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenOrderModal }) => {
  const [dailyKg, setDailyKg] = useState<number>(10);

  // Calculations based on industry kitchen metrics:
  // 1 kg manual peeling = ~18 minutes of helper labor
  // Monthly days = 30 days
  const monthlyKg = dailyKg * 30;
  const hoursSavedPerMonth = Math.round((monthlyKg * 18) / 60);
  // Average kitchen helper labor rate: ~₹100/hr in Ahmedabad
  const laborSavedRupees = hoursSavedPerMonth * 100;
  // Raw unpeeled garlic has ~18% skin & root waste that is discarded
  const skinWasteKgSaved = Math.round(monthlyKg * 0.18);
  const skinWasteValueRupees = Math.round(skinWasteKgSaved * 120);
  const totalMonthlySavings = laborSavedRupees + skinWasteValueRupees;

  return (
    <section id="calculator" className="py-14 sm:py-20 bg-[#FAF8F2] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Explanatory Copy */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5EFE1] border border-[#2D4A22]/20 text-[#2D4A22] text-xs font-bold tracking-wider uppercase mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>ROI & Efficiency Calculator</span>
            </div>

            <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl text-[#2D4A22] tracking-tight leading-tight mb-4">
              How Much Time & Money Does Your Kitchen Save?
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
              Peeling garlic by hand is one of the slowest, dirtiest, and most labor-intensive prep
              tasks in commercial cooking. See how switching to OM Enterprise ready-to-use peeled
              garlic cuts kitchen waste and saves your business thousands every month.
            </p>

            <div className="space-y-3 hidden sm:block">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#2D4A22]/10 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-[#F2F7EF] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#2D4A22]" />
                </div>
                <div className="text-xs text-left">
                  <span className="font-bold text-[#2D4A22] block">Zero Morning Delay</span>
                  <span className="text-gray-500">Gravies and pastes start cooking immediately</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#2D4A22]/10 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-[#FAF8F2] flex items-center justify-center shrink-0">
                  <Trash2 className="w-4 h-4 text-[#C59B27]" />
                </div>
                <div className="text-xs text-left">
                  <span className="font-bold text-[#2D4A22] block">100% Usable Weight</span>
                  <span className="text-gray-500">Pay only for edible garlic, not dry bulb skins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Slider & Metrics Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden bg-white border-2 border-[#C59B27]/40 shadow-[0_12px_40px_rgba(45,74,34,0.10)] relative">
              <div className="h-2 w-full bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

              <div className="p-6 sm:p-8">
                {/* Slider Control */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="garlic-slider" className="text-xs sm:text-sm font-bold text-gray-700">
                    Daily Garlic Consumption:
                  </label>
                  <span className="font-serif-heading font-extrabold text-2xl text-[#2D4A22] px-3.5 py-1 rounded-xl bg-[#FAF8F2] border border-[#C59B27]/30">
                    {dailyKg} <span className="text-sm font-sans font-bold text-[#C59B27]">Kg / day</span>
                  </span>
                </div>

                <input
                  id="garlic-slider"
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={dailyKg}
                  onChange={(e) => setDailyKg(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#FAF8F2] rounded-lg appearance-none cursor-pointer accent-[#2D4A22] border border-gray-200"
                />

                {/* Desktop Slider Milestones */}
                <div className="hidden sm:flex justify-between text-[11px] font-semibold text-gray-400 mt-2">
                  <span>5 Kg (Cafe / Dhaba)</span>
                  <span>25 Kg (Restaurant)</span>
                  <span>50 Kg (Hotel / Banquet)</span>
                  <span>100 Kg (Catering / Factory)</span>
                </div>

                {/* Mobile Slider Milestones: Clean & Compact */}
                <div className="flex sm:hidden justify-between text-[11px] font-bold text-gray-500 mt-2 px-1">
                  <span>5 Kg</span>
                  <span>25 Kg</span>
                  <span>50 Kg</span>
                  <span>100 Kg</span>
                </div>
              </div>

              {/* Dynamic Result Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                {/* Hours saved */}
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#C59B27]/20 text-center">
                  <Clock className="w-5 h-5 text-[#C59B27] mx-auto mb-1.5" />
                  <span className="font-serif-heading font-extrabold text-2xl text-[#2D4A22] block leading-none">
                    {hoursSavedPerMonth}h
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 block mt-1">
                    Labor Hours Saved / Mo
                  </span>
                </div>

                {/* Skin waste prevented */}
                <div className="p-4 rounded-2xl bg-[#F2F7EF] border border-[#2D4A22]/20 text-center">
                  <Trash2 className="w-5 h-5 text-[#2D4A22] mx-auto mb-1.5" />
                  <span className="font-serif-heading font-extrabold text-2xl text-[#2D4A22] block leading-none">
                    {skinWasteKgSaved} Kg
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 block mt-1">
                    Skin Waste Eliminated
                  </span>
                </div>

                {/* Total savings */}
                <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-[#E5EFE1] border border-[#C59B27]/40 text-center">
                  <DollarSign className="w-5 h-5 text-[#2D4A22] mx-auto mb-1.5" />
                  <span className="font-serif-heading font-extrabold text-2xl text-[#2D4A22] block leading-none">
                    ₹{totalMonthlySavings.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-extrabold text-[#C59B27] block mt-1 uppercase">
                    Est. Monthly Savings
                  </span>
                </div>
              </div>

              {/* Callout box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1B3216] to-[#2D4A22] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <span className="text-xs font-bold text-[#E5B945] block">
                    Ready to streamline your kitchen?
                  </span>
                  <span className="text-[11px] text-white/80">
                    Get special bulk pricing for {dailyKg} kg/day daily supply in Ahmedabad.
                  </span>
                </div>
                <button
                  onClick={() => onOpenOrderModal(`${dailyKg} Kg / Day`)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-[#2D4A22] bg-[#FAF8F2] hover:bg-white shadow-sm hover:scale-105 transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Order {dailyKg} Kg Volume</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
