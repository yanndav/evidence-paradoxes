import React from "react";
import styles from "./mainwrapper.module.css";
import NavbarWrapper from "./NavbarWrapper";
const MainWrapper = ({ children }) => {
  return (
    <div className={styles.mainwrapper}>
      <NavbarWrapper />
      {children}
    </div>
  );
};

export default MainWrapper;
