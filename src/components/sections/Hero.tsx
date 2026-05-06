import { motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, Sparkles, Code2, Layout, Cpu } from "lucide-react";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { ShuffleText } from "@/components/ShuffleText";
import { profile } from "@/data/portfolio";

const services = [
  { icon: Cpu, label: "AI / ML Projects" },
  { icon: Layout, label: "Web Development" },
  { icon: Code2, label: "Frontend Engineering" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-24">
      {/* Cinematic vignette glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(900px circle at 50% 35%, hsl(var(--accent) / 0.18), transparent 60%)",
        }}
      />

      {/* Subtle scroll indicator — bottom right, below navbar zone */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute right-10 bottom-10 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground hover:text-foreground transition-colors z-10"
        aria-label="Scroll down"
      >
        <span>scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>

      <div className="container relative z-10 max-w-7xl">
        {/* Split layout: left = headline, right = services / cta / bio */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-end">
          {/* LEFT — name + headline */}
          <div 
            className="min-w-0 overflow-hidden [container-type:inline-size]"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to right, black 80%, transparent 100%)'
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-muted-foreground mb-5"
            >
              Hello There !
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl mb-6"
            >
              I am <span className="text-foreground font-medium">{profile.name}</span>
            </motion.p>

            <h1 className="font-display font-extrabold leading-[0.88] tracking-[-0.05em] text-balance">
              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[18cqw] lg:text-[10rem] uppercase text-foreground"
              >
                I BUILD
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[18cqw] lg:text-[10rem] uppercase text-gradient-bronze whitespace-nowrap"
              >
                <ShuffleText words={["AI × WEB", "ML × DEV", "DATA × IO"]} />
              </motion.span>
            </h1>
          </div>

          {/* RIGHT — services list, CTA, bio */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            {/* Availability chip */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                open for SDE / AI–ML internships
              </span>
            </div>

            {/* Services */}
            <ul className="flex flex-col gap-4 border-t border-border pt-6">
              {services.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-base md:text-lg text-foreground/90 pb-4 last:pb-0"
                >
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.6} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            {/* TALK TO ME CTA */}
            <MagneticWrapper>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-between w-full text-accent font-mono uppercase tracking-[0.22em] text-sm border-b border-t border-border py-5"
              >
                <span>Talk to me</span>
                <ArrowDownRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            </MagneticWrapper>

            {/* Bio */}
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
              Final-year B.Tech CSE (AI &amp; ML) at VIT Bhopal — building interactive, performant web experiences with
              a love for clean interfaces and intelligent systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
