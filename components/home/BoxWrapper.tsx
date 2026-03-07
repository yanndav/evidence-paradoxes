import styles from "@/app/[lang]/home.module.css";

const BoxWrapper = ({ dict, children }) => {
  return (
    <div id={dict.title} className={styles.box}>
      <h2 className={styles.boxtitle}>{dict.title}</h2>
      {dict.subtitle && (
        <div className={styles.boxsubtitle}>{dict.subtitle}</div>
      )}
      {children}
    </div>
  );
};

export default BoxWrapper;
