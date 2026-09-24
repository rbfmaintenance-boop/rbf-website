import SectionHead from "./SectionHead";

const CITIES = ["Chicago", "Naperville", "Aurora", "Springfield", "Peoria", "Rockford", "Statewide Coverage"];

const POINTS = [
  { title: "Centralized Management", desc: "A dedicated coordinator oversees work across all of your locations." },
  { title: "Uniform Standards", desc: "Consistent procedures and quality controls at every site." },
  { title: "Responsive Scheduling", desc: "Technicians dispatched according to location and priority." },
  { title: "Scalable Capacity", desc: "Equipped to support individual buildings and multi-site portfolios alike." },
];

export default function ServiceArea() {
  return (
    <section id="service-areas" className="areas">
      <div className="wrap">
        <SectionHead
          eyebrow="Service Area"
          title="Regional coverage for your portfolio."
          lead="We support commercial properties across urban and suburban markets alike. Wherever your buildings are located, our team provides the reach and coordination to service them efficiently."
        />
        <ul className="city-tags">
          {CITIES.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div className="area-points">
          {POINTS.map((p) => (
            <div key={p.title}>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
