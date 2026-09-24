import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "var(--ink-950)", color: "#fff" }}>
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Careers</p>
              <h1 style={{ color: "#fff", fontSize: "clamp(30px, 5vw, 48px)", maxWidth: 640 }}>
                Careers at RBF Maintenance.
              </h1>
              <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 540, marginTop: 18 }}>
                We are always interested in hearing from skilled tradespeople and coordinators who
                share our commitment to quality. Submit your information below and our team will
                contact you regarding suitable opportunities.
              </p>
            </Reveal>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ maxWidth: 640 }}>
            <Reveal>
              <form style={{ display: "grid", gap: 16 }}>
                <label style={{ display: "grid", gap: 6, fontSize: 13.5, color: "var(--steel-600)" }}>
                  Full name
                  <input required style={inputStyle} type="text" />
                </label>
                <label style={{ display: "grid", gap: 6, fontSize: 13.5, color: "var(--steel-600)" }}>
                  Email
                  <input required style={inputStyle} type="email" />
                </label>
                <label style={{ display: "grid", gap: 6, fontSize: 13.5, color: "var(--steel-600)" }}>
                  Trade / role interested in
                  <input style={inputStyle} type="text" placeholder="Electrical, plumbing, HVAC..." />
                </label>
                <label style={{ display: "grid", gap: 6, fontSize: 13.5, color: "var(--steel-600)" }}>
                  Tell us about your experience
                  <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} />
                </label>
                <button type="submit" className="btn" style={{ justifyContent: "center" }}>
                  Submit Application
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  border: "1px solid var(--line)",
  borderRadius: 3,
  fontSize: 16,
  fontFamily: "var(--font-body)",
};
