import Image from "next/image";
import type { ImageAsset } from "@/lib/data";

export default function CoverMedia({
  image,
  monogram,
  label,
  aspect,
  sizes,
  className = "",
}: {
  image?: ImageAsset | null;
  monogram: string;
  label: string;
  aspect: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className="img-grade object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {/* hairline keyline so light images don't melt into the card */}
          <div
            aria-hidden
            className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(60,78,84,0.08)]"
          />
        </>
      ) : (
        <div className="flex h-full items-center justify-center bg-[radial-gradient(80%_90%_at_50%_15%,rgba(37,99,235,0.07),transparent_65%),linear-gradient(to_bottom,rgba(240,243,244,0.85),rgba(236,239,240,0.4))]">
          <span
            aria-hidden
            className="font-grotesk text-[clamp(44px,6vw,68px)] font-bold tracking-[-0.03em] text-fg-bright/[0.07] select-none"
          >
            {monogram}
          </span>
          <span className="absolute bottom-[16px] font-grotesk text-[10px] tracking-[0.26em] text-fg-ghost uppercase">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
