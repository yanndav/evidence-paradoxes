"use client";

import styles from "@/app/[lang]/home.module.css";
export default function Menu({ dict, active, homepage }) {
  const links = {
    ideas: {
      true: `#${dict.ideas.title}`,
      false: `/${dict.lang}/ideas`,
    },
    experiments: {
      true: `#${dict.experiments.title}`,
      false: `/${dict.lang}/experiments`,
    },
    about: {
      true: `#${dict.about.title}`,
      false: `/${dict.lang}/about`,
    },
  };
  return (
    <div className={`${styles.navbar} ${!homepage && styles.navmain}`}>
      <div className={styles.navsection}>
        <svg className={styles.svg}>
          <circle
            r="8"
            cx="10"
            cy="10"
            className={
              active === dict.ideas.title ? styles.active : styles.inactive
            }
          />
        </svg>
        <a
          href={links.ideas[homepage]}
          className={
            active === dict.ideas.title ? styles.active : styles.inactive
          }
        >
          {dict.ideas.title}
        </a>
      </div>
      <div className={styles.navsection}>
        <svg className={styles.svg}>
          <circle
            r="8"
            cx="10"
            cy="10"
            className={
              active === dict.experiments.title
                ? styles.active
                : styles.inactive
            }
          />
        </svg>
        <a
          href={links.experiments[homepage]}
          className={
            active === dict.experiments.title ? styles.active : styles.inactive
          }
        >
          {dict.experiments.title}
        </a>
      </div>{" "}
      <div className={styles.navsection}>
        <svg className={styles.svg}>
          <circle
            r="8"
            cx="10"
            cy="10"
            className={
              active === dict.about.title ? styles.active : styles.inactive
            }
          />
        </svg>
        <a
          href={links.about[homepage]}
          className={
            active === dict.about.title ? styles.active : styles.inactive
          }
        >
          {dict.about.title}
        </a>
      </div>
    </div>
  );
}
