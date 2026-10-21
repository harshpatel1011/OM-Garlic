import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Users,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    industry: 'Restaurant / Cafe',
    volume: '5 - 10 Kg/day',
    location: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build prefilled WhatsApp message
    const text = `*New Order Inquiry - OM Enterprise Peeled Garlic*
Name: ${formData.name}
Phone: ${formData.phone}
Sector: ${formData.industry}
Requirement: ${formData.volume}
Delivery Location: ${formData.location || 'Ahmedabad'}
Notes: ${formData.notes || 'None'}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#FAF8F2] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5EFE1] border border-[#2D4A22]/20 text-[#2D4A22] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Connect & Order</span>
          </div>

          <h2 className="font-serif-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#2D4A22] tracking-tight leading-tight mb-4">
            Get Fresh Peeled Garlic Delivered Daily
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto m-0">
            Call our team directly or send your order volume on WhatsApp for immediate wholesale rate
            quotes and sample batch scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Cards & Contacts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Order Hotlines */}
            <div className="rounded-3xl p-6 bg-white border border-[#2D4A22]/15 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C59B27] block mb-2">
                Orders & Enquiries Hotlines
              </span>

              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#F2F7EF] hover:bg-[#E5EFE1] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2D4A22] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs text-gray-900 block">Main Sales Line</span>
                      <span className="text-xs text-[#2D4A22] font-semibold">{COMPANY_INFO.phones.primary}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#C59B27] group-hover:underline">Call Now</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phones.secondary.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F2] hover:bg-[#F3ECCE] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#C59B27] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs text-gray-900 block">Alternate Line</span>
                      <span className="text-xs text-[#2D4A22] font-semibold">{COMPANY_INFO.phones.secondary}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#2D4A22] group-hover:underline">Call Now</span>
                </a>
              </div>
            </div>

            {/* Patel Key Partners */}
            <div className="rounded-3xl p-6 bg-white border border-[#2D4A22]/15 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#C59B27]" />
                <span className="text-xs font-bold text-[#2D4A22] uppercase tracking-wider">
                  Direct Partner Contacts
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50">
                  <span className="font-semibold text-gray-800">Adhrav Patel:</span>
                  <a href={`tel:${COMPANY_INFO.phones.adhrav}`} className="font-bold text-[#2D4A22]">
                    {COMPANY_INFO.phones.adhrav}
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50">
                  <span className="font-semibold text-gray-800">Yash Patel:</span>
                  <a href={`tel:${COMPANY_INFO.phones.yash}`} className="font-bold text-[#2D4A22]">
                    {COMPANY_INFO.phones.yash}
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50">
                  <span className="font-semibold text-gray-800">Sagar Patel:</span>
                  <a href={`tel:${COMPANY_INFO.phones.sagar}`} className="font-bold text-[#2D4A22]">
                    {COMPANY_INFO.phones.sagar}
                  </a>
                </div>
              </div>
            </div>

            {/* Plant & Hub Addresses */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-[#1B3216] to-[#2D4A22] text-white space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E5B945] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-bold text-[#E5B945] block">Processing Plant:</span>
                  <p className="text-white/85 m-0 leading-relaxed">
                    {COMPANY_INFO.address.plant}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-[#74A746] shrink-0 mt-1" />
                <div className="text-xs">
                  <span className="font-bold text-[#74A746] block">Distribution Hub:</span>
                  <p className="text-white/85 m-0">{COMPANY_INFO.address.hub}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10 text-xs text-white/80">
                <Clock className="w-4 h-4 text-[#E5B945] shrink-0" />
                <span>Morning Dispatch: 7:00 AM - 11:00 AM Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Order Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#C59B27]/40 shadow-[0_12px_40px_rgba(45,74,34,0.10)] relative">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

              <h3 className="font-serif-heading font-extrabold text-xl sm:text-2xl text-[#2D4A22] mb-1">
                Request Instant Wholesale Quote
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-normal">
                Fill the details below to receive wholesale pricing or start doorstep delivery.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Your Name / Business Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chef Sanjay / Swad Restaurant"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">WhatsApp / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sector */}
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Industry / Sector</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2] cursor-pointer"
                    >
                      <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                      <option value="Hotel / Banquet">Hotel / Banquet</option>
                      <option value="Food Processing / Cloud Kitchen">Food Processing / Cloud Kitchen</option>
                      <option value="Home Delivery">Home Delivery</option>
                      <option value="Catering Service">Catering Service</option>
                    </select>
                  </div>

                  {/* Volume */}
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Estimated Daily Requirement</label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2] cursor-pointer"
                    >
                      <option value="1 - 2 Kg (Trial / Home)">1 - 2 Kg (Trial / Home)</option>
                      <option value="5 - 10 Kg/day">5 - 10 Kg/day (Cafe / Small Restro)</option>
                      <option value="15 - 30 Kg/day">15 - 30 Kg/day (Large Restaurant)</option>
                      <option value="50 - 100 Kg/day">50 - 100 Kg/day (Hotel / Banquet)</option>
                      <option value="100+ Kg Bulk">100+ Kg/day (Industrial / Wholesale)</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Delivery Area / Address in Ahmedabad</label>
                  <input
                    type="text"
                    placeholder="e.g. Nikol, Kathwada, SG Highway, Naroda..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2]"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Special Requirements (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Jumbo cloves preferred, need free sample first..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2]"
                  />
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Order via WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
                    className="px-6 py-3.5 rounded-full text-xs font-bold text-[#2D4A22] bg-[#FAF8F2] hover:bg-[#F2F7EF] border border-[#2D4A22]/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#C59B27]" />
                    <span>Call Sales Directly</span>
                  </a>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-800 flex items-center gap-2 mt-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>WhatsApp message generated! Connecting you with OM Enterprise...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
