import Link from "next/link";
import Logo from "./Logo";
import { LEGAL_NAME } from "@/lib/company";

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
        <div>
          <p className="footer-copy">
            © {new Date().getFullYear()} {LEGAL_NAME} · All rights reserved · Illinois
          </p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
