import Link from "next/link";
import { TEMPLATES } from "@/components/templates/registry";
import { DEMO_PROFILE } from "@/lib/types";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-600/30 via-purple-700/10 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
            ✨ Бир шилтемеде — бардыгы
          </span>
          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Сенин bio-link
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
              баракчаң
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-balance text-white/55">
            Дизайнды танда, маалыматыңды толтур, шилтемеңди бөлүш. Каттоо керек
            эмес — баары браузерде.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/editor"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
            >
              Баракча түзүү →
            </Link>
            <a
              href="#templates"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5"
            >
              Дизайндар
            </a>
          </div>
        </div>
      </section>

      {/* Templates gallery */}
      <section id="templates" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
          Даяр дизайндар
        </h2>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {TEMPLATES.map((t) => {
            const { Component } = t;
            return (
              <Link
                key={t.id}
                href={`/editor?template=${t.id}`}
                className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 transition-all hover:ring-white/30"
              >
                <div className="aspect-[9/16] w-full overflow-hidden">
                  {/* Scaled-down live preview */}
                  <div className="pointer-events-none h-full w-full origin-top-left">
                    <Component data={{ ...DEMO_PROFILE, template: t.id }} />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                  <span className="text-sm font-semibold">{t.name}</span>
                  <span className="translate-x-2 text-xs font-medium text-white/0 transition-all group-hover:translate-x-0 group-hover:text-white/90">
                    Тандоо →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        BioLink Builder · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
