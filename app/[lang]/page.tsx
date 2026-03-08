import styles from "./home.module.css";
import LanguageSwitcher from "@/components/home/LanguageSwitcher";
import { getDictionary } from "@/lib/i18n/dictionaries";
import MenuWrapper from "@/components/home/MenuWrapper";
import IdeasBox from "@/components/home/IdeasBox";
import ExperimentsBox from "@/components/home/ExperimentsBox";
import AboutBox from "@/components/home/AboutBox";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className={styles.container}>
      <aside className={styles.sidebar}>
        <LanguageSwitcher />

        <h1 className={styles.title}>
          {dict.title.first}{" "}
          <span className={styles.paradoxes}> {dict.title.second}</span>{" "}
        </h1>

        <p className={styles.hero}>{dict.hero}</p>
        <MenuWrapper dict={dict} />
      </aside>

      <section className={styles.content}>
        <IdeasBox dict={dict.ideas} />
        <ExperimentsBox dict={dict.experiments} />
        <AboutBox dict={dict.about} />
      </section>
    </main>
  );
}
