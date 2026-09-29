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
              <a href="tel:+15366666991">(536) 666-6991</a>
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
