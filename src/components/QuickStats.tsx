import React from 'react';
import { Scale, Clock, Users, ShieldCheck } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const stats = [
    {
      icon: Scale,
      value: '500+ Kg',
      label: 'Daily Processing',
      desc: 'Consistent daily supply from our Kathwada facility',
      color: '#C59B27',
    },
    {
      icon: Clock,
      value: '70%',
      label: 'Prep Time Saved',
      desc: 'Zero manual peeling or messy prep in your kitchen',
      color: '#2D4A22',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Commercial Clients',
      desc: 'Hotels, banquet halls & restaurants in Ahmedabad',
      color: '#C59B27',
    },
    {
      icon: ShieldCheck,
      value: '99.9%',
      label: 'Skin-Free Purity',
      desc: 'Machine peeled & hand-sorted whole intact cloves',
      color: '#2D4A22',
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#FAF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl p-4 sm:p-6 bg-white border border-[#2D4A22]/10 shadow-[0_4px_20px_rgba(45,74,34,0.06)] hover:shadow-[0_8px_30px_rgba(45,74,34,0.12)] transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{
                    background: `linear-gradient(90deg, ${stat.color}, #F4CE6A)`,
                  }}
                />

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F2F7EF] border border-[#2D4A22]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D4A22]" />
                  </div>
                  <div>
                    <span className="font-serif-heading font-extrabold text-2xl sm:text-3xl text-[#2D4A22] block leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-700 block mt-1">
                      {stat.label}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 m-0 leading-relaxed font-normal">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
