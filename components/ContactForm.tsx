"use client";

import { useState } from "react";

const SERVICES = ["Electrical", "Plumbing", "HVAC", "Repairs", "Renovation"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="contact-thanks">
        Thank you for contacting RBF Maintenance. A member of our team will be in touch shortly.
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input required name="name" type="text" placeholder="Your Name" />
      <input name="company" type="text" placeholder="Company" />
      <input required name="email" type="email" placeholder="Email Address" />
      <input name="phone" type="tel" placeholder="Phone Number" />
      <select required name="service" defaultValue="">
        <option value="" disabled>
          Service Needed
        </option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <textarea required name="message" placeholder="Tell us about your project..." rows={8} />
      <button type="submit">Send Message</button>
    </form>
  );
}
