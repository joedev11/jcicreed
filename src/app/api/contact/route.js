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

  const fields = [
    { label: "Name", value: name },
    company ? { label: "Company", value: company } : null,
    { label: "Email", value: email },
    phone ? { label: "Phone", value: phone } : null,
    service ? { label: "Service", value: service } : null,
  ]
    .filter(Boolean)
    .map(
      (item) => `
      <div style="margin-bottom:16px;">
        <p style="color:#e8621a;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px;">${item.label}</p>
        <p style="color:#111d3e;font-size:15px;font-weight:600;margin:0;">${item.value}</p>
      </div>`,
    )
    .join("");

  try {
    await resend.emails.send({
      from: "JCICREED Website <noreply@jcicreeddeliveryservices.com>",
      to: "jcicreedeliveryservices@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#ffffff !important;padding:32px 16px;" bgcolor="#ffffff">
          <div style="background-color:#111d3e !important;border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
            <img src="https://jcicreeddeliveryservices.com/images/jds_logo.jpg" alt="JCICREED Delivery Services" style="height:64px;width:auto;border-radius:8px;margin-bottom:12px;display:block;margin-left:auto;margin-right:auto;" />
            <p style="color:#ffffff !important;font-size:20px;font-weight:900;margin:0;letter-spacing:2px;">JCICREED</p>
            <p style="color:#aabbdd !important;font-size:11px;margin:4px 0 0;letter-spacing:3px;">DELIVERY SERVICES</p>
          </div>
          <div style="background-color:#e8621a !important;height:4px;"></div>
          <div style="background-color:#ffffff !important;border-radius:0 0 12px 12px;padding:32px;" bgcolor="#ffffff">
            <h2 style="color:#111d3e !important;font-size:20px;margin:0 0 6px;">New Inquiry Received</h2>
            <p style="color:#666666 !important;font-size:13px;margin:0 0 24px;">Someone submitted the contact form on your website.</p>
            ${fields}
            <div style="margin-top:24px;background-color:#f4f6fb !important;border-left:4px solid #e8621a;border-radius:4px;padding:16px 20px;" bgcolor="#f4f6fb">
              <p style="color:#e8621a !important;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Message</p>
              <p style="color:#333333 !important;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
            </div>
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${email}" style="background-color:#e8621a !important;color:#ffffff !important;text-decoration:none;padding:12px 28px;border-radius:6px;font-weight:700;font-size:13px;letter-spacing:1px;">Reply to ${name}</a>
            </div>
          </div>
          <p style="text-align:center;color:#aaaaaa !important;font-size:11px;margin-top:20px;">
            JCICREED Delivery Services &bull; jcicreeddeliveryservices.com
          </p>
        </div>
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
