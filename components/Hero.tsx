export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-[clamp(24px,6vw,120px)] pt-[120px] pb-[110px] text-center"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(58%_52%_at_50%_40%,rgba(37,99,235,0.13),rgba(37,99,235,0)_62%),radial-gradient(90%_90%_at_50%_120%,rgba(37,99,235,0.06),transparent_60%)] bg-ink" />
      <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(120%_85%_at_50%_42%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.55)_76%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[180px] bg-linear-to-b from-transparent to-ink" />

      <div className="relative z-2 w-full max-w-[960px] animate-fade-up">
        <h1 className="font-grotesk text-[clamp(46px,9vw,112px)] leading-[0.96] font-bold tracking-[-0.025em] text-fg-bright">
          Hi, I&apos;m{" "}
          <span className="text-accent [text-shadow:0_0_40px_rgba(37,99,235,0.18)]">
            Caden.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-[620px] text-[clamp(17px,2.2vw,21px)] leading-[1.55] text-fg-muted">
          Computer Science &amp; Mathematics student at UC San Diego, building
          full-stack products and computer-vision systems — and winning the
          occasional hackathon.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-[15px] font-grotesk text-[15.5px] font-bold text-accent-ink shadow-[0_10px_34px_rgba(37,99,235,0.28)] transition-[transform,box-shadow] duration-250 hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(37,99,235,0.42)]"
          >
            View my work <span>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-line/32 px-7 py-[15px] font-grotesk text-[15.5px] font-semibold text-fg transition-colors duration-250 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
        <div className="mt-11 font-grotesk text-xs tracking-[0.22em] text-fg-ghost uppercase">
          Software Developer &nbsp;·&nbsp; CSES &amp; Triton Web Devs
          &nbsp;·&nbsp; UCSD &rsquo;28
        </div>
      </div>

      <div className="absolute bottom-[30px] left-1/2 z-2 flex -translate-x-1/2 animate-float-down flex-col items-center gap-2.5 [@media(max-height:680px)]:hidden">
        <span className="font-grotesk text-[10.5px] tracking-[0.3em] text-fg-ghost">
          SCROLL
        </span>
        <span className="h-[38px] w-px bg-linear-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
