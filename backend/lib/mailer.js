const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const ownerMail = process.env.OWNER_MAIL || "";

function isValidEmail(email) {
  return (
    typeof email === "string" && email.includes("@") && email.trim().length > 5
  );
}

function emailTransportConfig() {
  const auth =
    process.env.EMAIL_USER && process.env.EMAIL_PASS
      ? {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      : undefined;

  if (process.env.EMAIL_SERVICE) {
    return {
      service: process.env.EMAIL_SERVICE,
      auth,
    };
  }

  if (process.env.EMAIL_HOST) {
    return {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === "true",
      auth,
    };
  }

  return null;
}

function hasEmailConfig() {
  const config = emailTransportConfig();
  return Boolean(
    ownerMail && config && config.auth && config.auth.user && config.auth.pass,
  );
}

async function buildInquiryHtml(inquiry) {
  const templatePath = path.join(__dirname, "owner.ejs");
  return await ejs.renderFile(templatePath, { inquiry });
}

async function buildUserHtml(inquiry) {
  const templatePath = path.join(__dirname, "user.ejs");
  return await ejs.renderFile(templatePath, { inquiry });
}

async function sendOwnerInquiryEmail(inquiry) {
  if (!hasEmailConfig()) {
    return { ok: false, skipped: true, reason: "Email is not configured." };
  }

  const transportConfig = emailTransportConfig();
  const transporter = nodemailer.createTransport(transportConfig);

  const htmlContent = await buildInquiryHtml(inquiry);

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: ownerMail,
    subject: `New inquiry from ${inquiry.name} — ${inquiry.eventType}`,
    html: htmlContent,
  });

  return { ok: true, info };
}

async function sendUserInquiryEmail(inquiry) {
  if (!hasEmailConfig()) {
    return { ok: false, skipped: true, reason: "Email is not configured." };
  }

  if (!isValidEmail(inquiry.email)) {
    return {
      ok: false,
      skipped: true,
      reason: "Valid user email was not provided.",
    };
  }

  const transportConfig = emailTransportConfig();
  const transporter = nodemailer.createTransport(transportConfig);

  const htmlContent = await buildUserHtml(inquiry);

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: inquiry.email,
    replyTo: ownerMail,
    subject: `Thanks for contacting Aryan Studio, ${inquiry.name}`,
    html: htmlContent,
  });

  return { ok: true, info };
}

async function sendInquiryEmails(inquiry) {
  const owner = await sendOwnerInquiryEmail(inquiry);
  const user = inquiry.email
    ? await sendUserInquiryEmail(inquiry)
    : { ok: false, skipped: true, reason: "No email address provided." };
  return { owner, user };
}

module.exports = {
  sendInquiryEmails,
  hasEmailConfig,
};
