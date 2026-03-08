import React from "react";
import styles from "@/app/[lang]/ideas/[slug]/idea.module.css";

const Sections = ({ metadata }) => {
  return (
    <div className={styles.sidebar}>
      {metadata.sections.map((sec) => (
        <a href={`#${sec.id}`} key={sec.id}>
          {sec.title}
        </a>
      ))}
    </div>
  );
};

export default Sections;
