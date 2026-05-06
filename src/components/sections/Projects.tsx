import { Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { Marquee } from "@/components/Marquee";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="container max-w-7xl">
        {/* Section header */}
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-6">
            / 2024 — 2025 · recent
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] tracking-[-0.04em] uppercase text-foreground">
            selected
            <br />
            <span className="font-serif-display text-accent normal-case lowercase">projects</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A handful of recent builds, where strategy meets craft. Each shipped with an obsession for detail, motion,
            and the user's first three seconds.
          </p>
        </Reveal>

        {/* Marquee separator */}
        <div className="mt-16 -mx-6">
          <Marquee className="font-display text-2xl md:text-3xl uppercase tracking-tight text-muted-foreground/50">
            <span className="text-accent">✺</span>
            <span>work · work · work · work</span>
            <span className="text-accent">✺</span>
            <span>shipped with care</span>
            <span className="text-accent">✺</span>
            <span>web · ai/ml · design</span>
            <span className="text-accent">✺</span>
            <span>scroll on</span>
          </Marquee>
        </div>

        {/* Project cards (alternating) */}
        <div className="mt-20 space-y-28 md:space-y-40">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.title}>
                <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden rounded-3xl glass-strong"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </a>
                  </div>

                  <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                    <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      / {String(i + 1).padStart(2, "0")} · {p.subtitle} · {p.year}
                    </div>
                    <h3 className="mt-4 font-display text-5xl md:text-6xl font-extrabold tracking-[-0.03em] uppercase leading-[0.95] text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-serif-display text-2xl md:text-3xl text-accent">a unified workspace.</p>
                    <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                      {p.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8">
                      <MagneticWrapper>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-foreground"
                        >
                          <Github className="h-4 w-4" />
                          read story
                          <span className="h-px w-12 bg-foreground transition-all duration-300 group-hover:w-20" />
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      </MagneticWrapper>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* See all CTA */}
        <Reveal>
          <div className="mt-24 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-4 glass-strong rounded-full pl-7 pr-3 py-3 hover:scale-[1.02] transition-transform duration-300 ease-apple"
            >
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-foreground">see all projects</span>
              <span className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
