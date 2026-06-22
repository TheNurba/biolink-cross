import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function PlumGradient({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper:
          "bg-gradient-to-b from-[#5b1742] via-[#3a0f2c] to-[#0f0710] text-[#f6e8f1]",
        name: "text-xl font-bold tracking-tight text-[#f6e8f1]",
        bio: "text-[#f6e8f1]/65",
        avatarRing: "ring-2 ring-[#f6e8f1]/25",
        social: "text-[#f6e8f1]",
        button:
          "rounded-full border border-[#f6e8f1]/40 bg-transparent text-[#f6e8f1] hover:bg-[#f6e8f1]/10",
        footer: "text-[#f6e8f1]/35",
      }}
    />
  );
}
