import { compileMDX } from "next-mdx-remote/rsc";
import { getArticle } from "@/lib/mdx/getArticle";
import MainWrapper from "@/components/pages/MainWrapper";

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

  return (
    <MainWrapper>
      <article>{content}</article>
    </MainWrapper>
  );
}
