import fs from "fs";
import path from "path";

import matter from "gray-matter";

import {
  docsCatalog,
  type DocCatalogEntry,
  type DocSummary,
} from "@/lib/docs-data";

export type DocRecord = DocCatalogEntry & {
  content: string;
};

const DOCS_DIR = path.join(process.cwd(), "app", "content", "docs");

function getDocPath(fileName: string) {
  return path.join(DOCS_DIR, fileName);
}

function readDocSource(fileName: string) {
  return fs.readFileSync(getDocPath(fileName), "utf8");
}

function readDocMeta(fileName: string): DocSummary {
  const source = readDocSource(fileName);
  const { data } = matter(source);
  const meta = data as Partial<DocSummary>;
  const catalogEntry = docsCatalog.find((doc) => doc.fileName === fileName);

  return {
    slug: catalogEntry?.slug ?? fileName.replace(/\.mdx$/i, "").toLowerCase(),
    title: meta.title ?? catalogEntry?.title ?? fileName,
    description: meta.description ?? catalogEntry?.description ?? "",
    badge: meta.badge ?? catalogEntry?.badge ?? "",
  };
}

export function getAllDocs(): DocSummary[] {
  return docsCatalog.map(({ fileName }) => readDocMeta(fileName));
}

export function getDocBySlug(slug: string): DocRecord | null {
  const entry = docsCatalog.find((doc) => doc.slug === slug) ?? null;

  if (!entry) {
    return null;
  }

  const source = readDocSource(entry.fileName);
  const { content, data } = matter(source);
  const meta = data as Partial<DocSummary>;

  return {
    ...entry,
    title: meta.title ?? entry.title,
    description: meta.description ?? entry.description,
    badge: meta.badge ?? entry.badge,
    content,
  };
}
