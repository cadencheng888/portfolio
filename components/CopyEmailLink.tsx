"use client";

import { useRef, useState } from "react";

export default function CopyEmailLink({
  email,
  label,
  className,
}: {
  email: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() => {
        navigator.clipboard
          ?.writeText(email)
          .then(() => {
            setCopied(true);
            if (timer.current) window.clearTimeout(timer.current);
            timer.current = window.setTimeout(() => setCopied(false), 1600);
          })
          .catch(() => {});
      }}
    >
      {copied ? "copied ✓" : (label ?? email)}
    </a>
  );
}
