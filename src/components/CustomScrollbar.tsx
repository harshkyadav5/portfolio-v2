import { useEffect, useRef } from "react";

export function CustomScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ y: 0, scrollTop: 0 });

  useEffect(() => {
    const doc = document.documentElement;

    const update = () => {
      const track = trackRef.current;
      const thumb = thumbRef.current;
      if (!track || !thumb) return;

      const winH = window.innerHeight;
      const docH = doc.scrollHeight;
      if (docH <= winH + 4) {
        thumb.style.display = "none";
        return;
      }
      thumb.style.display = "block";

      const trackH = track.clientHeight;
      const ratio = winH / docH;
      const thumbH = Math.max(48, trackH * ratio);
      const maxScroll = docH - winH;
      const scrollTop = window.scrollY || doc.scrollTop;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      const top = (trackH - thumbH) * progress;

      thumb.style.height = `${thumbH}px`;
      thumb.style.transform = `translateY(${top}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const ro = new ResizeObserver(update);
    ro.observe(document.body);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  // Drag + click-to-jump
  useEffect(() => {
    const thumb = thumbRef.current;
    const track = trackRef.current;
    if (!thumb || !track) return;

    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      draggingRef.current = true;
      dragStartRef.current = {
        y: e.clientY,
        scrollTop: window.scrollY,
      };
      thumb.setPointerCapture(e.pointerId);
      document.body.style.userSelect = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const trackH = track.clientHeight;
      const thumbH = thumb.clientHeight;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const maxScroll = docH - winH;
      const dy = e.clientY - dragStartRef.current.y;
      const scrollableTrack = trackH - thumbH;
      const newScroll =
        dragStartRef.current.scrollTop + (dy / scrollableTrack) * maxScroll;
      window.scrollTo({ top: newScroll, behavior: "auto" });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      try {
        thumb.releasePointerCapture(e.pointerId);
      } catch {}
      document.body.style.userSelect = "";
    };

    thumb.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    const onTrackClick = (e: MouseEvent) => {
      if (e.target === thumb) return;
      const rect = track.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const trackH = track.clientHeight;
      const thumbH = thumb.clientHeight;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const maxScroll = docH - winH;
      const ratio = (clickY - thumbH / 2) / (trackH - thumbH);
      const newScroll = Math.max(0, Math.min(maxScroll, ratio * maxScroll));
      window.scrollTo({ top: newScroll, behavior: "smooth" });
    };
    track.addEventListener("click", onTrackClick);

    return () => {
      thumb.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("click", onTrackClick);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 z-[100] h-screen hidden md:block pointer-events-auto"
      style={{ width: "10px" }}
    >
      <div
        ref={trackRef}
        className="relative h-full w-full cursor-pointer"
        style={{
          background: "hsl(24 12% 6%)",
          borderLeft: "1px solid hsl(var(--border) / 0.4)",
        }}
      >
        <div
          ref={thumbRef}
          className="absolute left-0 right-0 w-full cursor-grab active:cursor-grabbing"
          style={{
            background: "hsl(22 35% 55%)",
            transition: "background 0.25s var(--ease-apple)",
            willChange: "transform, height",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "hsl(22 55% 62%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "hsl(22 35% 55%)")
          }
        />
      </div>
    </div>
  );
}
