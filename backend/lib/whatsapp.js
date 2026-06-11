function hasWhatsAppConfig() {
  return Boolean(
    process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID,
  );
}

function normalizeIndianPhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");

  if (digits.length === 10) {
    return `91${digits}`;
  }

  return digits;
}

async function sendInquiryWhatsApp(inquiry) {
  if (!hasWhatsAppConfig()) {
    return { ok: false, skipped: true, reason: "WhatsApp is not configured." };
  }

  const to = normalizeIndianPhone(inquiry.phone);

  if (!to) {
    return { ok: false, skipped: true, reason: "No recipient phone number." };
  }

  const version = process.env.WHATSAPP_API_VERSION || "v23.0";
  const message = [
    `Hi ${inquiry.name},`,
    "Thanks for contacting Aryan Studio.",
    `We received your ${inquiry.eventType} inquiry and will get back to you shortly.`,
  ].join("\n");

  const response = await fetch(
    `https://graph.facebook.com/${version}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: {
          preview_url: false,
          body: message,
        },
      }),
    },
  );

  const body = await response.json().catch(() => ({}));

  return {
    ok: response.ok,
    status: response.status,
    body,
  };
}

module.exports = {
  sendInquiryWhatsApp,
};
