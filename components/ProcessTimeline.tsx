"use client";

import { useEffect, useRef, useState } from "react";

// A timeline whose brass line fills in as you scroll, lighting up each step it reaches.
export default function ProcessTimeline({ steps }: { steps: string[][] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const box = list.getBoundingClientRect();
      const line = window.innerHeight * 0.62;
      const progress = Math.min(1, Math.max(0, (line - box.top) / box.height));
      list.style.setProperty("--progress", progress.toFixed(3));
      let last = -1;
      Array.from(list.children).forEach((li, i) => {
        if (li.getBoundingClientRect().top < line) last = i;
      });
      setReached(last);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={ref} className="x-timeline">
      {steps.map(([title, text], i) => (
        <li key={title} className={i <= reached ? "is-reached" : ""}>
          <span className="x-timeline-node" aria-hidden="true">
            {i + 1}
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}
