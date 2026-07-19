const FOOTER_LINKS = [
  { label: "GITHUB", href: "https://github.com/cadencheng888", external: true },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/cadenfcheng",
    external: true,
  },
  { label: "EMAIL", href: "mailto:cfc005@ucsd.edu" },
  { label: "↑ TOP", href: "#hero" },
];

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-[18px] border-t border-line/14 px-[clamp(24px,6vw,120px)] py-8">
      <div className="font-grotesk text-xs tracking-[0.12em] text-fg-ghost">
        CADEN CHENG © 2026
      </div>
      <div className="flex items-center gap-[26px]">
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            className="font-grotesk text-[12.5px] tracking-[0.06em] text-fg-dim hover:text-accent"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
