import { NextRequest, NextResponse } from 'next/server';

async function handleCrmDiagnostic(req: NextRequest) {
  const crmUrl =
    process.env.CRM_LEAD_API_URL ||
    'https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php';
  const crmApiKey = process.env.CRM_LEAD_API_KEY || '';

  let reqBody: any = null;
  if (req.method === 'POST') {
    reqBody = await req.json().catch(() => null);
  }

  const testPayload = reqBody && Object.keys(reqBody).length > 0 ? reqBody : {
    name: "Karthik",
    email: "brrealestates@gmail.com",
    phone: "8217873708",
    city: "Bangalore",
    destination: "Kerala"
  };

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

    return NextResponse.json({
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
    return NextResponse.json(
      {
        tested_url: crmUrl,
        has_api_key: !!crmApiKey,
        error: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return handleCrmDiagnostic(req);
}

export async function POST(req: NextRequest) {
  return handleCrmDiagnostic(req);
}
