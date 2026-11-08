import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Hero,
  About,
  Services,
  Industries,
  Process,
  SisterCompany,
  Coverage,
  CtaBand,
  Contact,
} from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Header overlay />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Process />
        <SisterCompany />
        <Coverage />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
