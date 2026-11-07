"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/company";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Where we work", href: "/#coverage" },
  { label: "Careers", href: "/careers" },
];

/**
 * overlay: the header sits on top of the home page hero (transparent, white logo)
 * and turns solid once the page scrolls.
 */
export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = !overlay || scrolled || open;

  return (
    <>
      <a href="#main" className="x-skip">
        Skip to content
      </a>
      <header className={`x-header ${solid ? "is-solid" : "is-clear"} ${scrolled ? "is-compact" : ""}`}>
        <div className="x-wrap x-header-bar">
          <Link href="/" aria-label="RBF Maintenance home" onClick={close} className="x-header-logo">
            <Logo tone="current" height={60} />
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
          <Link href="/request-service" className={`x-btn x-header-cta ${solid ? "" : "x-btn--light"}`}>
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
      {!overlay && <div className="x-header-spacer" aria-hidden="true" />}
    </>
  );
}
