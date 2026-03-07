"use client";
import { usePathname } from "next/navigation";
import styles from "@/app/[lang]/home.module.css";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const language = segments[1];
  console.log(language);

  const switchLang = (segments: string[], lang: string) => {
    segments[1] = lang;

    return segments.join("/");
  };

  return (
    <div className={styles.lngDiv}>
      <a
        href={switchLang(segments, "fr")}
        className={`${styles.lngBtn} ${language == "en" && styles.lngBtnOff}`}
      >
        FR
      </a>

      <a
        href={switchLang(segments, "en")}
        className={`${styles.lngBtn} ${language == "fr" && styles.lngBtnOff}`}
      >
        EN
      </a>
    </div>
  );
}
