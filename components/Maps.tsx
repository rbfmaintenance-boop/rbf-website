import { IL_CITIES, IL_NEIGHBORS, IL_PATH, IL_VIEWBOX, US_POINTS, US_STATES, US_VIEWBOX } from "@/lib/maps";

// Label placement per city: [dx, dy, text-anchor]
const LABELS: Record<string, [number, number, "start" | "end"]> = {
  Chicago: [12, 5, "start"],
  Naperville: [6, 22, "start"],
  Aurora: [-12, -8, "end"],
  Rockford: [-12, -6, "end"],
  Peoria: [-12, 5, "end"],
  Springfield: [12, 5, "start"],
};

export function IllinoisMap() {
  const chicago = IL_CITIES.find((c) => c.name === "Chicago")!;
  return (
    <svg
      className="x-map-svg"
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
        return (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r={c.name === "Chicago" ? 7 : 5} className="x-map-dot" />
            <text x={c.x + dx} y={c.y + dy} textAnchor={anchor} className="x-map-label">
              {c.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function FootprintMap() {
  const { houston, chicago } = US_POINTS;
  return (
    <svg
      className="x-map-svg"
      viewBox={US_VIEWBOX}
      role="img"
      aria-label="US map highlighting Texas, where Buildate has worked since 2000, and Illinois, served by RBF Maintenance"
    >
      {US_STATES.map((s) => (
        <path key={s.id} d={s.d} className={s.id === "48" || s.id === "17" ? "x-us-on" : "x-us-off"} />
      ))}
      <g className="x-us-pin">
        <circle cx={houston[0]} cy={houston[1]} r={11} />
        <circle cx={chicago[0]} cy={chicago[1]} r={11} />
      </g>
      <text x={houston[0] + 22} y={houston[1] + 2} className="x-us-label">
        <tspan className="x-us-label-strong">Buildate</tspan>
        <tspan x={houston[0] + 22} dy={32}>
          Texas, since 2000
        </tspan>
      </text>
      <text x={chicago[0] + 22} y={chicago[1] + 2} className="x-us-label">
        <tspan className="x-us-label-strong">RBF Maintenance</tspan>
        <tspan x={chicago[0] + 22} dy={32}>
          Illinois
        </tspan>
      </text>
    </svg>
  );
}
