import type { ComponentType } from "react";

export type SocialPlatform =
  | "tiktok"
  | "instagram"
  | "youtube"
  | "spotify"
  | "threads"
  | "music"
  | "twitter"
  | "facebook"
  | "telegram"
  | "whatsapp"
  | "github"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface PageLink {
  label: string;
  url: string;
}

export interface ProfileData {
  template: string;
  name: string;
  bio: string;
  avatarUrl: string;
  socials: SocialLink[];
  links: PageLink[];
}

export interface TemplateMeta {
  id: string;
  name: string;
  /** Background swatch used in the gallery card chrome. */
  swatch: string;
  Component: ComponentType<{ data: ProfileData }>;
}

export const DEMO_PROFILE: ProfileData = {
  template: "midnight",
  name: "Магазин Тренда",
  bio: "Тренддеги эң мыкты табылгалар. Күн сайын жаңы шилтемелер ✨",
  avatarUrl:
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=256&h=256&fit=crop&crop=faces",
  socials: [
    { platform: "tiktok", url: "https://tiktok.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "youtube", url: "https://youtube.com" },
    { platform: "spotify", url: "https://spotify.com" },
  ],
  links: [
    { label: "Жаңы коллекция 🔥", url: "https://example.com/new" },
    { label: "Арзандатуулар -50%", url: "https://example.com/sale" },
    { label: "Биз менен байланыш", url: "https://example.com/contact" },
  ],
};
