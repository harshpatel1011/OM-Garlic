import React, { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  Phone,
  CheckCircle2,
  Package,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/garlicData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
  defaultVolume?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  defaultProduct,
  defaultVolume,
}) => {
  const [volume, setVolume] = useState(defaultVolume || '5 Kg');
  const [customerType, setCustomerType] = useState('Restaurant');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    if (defaultVolume) {
      setVolume(defaultVolume);
    }
  }, [defaultVolume, isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `*New Order Booking - OM Enterprise Peeled Garlic*
Quantity: ${volume}
Customer Type: ${customerType}
Name: ${name || 'Customer'}
Phone: ${phone || 'Not provided'}
Delivery Area: ${area || 'Ahmedabad'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[2050] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#C59B27]/40 max-h-[92vh] flex flex-col">
        {/* Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-[#C59B27] via-[#D4A346] to-[#2D4A22]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-gray-100 flex items-center justify-between bg-[#FAF8F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#C59B27] to-[#2D4A22] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C59B27] block">
                Quick Order & Quote
              </span>
              <h3 className="font-serif-heading font-extrabold text-lg text-[#2D4A22] leading-tight m-0">
                Book Fresh Peeled Garlic
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSend} className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs">
          {/* Quantity & Business Sector */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-gray-700 block mb-1">Quantity</label>
              <select
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2] cursor-pointer"
              >
                {!['5 Kg', '10 Kg', '15 Kg', '20 Kg', '25 Kg', '30 Kg', '50 Kg', '100 Kg', '100+ Kg', '500+ Kg'].includes(volume) && (
                  <option value={volume}>{volume}</option>
                )}
                <option value="5 Kg">5 Kg</option>
                <option value="10 Kg">10 Kg</option>
                <option value="15 Kg">15 Kg</option>
                <option value="20 Kg">20 Kg</option>
                <option value="25 Kg">25 Kg</option>
                <option value="30 Kg">30 Kg</option>
                <option value="50 Kg">50 Kg</option>
                <option value="100 Kg">100 Kg</option>
                <option value="100+ Kg">100+ Kg</option>
                <option value="500+ Kg">500+ Kg</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1">Business Sector</label>
              <select
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2] cursor-pointer"
              >
                <option value="Hotel / Banquet">Hotel / Resort / Banquet</option>
                <option value="Restaurant / Cafe">Restaurant / Cafe / Dhaba</option>
                <option value="Catering Service">Catering & Event Service</option>
                <option value="Cloud Kitchen">Central Cloud Kitchen Cluster</option>
                <option value="Food Processing Factory">Food Processing / Paste Factory</option>
                <option value="Wholesale Distributor">Wholesale Food Distributor</option>
              </select>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-gray-700 block mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Patel"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2]"
              />
            </div>
            <div>
              <label className="font-bold text-gray-700 block mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2]"
              />
            </div>
          </div>

          {/* Area */}
          <div>
            <label className="font-bold text-gray-700 block mb-1">Ahmedabad Delivery Location *</label>
            <input
              type="text"
              required
              placeholder="e.g. Nikol, Kathwada, SG Highway, Prahlad Nagar, Naroda..."
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D4A22] bg-[#FAF8F2]"
            />
          </div>

          {/* Guarantee Pill */}
          <div className="p-3 rounded-2xl bg-[#F2F7EF] border border-[#2D4A22]/15 text-[11px] text-gray-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#74A746] shrink-0" />
            <span>100% natural peeled garlic • Zero chemicals • Daily morning drop</span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm & Order on WhatsApp</span>
            </button>
          </div>
        </form>

        {/* Modal Footer Call Options */}
        <div className="p-4 bg-[#FAF8F2] border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-gray-500 font-medium">Prefer to call?</span>
          <a
            href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-bold text-[#2D4A22] hover:text-[#C59B27]"
          >
            <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{COMPANY_INFO.phones.primary}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
