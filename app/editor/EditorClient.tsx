"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TEMPLATES, getTemplate } from "@/components/templates/registry";
import { PhoneFrame } from "@/components/PhoneFrame";
import { SOCIALS, SOCIAL_KEYS } from "@/lib/socials";
import { DEMO_PROFILE } from "@/lib/types";
import type { ProfileData, SocialPlatform } from "@/lib/types";
import { encodeProfile, loadDraft, saveDraft } from "@/lib/encode";

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30";
const labelClass = "mb-1.5 block text-xs font-medium text-white/50";

export default function EditorClient() {
  const params = useSearchParams();
  const [data, setData] = useState<ProfileData>(DEMO_PROFILE);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);

  // Initialize from draft / query param (client only).
  useEffect(() => {
    const draft = loadDraft();
    const queryTemplate = params.get("template");
    const base = draft ?? DEMO_PROFILE;
    setData(
      queryTemplate
        ? { ...base, template: getTemplate(queryTemplate).id }
        : base
    );
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist to localStorage.
  useEffect(() => {
    if (ready) saveDraft(data);
  }, [data, ready]);

  const Preview = useMemo(
    () => getTemplate(data.template).Component,
    [data.template]
  );

  function update<K extends keyof ProfileData>(key: K, value: ProfileData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function handleShare() {
    const url = `${window.location.origin}/view?d=${encodeProfile(data)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Шилтемени көчүрүп ал:", url);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0a0a0a]/80 px-5 py-3 backdrop-blur">
        <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white">
          ← BioLink
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={ready ? `/view?d=${encodeProfile(data)}` : "#"}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/5"
          >
            Алдын ала кароо
          </a>
          <button
            onClick={handleShare}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            {copied ? "Көчүрүлдү ✓" : "Шилтемени бөлүшүү"}
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 lg:grid-cols-[1fr_minmax(280px,360px)]">
        {/* Form */}
        <div className="order-2 space-y-8 lg:order-1">
          {/* Template picker */}
          <section>
            <h2 className="mb-3 text-sm font-semibold text-white/80">Дизайн</h2>
            <div className="flex flex-wrap gap-2">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => update("template", t.id)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    data.template === t.id
                      ? "border-white bg-white text-black"
                      : "border-white/15 text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full ring-1 ring-white/20"
                    style={{ background: t.swatch }}
                  />
                  {t.name}
                </button>
              ))}
            </div>
          </section>

          {/* Profile */}
          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-white/80">Профиль</h2>
            <div>
              <label className={labelClass}>Аты</label>
              <input
                className={fieldClass}
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Магазин Тренда"
              />
            </div>
            <div>
              <label className={labelClass}>Био</label>
              <textarea
                className={`${fieldClass} resize-none`}
                rows={2}
                value={data.bio}
                onChange={(e) => update("bio", e.target.value)}
                placeholder="Өзүң жөнүндө кыскача…"
              />
            </div>
            <div>
              <label className={labelClass}>Аватар сүрөтүнүн шилтемеси (URL)</label>
              <input
                className={fieldClass}
                value={data.avatarUrl}
                onChange={(e) => update("avatarUrl", e.target.value)}
                placeholder="https://…/photo.jpg"
              />
            </div>
          </section>

          {/* Socials */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white/80">
                Социалдык тармактар
              </h2>
              <button
                onClick={() =>
                  update("socials", [
                    ...data.socials,
                    { platform: "instagram", url: "" },
                  ])
                }
                className="text-xs font-semibold text-fuchsia-400 hover:text-fuchsia-300"
              >
                + кошуу
              </button>
            </div>
            {data.socials.map((s, i) => (
              <div key={i} className="flex gap-2">
                <select
                  className={`${fieldClass} w-36 shrink-0`}
                  value={s.platform}
                  onChange={(e) => {
                    const next = [...data.socials];
                    next[i] = { ...s, platform: e.target.value as SocialPlatform };
                    update("socials", next);
                  }}
                >
                  {SOCIAL_KEYS.map((k) => (
                    <option key={k} value={k} className="bg-[#1a1a1a]">
                      {SOCIALS[k].label}
                    </option>
                  ))}
                </select>
                <input
                  className={fieldClass}
                  value={s.url}
                  placeholder="https://…"
                  onChange={(e) => {
                    const next = [...data.socials];
                    next[i] = { ...s, url: e.target.value };
                    update("socials", next);
                  }}
                />
                <button
                  onClick={() =>
                    update(
                      "socials",
                      data.socials.filter((_, j) => j !== i)
                    )
                  }
                  className="shrink-0 rounded-lg px-2 text-white/40 hover:bg-white/5 hover:text-red-400"
                  aria-label="Өчүрүү"
                >
                  ✕
                </button>
              </div>
            ))}
          </section>

          {/* Links */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white/80">Шилтемелер</h2>
              <button
                onClick={() =>
                  update("links", [...data.links, { label: "", url: "" }])
                }
                className="text-xs font-semibold text-fuchsia-400 hover:text-fuchsia-300"
              >
                + кошуу
              </button>
            </div>
            {data.links.map((l, i) => (
              <div
                key={i}
                className="space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <div className="flex items-center gap-2">
                  <input
                    className={fieldClass}
                    value={l.label}
                    placeholder="Баскычтын аталышы"
                    onChange={(e) => {
                      const next = [...data.links];
                      next[i] = { ...l, label: e.target.value };
                      update("links", next);
                    }}
                  />
                  <button
                    onClick={() =>
                      update(
                        "links",
                        data.links.filter((_, j) => j !== i)
                      )
                    }
                    className="shrink-0 rounded-lg px-2 text-white/40 hover:bg-white/5 hover:text-red-400"
                    aria-label="Өчүрүү"
                  >
                    ✕
                  </button>
                </div>
                <input
                  className={fieldClass}
                  value={l.url}
                  placeholder="https://…"
                  onChange={(e) => {
                    const next = [...data.links];
                    next[i] = { ...l, url: e.target.value };
                    update("links", next);
                  }}
                />
              </div>
            ))}
          </section>
        </div>

        {/* Live preview */}
        <div className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 text-center text-xs font-medium text-white/40">
              Жандуу алдын ала кароо
            </p>
            <div className="mx-auto max-w-[300px]">
              <PhoneFrame>
                <Preview data={data} />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
