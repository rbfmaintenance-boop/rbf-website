"use client";

import { useEffect } from "react";

// Fades sections up as they scroll into view. Elements marked data-reveal (or the children of
// data-reveal-stagger) start hidden only when JavaScript runs (html.js), so nothing is lost without it.
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
