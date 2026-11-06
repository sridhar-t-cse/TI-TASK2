import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

const themeChangeEvent = "portfolio-theme-change";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(themeChangeEvent, onChange);
  return () => window.removeEventListener(themeChangeEvent, onChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return false;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDarkTheme = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", useDarkTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="/#home"
          className="rounded-md font-display text-lg font-bold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex flex-wrap items-center justify-end gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground xl:px-2.5 xl:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors hover:bg-muted"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          aria-pressed={isDark}
          onClick={toggleTheme}
        >
          {isDark ? (
            <Sun aria-hidden="true" className="size-5" />
          ) : (
            <Moon aria-hidden="true" className="size-5" />
          )}
        </button>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-input bg-background text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </span>
          <span className="sr-only">{open ? "Close main menu" : "Open main menu"}</span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
      >
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-3 sm:grid-cols-3 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
