"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/#contact" },
  { label: "Careers", href: "/careers" },
  { label: "Request Service", href: "/request-service" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap header-bar">
        <Link href="/" aria-label="RBF Maintenance home" className="header-logo" onClick={() => setOpen(false)}>
          <Logo height={44} />
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mobile-toggle"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <nav
        className="desktop-nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          borderTop: "1px solid var(--line)",
          padding: "16px 0",
        }}
      >
        {NAV.map((item, i) => (
          <span key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Link
              href={item.href}
              style={{
                color: "var(--ink-950)",
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
            {i < NAV.length - 1 && <span style={{ color: "var(--steel-400)" }}>•</span>}
          </span>
        ))}
      </nav>

      {open && (
        <div
          className="mobile-menu"
          style={{
            background: "#fff",
            borderTop: "1px solid var(--line)",
            padding: "10px 20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--ink-950)",
                padding: "12px 4px",
                textDecoration: "none",
                fontWeight: 600,
                borderBottom: "1px solid var(--line)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
