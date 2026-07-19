import SectionHead from "./SectionHead";
import { COURSEWORK, SKILLS } from "@/lib/data";

const STATS = [
  { num: "3×", label: "Hackathon podiums" },
  { num: "100+", label: "Users onboarded" },
  { num: "7.7M+", label: "Interactions modeled" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-[90px] px-[clamp(24px,6vw,120px)] py-[clamp(84px,12vh,150px)]"
    >
      <div className="mx-auto max-w-[1120px]">
        <SectionHead title="About" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] items-start gap-[clamp(32px,5vw,72px)]">
          <div>
            <h2 className="max-w-[16ch] font-grotesk text-[clamp(30px,4vw,46px)] leading-[1.08] font-bold tracking-[-0.02em] text-fg-bright">
              Building where math, ML &amp; the web meet.
            </h2>
            <p className="mt-[26px] text-[16.5px] leading-[1.7] text-fg-muted">
              I&apos;m a Computer Science &amp; Mathematics student at UC San
              Diego with a Data Science minor, drawn to the place where rigorous
              math becomes something people can actually use. I ship full-stack
              products and real-time computer-vision systems.
            </p>
            <p className="mt-[18px] text-[16.5px] leading-[1.7] text-fg-dim">
              Off the keyboard, I&apos;m out on the trails — chasing the next
              climb with the same instinct: keep going until the hard problem
              finally gives.
            </p>
            <div className="mt-[38px] grid grid-cols-3 gap-5">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-grotesk text-[clamp(26px,3.4vw,36px)] font-bold text-accent">
                    {s.num}
                  </div>
                  <div className="mt-1.5 font-grotesk text-[11px] leading-[1.5] tracking-[0.14em] text-fg-faint uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] border border-line/16 bg-linear-to-b from-[rgba(18,24,27,0.6)] to-[rgba(11,15,17,0.3)] p-[30px]">
            <div className="mb-[18px] font-grotesk text-[11.5px] tracking-[0.24em] text-fg-faint uppercase">
              Education
            </div>
            <div className="font-grotesk text-[22px] leading-[1.25] font-semibold text-fg-bright">
              University of California, San Diego
            </div>
            <div className="mt-2 text-[15.5px] leading-[1.6] text-fg-muted">
              B.S. Computer Science &amp; Mathematics
              <br />
              Data Science Minor
            </div>
            <div className="mt-5 flex flex-wrap gap-[22px] border-t border-line/12 pt-5">
              <div>
                <div className="font-grotesk text-[10.5px] tracking-[0.16em] text-fg-faint uppercase">
                  Expected
                </div>
                <div className="mt-1 font-grotesk text-[19px] font-semibold text-accent">
                  2028
                </div>
              </div>
              <div>
                <div className="font-grotesk text-[10.5px] tracking-[0.16em] text-fg-faint uppercase">
                  GPA
                </div>
                <div className="mt-1 font-grotesk text-[19px] font-semibold text-accent">
                  3.53
                </div>
              </div>
              <div className="min-w-[150px] flex-1">
                <div className="font-grotesk text-[10.5px] tracking-[0.16em] text-fg-faint uppercase">
                  Location
                </div>
                <div className="mt-1 font-grotesk text-[19px] font-semibold text-fg">
                  La Jolla, CA
                </div>
              </div>
            </div>
            <div className="mt-5 border-t border-line/12 pt-5">
              <div className="mb-3 font-grotesk text-[10.5px] tracking-[0.16em] text-fg-faint uppercase">
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {COURSEWORK.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line/20 px-3 py-1.5 text-[12.5px] text-fg-chip"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(40px,6vw,64px)]">
          <div className="mb-[22px] font-grotesk text-[11.5px] tracking-[0.24em] text-fg-faint uppercase">
            Technical Skills
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[26px]">
            {SKILLS.map((group) => (
              <div key={group.group}>
                <div className="mb-3.5 font-grotesk text-[15px] font-semibold text-accent">
                  {group.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[10px] border border-line/18 px-3.5 py-2 text-[13.5px] text-fg-chip transition-colors duration-200 hover:border-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
