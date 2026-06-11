"use client";

import { useState } from "react";
import { ToastContainer } from "@/components/Toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export default function InquiryForm({ eventTypes }) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, variant = "success") => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setToasts((prev) => [...prev, { id, message, variant }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      eventType: formData.get("eventType"),
      date: formData.get("date"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${API_URL}/api/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Unable to submit inquiry.");
      }

      form.reset();
      const successMessage = "Inquiry submitted. We will contact you shortly.";
      setStatus(successMessage);
      showToast(successMessage, "success");
    } catch (error) {
      setStatus(error.message);
      showToast(error.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-stack-lg" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="relative">
          <label
            className="font-label-md text-label-md text-on-surface-variant uppercase mb-2 block"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="form-input-minimal w-full font-body-md text-body-md text-on-surface"
            id="name"
            name="name"
            placeholder="e.g. Rahul Sharma"
            required
            type="text"
          />
        </div>
        <div className="relative">
          <label
            className="font-label-md text-label-md text-on-surface-variant uppercase mb-2 block"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="form-input-minimal w-full font-body-md text-body-md text-on-surface"
            id="phone"
            name="phone"
            placeholder="+91"
            required
            type="tel"
          />
        </div>
      </div>

      <div className="relative">
        <label
          className="font-label-md text-label-md text-on-surface-variant uppercase mb-2 block"
          htmlFor="email"
        >
          Email Address (Optional)
        </label>
        <input
          className="form-input-minimal w-full font-body-md text-body-md text-on-surface"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="font-label-md text-label-md text-on-surface-variant uppercase mb-4 block">
          Event Category
        </label>
        <div className="flex flex-wrap gap-3">
          {eventTypes.map((type, index) => (
            <label key={type} className="cursor-pointer">
              <input
                className="peer sr-only"
                name="eventType"
                type="radio"
                value={type}
                defaultChecked={index === 0}
              />
              <span className="inline-block px-4 py-2 border border-outline-variant/50 text-on-surface-variant font-body-md text-body-md peer-checked:bg-secondary-container peer-checked:text-on-secondary-container peer-checked:border-secondary-container transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="relative">
        <label
          className="font-label-md text-label-md text-on-surface-variant uppercase mb-2 block"
          htmlFor="date"
        >
          Tentative Date
        </label>
        <input
          className="form-input-minimal w-full font-body-md text-body-md text-on-surface text-opacity-50 focus:text-opacity-100"
          id="date"
          name="date"
          type="date"
        />
      </div>

      <div className="relative">
        <label
          className="font-label-md text-label-md text-on-surface-variant uppercase mb-2 block"
          htmlFor="message"
        >
          Additional Details
        </label>
        <textarea
          className="form-input-minimal w-full font-body-md text-body-md text-on-surface resize-none"
          id="message"
          name="message"
          placeholder="Tell us a bit about your event, location, or any specific requirements..."
          rows="4"
        />
      </div>

      <div className="pt-4">
        <button
          className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md uppercase tracking-wide hover:bg-on-primary-fixed-variant transition-colors min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit Request"}
          <span className="material-symbols-outlined ml-2 text-sm">
            arrow_forward
          </span>
        </button>
      </div>

      {status && (
        <p className="font-body-md text-body-md text-on-surface-variant">
          {status}
        </p>
      )}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </form>
  );
}
