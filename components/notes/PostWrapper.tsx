import React from "react";
import styles from "@/app/[lang]/notes/[slug]/notes.module.css";

const PostWrapper = ({ children }) => {
  return <div className={styles.post}>{children}</div>;
};

export default PostWrapper;
