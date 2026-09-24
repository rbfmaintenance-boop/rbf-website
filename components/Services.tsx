import Image from "next/image";
import Link from "next/link";
import SectionHead from "./SectionHead";

const SERVICES = [
  {
    title: "Electrical",
    desc: "Electrical diagnostics, circuit installation, panel service, and interior and exterior lighting solutions.",
    img: "https://buildategroup.com/wp-content/uploads/2026/05/electrical.jpg",
  },
  {
    title: "Plumbing",
    desc: "Leak detection, drain and piping repairs, fixture installation, and water heater replacement.",
    img: "https://buildategroup.com/wp-content/uploads/2026/05/plumbing.jpg",
  },
  {
    title: "HVAC",
    desc: "Heating and cooling repairs, scheduled preventive maintenance, and equipment replacement.",
    img: "https://buildategroup.com/wp-content/uploads/2026/05/hvac.jpg",
  },
  {
    title: "Flooring & Surfaces",
    desc: "Installation and repair of tile, luxury vinyl, carpet tile, and concrete surfaces for high-traffic environments.",
    img: "https://buildategroup.com/wp-content/uploads/2026/05/flooring.jpg",
  },
  {
    title: "Drywall & Interiors",
    desc: "Drywall repair, painting, finish work, and interior improvements ranging from single rooms to full suites.",
    img: "https://buildategroup.com/wp-content/uploads/2026/05/drywall.jpg",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Our Services"
          title="Every essential trade, one coordinated team."
          lead="Our technicians cover the building systems your property depends on, so you never have to manage multiple vendors for a single issue."
        />

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="svc-card">
              <div className="svc-img">
                <Image src={s.img} alt={`${s.title} services`} fill sizes="(max-width: 900px) 100vw, 380px" />
              </div>
              <div className="svc-body">
                <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}

          <Link href="/request-service" className="svc-card svc-cta">
            <span className="svc-num">Need something else?</span>
            <h3>Tell us what your property needs.</h3>
            <p>Submit a request and a coordinator will match it with the right technician.</p>
            <span className="svc-cta-link">Request Service →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
