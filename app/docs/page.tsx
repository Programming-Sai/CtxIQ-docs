import Link from "next/link";
import { ArrowRight, FileText, BookOpen, Zap, Database } from "lucide-react";
import { getAllDocs } from "@/lib/docs";

export default function DocsPage() {
  const docs = getAllDocs();
  const [introduction, quickStart, ...rest] = docs;

  return (
    <div className="mx-auto max-w-7xl">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(184,196,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(225deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70">
              <FileText style={{ fontSize: 16 }} />
              <span>Documentation</span>
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
                A focused docs system for the parts that matter.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68">
                Every page below is wired to a real MDX source file, so the docs
                site behaves like a product surface instead of a placeholder.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <Zap style={{ fontSize: 18 }} />
                <span>Fast to scan</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <BookOpen style={{ fontSize: 18 }} />
                <span>MDX-backed content</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <Database style={{ fontSize: 18 }} />
                <span>SSG-ready routes</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-[24px] border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              Docs snapshot
            </div>
            <div className="space-y-3">
              {docs.slice(0, 3).map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-[#b8c4ff]/30 hover:bg-white/10"
                >
                  <div>
                    <div className="mb-2 inline-flex rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
                      {doc.badge}
                    </div>
                    <div className="text-base font-semibold text-white">
                      {doc.title}
                    </div>
                  </div>
                  <ArrowRight
                    style={{ fontSize: 18 }}
                    className="mt-1 text-white/40 transition group-hover:text-white"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/50">
                Start here
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                The primary entry points for getting oriented.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[introduction, quickStart].filter(Boolean).map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-6 transition duration-200 hover:border-[#b8c4ff]/30 hover:bg-white/[0.075] hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
                  {doc.badge}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {doc.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {doc.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b8c4ff]">
                  <span>Open guide</span>
                  <ArrowRight style={{ fontSize: 18 }} />
                </div>
              </Link>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-6 transition duration-200 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
                  {doc.badge}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {doc.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {doc.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition group-hover:text-white">
                  <span>Open guide</span>
                  <ArrowRight style={{ fontSize: 18 }} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              How it is wired
            </div>
            <p className="text-sm leading-7 text-white/68">
              The docs index links directly to server-rendered MDX pages, so the
              route structure stays simple and the content remains real.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              All guides
            </div>
            <div className="space-y-2">
              {docs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-transparent px-3 py-3 text-sm text-white/70 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  <span>{doc.title}</span>
                  <ArrowRight style={{ fontSize: 16 }} />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
