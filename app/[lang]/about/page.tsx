import MainWrapper from "@/components/pages/MainWrapper";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function About({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <MainWrapper active={"about"} dict={dict}>
      <h1>About</h1>

      <p>Research, tools and reflections on science and public decision.</p>
    </MainWrapper>
  );
}
