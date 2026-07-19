import SectionHead from "./SectionHead";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-[90px] px-[clamp(24px,6vw,120px)] py-[clamp(84px,12vh,150px)]"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionHead title="Projects" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-[18px] border border-line/16 bg-linear-to-b from-[rgba(18,24,27,0.5)] to-[rgba(11,15,17,0.25)] p-[30px] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between gap-2.5">
                <span
                  className={
                    p.award
                      ? "inline-flex items-center gap-[7px] rounded-full bg-accent px-2.5 py-[5px] font-grotesk text-[11px] font-medium tracking-[0.1em] text-accent-ink"
                      : "inline-flex items-center gap-[7px] rounded-full border border-line/22 px-2.5 py-[5px] font-grotesk text-[11px] tracking-[0.1em] text-fg-dim"
                  }
                >
                  {p.badge}
                </span>
                <span className="font-grotesk text-xs whitespace-nowrap text-fg-faint">
                  {p.date}
                </span>
              </div>
              <h3 className="mt-[18px] font-grotesk text-[26px] font-bold text-fg-bright">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-[14.5px] leading-[1.65] text-fg-muted">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-[7px]">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-[7px] border border-line/16 px-[9px] py-[5px] font-grotesk text-[11.5px] text-fg-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-1.5 font-grotesk text-[12.5px] font-semibold tracking-[0.06em] text-accent hover:text-accent-soft"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/cadencheng888"
            target="_blank"
            className="inline-flex items-center gap-[9px] rounded-full border border-line/30 px-6 py-[13px] font-grotesk text-[14.5px] font-semibold text-fg transition-colors duration-250 hover:border-accent hover:text-accent"
          >
            See more on GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
