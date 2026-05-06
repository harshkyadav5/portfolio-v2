import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="container max-w-7xl">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">/ about</p>
            <span className="h-px flex-1 bg-border/70" />
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {profile.location}
            </p>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.05}>
          <h2 className="mt-10 font-display text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-[-0.045em] uppercase leading-[0.9] text-foreground">
            hello,
            <br />
            <span className="font-serif-display text-accent normal-case lowercase">i&apos;m harsh.</span>
          </h2>
        </Reveal>

        {/* Bio — editorial two-column */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">[ 01 ] who</p>
              <p className="mt-5 text-lg md:text-xl leading-relaxed text-foreground/90">
                Final-year <span className="text-foreground font-medium">B.Tech CSE (AI &amp; ML)</span> student at{" "}
                <span className="text-foreground font-medium">VIT Bhopal University</span> with a hunger to learn and
                ship.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">[ 02 ] what</p>
              <p className="mt-5 text-lg md:text-xl leading-relaxed text-foreground/90">
                I bridge the gap between aesthetics, performance, and engineering — across full-stack web and applied
                ML. Currently exploring product engineering, design systems, and ML tooling.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stat counters — editorial */}
        <Reveal delay={0.25}>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 md:gap-10 border-t border-border pt-10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col last:sm:col-span-2 last:md:col-span-1 last:sm:justify-self-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  0{i + 1}
                </span>
                <div className="mt-3 font-display text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-foreground">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
