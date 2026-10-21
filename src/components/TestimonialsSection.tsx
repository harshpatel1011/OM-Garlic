import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { TESTIMONIALS_ITEMS } from '../data/garlicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F2] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5EFE1] border border-[#2D4A22]/20 text-[#2D4A22] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#2D4A22] tracking-tight leading-tight mb-4">
            Trusted by Chefs & Food Businesses Across Ahmedabad
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto m-0">
            Hear why hotel chefs, catering heads, and cloud kitchen operators choose OM Enterprise
            for their daily garlic supplies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-6 bg-white border border-[#2D4A22]/15 shadow-[0_6px_25px_rgba(45,74,34,0.06)] hover:shadow-[0_10px_35px_rgba(45,74,34,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C59B27] text-[#C59B27]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2D4A22]/20 group-hover:text-[#C59B27] transition-colors" />
                </div>

                {/* Feedback content */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C59B27] to-[#2D4A22] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {item.avatarText}
                </div>
                <div className="overflow-hidden text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs text-[#2D4A22] truncate">{item.name}</span>
                    <CheckCircle2 className="w-3 h-3 text-[#74A746] shrink-0" />
                  </div>
                  <span className="text-[11px] text-gray-500 block truncate">{item.role}</span>
                  <span className="text-[10px] text-[#C59B27] font-semibold block truncate">
                    {item.company} • {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
