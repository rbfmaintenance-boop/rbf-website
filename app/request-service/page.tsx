import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestServiceForm from "@/components/RequestServiceForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Service | RBF Maintenance",
  description:
    "Submit a maintenance request to RBF Maintenance for electrical, plumbing, HVAC, flooring, or interior repairs at your commercial property.",
};

export default function RequestServicePage() {
  return (
    <>
      <Header />
      <main>
        <div className="rs-top">
          <div className="rs-top-inner">
            <h1 className="rs-title">Request Service</h1>
            <p className="rs-tagline">Prompt, Professional Service for Your Property.</p>
            <p className="rs-desc">
              Please complete the form below with as much detail as possible and attach photos
              where available. A coordinator will review your request, assign the appropriate
              technician, and contact you to confirm scheduling. Requests marked as emergencies
              are given priority.
            </p>
          </div>
        </div>

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
