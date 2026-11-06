import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { education, profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sridhar T. — Education and Interests" },
      {
        name: "description",
        content:
          "About Sridhar T., a Computer Science and Engineering student at Rajalakshmi Institute of Technology.",
      },
      { property: "og:title", content: "About Sridhar T." },
      {
        property: "og:description",
        content:
          "About the interests and academic background of Sridhar T., a Computer Science and Engineering student.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About me</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{profile.about}</p>
      </header>

      <section
        aria-labelledby="about-education-heading"
        className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
            <GraduationCap aria-hidden="true" className="size-6" />
          </span>
          <div>
            <h2 id="about-education-heading" className="text-xl font-semibold">
              Education
            </h2>
            <p className="mt-3 font-medium">{education.degree}</p>
            <p className="mt-1 text-muted-foreground">{education.institution}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Expected graduation: {education.expectedGraduation}
            </p>
          </div>
        </div>
      </section>

      <a
        href="/#home"
        className="mt-8 inline-flex rounded-md font-semibold text-accent underline-offset-4 hover:underline"
      >
        Back to portfolio
      </a>
    </div>
  );
}
