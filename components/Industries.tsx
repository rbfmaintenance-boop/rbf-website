import SectionHead from "./SectionHead";

const INDUSTRIES = [
  {
    title: "Retail & Shopping Centers",
    desc: "Repairs and improvements scheduled outside business hours to protect sales and the customer experience.",
  },
  {
    title: "Office Buildings",
    desc: "Ongoing maintenance and suite improvements coordinated around tenant schedules to minimize disruption.",
  },
  {
    title: "Industrial & Warehousing",
    desc: "Electrical, plumbing, and HVAC support for active facilities, coordinated with operations and strict safety practices.",
  },
  {
    title: "Multifamily Communities",
    desc: "Unit turnovers, common area improvements, and building system repairs performed with consideration for residents.",
  },
  {
    title: "Healthcare Facilities",
    desc: "Clean, controlled work in sensitive environments, carried out in accordance with applicable healthcare requirements.",
  },
  {
    title: "Financial Institutions",
    desc: "Discreet, professional maintenance and interior improvements for bank branches and financial offices.",
  },
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="wrap">
        <SectionHead
          eyebrow="Industries We Serve"
          title="A consistent standard across every property type."
        />
        <div className="ind-grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className="ind-card">
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
