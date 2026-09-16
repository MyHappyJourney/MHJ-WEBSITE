import { CRMLeadPayload } from '../constants/crm';

export interface LeadData {
  fullName?: string;
  name?: string;
  phoneNumber?: string;
  phone?: string;
  email?: string;
  city?: string;
  destination?: string;
  travelDate?: string;
  from_date?: string;
  duration?: string;
  packagePreference?: string;
  adults?: string | number;
  children?: string | number;
  budget?: string;
  notes?: string;
  source?: string;
}

export interface BasicCRMLeadPayload {
  name: string;
  email: string;
  phone: string;
  city: string;
  destination: string;
}

export interface LeadResponse {
  success: boolean;
  ok?: boolean;
  enquiry_id?: number | string | null;
  message?: string;
  error?: string;
  fields?: Record<string, string>;
}

export interface LeadSubmissionResult {
  success: boolean;
  ok?: boolean;
  message: string;
  leadId?: string;
  enquiry_id?: number | string | null;
  error?: string;
  fields?: Record<string, string>;
}

/**
 * Normalizes Indian phone numbers into a 10-digit clean string.
 */
export function normalizePhone(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  if (digits.length > 10) {
    return digits.slice(-10);
  }
  return digits;
}

/**
 * Standardize and sanitize lead inputs into the official 10-field CRM format
 */
export function formatCRMLeadPayload(data: LeadData, defaultDestination: string = 'Kerala'): CRMLeadPayload {
  const name = (data.name || data.fullName || '').trim();
  const rawPhone = (data.phone || data.phoneNumber || '').toString();
  const phone = normalizePhone(rawPhone);
  const email = (data.email || '').trim();
  const city = (data.city || '').trim();
  const destination = (data.destination || defaultDestination).trim();
  
  const from_date = (data.from_date || data.travelDate || '').trim();

  const duration = (data.duration || data.packagePreference || '6 NIGHTS / 7 DAYS (6N / 7D)').trim();

  const rawAdults = Number(data.adults);
  const adults = !isNaN(rawAdults) && rawAdults >= 2 ? rawAdults : 2;

  const rawChildren = Number(data.children);
  const children = !isNaN(rawChildren) && rawChildren >= 0 ? rawChildren : 0;

  const budget = (data.budget || '').trim();

  return {
    name,
    email,
    phone,
    city,
    destination,
    from_date,
    duration,
    adults,
    children,
    budget,
  };
}

/**
 * Submits lead data to the unified server-side `/api/leads` endpoint.
 */
export async function submitLeadToCRM(data: LeadData, defaultDestination: string = 'Kerala'): Promise<LeadResponse> {
  const payload = formatCRMLeadPayload(data, defaultDestination);

  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result?.ok === true) {
      return {
        success: true,
        ok: true,
        enquiry_id: result.enquiry_id || null,
        message: result.message || 'Thank you! Your enquiry has been received. Our travel expert will contact you shortly.',
      };
    }

    if (response.status === 422 && result?.fields) {
      return {
        success: false,
        ok: false,
        error: result.message || 'Please check your submitted details.',
        message: result.message || 'Please check your submitted details.',
        fields: result.fields,
      };
    }

    return {
      success: false,
      ok: false,
      error: result?.error || 'crm_error',
      message: result?.message || "Sorry, we couldn't submit your enquiry right now. Please try again or contact us on WhatsApp.",
    };
  } catch (error: any) {
    console.error('Lead submission request failed:', error);
    return {
      success: false,
      ok: false,
      error: 'network_error',
      message: "Sorry, we couldn't submit your enquiry right now. Please try again or contact us on WhatsApp.",
    };
  }
}

/**
 * Reusable submitLead for Kerala Landing Page components
 */
export async function submitLead(formData: LeadData, defaultDestination: string = 'Kerala'): Promise<LeadSubmissionResult> {
  const crmRes = await submitLeadToCRM(formData, defaultDestination);

  if (crmRes.success && crmRes.ok) {
    const leadId = crmRes.enquiry_id ? `MHJ-${crmRes.enquiry_id}` : `MHJ-${Date.now().toString().slice(-6)}`;
    return {
      success: true,
      ok: true,
      enquiry_id: crmRes.enquiry_id || null,
      leadId,
      message: `Thank you, ${formData.name || formData.fullName || 'Traveler'}! Your enquiry has been received (Ref: ${leadId}). Our travel expert will contact you shortly.`,
    };
  }

  return {
    success: false,
    ok: false,
    message: crmRes.message || "Sorry, we couldn't submit your enquiry right now. Please try again or contact us on WhatsApp.",
    error: crmRes.error,
    fields: crmRes.fields,
  };
}
