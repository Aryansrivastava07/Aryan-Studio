import { NextResponse } from "next/server";
import { sendInquiryWhatsApp } from "../lib/whatsapp";
import { sendInquiryEmails } from "../lib/mailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, eventType, email } = body;

    if (!name || !phone || !eventType) {
      return NextResponse.json(
        { error: "Name, phone, and eventType are required." },
        { status: 400 },
      );
    }

    const inquiry = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    let whatsapp = { ok: false, skipped: true };
    let emailResult = {
      owner: { ok: false, skipped: true },
      user: { ok: false, skipped: true },
    };

    try {
      whatsapp = await sendInquiryWhatsApp(inquiry);
    } catch (error) {
      whatsapp = { ok: false, error: error.message };
    }

    try {
      emailResult = await sendInquiryEmails(inquiry);
    } catch (error) {
      emailResult = {
        owner: { ok: false, error: error.message },
        user: { ok: false, error: error.message },
      };
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Inquiry received.",
        inquiry,
        whatsapp,
        email: emailResult,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }
}
