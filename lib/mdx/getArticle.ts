import fs from "fs/promises";
import path from "path";

export async function getArticle(
  category: string,
  slug: string,
  lang: "fr" | "en",
) {
  const filePath = path.join(
    process.cwd(),
    "content",
    category,
    slug,
    `${lang}.mdx`,
  );

  const source = await fs.readFile(filePath, "utf8");

  return source;
}
