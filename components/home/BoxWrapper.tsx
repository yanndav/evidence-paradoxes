import styles from "@/app/[lang]/home.module.css";
import Link from "next/link";

const BoxWrapper = ({ dict, children }) => {
  return (
    <div id={dict.title} className={styles.box}>
      <Link
        href={dict.link}
        className={`${styles.boxtitle} ${(dict.title == "about" || dict.title == "à propos") && styles.inactivelink}`}
      >
        <h2 className={styles.boxtitle}>{dict.title}</h2>
      </Link>
      {dict.subtitle && (
        <div className={styles.boxsubtitle}>{dict.subtitle}</div>
      )}
      {children}
    </div>
  );
};

export default BoxWrapper;
