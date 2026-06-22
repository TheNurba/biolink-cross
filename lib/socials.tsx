import type { ComponentType } from "react";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaThreads,
  FaXTwitter,
  FaFacebookF,
  FaTelegram,
  FaWhatsapp,
  FaGithub,
  FaMusic,
  FaGlobe,
} from "react-icons/fa6";
import type { SocialPlatform } from "./types";

interface SocialMeta {
  label: string;
  Icon: ComponentType<{ className?: string }>;
}

export const SOCIALS: Record<SocialPlatform, SocialMeta> = {
  tiktok: { label: "TikTok", Icon: FaTiktok },
  instagram: { label: "Instagram", Icon: FaInstagram },
  youtube: { label: "YouTube", Icon: FaYoutube },
  spotify: { label: "Spotify", Icon: FaSpotify },
  threads: { label: "Threads", Icon: FaThreads },
  music: { label: "Music", Icon: FaMusic },
  twitter: { label: "X / Twitter", Icon: FaXTwitter },
  facebook: { label: "Facebook", Icon: FaFacebookF },
  telegram: { label: "Telegram", Icon: FaTelegram },
  whatsapp: { label: "WhatsApp", Icon: FaWhatsapp },
  github: { label: "GitHub", Icon: FaGithub },
  website: { label: "Website", Icon: FaGlobe },
};

export const SOCIAL_KEYS = Object.keys(SOCIALS) as SocialPlatform[];
