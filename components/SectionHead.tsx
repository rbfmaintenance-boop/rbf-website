export default function SectionHead({
  eyebrow,
  title,
  lead,
  light = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className={`sec-head${light ? " sec-head-light" : ""}`}>
      <div>
        <p className={`eyebrow-line${light ? " eyebrow-light" : ""}`}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {lead && <p className="sec-lead">{lead}</p>}
    </div>
  );
}
