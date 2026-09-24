import ContactForm from "./ContactForm";
import SectionHead from "./SectionHead";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-head">
        <SectionHead
          eyebrow="Contact Us"
          title="We look forward to working with you."
          lead="Have a question or a project in mind? Reach out directly or send us a message and our team will respond promptly."
        />
      </div>

      <div className="contact-layout">
        <div className="c-info-col">
          <div className="c-info-item">
            <div className="c-info-item-label">Phone</div>
            <div className="c-info-item-value">
              {/* TODO: RBF phone number */}
              <a href="tel:">(000) 000-0000</a>
            </div>
          </div>
          <div className="c-info-item">
            <div className="c-info-item-label">Email</div>
            <div className="c-info-item-value">
              <a href="mailto:info@rbfmaintenance.com">info@rbfmaintenance.com</a>
            </div>
            <div className="c-info-item-sub">All inquiries receive a prompt response</div>
          </div>
          <div className="c-info-item">
            <div className="c-info-item-label">Business Hours</div>
            {/* TODO: RBF business hours */}
            <div className="c-info-item-value">Mon – Fri</div>
            <div className="c-info-item-sub">Emergency service available</div>
          </div>
          <div className="c-info-item">
            <div className="c-info-item-label">Follow Us</div>
            <div className="c-info-social">
              {/* TODO: RBF Facebook and Instagram links */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <span className="c-info-social-disabled" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
            </div>
          </div>
          <div className="c-info-item">
            <div className="c-info-item-label">Service Area</div>
            <div className="c-info-item-value">Illinois Statewide</div>
            <div className="c-info-item-sub">Chicago · Naperville · Aurora · Springfield · Peoria · and more</div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
