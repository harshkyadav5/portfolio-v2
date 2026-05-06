import { ReactNode } from "react";

export function Marquee({
  children,
  className = "",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`p-8 ${className}`} aria-hidden>
      <div className="marquee-track" style={reverse ? { animationDirection: "reverse" } : undefined}>
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
      </div>
    </div>
  );
}
