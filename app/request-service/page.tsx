import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestServiceForm from "@/components/RequestServiceForm";
import type { Metadata } from "next";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/company";

export const metadata: Metadata = {
  alternates: { canonical: "/request-service" },
  title: "Request Service | RBF Maintenance",
  description:
    "Submit a maintenance request to RBF Maintenance for electrical, plumbing, HVAC, flooring, or interior repairs at your commercial property in Illinois.",
};

export default function RequestServicePage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="x-page-head">
          <div className="x-wrap">
            <h1>Request service</h1>
            <p>
              Tell us what needs fixing and where. Photos help. A coordinator will call you to confirm scope and
              scheduling, and emergencies go first. For anything urgent, also call{" "}
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </section>

        <div className="rs-bottom">
          <div className="rs-card-wrap">
            <div className="rs-card">
              <div className="rs-card-inner">
                <RequestServiceForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
