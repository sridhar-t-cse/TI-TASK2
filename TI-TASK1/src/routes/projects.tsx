import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sridhar T." },
      {
        name: "description",
        content:
          "Featured hackathon entries, completed work, and projects in progress by Sridhar T.",
      },
      { property: "og:title", content: "Projects — Sridhar T." },
      {
        property: "og:description",
        content: "Featured hackathon entries, completed projects, and work in progress.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Selected work
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Featured projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Project statuses are distinguished so that completed work, hackathon entries, and work in
          progress are not conflated.
        </p>
      </header>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <li key={project.title}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {project.status}
              </p>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt || `${project.title} project preview`}
                  className="mt-4 aspect-video w-full rounded-xl border border-border object-cover"
                  loading="lazy"
                />
              ) : null}
              <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
              {project.outcome ? (
                <p className="mt-4 rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground">
                  {project.outcome}
                </p>
              ) : null}
              <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm">
                {project.repository ? (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    View source code
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="text-muted-foreground">Repository link to be added</span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    View live project
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <a
        href="/#projects"
        className="mt-8 inline-flex rounded-md font-semibold text-accent underline-offset-4 hover:underline"
      >
        Back to portfolio
      </a>
    </div>
  );
}
