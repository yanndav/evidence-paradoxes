"use client";
import styles from "@/app/[lang]/notes/[slug]/notes.module.css";
import { useScrollSpy } from "@/hooks/home/useScrollSpy";

const Sections = ({ metadata }) => {
  const active =
    metadata.sections && useScrollSpy(metadata.sections.map((sec) => sec.id));

  return (
    <div className={styles.sidebar}>
      <h2>{metadata.title}</h2>
      {metadata.sections &&
        metadata.sections.map((sec) => (
          <a
            href={`#${sec.id}`}
            key={sec.id}
            className={`${styles.sectionbar} ${sec.id == active && styles.active}`}
          >
            {sec.title}
          </a>
        ))}
    </div>
  );
};

export default Sections;
