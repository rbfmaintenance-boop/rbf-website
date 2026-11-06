// Sends a website form to /api/submit, which emails it to the company inbox.

const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // hosting limit per request is 4.5 MB
const MAX_SIDE = 1600;

export type FormKind = "contact" | "service" | "careers";

async function shrinkPhoto(file: File): Promise<File> {
  if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type)) return file;
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const blob: Blob | null = await new Promise((res) => canvas.toBlob(res, "image/jpeg", 0.8));
    if (!blob || blob.size >= file.size) return file;
    return new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" });
  } catch {
    return file;
  }
}

export async function submitForm(
  kind: FormKind,
  form: HTMLFormElement,
  startedAt: number,
  photos: File[] = []
): Promise<void> {
  const data = new FormData(form);
  data.delete("photos");
  data.set("kind", kind);
  data.set("elapsed", String(Date.now() - startedAt));

  let total = 0;
  for (const photo of photos) {
    const small = await shrinkPhoto(photo);
    total += small.size;
    data.append("photos", small, small.name);
  }
  if (total > MAX_TOTAL_BYTES) {
    throw new Error(
      "Your photos are too large to send together. Try fewer photos, or email them to info@rbfmaintenance.com."
    );
  }

  const res = await fetch("/api/submit", { method: "POST", body: data });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(
      body?.error ||
        "Something went wrong and your message wasn't sent. Please try again or email info@rbfmaintenance.com."
    );
  }
}
