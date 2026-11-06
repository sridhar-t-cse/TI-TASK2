import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sridhar T." },
      {
        name: "description",
        content: "Contact Sridhar T. using the accessible contact form.",
      },
      { property: "og:title", content: "Contact — Sridhar T." },
      {
        property: "og:description",
        content: "Contact Sridhar T. using the accessible contact form.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const links = [
    {
      label: "GitHub",
      value: profile.github,
      placeholder: "GitHub details to be added",
      icon: Code2,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin,
      placeholder: "LinkedIn details to be added",
      icon: ArrowUpRight,
    },
    {
      label: "Email",
      value: profile.email,
      placeholder: "Email details to be added",
      icon: Mail,
      prefix: "mailto:",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Let’s connect.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Find my profiles or send a message using the accessible contact form.
        </p>
      </header>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ label, value, placeholder, icon: Icon, prefix = "" }) => (
          <li key={label}>
            <div className="flex min-h-20 items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{label}</p>
                {value ? (
                  <a
                    href={`${prefix}${value}`}
                    className="mt-1 block break-all text-sm text-accent underline-offset-4 hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">{placeholder}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 max-w-2xl">
        <ContactForm />
      </div>

      <a
        href="/#contact"
        className="mt-8 inline-flex rounded-md font-semibold text-accent underline-offset-4 hover:underline"
      >
        Back to portfolio
      </a>
    </div>
  );
}
