export type DocTocItem = {
  label: string;
  href: string;
};

export type DocSummary = {
  slug: string;
  title: string;
  description: string;
  badge: string;
};

export type DocCatalogEntry = DocSummary & {
  fileName: string;
  toc: DocTocItem[];
};

export const docsCatalog: DocCatalogEntry[] = [
  {
    slug: "introduction",
    title: "Mastering AI Context",
    description:
      "CtxIQ is a sophisticated orchestration layer for long-term memory, session state, and token optimization for large language models.",
    badge: "v1.2.0-beta",
    fileName: "Introduction.mdx",
    toc: [
      { label: "Introduction", href: "#introduction" },
      { label: "Live Debugger", href: "#live-debugger" },
      { label: "Core Concepts", href: "#core-concepts" },
      { label: "Quick Start Guide", href: "#quick-start-guide" },
    ],
  },
  {
    slug: "quick-start",
    title: "Quick Start",
    description:
      "Get CtxIQ running in under five minutes. This guide walks you from installation to your first managed AI session.",
    badge: "⚡ 5 min setup",
    fileName: "Ouick-Start.mdx",
    toc: [
      { label: "Installation", href: "#installation" },
      { label: "Basic Setup", href: "#basic-setup" },
      { label: "First Session", href: "#first-session" },
      { label: "Next Steps", href: "#next-steps" },
    ],
  },
  {
    slug: "session-management",
    title: "Session Management",
    description:
      "CtxIQ's Virtual Session Layer persists conversational state across API calls, eliminating manual message history management.",
    badge: "Core Concept",
    fileName: "Session-Mgt.mdx",
    toc: [
      { label: "Overview", href: "#overview" },
      { label: "createSession()", href: "#createsession" },
      { label: "Session lifecycle", href: "#session-lifecycle" },
      { label: "Persistence modes", href: "#persistence-modes" },
      { label: "Accessing session state", href: "#accessing-session-state" },
    ],
  },
  {
    slug: "token-budgeting",
    title: "Token Budgeting",
    description:
      "Prevent runaway context costs with smart budgeting. CtxIQ tracks token consumption in real-time and applies configurable limits automatically.",
    badge: "Core Concept",
    fileName: "Token-Mgt.mdx",
    toc: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Hard vs soft limits", href: "#hard-vs-soft-limits" },
      { label: "Budget API", href: "#budget-api" },
      { label: "Cost estimation", href: "#cost-estimation" },
      { label: "Per-message budgets", href: "#per-message-budgets" },
    ],
  },
  {
    slug: "semantic-pruning",
    title: "Semantic Pruning",
    description:
      "Unlike FIFO truncation, CtxIQ uses vector similarity to keep only the most relevant messages in the active context window.",
    badge: "Core Concept",
    fileName: "Semantic-Pruning.mdx",
    toc: [
      { label: "FIFO vs semantic", href: "#fifo-vs-semantic" },
      { label: "How it scores", href: "#how-it-scores" },
      { label: "Tuning", href: "#tuning" },
      { label: "Hybrid mode", href: "#hybrid-mode" },
      { label: "Inspecting pruning events", href: "#inspecting-pruning-events" },
    ],
  },
  {
    slug: "adapter-integration",
    title: "Adapter Integration",
    description:
      "Standardized connectors for every major LLM provider. Switch between OpenAI, Anthropic, and Llama without touching your context logic.",
    badge: "Core Concept",
    fileName: "Adapter-Integration.mdx",
    toc: [
      { label: "Available adapters", href: "#available-adapters" },
      { label: "Usage", href: "#usage" },
      { label: "Per-session adapter override", href: "#per-session-adapter-override" },
      { label: "Custom adapters", href: "#custom-adapters" },
      { label: "IAdapter interface", href: "#iadapter-interface" },
    ],
  },
];
