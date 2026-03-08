import MainWrapper from "@/components/pages/MainWrapper";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function Experiments({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <MainWrapper active={"experiments"} dict={dict}>
      <h1>Experiments</h1>

      <p>Tools and prototypes.</p>
    </MainWrapper>
  );
}
