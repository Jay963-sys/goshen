"use client";

import { useState } from "react";

const ROLES = [
  "LPN (Licensed Practical Nurse)",
  "RN (Registered Nurse)",
  "CAREGIVER",
  "CNA (Certified Nursing Assistant)",
  "Other",
] as const;

const SCHEDULE_TYPES = ["Full-time", "Part-time", "PRN/As-needed"] as const;

const SHIFT_PREFERENCES = [
  "Day Shift (7:00 AM - 3:00 PM)",
  "Evening Shift (3:00 PM - 11:00 PM)",
  "Night Shift (11:00 PM - 7:00 AM)",
  "Flexible/Rotating Shifts",
] as const;

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const DAY_PARTS = ["Morning", "Afternoon", "Evening"] as const;

type Availability = Record<string, Record<string, boolean>>;

type Status = "idle" | "submitting" | "success" | "error";

export function ApplicationForm({ siteName }: { siteName: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [role, setRole] = useState<string>("");
  const [otherRole, setOtherRole] = useState("");
  const [scheduleType, setScheduleType] = useState<string>("");
  const [shiftPrefs, setShiftPrefs] = useState<string[]>([]);
  const [availability, setAvailability] = useState<Availability>({});

  function toggleShiftPref(pref: string) {
    setShiftPrefs((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  }

  function toggleAvailability(day: string, part: string) {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], [part]: !prev[day]?.[part] },
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      siteName,
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      role,
      otherRole: role === "Other" ? otherRole : undefined,
      scheduleType,
      shiftPrefs,
      availability,
      earliestStartDate: formData.get("earliestStartDate"),
    };

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setRole("");
      setOtherRole("");
      setScheduleType("");
      setShiftPrefs([]);
      setAvailability({});
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] bg-pine-800 px-8 py-12 text-center text-white sm:px-12">
        <h3 className="display-sm text-white">Application received.</h3>
        <p className="lede mx-auto mt-3 max-w-xl text-sage-200">
          Thanks for applying to {siteName} — we&apos;ll review your application and be in
          touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-pine-900/10 sm:p-12"
    >
      <div className="border-b border-pine-900/10 pb-8">
        <p className="eyebrow text-pine-700">Careers with {siteName}</p>
        <h2 className="display-sm mt-2 text-pine-900">Apply now</h2>
        <p className="lede mt-3 max-w-xl text-ink-600">
          Fill out the form below and we&apos;ll be in touch. Fields marked required
          help us match you to the right role faster.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName">
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full rounded-xl border border-pine-900/15 bg-cream/40 px-4 py-3 text-ink-800 outline-none transition-colors focus:border-pine-800 focus:ring-2 focus:ring-pine-800/20"
            autoComplete="name"
          />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-pine-900/15 bg-cream/40 px-4 py-3 text-ink-800 outline-none transition-colors focus:border-pine-800 focus:ring-2 focus:ring-pine-800/20"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-pine-900/15 bg-cream/40 px-4 py-3 text-ink-800 outline-none transition-colors focus:border-pine-800 focus:ring-2 focus:ring-pine-800/20"
            autoComplete="tel"
          />
        </Field>
        <Field label="Earliest available start date" htmlFor="earliestStartDate">
          <input
            id="earliestStartDate"
            name="earliestStartDate"
            type="date"
            required
            className="w-full rounded-xl border border-pine-900/15 bg-cream/40 px-4 py-3 text-ink-800 outline-none transition-colors focus:border-pine-800 focus:ring-2 focus:ring-pine-800/20"
          />
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-pine-900">Role You Are Applying For</legend>
        <div className="mt-3 space-y-2">
          {ROLES.map((r) => (
            <label key={r} className="flex items-center gap-3 text-ink-700">
              <input
                type="radio"
                name="role"
                value={r}
                checked={role === r}
                onChange={() => setRole(r)}
                required
                className="h-4 w-4 accent-pine-800"
              />
              {r}
            </label>
          ))}
        </div>
        {role === "Other" && (
          <input
            type="text"
            value={otherRole}
            onChange={(e) => setOtherRole(e.target.value)}
            placeholder="Please specify the role"
            required
            className="w-full rounded-xl border border-pine-900/15 bg-cream/40 px-4 py-3 text-ink-800 outline-none transition-colors focus:border-pine-800 focus:ring-2 focus:ring-pine-800/20 mt-3"
          />
        )}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-pine-900">
          What type of employment schedule are you primarily seeking?
        </legend>
        <div className="mt-3 space-y-2">
          {SCHEDULE_TYPES.map((s) => (
            <label key={s} className="flex items-center gap-3 text-ink-700">
              <input
                type="radio"
                name="scheduleType"
                value={s}
                checked={scheduleType === s}
                onChange={() => setScheduleType(s)}
                required
                className="h-4 w-4 accent-pine-800"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-pine-900">
          Please indicate your preferred work shifts (select all that apply)
        </legend>
        <div className="mt-3 space-y-2">
          {SHIFT_PREFERENCES.map((pref) => (
            <label key={pref} className="flex items-center gap-3 text-ink-700">
              <input
                type="checkbox"
                checked={shiftPrefs.includes(pref)}
                onChange={() => toggleShiftPref(pref)}
                className="h-4 w-4 accent-pine-800"
              />
              {pref}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="min-w-0">
        <legend className="text-sm font-semibold text-pine-900">
          Which days of the week are you available to work? (select all that apply)
        </legend>
        <div className="mt-4 w-full min-w-0 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium text-ink-500"></th>
                {DAY_PARTS.map((part) => (
                  <th key={part} className="pb-2 text-center font-medium text-ink-500">
                    {part}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DAYS.map((day) => (
                <tr key={day} className="border-t border-pine-900/10">
                  <td className="py-3 text-ink-700">{day}</td>
                  {DAY_PARTS.map((part) => (
                    <td key={part} className="text-center">
                      <input
                        type="checkbox"
                        checked={Boolean(availability[day]?.[part])}
                        onChange={() => toggleAvailability(day, part)}
                        className="h-4 w-4 accent-pine-800"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </fieldset>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine-800 px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-pine-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-pine-900">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
