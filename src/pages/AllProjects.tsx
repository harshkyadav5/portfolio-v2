import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/data/portfolio";
import { useEffect } from "react";

export default function AllProjects() {
  useEffect(() => {
    document.title = "All projects · Harsh Yadav";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="section relative pt-32">
        <div className="container max-w-7xl">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              back home
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mt-10 mb-6">
              / archive · {projects.length} projects
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] tracking-[-0.04em] uppercase text-foreground">
              all
              <br />
              <span className="font-serif-display text-accent normal-case lowercase">projects.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              The complete archive — every shipped build, experiment, and ongoing exploration.
            </p>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block glass glass-hover rounded-3xl overflow-hidden h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      / {String(i + 1).padStart(2, "0")} · {p.subtitle} · {p.year}
                    </div>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-foreground flex items-center gap-2 group-hover:text-accent transition-colors">
                      {p.title}
                      <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/80">
                      <Github className="h-3.5 w-3.5" />
                      source
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
