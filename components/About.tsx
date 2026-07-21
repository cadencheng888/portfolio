import Image from "next/image";
import SectionHead from "./SectionHead";
import StatsGrid from "./StatsGrid";
import { COURSEWORK, SKILLS } from "@/lib/data";

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
              I like math that ships.
            </h2>
            <p className="mt-[26px] text-[16.5px] leading-[1.7] text-fg-muted">
              I&apos;m a Computer Science &amp; Mathematics student at UC San
              Diego with a Data Science minor. The classes I care about most are
              the ones where the math ends up as something you can run. Lately
              that means full-stack products and real-time computer-vision
              systems.
            </p>
            <p className="mt-[18px] text-[16.5px] leading-[1.7] text-fg-dim">
              Off the keyboard, I&apos;m logging miles or playing chess. The
              running keeps leaking into my work: Stride Lab and my Garmin MCP
              server both exist because I wanted better tools for my own
              training.
            </p>
            <StatsGrid />
          </div>

          <div className="rounded-[18px] border border-line/16 bg-linear-to-b from-[rgba(244,246,247,0.6)] to-[rgba(236,239,240,0.3)] p-[30px]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-[18px] font-grotesk text-[11.5px] tracking-[0.24em] text-fg-faint uppercase">
                  Education
                </div>
                <div className="font-grotesk text-[22px] leading-[1.25] font-semibold text-fg-bright">
                  University of California, San Diego
                </div>
              </div>
              <Image
                src="/ucsd-seal.svg"
                alt="UC San Diego seal"
                width={64}
                height={64}
                className="shrink-0"
              />
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
