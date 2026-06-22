import type { ProfileData } from "./types";
import { DEMO_PROFILE } from "./types";

const DRAFT_KEY = "biolink:draft";

/** UTF-8 safe base64 (works in browser). */
function toBase64(str: string): string {
  if (typeof window === "undefined") {
    return Buffer.from(str, "utf-8").toString("base64");
  }
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

function fromBase64(b64: string): string {
  if (typeof window === "undefined") {
    return Buffer.from(b64, "base64").toString("utf-8");
  }
  const binary = atob(b64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** URL-safe base64 of the profile JSON. */
export function encodeProfile(data: ProfileData): string {
  return toBase64(JSON.stringify(data))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function decodeProfile(encoded: string): ProfileData | null {
  try {
    let b64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const parsed = JSON.parse(fromBase64(b64));
    if (!parsed || typeof parsed.name !== "string") return null;
    return { ...DEMO_PROFILE, ...parsed } as ProfileData;
  } catch {
    return null;
  }
}

export function saveDraft(data: ProfileData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  } catch {
    /* storage full / disabled — ignore */
  }
}

export function loadDraft(): ProfileData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    return { ...DEMO_PROFILE, ...JSON.parse(raw) } as ProfileData;
  } catch {
    return null;
  }
}
