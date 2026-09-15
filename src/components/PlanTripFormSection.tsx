import React, { useState } from 'react';
import {
  Clock,
  CheckCircle2,
  Send,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER, DISPLAY_PHONE } from '../data/tourData';
import { DOMESTIC_DESTINATIONS } from '../data/destinations';
import { submitLeadToCRM } from '../services/leadService';
import { WhatsAppIcon } from './WhatsAppIcon';

export const PlanTripFormSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(DOMESTIC_DESTINATIONS[0]?.name || 'Kerala');
  const [travelDate, setTravelDate] = useState('');
  const [ticketBooked, setTicketBooked] = useState<'yes' | 'no' | ''>('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const destinationOptions = DOMESTIC_DESTINATIONS.map((card) => card.name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const leadPayload = {
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim(),
        destination: destination,
        travelDate: travelDate,
        ticketBooked: ticketBooked,
        adults: adults,
        children: children,
        notes: notes.trim(),
        source: 'Website - Plan Your Dream Trip Form',
      };

      await submitLeadToCRM(leadPayload);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Lead submission error:', err);
      setErrorMsg('Thank you! Our travel architect will contact you shortly.');
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello MyHappyJourney Team,\n\nI am planning a trip to ${destination} and would like to receive a custom day-wise itinerary and package pricing.\n\nName: ${fullName || 'Guest'}\nTravel Date: ${travelDate || 'Flexible'}\nGuests: ${adults} Adults${children !== '0' ? `, ${children} Children` : ''}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setDestination(DOMESTIC_DESTINATIONS[0]?.name || 'Kerala');
    setTravelDate('');
    setTicketBooked('');
    setAdults('2');
    setChildren('0');
    setNotes('');
    setIsSubmitted(false);
    setErrorMsg(null);
  };

  return (
    <section id="plan-trip-section" className="bg-[#0B2545] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden font-sans">
      
      {/* Background Subtle Ambience Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0B389D]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF9900]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#FF9900] mb-3.5 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>Complimentary Tailored Itinerary &amp; Cost Estimation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white mb-3">
            Plan Your Bespoke Vacation Today
          </h2>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Share your travel preferences and our regional vacation architect will connect within 30 minutes with personalized hotel choices and transparent costs.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white text-[#1D1D1F]">
          
          {/* Card Top Header Banner */}
          <div className="bg-[#071F3D] px-6 sm:px-8 py-6 sm:py-7 text-center border-b border-blue-950">
            <div className="inline-flex items-center gap-1.5 bg-[#FF3000] text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-xs mb-3">
              <Clock className="w-3.5 h-3.5 fill-white/20" />
              <span>Prompt Callback Within 30 Minutes</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
              Request Your Free Custom Quote
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 font-medium">
              100% Tailor-Made · Transparent Rates · Zero Obligation
            </p>
          </div>

          {/* Card Body */}
          <div className="px-6 sm:px-10 py-6 sm:py-9">
            {isSubmitted ? (
              <div className="py-6 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                    Thank You, {fullName}!
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mt-2">
                    Your holiday request has been received. Our dedicated travel coordinator is assembling customized itineraries and will contact you promptly.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppInstant}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-md transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp Now</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto text-xs font-semibold text-gray-500 hover:text-[#0B389D] py-2 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {errorMsg && (
                  <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-[#FF3000]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-[#FF3000]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Email & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Dream Destination <span className="text-[#FF3000]">*</span>
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none bg-white font-medium"
                    >
                      {destinationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                      <option value="Other / Multi-City">Other / Multi-City Tour</option>
                    </select>
                  </div>
                </div>

                {/* Travel Date & Ticket Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Approximate Travel Date
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Have You Booked Flights/Trains?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setTicketBooked('yes')}
                        className={`py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          ticketBooked === 'yes'
                            ? 'bg-[#0B389D] text-white border-[#0B389D]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        Yes, Booked
                      </button>
                      <button
                        type="button"
                        onClick={() => setTicketBooked('no')}
                        className={`py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          ticketBooked === 'no'
                            ? 'bg-[#0B389D] text-white border-[#0B389D]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        Not Yet
                      </button>
                    </div>
                  </div>
                </div>

                {/* Adults & Children Count */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Adults (12+ Yrs)
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Children (0-11 Yrs)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none bg-white"
                    >
                      {[0, 1, 2, 3, 4, '5+'].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Specific Requests or Preferences
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Deluxe houseboat in Alleppey, candlelit honeymoon dinner, luxury car transfer..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-3 space-y-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Generating Itinerary Options...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Custom Quotation</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-center pt-1 text-[11px] text-gray-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#0B389D]" />
                    <span>Your privacy is protected. No spam or third-party sharing.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Alternate Quick Call & WhatsApp Strip */}
        <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <span className="font-medium">Need immediate assistance?</span>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#FF9900] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>Call {DISPLAY_PHONE}</span>
          </a>
          <span>·</span>
          <button
            onClick={handleWhatsAppInstant}
            className="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
            <span>WhatsApp Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
