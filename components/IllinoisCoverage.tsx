"use client";

import Link from "next/link";
import { useState } from "react";
import { IL_CITIES, IL_NEIGHBORS, IL_PATH, IL_VIEWBOX } from "@/lib/maps-il";

// Label placement per city: [dx, dy, text-anchor]
const LABELS: Record<string, [number, number, "start" | "end"]> = {
  Chicago: [12, 5, "start"],
  Naperville: [6, 22, "start"],
  Aurora: [-12, -8, "end"],
  Rockford: [-12, -6, "end"],
  Peoria: [-12, 5, "end"],
  Springfield: [12, 5, "start"],
};

export default function IllinoisCoverage() {
  const [active, setActive] = useState<string | null>(null);
  const chicago = IL_CITIES.find((c) => c.name === "Chicago")!;

  return (
    <div className="x-split x-split--map x-split--reverse">
      <div>
        <h2 className="x-title x-title--left">Service area</h2>
        <p className="x-slogan x-slogan--left">Illinois today, more states coming</p>
        <p className="x-body">
          Across Illinois, from the Chicago area and the western suburbs to Rockford, Peoria and Springfield.
        </p>
        <ul className="x-cities" aria-label="Cities we serve">
          {IL_CITIES.map((c) => (
            <li key={c.name}>
              <button
                type="button"
                className={active === c.name ? "is-active" : ""}
                aria-pressed={active === c.name}
                onMouseEnter={() => setActive(c.name)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(c.name)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(active === c.name ? null : c.name)}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
        <p className="x-body">
          Managing several sites? One coordinator handles all of them, with the same process at every location.
        </p>
        <p className="x-body">We&apos;re adding more states. If you manage properties outside Illinois, ask us.</p>
        <Link href="/request-service" className="x-link">
          Request service
        </Link>
      </div>
      <figure className="x-map x-map--il">
        <svg
          className={`x-map-svg${active ? " has-active" : ""}`}
          viewBox={IL_VIEWBOX}
          role="img"
          aria-label="Map of Illinois marking Chicago, Naperville, Aurora, Rockford, Peoria and Springfield"
        >
          {IL_NEIGHBORS.map((s) => (
            <path key={s.id} d={s.d} className="x-map-neighbor" />
          ))}
          <path d={IL_PATH} className="x-map-state" />
          <circle cx={chicago.x - 22} cy={chicago.y + 8} r={46} className="x-map-metro" />
          {IL_CITIES.map((c) => {
            const [dx, dy, anchor] = LABELS[c.name];
            const on = active === c.name;
            return (
              <g
                key={c.name}
                className={`x-map-city${on ? " is-active" : ""}`}
                onMouseEnter={() => setActive(c.name)}
                onMouseLeave={() => setActive(null)}
              >
                <circle cx={c.x} cy={c.y} r={18} className="x-map-pulse" />
                <circle cx={c.x} cy={c.y} r={c.name === "Chicago" ? 7 : 5} className="x-map-dot" />
                <text x={c.x + dx} y={c.y + dy} textAnchor={anchor} className="x-map-label">
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
      </figure>
    </div>
  );
}
