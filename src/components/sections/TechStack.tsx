import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <section id="stack" className="section relative">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-4">/ tools</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-[-0.04em] uppercase leading-[0.95] text-foreground">
                stack
                <span className="font-serif-display text-accent normal-case lowercase ml-3">i build with.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-base text-muted-foreground max-w-md">
                A flexible toolkit across web development, programming, data &amp; ML — picked for the right job, not
                the trend.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Two marquee rows of tech tiles */}
      <div className="-mx-6">
        <Marquee>
          {techStack.slice(0, Math.ceil(techStack.length / 2)).map((t) => (
            <TechTile key={t.name} name={t.name} logo={t.logo} />
          ))}
        </Marquee>
        <Marquee reverse>
          {techStack.slice(Math.ceil(techStack.length / 2)).map((t) => (
            <TechTile key={t.name} name={t.name} logo={t.logo} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TechTile({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex items-center gap-3 glass glass-hover rounded-full pl-2.5 pr-5 py-2 shrink-0 transition-all duration-500 ease-apple hover:scale-105">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/60 ring-1 ring-border/60 transition-colors duration-500 ease-apple group-hover:ring-accent/40">
        <img src={logo} alt="" className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
      </span>
      <span className="text-[15px] font-medium text-foreground whitespace-nowrap tracking-tight">{name}</span>
    </div>
  );
}
