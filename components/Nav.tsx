"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 860) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const bar =
    "h-0.5 w-[25px] rounded-sm bg-fg transition-[transform,opacity] duration-300";

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(20px,5vw,64px)] py-4">
        <div
          className={`pointer-events-none absolute inset-0 border-b border-line/12 bg-ink/72 backdrop-blur-[14px] transition-opacity duration-[350ms] ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <a
          href="#hero"
          className="relative z-1 inline-flex items-center gap-[11px] text-fg"
        >
          <span className="font-grotesk text-[16px] font-semibold tracking-[0.2px]">
            Caden Cheng
          </span>
        </a>

        {/* desktop links */}
        <div className="relative z-1 hidden items-center gap-[34px] min-[860px]:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14.5px] font-medium text-fg-muted hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/uploads/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-[7px] rounded-full border border-line/30 px-[18px] py-[9px] text-sm font-semibold text-fg hover:border-accent hover:text-accent"
          >
            Resume <span className="font-grotesk">↗</span>
          </a>
        </div>

        {/* hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="relative z-1 flex cursor-pointer flex-col gap-[5px] p-2 min-[860px]:hidden"
        >
          <span
            className={`${bar} ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`${bar} ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`${bar} ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`fixed inset-x-0 top-0 z-49 flex flex-col border-b border-line/12 bg-[rgba(255,255,255,0.97)] pt-[82px] pb-[22px] backdrop-blur-[16px] transition-all duration-[420ms] ease-[cubic-bezier(.4,0,.2,1)] min-[860px]:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[108%] opacity-0"
        }`}
      >
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="flex justify-between border-b border-line/10 px-[clamp(20px,5vw,64px)] py-4 font-grotesk text-[22px] text-fg"
          >
            <span>{l.label}</span>
            <span className="text-[13px] text-[#98a5aa]">
              0{i + 1}
            </span>
          </a>
        ))}
        <a
          href="/uploads/resume.pdf"
          target="_blank"
          onClick={() => setMenuOpen(false)}
          className="px-[clamp(20px,5vw,64px)] py-4 font-grotesk text-[22px] text-accent"
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}
