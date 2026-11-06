import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";

export function CertificationExplorer() {
  const [query, setQuery] = useState("");
  const [issuerFilter, setIssuerFilter] = useState("all");
  const [technologyFilter, setTechnologyFilter] = useState("all");

  const issuers = [...new Set(certifications.map((certificate) => certificate.issuer))];
  const technologies = [
    ...new Set(certifications.map((certificate) => certificate.technology || "Not specified")),
  ];
  const normalizedQuery = query.trim().toLowerCase();
  const visibleCertificates = certifications.filter((certificate) => {
    const technology = certificate.technology || "Not specified";
    const searchableText = [
      certificate.issuer,
      certificate.title,
      technology,
      certificate.score,
      certificate.date,
    ]
      .join(" ")
      .toLowerCase();

    return (
      searchableText.includes(normalizedQuery) &&
      (issuerFilter === "all" || certificate.issuer === issuerFilter) &&
      (technologyFilter === "all" || technology === technologyFilter)
    );
  });

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:grid-cols-3 sm:p-5">
        <div className="sm:col-span-3">
          <label htmlFor="certificate-search" className="mb-1.5 block text-sm font-medium">
            Search certificates
          </label>
          <input
            id="certificate-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search these five issuers or credential details"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base focus-visible:outline"
          />
        </div>
        <div>
          <label htmlFor="certificate-issuer" className="mb-1.5 block text-sm font-medium">
            Issuer
          </label>
          <select
            id="certificate-issuer"
            value={issuerFilter}
            onChange={(event) => setIssuerFilter(event.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base focus-visible:outline"
          >
            <option value="all">All issuers</option>
            {issuers.map((issuer) => (
              <option key={issuer} value={issuer}>
                {issuer}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="certificate-technology" className="mb-1.5 block text-sm font-medium">
            Technology
          </label>
          <select
            id="certificate-technology"
            value={technologyFilter}
            onChange={(event) => setTechnologyFilter(event.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base focus-visible:outline"
          >
            <option value="all">All technologies</option>
            {technologies.map((technology) => (
              <option key={technology} value={technology}>
                {technology}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
        Showing {visibleCertificates.length} of {certifications.length} credentials.
      </p>

      {visibleCertificates.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleCertificates.map((certificate) => (
            <li key={certificate.issuer} className="flex">
              <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-4">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Award aria-hidden="true" className="size-5" />
                    </span>
                    <span className="truncate text-sm font-semibold">{certificate.issuer}</span>
                  </span>
                  <span className="shrink-0 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Certificate
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">
                    {certificate.title || "Certificate title to be added"}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {certificate.technology
                      ? `Technology: ${certificate.technology}`
                      : "Technology or course topic to be added"}
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground">Score</dt>
                      <dd className="mt-1 font-medium">{certificate.score || "Not provided"}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground">Date</dt>
                      <dd className="mt-1 font-medium">{certificate.date || "Not provided"}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-5">
                    {certificate.file ? (
                      <a
                        href={certificate.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        View certificate
                        <ExternalLink aria-hidden="true" className="size-4" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <p className="rounded-lg border border-dashed border-border px-3 py-2 text-xs text-muted-foreground">
                        Certificate file to be added in src/data/portfolio.ts
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
          No certificates match those filters.
        </p>
      )}
    </div>
  );
}
