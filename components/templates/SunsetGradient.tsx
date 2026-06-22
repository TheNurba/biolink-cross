import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function SunsetGradient({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper:
          "bg-gradient-to-b from-sky-200 via-purple-200 to-orange-400 text-slate-800",
        name: "text-xl font-bold tracking-tight text-slate-900",
        bio: "text-slate-700",
        avatarRing: "ring-4 ring-white/70",
        social: "text-slate-800",
        button:
          "rounded-2xl bg-white text-slate-900 shadow-lg shadow-orange-900/10 hover:shadow-xl",
        footer: "text-slate-700/60",
      }}
    />
  );
}
