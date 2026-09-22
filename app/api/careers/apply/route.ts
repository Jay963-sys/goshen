// app/api/careers/apply/route.ts
//
// Sends a submitted application to the team's inbox using the existing
// sendLeadEmail helper in lib/email.ts — same pattern as the inquiries
// route, so it reuses FROM_EMAIL / LEADS_INBOX / RESEND_API_KEY as-is.

import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";

type Availability = Record<string, Record<string, boolean>>;

interface ApplicationPayload {
  siteName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  otherRole?: string;
  scheduleType?: string;
  shiftPrefs?: string[];
  availability?: Availability;
  earliestStartDate?: string;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ApplicationPayload;
    const {
      siteName,
      fullName,
      email,
      phone,
      role,
      otherRole,
      scheduleType,
      shiftPrefs,
      availability,
      earliestStartDate,
    } = data;

    if (!fullName || !email || !phone || !role) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const roleLabel = role === "Other" ? otherRole || "Other" : role;
    const shiftLine =
      Array.isArray(shiftPrefs) && shiftPrefs.length ? shiftPrefs.join(", ") : "";

    await sendLeadEmail(
      `New application: ${fullName}`,
      [
        { label: "Name", value: fullName },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Role", value: roleLabel },
        { label: "Schedule type", value: scheduleType ?? "" },
        { label: "Preferred shifts", value: shiftLine },
        { label: "Availability", value: formatAvailability(availability) },
        { label: "Earliest start date", value: earliestStartDate ?? "" },
      ],
      email
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Careers application submission failed", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function formatAvailability(availability?: Availability): string {
  if (!availability) return "";
  const days = Object.keys(availability);
  if (!days.length) return "";

  const lines = days
    .map((day) => {
      const parts = Object.entries(availability[day] || {})
        .filter(([, checked]) => checked)
        .map(([part]) => part);
      return parts.length ? `${day}: ${parts.join(", ")}` : null;
    })
    .filter(Boolean);

  // sendLeadEmail HTML-escapes field values, so avoid raw <br/> tags here —
  // join into a single readable line instead.
  return lines.length ? lines.join("; ") : "";
}
