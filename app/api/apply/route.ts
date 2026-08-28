import { NextResponse } from "next/server";
import { z } from "zod";
import { db, schema } from "@/db";
import { sendLeadEmail } from "@/lib/email";

const Schema = z.object({
  name: z.string().min(2).max(160),
  email: z.string().email().max(200),
  phone: z.string().min(5).max(40),
  position: z.string().min(2).max(80),
  employmentType: z.string().max(40).optional().or(z.literal("")),
  experience: z.string().max(200).optional().or(z.literal("")),
  credentials: z.string().max(200).optional().or(z.literal("")),
  message: z.string().max(4000).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = Schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }
  const v = parsed.data;

  try {
    if (db) {
      await db.insert(schema.applications).values({
        name: v.name,
        email: v.email,
        phone: v.phone,
        position: v.position,
        employmentType: v.employmentType || null,
        experience: v.experience || null,
        credentials: v.credentials || null,
        message: v.message || null,
      });
    }
    await sendLeadEmail(
      `New job application — ${v.position}`,
      [
        { label: "Name", value: v.name },
        { label: "Email", value: v.email },
        { label: "Phone", value: v.phone },
        { label: "Position", value: v.position },
        { label: "Availability", value: v.employmentType ?? "" },
        { label: "Experience", value: v.experience ?? "" },
        { label: "Credentials", value: v.credentials ?? "" },
        { label: "Message", value: v.message ?? "" },
      ],
      v.email,
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[apply] failed:", err);
    return NextResponse.json(
      { error: "We couldn't submit that just now." },
      { status: 500 },
    );
  }
}
