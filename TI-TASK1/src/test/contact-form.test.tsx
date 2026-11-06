import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/ContactForm";

describe("Contact form", () => {
  it("announces validation errors and focuses the first invalid field", () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: "Review message" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Your message was not sent. Review the fields marked below.",
    );
    expect(screen.getByRole("textbox", { name: /^Name/ })).toHaveFocus();
    expect(screen.getByText("Enter your name.")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /^Name/ })).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("textbox", { name: /^Name/ })).toHaveAttribute(
      "aria-describedby",
      "name-error",
    );
  });

  it("never claims a valid message was sent", () => {
    render(<ContactForm email="" />);

    fireEvent.change(screen.getByRole("textbox", { name: /^Name/ }), {
      target: { value: "Taylor Example" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /^Email address/ }), {
      target: { value: "taylor@example.com" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /^Subject/ }), {
      target: { value: "Portfolio question" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: /^Message/ }), {
      target: { value: "I would like to discuss your portfolio." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Review message" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Your message was not sent because a contact email has not been configured yet.",
    );
  });
});
