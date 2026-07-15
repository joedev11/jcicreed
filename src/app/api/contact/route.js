import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, company, service, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: "JCICREED Website <noreply@jcicreeddeliveryservices.com>",
      to: "jcicreedeliveryservices@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          ${company ? `<tr><td><strong>Company</strong></td><td>${company}</td></tr>` : ""}
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
          ${service ? `<tr><td><strong>Service</strong></td><td>${service}</td></tr>` : ""}
          <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We will get back to you shortly.",
    });
  } catch (error) {
    console.error("[Contact] Email send failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
