"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Full-bleed hero photos that crossfade, each with a slow settle-in zoom.
export default function HeroSlideshow({ slides }: { slides: { src: string; position?: string }[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setCurrent((i) => (i + 1) % slides.length), 6500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="x-slides" aria-hidden="true">
      {slides.map((s, i) => (
        <div key={s.src} className={`x-slide${i === current ? " is-active" : ""}`}>
          <Image
            src={s.src}
            alt=""
            fill
            priority={i === 0}
            quality={68}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: s.position || "50% 50%" }}
          />
        </div>
      ))}
    </div>
  );
}
