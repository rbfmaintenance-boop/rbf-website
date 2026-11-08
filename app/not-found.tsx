import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found | RBF Maintenance",
  alternates: { canonical: null },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="x-page-head x-page-head--tall">
          <div className="x-wrap">
            <h1>We couldn&apos;t find that page.</h1>
            <p>The link may be old or mistyped. You can go to the home page or send us a service request.</p>
            <div className="x-actions" style={{ marginTop: 28 }}>
              <Link href="/" className="x-btn">
                Go to the home page
              </Link>
              <Link href="/request-service" className="x-btn x-btn--ghost">
                Request service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
