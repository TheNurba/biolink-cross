import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function WarmTexture({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper:
          "bg-gradient-to-br from-[#6b5848] via-[#4a3c30] to-[#2e251d] text-[#f3ece2]",
        backdrop: (
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, #00000033 0px, #00000033 2px, transparent 2px, transparent 9px)",
            }}
          />
        ),
        name: "text-xl font-bold tracking-wide text-[#f3ece2]",
        bio: "text-[#f3ece2]/65",
        avatarRing: "ring-2 ring-[#f3ece2]/30",
        social: "text-[#f3ece2]",
        button:
          "rounded-full bg-white/15 text-[#f3ece2] backdrop-blur-sm hover:bg-white/25",
        footer: "text-[#f3ece2]/35",
      }}
    />
  );
}
