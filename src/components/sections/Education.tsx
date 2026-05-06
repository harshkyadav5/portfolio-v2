import { Reveal } from "@/components/Reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section relative">
      <div className="container max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-4">
            / journey
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-[-0.04em] uppercase leading-[0.95] text-foreground">
            education
            <span className="font-serif-display text-accent normal-case lowercase ml-3">
              &amp; growth.
            </span>
          </h2>
        </Reveal>

        {/* Awards-style numbered list */}
        <ul className="mt-16 divide-y divide-border border-y border-border">
          {education.map((e, i) => (
            <Reveal key={e.level} delay={i * 0.05}>
              <li className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-baseline transition-colors hover:bg-foreground/[0.02]">
                <span className="md:col-span-1 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-6">
                  <h3 className="font-display text-2xl md:text-4xl font-bold tracking-[-0.02em] text-foreground">
                    {e.institution}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{e.degree}</p>
                </div>
                <div className="md:col-span-3 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {e.level}
                </div>
                <div className="md:col-span-2 text-right">
                  <div className="font-display text-2xl font-bold text-accent">{e.badge}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {e.year}
                  </div>
                  <div className="mt-1 text-sm text-foreground">{e.score}</div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
