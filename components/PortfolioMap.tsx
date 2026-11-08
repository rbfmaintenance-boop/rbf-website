"use client";

import Link from "next/link";
import { useState } from "react";
import { IL_CITIES, IL_NEIGHBORS, IL_PATH } from "@/lib/maps-il";

// Map canvas is wider than the state so the coordinator and vendors fit to the east
const MW = 660;
const MH = 720;
// Building drawing canvas
const DW = 640;
const DH = 280;

type System = {
  area: string;
  trade: string;
  scope: string;
  vendor: string;
  count: number;
  form: string;
  x: number;
  y: number;
};

const SYSTEMS: System[] = [
  { area: "Roof", trade: "HVAC", scope: "Rooftop unit repairs and replacement, preventive maintenance, thermostats and controls.", vendor: "HVAC company", count: 1, form: "HVAC", x: 115, y: 42 },
  { area: "Office suites", trade: "Flooring, painting and drywall", scope: "Tenant turns, suite refreshes, flooring, paint, ceiling tiles and wall repairs.", vendor: "Flooring, paint and drywall crews", count: 3, form: "Multiple trades", x: 235, y: 100 },
  { area: "Restrooms", trade: "Plumbing", scope: "Leaks, clogs and drain lines, fixtures, valves and water heaters.", vendor: "Plumber", count: 1, form: "Plumbing", x: 72, y: 222 },
  { area: "Electrical room", trade: "Electrical", scope: "Panels and breakers, new circuits and dedicated lines, troubleshooting.", vendor: "Electrician", count: 1, form: "Electrical", x: 152, y: 191 },
  { area: "Storefront", trade: "General repairs", scope: "Door closers, locks and hardware, glass doors and storefront frames.", vendor: "Handyman", count: 1, form: "General repairs", x: 355, y: 200 },
  { area: "Exterior and parking", trade: "Lighting and fencing", scope: "Wall packs and parking lot lights, fence and gate repairs.", vendor: "Electrician and fence company", count: 2, form: "Multiple trades", x: 540, y: 168 },
];

type Site = { name: string; type: string; sys: number; task: string; side: "start" | "end"; dy: number; dark?: boolean; x: number; y: number };

const SITE_DATA: Omit<Site, "x" | "y">[] = [
  // Chicago sits on the lake shore, so its label goes over the lake in dark text
  { name: "Chicago", type: "Office building", sys: 3, task: "Added dedicated circuits for a new tenant", side: "start", dy: -4, dark: true },
  { name: "Naperville", type: "Medical office", sys: 2, task: "Cleared a restroom drain line", side: "end", dy: 12 },
  { name: "Rockford", type: "Retail center", sys: 0, task: "Serviced a rooftop unit", side: "end", dy: 0 },
  { name: "Peoria", type: "Office building", sys: 1, task: "Patched and painted suite walls", side: "end", dy: 0 },
  { name: "Springfield", type: "Retail store", sys: 4, task: "Fixed a storefront door closer", side: "start", dy: 0 },
];

const SITES: Site[] = SITE_DATA.map((s) => {
  const c = IL_CITIES.find((city) => city.name === s.name)!;
  return { ...s, x: c.x, y: c.y };
});

const VENDORS = [
  { label: "Electrician", x: 575, y: 62 },
  { label: "Plumber", x: 590, y: 225 },
  { label: "HVAC company", x: 565, y: 450 },
  { label: "Flooring installer", x: 545, y: 590 },
  { label: "Painter", x: 70, y: 430 },
  { label: "Handyman", x: 85, y: 575 },
];

const HUB = { x: 560, y: 330 };
const pct = (v: number, total: number) => `${((v / total) * 100).toFixed(2)}%`;

function curve(s: Site) {
  const cx = (s.x + HUB.x) / 2;
  const cy = Math.min(s.y, HUB.y) - 40;
  return `M${s.x} ${s.y} Q${cx} ${cy} ${HUB.x} ${HUB.y}`;
}

// Each site works with 4 of the 6 vendors
function vendorLines(s: Site, i: number) {
  return VENDORS.filter((_, k) => k !== i % 6 && k !== (i + 3) % 6)
    .map((v) => `M${s.x} ${s.y} L${v.x} ${v.y}`)
    .join(" ");
}

