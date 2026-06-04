import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { MDXRemote } from "next-mdx-remote/rsc";

import { mdxComponents } from "@/app/components/docs/MdxComponents";
import { getAllDocs, getDocBySlug } from "@/lib/docs";

export function generateStaticParams() {
  return getAllDocs().map((doc) => ({ slug: doc.slug }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const docs = getAllDocs();
  const currentIndex = docs.findIndex((doc) => doc.slug === slug);
  const doc = getDocBySlug(slug);

  if (!doc || currentIndex < 0) {
    notFound();
  }

  const nextDoc = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-[760px]">
      <div className="mb-10 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/24">
        <Link href="/docs" className="transition hover:text-white/55">
          Documentation
        </Link>
        <KeyboardArrowRightRoundedIcon style={{ fontSize: 16 }} />
          <span>{doc.slug.replace(/-/g, " ")}</span>
      </div>

      <header className="pb-10">
        <h1 className="max-w-3xl text-[60px] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[72px]">
          {doc.title === "Mastering AI Context"
            ? "Context orchestration for the agentic era."
            : doc.title}
        </h1>
        <p className="mt-6 max-w-3xl text-[18px] leading-8 text-white/45">
          {doc.description}
        </p>
      </header>

      <article className="space-y-10 border-t border-white/10 pt-10">
        <div className="prose prose-invert max-w-none prose-headings:tracking-[-0.04em] prose-h2:mt-12 prose-h2:text-[28px] prose-h2:font-semibold prose-h2:text-white prose-p:text-white/52 prose-p:leading-8 prose-li:text-white/52 prose-strong:text-white prose-a:text-[#cfd6ff] prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={doc.content} components={mdxComponents} />
        </div>

        {nextDoc ? (
          <div className="pt-10">
            <div className="w-fit rounded-[18px] border border-white/10 bg-[#0b0c10] px-6 py-5 transition hover:bg-[#10131b]">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/24">
                Next
              </div>
              <Link
                href={`/docs/${nextDoc.slug}`}
                className="inline-flex items-center gap-2 text-[18px] text-white/72 transition hover:text-white"
              >
                <span>{nextDoc.title}</span>
                <ArrowBackRoundedIcon className="rotate-180 text-white/45" />
              </Link>
            </div>
          </div>
        ) : null}
      </article>

      <footer className="mt-24 border-t border-white/10 py-8">
        <div className="flex flex-col gap-4 text-sm text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 CtxIQ Orchestration Labs.</p>
          <div className="flex gap-8">
            <Link href="#" className="transition hover:text-white/55">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white/55">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
