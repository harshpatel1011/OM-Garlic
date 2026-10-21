import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  MessageCircle,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_ITEMS, INDUSTRIES_ITEMS } from '../data/garlicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122411] text-white pt-14 sm:pt-20 pb-20 sm:pb-12 border-t border-[#C59B27]/30 relative overflow-hidden font-sans">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C59B27] bg-[#FAF8F2] p-0.5 shrink-0">
                <img
                  src="/images/om-logo.jpg"
                  alt="OM Enterprise"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif-heading font-extrabold text-xl text-white block leading-none">
                  OM <span className="text-[#E5B945]">ENTERPRISE</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C59B27] block mt-1">
                  Premium Peeled Garlic
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Ahmedabad’s trusted direct processor of 100% natural, machine-peeled garlic cloves.
              Delivering hygienic, chemical-free garlic in wholesale bulk daily to hotels, restaurants,
              caterers, and food processing industries.
            </p>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5B945] block">
                Brand Promise
              </span>
              <p className="text-white/80 m-0 leading-snug">
                Quality You Can Trust • Pure Garlic for a Healthier Tomorrow
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5B945] block mb-3">
              Explore
            </span>
            <ul className="space-y-2 text-xs list-none p-0 m-0">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">
                  Why OM Enterprise
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Peeled Garlic Varieties
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-300 hover:text-white transition-colors">
                  Savings Calculator
                </a>
              </li>
              <li>
                <a href="#grand-opening" className="text-gray-300 hover:text-white transition-colors">
                  Grand Opening Ceremony
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ & Storage Guide
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Order & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectors */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5B945] block mb-3">
              Industries Served
            </span>
            <ul className="space-y-2 text-xs list-none p-0 m-0 text-gray-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74A746]" />
                <span>Hotels & Luxury Banquets</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74A746]" />
                <span>Fine Dining, Cafes & Dhabas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74A746]" />
                <span>Garlic Paste & Food Manufacturers</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74A746]" />
                <span>Namkeen & Pickle Units</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74A746]" />
                <span>Wedding Caterers & Institutional Kitchens</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info & Patel Family */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5B945] block mb-3">
              Direct Contact
            </span>

            <div className="space-y-2 text-gray-300">
              <a
                href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5B945] shrink-0" />
                <span>{COMPANY_INFO.phones.primary} / {COMPANY_INFO.phones.secondary}</span>
              </a>

              <div className="pt-2 border-t border-white/10 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                  Patel Family Contacts:
                </span>
                <p className="m-0">Adhrav Patel: <a href={`tel:${COMPANY_INFO.phones.adhrav}`} className="text-white hover:underline">{COMPANY_INFO.phones.adhrav}</a></p>
                <p className="m-0">Yash Patel: <a href={`tel:${COMPANY_INFO.phones.yash}`} className="text-white hover:underline">{COMPANY_INFO.phones.yash}</a></p>
                <p className="m-0">Sagar Patel: <a href={`tel:${COMPANY_INFO.phones.sagar}`} className="text-white hover:underline">{COMPANY_INFO.phones.sagar}</a></p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E5B945] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    79 VR Industrial Park-2, Kathwada Singarwa Road, Kathwada, Ahmedabad - 382430
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="m-0 text-center sm:text-left">
            © {new Date().getFullYear()} OM Enterprise. All rights reserved. • Nikol & Kathwada, Ahmedabad, Gujarat.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
