"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { submitForm } from "@/lib/submitForm";

const TRADES = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Flooring",
  "Painting",
  "Drywall and build-outs",
  "Fencing",
  "General repairs",
  "Multiple trades",
  "Other",
];

const URGENCY = [
  "Standard (3–5 business days)",
  "Priority (1–2 business days)",
  "Emergency (Same day / 24hr)",
];

export default function RequestServiceForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const startedAt = useRef(Date.now());
  const [trade, setTrade] = useState("");

  // Pre-select the trade when arriving from a "Request ... " link on the home page
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("trade");
    if (t && TRADES.includes(t)) setTrade(t);
  }, []);

  if (status === "sent") {
    return (
      <p role="status" style={{ margin: 0, fontSize: 16, color: "var(--ink-950)", lineHeight: 1.7 }}>
        Thank you. Your service request has been received. A coordinator will review the details
        and contact you to confirm scheduling. Emergency requests are prioritized.
      </p>
    );
  }

  return (
    <form
      className="rs-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setStatus("sending");
        try {
          await submitForm("service", e.currentTarget, startedAt.current, files);
          setStatus("sent");
        } catch (err) {
          setError((err as Error).message);
          setStatus("idle");
        }
      }}
    >
      <SectionLabel>Contact information</SectionLabel>
      <div className="rs-grid">
        <Field label="Company name" required>
          <input required name="company-name" type="text" placeholder="Your company" />
        </Field>
        <Field label="Contact name" required>
          <input required name="contact-name" type="text" placeholder="First and last name" />
        </Field>
      </div>
      <div className="rs-grid">
        <Field label="Phone" required>
          <input required name="phone" type="tel" placeholder="(000) 000-0000" />
        </Field>
        <Field label="Email" required>
          <input required name="email" type="email" placeholder="you@company.com" />
        </Field>
      </div>

      <SectionLabel>Property details</SectionLabel>
      <Field label="Property address" required>
        <input required name="property-address" type="text" placeholder="Street, City, State, ZIP" />
      </Field>

      <SectionLabel>The work</SectionLabel>
      <div className="rs-grid">
        <Field label="Type of service">
          <select name="service" value={trade} onChange={(e) => setTrade(e.target.value)}>
            <option value="" disabled>
              Select a trade
            </option>
            {TRADES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Urgency">
          <select name="urgency" defaultValue="">
            <option value="" disabled>
              Select urgency
            </option>
            {URGENCY.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Describe the work needed" required>
        <textarea
          required
          name="description"
          maxLength={2000}
          placeholder="Describe the issue, location within the property, and any relevant details…"
        />
      </Field>

      <SectionLabel>Photos</SectionLabel>
      <div className="rs-field">
        <span className="rs-field-label">
          Attach photos
        </span>
        <label className="rs-drop">
          <input
            type="file"
            name="photos"
            multiple
            accept="image/jpeg,image/png,image/webp,image/gif,image/heic,image/heif"
            onChange={(e) => {
              const next = Array.from(e.target.files ?? []).slice(0, 4);
              setFiles(next);
            }}
          />
          <span className="rs-drop-title">Drop files here or click to browse</span>
          <span className="rs-drop-hint">Up to 4 photos, 5MB each</span>
        </label>
        {files.length > 0 && (
          <ul className="rs-files">
            {files.map((f) => (
              <li key={f.name}>{f.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="rs-website">Leave this field empty</label>
        <input id="rs-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <p className="form-note">
        We use your details and photos only to review, schedule and do the work. We never post your photos
        without your written OK. See our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <button type="submit" className="rs-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Submit Work Order"}
      </button>
    </form>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="rs-section-label">{children}</div>;
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="rs-field">
      <span className="rs-field-label">
        {label}
        {required ? <span className="rs-req"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
