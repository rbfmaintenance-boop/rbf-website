import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { FootprintMap } from "./Maps";
import TradeBoard from "./TradeBoard";
import ProcessTimeline from "./ProcessTimeline";
import IllinoisCoverage from "./IllinoisCoverage";
import { PHONE_DISPLAY, PHONE_HREF, CONTACT_EMAIL } from "@/lib/company";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`;

export function Hero() {
  return (
    <section className="x-hero">
      <Image
        src={photo("photo-1785682118449-21da8825754d")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="x-hero-bg"
      />
      <div className="x-hero-shade" aria-hidden="true" />
      <div className="x-wrap x-hero-inner">
        <h1 className="x-in x-in-1">Repairs and maintenance for commercial properties across Illinois.</h1>
        <p className="x-hero-lead x-in x-in-2">
          Electrical, plumbing, HVAC and interior work for property and facility managers. Send one request. We
          schedule it, do the work and send you photos when it&apos;s done.
        </p>
        <div className="x-actions x-in x-in-3">
          <Link href="/request-service" className="x-btn x-btn--light">
            Request service
          </Link>
          <a href={PHONE_HREF} className="x-btn x-btn--outline-light">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="x-creds-band x-in x-in-4">
        <dl className="x-wrap x-creds">
          <div>
            <dt>Since 2000</dt>
            <dd>Buildate&apos;s track record, now in Illinois</dd>
          </div>
          <div>
            <dt>8 trades</dt>
            <dd>One request covers them all</dd>
          </div>
          <div>
            <dt>Statewide</dt>
            <dd>Chicago area to Springfield</dd>
          </div>
          <div>
            <dt>Emergency service</dt>
            <dd>Urgent requests go first</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

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
        <TradeBoard />
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
    <section id="how-it-works" className="x-section x-dark">
      <div className="x-wrap x-process">
        <div>
          <h2 className="x-h2">How a job runs</h2>
          <p className="x-intro">One coordinator stays your contact from the first call to the closeout.</p>
          <ProcessTimeline steps={STEPS} />
        </div>
        <figure className="x-report">
          <div className="x-report-head">
            <span className="x-report-title">Closeout report</span>
            <span className="x-report-tag">Sample</span>
          </div>
          <dl className="x-report-meta">
            <div>
              <dt>Work order</dt>
              <dd>1042</dd>
            </div>
            <div>
              <dt>Trade</dt>
              <dd>HVAC</dd>
            </div>
            <div>
              <dt>Property</dt>
              <dd>Retail center, suite B</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd className="x-report-done">Completed</dd>
            </div>
          </dl>
          <div className="x-report-block">
            <h4>Work performed</h4>
            <p>
              Replaced the condenser fan motor on rooftop unit 3. Checked refrigerant pressures and cleaned the
              coils. Unit is cooling to setpoint.
            </p>
          </div>
          <div className="x-report-photo">
            <Image
              src={photo("photo-1705579605238-24a90c8799c5")}
              alt=""
              fill
              sizes="(max-width: 900px) 90vw, 420px"
            />
            <span>6 photos attached</span>
          </div>
          <ul className="x-report-checks">
            <li>Work area cleaned</li>
            <li>Site contact signed off</li>
            <li>Photos and notes sent to the property manager</li>
          </ul>
          <figcaption className="sr-only">Sample of the closeout report you receive after every job</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function SisterCompany() {
  return (
    <section className="x-section">
      <div className="x-wrap x-split x-split--map">
        <figure className="x-map x-map--us">
          <FootprintMap />
        </figure>
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
      <div className="x-wrap">
        <IllinoisCoverage />
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
