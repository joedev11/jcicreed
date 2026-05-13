import { NextResponse } from 'next/server';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, message: 'Name, email, and message are required.' },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: 'Please provide a valid email address.' },
      { status: 400 },
    );
  }

  // In production: send email via nodemailer / save to DB
  console.log(`[Contact] ${name} <${email}> — ${body.service ?? 'General'}`);

  return NextResponse.json({
    success: true,
    message: 'Thank you! We will get back to you shortly.',
  });
}
