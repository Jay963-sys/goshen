"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Label, Input, Textarea, Select } from "./Field";
import { positionOptions, employmentTypes } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-sage-50 p-8 text-center ring-1 ring-pine-900/8">
        <h3 className="display-sm">Application received.</h3>
        <p className="mt-2 text-ink-700">
          Thank you for your interest in joining LotusCare. Our team reviews every
          application and will reach out if there's a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Full name
          </Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="phone" required>
            Phone
          </Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div>
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="position" required>
            Position
          </Label>
          <Select id="position" name="position" required defaultValue="">
            <option value="" disabled>
              Select a role…
            </option>
            {positionOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="employmentType">Availability</Label>
          <Select id="employmentType" name="employmentType" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {employmentTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="experience">Years of experience</Label>
          <Input id="experience" name="experience" placeholder="e.g. 3 years" />
        </div>
        <div>
          <Label htmlFor="credentials">Certifications / license</Label>
          <Input id="credentials" name="credentials" placeholder="e.g. CNA, RN, LPN" />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Anything else you'd like us to know?</Label>
        <Textarea id="message" name="message" />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-blush-700">
          {error} Please try again, or email us your details directly.
        </p>
      )}

      <div>
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Submitting…" : "Submit application"}
        </Button>
      </div>
    </form>
  );
}
