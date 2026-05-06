import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/Navbar";
import { certifications } from "@/data/portfolio";
import { useEffect } from "react";

export default function AllAwards() {
  useEffect(() => {
    document.title = "All awards · Harsh Yadav";
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
              / credentials · {certifications.length} awards
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] tracking-[-0.04em] uppercase text-foreground">
              all
              <br />
              <span className="font-serif-display text-accent normal-case lowercase">
                awards.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Every certification, badge, and recognition — the full credentials
              archive.
            </p>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                      <img
                        src={c.badge}
                        alt=""
                        className="h-7 w-7 object-contain"
                        loading="lazy"
                      />
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
                    <p className="mt-2 text-sm text-muted-foreground">
                      {c.description}
                    </p>
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
