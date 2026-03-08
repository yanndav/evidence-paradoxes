import React from "react";
import styles from "@/app/[lang]/home.module.css";

const Title = ({ dict, homepage }) => {
  return (
    <h1 className={`${styles.title} ${!homepage && styles.titlemain}`}>
      <span>{dict.title.first} </span>
      <span className={styles.paradoxes}> {dict.title.second}</span>
    </h1>
  );
};

export default Title;