function tagTransform(x: number, y: number) {
  const px = (x / DW) * 100;
  const py = (y / DH) * 100;
  const tx = px > 72 ? "calc(-100% + 12px)" : px < 18 ? "-12px" : "-50%";
  const ty = py < 30 ? "14px" : "calc(-100% - 14px)";
  return `translate(${tx}, ${ty})`;
}

export default function PortfolioMap() {
  const [rbf, setRbf] = useState(true);
  const [site, setSite] = useState(0);
  const [sys, setSys] = useState(SITES[0].sys);

  const n = SITES.length;
  const s = SITES[site];
  const cs = SYSTEMS[sys];
  const go = (i: number) => {
    setSite(i);
    setSys(SITES[i].sys);
  };

  const others = SITES.map((x, i) => [x, i] as const).filter(([, i]) => i !== site);
  const webD = rbf ? others.map(([x]) => curve(x)).join(" ") : others.map(([x, i]) => vendorLines(x, i)).join(" ");
  const selD = rbf ? curve(s) : vendorLines(s, site);

  return (
    <div className={`x-pf${rbf ? " is-rbf" : " is-vendors"}`}>
      <div className="x-pf-toggle" role="group" aria-label="Compare RBF with separate vendors">
        <button type="button" aria-pressed={rbf} onClick={() => setRbf(true)}>
          With RBF
        </button>
        <button type="button" aria-pressed={!rbf} onClick={() => setRbf(false)}>
          With separate vendors
        </button>
      </div>

      <div className="x-pf-grid" data-reveal>
        <div>
          <div className="x-pf-mapbox">
            <div className="x-pf-map">
              <svg viewBox={`0 0 ${MW} ${MH}`} aria-hidden="true">
                <g className="x-pf-neighbors">
                  {IL_NEIGHBORS.map((nb) => (
                    <path key={nb.id} d={nb.d} />
                  ))}
                </g>
                <path d={IL_PATH} className="x-pf-state" />
                <path d={webD} className="x-pf-web" />
                <path d={selD} className="x-pf-sel" />
              </svg>

              {rbf ? (
                <div className="x-pf-hub" style={{ left: pct(HUB.x, MW), top: pct(HUB.y, MH) }}>
                  <span className="x-pf-hub-dot" />
                  <div className="x-pf-hub-label">
                    <strong>RBF coordinator</strong>
                    <span>One contact, every site</span>
                  </div>
                </div>
              ) : (
                VENDORS.map((v) => (
                  <span key={v.label} className="x-pf-vendor" style={{ left: pct(v.x, MW), top: pct(v.y, MH) }}>
                    {v.label}
                  </span>
                ))
              )}

              {SITES.map((x, i) => (
                <div key={x.name} className={`x-pf-pin${i === site ? " is-active" : ""}`} style={{ left: pct(x.x, MW), top: pct(x.y, MH) }}>
                  <span
                    className={`x-pf-pin-label x-pf-pin-label--${x.side}${x.dark ? " x-pf-pin-label--dark" : ""}`}
                    style={{ ["--dy" as string]: `${x.dy}px` }}
                    aria-hidden="true"
                  >
                    {x.name}
                  </span>
                  <button type="button" aria-label={`${x.name} sample job`} aria-pressed={i === site} onClick={() => go(i)}>
                    <span />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <p className="x-pf-caption">
            {rbf ? `One coordinator for all ${n} sites` : `6 vendors and ${n * 4} working relationships`}
          </p>
        </div>

        <div className="x-pf-card">
          <div className="x-pf-card-head">
            <h3>{s.name}</h3>
            <span className="x-pf-tag">Sample job</span>
            <span className="x-pf-arrows">
              <button type="button" aria-label="Previous site" onClick={() => go((site + n - 1) % n)}>
                &#8249;
              </button>
              <button type="button" aria-label="Next site" onClick={() => go((site + 1) % n)}>
                &#8250;
              </button>
            </span>
          </div>
          <dl className="x-pf-meta">
            <div>
              <dt>Property</dt>
              <dd>{s.type}</dd>
            </div>
            <div>
              <dt>Latest job</dt>
              <dd>{s.task}</dd>
            </div>
          </dl>

          <div className="x-pf-drawing">
            <svg viewBox={`0 0 ${DW} ${DH}`} aria-hidden="true">
              <g className="x-pf-hatch">
                {Array.from({ length: 53 }, (_, k) => 8 + k * 12).map((x) => (
                  <line key={x} x1={x} y1={240} x2={x - 8} y2={250} />
                ))}
              </g>
              <g className="x-pf-ink">
                <line x1="0" y1="240" x2="640" y2="240" />
                <rect x="40" y="60" width="380" height="180" className="x-pf-fill" />
                <rect x="34" y="54" width="392" height="6" className="x-pf-fill2" />
                <rect x="40" y="146" width="380" height="5" className="x-pf-fill2" />
                <rect x="80" y="30" width="70" height="24" className="x-pf-fill" />
                <circle cx="99" cy="42" r="7" />
                <path d="M118 36h24M118 42h24M118 48h24" />
                <rect x="200" y="38" width="44" height="16" className="x-pf-fill" />
                <line x1="208" y1="46" x2="236" y2="46" />
                <line x1="170" y1="60" x2="170" y2="146" />
                <line x1="300" y1="60" x2="300" y2="146" />
                <path d="M70 128h50M74 128v18M116 128v18M200 128h50M204 128v18M246 128v18M330 128h50M334 128v18M376 128v18" />
                <line x1="120" y1="151" x2="120" y2="240" />
                <line x1="200" y1="151" x2="200" y2="240" />
                <rect x="52" y="194" width="10" height="22" className="x-pf-fill" />
                <path d="M62 214h18q0 12-10 14l-3 12" />
                <line x1="88" y1="200" x2="110" y2="200" />
                <path d="M99 200v-6h6" />
                <rect x="90" y="168" width="18" height="20" />
                <rect x="140" y="170" width="24" height="42" className="x-pf-fill2" />
                <path d="M145 178h14M145 184h14M145 190h14M145 196h14M145 202h14" />
                <rect x="172" y="180" width="12" height="16" className="x-pf-fill" />
                <line x1="152" y1="170" x2="152" y2="151" />
                <rect x="300" y="166" width="110" height="74" className="x-pf-glass" />
                <line x1="337" y1="166" x2="337" y2="240" />
                <line x1="374" y1="166" x2="374" y2="240" />
                <line x1="366" y1="200" x2="366" y2="210" />
                <path d="M226 151v4h16v-4M266 151v4h16v-4" />
                <rect x="420" y="172" width="6" height="7" className="x-pf-solid" />
                <line x1="540" y1="240" x2="540" y2="128" />
                <path d="M540 128h22" />
                <rect x="556" y="128" width="14" height="5" className="x-pf-solid" />
                <path d="M590 240v-36M604 240v-36M618 240v-36M632 240v-36M584 212h56M584 228h56" />
              </g>
              <g className="x-pf-hidden-lines">
                <rect x="56" y="64" width="348" height="8" />
                <line x1="152" y1="158" x2="296" y2="158" />
                <line x1="104" y1="200" x2="104" y2="240" />
              </g>
            </svg>
            {SYSTEMS.map((x, i) => (
              <button
                key={x.area}
                type="button"
                className={`x-pf-spot${i === sys ? " is-active" : ""}`}
                style={{ left: pct(x.x, DW), top: pct(x.y, DH) }}
                aria-label={`${x.area}, ${x.trade}`}
                aria-pressed={i === sys}
                onClick={() => setSys(i)}
              >
                <span />
              </button>
            ))}
            <span className="x-pf-spot-tag" style={{ left: pct(cs.x, DW), top: pct(cs.y, DH), transform: tagTransform(cs.x, cs.y) }} aria-hidden="true">
              {cs.area}
            </span>
          </div>
          <p className="x-pf-hint">Select a point on the building.</p>

          <div aria-live="polite">
            <div className="x-pf-row">
              <p className="x-pf-row-label">
                {cs.area} · {cs.trade}
              </p>
              <p>{cs.scope}</p>
            </div>
            <div className="x-pf-row x-pf-who">
              <span className="x-pf-row-label">Who you call</span>
              <span>
                <strong>
                  <i aria-hidden="true" />
                  {rbf ? "RBF Maintenance" : cs.vendor}
                </strong>
                <span>
                  {rbf
                    ? `Same contact for all ${n} sites.`
                    : `${cs.count} of the 6 vendors you manage, each on their own schedule.`}
                </span>
              </span>
            </div>
          </div>
          <Link href={`/request-service?trade=${encodeURIComponent(cs.form)}`} className="x-link">
            Request service
          </Link>
        </div>
      </div>
    </div>
  );
}
