import type { ReactNode } from "react";
import { DocsSidebar } from "../components/docs/DocsSidebar";
import { DocsToc } from "../components/docs/DocsToc";
import { TopNavigation } from "../components/docs/TopNavigation";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,96,255,0.32),transparent_14%),radial-gradient(circle_at_top_right,rgba(28,71,255,0.26),transparent_18%),radial-gradient(circle_at_top_right,rgba(36,161,255,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(111,96,255,0.16),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_11%),radial-gradient(circle_at_top_right,rgba(120,120,255,0.14),transparent_18%),radial-gradient(circle_at_top_right,rgba(29,78,216,0.16),transparent_24%)] opacity-30 blur-3xl" />
      <TopNavigation />

      <div className="relative pt-16">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-[1280px] grid-cols-1 xl:grid-cols-[236px_minmax(0,1fr)_236px]">
          <aside className="hidden border-r border-white/10 xl:block">
            <DocsSidebar />
          </aside>

          <main className="min-w-0 px-6 py-10 lg:px-8 xl:px-10">
            <div className="relative">{children}</div>
          </main>

          <aside className="hidden border-l border-white/10 xl:block">
            <DocsToc />
          </aside>
        </div>
      </div>

      {/* <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-[1600px] xl:pl-[256px] xl:pr-[256px]">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#b8c4ff] text-sm font-bold text-[#002486]">
                  C
                </div>
                <span className="text-lg font-bold text-[#b8c4ff]">CtxIQ</span>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/60">
                Advanced AI context orchestration for high-scale developer
                teams.
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white/80">
                Product
              </p>
              <div className="space-y-2 text-sm text-white/60">
                <p>Pricing</p>
                <p>Changelog</p>
                <p>Status</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white/80">
                Legal
              </p>
              <div className="space-y-2 text-sm text-white/60">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Security</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-white/80">
                Connect
              </p>
              <div className="space-y-2 text-sm text-white/60">
                <p>GitHub</p>
                <p>Discord</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-white/40">
            © 2024 CtxIQ Orchestration Labs. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
