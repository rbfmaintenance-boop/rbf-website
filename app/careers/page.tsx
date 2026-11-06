import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CareersForm from "@/components/CareersForm";

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
              <CareersForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

