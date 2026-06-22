import Link from "next/link";
import { getTemplate } from "@/components/templates/registry";
import { decodeProfile } from "@/lib/encode";

export default function ViewPage({
  searchParams,
}: {
  searchParams: { d?: string };
}) {
  const data = searchParams.d ? decodeProfile(searchParams.d) : null;

  if (!data) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0a0a0a] px-6 text-center text-white">
        <p className="text-lg font-semibold">Баракча табылган жок</p>
        <p className="max-w-xs text-sm text-white/50">
          Шилтеме туура эмес же эскирген. Өзүңдүн баракчаңды түзүп көр.
        </p>
        <Link
          href="/editor"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
        >
          Баракча түзүү
        </Link>
      </main>
    );
  }

  const { Component } = getTemplate(data.template);

  return (
    <main className="h-screen overflow-y-auto">
      <Component data={data} />
    </main>
  );
}
