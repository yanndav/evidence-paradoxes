import { compileMDX } from "next-mdx-remote/rsc";
import { getArticle } from "@/lib/mdx/getArticle";

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ lang: "fr" | "en"; slug: string }>;
}) {
  const { lang, slug } = await params;

  const source = await getArticle("ideas", slug, lang);

  const { content } = await compileMDX({
    source,
  });

  return <article>{content}</article>;
}
