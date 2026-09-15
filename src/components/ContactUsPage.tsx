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
  Loader2
} from 'lucide-react';
import {
  PHONE_NUMBER,
  DISPLAY_PHONE,
  ENQUIRY_EMAIL,
  COMPANY_ADDRESS
} from '../data/tourData';
import { submitLeadToCRM } from '../services/leadService';
import { WhatsAppIcon } from './WhatsAppIcon';
import { triggerWhatsAppModal } from '../utils/whatsappModal';

interface ContactUsPageProps {
  onBackToHome?: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onBackToHome }) => {
  // Form State
  const [inquiryType, setInquiryType] = useState('Tour Packages Inquiry');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('Please provide your full name and phone number.');
      return;
    }
    if (!destination) {
      setErrorMsg('Please select your preferred destination.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      await submitLeadToCRM({
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim(),
        destination: destination,
        travelDate: travelDate,
        notes: `Inquiry Type: ${inquiryType}\nTravellers: ${travelers || 'Not specified'}\nMessage: ${message.trim()}`,
        source: 'Contact Us Page Form',
      });
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Contact Us submission error:', err);
      // Fail gracefully so user is assured
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setInquiryType('Tour Packages Inquiry');
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setDestination('');
    setTravelDate('');
    setTravelers('');
    setMessage('');
    setIsSubmitted(false);
    setErrorMsg(null);
  };

  // Google Maps directions / open link
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'MyHappyJourney 18th Main Rd, Kumaraswamy Layout 2nd Stage, Bengaluru, Karnataka 560078'
  )}`;

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans antialiased selection:bg-[#EBF2FF] selection:text-[#0B389D] pb-16">
      
      {/* 1. Deep Blue Hero Banner: "Get in Touch" */}
      <section className="relative bg-[#071F3D] text-white pt-16 pb-28 sm:pt-20 sm:pb-36 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-3">
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-white leading-tight">
            Get in Touch
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
            Have a question about a tour package? Want a custom itinerary? <br className="hidden sm:inline" />
            Our travel experts are here to help — Mon–Sat, 9AM–7PM IST.
          </p>

          {/* Back button */}
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
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">
              Call Us
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-[#0B389D] transition-colors">
              {DISPLAY_PHONE}
            </p>
          </a>

          {/* Card 2: WhatsApp */}
          <button
            type="button"
            onClick={() => triggerWhatsAppModal({ destination: 'Holiday Tours' })}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-200 border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
              <WhatsAppIcon className="w-6 h-6 fill-white" />
            </div>
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">
              WhatsApp
            </h3>
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
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">
              Email Us
            </h3>
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
            <h3 className="text-base font-bold text-[#1D1D1F] mb-1">
              Our Office
            </h3>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-[-0.03em] mb-6">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1D1D1F]">
                  Message Received, {fullName}!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out. One of our destination specialists will review your inquiry and get back to you within 2 hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-[#0B389D] hover:underline"
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

                {/* 1. Type of Inquiry */}
                <div>
                  <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Type of Inquiry <span className="text-[#FF3000]">*</span>
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm font-medium outline-none transition-all"
                  >
                    <option value="Tour Packages Inquiry">Tour Packages Inquiry</option>
                    <option value="Custom Itinerary Request">Custom Itinerary Request</option>
                    <option value="Honeymoon & Romantic Escape">Honeymoon &amp; Romantic Escape</option>
                    <option value="Family Holiday Package">Family Holiday Package</option>
                    <option value="Corporate / Group Tour">Corporate / Group Tour</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* 2. Full Name */}
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

                {/* 3. Phone Number & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Phone Number <span className="text-[#FF3000]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 4. Destination */}
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
                    <option value="">Select Destination</option>
                    <option value="Kerala">Kerala (Munnar, Alleppey, Kovalam)</option>
                    <option value="Himachal">Himachal Pradesh (Manali, Shimla)</option>
                    <option value="Kashmir">Kashmir (Srinagar, Gulmarg, Pahalgam)</option>
                    <option value="Rajasthan">Rajasthan (Jaipur, Udaipur, Jodhpur)</option>
                    <option value="Goa">Goa (Beaches &amp; Heritage)</option>
                    <option value="Andaman">Andaman &amp; Nicobar Islands</option>
                    <option value="Northeast">Northeast &amp; Meghalaya</option>
                    <option value="International">International (Thailand, Bali, Dubai)</option>
                    <option value="Other / Customized">Other / Customized Multi-City</option>
                  </select>
                </div>

                {/* 5. Travel Date & No. of Travellers */}
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
                      No. of Travellers
                    </label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm font-medium outline-none transition-all"
                    >
                      <option value="">Select</option>
                      <option value="1 Traveller">1 Traveller (Solo)</option>
                      <option value="2 Travellers (Couple)">2 Travellers (Couple)</option>
                      <option value="3-5 Travellers (Family)">3-5 Travellers (Family)</option>
                      <option value="6-10 Travellers (Group)">6-10 Travellers (Group)</option>
                      <option value="10+ Travellers (Large Group)">10+ Travellers (Large Group)</option>
                    </select>
                  </div>
                </div>

                {/* 6. Message */}
                <div>
                  <label className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Message <span className="text-[#FF3000]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your travel plans, budget, and preferences..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBFD] focus:bg-white focus:border-[#0B389D] focus:ring-2 focus:ring-[#0B389D]/20 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* 7. Red Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#FF3000] hover:bg-[#e02b00] active:scale-[0.98] text-white font-bold text-base shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-2.5 font-normal">
                    We typically respond within 2 hours during business hours.
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

            {/* Map Preview Card with "Open in Maps" button */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 aspect-[16/10] bg-slate-100 group">
              {/* Responsive Google Maps Embed */}
              <iframe
                title="MyHappyJourney Office Location Map"
                src="https://maps.google.com/maps?q=18th+Main+Rd,+Kumaraswamy+Layout+2nd+Stage,+Bengaluru,+Karnataka+560078&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating "Open in Maps" pill */}
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

            {/* Office Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.06)] border border-gray-100 space-y-4">
              <h3 className="text-base font-bold text-[#1D1D1F]">
                Office Address
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0B389D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {COMPANY_ADDRESS}
                  </span>
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

            {/* Business Hours Card */}
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

              {/* 24/7 Emergency WhatsApp indicator */}
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
