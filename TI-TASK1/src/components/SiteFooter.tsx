import { ExternalLink } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials: { label: string; href: string }[] = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
  ];

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <section aria-label="About this site">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              {profile.name}
            </h2>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{profile.title}</p>
          </section>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Site map
            </h2>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-label="Social profiles">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h2>
            <ul className="mt-2 space-y-1.5">
              {socials.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {social.label}
                      <ExternalLink aria-hidden="true" className="size-3.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {social.label} details to be added
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          © {year} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
