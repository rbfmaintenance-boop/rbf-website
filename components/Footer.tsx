import Link from "next/link";
import Logo, { LogoMark } from "./Logo";
import { CONTACT_EMAIL, LEGAL_NAME, PHONE_DISPLAY, PHONE_HREF } from "@/lib/company";

const LINKS = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Where we work", href: "/#coverage" },
  { label: "Careers", href: "/careers" },
  { label: "Request service", href: "/request-service" },
];

export default function Footer() {
  return (
    <footer className="x-footer">
      <LogoMark className="x-footer-mark" />
      <div className="x-wrap">
        <div className="x-footer-top">
          <div className="x-footer-brand">
            <Link href="/" aria-label="RBF Maintenance home">
              <Logo tone="dark" height={56} />
            </Link>
            <p>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
          <nav className="x-footer-nav" aria-label="Footer">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="x-footer-bottom">
          <p>
            © {new Date().getFullYear()} {LEGAL_NAME}. Commercial maintenance across Illinois.
          </p>
          <nav className="x-footer-legal" aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
