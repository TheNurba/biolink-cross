import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function MidnightDark({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper: "bg-[#0a0a0a] text-white",
        name: "text-xl font-bold tracking-tight",
        bio: "text-white/55",
        avatarRing: "ring-2 ring-white/15",
        social: "text-white",
        button:
          "rounded-xl bg-[#1c1c1e] text-white shadow-sm hover:bg-[#262629]",
        footer: "text-white/30",
      }}
    />
  );
}
