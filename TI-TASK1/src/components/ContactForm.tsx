import { useState, type ChangeEvent, type FormEvent } from "react";
import { profile } from "@/data/portfolio";

type FieldName = "name" | "email" | "subject" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const fieldOrder: FieldName[] = ["name", "email", "subject", "message"];

const initialValues: Values = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, such as name@example.com.";
  }
  if (!values.subject.trim()) {
    errors.subject = "Enter a subject.";
  }
  if (!values.message.trim()) {
    errors.message = "Enter a message.";
  }

  return errors;
}

const controlClass =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:border-ring aria-[invalid=true]:border-destructive";

export function ContactForm({ email = profile.email }: { email?: string } = {}) {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const updateField = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("");
  };

  const validateField = (field: FieldName) => {
    const fieldError = validate(values)[field];
    setErrors((current) => {
      if (!fieldError) {
        const next = { ...current };
        delete next[field];
        return next;
      }
      return { ...current, [field]: fieldError };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalidField = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalidField) {
      setStatus("Your message was not sent. Review the fields marked below.");
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    if (!email) {
      setStatus("Your message was not sent because a contact email has not been configured yet.");
      return;
    }

    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      values.message.trim(),
    ].join("\n");
    const mailto = `mailto:${email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus(
      "Your email app may open with this message. It is not sent until you review and send it there.",
    );
  };

  const fields: {
    name: FieldName;
    label: string;
    type: "text" | "email" | "textarea";
    autoComplete?: string;
    maxLength: number;
    placeholder: string;
  }[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
      autoComplete: "name",
      maxLength: 100,
      placeholder: "Your name",
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
      autoComplete: "email",
      maxLength: 254,
      placeholder: "you@example.com",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      maxLength: 150,
      placeholder: "What would you like to discuss?",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      maxLength: 2000,
      placeholder: "Write your message",
    },
  ];

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
      className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7"
    >
      <h3 id="contact-form-heading" className="text-xl font-semibold">
        Send a message
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fields marked required must be completed. After a contact email is configured, this form can
        prepare a draft in your email app; it does not send messages itself.
      </p>

      <div aria-live="polite" className="min-h-6">
        {status ? (
          <p
            role="status"
            className="mt-4 rounded-lg border border-border bg-muted p-3 text-sm text-foreground"
          >
            {status}
          </p>
        ) : null}
      </div>

      <div className="mt-3 space-y-4">
        {fields.map((field) => {
          const error = errors[field.name];
          const errorId = `${field.name}-error`;
          const sharedProps = {
            id: field.name,
            name: field.name,
            required: true,
            maxLength: field.maxLength,
            value: values[field.name],
            onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              updateField(field.name, event.target.value),
            onBlur: () => validateField(field.name),
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? errorId : undefined,
            className: controlClass,
            placeholder: field.placeholder,
            autoComplete: field.autoComplete,
          };

          return (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium">
                {field.label} <span aria-hidden="true">*</span>
                <span className="sr-only"> (required)</span>
              </label>
              {field.type === "textarea" ? (
                <textarea {...sharedProps} rows={5} />
              ) : (
                <input {...sharedProps} type={field.type} />
              )}
              {error ? (
                <p id={errorId} className="mt-1.5 text-sm font-medium text-destructive">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Review message
      </button>
    </form>
  );
}
