"use client";

import Link from "next/link";
import { useState } from "react";

const TRADES = [
  {
    name: "Electrical",
    scope: "Panels, circuits, lighting and troubleshooting",
    items: ["Panel and breaker work", "Interior, exterior and parking lot lighting", "Outlets, circuits and dedicated lines", "Troubleshooting and corrections"],
    cta: "electrical work",
  },
  {
    name: "Plumbing",
    scope: "Leaks, drains, fixtures and water heaters",
    items: ["Leak detection and repair", "Drain and line clearing", "Fixture and water heater replacement", "Restroom repairs"],
    cta: "plumbing work",
  },
  {
    name: "HVAC",
    scope: "Repairs, preventive maintenance and replacements",
    items: ["Diagnostics and repairs", "Scheduled preventive maintenance", "Rooftop and split-system replacement", "Thermostats and controls"],
    cta: "HVAC service",
  },
  {
    name: "Flooring",
    scope: "Tile, LVT, carpet tile and concrete",
    items: ["New tile, LVT and carpet tile", "Repairs and transitions", "Concrete patching and sealing"],
    cta: "flooring work",
  },
  {
    name: "Painting",
    scope: "Touch-ups to full suites, inside and out",
    items: ["Suites, corridors and common areas", "Exterior walls and trim", "Touch-ups between tenants"],
    cta: "painting",
  },
  {
    name: "Drywall and build-outs",
    scope: "Patches to complete suite improvements",
    items: ["Patches and water damage repair", "New walls, framing and ceilings", "Suite improvements and finish-outs"],
    cta: "drywall or build-out work",
  },
  {
    name: "Fencing",
    scope: "Repairs and new installation",
    items: ["Fence and gate repairs", "New fence installation", "Enclosures for equipment and dumpsters"],
    cta: "fencing work",
  },
  {
    name: "General repairs",
    scope: "Doors, hardware, fixtures and punch lists",
    items: ["Doors, locks and hardware", "Ceiling tiles and fixtures", "Punch lists and tenant turn work"],
    cta: "a repair",
  },
];

export default function TradeBoard() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="x-board">
      {TRADES.map((t, i) => {
        const isOpen = open === i;
        const panelId = `trade-panel-${i}`;
        return (
          <li key={t.name} className={`x-board-row${isOpen ? " is-open" : ""}`}>
            <h3 className="x-board-h">
              <button
                type="button"
                className="x-board-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="x-board-trade">{t.name}</span>
                <span className="x-board-scope">{t.scope}</span>
                <span className="x-board-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="x-board-panel">
              <div className="x-board-panel-inner">
                <ul className="x-board-items">
                  {t.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={`/request-service?trade=${encodeURIComponent(t.name)}`} className="x-board-link">
                  Request {t.cta}
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
