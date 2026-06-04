import Link from "next/link";
import * as React from "react";
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

type CalloutType = "tip" | "warning" | "success" | "note";

function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const styles: Record<CalloutType, string> = {
    note: "border-white/10 bg-white/5 text-white/80",
    tip: "border-[#4fdbc8]/20 bg-[#4fdbc8]/10 text-white/90",
    warning: "border-[#f59e0b]/20 bg-[#f59e0b]/10 text-white/90",
    success: "border-[#22c55e]/20 bg-[#22c55e]/10 text-white/90",
  };

  return (
    <div className={`my-8 rounded-xl border px-5 py-4 ${styles[type]}`}>
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
        {type}
      </div>
      <div className="space-y-4 text-sm leading-7">{children}</div>
    </div>
  );
}

type TabProps = {
  label: string;
  children: ReactNode;
};

function Tab({ children }: TabProps) {
  return <>{children}</>;
}

function Tabs({ children }: { children: ReactNode }) {
  const items = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> => {
      if (!React.isValidElement(child)) {
        return false;
      }

      const props = child.props as Partial<TabProps>;
      return typeof props.label === "string";
    },
  );
  if (!items.length) {
    return null;
  }

  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-[#0e0e0e]">
      <div className="flex flex-wrap gap-2 border-b border-white/10 p-2">
        {items.map((item) => (
          <div
            key={item.props.label}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
          >
            {item.props.label}
          </div>
        ))}
      </div>
      <div className="space-y-6 p-5">
        {items.map((item) => (
          <section key={item.props.label} className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">
              {item.props.label}
            </div>
            <div>{item.props.children}</div>
          </section>
        ))}
      </div>
    </div>
  );
}

type StepProps = {
  title: string;
  children: ReactNode;
};

function Step({ title, children }: StepProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-white/75">
        {title}
      </div>
      <div className="space-y-4 text-sm leading-7 text-white/80">{children}</div>
    </section>
  );
}

function Steps({ children }: { children: ReactNode }) {
  return <div className="my-8 space-y-4">{children}</div>;
}

type PageNavProps = {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
};

function PageNav({ prev, next }: PageNavProps) {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">
            Previous
          </div>
          <div className="mt-2 text-base font-semibold text-white">{prev.label}</div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
        >
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">
            Next
          </div>
          <div className="mt-2 text-base font-semibold text-white">{next.label}</div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

function Debugger() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]">
      <div className="border-b border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/50">
        Live Debugger
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/60 p-4">
          <div className="mb-2 text-xs uppercase tracking-[0.12em] text-white/40">Session</div>
          <div className="font-mono text-sm text-white/85">sess_921az02</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/60 p-4">
          <div className="mb-2 text-xs uppercase tracking-[0.12em] text-white/40">Token Budget</div>
          <div className="font-mono text-sm text-white/85">34 / 200 tokens</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/60 p-4 md:col-span-2">
          <div className="mb-2 text-xs uppercase tracking-[0.12em] text-white/40">Recent Input</div>
          <p className="text-sm leading-7 text-white/75">
            Explain the architecture and how pruning behaves under load.
          </p>
        </div>
      </div>
    </div>
  );
}

function ConceptGrid({ children }: { children: ReactNode }) {
  return <div className="my-8 grid gap-4 md:grid-cols-2">{children}</div>;
}

function ConceptCard({
  title,
  href,
  icon,
  children,
}: {
  icon: string;
  title: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#b8c4ff]/30 hover:bg-white/10"
    >
      <div className="mb-3 inline-flex rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-xs uppercase tracking-[0.12em] text-white/60">
        {icon}
      </div>
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-7 text-white/70">{children}</div>
    </Link>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mb-8 scroll-mt-24 text-5xl font-bold tracking-tight text-white"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-6 mt-16 scroll-mt-24 text-3xl font-semibold text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-4 mt-10 scroll-mt-24 text-xl font-semibold text-white"
      {...props}
    />
  ),
  p: (props) => <p className="mb-6 leading-8 text-zinc-300" {...props} />,
  ul: (props) => (
    <ul className="mb-6 list-disc pl-6 text-zinc-300" {...props} />
  ),
  li: (props) => <li className="mb-2" {...props} />,
  pre: (props) => (
    <pre
      className="my-8 overflow-x-auto rounded-xl border border-white/10 bg-[#0e0e0e] p-6"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-white/10 px-1.5 py-0.5" {...props} />
  ),
  table: (props) => (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white" {...props} />
  ),
  td: (props) => (
    <td className="border-b border-white/10 px-4 py-3 align-top text-sm text-zinc-300" {...props} />
  ),
  Callout,
  Tabs,
  Tab,
  Steps,
  Step,
  PageNav,
  Debugger,
  ConceptGrid,
  ConceptCard,
};

export default mdxComponents;
