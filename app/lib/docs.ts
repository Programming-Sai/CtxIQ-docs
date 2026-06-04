import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_PATH = path.join(process.cwd(), "content/docs");

export type DocMeta = {
  title: string;
  description?: string;
};

export function getAllDocs() {
  const files = fs.readdirSync(DOCS_PATH);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const source = fs.readFileSync(path.join(DOCS_PATH, file), "utf8");

    const { data } = matter(source);

    return {
      slug,
      ...(data as DocMeta),
    };
  });
}

export function getDocBySlug(slug: string) {
  const fullPath = path.join(DOCS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(source);

  return {
    meta: data as DocMeta,
    content,
  };
}
