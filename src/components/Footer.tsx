import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Package,
  Factory,
  ChevronRight,
  ExternalLink,
  MessageCircle,

} from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';
import { Instagram } from './InstagramIcon';

interface FooterProps {
  onOpenOrderModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home Overview', href: '#hero' },
    { label: 'Why OM Enterprise', href: '#why-us' },
    { label: 'Peeled Garlic Varieties', href: '#products' },
    { label: 'Industries We Serve', href: '#industries' },
    { label: 'Kitchen Savings Calculator', href: '#calculator' },
    { label: 'Grand Opening Ceremony', href: '#grand-opening' },
    { label: 'FAQ & Storage Guide', href: '#faq' },
    { label: 'Contact & Orders', href: '#contact' },
  ];

  const commercialSectors = [
    { name: 'Hotels, Banquets & Resorts', badge: 'High Volume' },
    { name: 'Multi-Outlet Restaurant Chains', badge: 'Daily Morning Supply' },
    { name: 'Fine Dining, Cafes & Dhabas', badge: 'Spotless Clove Grade' },
    { name: 'Wedding Caterers & Base Kitchens', badge: 'Event Master Sacks' },
    { name: 'Garlic Paste & Food Manufacturers', badge: 'Industrial Scale' },
    { name: 'Namkeen & Pickle Units', badge: 'Consistent Pungency' },
  ];

  const partnerContacts = [
    { name: 'Adhrav Patel', phone: COMPANY_INFO.phones.adhrav },
    { name: 'Sagar Patel', phone: COMPANY_INFO.phones.sagar },
    { name: 'Yash Patel', phone: COMPANY_INFO.phones.yash },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#112410] via-[#0E1E0E] to-[#0A160A] text-white pt-14 sm:pt-20 pb-24 sm:pb-14 border-t border-[#C59B27]/30 relative overflow-hidden font-sans">
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-44 bg-[#C59B27]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2D4A22]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#C59B27]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer Grand Enterprise Banner */}
        <div className="mb-14 sm:mb-20 rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#183216] via-[#25461E] to-[#162E14] border-2 border-[#C59B27]/40 shadow-[0_20px_60px_rgba(0,0,0,0.35)] relative overflow-hidden">
          {/* Subtle gold line on top */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C59B27] via-[#F4CE6A] to-[#2D4A22]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2]/10 border border-[#C59B27]/40 text-[#E5B945] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial B2B Garlic Supply • Kathwada, Ahmedabad</span>
              </div>

              <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl text-white tracking-tight leading-tight m-0">
                Upgrade Your Kitchen With Spotless, Machine-Peeled Garlic
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-normal m-0">
                Direct factory pricing straight from our Kathwada processing unit. Zero chemical wash,
                100% usable garlic weight, and scheduled early morning deliveries across Ahmedabad.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              {onOpenOrderModal && (
                <button
                  onClick={onOpenOrderModal}
                  className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shimmer-effect bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22] border border-[#E5B945]/40"
                >
                  <span>Book Wholesale Order</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              )}

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hi OM Enterprise, I am inquiring about bulk peeled garlic supply for my business.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Feature Trust Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20">
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C59B27]/20 border border-[#C59B27]/30 text-[#E5B945] flex items-center justify-center shrink-0">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs text-white block">Direct Kathwada Plant</span>
              <span className="text-[11px] text-gray-400">Zero middleman margins</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D4A22]/40 border border-[#74A746]/40 text-[#74A746] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs text-white block">100% Machine Peeled</span>
              <span className="text-[11px] text-gray-400">Zero chemicals or bleach</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C59B27]/20 border border-[#C59B27]/30 text-[#E5B945] flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs text-white block">5kg to 50kg Master Bags</span>
              <span className="text-[11px] text-gray-400">Food-grade vacuum packs</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D4A22]/40 border border-[#74A746]/40 text-[#74A746] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs text-white block">Daily Morning Drops</span>
              <span className="text-[11px] text-gray-400">Ahmedabad scheduled routes</span>
            </div>
          </div>
        </div>

        {/* Main Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#C59B27] bg-[#FAF8F2] p-1 shrink-0 shadow-md">
                <img
                  src="/images/om-logo.jpg"
                  alt="OM Enterprise Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif-heading font-extrabold text-2xl text-white block leading-none tracking-tight">
                  OM <span className="text-[#E5B945]">ENTERPRISE</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C59B27] block mt-1">
                  Premium Peeled Garlic
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Ahmedabad’s dedicated bulk processor of premium natural peeled garlic cloves. Providing
              hygienic, spotless garlic to commercial culinary kitchens with guaranteed freshness,
              labor savings, and price stability.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-[#C59B27]/25 space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5B945] block">
                Brand Core Slogan
              </span>
              <p className="text-white/90 text-xs font-serif-heading italic m-0 leading-snug">
                Quality You Can Trust • Pure Garlic for a Healthier Tomorrow
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-3 py-1 rounded-full bg-[#1A3316] text-[#E5B945] border border-[#C59B27]/30 font-semibold">
                Kathwada Facility
              </span>
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-[#1A3316] hover:bg-[#25461E] text-[#E5B945] border border-[#C59B27]/40 font-semibold inline-flex items-center gap-1.5 transition-all"><Instagram className="w-3.5 h-3.5 text-[#E5B945]" /><span>@{COMPANY_INFO.instagramHandle}</span></a>
              <span className="px-3 py-1 rounded-full bg-[#1A3316] text-white/90 border border-white/10 font-medium">
                B2B Bulk Commercial Only
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5B945] block mb-4 flex items-center gap-1.5">
              <span>Explore</span>
              <span className="w-8 h-[2px] bg-[#C59B27]/40 rounded-full" />
            </span>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C59B27] transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Commercial Sectors */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5B945] block mb-4 flex items-center gap-1.5">
              <span>Sectors Served</span>
              <span className="w-8 h-[2px] bg-[#C59B27]/40 rounded-full" />
            </span>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0 text-gray-300">
              {commercialSectors.map((sector) => (
                <li key={sector.name} className="flex flex-col gap-0.5">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74A746] shrink-0" />
                    <span>{sector.name}</span>
                  </span>
                  <span className="text-[10.5px] text-gray-400 pl-3">
                    {sector.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contacts & Plant */}
          <div className="lg:col-span-3 space-y-3.5 text-xs">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5B945] block mb-4 flex items-center gap-1.5">
              <span>Direct Contact</span>
              <span className="w-8 h-[2px] bg-[#C59B27]/40 rounded-full" />
            </span>

            {/* Main Phone Link */}
            <a
              href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
              className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#C59B27]/30 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#C59B27]/25 text-[#E5B945] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Sales Desk</span>
                  <span className="font-bold text-white text-xs">{COMPANY_INFO.phones.primary}</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#E5B945] group-hover:underline">Call</span>
            </a>

            {/* Instagram Official Page */}
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#C59B27]/30 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C59B27] to-[#2D4A22] text-[#FDF8E8] flex items-center justify-center shrink-0 shadow-xs border border-[#C59B27]/40">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#E5B945] block">Instagram</span>
                  <span className="font-bold text-white text-xs">@{COMPANY_INFO.instagramHandle}</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#E5B945] group-hover:underline flex items-center gap-1">
                <span>Follow</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            {/* Operating Hours */}
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#E5B945] shrink-0" />
                <span>Operating Hours:</span>
              </div>
              <p className="text-gray-300 text-[11px] pl-5.5 m-0">Mon – Sat: 9:00 AM – 5:00 PM</p>
              <p className="text-[#74A746] text-[10.5px] font-medium pl-5.5 m-0">Early Dispatch from 7:00 AM</p>
            </div>

            {/* Partner Contacts (Patel Family) */}
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#E5B945] block">
                Partner Contacts (Patel Family)
              </span>
              <div className="space-y-1.5">
                {partnerContacts.map((partner) => (
                  <div key={partner.name} className="flex items-center justify-between text-[11.5px]">
                    <span className="text-gray-300">{partner.name}:</span>
                    <a
                      href={`tel:${partner.phone}`}
                      className="font-bold text-white hover:text-[#E5B945] transition-colors"
                    >
                      {partner.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Facility & Dispatch Address */}
            <a
              href={COMPANY_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-gradient-to-br from-[#1A3316] to-[#25461E] border border-[#C59B27]/40 flex items-start gap-2.5 text-gray-200 hover:text-white transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#E5B945] shrink-0 mt-0.5" />
              <div className="space-y-1 flex-1">
                <span className="font-bold text-white text-[11px] block flex items-center justify-between">
                  <span>Kathwada Processing Facility</span>
                  <ExternalLink className="w-3 h-3 text-[#E5B945] opacity-75 group-hover:opacity-100" />
                </span>
                <span className="text-[10.5px] text-gray-300 leading-snug block">
                  79 VR Industrial Park-2, Kathwada Singarwa Road, Kathwada, Ahmedabad - 382430
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Attribution & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="m-0 text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white">OM Enterprise</strong>. Premium Peeled Garlic Wholesale Processor. All rights reserved. • Kathwada, Ahmedabad, Gujarat.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs text-gray-300 hover:text-white transition-all cursor-pointer group active:scale-95 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E5B945] transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
