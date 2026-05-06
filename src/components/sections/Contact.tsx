import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { profile, socials } from "@/data/portfolio";
import { Copy, Check, Github, Linkedin, Code2, Trophy, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
  Codeforces: Trophy,
} as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy. Try again.");
    }
  };

  return (
    <section id="contact" className="section relative">
      <div className="container max-w-7xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-6">
            / let's talk
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold leading-[0.92] tracking-[-0.05em] uppercase text-foreground">
            <span className="block text-[14vw] md:text-[10vw] lg:text-[8.5rem]">your idea,</span>
            <span className="block text-[14vw] md:text-[10vw] lg:text-[8.5rem] font-serif-display text-accent normal-case lowercase">
              my craft.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Open to internships, collaborations, and a good conversation. The fastest way to reach
            me:
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticWrapper>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-base font-medium hover:opacity-90 transition-opacity"
              >
                send a mail
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </MagneticWrapper>
            <MagneticWrapper>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-3 rounded-full glass px-6 py-4 text-base text-foreground"
              >
                {profile.email}
                {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4 opacity-70" />}
              </button>
            </MagneticWrapper>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 pt-10 border-t border-border grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                / find me
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {socials.map((s) => {
                  const Icon = iconMap[s.label as keyof typeof iconMap];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-2xl md:text-3xl font-display font-bold text-foreground hover:text-accent transition-colors"
                    >
                      <Icon className="h-5 w-5 opacity-70" />
                      {s.label}
                      <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              [ {profile.location} ]
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
