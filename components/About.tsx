import SectionHead from "./SectionHead";

const STEPS = [
  { title: "Submit a request", desc: "Send the details and photos through our online form or by phone." },
  { title: "We assess and schedule", desc: "A coordinator reviews the scope and books the right technician." },
  { title: "Work is completed", desc: "Our team performs the work with minimal disruption to your site." },
  { title: "You receive a report", desc: "Photos and service notes are delivered at closeout." },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div>
          <SectionHead eyebrow="About RBF Maintenance" title="Accountable service. Consistent results." />
          <div className="about-copy">
            <p>
              RBF Maintenance provides comprehensive maintenance and repair services to commercial
              property owners and managers. Our technicians and project coordinators manage
              everything from routine service calls to interior renovations, allowing our clients
              to focus on their core operations.
            </p>
            <p>
              Our process is straightforward and transparent. Each request is assessed, scheduled,
              and completed by a dedicated team, with regular status updates through to final
              closeout. A single point of accountability ensures every project is delivered to
              the same high standard.
            </p>
          </div>
        </div>

        <div className="process">
          <p className="process-title">How it works</p>
          <ol>
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="process-num">{i + 1}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
