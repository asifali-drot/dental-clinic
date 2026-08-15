"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
  date: string;
  treatment: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  date: "",
  treatment: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!/^[0-9+\s-]{7,15}$/.test(values.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.treatment) next.treatment = "Please select a treatment.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // NOTE: no booking backend is connected yet. This is a frontend-only
    // form ready to be wired up to Supabase, Resend, WhatsApp, or a CRM.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setForm(initialState);
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-teal/20 bg-white px-8 py-14 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal" />
        <h3 className="font-heading text-xl font-bold text-navy">
          Request Received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thank you &mdash; your appointment request has been submitted.
          Our team will contact you shortly to confirm a time. For anything
          urgent, please call or message us on WhatsApp directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-blue hover:text-navy"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-navy/8 bg-white p-6 shadow-[0_25px_50px_-25px_rgba(18,59,93,0.2)] sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="03XX XXXXXXX"
            className={inputClass(!!errors.phone)}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="Preferred Date" htmlFor="date" error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputClass(!!errors.date)}
            aria-invalid={!!errors.date}
          />
        </Field>

        <Field
          label="Preferred Treatment"
          htmlFor="treatment"
          error={errors.treatment}
        >
          <select
            id="treatment"
            name="treatment"
            value={form.treatment}
            onChange={(e) => update("treatment", e.target.value)}
            className={inputClass(!!errors.treatment)}
            aria-invalid={!!errors.treatment}
          >
            <option value="">Select a treatment</option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>

        <Field
          label="Message (optional)"
          htmlFor="message"
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us a little about what you need, or any questions you have."
            className={cn(inputClass(false), "resize-none")}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition-all hover:-translate-y-0.5 hover:bg-teal/90 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        Request an Appointment
      </button>
      <p className="mt-3 text-xs text-muted">
        Submitting this form does not confirm your appointment. Our team will
        reach out to finalise your booking.
      </p>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-offwhite/60 px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:bg-white focus:outline-none",
    hasError
      ? "border-red-300 focus:border-red-400"
      : "border-navy/12 focus:border-teal"
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-navy"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}
