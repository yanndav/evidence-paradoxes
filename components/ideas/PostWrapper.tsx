import React from "react";
import styles from "@/app/[lang]/ideas/[slug]/idea.module.css";

const PostWrapper = ({ children }) => {
  return <div className={styles.post}>{children}</div>;
};

export default PostWrapper;
