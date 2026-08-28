"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Label, Input, Textarea } from "./Field";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="display-sm">Thank you — we'll be in touch.</h3>
        <p className="mt-2 text-ink-700">
          A LotusCare care coordinator will reach out within one business day to
          arrange your free home assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Your name
          </Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div>
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <Label htmlFor="message" required>
          How can we help?
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us a little about the care you're looking for."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-blush-700">
          {error} Please try again, or call us at any time.
        </p>
      )}

      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request my free assessment"}
        </Button>
      </div>
    </form>
  );
}
