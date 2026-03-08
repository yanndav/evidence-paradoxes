import React from "react";
import Link from "next/link";
import MainWrapper from "@/components/pages/MainWrapper";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getArticles } from "@/lib/mdx/getArticles";

const Ideas = async ({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const articles = await getArticles(lang);

  return (
    <MainWrapper dict={dict} active={"ideas"}>
      <h1>Idées</h1>
      <div>Ceci est la page par défaut des idées</div>
      <div>
        {articles.map((article) => (
          <div key={article.slug}>
            <h2>
              <Link href={`/${lang}/ideas/${article.slug}`}>
                {article.title}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </MainWrapper>
  );
};

export default Ideas;
