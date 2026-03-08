"use client";

import styles from "@/app/[lang]/home.module.css";

export default function Menu({ dict, active }) {
  return (
    <div className={styles.navbar}>
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
          href={`#${dict.ideas.title}`}
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
          href={`#${dict.experiments.title}`}
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
          href={`#${dict.about.title}`}
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
