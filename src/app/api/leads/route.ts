import { NextRequest, NextResponse } from 'next/server';

const normalizeIndianPhone = (rawPhone: string): string => {
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
};

async function handleLeadSubmission(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      name,
      fullName,
      email,
      phone,
      phoneNumber,
      city,
      destination,
      from_date,
      travelDate,
      duration,
      packagePreference,
      adults,
      children,
      budget,
    } = body;

    const rawName = typeof name === 'string' && name.trim() ? name.trim() : (typeof fullName === 'string' ? fullName.trim() : '');
    const rawEmail = typeof email === 'string' ? email.trim() : '';
    const rawPhoneStr = typeof phone === 'string' ? phone : (typeof phoneNumber === 'string' ? phoneNumber : (phone ? String(phone) : ''));
    const cleanPhone = normalizeIndianPhone(rawPhoneStr);
    const rawCity = typeof city === 'string' ? city.trim() : '';
    const rawDestination = typeof destination === 'string' && destination.trim() ? destination.trim() : 'Kerala';

    const rawFromDate = typeof from_date === 'string' && from_date.trim() ? from_date.trim() : (typeof travelDate === 'string' ? travelDate.trim() : '');
    const rawDuration = typeof duration === 'string' && duration.trim() ? duration.trim() : (typeof packagePreference === 'string' ? packagePreference.trim() : '');
    
    const adultsNum = typeof adults === 'number' ? adults : Number(adults);
    const childrenNum = typeof children === 'number' ? children : (children !== undefined && children !== '' && children !== null ? Number(children) : 0);
    const rawBudget = typeof budget === 'string' ? budget.trim() : '';

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

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!rawFromDate || !dateRegex.test(rawFromDate)) {
      validationErrors.from_date = 'Please provide a valid travel date (YYYY-MM-DD).';
    }

    if (!rawDuration) {
      validationErrors.duration = 'Please specify a tour duration.';
    }

    if (isNaN(adultsNum) || adultsNum < 2) {
      validationErrors.adults = 'Number of adults must be at least 2.';
    }

    if (isNaN(childrenNum) || childrenNum < 0) {
      validationErrors.children = 'Number of children cannot be negative.';
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: 'validation_failed',
          message: 'Please complete all required fields.',
          fields: validationErrors,
        },
        { status: 400 }
      );
    }

    const crmPayload = {
      name: rawName,
      email: rawEmail,
      phone: cleanPhone,
      city: rawCity,
      destination: rawDestination,
      from_date: rawFromDate,
      duration: rawDuration,
      adults: adultsNum,
      children: childrenNum,
      budget: rawBudget,
    };

    const crmUrl =
      process.env.CRM_LEAD_API_URL ||
      'https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php';
    const crmApiKey = process.env.CRM_LEAD_API_KEY || '';

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
      return NextResponse.json(
        {
          ok: false,
          error: 'network_error',
          message: "Unable to submit enquiry to CRM right now. Please try again or contact us via WhatsApp.",
        },
        { status: 502 }
      );
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

    if (crmStatus === 200 && crmResult && crmResult.ok === true) {
      return NextResponse.json({
        ok: true,
        enquiry_id: crmResult.enquiry_id || null,
        assigned_emp_id: crmResult.assigned_emp_id || null,
        message: crmResult.message || 'Lead saved in CRM.',
      });
    }

    if (crmStatus === 422) {
      return NextResponse.json(
        {
          ok: false,
          error: 'validation_failed',
          message: crmResult?.message || 'The submitted details could not be validated by CRM.',
          fields: crmResult?.fields || undefined,
        },
        { status: 422 }
      );
    }

    if (crmStatus === 401) {
      return NextResponse.json(
        {
          ok: false,
          error: 'crm_auth_error',
          message: "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: 'crm_error',
        message: crmResult?.message || "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
      },
      { status: 500 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        ok: false,
        error: 'server_error',
        message: "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  return handleLeadSubmission(req);
}
