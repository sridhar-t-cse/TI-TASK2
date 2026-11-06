import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  Medal,
  Sparkles,
} from "lucide-react";
import profilePhoto from "@/assets/sridhar-profile.jpeg";
import { CertificationExplorer } from "@/components/CertificationExplorer";
import { ContactForm } from "@/components/ContactForm";
import {
  achievements,
  education,
  internship,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sridhar T. — Computer Science and Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Sridhar T., a Computer Science and Engineering student interested in software development, AI, web technologies, databases, and practical problem-solving.",
      },
      {
        property: "og:title",
        content: "Sridhar T. — Computer Science and Engineering Student",
      },
      {
        property: "og:description",
        content:
          "Explore the portfolio, projects, internship, education, and certifications of Sridhar T.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const sectionClass = "portfolio-section mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24";
const eyebrowClass = "text-xs font-semibold uppercase tracking-[0.2em] text-accent";

function Home() {
  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="portfolio-hero scroll-mt-24 overflow-hidden bg-hero text-hero-foreground"
      >
        <div className="hero-layout mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-32">
          <div className="hero-copy">
            <p className="inline-flex items-center gap-2 rounded-full border border-hero-foreground/20 bg-hero-foreground/5 px-3 py-1.5 text-sm text-highlight">
              <span aria-hidden="true" className="size-2 rounded-full bg-highlight" />
              CSE student · Expected graduation {education.expectedGraduation}
            </p>
            <h1
              id="hero-heading"
              className="mt-7 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-medium text-highlight sm:text-2xl">
              {profile.title}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-hero-foreground/80 sm:text-lg">
              {profile.about}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-highlight"
              >
                Explore my projects
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-hero-foreground/30 px-5 py-3 text-sm font-semibold text-hero-foreground transition-colors hover:bg-hero-foreground/10"
              >
                Get in touch
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <figure className="hero-portrait relative mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-hero-foreground/15 bg-hero-foreground/[0.04] shadow-2xl">
              <img
                src={profilePhoto}
                alt="Portrait of Sridhar T."
                width={768}
                height={960}
                fetchPriority="high"
                className="size-full object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading" className={sectionClass}>
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <header>
            <p className={eyebrowClass}>A little about me</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
              Curious by nature.
              <br />
              Practical by design.
            </h2>
          </header>
          <div className="portfolio-card rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-lg leading-8 text-muted-foreground">{profile.about}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skillGroups[0].skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 bg-muted/40">
        <div className={sectionClass}>
          <SectionHeading
            eyebrow="What I'm interested in"
            title="Technical skills"
            description="Areas I am currently exploring as a Computer Science and Engineering student."
            id="skills-heading"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skillGroups[0].skills.map((skill, index) => (
              <li key={skill} className="portfolio-card rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  {index === 0 ? (
                    <Code2 aria-hidden="true" className="size-5" />
                  ) : (
                    <Sparkles aria-hidden="true" className="size-5" />
                  )}
                </span>
                <h3 className="mt-5 font-semibold">{skill}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20">
        <div className={sectionClass}>
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A mix of hackathon projects, a completed deployment, and work still in progress. Each status is shown as provided."
            id="projects-heading"
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <li key={project.title}>
                <article className="portfolio-card flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      {index < 2 ? (
                        <Medal aria-hidden="true" className="size-5" />
                      ) : (
                        <Code2 aria-hidden="true" className="size-5" />
                      )}
                    </span>
                    <span className="rounded-full bg-muted px-2.5 py-1 text-right text-xs font-medium text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt || `${project.title} project preview`}
                      className="mt-5 aspect-video w-full rounded-xl border border-border object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <h3 className="mt-5 text-lg font-semibold leading-snug">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  {project.outcome ? (
                    <p className="mt-4 rounded-lg bg-secondary/70 px-3 py-2 text-sm font-medium text-secondary-foreground">
                      {project.outcome}
                    </p>
                  ) : null}
                  <div className="mt-auto flex flex-wrap gap-4 pt-6 text-xs text-muted-foreground">
                    {project.repository ? (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline"
                      >
                        View source code
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <span>Repository link to be added</span>
                    )}
                    {project.demo ? <span>Live demo available</span> : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="scroll-mt-20 bg-hero text-hero-foreground"
      >
        <div className={sectionClass}>
          <SectionHeading
            eyebrow="Professional experience"
            title="Internship"
            description="A concise record of the experience provided."
            id="experience-heading"
            light
          />
          <article className="portfolio-card mt-10 flex flex-col gap-5 rounded-2xl border border-hero-foreground/15 bg-hero-foreground/[0.05] p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-highlight text-hero">
              <BriefcaseBusiness aria-hidden="true" className="size-6" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold">{internship.role}</h3>
                <span className="rounded-full border border-hero-foreground/20 px-2.5 py-1 text-xs text-highlight">
                  {internship.status}
                </span>
              </div>
              <p className="mt-1 text-highlight">{internship.organization}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-hero-foreground/75">
                {internship.description}
              </p>
              {internship.certificate ? (
                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold text-highlight underline-offset-4 hover:underline"
                >
                  View internship completion certificate
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <p className="mt-3 text-xs text-hero-foreground/70">
                  Add the certificate file path in src/data/portfolio.ts.
                </p>
              )}
            </div>
            <p className="text-sm text-hero-foreground/75">{internship.duration}</p>
          </article>
        </div>
      </section>

      <section
        id="certifications"
        aria-labelledby="certifications-heading"
        className="scroll-mt-20"
      >
        <div className={sectionClass}>
          <SectionHeading
            eyebrow="Learning"
            title="Certifications"
            description="Search and filter credentials by issuer or technology. Titles, scores, and files are left blank until the verified details are available."
            id="certifications-heading"
          />
          <div className="mt-10">
            <CertificationExplorer />
          </div>
        </div>
      </section>

      <section
        id="achievements"
        aria-labelledby="achievements-heading"
        className="scroll-mt-20 bg-muted/40"
      >
        <div className={sectionClass}>
          <SectionHeading
            eyebrow="Milestones"
            title="Hackathon achievements"
            description="Awards and qualifications included here are limited to the results provided."
            id="achievements-heading"
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {achievements.map((achievement) => (
              <li key={achievement.event}>
                <article className="portfolio-card flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Medal aria-hidden="true" className="size-6" />
                  </span>
                  <div>
                    <p className={eyebrowClass}>{achievement.event}</p>
                    <h3 className="mt-2 text-xl font-semibold">{achievement.result}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{achievement.detail}</p>
                    {achievement.certificate ? (
                      <a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                      >
                        View achievement certificate
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="education" aria-labelledby="education-heading" className="scroll-mt-20">
        <div className={sectionClass}>
          <SectionHeading
            eyebrow="Academic background"
            title="Education"
            description="Currently pursuing an undergraduate degree."
            id="education-heading"
          />
          <article className="portfolio-card mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
              <GraduationCap aria-hidden="true" className="size-7" />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <p className="mt-2 text-muted-foreground">{education.institution}</p>
            </div>
            <p className="rounded-full bg-muted px-3 py-1.5 text-sm font-medium">
              Expected {education.expectedGraduation}
            </p>
          </article>
        </div>
      </section>

      <section id="resume" aria-labelledby="resume-heading" className="scroll-mt-20 bg-muted/40">
        <div className={`${sectionClass} py-12 md:py-16`}>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className={eyebrowClass}>Take it with you</p>
              <h2 id="resume-heading" className="mt-2 text-2xl font-bold">
                Resume
              </h2>
            </div>
            {profile.resume ? (
              <a
                href={profile.resume}
                download
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download aria-hidden="true" className="size-4" />
                Download resume
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
        <div className={`${sectionClass} pb-20 md:pb-28`}>
          <div className="rounded-[2rem] bg-hero p-7 text-hero-foreground sm:p-10 md:p-14">
            <p className={eyebrowClass}>Say hello</p>
            <h2 id="contact-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
              Let’s connect.
            </h2>
            <p className="mt-4 max-w-2xl text-hero-foreground/75">
              Connect with me or send a message using the accessible contact form.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <ContactItem
                icon={<Code2 aria-hidden="true" className="size-5" />}
                label="GitHub"
                value={profile.github || "GitHub details to be added"}
                href={profile.github}
              />
              <ContactItem
                icon={<ArrowUpRight aria-hidden="true" className="size-5" />}
                label="LinkedIn"
                value={profile.linkedin || "LinkedIn details to be added"}
                href={profile.linkedin}
              />
              <ContactItem
                icon={<Mail aria-hidden="true" className="size-5" />}
                label="Email"
                value={profile.email || "Email details to be added"}
                href={profile.email ? `mailto:${profile.email}` : ""}
              />
            </ul>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
  light?: boolean;
}) {
  return (
    <header>
      <p
        className={
          light ? "text-xs font-semibold uppercase tracking-[0.2em] text-highlight" : eyebrowClass
        }
      >
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p
        className={`mt-3 max-w-2xl ${light ? "text-hero-foreground/70" : "text-muted-foreground"}`}
      >
        {description}
      </p>
    </header>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-highlight text-hero">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-hero-foreground/70">{label}</span>
        <span className="block truncate text-sm font-medium">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-hero-foreground/15 bg-hero-foreground/[0.05] p-3 transition-colors hover:bg-hero-foreground/10"
        >
          {content}
        </a>
      ) : (
        <div className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-hero-foreground/15 bg-hero-foreground/[0.05] p-3">
          {content}
        </div>
      )}
    </li>
  );
}
