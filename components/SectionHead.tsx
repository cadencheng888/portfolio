export default function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-12 flex items-center gap-6">
      <div className="font-grotesk text-[clamp(34px,5vw,58px)] leading-none font-bold tracking-[-0.02em] whitespace-nowrap text-fg-bright">
        {title}
      </div>
      <span className="h-px flex-1 bg-line/16" />
    </div>
  );
}
