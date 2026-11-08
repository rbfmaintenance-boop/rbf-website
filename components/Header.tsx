"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/company";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Service area", href: "/#coverage" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Two-tier header like Buildate's: a large centered logo above a nav bar.
 * On scroll the logo row folds away and the nav bar stays, with a small logo and button.
 * overlay: transparent over the home page hero until the page scrolls.
 */
export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
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

  const solid = !overlay || compact || open;

  return (
    <>
      <a href="#main" className="x-skip">
        Skip to content
      </a>
      <header className={`x-header ${solid ? "is-solid" : "is-clear"}${compact ? " is-compact" : ""}`}>
        <div className="x-hd-top">
          <div className="x-wrap x-hd-top-inner">
            <a href={PHONE_HREF} className="x-hd-phone">
              {PHONE_DISPLAY}
            </a>
            <Link href="/" aria-label="RBF Maintenance home" onClick={close} className="x-hd-logo">
              <Logo tone="current" height={64} />
            </Link>
            <Link href="/request-service" className="x-btn x-btn--sm x-hd-cta">
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
        </div>
        <div className="x-hd-bar">
          <div className="x-wrap x-hd-bar-inner">
            <Link
              href="/"
              aria-label="RBF Maintenance home"
              className="x-hd-mini"
              tabIndex={compact ? 0 : -1}
              aria-hidden={!compact}
            >
              <Logo tone="current" height={34} />
            </Link>
            <nav className="x-nav" aria-label="Main">
              {NAV.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/request-service"
              className="x-btn x-btn--sm x-hd-mini-cta"
              tabIndex={compact ? 0 : -1}
              aria-hidden={!compact}
            >
              Request service
            </Link>
          </div>
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
