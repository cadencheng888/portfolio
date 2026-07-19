import SectionHead from "./SectionHead";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-[90px] px-[clamp(24px,6vw,120px)] py-[clamp(84px,12vh,150px)]"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionHead title="Experience" />

        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((xp) => (
            <div
              key={xp.role}
              className="rounded-[18px] border border-line/16 bg-linear-to-b from-[rgba(244,246,247,0.5)] to-[rgba(236,239,240,0.25)] p-[clamp(24px,3vw,38px)] transition-colors duration-300 hover:border-accent/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-grotesk text-[clamp(20px,2.6vw,26px)] leading-[1.2] font-semibold text-fg-bright">
                    {xp.role}
                  </h3>
                  <div className="mt-[7px] text-[15.5px] font-semibold text-accent">
                    {xp.org}
                  </div>
                </div>
                <div className="font-grotesk text-[12.5px] whitespace-nowrap text-fg-faint">
                  {xp.date}
                </div>
              </div>
              <ul className="mt-5 flex flex-col gap-[11px]">
                {xp.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[15px] leading-[1.6] text-fg-muted"
                  >
                    <span className="mt-px shrink-0 text-accent">▹</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
