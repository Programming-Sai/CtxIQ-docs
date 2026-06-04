"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { docsCatalog } from "@/lib/docs-data";

const SIDEBAR_GROUPS = [
  {
    label: "Foundation",
    slugs: ["introduction", "quick-start"],
  },
  {
    label: "Core Architecture",
    slugs: ["session-management", "token-budgeting", "semantic-pruning", "adapter-integration"],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2] ?? "introduction";

  return (
    <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-auto px-4 py-8">
      <div className="space-y-8 pl-1">
        {SIDEBAR_GROUPS.map((group) => (
          <section key={group.label}>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/22">
              {group.label}
            </div>
            <div className="space-y-2">
              {docsCatalog
                .filter((doc) => group.slugs.includes(doc.slug))
                .map((doc) => {
                  const active = doc.slug === slug;

                  return (
                    <Link
                      key={doc.slug}
                      href={`/docs/${doc.slug}`}
                      className={`block rounded-[10px] border px-4 py-2.5 text-sm transition ${
                        active
                          ? "border-[#b6c2ff] bg-[#12131a] text-[#c8d0ff] shadow-[inset_0_0_0_1px_rgba(182,194,255,0.15)]"
                          : "border-transparent text-white/48 hover:border-white/10 hover:bg-white/[0.03] hover:text-white/80"
                      }`}
                    >
                      {doc.title}
                    </Link>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
