import Link from "next/link";

const TOP_NAV_LINKS = [
  { label: "Docs", href: "/docs", active: true },
  { label: "Playground", href: "/playground", active: false },
  { label: "Features", href: "/features", active: false },
  { label: "Adapters", href: "/adapters", active: false },
  { label: "Pricing", href: "/pricing", active: false },
];

export function TopNavigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-10">
          <Link href="/docs" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#8b7bf7] text-sm font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              C
            </div>
            <span className="text-[26px] font-semibold tracking-[-0.03em] text-white">
              CtxIQ
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {TOP_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition ${
                  link.active
                    ? "text-white"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden w-[420px] items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/35 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] lg:flex">
            <svg
              viewBox="0 0 18 18"
              className="mr-2 h-4 w-4 shrink-0 fill-current text-white/35"
              aria-hidden="true"
            >
              <path d="M12.5 11.1 17 15.6 15.6 17l-4.5-4.5a7 7 0 1 1 1.4-1.4ZM7.5 13A5.5 5.5 0 1 0 7.5 2a5.5 5.5 0 0 0 0 11Z" />
            </svg>
            Search documentation...
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 p-2.5 text-white/65 transition hover:bg-white/5 hover:text-white"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M10 0.8A9.2 9.2 0 0 0 7.1 18.7c.45.08.62-.2.62-.44v-1.55c-2.53.55-3.06-1.08-3.06-1.08-.41-1.03-1-1.3-1-1.3-.82-.57.06-.56.06-.56.9.06 1.37.94 1.37.94.8 1.37 2.1.98 2.61.75.08-.58.31-.98.56-1.21-2-.23-4.1-1-4.1-4.44 0-.98.35-1.78.93-2.41-.1-.23-.4-1.15.09-2.4 0 0 .76-.24 2.47.92a8.6 8.6 0 0 1 4.5 0c1.7-1.16 2.46-.92 2.46-.92.5 1.25.2 2.17.1 2.4.58.63.93 1.43.93 2.41 0 3.45-2.1 4.2-4.1 4.43.32.28.6.83.6 1.67v2.47c0 .24.17.53.62.45A9.2 9.2 0 0 0 10 .8Z" />
            </svg>
          </button>

          <button
            type="button"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
