"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { submitForm } from "@/lib/submitForm";

const SERVICES = ["Electrical", "Plumbing", "HVAC", "Repairs", "Renovation"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(Date.now());

  if (status === "sent") {
    return (
      <p className="contact-thanks" role="status">
        Thank you for contacting RBF Maintenance. A member of our team will be in touch shortly.
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setStatus("sending");
        try {
          await submitForm("contact", e.currentTarget, startedAt.current);
          setStatus("sent");
        } catch (err) {
          setError((err as Error).message);
          setStatus("idle");
        }
      }}
    >
      <label className="sr-only" htmlFor="cf-name">Your name (required)</label>
      <input id="cf-name" required name="name" type="text" placeholder="Your name" autoComplete="name" maxLength={100} />
      <label className="sr-only" htmlFor="cf-company">Company</label>
      <input id="cf-company" name="company" type="text" placeholder="Company" autoComplete="organization" maxLength={150} />
      <label className="sr-only" htmlFor="cf-email">Email address (required)</label>
      <input id="cf-email" required name="email" type="email" placeholder="Email address" autoComplete="email" maxLength={200} />
      <label className="sr-only" htmlFor="cf-phone">Phone number</label>
      <input id="cf-phone" name="phone" type="tel" placeholder="Phone number" autoComplete="tel" maxLength={40} />
      <label className="sr-only" htmlFor="cf-service">Service needed (required)</label>
      <select id="cf-service" required name="service" defaultValue="">
        <option value="" disabled>
          Service needed
        </option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <label className="sr-only" htmlFor="cf-message">Message (required)</label>
      <textarea id="cf-message" required name="message" placeholder="What do you need done, and where?" rows={8} maxLength={5000} />
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <p className="form-note">
        We use your details only to answer your message. See our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
