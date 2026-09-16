'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import {
  PHONE_NUMBER,
  DISPLAY_PHONE,
  ENQUIRY_EMAIL,
  COMPANY_ADDRESS,
  WHATSAPP_NUMBER,
} from '../data/tourData';
import {
  DURATION_OPTIONS,
  BUDGET_OPTIONS,
  DESTINATION_OPTIONS,
  TOP_DEPARTURE_CITIES,
} from '../constants/crm';
import { submitLeadToCRM } from '../services/leadService';
import { WhatsAppIcon } from './WhatsAppIcon';
import { triggerWhatsAppModal } from '../utils/whatsappModal';

interface ContactUsPageProps {
  onBackToHome?: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onBackToHome }) => {
  // Standard Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [destination, setDestination] = useState(DESTINATION_OPTIONS[0]);
  const [travelDate, setTravelDate] = useState('');
  const [duration, setDuration] = useState(DURATION_OPTIONS[3]); // 6N / 7D
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[2]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState<string | number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!email.trim()) {
      setErrorMsg('Please enter your email address.');
      return;
    }
    if (!city.trim()) {
      setErrorMsg('Please enter your departure city.');
      return;
    }
    if (!destination) {
      setErrorMsg('Please select your preferred destination.');
      return;
    }
    const trimmedDate = travelDate.trim();
    if (!trimmedDate) {
      setErrorMsg('Please select your travel date.');
      return;
    }
    const todayStr = new Date().toISOString().split('T')[0];
    if (trimmedDate < todayStr) {
      setErrorMsg('Travel date cannot be in the past.');
      return;
    }
    if (adults < 2) {
      setErrorMsg('Number of adults must be at least 2.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const res = await submitLeadToCRM(
        {
          name: fullName.trim(),
          phone: cleanPhone,
          email: email.trim(),
          city: city.trim(),
          destination: destination,
          from_date: travelDate,
          duration: duration,
          adults: adults,
          children: children,
          budget: budget,
        },
        destination
      );

      if (res.success && res.ok) {
        setEnquiryId(res.enquiry_id || null);
        setIsSubmitted(true);
      } else {
        setErrorMsg(
          res.message ||
            "Sorry, we couldn't submit your enquiry right now. Please try again or contact us on WhatsApp."
        );
      }
    } catch (err: any) {
      console.error('Contact Us submission error:', err);
      setErrorMsg(
        "Sorry, we couldn't submit your enquiry right now. Please try again or contact us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setCity('');
    setDestination(DESTINATION_OPTIONS[0]);
    setTravelDate('');
    setDuration(DURATION_OPTIONS[3]);
    setAdults(2);
    setChildren(0);
    setBudget(BUDGET_OPTIONS[2]);
    setIsSubmitted(false);
    setEnquiryId(null);
    setErrorMsg(null);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'MyHappyJourney 18th Main Rd, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka 560078'
  )}`;

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B389D] pb-16">
      {/* 1. Deep Blue Hero Banner: "Get in Touch" */}
      <section className="relative bg-[#071F3D] text-white pt-16 pb-28 sm:pt-20 sm:pb-36 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
            Have a question about a tour package? Want a custom itinerary? <br className="hidden sm:inline" />
            Our travel experts are here to help — Mon–Sat, 9AM–7PM IST.
          </p>

          {onBackToHome && (
            <div className="pt-2">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer border border-white/10"
              >
                <span>← Back to Home</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 2. 4 Quick Contact Cards (Floating Over Hero) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-10 mb-14 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Call Us */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0B389D] text-white flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
              <Phone className="w-6 h-6 fill-white" />
            </div>
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">Call Us</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-[#0B389D] transition-colors">
              {DISPLAY_PHONE}
            </p>
          </a>

          {/* Card 2: WhatsApp */}
          <button
            type="button"
            onClick={() => triggerWhatsAppModal({ destination: 'Kerala Tour Packages' })}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
              <WhatsAppIcon className="w-6 h-6 fill-white" />
            </div>
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">WhatsApp</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-emerald-600 transition-colors">
              Chat Instantly
            </p>
          </button>

          {/* Card 3: Email Us */}
          <a
            href={`mailto:${ENQUIRY_EMAIL}`}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FF3000] text-white flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
              <Mail className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">Email Us</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium truncate max-w-full group-hover:text-[#FF3000] transition-colors">
              {ENQUIRY_EMAIL}
            </p>
          </a>

          {/* Card 4: Our Office */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FF9900] text-white flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
              <MapPin className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">Our Office</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-[#FF9900] transition-colors">
              Kumaraswamy Layout, Bengaluru
            </p>
          </a>
        </div>
      </div>

      {/* 3. Main 2-Column Section: Form (Left) & Visit Our Office (Right) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Send Us a Message (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06)] border border-gray-100 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Fill out your trip preferences and receive an itemized quote and itinerary from our specialist.
            </p>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1D1D1F]">
                  Message Received, {fullName}!
                </h3>
                {enquiryId && (
                  <div className="inline-block px-3.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800">
                    Enquiry Reference: #{enquiryId}
                  </div>
                )}
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out. One of our destination specialists will review your inquiry and get back to you shortly.
                </p>
                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-[#0B389D] hover:underline cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* 1. Full Name & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Full Name <span className="text-[#FF3000]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Mobile Number <span className="text-[#FF3000]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 2. Email Address & Departure City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Email Address <span className="text-[#FF3000]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Departure City <span className="text-[#FF3000]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      list="contact-cities-list"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bangalore, Delhi, Mumbai"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all"
                    />
                    <datalist id="contact-cities-list">
                      {TOP_DEPARTURE_CITIES.map((c) => (
                        <option key={c} value={c} />
                      ))}
                    </datalist>
                  </div>
                </div>

                {/* 3. Destination & Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Destination <span className="text-[#FF3000]">*</span>
                    </label>
                    <select
                      value={destination}
                      required
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm font-medium outline-none transition-all"
                    >
                      {DESTINATION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Duration
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm font-medium outline-none transition-all"
                    >
                      {DURATION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Travel Date & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Budget (Per Person)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm font-medium outline-none transition-all"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. Adults & Children with Stepper */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Adults (12+ Yrs)
                    </label>
                    <div className="flex items-center justify-between h-11 px-3 bg-[#FBFBFD] border border-gray-200 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        disabled={adults <= 1}
                        className="w-7 h-7 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-bold text-gray-700 disabled:opacity-40 cursor-pointer shadow-2xs"
                        aria-label="Decrease Adults"
                      >
                        -
                      </button>
                      <span className="font-extrabold text-sm text-gray-900">
                        {adults} {adults === 1 ? 'Adult' : 'Adults'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setAdults(Math.min(20, adults + 1))}
                        disabled={adults >= 20}
                        className="w-7 h-7 rounded-lg bg-[#0B3996] hover:bg-[#092c77] text-white flex items-center justify-center font-bold disabled:opacity-40 cursor-pointer shadow-2xs"
                        aria-label="Increase Adults"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Children (0-11 Yrs)
                    </label>
                    <div className="flex items-center justify-between h-11 px-3 bg-[#FBFBFD] border border-gray-200 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        disabled={children <= 0}
                        className="w-7 h-7 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-bold text-gray-700 disabled:opacity-40 cursor-pointer shadow-2xs"
                        aria-label="Decrease Children"
                      >
                        -
                      </button>
                      <span className="font-extrabold text-sm text-gray-900">
                        {children} {children === 1 ? 'Child' : 'Children'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setChildren(Math.min(10, children + 1))}
                        disabled={children >= 10}
                        className="w-7 h-7 rounded-lg bg-[#0B3996] hover:bg-[#092c77] text-white flex items-center justify-center font-bold disabled:opacity-40 cursor-pointer shadow-2xs"
                        aria-label="Increase Children"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* 6. Red Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-base shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Your Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Get My Free Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-2.5 font-normal">
                    We typically respond within 30 minutes during business hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Visit Our Office (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-[-0.03em]">
              Visit Our Office
            </h2>

            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 aspect-[16/10] bg-slate-100 group">
              <iframe
                title="MyHappyJourney Office Location Map"
                src="https://maps.google.com/maps?q=18th+Main+Rd,+Kumaraswamy+Layout+2nd+Stage,+Bengaluru,+Karnataka+560078&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 bg-white/95 hover:bg-white text-[#0B389D] text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md border border-gray-200/60 flex items-center gap-1.5 transition-all"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06)] border border-gray-100 space-y-4">
              <h3 className="text-base font-bold text-[#1D1D1F]">Office Address</h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0B389D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{COMPANY_ADDRESS}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0B389D] shrink-0" />
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="hover:text-[#0B389D] font-medium transition-colors"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0B389D] shrink-0" />
                  <a
                    href={`mailto:${ENQUIRY_EMAIL}`}
                    className="hover:text-[#0B389D] font-medium transition-colors"
                  >
                    {ENQUIRY_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F5FF] rounded-3xl p-6 sm:p-7 border border-blue-100 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B389D]">
                <Clock className="w-4 h-4 text-[#0B389D]" />
                <span>Business Hours</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#1D1D1F]">
                <div className="flex justify-between py-1 border-b border-blue-200/50">
                  <span className="text-gray-600">Monday – Friday</span>
                  <span className="font-bold">9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-200/50">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-bold">9:00 AM – 6:00 PM IST</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-700">Closed (Emergency: WhatsApp)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-blue-200/50 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <WhatsAppIcon className="w-4 h-4 fill-emerald-600 shrink-0" />
                <span>24/7 Emergency WhatsApp Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
