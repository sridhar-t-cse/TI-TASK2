import { createFileRoute } from "@tanstack/react-router";
import { skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Areas of Interest — Sridhar T." },
      {
        name: "description",
        content:
          "Areas of interest for Sridhar T.: software development, AI, web technologies, databases, and practical problem-solving.",
      },
      { property: "og:title", content: "Areas of Interest — Sridhar T." },
      {
        property: "og:description",
        content:
          "Areas of interest include software development, artificial intelligence, web technologies, and databases.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Areas of interest
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Technical skills</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Topics I am interested in exploring as a Computer Science and Engineering student.
        </p>
      </header>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups[0].skills.map((skill) => (
          <li key={skill} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{skill}</h2>
          </li>
        ))}
      </ul>

      <a
        href="/#skills"
        className="mt-8 inline-flex rounded-md font-semibold text-accent underline-offset-4 hover:underline"
      >
        Back to portfolio
      </a>
    </div>
  );
}
