import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { PHONE_DISPLAY, PHONE_HREF, CONTACT_EMAIL } from "@/lib/company";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`;

export function Hero() {
  return (
    <section className="x-hero">
      <div className="x-hero-grid">
        <div className="x-hero-copy">
          <h1>Repairs and maintenance for commercial properties across Illinois.</h1>
          <p className="x-hero-lead">
            Electrical, plumbing, HVAC and interior work for property and facility managers. Send one request. We
            schedule it, do the work and send you photos when it&apos;s done.
          </p>
          <div className="x-actions">
            <Link href="/request-service" className="x-btn">
              Request service
            </Link>
            <a href={PHONE_HREF} className="x-btn x-btn--ghost">
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="x-hero-note">
            RBF Maintenance is a sister company of Buildate, a commercial contractor serving property managers since
            2000.
          </p>
        </div>
        <div className="x-hero-photo">
          <Image
            src={photo("photo-1785682118449-21da8825754d")}
            alt="Technician on a lift working on ceiling systems in a commercial building"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

const TRADES = [
  ["Electrical", "Panels, circuits, lighting and troubleshooting"],
  ["Plumbing", "Leaks, drains, fixtures and water heaters"],
  ["HVAC", "Repairs, preventive maintenance and replacements"],
  ["Flooring", "Tile, LVT, carpet tile and concrete"],
  ["Painting", "Touch-ups to full suites, inside and out"],
  ["Drywall and build-outs", "Patches to complete suite improvements"],
  ["Fencing", "Repairs and new installation"],
  ["General repairs", "Doors, hardware, fixtures and punch lists"],
];

export function Trades() {
  return (
    <section id="services" className="x-section">
      <div className="x-wrap x-trades">
        <div className="x-trades-intro">
          <h2 className="x-h2">Trades we cover</h2>
          <p className="x-intro">
            One request can cover any mix of these, so you don&apos;t have to line up separate vendors for one
            problem.
          </p>
          <Link href="/request-service" className="x-link">
            Request service
          </Link>
        </div>
        <ul className="x-board" aria-label="Trades">
          {TRADES.map(([trade, scope]) => (
            <li key={trade} className="x-board-row">
              <span className="x-board-trade">{trade}</span>
              <span className="x-board-scope">{scope}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  ["Send the request", "Use the online form, call or email. Photos help us scope and price the job faster."],
  [
    "We confirm scope and schedule",
    "A coordinator calls you back, confirms site access and handles vendor paperwork before the visit.",
  ],
  ["We do the work", "We protect the work area during the job and clean up before we leave."],
  ["You get the closeout", "Every completed job comes with photos and service notes."],
];

export function Process() {
  return (
    <section id="how-it-works" className="x-section x-section--mist">
      <div className="x-wrap">
        <h2 className="x-h2">How a job runs</h2>
        <p className="x-intro">One coordinator stays your contact from the first call to the closeout.</p>
        <ol className="x-steps">
          {STEPS.map(([title, text], i) => (
            <li key={title} className="x-step">
              <span className="x-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SisterCompany() {
  return (
    <section className="x-section">
      <div className="x-wrap x-split">
        <div className="x-photo">
          <Image
            src={photo("photo-1748027869634-fc2e545cfb0c")}
            alt="Technician in a hard hat checking equipment at a commercial building entrance"
            fill
            sizes="(max-width: 900px) 100vw, 560px"
          />
        </div>
        <div>
          <h2 className="x-h2">Backed by Buildate</h2>
          <p className="x-body">
            RBF Maintenance is a sister company of Buildate, a commercial contractor that has served property and
            facility managers in Texas since 2000.
          </p>
          <p className="x-body">
            RBF brings the same trades, the same process and the same closeout standards to properties in Illinois.
          </p>
          <a className="x-link" href="https://buildategroup.com" target="_blank" rel="noopener noreferrer">
            Visit buildategroup.com
          </a>
        </div>
      </div>
    </section>
  );
}

const SECTORS = [
  ["Retail and shopping centers", "Work scheduled before opening or after close, so stores stay open."],
  ["Office buildings", "Repairs and suite work planned around tenant schedules."],
  ["Industrial and warehouse", "Electrical, plumbing and HVAC support for facilities that keep running."],
  ["Multifamily", "Unit turns, common areas and building systems."],
  ["Healthcare", "Contained, clean work in occupied clinical spaces."],
  ["Banks and financial offices", "Branch repairs and improvements with minimal disruption."],
];

export function Industries() {
  return (
    <section id="industries" className="x-section x-section--mist">
      <div className="x-wrap">
        <h2 className="x-h2">Who we work for</h2>
        <p className="x-intro">
          Property and facility managers who need work done without disrupting tenants, customers or operations.
        </p>
        <dl className="x-sectors">
          {SECTORS.map(([name, text]) => (
            <div key={name} className="x-sector">
              <dt>{name}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Coverage() {
  return (
    <section id="coverage" className="x-section">
      <div className="x-wrap x-split x-split--reverse">
        <div>
          <h2 className="x-h2">Where we work</h2>
          <p className="x-body">
            Across Illinois, including Chicago, Naperville, Aurora, Rockford, Peoria and Springfield.
          </p>
          <p className="x-body">
            Managing several sites? One coordinator handles all of them, with the same process at every location.
          </p>
          <p className="x-body">
            We&apos;re adding more states. If you manage properties outside Illinois, ask us.
          </p>
        </div>
        <div className="x-photo">
          <Image
            src={photo("photo-1705579605238-24a90c8799c5")}
            alt="Technician on a commercial roof next to rows of HVAC units"
            fill
            sizes="(max-width: 900px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="x-section x-section--mist x-contact">
      <div className="x-wrap x-contact-grid">
        <div>
          <h2 className="x-h2">Talk to us</h2>
          <p className="x-intro">
            Call for anything urgent. For everything else, send a message and a coordinator will get back to you.
          </p>
          <a className="x-contact-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <dl className="x-contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Monday to Friday. Emergency service available.</dd>
            </div>
            <div>
              <dt>Service area</dt>
              <dd>Illinois</dd>
            </div>
          </dl>
        </div>
        <div className="x-form-card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
