import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Emails website form submissions to the company inbox through SMTP2GO.
// Set these in Vercel > Project > Settings > Environment Variables:
//   SMTP2GO_API_KEY   (required)
//   FORM_TO_EMAIL     (optional, default info@rbfmaintenance.com)
//   FORM_FROM_EMAIL   (optional, default RBF Website <website@rbfmaintenance.com>;
//                      the domain must be a verified sender domain in SMTP2GO)

type Field = { name: string; label: string; required?: boolean; max: number };

const FORMS: Record<string, { title: string; fields: Field[]; photos?: boolean }> = {
  contact: {
    title: "Website contact message",
    fields: [
      { name: "name", label: "Name", required: true, max: 100 },
      { name: "company", label: "Company", max: 150 },
      { name: "email", label: "Email", required: true, max: 200 },
      { name: "phone", label: "Phone", max: 40 },
      { name: "service", label: "Service needed", required: true, max: 60 },
      { name: "message", label: "Message", required: true, max: 5000 },
    ],
  },
  service: {
    title: "Service request",
    photos: true,
    fields: [
      { name: "company-name", label: "Company", required: true, max: 150 },
      { name: "contact-name", label: "Contact name", required: true, max: 100 },
      { name: "phone", label: "Phone", required: true, max: 40 },
      { name: "email", label: "Email", required: true, max: 200 },
      { name: "property-address", label: "Property address", required: true, max: 300 },
      { name: "service", label: "Type of service", max: 60 },
      { name: "urgency", label: "Urgency", max: 60 },
      { name: "description", label: "Work needed", required: true, max: 2000 },
    ],
  },
  careers: {
    title: "Job application",
    fields: [
      { name: "name", label: "Name", required: true, max: 100 },
      { name: "email", label: "Email", required: true, max: 200 },
      { name: "role", label: "Trade / role", max: 150 },
      { name: "experience", label: "Experience", max: 5000 },
    ],
  },
};

const PHOTO_TYPES = /^image\/(jpeg|png|webp|gif|heic|heif)$/;
const MAX_PHOTOS = 4;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();
const fail = (error: string, status = 400) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return fail("We couldn't read your form. Please try again.");
  }

  const form = FORMS[String(data.get("kind") || "")];
  if (!form) return fail("Unknown form.");

  // Spam traps: a hidden field people never fill in, and a minimum time on the page.
  // Bots get a normal-looking success so they don't adapt.
  const elapsed = Number(data.get("elapsed") || 0);
  if (String(data.get("website") || "") !== "" || elapsed < 3000) {
    return NextResponse.json({ ok: true });
  }

  const values: { label: string; value: string }[] = [];
  for (const f of form.fields) {
    const value = String(data.get(f.name) || "").trim();
    if (f.required && !value) return fail(`Please fill in ${f.label.toLowerCase()}.`);
    if (value.length > f.max) return fail(`${f.label} is too long.`);
    values.push({ label: f.label, value });
  }

  const email = String(data.get("email") || "").trim();
  if (!EMAIL_RE.test(email)) return fail("Please enter a valid email address.");

  const attachments: { filename: string; fileblob: string; mimetype: string }[] = [];
  if (form.photos) {
    const photos = data.getAll("photos").filter((p): p is File => p instanceof File && p.size > 0);
    if (photos.length > MAX_PHOTOS) return fail(`Please attach up to ${MAX_PHOTOS} photos.`);
    for (const p of photos) {
      if (!PHOTO_TYPES.test(p.type)) return fail("Photos must be JPG, PNG, WEBP, GIF or HEIC.");
      if (p.size > MAX_PHOTO_BYTES) return fail("Each photo must be 5MB or smaller.");
      attachments.push({
        filename: oneLine(p.name).replace(/[^\w.\- ]/g, "_").slice(0, 100) || "photo.jpg",
        fileblob: Buffer.from(await p.arrayBuffer()).toString("base64"),
        mimetype: p.type,
      });
    }
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  if (!apiKey) {
    console.error("SMTP2GO_API_KEY is not set; form submission not sent.");
    return fail(
      "Our form is temporarily unavailable. Please email info@rbfmaintenance.com and we'll respond promptly.",
      503
    );
  }

  const who =
    oneLine(String(data.get("company-name") || data.get("name") || data.get("contact-name") || "")).slice(0, 80);
  const urgency = oneLine(String(data.get("urgency") || ""));
  const subject = `${form.title}: ${who}${urgency.startsWith("Emergency") ? " (EMERGENCY)" : ""}`;

  const text = values.map((v) => `${v.label}: ${v.value || "-"}`).join("\n\n");
  const html = `<h2>${escapeHtml(form.title)}</h2>${values
    .map(
      (v) =>
        `<p><strong>${escapeHtml(v.label)}:</strong><br>${escapeHtml(v.value || "-").replace(/\n/g, "<br>")}</p>`
    )
    .join("")}${attachments.length ? `<p>${attachments.length} photo(s) attached.</p>` : ""}`;

  try {
    const res = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", "X-Smtp2go-Api-Key": apiKey },
      body: JSON.stringify({
        sender: process.env.FORM_FROM_EMAIL || "RBF Website <website@rbfmaintenance.com>",
        to: [process.env.FORM_TO_EMAIL || "info@rbfmaintenance.com"],
        subject,
        text_body: text,
        html_body: html,
        custom_headers: [{ header: "Reply-To", value: oneLine(email) }],
        ...(attachments.length ? { attachments } : {}),
      }),
    });
    const out = await res.json().catch(() => null);
    if (!res.ok || !out?.data?.succeeded) {
      console.error("SMTP2GO send failed", res.status, JSON.stringify(out?.data ?? out));
      throw new Error("send failed");
    }
  } catch {
    return fail(
      "Something went wrong and your message wasn't sent. Please try again or email info@rbfmaintenance.com.",
      502
    );
  }

  return NextResponse.json({ ok: true });
}
