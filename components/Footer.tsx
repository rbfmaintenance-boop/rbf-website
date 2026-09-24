import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink-950)", color: "#fff", padding: "40px 0" }}>
      <div className="wrap" style={{ marginBottom: 28 }}>
        <Link href="/" aria-label="RBF Maintenance home" style={{ display: "inline-block" }}>
          <Logo tone="dark" height={36} />
        </Link>
      </div>
      <div className="wrap footer-bottom">
        <nav className="footer-links">
          {["Home", "About", "Services", "Industries", "Service Areas", "Contact", "Careers", "Request Service"].map(
            (item) => (
              <Link
                key={item}
                href={item === "Careers" ? "/careers" : item === "Request Service" ? "/request-service" : `/#${item.toLowerCase().replace(/\s/g, "-")}`}
              >
                {item}
              </Link>
            )
          )}
        </nav>
        <p className="footer-copy">
          © 2026 RBF MAINTENANCE — All Rights Reserved — Illinois
        </p>
      </div>
    </footer>
  );
}
