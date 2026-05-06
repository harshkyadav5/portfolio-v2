import { Reveal } from "@/components/Reveal";
import { certifications } from "@/data/portfolio";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Certifications() {
  return (
    <section id="certifications" className="section relative">
      <div className="container max-w-7xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-4">
            / credentials
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-[-0.04em] uppercase leading-[0.95] text-foreground">
            recent
            <span className="font-serif-display text-accent normal-case lowercase ml-3">
              awards.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass glass-hover rounded-3xl overflow-hidden h-full"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 glass-strong rounded-full p-1.5">
                    <img src={c.badge} alt="" className="h-7 w-7 object-contain" loading="lazy" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {c.issuer} · {c.year}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground flex items-center gap-1.5 group-hover:text-accent transition-colors">
                    {c.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{c.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* See all CTA */}
        <Reveal>
          <div className="mt-20 flex justify-center">
            <Link
              to="/awards"
              className="group inline-flex items-center gap-4 glass-strong rounded-full pl-7 pr-3 py-3 hover:scale-[1.02] transition-transform duration-300 ease-apple"
            >
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-foreground">
                see all awards
              </span>
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
