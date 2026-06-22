import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function VintageCream({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper: "bg-[#f7efe2] text-[#7a1f1f]",
        name: "font-serif text-2xl font-bold italic text-[#b91c1c]",
        bio: "font-serif italic text-[#7a1f1f]/70",
        avatarRing: "ring-2 ring-[#b91c1c]/40",
        social: "text-[#b91c1c]",
        button:
          "rounded-xl border-2 border-[#b91c1c]/40 bg-transparent text-[#b91c1c] hover:bg-[#b91c1c]/5",
        footer: "text-[#7a1f1f]/40",
      }}
    />
  );
}
