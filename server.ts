import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware for handling incoming JSON & urlencoded forms
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API health check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      crm_configured: !!process.env.CRM_LEAD_API_KEY,
      crm_url: process.env.CRM_LEAD_API_URL || 'https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php',
    });
  });

  // Diagnostic Endpoint for Testing CRM (supports GET and POST)
  const handleCrmDiagnostic = async (req: express.Request, res: express.Response) => {
    const crmUrl =
      process.env.CRM_LEAD_API_URL ||
      'https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php';
    const crmApiKey = process.env.CRM_LEAD_API_KEY || '';

    const testPayload = req.body && Object.keys(req.body).length > 0 ? req.body : {
      name: "Karthik",
      email: "brrealestates@gmail.com",
      phone: "8217873708",
      city: "Bangalore",
      destination: "Kerala"
    };

    console.log('[CRM Diagnostic] Testing CRM connection to:', crmUrl);
    console.log('[CRM Diagnostic] Has API Key configured:', !!crmApiKey);

    try {
      const response = await fetch(crmUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': crmApiKey,
        },
        body: JSON.stringify(testPayload),
      });

      const status = response.status;
      let body: any = null;
      try {
        body = await response.json();
      } catch {
        body = null;
      }

      return res.status(200).json({
        tested_url: crmUrl,
        has_api_key: !!crmApiKey,
        api_key_preview: crmApiKey ? `${crmApiKey.slice(0, 4)}...` : 'NOT_SET',
        payload_sent: testPayload,
        crm_http_status: status,
        crm_response_json: body,
        crm_ok: body?.ok === true,
        crm_enquiry_id: body?.enquiry_id || null,
      });
    } catch (err: any) {
      return res.status(500).json({
        tested_url: crmUrl,
        has_api_key: !!crmApiKey,
        error: err?.message || String(err),
      });
    }
  };

  app.get("/api/crm-diagnostic", handleCrmDiagnostic);
  app.post("/api/crm-diagnostic", handleCrmDiagnostic);

  // Phone normalization helper
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

  // Unified CRM Lead Handler Helper
  const handleLeadSubmission = async (req: express.Request, res: express.Response) => {
    try {
      const body = req.body || {};
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
        return res.status(400).json({
          ok: false,
          error: 'validation_failed',
          message: 'Please complete all required fields.',
          fields: validationErrors,
        });
      }

      // Build Extended CRM Payload
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

      if (!crmApiKey) {
        console.error('[CRM Error] CRM_LEAD_API_KEY is not set in environment variables!');
      }

      console.log('[CRM] Request received');
      console.log('[CRM] Sending lead to CRM');

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
          message: "Unable to submit enquiry to CRM right now. Please try again or contact us via WhatsApp.",
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

      if (crmStatus === 200 && crmResult && crmResult.ok === true) {
        return res.status(200).json({
          ok: true,
          enquiry_id: crmResult.enquiry_id || null,
          assigned_emp_id: crmResult.assigned_emp_id || null,
          message: crmResult.message || 'Lead saved in CRM.',
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
          message: "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
        });
      }

      return res.status(500).json({
        ok: false,
        error: 'crm_error',
        message: crmResult?.message || "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
      });
    } catch (err: any) {
      console.error('[CRM Handler Exception]:', err?.message || err);
      return res.status(500).json({
        ok: false,
        error: 'server_error',
        message: "Unable to submit enquiry to CRM. Please try again or contact us via WhatsApp.",
      });
    }
  };

  // Unified Lead Submission Endpoint
  app.post('/api/leads', handleLeadSubmission);
  app.post('/api/lead', handleLeadSubmission);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
