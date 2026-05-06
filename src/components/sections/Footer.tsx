import { socials, profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="container max-w-7xl py-10 flex flex-col md:flex-row items-center justify-left">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          © {year} · {profile.name} · <span className="whitespace-nowrap">all rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
