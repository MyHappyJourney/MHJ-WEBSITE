'use client';

import React, { useState, useEffect } from 'react';
import { X, Plane, CheckCheck, Loader2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/tourData';
import { TOP_DEPARTURE_CITIES, DESTINATION_OPTIONS } from '../constants/crm';
import { submitLeadToCRM } from '../services/leadService';

export interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationTitle?: string;
  defaultMessage?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  destinationTitle = 'Kerala',
  defaultMessage,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [destination, setDestination] = useState(destinationTitle);
  const [travelDate, setTravelDate] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync destination if destinationTitle prop changes
  useEffect(() => {
    if (destinationTitle) {
      setDestination(destinationTitle);
    }
  }, [destinationTitle]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setError('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedName = name.trim();
    const cleanPhone = phone.replace(/\D/g, '');
    const cleanCity = city.trim();

    const trimmedDate = travelDate.trim();

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!cleanCity) {
      setError('Please enter your departure city.');
      return;
    }

    if (!trimmedDate) {
      setError('Please select your travel date.');
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (trimmedDate < todayStr) {
      setError('Travel date cannot be in the past.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit lead to CRM via server-side /api/leads
      const result = await submitLeadToCRM({
        name: trimmedName,
        phone: cleanPhone,
        email: `${cleanPhone}@guest.myhappyjourney.co.in`,
        city: cleanCity,
        destination: destination || destinationTitle || 'Kerala',
        from_date: trimmedDate,
        duration: '6 NIGHTS / 7 DAYS (6N / 7D)',
        adults: 2,
        children: 0,
        budget: '',
      });

      if (!result.success || !result.ok) {
        setError(result.message || 'Unable to submit enquiry to CRM. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // 2. Build personalized WhatsApp URL
      const customMsg = defaultMessage
        ? defaultMessage
        : `Hello MyHappyJourney Team!\n\nI am interested in holiday packages for ${
            destination || destinationTitle
          }.\n\nName: ${trimmedName}\nPhone: ${cleanPhone}\nDeparture City: ${cleanCity}\nTravel Date: ${trimmedDate}\n\nPlease share customized itinerary and best quote.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMsg)}`;

      // 3. Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // 4. Close modal
      setTimeout(() => {
        setIsSubmitting(false);
        setName('');
        setPhone('');
        setCity('');
        setTravelDate('');
        onClose();
      }, 400);
    } catch (err: any) {
      console.error('WhatsApp modal submission error:', err);
      setError('An error occurred submitting your lead. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="whatsapp-chat-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="whatsapp-chat-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[400px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col font-sans animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
      >
        {/* Top Scenic Banner with WhatsApp Header */}
        <div className="relative h-28 sm:h-32 bg-slate-900 overflow-hidden flex flex-col justify-between p-4">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85"
            alt="Kerala backwaters and holiday destinations"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

          {/* Close Button */}
          <div className="relative z-10 flex justify-end">
            <button
              onClick={onClose}
              id="whatsapp-modal-close-btn"
              aria-label="Close WhatsApp chat popup"
              className="w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Title & Status */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#059669] border-2 border-white/80 shadow-md flex items-center justify-center shrink-0">
              <Plane className="w-4 h-4 text-white" />
            </div>

            <div className="text-white min-w-0">
              <h3 className="text-sm font-bold leading-tight truncate drop-shadow-xs">
                MyHappyJourney — {destinationTitle}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-200/90 font-medium">
                  Online · Instant WhatsApp Quote
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-[#F7F9FA] to-white flex-1 flex flex-col gap-3.5 text-left">
          {/* WhatsApp Style Speech Bubble */}
          <div className="relative bg-[#FAF7F2] p-3 rounded-2xl rounded-tl-sm text-[#1D1D1F] border border-amber-100/60 shadow-xs">
            <p className="text-xs text-gray-800 leading-relaxed font-normal">
              👋 Connect directly with our holiday specialist on WhatsApp for quick itinerary and best pricing!
            </p>
            <div className="flex items-center justify-end gap-1 mt-1.5 text-[10px] text-gray-500 font-medium">
              <span>Now</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            {/* Name */}
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                required
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-xs"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                WhatsApp / Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                required
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-xs"
              />
            </div>

            {/* Departure City */}
            <div>
              <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                Departure City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                list="wa-departure-cities"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Bangalore, Chennai, Mumbai"
                required
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-xs"
              />
              <datalist id="wa-departure-cities">
                {TOP_DEPARTURE_CITIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>

            {/* Destination & Approx. Travel Date in 2 columns */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-2 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#25D366] font-medium"
                >
                  {DESTINATION_OPTIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Travel Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-2 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:border-[#25D366]"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-xs text-red-600 font-medium bg-red-50 py-1.5 px-3 rounded-lg border border-red-100">
                {error}
              </p>
            )}

            {/* Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              id="wa-modal-start-chat-btn"
              className="mt-1 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Start WhatsApp Chat</span>
                </>
              )}
            </button>

            <p className="text-center text-[10px] text-gray-500 font-normal">
              Instant reply · 100% Privacy &amp; Zero Spam
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
