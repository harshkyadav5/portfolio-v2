import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ArrowUpRight,
  Home,
  User,
  FolderGit2,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Code2,
  Trophy,
} from "lucide-react";
import { MagneticWrapper } from "./MagneticWrapper";
import { profile, socials } from "@/data/portfolio";

const sections = [
  { id: "home", label: "home", icon: Home },
  { id: "about", label: "about", icon: User },
  { id: "projects", label: "projects", icon: FolderGit2 },
  { id: "education", label: "education", icon: GraduationCap },
  { id: "contact", label: "contact", icon: Mail },
];

const socialIcon: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
  Codeforces: Trophy,
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for menu highlight
  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-4 md:top-6 z-50 transition-all duration-500 ease-apple ${
        scrolled ? "scale-[0.98]" : ""
      }`}
    >
      <div className="container flex items-center justify-end">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Resume CTA */}
          <MagneticWrapper>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume"
              className="group relative h-12 md:h-14 pl-4 pr-3 md:pl-5 md:pr-4 rounded-full glass-strong flex items-center gap-2 text-sm md:text-base text-foreground overflow-hidden transition-all duration-500 ease-apple hover:shadow-pop hover:scale-105"
            >
              <FileText className="h-[18px] w-[18px] relative z-10 transition-transform duration-500 ease-apple group-hover:-rotate-6" />
              <span className="relative z-10 capitalize font-medium">resume</span>
              <span className="relative z-10 ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 transition-all duration-500 ease-apple group-hover:bg-foreground/20">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </MagneticWrapper>

          {/* Menu trigger + dropdown */}
          <div className="relative">
            <MagneticWrapper>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className={`glass-strong h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-all duration-500 ease-apple hover:shadow-pop hover:scale-110 ${
                  open ? "bg-foreground/5" : ""
                }`}
              >
                {/* Animated bars → x */}
                <span className="relative block h-4 w-5">
                  <motion.span
                    aria-hidden
                    className="absolute left-0 right-0 mx-auto h-[2px] rounded-full bg-foreground"
                    animate={open ? { top: 7, rotate: 45 } : { top: 2, rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  <motion.span
                    aria-hidden
                    className="absolute left-0 right-0 mx-auto h-[2px] w-3.5 rounded-full bg-foreground"
                    animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ top: 7 }}
                  />
                  <motion.span
                    aria-hidden
                    className="absolute left-0 right-0 mx-auto h-[2px] rounded-full bg-foreground"
                    animate={open ? { top: 7, rotate: -45 } : { top: 12, rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </span>
              </button>
            </MagneticWrapper>

            <AnimatePresence>
              {open && (
                <>
                  {/* Backdrop to close on outside click */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 -z-10"
                    onClick={() => setOpen(false)}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ transformOrigin: "top right" }}
                    className="absolute right-0 top-[64px] md:top-[72px] w-72 glass-strong rounded-3xl p-3 shadow-pop"
                  >
                    {/* Header label */}
                    <div className="px-3 pt-1 pb-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        navigate
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {String(
                          Math.max(
                            0,
                            sections.findIndex((s) => s.id === activeId),
                          ) + 1,
                        ).padStart(2, "0")}
                        {" / "}
                        {String(sections.length).padStart(2, "0")}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-0.5">
                      {sections.map((s, i) => {
                        const Icon = s.icon;
                        const isActive = s.id === activeId;
                        return (
                          <motion.li
                            key={s.id}
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.04 + i * 0.04,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          >
                            <button
                              onClick={() => go(s.id)}
                              className={`group relative w-full flex items-center gap-3 rounded-2xl px-3 py-2.5 text-base transition-all duration-300 ease-apple ${
                                isActive
                                  ? "text-foreground bg-foreground/[0.06]"
                                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                              }`}
                            >
                              <span
                                className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ease-apple ${
                                  isActive ? "bg-foreground/10" : "bg-foreground/[0.04] group-hover:bg-foreground/10"
                                }`}
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="flex-1 capitalize text-left">{s.label}</span>
                              {isActive && (
                                <motion.span
                                  layoutId="nav-active-dot"
                                  className="h-1.5 w-1.5 rounded-full bg-foreground"
                                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                />
                              )}
                            </button>
                          </motion.li>
                        );
                      })}
                    </ul>

                    {/* Footer: socials */}
                    <div className="mt-2 pt-2 border-t border-foreground/10 flex items-center justify-between px-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        connect
                      </span>
                      <div className="flex items-center gap-1">
                        {socials.map((s) => {
                          const Icon = socialIcon[s.label];
                          return (
                            <a
                              key={s.label}
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={s.label}
                              className="h-8 w-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-300 ease-apple"
                            >
                              {Icon ? (
                                <Icon className="h-4 w-4" />
                              ) : (
                                <span className="font-mono text-[10px]">{s.label[0]}</span>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
