// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const { readContent, publicPage } = require("./lib/content-store");
// const { hasCloudinaryConfig } = require("./lib/cloudinary");
// const { sendInquiryWhatsApp } = require("./lib/whatsapp");
// const { sendInquiryEmails } = require("./lib/mailer");
// const data = require("./db/data.js");

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json({ limit: "5mb" }));

// app.get("/api/home", (_req, res) => {
//   console.log("Serving home content");
//   res.json(publicPage("home"));
// });

// app.get("/api/portfolio", (_req, res) => {
//   res.json(publicPage("portfolio"));
// });

// app.get("/api/services", (_req, res) => {
//   res.json(publicPage("services"));
// });

// app.get("/api/contact", (_req, res) => {
//   res.json(publicPage("contact"));
// });

// app.get("/api/images/:id", (req, res) => {
//   const content = readContent();
//   const url = content.images[req.params.id];

//   if (!url) {
//     res.status(404).json({ error: "Image not found" });
//     return;
//   }

//   res.redirect(302, url);
// });

// app.post("/api/inquiries", async (req, res) => {
//   const { name, phone, eventType, email } = req.body;

//   if (!name || !phone || !eventType) {
//     res.status(400).json({ error: "Name, phone, and eventType are required." });
//     return;
//   }

//   const inquiry = {
//     ...req.body,
//     createdAt: new Date().toISOString(),
//   };

//   let whatsapp = { ok: false, skipped: true };
//   let emailResult = {
//     owner: { ok: false, skipped: true },
//     user: { ok: false, skipped: true },
//   };

//   try {
//     whatsapp = await sendInquiryWhatsApp(inquiry);
//   } catch (error) {
//     whatsapp = { ok: false, error: error.message };
//   }

//   try {
//     emailResult = await sendInquiryEmails(inquiry);
//   } catch (error) {
//     emailResult = {
//       owner: { ok: false, error: error.message },
//       user: { ok: false, error: error.message },
//     };
//   }

//   res.status(201).json({
//     ok: true,
//     message: "Inquiry received.",
//     inquiry,
//     whatsapp,
//     email: emailResult,
//   });
// });

// app.listen(port, () => {
//   console.log(`Backend API running on http://localhost:${port}`);
// });
