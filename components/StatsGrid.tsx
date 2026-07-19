"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { target: 3, decimals: 0, comma: false, suffix: "×", label: "Hackathon podiums" },
  { target: 100, decimals: 0, comma: false, suffix: "+", label: "Users onboarded" },
  { target: 7.7, decimals: 1, comma: false, suffix: "M+", label: "Interactions modeled" },
  { target: 2000, decimals: 0, comma: true, suffix: "+", label: "Miles run" },
];

type Stat = (typeof STATS)[number];

function fmt(value: number, s: Stat) {
  const v = s.decimals ? Number(value.toFixed(s.decimals)) : Math.round(value);
  const text = s.comma
    ? v.toLocaleString("en-US")
    : s.decimals
      ? v.toFixed(s.decimals)
      : String(v);
  return text + s.suffix;
}

export default function StatsGrid() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = [...root.querySelectorAll<HTMLElement>("[data-stat]")];
    // start from zero (stats sit below the fold, so no visible flash)
    els.forEach((el, i) => (el.textContent = fmt(0, STATS[i])));

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1500);
        const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
        els.forEach((el, i) => (el.textContent = fmt(STATS[i].target * e, STATS[i])));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="mt-[38px] grid grid-cols-2 gap-x-5 gap-y-[26px]">
      {STATS.map((s) => (
        <div key={s.label} className="min-w-0">
          <div
            data-stat
            className="font-grotesk text-[clamp(26px,3.4vw,36px)] leading-none font-bold text-accent tabular-nums"
          >
            {fmt(s.target, s)}
          </div>
          <div className="mt-2 font-grotesk text-[11px] leading-[1.5] tracking-[0.14em] text-fg-faint uppercase">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
