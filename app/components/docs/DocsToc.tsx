"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsCatalog } from "@/lib/docs-data";

export function DocsToc() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2] ?? "";
  const currentDoc = docsCatalog.find((doc) => doc.slug === slug) ?? null;

  return (
    <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-4 py-8">
      <div className="space-y-8">
        <div className="px-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/22">
            On this page
          </p>
          {currentDoc ? (
            <p className="mt-4 text-sm font-medium leading-6 text-white/55">
              {currentDoc.title}
            </p>
          ) : null}
        </div>

        <div className="space-y-3 border-l border-white/10 pl-4">
          {currentDoc ? (
            currentDoc.toc.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-white/38 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))
          ) : (
            docsCatalog.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="block text-sm text-white/38 transition hover:text-white"
              >
                {doc.title}
              </Link>
            ))
          )}
        </div>

        <div className="rounded-[18px] border border-white/10 bg-[#0a0a0d] p-4">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/28">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live debugger
          </div>
          <p className="text-sm leading-6 text-white/48">
            Chat with our AI to troubleshoot your context configuration in
            real time.
          </p>
          <button
            type="button"
            className="mt-5 w-full rounded-lg border border-white/10 bg-[#1b2030] px-4 py-2.5 text-sm font-semibold text-[#d4dbff] transition hover:bg-[#23283b]"
          >
            Launch Console
          </button>
        </div>
      </div>
    </div>
  );
}
