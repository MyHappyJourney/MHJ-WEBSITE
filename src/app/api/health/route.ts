import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    crm_configured: !!process.env.CRM_LEAD_API_KEY,
    crm_url: process.env.CRM_LEAD_API_URL || 'https://www.myhappyjourney.co.in/controller/external_website_lead/external_lead_receiver.php',
  });
}
