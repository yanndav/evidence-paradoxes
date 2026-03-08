import MainWrapper from "@/components/pages/MainWrapper";
import PostWrapper from "@/components/ideas/PostWrapper";
import { getDictionary } from "@/lib/i18n/dictionaries";
import Sections from "@/components/ideas/Sections";
import styles from "./idea.module.css";

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ lang: "fr" | "en"; slug: string }>;
}) {
  const { lang, slug } = await params;

  const dict = await getDictionary(lang);

  const article = await import(`@/content/ideas/${slug}/${lang}.mdx`);
  const metadata = article.metadata;
  const Post = article.default;

  console.log(metadata);
  return (
    <MainWrapper dict={dict} active={"ideas"}>
      <Sections metadata={metadata} />
      <PostWrapper>
        <Post />
      </PostWrapper>
    </MainWrapper>
  );
}
