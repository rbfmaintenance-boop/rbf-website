"use client";

import { useState } from "react";

const TRADES = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "General Repair",
  "Multiple Trades",
  "Other",
];

const URGENCY = [
  "Standard (3–5 business days)",
  "Priority (1–2 business days)",
  "Emergency (Same day / 24hr)",
];

export default function RequestServiceForm() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  if (submitted) {
    return (
      <p style={{ margin: 0, fontSize: 16, color: "var(--ink-950)", lineHeight: 1.7 }}>
        Thank you. Your service request has been received. A coordinator will review the details
        and contact you to confirm scheduling. Emergency requests are prioritized.
      </p>
    );
  }

  return (
    <form
      className="rs-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <SectionLabel>Contact Information</SectionLabel>
      <div className="rs-grid">
        <Field label="Company Name" required>
          <input required name="company-name" type="text" placeholder="Property Group" />
        </Field>
        <Field label="Contact Name" required>
          <input required name="contact-name" type="text" placeholder="First & Last Name" />
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

      <SectionLabel>Property Details</SectionLabel>
      <Field label="Property Address" required>
        <input required name="property-address" type="text" placeholder="Street, City, State, ZIP" />
      </Field>

      <SectionLabel>Service Request</SectionLabel>
      <div className="rs-grid">
        <Field label="Type of Service">
          <select name="service" defaultValue="">
            <option value="" disabled>
              — Select Trade —
            </option>
            {TRADES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Urgency Level">
          <select name="urgency" defaultValue="">
            <option value="" disabled>
              — Select Urgency —
            </option>
            {URGENCY.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <SectionLabel>Description</SectionLabel>
      <Field label="Describe the Work Needed" required>
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
          Attach Photos
        </span>
        <label className="rs-drop">
          <input
            type="file"
            name="photos"
            multiple
            accept="image/*"
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

      <button type="submit" className="rs-submit">
        Submit Work Order
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
