import Image from "next/image";
import SectionHead from "./SectionHead";

const POINTS = [
  { title: "Compliance Managed", desc: "Vendor documentation, permits, and building requirements handled prior to mobilization." },
  { title: "Multi-Site Support", desc: "One dedicated point of contact for work across all of your properties." },
  { title: "Documented Completion", desc: "Photo documentation and service notes provided at the close of every job." },
  { title: "Transparent Communication", desc: "Timely, clear status updates from request through completion." },
  { title: "Professional Job Sites", desc: "Work areas protected throughout service and left clean upon completion." },
];

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap why-grid">
        <div>
          <SectionHead light eyebrow="Why RBF Maintenance" title="Dependable service. Measurable results." />
          <p className="why-copy">
            Property managers depend on partners who respond promptly, meet commitments, and
            complete work as specified. Every assignment, regardless of size, receives the same
            level of attention, with clear scopes, transparent pricing, and professional execution.
          </p>
          <ul className="why-list">
            {POINTS.map((p) => (
              <li key={p.title}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="why-photo">
          <Image
            src="/images/rbf-crew.jpg"
            alt="RBF Maintenance crew reviewing plans on site"
            fill
            sizes="(max-width: 900px) 100vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
