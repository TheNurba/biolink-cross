import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function ForestGreen({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper: "bg-[#13291f] text-[#e8f5e9]",
        name: "text-xl font-bold tracking-tight text-[#e8f5e9]",
        bio: "text-[#e8f5e9]/65",
        avatarRing: "ring-2 ring-[#a5d6a7]/40",
        social: "text-[#c8e6c9]",
        button:
          "rounded-full bg-[#dcedc8] text-[#1b3a2a] hover:bg-[#e8f5e9]",
        footer: "text-[#e8f5e9]/35",
      }}
    />
  );
}
