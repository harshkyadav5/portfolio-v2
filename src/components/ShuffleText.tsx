import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ShuffleText({
  words,
  interval = 2400,
  scrambleDuration = 700,
  className = "",
}: {
  words: string[];
  interval?: number;
  scrambleDuration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(words[0] ?? "");
  const indexRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!words.length) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const scrambleTo = (next: string) => {
      const prev = display;
      const length = Math.max(prev.length, next.length);
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / scrambleDuration);
        let out = "";
        for (let i = 0; i < length; i++) {
          const charProgress = (t - (i / length) * 0.6) / 0.4;
          if (charProgress >= 1) {
            out += next[i] ?? "";
          } else if (charProgress <= 0) {
            out += prev[i] ?? CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(out);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(next);
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const id = window.setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      const next = words[indexRef.current];
      if (reduced) setDisplay(next);
      else scrambleTo(next);
    }, interval);

    return () => {
      window.clearInterval(id);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [words.join("|"), interval, scrambleDuration]);

  return (
    <span className={className} aria-label={words[indexRef.current]}>
      {display}
    </span>
  );
}
