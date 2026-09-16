import type { IncomingMessage, ServerResponse } from 'http';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
  query?: Record<string, string | string[]>;
  method?: string;
  headers: Record<string, string | string[] | undefined>;
}

interface ExtendedResponse extends ServerResponse {
  status: (code: number) => ExtendedResponse;
  json: (data: any) => void;
  send: (body: any) => void;
  setHeader: (name: string, value: string | number | readonly string[]) => this;
}

/**
 * Normalizes Indian mobile phone numbers into a clean 10-digit string.
 */
export function normalizeIndianPhone(rawPhone: string): string {
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
 * Vercel Serverless Function: POST /api/leads
 * Securely forwards lead submissions to MyHappyJourney CRM.
 * Authentication is provided via the X-API-Key HTTP header.
 */
export default async function handler(req: ExtendedRequest, res: ExtendedResponse) {
  // 1. Method verification: POST only (reject GET and others with 405)
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      ok: false,
      error: 'method_not_allowed',
      message: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  try {
    // 2. Parse request body
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          ok: false,
          error: 'invalid_body',
          message: 'Malformed JSON in request body.',
        });
      }
    }

    if (!body || typeof body !== 'object') {
      return res.status(400).json({
        ok: false,
        error: 'invalid_body',
        message: 'Request body must be a valid JSON object.',
      });
    }

    const { name, fullName, email, phone, phoneNumber, city, destination } = body;

    // 3. Extract and normalize fields
    const rawName = typeof name === 'string' && name.trim() ? name.trim() : (typeof fullName === 'string' ? fullName.trim() : '');
    const rawEmail = typeof email === 'string' ? email.trim() : '';
    const rawPhoneStr = typeof phone === 'string' ? phone : (typeof phoneNumber === 'string' ? phoneNumber : (phone ? String(phone) : ''));
    const cleanPhone = normalizeIndianPhone(rawPhoneStr);
    const rawCity = typeof city === 'string' ? city.trim() : '';
    const rawDestination = typeof destination === 'string' && destination.trim() ? destination.trim() : 'Kerala';

    // 4. Validation
    const validationErrors: Record<string, string> = {};

    if (!rawName || rawName.length < 2 || rawName.length > 100) {
      validationErrors.name = 'Please provide a valid name (2-100 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rawEmail || !emailRegex.test(rawEmail) || rawEmail.length > 150) {
      validationErrors.email = 'Please provide a valid email address.';
    }

    if (!cleanPhone || cleanPhone.length !== 10) {
      validationErrors.phone = 'Please provide a valid 10-digit mobile phone number.';
    }

    if (!rawCity || rawCity.length < 2 || rawCity.length > 100) {
      validationErrors.city = 'Please provide your departure city.';
    }

    if (!rawDestination || rawDestination.length < 2 || rawDestination.length > 100) {
      validationErrors.destination = 'Please specify a destination or tour package.';
    }

    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        ok: false,
        error: 'validation_failed',
        message: 'Please complete all required fields.',
        fields: validationErrors,
      });
    }

    // 5. Construct 5-field basic CRM Payload
    const crmPayload = {
      name: rawName,
      email: rawEmail,
      phone: cleanPhone,
      city: rawCity,
      destination: rawDestination,
    };

    // 6. Read Server Environment Variables
    const crmUrl =
      process.env.CRM_LEAD_API_URL ||
      'https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php';
    const crmApiKey = process.env.CRM_LEAD_API_KEY || '';

    if (!crmApiKey) {
      console.error('[CRM Error] CRM_LEAD_API_KEY is not set in environment variables!');
    }

    console.log('[CRM] Request received');
    console.log('[CRM] Sending lead to CRM');

    // 7. Forward to CRM with 10-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    let crmResponse: Response;
    try {
      crmResponse = await fetch(crmUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': crmApiKey,
        },
        body: JSON.stringify(crmPayload),
        signal: controller.signal,
      });
    } catch (fetchErr: any) {
      clearTimeout(timeoutId);
      console.error('[CRM] Network or timeout failure during CRM request');
      return res.status(502).json({
        ok: false,
        error: 'network_error',
        message: 'Unable to submit enquiry to CRM right now. Please try again or contact us via WhatsApp.',
      });
    } finally {
      clearTimeout(timeoutId);
    }

    const crmStatus = crmResponse.status;
    let crmResult: any = null;

    try {
      crmResult = await crmResponse.json();
    } catch {
      crmResult = null;
    }

    console.log('[CRM] CRM response status:', crmStatus);
    console.log('[CRM] CRM response ok:', crmResult?.ok === true);

    // 8. Strict Success Check: HTTP 200 AND ok === true
    if (crmStatus === 200 && crmResult && crmResult.ok === true) {
      return res.status(200).json({
        ok: true,
        enquiry_id: crmResult.enquiry_id || null,
        assigned_emp_id: crmResult.assigned_emp_id || null,
        message: crmResult.message || 'Lead successfully saved in CRM.',
      });
    }

    if (crmStatus === 422) {
      return res.status(422).json({
        ok: false,
        error: 'validation_failed',
        message: crmResult?.message || 'The submitted details could not be validated by CRM.',
        fields: crmResult?.fields || undefined,
      });
    }

    if (crmStatus === 401) {
      return res.status(500).json({
        ok: false,
        error: 'crm_auth_error',
        message: 'Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.',
      });
    }

    return res.status(500).json({
      ok: false,
      error: 'crm_error',
      message: crmResult?.message || 'Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.',
    });
  } catch (err: any) {
    console.error('[CRM Handler Exception]:', err?.message || err);
    return res.status(500).json({
      ok: false,
      error: 'server_error',
      message: 'Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.',
    });
  }
}

