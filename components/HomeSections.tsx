import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { FootprintMap } from "./Maps";
import ProcessTimeline from "./ProcessTimeline";
import IllinoisCoverage from "./IllinoisCoverage";
import HeroSlideshow from "./HeroSlideshow";
import Metrics from "./Metrics";
import IndustriesAccordion from "./IndustriesAccordion";
import { PHONE_DISPLAY, PHONE_HREF, CONTACT_EMAIL } from "@/lib/company";

export const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2048&q=80`;

const PHOTOS = {
  lift: "photo-1785682118449-21da8825754d",
  rooftop: "photo-1705579605238-24a90c8799c5",
  entrance: "photo-1748027869634-fc2e545cfb0c",
  electrical: "photo-1660330589827-da8ab7dd3c02",
  plumbing: "photo-1761758674188-2b8e4c89c5e2",
  flooring: "photo-1624574470112-46944be68409",
  painting: "photo-1693985120993-e9b203ce7631",
  buildout: "photo-1768321913920-d3ac011e0683",
};

export function Hero() {
  return (
    <section className="x-hero">
      <HeroSlideshow
        slides={[
          { src: photo(PHOTOS.lift), position: "60% 40%" },
          { src: photo(PHOTOS.rooftop), position: "50% 50%" },
          { src: photo(PHOTOS.entrance), position: "40% 40%" },
        ]}
      />
      <div className="x-hero-shade" aria-hidden="true" />
      <div className="x-wrap x-hero-inner">
        <p className="x-kicker x-in x-in-1">Backed by Buildate since 2000</p>
        <h1 className="x-in x-in-2">
          <span>Commercial maintenance and repairs</span>
          <span className="x-accent">across Illinois</span>
        </h1>
        <p className="x-hero-lead x-in x-in-3">
          Electrical, plumbing, HVAC and interior work for property and facility managers. One request, one team,
          photos at closeout.
        </p>
        <div className="x-actions x-actions--center x-in x-in-4">
          <Link href="/request-service" className="x-btn x-btn--brass">
            Submit a work order
          </Link>
          <a href={PHONE_HREF} className="x-btn x-btn--outline-light">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="x-section">
      <div className="x-wrap x-center" data-reveal>
        <h2 className="x-title">About RBF Maintenance</h2>
        <p className="x-slogan">One call. Every trade.</p>
        <div className="x-about-text">
          <p>
            RBF Maintenance is the Illinois sister company of Buildate, a commercial contractor that has served property
            and facility managers in Texas since 2000.
          </p>
          <p>
            We bring the same coordinators, the same process and the same closeout standards to Illinois. One team
            schedules the work, does it and reports back, so you never chase separate vendors for one problem.
          </p>
        </div>
      </div>
      <div className="x-wrap">
        <Metrics
          items={[
            { value: 26, suffix: "+", label: "Years of experience through Buildate" },
            { value: 8, label: "Trades under one request" },
            { value: 1, label: "Point of contact for every job" },
            { value: 100, suffix: "%", label: "Directly managed work" },
          ]}
        />
      </div>
    </section>
  );
}

const SERVICES = [
  {
    name: "Electrical",
    trade: "Electrical",
    img: PHOTOS.electrical,
    text: "Panels, circuits, interior and exterior lighting, and troubleshooting.",
  },
  {
    name: "Plumbing",
    trade: "Plumbing",
    img: PHOTOS.plumbing,
    text: "Leaks, drains, valves, fixtures, water heaters and restroom repairs.",
  },
  {
    name: "HVAC",
    trade: "HVAC",
    img: PHOTOS.rooftop,
    text: "Repairs, preventive maintenance and rooftop or split-system replacement.",
  },
  {
    name: "Flooring",
    trade: "Flooring",
    img: PHOTOS.flooring,
    text: "Tile, LVT, carpet tile and concrete, from repairs to full suites.",
  },
  {
    name: "Painting",
    trade: "Painting",
    img: PHOTOS.painting,
    text: "Suites, corridors, common areas and exteriors, plus touch-ups between tenants.",
  },
  {
    name: "Drywall and build-outs",
    trade: "Drywall and build-outs",
    img: PHOTOS.buildout,
    text: "Patches and water damage repair through framing, ceilings and suite finish-outs.",
  },
];

export function Services() {
  return (
    <section id="services" className="x-section x-dark">
      <div className="x-wrap">
        <div className="x-center" data-reveal>
          <h2 className="x-title">Our services</h2>
          <p className="x-slogan">Every trade your property needs</p>
        </div>
        <div className="x-cards" data-reveal-stagger>
          {SERVICES.map((s) => (
            <article key={s.name} className="x-card">
              <Image src={photo(s.img)} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />
              <div className="x-card-body">
                <h3>{s.name}</h3>
                <div className="x-card-more">
                  <div>
                    <p>{s.text}</p>
                    <Link href={`/request-service?trade=${encodeURIComponent(s.trade)}`}>
                      Request {s.name === "HVAC" ? "HVAC" : s.name.toLowerCase()} service
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="x-cards-note" data-reveal>
          Also covered: fencing, doors and hardware, ceiling tiles, punch lists and tenant turn work.
        </p>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className="x-section">
      <div className="x-wrap x-industries">
        <div className="x-industries-intro" data-reveal>
          <h2 className="x-title">Industries we serve</h2>
          <p className="x-slogan x-slogan--left">Work planned around your operation</p>
          <p className="x-body">
            Property and facility managers count on us to get work done without disrupting tenants, customers or
            operations.
          </p>
          <div className="x-photo x-industries-photo">
            <Image
              src={photo(PHOTOS.entrance)}
              alt="Technician in a hard hat checking equipment at a commercial building entrance"
              fill
              sizes="(max-width: 900px) 100vw, 460px"
            />
          </div>
        </div>
        <div data-reveal>
          <IndustriesAccordion />
        </div>
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
        <div data-reveal>
          <h2 className="x-title x-title--left">How a job runs</h2>
          <p className="x-slogan x-slogan--left">One coordinator from first call to closeout</p>
          <ProcessTimeline steps={STEPS} />
        </div>
        <figure className="x-report" data-reveal>
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
            <Image src={photo(PHOTOS.rooftop)} alt="" fill sizes="(max-width: 900px) 90vw, 420px" />
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
    <section className="x-section x-section--mist">
      <div className="x-wrap x-split x-split--map">
        <figure className="x-map x-map--us" data-reveal>
          <FootprintMap />
        </figure>
        <div data-reveal>
          <h2 className="x-title x-title--left">Backed by Buildate</h2>
          <p className="x-slogan x-slogan--left">Texas since 2000, now in Illinois</p>
          <p className="x-body">
            Buildate has handled commercial maintenance and repairs for property and facility managers across Texas
            since 2000. RBF Maintenance brings the same trades, the same process and the same closeout standards to
            properties in Illinois.
          </p>
          <a className="x-link" href="https://buildategroup.com" target="_blank" rel="noopener noreferrer">
            Visit buildategroup.com
          </a>
        </div>
      </div>
    </section>
  );
}

export function Coverage() {
  return (
    <section id="coverage" className="x-section">
      <div className="x-wrap" data-reveal>
        <IllinoisCoverage />
      </div>
    </section>
  );
}

export function CtaBand() {
  const bg = `/_next/image?url=${encodeURIComponent(photo(PHOTOS.lift))}&w=1600&q=70`;
  return (
    <section className="x-band" style={{ ["--band-bg" as string]: `url("${bg}")` }}>
      <div className="x-band-shade" aria-hidden="true" />
      <div className="x-wrap x-center x-band-inner" data-reveal>
        <h2 className="x-title">Have a work order ready?</h2>
        <p className="x-band-text">Send it over with a few photos and a coordinator will call you to schedule it.</p>
        <div className="x-actions x-actions--center">
          <Link href="/request-service" className="x-btn x-btn--brass">
            Submit a work order
          </Link>
          <a href={PHONE_HREF} className="x-btn x-btn--outline-light">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="x-section x-contact">
      <div className="x-wrap">
        <div className="x-center" data-reveal>
          <h2 className="x-title">Contact us</h2>
          <p className="x-slogan">Call for anything urgent</p>
        </div>
        <div className="x-contact-grid" data-reveal>
          <div className="x-contact-info">
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
                <dd>Illinois, with more states coming</dd>
              </div>
            </dl>
          </div>
          <div className="x-form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
