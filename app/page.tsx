import type { Metadata } from "next";
import Image from "next/image";
import { Geist, JetBrains_Mono } from "next/font/google";
import { HEADSHOT } from "@/lib/data";
import CopyEmailLink from "@/components/CopyEmailLink";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const geist = Geist({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "caden cheng — software engineer",
  description:
    "software engineer building full stack and ai-powered products.",
};

const NAV = [
  { href: "#about", label: "about" },
  { href: "#education", label: "education" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

const PILLS = [
  { href: "mailto:cfc005@ucsd.edu", label: "email", primary: true },
  { href: "https://github.com/cadencheng888", label: "github" },
  { href: "https://linkedin.com/in/cadenfcheng", label: "linkedin" },
  { href: "/uploads/resume.pdf", label: "résumé ↗" },
];

const EXPERIENCES = [
  {
    name: "barobo",
    role: "software engineer intern",
    meta: ["san jose, ca", "june 2026 - present"],
  },
  {
    name: "computer science engineering society",
    role: "software developer, incoming vp of technology",
    meta: ["la jolla, ca", "october 2025 - present"],
  },
  {
    name: "triton web developers",
    role: "software developer",
    meta: ["la jolla, ca", "march 2026 - present"],
  },
];

const PROJECTS_V2 = [
  {
    name: "invision",
    blurb: "touchless 3d vision pipeline at 60 fps",
    meta: ["best ai at acm diamond hacks", "april 2026"],
  },
  {
    name: "silent speech",
    blurb: "real-time lip-reading bigru at 85% accuracy",
    meta: ["#1 best hack out of 35+ teams", "january 2026"],
  },
  {
    name: "remark.",
    blurb: "hands-free voice agent, 2.5s speech-to-action",
    meta: ["berkeley hackathon", "june 2026"],
  },
  {
    name: "stride lab",
    blurb: "in-browser running-form analyzer with skeleton overlay and gait metrics",
    meta: ["runs fully client-side via webassembly", "july 2026"],
  },
  {
    name: "garmin mcp server",
    blurb: "connects garmin watch data to claude desktop over mcp",
    meta: ["six tools: sleep, heart rate, workouts, stress", "july 2026"],
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={`${geist.className} mb-[26px] text-[24px] font-bold tracking-[0.01em] text-[#4B5563] uppercase`}
    >
      {children}
    </h2>
  );
}

function RuledEntry({
  name,
  line,
  meta,
}: {
  name?: string;
  line: string;
  meta: string[];
}) {
  return (
    <div className="flex flex-col gap-0.5 border-l-4 border-[#6B7280] pl-4">
      {name && (
        <p className="mb-1 text-[24px] font-bold tracking-[-0.02em]">{name}</p>
      )}
      <p className="text-[14px] leading-[1.65]">{line}</p>
      {meta.map((m) => (
        <p key={m} className="mt-2 text-[14px] text-[#6B7280]">
          {m}
        </p>
      ))}
    </div>
  );
}

export default function PortfolioV2() {
  return (
    <div className={`${mono.className} min-h-svh bg-[#FBFAF8] text-[#1A1917]`}>
      <nav className="sticky top-0 z-5 border-b border-[#E7E3DB] bg-[rgba(251,250,248,0.88)] px-[clamp(24px,7vw,72px)] py-5 backdrop-blur-[8px]">
        <div className="mx-auto flex w-full max-w-[936px] items-center justify-between gap-6">
          <a
            href="#top"
            className="text-[14.5px] font-bold tracking-[-0.02em] text-[#1A1917]"
          >
            caden cheng
          </a>
          <div className="flex flex-wrap gap-[22px] text-[14px]">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#6B7280] transition-colors duration-150 hover:text-[#1A1917]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div id="top" className="mx-auto w-full max-w-[936px] px-[clamp(24px,7vw,72px)] pb-24 min-[1100px]:px-0">
        <header className="flex flex-wrap-reverse items-start justify-between gap-x-14 gap-y-10 pt-[clamp(64px,12vh,124px)] pb-[clamp(56px,10vh,92px)]">
          <div className="max-w-[620px]">
            <h1 className="mb-[26px] text-[clamp(34px,5vw,46px)] leading-[1.05] font-bold tracking-[-0.045em] text-[#1A1917]">
              caden cheng
            </h1>
            <p className="mb-3 max-w-[560px] text-[15px] leading-[1.75] text-[#4B5563]">
              software engineer building full stack and ai-powered products.
            </p>
            <p className="mb-8 text-[14px] text-[#6B7280]">
              cs + math @ uc san diego · la jolla, ca
            </p>
            <div className="flex flex-wrap gap-2.5">
              {PILLS.map((p) =>
                p.primary ? (
                  <CopyEmailLink
                    key={p.label}
                    email="cfc005@ucsd.edu"
                    label="email"
                    className="rounded-full border border-[#1A1917] px-4 py-[9px] text-[13px] text-[#1A1917] transition-colors duration-200 hover:bg-[#1A1917] hover:text-[#FBFAF8]"
                  />
                ) : (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="rounded-full border border-[#D8D3CA] px-4 py-[9px] text-[13px] text-[#1A1917] transition-colors duration-200 hover:border-[#1A1917]"
                  >
                    {p.label}
                  </a>
                ),
              )}
            </div>
          </div>
          {HEADSHOT && (
            <Image
              src={HEADSHOT.src}
              alt={HEADSHOT.alt}
              width={224}
              height={290}
              className="h-[290px] w-[224px] flex-none rounded-[4px] object-cover object-top"
            />
          )}
        </header>

        <div className="max-w-[620px]">
          <section id="about" className="mb-[76px] scroll-mt-[90px]">
            <SectionTitle>About</SectionTitle>
            <p className="mb-3.5 text-[14.5px] leading-[1.75] text-[#4B5563]">
              i study computer science and mathematics at uc san diego, with a
              minor in data science.
            </p>
            <p className="text-[14.5px] leading-[1.75] text-[#4B5563]">
              most of my work is full stack applications and ai systems. i love
              running,
              and i enjoy digging into the science and training behind it.
              because of this, stride lab and the garmin mcp server started as
              tools i wanted for my own training :)
            </p>
          </section>

          <section id="education" className="mb-[76px] scroll-mt-[90px]">
            <SectionTitle>Education</SectionTitle>
            <div className="flex flex-col gap-0.5 border-l-4 border-[#6B7280] pl-4">
              <p className="mb-1 text-[24px] font-bold tracking-[-0.02em]">
                uc san diego
              </p>
              <p className="text-[14px] leading-[1.65]">
                b.s. in computer science and mathematics
              </p>
              <p className="text-[14px] leading-[1.65]">data science minor</p>
              <p className="mt-2 text-[14px] text-[#6B7280]">graduating 2029</p>
            </div>
          </section>

          <section id="experience" className="mb-[76px] scroll-mt-[90px]">
            <SectionTitle>Experiences</SectionTitle>
            <div className="flex flex-col gap-10">
              {EXPERIENCES.map((e) => (
                <RuledEntry key={e.name} name={e.name} line={e.role} meta={e.meta} />
              ))}
            </div>
          </section>

          <section id="projects" className="mb-[76px] scroll-mt-[90px]">
            <SectionTitle>Projects</SectionTitle>
            <div className="flex flex-col gap-10">
              {PROJECTS_V2.map((p) => (
                <RuledEntry key={p.name} name={p.name} line={p.blurb} meta={p.meta} />
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-[90px]">
            <SectionTitle>Contact</SectionTitle>
            <p className="mb-3 text-[14.5px] leading-[1.75] text-[#4B5563]">
              open to summer 2027 swe/ai internships. you can find me here:
            </p>
            <div className="flex flex-wrap items-baseline gap-2.5 text-[14.5px]">
              <CopyEmailLink
                email="cfc005@ucsd.edu"
                className="text-[#1A1917] underline underline-offset-[3px] transition-opacity duration-150 hover:opacity-50"
              />
              <span className="text-[#C9C4BB]">|</span>
              <a
                href="https://linkedin.com/in/cadenfcheng"
                target="_blank"
                rel="noopener"
                className="text-[#1A1917] underline underline-offset-[3px] transition-opacity duration-150 hover:opacity-50"
              >
                linkedin
              </a>
              <span className="text-[#C9C4BB]">|</span>
              <a
                href="https://github.com/cadencheng888"
                target="_blank"
                rel="noopener"
                className="text-[#1A1917] underline underline-offset-[3px] transition-opacity duration-150 hover:opacity-50"
              >
                github
              </a>
              <span className="text-[#C9C4BB]">|</span>
              <a
                href="/uploads/resume.pdf"
                target="_blank"
                rel="noopener"
                className="text-[#1A1917] underline underline-offset-[3px] transition-opacity duration-150 hover:opacity-50"
              >
                resume
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
