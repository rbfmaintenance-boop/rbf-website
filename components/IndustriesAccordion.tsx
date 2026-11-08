"use client";

import { useState } from "react";

const INDUSTRIES = [
  ["Retail and shopping centers", "Work scheduled before opening or after close, so stores stay open and customers never see a ladder."],
  ["Office buildings", "Repairs and suite work planned around tenant schedules, with access coordinated through building management."],
  ["Industrial and warehouse", "Electrical, plumbing and HVAC support for facilities that keep running while we work."],
  ["Multifamily", "Unit turns, common areas and building systems, handled with residents in mind."],
  ["Healthcare", "Contained, clean work in occupied clinical spaces, scheduled with your facility team."],
  ["Banks and financial offices", "Branch repairs and improvements with minimal disruption to staff and customers."],
];

export default function IndustriesAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="x-acc">
      {INDUSTRIES.map(([name, text], i) => {
        const isOpen = open === i;
        const id = `industry-${i}`;
        return (
          <li key={name} className={`x-acc-item${isOpen ? " is-open" : ""}`}>
            <h3 className="x-acc-h">
              <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : i)}>
                <span className="x-acc-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="x-acc-name">{name}</span>
                <span className="x-acc-arrow" aria-hidden="true" />
              </button>
            </h3>
            <div id={id} className="x-acc-panel">
              <div>
                <p>{text}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
