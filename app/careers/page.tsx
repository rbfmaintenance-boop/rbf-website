import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersForm from "@/components/CareersForm";

export const metadata: Metadata = {
  title: "Careers | RBF Maintenance",
  description: "Work with RBF Maintenance on commercial properties across Illinois.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="x-page-head">
          <div className="x-wrap">
            <h1>Careers at RBF Maintenance</h1>
            <p>
              We&apos;re always looking for skilled tradespeople and coordinators in Illinois. Send your details and
              we&apos;ll contact you when there&apos;s a fit.
            </p>
          </div>
        </section>
        <section className="x-section">
          <div className="x-wrap x-narrow">
            <CareersForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
