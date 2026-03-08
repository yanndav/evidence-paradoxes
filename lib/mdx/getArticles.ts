import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content/ideas");

export async function getArticles(lang: "fr" | "en") {
  const slugs = fs.readdirSync(contentDir);

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const mod = await import(`@/content/ideas/${slug}/${lang}.mdx`);

        return {
          slug,
          ...mod.metadata,
        };
      } catch {
        return null;
      }
    }),
  );

  return articles.filter(Boolean);
}
