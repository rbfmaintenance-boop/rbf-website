import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({
  title,
  effective,
  children,
}: {
  title: string;
  effective: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main">
        <section>
          <div className="wrap legal">
            <h1>{title}</h1>
            <p className="legal-date">Effective date: {effective}</p>
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
