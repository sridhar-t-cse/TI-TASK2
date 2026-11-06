import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CertificationExplorer } from "@/components/CertificationExplorer";

describe("Certification explorer", () => {
  it("shows only the five requested certification issuers", () => {
    render(<CertificationExplorer />);

    expect(screen.getByText("Showing 5 of 5 credentials.")).toBeInTheDocument();
    const list = screen.getByRole("list");
    const listText = list.textContent ?? "";
    for (const issuer of ["MongoDB", "UDEMY", "NPTEL", "GDG MAD", "IIT Bombay Spoken Tutorial"]) {
      expect(listText).toContain(issuer);
    }
    expect(within(list).queryByText("IBM")).not.toBeInTheDocument();
  });

  it("filters credentials by issuer", () => {
    render(<CertificationExplorer />);

    fireEvent.change(screen.getByLabelText("Issuer"), {
      target: { value: "MongoDB" },
    });

    const list = screen.getByRole("list");
    expect(within(list).getByText("MongoDB")).toBeInTheDocument();
    expect(within(list).queryByText("UiPath")).not.toBeInTheDocument();
    expect(screen.getByText("Showing 1 of 5 credentials.")).toBeInTheDocument();
  });

  it("shows a clear empty state for unmatched searches", () => {
    render(<CertificationExplorer />);

    fireEvent.change(screen.getByRole("searchbox", { name: "Search certificates" }), {
      target: { value: "no matching issuer" },
    });

    expect(screen.getByText("No certificates match those filters.")).toBeInTheDocument();
    expect(screen.getByText("Showing 0 of 5 credentials.")).toBeInTheDocument();
  });
});
