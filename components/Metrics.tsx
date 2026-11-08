"use client";

import { useEffect, useRef, useState } from "react";

type Item = { value: number; suffix?: string; label: string };

// Metric boxes that count up once when they scroll into view. The page HTML holds the final numbers.
export default function Metrics({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDListElement>(null);
  const [values, setValues] = useState(items.map((i) => i.value));

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen: show final numbers
    setValues(items.map(() => 0));
    let frame = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1400);
          const eased = 1 - Math.pow(1 - t, 3);
          setValues(items.map((i) => Math.round(i.value * eased)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <dl ref={ref} className="x-metrics">
      {items.map((item, i) => (
        <div key={item.label} className="x-metric">
          <dt className="sr-only">{item.label}</dt>
          <dd>
            <span className="x-metric-num">
              {values[i]}
              {item.suffix}
            </span>
            <span className="x-metric-label" aria-hidden="true">
              {item.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
