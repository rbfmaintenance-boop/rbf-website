import { ImageResponse } from "next/og";

// The preview image shown when the site is shared on LinkedIn, Facebook, texts and email.
export const alt = "RBF Maintenance: commercial repairs and maintenance across Illinois";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16233a",
          padding: "72px 80px",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: 6, color: "#e9edf2" }}>RBF MAINTENANCE</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 70, fontWeight: 700, lineHeight: 1.08, maxWidth: 980 }}>
            Commercial repairs and maintenance across Illinois
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#c3cad2" }}>
            Electrical, plumbing, HVAC and interior work for commercial properties.
          </div>
        </div>
        <div style={{ display: "flex", width: 180, height: 8, background: "#b8893b" }} />
      </div>
    ),
    size
  );
}
