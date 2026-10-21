import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  ExternalLink,
  Award,
  Users,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

interface GrandOpeningSectionProps {
  onOpenOrderModal: () => void;
}

export const GrandOpeningSection: React.FC<GrandOpeningSectionProps> = ({ onOpenOrderModal }) => {
  const hosts = [
    { name: 'Adhrav Patel', phone: COMPANY_INFO.phones.adhrav },
    { name: 'Yash Patel', phone: COMPANY_INFO.phones.yash },
    { name: 'Sagar Patel', phone: COMPANY_INFO.phones.sagar },
  ];

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '79 VR Industrial park-2, kathwada singarwa road, kathwada ahmedabad'
  )}`;

  return (
    <section id="grand-opening" className="py-14 sm:py-20 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F2] border border-[#C59B27]/40 text-[#C59B27] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inauguration Ceremony</span>
          </div>

          <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#2D4A22] tracking-tight leading-tight mb-4">
            You Are Cordially Invited To Our Grand Opening
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto m-0">
            We are delighted to welcome chefs, hotel partners, restaurant owners, and food industry
            leaders to tour our modern peeled garlic processing facility in Kathwada, Ahmedabad.
          </p>
        </div>

        {/* Main Invitation Box */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-[#C59B27]/50 shadow-[0_16px_50px_rgba(45,74,34,0.12)] bg-[#FAF8F2] relative">
          {/* Top Gold & Green Bar */}
          <div className="h-2.5 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

          <div className="p-6 sm:p-10 lg:p-12">
            {/* Tagline */}
            <div className="text-center mb-8">
              <span className="text-[11px] sm:text-xs font-bold text-[#C59B27] uppercase tracking-[0.2em] block mb-1">
                Pure Garlic for a Healthier Tomorrow • Premium Quality Freshness Always
              </span>
              <h3 className="font-serif-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2D4A22] m-0">
                Grand Opening Ceremony
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2 leading-relaxed">
                Experience first-hand our automated peeling line, cold storage infrastructure, and
                collect your complimentary chef tasting sample pack.
              </p>
            </div>

            {/* Event Timing & Venue 3-Box Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Date */}
              <div className="p-5 rounded-2xl bg-white border border-[#C59B27]/30 text-center shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F2] text-[#C59B27] flex items-center justify-center mx-auto mb-2.5 border border-[#C59B27]/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-0.5">
                  Ceremony Date
                </span>
                <span className="font-serif-heading font-extrabold text-lg text-[#2D4A22] block">
                  {COMPANY_INFO.openingEvent.date}
                </span>
                <span className="text-xs font-semibold text-[#C59B27]">
                  ({COMPANY_INFO.openingEvent.day})
                </span>
              </div>

              {/* Time */}
              <div className="p-5 rounded-2xl bg-white border border-[#2D4A22]/20 text-center shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#F2F7EF] text-[#2D4A22] flex items-center justify-center mx-auto mb-2.5 border border-[#2D4A22]/20">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-0.5">
                  Timing
                </span>
                <span className="font-serif-heading font-extrabold text-lg text-[#2D4A22] block">
                  {COMPANY_INFO.openingEvent.time}
                </span>
                <span className="text-xs font-semibold text-[#74A746]">
                  Auspicious Muhurat
                </span>
              </div>

              {/* Venue */}
              <div className="p-5 rounded-2xl bg-white border border-[#C59B27]/30 text-center shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F2] text-[#C59B27] flex items-center justify-center mx-auto mb-2.5 border border-[#C59B27]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block mb-0.5">
                    Facility Venue
                  </span>
                  <span className="font-semibold text-xs text-[#2D4A22] block leading-snug line-clamp-2">
                    79 VR Industrial Park-2, Kathwada Singarwa Road, Kathwada
                  </span>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[11px] font-bold text-[#C59B27] hover:underline inline-flex items-center justify-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Invited By Patel Family */}
            <div className="border-t border-[#C59B27]/20 pt-6">
              <div className="text-center mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2D4A22] bg-[#E5EFE1] px-4 py-1 rounded-full border border-[#2D4A22]/20 inline-block">
                  Cordial Invitation By
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {hosts.map((host, idx) => (
                  <a
                    key={idx}
                    href={`tel:${host.phone.replace(/\s+/g, '')}`}
                    className="p-3.5 rounded-2xl bg-white border border-gray-200 hover:border-[#C59B27] hover:shadow-md transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#FAF8F2] text-[#2D4A22] group-hover:bg-[#2D4A22] group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-gray-900 block leading-tight">
                          {host.name}
                        </span>
                        <span className="text-[11px] text-[#C59B27] font-semibold block">
                          {host.phone}
                        </span>
                      </div>
                    </div>
                    <Phone className="w-4 h-4 text-gray-400 group-hover:text-[#2D4A22] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom RSVP & Sample Request */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22] shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Request Free Sample at Event
              </button>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#2D4A22] bg-white border border-[#2D4A22]/20 hover:bg-[#F2F7EF] transition-all inline-flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
