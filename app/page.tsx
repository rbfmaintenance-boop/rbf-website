import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero, Trades, Process, SisterCompany, Industries, Coverage, Contact } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Header overlay />
      <main id="main">
        <Hero />
        <Trades />
        <Process />
        <SisterCompany />
        <Industries />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
