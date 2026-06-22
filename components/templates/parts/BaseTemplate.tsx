import type { ReactNode } from "react";
import type { ProfileData } from "@/lib/types";
import { SOCIALS } from "@/lib/socials";

export interface ThemeTokens {
  /** Classes for the full-bleed page wrapper (background + base text color). */
  wrapper: string;
  /** Optional decorative background layer rendered behind content. */
  backdrop?: ReactNode;
  /** Heading font + styling for the display name. */
  name: string;
  /** Bio paragraph styling. */
  bio: string;
  /** Avatar ring / border styling. */
  avatarRing: string;
  /** Social icon color styling. */
  social: string;
  /** Link button styling (background, border, text, radius, hover/active). */
  button: string;
  /** Footer "made with" text color. */
  footer: string;
}

export function BaseTemplate({
  data,
  theme,
}: {
  data: ProfileData;
  theme: ThemeTokens;
}) {
  return (
    <div className={`relative flex min-h-full w-full flex-col ${theme.wrapper}`}>
      {theme.backdrop}
      <div className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 pb-10 pt-14">
        {/* Avatar */}
        <div
          className={`h-24 w-24 overflow-hidden rounded-full ${theme.avatarRing}`}
        >
          {data.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={data.avatarUrl}
              alt={data.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-black/20 text-3xl">
              👤
            </div>
          )}
        </div>

        {/* Name + bio */}
        <h1 className={`mt-5 text-center ${theme.name}`}>{data.name}</h1>
        {data.bio && (
          <p className={`mt-2 max-w-xs text-center text-sm ${theme.bio}`}>
            {data.bio}
          </p>
        )}

        {/* Socials */}
        {data.socials.length > 0 && (
          <div className="mt-5 flex items-center gap-5">
            {data.socials.map((s, i) => {
              const meta = SOCIALS[s.platform];
              if (!meta) return null;
              const Icon = meta.Icon;
              return (
                <a
                  key={i}
                  href={s.url || "#"}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={meta.label}
                  className={`transition-transform hover:scale-110 active:scale-95 ${theme.social}`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        )}

        {/* Links */}
        <div className="mt-8 flex w-full flex-col gap-3.5">
          {data.links.map((l, i) => (
            <a
              key={i}
              href={l.url || "#"}
              target="_blank"
              rel="noreferrer noopener"
              style={{ animationDelay: `${i * 60}ms` }}
              className={`block w-full animate-fade-up px-5 py-4 text-center text-[15px] font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 ${theme.button}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex-1" />
        <p className={`mt-10 text-center text-xs ${theme.footer}`}>
          BioLink менен жасалган
        </p>
      </div>
    </div>
  );
}
