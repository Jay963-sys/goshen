import { NextResponse } from "next/server";
import { z } from "zod";
import { db, schema } from "@/db";
import { sendLeadEmail } from "@/lib/email";

const Schema = z.object({
  name: z.string().min(2).max(160),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(5).max(4000),
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
  const { name, email, phone, message } = parsed.data;

  try {
    if (db) {
      await db.insert(schema.enquiries).values({ name, email, phone: phone || null, message });
    }
    await sendLeadEmail(
      "New free-assessment enquiry",
      [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: phone ?? "" },
        { label: "Message", value: message },
      ],
      email,
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] failed:", err);
    return NextResponse.json(
      { error: "We couldn't send that just now." },
      { status: 500 },
    );
  }
}
