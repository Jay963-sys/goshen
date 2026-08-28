import { Resend } from "resend";
import { site } from "@/content/site";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const FROM = process.env.FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`;
const INBOX = process.env.LEADS_INBOX ?? site.email;

type Field = { label: string; value: string };

function toHtml(title: string, fields: Field[]): string {
  const rows = fields
    .filter((f) => f.value)
    .map(
      (f) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6b615a;font:600 13px sans-serif;vertical-align:top">${f.label}</td><td style="padding:6px 0;color:#241f1c;font:14px sans-serif">${escape(
          f.value,
        )}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:sans-serif;max-width:560px"><h2 style="color:#123029">${title}</h2><table>${rows}</table></div>`;
}

function escape(s: string): string {
  return s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c]!);
}

export async function sendLeadEmail(
  title: string,
  fields: Field[],
  replyTo?: string,
): Promise<{ sent: boolean }> {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping send. Payload:", fields);
    return { sent: false };
  }
  await resend.emails.send({
    from: FROM,
    to: INBOX,
    subject: title,
    html: toHtml(title, fields),
    replyTo,
  });
  return { sent: true };
}
