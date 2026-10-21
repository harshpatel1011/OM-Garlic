import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

interface NavbarProps {
  isScrolled: boolean;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsAccordion, setProductsAccordion] = useState(false);
  const [contactsAccordion, setContactsAccordion] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Products', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Opening', href: '#grand-opening' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Pill Navbar Header */}
      <header
        className={`fixed inset-x-0 z-[990] flex justify-center transition-all duration-300 font-sans ${
          isScrolled ? 'top-2 sm:top-3 px-3 sm:px-6' : 'top-11 sm:top-12 px-3 sm:px-6'
        }`}
      >
        <div
          className={`w-full max-w-[1360px] relative flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'rounded-full px-4 sm:px-6 py-2 bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(45,74,34,0.14),0_2px_8px_rgba(0,0,0,0.06)]'
              : 'rounded-2xl sm:rounded-full px-4 sm:px-7 py-2.5 sm:py-3 bg-white/90 backdrop-blur-lg border border-white/60 shadow-[0_6px_25px_rgba(45,74,34,0.08)]'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 cursor-pointer group"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C59B27]/40 shadow-sm shrink-0 bg-[#FAF8F2] flex items-center justify-center p-0.5">
              <img
                src="/images/om-logo.jpg"
                alt="OM Enterprise Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-heading font-extrabold text-[#2D4A22] text-[1.05rem] sm:text-[1.2rem] leading-none tracking-tight">
                  OM <span className="text-[#C59B27]">ENTERPRISE</span>
                </span>
              </div>
              <span className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#2D4A22]/75 leading-tight">
                Premium Peeled Garlic
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-1.5 text-[13.5px] font-semibold text-[#1F2937] hover:text-[#2D4A22] transition-colors rounded-full hover:bg-[#F2F7EF] relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#C59B27] to-[#2D4A22] transition-all duration-300 group-hover:w-4/5 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Quick Dial */}
            <a
              href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#2D4A22] bg-[#F2F7EF] border border-[#2D4A22]/15 hover:bg-[#E5EFE1] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className="hidden md:inline">Call Sales</span>
            </a>

            {/* Primary Order Button */}
            <button
              onClick={onOpenOrderModal}
              className="relative overflow-hidden inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shimmer-effect bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="flex lg:hidden flex-col justify-center items-center gap-[5px] w-9 h-9 p-1.5 rounded-xl bg-[#F2F7EF] border border-[#2D4A22]/10 cursor-pointer text-[#2D4A22] hover:bg-[#E5EFE1] transition-colors"
            >
              <span
                className={`block w-5 h-[2px] rounded-full bg-[#2D4A22] transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] rounded-full bg-[#2D4A22] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] rounded-full bg-[#2D4A22] transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-[1001] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer (Matches Kevalon Slide-in UI) */}
      <aside
        className={`fixed right-0 top-0 h-full w-[min(320px,85vw)] bg-white z-[1002] flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#2D4A22]/10 bg-[#FAF8F2]">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/om-logo.jpg"
              alt="OM Enterprise"
              className="w-9 h-9 rounded-full object-contain border border-[#C59B27]/40 p-0.5 bg-white"
            />
            <div>
              <p className="font-serif-heading font-extrabold text-[#2D4A22] text-sm leading-tight m-0">
                OM ENTERPRISE
              </p>
              <p className="text-[10px] font-bold text-[#C59B27] uppercase tracking-wider m-0">
                Premium Peeled Garlic
              </p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-full bg-[#2D4A22]/10 text-[#2D4A22] flex items-center justify-center hover:bg-[#2D4A22]/20 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {/* Main Links */}
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl font-semibold text-sm text-[#1F2937] hover:text-[#2D4A22] hover:bg-[#F2F7EF] transition-all flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]/50" />
            </button>
          ))}

          {/* Products Collapsible Accordion */}
          <div className="pt-2">
            <button
              onClick={() => setProductsAccordion(!productsAccordion)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F2F7EF] text-[#2D4A22] font-bold text-xs uppercase tracking-wider"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                Garlic Varieties
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsAccordion ? 'rotate-180' : ''
                }`}
              />
            </button>
            {productsAccordion && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-[#C59B27]/40 space-y-1 py-1">
                <button
                  onClick={() => handleLinkClick('#products')}
                  className="w-full text-left px-2 py-1.5 text-xs font-medium text-gray-700 hover:text-[#2D4A22]"
                >
                  • Jumbo Grade-A Peeled Garlic
                </button>
                <button
                  onClick={() => handleLinkClick('#products')}
                  className="w-full text-left px-2 py-1.5 text-xs font-medium text-gray-700 hover:text-[#2D4A22]"
                >
                  • Daily Kitchen Standard Grade
                </button>
                <button
                  onClick={() => handleLinkClick('#products')}
                  className="w-full text-left px-2 py-1.5 text-xs font-medium text-gray-700 hover:text-[#2D4A22]"
                >
                  • Fresh Coarse Crushed Garlic
                </button>
                <button
                  onClick={() => handleLinkClick('#products')}
                  className="w-full text-left px-2 py-1.5 text-xs font-medium text-gray-700 hover:text-[#2D4A22]"
                >
                  • Bulk Vacuum Master Packs (20kg+)
                </button>
              </div>
            )}
          </div>

          {/* Direct Key Contacts Accordion */}
          <div className="pt-1">
            <button
              onClick={() => setContactsAccordion(!contactsAccordion)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FAF8F2] text-[#2D4A22] font-bold text-xs uppercase tracking-wider border border-[#C59B27]/20"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                Direct Patel Contacts
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  contactsAccordion ? 'rotate-180' : ''
                }`}
              />
            </button>
            {contactsAccordion && (
              <div className="mt-1 ml-3 pl-3 border-l-2 border-[#2D4A22]/40 space-y-2 py-1.5">
                <a
                  href={`tel:${COMPANY_INFO.phones.adhrav.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between px-2 py-1 text-xs text-gray-800 hover:text-[#2D4A22]"
                >
                  <span className="font-semibold">Adhrav Patel</span>
                  <span className="text-[#C59B27] font-bold">{COMPANY_INFO.phones.adhrav}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones.yash.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between px-2 py-1 text-xs text-gray-800 hover:text-[#2D4A22]"
                >
                  <span className="font-semibold">Yash Patel</span>
                  <span className="text-[#C59B27] font-bold">{COMPANY_INFO.phones.yash}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones.sagar.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between px-2 py-1 text-xs text-gray-800 hover:text-[#2D4A22]"
                >
                  <span className="font-semibold">Sagar Patel</span>
                  <span className="text-[#C59B27] font-bold">{COMPANY_INFO.phones.sagar}</span>
                </a>
              </div>
            )}
          </div>

          {/* Plant Location Info */}
          <div className="mt-4 p-3 rounded-xl bg-[#F2F7EF]/80 border border-[#2D4A22]/15 text-xs space-y-1.5">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#2D4A22] shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700 leading-snug m-0">
                  <span className="font-bold text-[#2D4A22]">Plant:</span> 79 VR Industrial Park-2,
                  Kathwada Singarwa Road, Kathwada, Ahmedabad - 382430
                </p>
                <a
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C59B27] hover:underline mt-1"
                >
                  <span>Open in Google Maps ↗</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
              <span>Daily Delivery: 7:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Drawer Bottom CTAs */}
        <div className="p-4 border-t border-[#2D4A22]/10 bg-[#FAF8F2] space-y-2 shrink-0">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrderModal();
            }}
            className="w-full py-2.5 rounded-full text-xs font-bold text-white shadow-md bg-gradient-to-r from-[#C59B27] to-[#2D4A22] flex items-center justify-center gap-2 cursor-pointer shimmer-effect relative overflow-hidden"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Book Wholesale Order</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              'Hello OM Enterprise, I want to inquire about peeled garlic wholesale rates.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-full text-xs font-bold text-[#2D4A22] border border-[#2D4A22]/20 bg-white hover:bg-[#F2F7EF] flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
};
