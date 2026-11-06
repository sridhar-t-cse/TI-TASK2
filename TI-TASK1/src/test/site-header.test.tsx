import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/SiteHeader";

describe("Site navigation", () => {
  beforeEach(() => {
    localStorage.removeItem("portfolio-theme");
    document.documentElement.classList.remove("dark");
  });

  afterEach(() => {
    localStorage.removeItem("portfolio-theme");
    document.documentElement.classList.remove("dark");
  });

  it("keeps the mobile menu control target available and closes on Escape", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "Open main menu" });
    const menuId = menuButton.getAttribute("aria-controls");
    const menu = document.getElementById(menuId ?? "");

    expect(menu).toBeInTheDocument();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menu).toHaveAttribute("hidden");

    fireEvent.click(menuButton);
    expect(screen.getByRole("button", { name: "Close main menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(menu).not.toHaveAttribute("hidden");

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.getByRole("button", { name: "Open main menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(menuButton).toHaveFocus();
  });

  it("toggles and persists the selected color theme", () => {
    render(<SiteHeader />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");

    fireEvent.click(screen.getByRole("button", { name: "Switch to light theme" }));
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
  });
});
