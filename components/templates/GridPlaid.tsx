import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function GridPlaid({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper: "bg-[#3b1f24] text-[#f5e6d3]",
        backdrop: (
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        ),
        name: "text-xl font-bold tracking-tight text-[#f5e6d3]",
        bio: "text-[#f5e6d3]/70",
        avatarRing: "ring-2 ring-[#f5e6d3]/30",
        social: "text-[#f5e6d3]",
        button:
          "rounded-lg bg-[#f5e6d3] text-[#3b1f24] hover:bg-white",
        footer: "text-[#f5e6d3]/40",
      }}
    />
  );
}
