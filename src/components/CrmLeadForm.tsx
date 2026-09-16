'use client';

import React, { useState, useEffect } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Plus,
  Minus,
  Send,
  Loader2,
  CheckCircle2,
  Shield,
  Clock,
  Compass,
} from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import {
  BUDGET_OPTIONS,
  TOP_DEPARTURE_CITIES,
  KERALA_DURATION_OPTIONS,
  DESTINATION_OPTIONS,
} from '../constants/crm';
import { WHATSAPP_NUMBER } from '../data/tourData';
import { WhatsAppIcon } from './WhatsAppIcon';

export interface CrmLeadFormProps {
  destination: string;
  durations?: string[];
  durationOptions?: string[];
  selectedDuration?: string;
  isDestinationSelectable?: boolean;
  formTitle?: string;
  formSubtitle?: string;
  submitButtonText?: string;
  badgeText?: string;
  onSuccess?: (enquiryId: string | number | null) => void;
  isModal?: boolean;
}

export const CrmLeadForm: React.FC<CrmLeadFormProps> = ({
  destination: initialDestinationProp,
  durations,
  durationOptions,
  selectedDuration,
  isDestinationSelectable = false,
  formTitle = 'Request Your Custom Kerala Tour Quote',
  formSubtitle = 'Instant price estimate • 100% Customized Itinerary • No Hidden Charges',
  submitButtonText = 'Get Free Kerala Quote',
  badgeText,
  onSuccess,
  isModal = false,
}) => {
  const activeDurations =
    durationOptions && durationOptions.length > 0
      ? durationOptions
      : durations && durations.length > 0
      ? durations
      : KERALA_DURATION_OPTIONS;

  const initialDuration =
    selectedDuration && activeDurations.includes(selectedDuration)
      ? selectedDuration
      : activeDurations[0] || '6 NIGHTS / 7 DAYS (6N / 7D)';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [destination, setDestination] = useState(initialDestinationProp || 'Kerala');
  const [fromDate, setFromDate] = useState('');
  const [duration, setDuration] = useState(initialDuration);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [budget, setBudget] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState<string | number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync props if changed
  useEffect(() => {
    if (initialDestinationProp) {
      setDestination(initialDestinationProp);
    }
  }, [initialDestinationProp]);

  useEffect(() => {
    if (selectedDuration && activeDurations.includes(selectedDuration)) {
      setDuration(selectedDuration);
    } else if (!activeDurations.includes(duration)) {
      setDuration(activeDurations[0] || '6 NIGHTS / 7 DAYS (6N / 7D)');
    }
  }, [selectedDuration, activeDurations]);

  // Adults stepper handlers (Min 2, Max 20)
  const handleDecrementAdults = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdults((prev) => (prev > 2 ? prev - 1 : 2));
  };

  const handleIncrementAdults = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdults((prev) => (prev < 20 ? prev + 1 : 20));
  };

  // Children stepper handlers (Min 0, Max 10)
  const handleDecrementChildren = (e: React.MouseEvent) => {
    e.preventDefault();
    setChildren((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrementChildren = (e: React.MouseEvent) => {
    e.preventDefault();
    setChildren((prev) => (prev < 10 ? prev + 1 : 10));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setErrorMessage(null);

    // Validation
    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile phone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!city.trim() || city.trim().length < 2) {
      setErrorMessage('Please enter your departure city.');
      return;
    }

    const trimmedDate = fromDate.trim();
    if (!trimmedDate) {
      setErrorMessage('Please select your travel date.');
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (trimmedDate < todayStr) {
      setErrorMessage('Travel date cannot be in the past.');
      return;
    }

    if (!duration.trim()) {
      setErrorMessage('Please select a tour duration.');
      return;
    }

    if (adults < 2) {
      setErrorMessage('Number of adults must be at least 2.');
      return;
    }

    if (children < 0) {
      setErrorMessage('Number of children cannot be negative.');
      return;
    }

    // Construct Exact CRM payload
    const crmPayload = {
      name: trimmedName,
      email: email.trim(),
      phone: cleanPhone,
      city: city.trim(),
      destination: destination.trim(),
      from_date: trimmedDate,
      duration: duration.trim(),
      adults: Number(adults),
      children: Number(children),
      budget: budget.trim(),
    };

    setLoading(true);
    const result = await submitLeadToCRM(crmPayload, destination);
    setLoading(false);

    if (result.success && result.ok) {
      setSubmitted(true);
      setEnquiryId(result.enquiry_id || null);
      if (onSuccess) {
        onSuccess(result.enquiry_id || null);
      }
    } else {
      setErrorMessage(
        result.message ||
          'Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.'
      );
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEnquiryId(null);
    setErrorMessage(null);
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setFromDate('');
    setDuration(initialDuration);
    setAdults(2);
    setChildren(0);
    setBudget('');
  };

  const whatsappMsg = encodeURIComponent(
    `Hi MyHappyJourney, I would like to get a quote for ${destination}.\n\nName: ${
      name || 'Traveler'
    }\nCity: ${city || 'India'}\nDuration: ${duration}\nTravel Date: ${
      fromDate || 'Flexible'
    }\nGuests: ${adults} Adults, ${children} Children\nBudget: ${budget || 'Flexible'}`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  const minDateString = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <div className="text-center py-6 sm:py-8 space-y-4 animate-fade-in font-sans">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>

        <div>
          <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            ENQUIRY CONFIRMED
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
            Thank you! Your enquiry has been received.
          </h3>
          {enquiryId && (
            <div className="inline-block mt-2 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-[#0B3996]">
              Enquiry Reference: #{enquiryId}
            </div>
          )}
          <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-2 max-w-md mx-auto">
            Our travel expert will contact you shortly with a personalized itinerary &amp; best quote!
          </p>
        </div>

        <div className="pt-2 max-w-sm mx-auto space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp for Instant Itinerary</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-gray-500 font-semibold underline hover:text-gray-800 cursor-pointer pt-1"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-sans">
      {/* Header if not in compact modal */}
      {(formTitle || badgeText) && (
        <div className="mb-4 sm:mb-5">
          {badgeText && (
            <div className="inline-flex items-center gap-1.5 bg-[#EBF2FF] text-[#0B3996] px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider mb-1.5">
              <Compass className="w-3.5 h-3.5 text-[#0B3996]" />
              <span>{badgeText}</span>
            </div>
          )}
          {formTitle && (
            <h3
              className={`${
                isModal ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
              } font-black text-gray-900 tracking-tight`}
            >
              {formTitle}
            </h3>
          )}
          {formSubtitle && (
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5 font-medium">
              {formSubtitle}
            </p>
          )}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs font-bold rounded-xl border border-red-200">
          ⚠️ {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
        {/* Row 1: Full Name & Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <User className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Karthik"
                className="w-full pl-8 pr-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 8217873708"
                className="w-full pl-8 pr-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Email Address & Departure City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. brrealestates@gmail.com"
                className="w-full pl-8 pr-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Departure City <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                required
                list="departure-cities-list"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Bangalore"
                className="w-full pl-8 pr-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium"
              />
              <datalist id="departure-cities-list">
                {TOP_DEPARTURE_CITIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
          </div>
        </div>

        {/* Row 3: Destination & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Destination <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              {isDestinationSelectable ? (
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium cursor-pointer"
                >
                  {DESTINATION_OPTIONS.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  readOnly
                  value={destination}
                  className="w-full px-3 h-10.5 bg-gray-100 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#0B3996] font-bold outline-none cursor-not-allowed"
                />
              )}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Duration <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full pl-8 pr-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium cursor-pointer"
              >
                {activeDurations.map((dur) => (
                  <option key={dur} value={dur}>
                    {dur}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 4: Travel Date & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Travel Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <input
                type="date"
                required
                min={minDateString}
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full pl-8 pr-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Budget (Per Person)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <DollarSign className="w-3.5 h-3.5" />
              </div>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full pl-8 pr-3 h-10.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:bg-white focus:border-[#0B3996] focus:ring-2 focus:ring-[#0B3996]/20 transition-all outline-none font-medium cursor-pointer"
              >
                <option value="">Select Budget (Optional)</option>
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 5: Adults Stepper [- 2 +] and Children Stepper [- 0 +] */}
        <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
          {/* Adults Stepper */}
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Adults <span className="text-gray-400 font-normal">(Min 2)</span>
            </label>
            <div className="flex items-center justify-between h-10.5 bg-gray-50 border border-gray-300 rounded-xl px-2">
              <button
                type="button"
                onClick={handleDecrementAdults}
                disabled={adults <= 2}
                aria-label="Decrease Adults"
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-extrabold text-sm text-gray-900 tracking-wide">
                {adults}
              </span>
              <button
                type="button"
                onClick={handleIncrementAdults}
                disabled={adults >= 20}
                aria-label="Increase Adults"
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Children Stepper */}
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Children <span className="text-gray-400 font-normal">(0-10)</span>
            </label>
            <div className="flex items-center justify-between h-10.5 bg-gray-50 border border-gray-300 rounded-xl px-2">
              <button
                type="button"
                onClick={handleDecrementChildren}
                disabled={children <= 0}
                aria-label="Decrease Children"
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-extrabold text-sm text-gray-900 tracking-wide">
                {children}
              </span>
              <button
                type="button"
                onClick={handleIncrementChildren}
                disabled={children >= 10}
                aria-label="Increase Children"
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-1.5 sm:pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-[#FF4B00] hover:bg-[#e04200] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Enquiry to CRM...</span>
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{submitButtonText}</span>
              </>
            )}
          </button>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-500 pt-0.5">
          <Shield className="w-3.5 h-3.5 text-[#0B3996]" />
          <span>100% Privacy Protected • No Spam Guaranteed</span>
        </div>
      </form>
    </div>
  );
};
