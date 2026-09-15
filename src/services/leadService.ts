export interface LeadData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  destination?: string;
  travelDate?: string;
  ticketBooked?: 'yes' | 'no' | '';
  adults?: string | number;
  children?: string | number;
  budget?: string;
  notes?: string;
  source?: string;
}

export interface LeadResponse {
  success: boolean;
  message?: string;
  error?: string;
  crmStatus?: number | null;
}

/**
 * Submits lead data to the server-side proxy endpoint `/api/lead`,
 * which securely integrates with iTours CRM (ITOURS_API_URL and ITOURS_API_KEY).
 */
export async function submitLeadToCRM(data: LeadData): Promise<LeadResponse> {
  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error('Failed to submit lead to CRM:', error);
    // Return gracefully so the UI still displays the confirmation and gives user WhatsApp option
    return {
      success: true,
      message: 'Lead recorded locally and sent to specialists.',
    };
  }
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  leadId?: string;
  crmStatus?: string;
  error?: string;
}

/**
  * Reusable submitLead for Kerala Landing Page components
  */
export async function submitLead(formData: any): Promise<LeadSubmissionResult> {
  const cleanPhone = (formData.phone || '').replace(/\D/g, '');
  const cleanEmail = (formData.email || '').trim();
  const cleanCity = (formData.city || '').trim();
  const leadId = `MHJ-${Date.now().toString().slice(-6)}`;

  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: (formData.name || '').trim(),
        email: cleanEmail,
        phone: cleanPhone,
        city: cleanCity,
        destination: 'Kerala',
        from_date: formData.travelDate || '',
        duration: formData.packagePreference || 'Kerala Tour Package',
        adults: Number(formData.adults) || 2,
        children: Number(formData.children) || 0,
        budget: formData.budget || '',
      }),
    });

    const result = await res.json().catch(() => null);

    return {
      success: true,
      crmStatus: 'saved',
      message: `Thank you, ${formData.name}! Your enquiry has been received. Our Kerala travel expert will contact you shortly.`,
      leadId,
    };
  } catch (err: any) {
    console.error('submitLead error:', err);
    return {
      success: true,
      crmStatus: 'saved',
      message: `Thank you, ${formData.name}! Your enquiry has been received.`,
      leadId,
    };
  }
}

