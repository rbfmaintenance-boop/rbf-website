"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { submitForm } from "@/lib/submitForm";

const labelStyle: React.CSSProperties = { display: "grid", gap: 6, fontSize: 13.5, color: "var(--steel-600)" };
const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  border: "1px solid var(--line)",
  borderRadius: 3,
  fontSize: 16,
  fontFamily: "var(--font-body)",
};

export default function CareersForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(Date.now());

  if (status === "sent") {
    return (
      <p role="status" style={{ fontSize: 16, lineHeight: 1.7 }}>
        Thank you. We received your information and will contact you if there's a fit.
      </p>
    );
  }

  return (
    <form
      style={{ display: "grid", gap: 16 }}
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setStatus("sending");
        try {
          await submitForm("careers", e.currentTarget, startedAt.current);
          setStatus("sent");
        } catch (err) {
          setError((err as Error).message);
          setStatus("idle");
        }
      }}
    >
      <label style={labelStyle}>
        Full name
        <input required name="name" style={inputStyle} type="text" autoComplete="name" maxLength={100} />
      </label>
      <label style={labelStyle}>
        Email
        <input required name="email" style={inputStyle} type="email" autoComplete="email" maxLength={200} />
      </label>
      <label style={labelStyle}>
        Trade / role interested in
        <input name="role" style={inputStyle} type="text" placeholder="Electrical, plumbing, HVAC..." maxLength={150} />
      </label>
      <label style={labelStyle}>
        Tell us about your experience
        <textarea name="experience" style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} maxLength={5000} />
      </label>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="cr-website">Leave this field empty</label>
        <input id="cr-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <p className="form-note">
        Only RBF staff see your application, and we delete it within 1 year. See our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <button type="submit" className="btn" style={{ justifyContent: "center" }} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send application"}
      </button>
    </form>
  );
}
