import { US_POINTS, US_STATES, US_VIEWBOX } from "@/lib/maps-us";

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
      <path
        d={`M${houston[0]},${houston[1]} Q${(houston[0] + chicago[0]) / 2 + 60},${(houston[1] + chicago[1]) / 2 + 10} ${chicago[0]},${chicago[1]}`}
        className="x-us-arc"
      />
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
