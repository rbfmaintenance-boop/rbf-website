"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/company";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Where we work", href: "/#coverage" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="x-header">
      <div className="x-wrap x-header-bar">
        <Link href="/" aria-label="RBF Maintenance home" onClick={close} className="x-header-logo">
          <Logo height={40} />
        </Link>
        <nav className="x-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={PHONE_HREF} className="x-header-phone">
          {PHONE_DISPLAY}
        </a>
        <Link href="/request-service" className="x-btn x-header-cta">
          Request service
        </Link>
        <button
          type="button"
          className="x-menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="x-mobile-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
          <a href={PHONE_HREF} onClick={close}>
            Call {PHONE_DISPLAY}
          </a>
          <Link href="/request-service" className="x-btn" onClick={close}>
            Request service
          </Link>
        </nav>
      )}
    </header>
  );
}
