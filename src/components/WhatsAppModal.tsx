import React, { useState, useEffect } from 'react';
import { X, Plane, CheckCheck, Loader2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/tourData';
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
  destinationTitle = 'Holiday Tours',
  defaultMessage,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Record lead to CRM in background
      submitLeadToCRM({
        fullName: trimmedName,
        phoneNumber: cleanPhone,
        destination: destinationTitle || 'Holiday Tours',
        source: 'WhatsApp Chat Popup Modal',
      }).catch((err) => console.error('Lead record error:', err));

      // 2. Build personalized WhatsApp URL
      const customMsg = defaultMessage
        ? defaultMessage
        : `Hello MyHappyJourney! My name is ${trimmedName} (${cleanPhone}). I am interested in custom holiday packages and best deals for ${destinationTitle}. Please share pricing and itinerary details.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMsg)}`;

      // 3. Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // 4. Close modal
      setTimeout(() => {
        setIsSubmitting(false);
        setName('');
        setPhone('');
        onClose();
      }, 400);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      onClose();
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
        className="relative w-full max-w-[380px] sm:max-w-[420px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col font-sans animate-in zoom-in-95 duration-200"
      >
        {/* Top Scenic Banner with Dark Scrim & WhatsApp Header */}
        <div className="relative h-36 sm:h-40 bg-slate-900 overflow-hidden flex flex-col justify-between p-4">
          {/* Background Scenic Travel Image */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85"
            alt="Scenic travel destination"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

          {/* Top Close Button */}
          <div className="relative z-10 flex justify-end">
            <button
              onClick={onClose}
              id="whatsapp-modal-close-btn"
              aria-label="Close WhatsApp chat popup"
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Agent / Brand Status Bar */}
          <div className="relative z-10 flex items-center gap-3">
            {/* WhatsApp Avatar with Plane Icon */}
            <div className="w-11 h-11 rounded-full bg-[#059669] border-2 border-white/80 shadow-md flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5 text-white" />
            </div>

            {/* Title & Online Status */}
            <div className="text-white min-w-0">
              <h3 className="text-sm sm:text-base font-bold leading-tight truncate drop-shadow-xs">
                MyHappyJourney — {destinationTitle}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs text-emerald-200/90 font-medium">
                  Online · Replies within minutes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body & Chat Bubble */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-[#F7F9FA] to-white flex-1 flex flex-col gap-4">
          
          {/* WhatsApp Style Speech Bubble */}
          <div className="relative bg-[#FAF7F2] p-3.5 sm:p-4 rounded-2xl rounded-tl-sm text-[#1D1D1F] border border-amber-100/60 shadow-xs">
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
              Hello! Welcome to <strong className="font-semibold text-gray-900">MyHappyJourney Tours</strong>!
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-2">
              Share your name and number and we&apos;ll connect with you on WhatsApp instantly with the best holiday deals!
            </p>

            {/* Timestamp with Double Checks */}
            <div className="flex items-center justify-end gap-1 mt-2 text-[10px] sm:text-[11px] text-gray-500 font-medium">
              <span>Now</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Name Input */}
            <div>
              <label
                htmlFor="wa-input-name"
                className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="wa-input-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                required
                className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-xs"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="wa-input-phone"
                className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="wa-input-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98765 43210"
                required
                className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-xs"
              />
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
              className="mt-1 w-full py-3 sm:py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  <span>Start WhatsApp Chat</span>
                </>
              )}
            </button>

            {/* Subtext under button */}
            <p className="text-center text-[11px] sm:text-xs text-gray-500 font-normal">
              Opens WhatsApp · No app needed on desktop
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};
