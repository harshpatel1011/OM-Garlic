import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/garlicData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-[#C59B27]/30 text-[#C59B27] text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl text-[#2D4A22] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto m-0">
            Everything you need to know about our peeled garlic freshness, storage guidelines,
            minimum orders, and delivery schedules in Ahmedabad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#FAF8F2] border-[#C59B27]/50 shadow-md'
                    : 'bg-white border-gray-200 hover:border-[#2D4A22]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#2D4A22] text-white'
                          : 'bg-[#F2F7EF] text-[#2D4A22]'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-[#1F2937] leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C59B27] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                    <p className="m-0 pl-9">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
