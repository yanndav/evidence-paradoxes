import MainWrapper from "@/components/pages/MainWrapper";
import PostWrapper from "@/components/notes/PostWrapper";
import { getDictionary } from "@/lib/i18n/dictionaries";
import Sections from "@/components/notes/Sections";
import styles from "./notes.module.css";

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ lang: "fr" | "en"; slug: string }>;
}) {
  const { lang, slug } = await params;

  const dict = await getDictionary(lang);

  const article = await import(`@/content/notes/${slug}/${lang}.mdx`);
  const metadata = article.metadata;
  const Post = article.default;

  return (
    <MainWrapper dict={dict} active={"notes"}>
      <Sections metadata={metadata} />
      <PostWrapper>
        <Post />
      </PostWrapper>
    </MainWrapper>
  );
}
