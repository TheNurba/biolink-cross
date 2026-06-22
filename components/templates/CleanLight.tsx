import type { ProfileData } from "@/lib/types";
import { BaseTemplate } from "./parts/BaseTemplate";

export default function CleanLight({ data }: { data: ProfileData }) {
  return (
    <BaseTemplate
      data={data}
      theme={{
        wrapper: "bg-[#eceef1] text-slate-800",
        name: "text-xl font-bold tracking-tight text-slate-900",
        bio: "text-slate-500",
        avatarRing: "ring-2 ring-slate-300",
        social: "text-slate-700",
        button:
          "rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 hover:shadow-md",
        footer: "text-slate-400",
      }}
    />
  );
}
